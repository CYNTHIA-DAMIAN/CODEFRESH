 
//  This was my first attepmt of the task.....(1)

// Here i imported my html elements...
 const textInput = document.querySelector("#text-input");
const myButton = document.querySelector("#check-btn");
const displayResult = document.querySelector("#result");

// Here i tried to create and array for a selected palindrome...
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

// Here i tried to create and array for the not a palindrome...
const myNotAPalindromeWords = [
    "not a palindrome",
    "nope",
    "almostomla",
    "1 eye for of 1 eye",
    "five |\_/|four"
];



function getRandomPalindrome() {
    function cleanInputString(str) {
        const regex = /[/:()|\/.-_]/;
        // const rightRegex = 
        // /[a-zA-Z\s]+[0-9]+/i; 
        return str.replace(regex, "");
      }

    const regexedPalindrome = cleanInputString(myPalindromeWords.value);
    const randomPalindrome = Math.floor(regexedPalindrome.length * Math.random());
    return randomPalindrome; 
}

function testPalindomeChecker() {
    const palindrome = myPalindromeWords[getRandomPalindrome()];
    displayResult.innerHTML = palindrome;
}

function myButtonFunction () {
   

    if (textInput.value === "") {
        alert("Please input a value");
    } else {
        return testPalindomeChecker();
    }
    
    
};

myButton.addEventListener("click", myButtonFunction);


 // array responsible for adding player card information.... for my football team cards...

 