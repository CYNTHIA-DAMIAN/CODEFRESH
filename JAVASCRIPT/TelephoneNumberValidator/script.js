// Select elements once (No need to fetch multiple times)
const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultDisplay = document.getElementById("results-div");

// Configuration for validation
const validationConfig = {
    validRegex: /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/
};
// const validationConfig = {
//     validRegex: /^1?[\s()-]*\d{3}[\s()-]*\d{3}[\s()-]*\d{4}$/,
// };

// ✅ Pure function: Validates the phone number
const validatePhoneNumber = (input) => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") { alert("Please provide a phone number.") };
    return validationConfig.validRegex.test(trimmedInput)
        ? { valid: true, message: `Valid US number: ${trimmedInput}` }
        : { valid: false, message: `Invalid US number: ${trimmedInput}` };
};

// ✅ Pure function: Generates message HTML
const formatMessage = ({ valid, message }) => 
    `<span style="color: ${valid ? 'green' : 'red'};">${message}</span>`;

// ✅ Side-effect function: Updates DOM (This is the only impure function)
const displayMessage = (message) => {
    resultDisplay.innerHTML = message;
};

// ✅ Side-effect function: Handles validation when button is clicked
const handleValidation = () => {
    const validationResult = validatePhoneNumber(userInput.value);
    displayMessage(formatMessage(validationResult));
};

// ✅ Side-effect function: Clears result div
const clearResults = () => displayMessage("");

// Event listeners (Only these interact with the DOM)
checkButton.addEventListener("click", handleValidation);
clearButton.addEventListener("click", clearResults);





// const userInput = document.getElementById("user-input");
// const checkButton = document.getElementById("check-btn");
// const clearButton = document.getElementById("clear-btn");
// const resultDisplay = document.getElementById("results-div");


// const validationConfig = {
//     invalidRegex: /[^0-9()-]/,
//     inputLength: 13
// };


// const isInvalidInput = (input) => input === "" || validationConfig.invalidRegex.test(input);
// const isInvalidLength = (input) => input.length !== validationConfig.inputLength;

// const updateResultDisplay = (message) => {
//     resultDisplay.innerHTML = message;
// };

// const InputValidation = (input) => {
//     const trimmedInput = String(input || "").trim();
      

//      if(isInvalidInput(input)) {
//         alert("Please provide a valid phone number.");
//      } else if (isInvalidLength(input)) {
//         alert(`Phone number must be exactly ${validationConfig.inputLength} digits.`);
//      } else {
//         updateResultDisplay(`${input} is a Valid or Not-Valid Digit`);
//      }
// }

// const handleValidation = (input) => {
//     input = userInput.value; //Read from DOM
//     InputValidation(input);
// }

// checkButton.addEventListener("click", handleValidation);




 
 /* const invalidInputRegex = /[^0-9()]/; // Matches anything except whole numbers and ()

const InputValidation = () => {
const input =  userInput.value.trim(); // Get the latest trimmed input
const inputLength = 10;

 console.log(input.value);

 if (input === "" || invalidInputRegex.test(input)) {
    alert("Please provide a phone number");
 } else if (input.length > inputLength ||input.length < inputLength ) {
    alert ("Exceeded Max number 10 or not up to 10")
 } else {
    resultDisplay.innerHTML = input + "Valid or Not-Valid Digit";
 }
}
 */