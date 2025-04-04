const inputResult = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const spriteContainer = document.getElementById("sprite-container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const API_BASE_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const resetDisplay = () => {
    const sprite = document.getElementById("sprite");
    if (sprite) sprite.remove();

    // Reset stats
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    pokemonTypes.innerHTML = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    specialAttack.textContent = "";
    specialDefense.textContent = "";
    speed.textContent = "";
};

// Fetch Pokémon Data
const fetchPokemonData = async (pokemonNameOrId) => {
    try {
        const res = await fetch(`${API_BASE_URL}${pokemonNameOrId.toLowerCase()}`);
        return await res.json();
    } catch (err) {
        console.log(`Pokemon not found: ${err}`);
        return null;
    }
};

// Get relevant Pokémon data
const extractPokemonInfo = (data) => {
    if (!data) return null;
    return {
        name: data.name.toUpperCase(),
        id: `#${data.id}`,
        weight: `Weight: ${data.weight}`,
        height: `Height: ${data.height}`,
        sprite: data.sprites.front_default,
        baseStat1: data.stats[0].base_stat,
        baseStat2: data.stats[1].base_stat,
        baseStat3: data.stats[2].base_stat,
        baseStat4: data.stats[3].base_stat,
        baseStat5: data.stats[4].base_stat,
        baseStat6: data.stats[5].base_stat,
        types: data.types,
    };
};

// Update the UI
const updatePokemonUI = (pokemon) => {
    if (!pokemon) {
        resetDisplay();
        alert("Pokémon not found");
        return;
    }

    // Top Container UI
    pokemonName.textContent = pokemon.name;
    pokemonId.textContent = pokemon.id;
    pokemonWeight.textContent = pokemon.weight;
    pokemonHeight.textContent = pokemon.height;
    spriteContainer.innerHTML = `<img id="sprite" src="${pokemon.sprite}">`;

    // Bottom Container UI
    hp.textContent = pokemon.baseStat1;
    attack.textContent = pokemon.baseStat2;
    defense.textContent = pokemon.baseStat3;
    specialAttack.textContent = pokemon.baseStat4;
    specialDefense.textContent = pokemon.baseStat5;
    speed.textContent = pokemon.baseStat6;

    pokemonTypes.innerHTML = pokemon.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
};

// Search function
const searchPokemon = async () => {
    const pokemonNameOrId = inputResult.value.trim();
    if (!pokemonNameOrId) return;

    const data = await fetchPokemonData(pokemonNameOrId);
    const pokemon = extractPokemonInfo(data);
    updatePokemonUI(pokemon);
};

// // Prevent form refresh
// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     searchPokemon();
// });

// Alternative: Attach event to button click
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    searchPokemon();
});
