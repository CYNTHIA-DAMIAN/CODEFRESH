//My Pyramid Game
let results= document.querySelector(".result")
const character = "!";
const count = 10;
const rows = [];
let inverted = true; 

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1)
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}


let result = ""
for (const row of rows) {
  result += "<p>" +  row + "</p>\n" ; //Wrap each row in a <p> element
  //result = result + "\n" + row;
}



results.innerHTML = result; // Use innerHTML instead of textContent
console.log(result);
//results.textContent = result;




/*
const character = "#";
const count = 8;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop
for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
*/


// let isBrowser = false; // Set to true for browser output, false for console output
// let result = "";
// for (const row of rows) {
//   if (isBrowser) { // If outputting to the browser
//     result += "<p>" + row + "</p>\n"; // Add <p> tags and newline characters
//   } else { // If outputting to the console
//     result += row + "\n"; // Add only newline characters
//   }
// }

// if (isBrowser) {
//   results.innerHTML = result; // Use innerHTML for the browser
// } else {
//   console.log(result); // Log the result to the console
// }





  
  
  
  
  
  
  
  
  
  /* const character = "#";
const count = 8;
const rows = [];

function padRow(name) {
    return name;
}
const call = padRow("name");
console.log(call);

for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i + 1));
  };

  let result = "";

  for (const row of rows) {
    result = result + "\n" + row;
  };
 */


  /*const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers); */

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/