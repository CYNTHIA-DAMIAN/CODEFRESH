const textInput = document.querySelector("#text-input");
const myButton = document.querySelector("#check-btn");
const displayResult = document.querySelector("#result");


function thePalindromeChecker(str) {
    const anyPalindrome = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return anyPalindrome === anyPalindrome.split("").reverse().join("");
}

function myButtonFunction () {
    const inputValue = textInput.value;
 
    if (inputValue === "" || null || "  " ){
        alert("Please input a value");
    } else {
        if (thePalindromeChecker(inputValue)){
            displayResult.innerHTML = inputValue + " is a palindrome";
        } else {
            displayResult.innerHTML = inputValue + " is not a palindrome";
        }
    }
};

myButton.addEventListener("click", myButtonFunction);


 
 





/* 
This was my second attempt of the task...(2):

    const textInput = document.querySelector("#text-input");
const myButton = document.querySelector("#check-btn");
let displayResult = document.querySelector("#result");

const myPalindromeWords = [
    "A",
    "eye",
    "_eye",
    "race car",
    "Aman, a plan, a canal. Panama",
    "never odd or even",
    "my age is 0, 0 si ega ym",
    "0_0 (: /-\ : ) 0-0"
  ];
  
  function myButtonFunction() {
    const inputValue = textInput.value;
  
    if (inputValue === "") {
      alert("Please input a value");
    } else if (myPalindromeWords.includes(inputValue)) {
      displayResult.innerHTML = inputValue + " is a palindrome";
    } else {
      displayResult.innerHTML = inputValue + " is not a palindrome";
    }
  }
  
  myButton.addEventListener("click", myButtonFunction);
*/





