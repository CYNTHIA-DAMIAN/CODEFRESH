const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

let result = "";
function convertToRoman(num) {
    

    // Array of values and their corresponding Roman numerals (sorted from largest to smallest)
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    //Clear the previous result
    result = "";

    // Loop through the mapping
    for (let i = 0; i < romanMap.length; i++) {
        // While the number is greater than or equal to the current value
        while (num >= romanMap[i].value) {
            result += romanMap[i].numeral; // Append Roman numeral to result
            num -= romanMap[i].value; // Subtract the value from num
        }
    }

    return result;
}

function displayResult() {
    const inputValue = parseInt(userInput.value);

    if (!userInput.value || isNaN(inputValue)) {
        output.textContent = "Please enter a valid number.";
    } else if (inputValue < 1) {
        output.textContent = "Please enter a number greater than or equal to 1.";
    } else if (inputValue >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999.";
    } else {
        output.textContent = convertToRoman(inputValue);
    }

    userInput.value = ""; // Clear input after each execution
}

/* My code before AI modification
 function displayResult() {
    const inputValue = parseInt(userInput.value);

    if (!userInput.value || isNaN(inputValue) || inputValue <=0){
        output.textContent = "Please enter a valid positive number.";
    } else {
        output.textContent = convertToRoman(inputValue);
        userInput.value = ""; // for clearing input after each execution
    }
 }
*/
 convertBtn.addEventListener("click", displayResult);

 //for when you press enter key...
 userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      displayResult();
    }
  });




  

  /* 
  Some Code Explantion.... From

  Great question! Let’s break it down step by step, focusing on the **looping and subtraction logic**.  

---

### **Step-by-Step Breakdown**  

#### **1. The `for` loop**
```javascript
for (let i = 0; i < romanMap.length; i++) {
```
- This loop **iterates through the `romanMap` array**, going from the largest to the smallest Roman numeral.
- `i` starts at `0`, meaning we begin with `{ value: 1000, numeral: "M" }`.  
- Each time the loop runs, `i` increases by `1`, moving to the next item in the array.  

---

#### **2. The `while` loop (Subtraction Process)**
```javascript
while (num >= romanMap[i].value) {
```
- This **checks if the input number (`num`) is greater than or equal to the current Roman numeral value**.  
- If `num` is greater than or equal to the value, we:  
  1. **Subtract that value from `num`**  
  2. **Add the corresponding Roman numeral to the result**  

✅ **Example 1: `num = 1994`**  
- Start with `M = 1000`, and check:
  - `1994 >= 1000` → **Yes**, so:  
    - Subtract `1000`: `1994 - 1000 = 994`  
    - Append `"M"` to the result (`result = "M"`)  
  - Move to the next Roman numeral (`i` increases).  

✅ **Example 2: `num = 994`**  
- Check `900 (CM)`:  
  - `994 >= 900` → **Yes**, so:  
    - Subtract `900`: `994 - 900 = 94`  
    - Append `"CM"` to the result (`result = "MCM"`)  

✅ **Example 3: `num = 94`**  
- Check `90 (XC)`:  
  - `94 >= 90` → **Yes**, so:  
    - Subtract `90`: `94 - 90 = 4`  
    - Append `"XC"` to the result (`result = "MCMXC"`)  

✅ **Example 4: `num = 4`**  
- Check `4 (IV)`:  
  - `4 >= 4` → **Yes**, so:  
    - Subtract `4`: `4 - 4 = 0`  
    - Append `"IV"` to the result (`result = "MCMXCIV"`)  

Now, `num = 0`, so the loops stop, and `"MCMXCIV"` is returned as the final result.

---

### **Final Takeaways**
- The **for loop** ensures we check every numeral from largest to smallest.  
- The **while loop** handles cases where a numeral should be used **multiple times** (like `III` for 3 or `MM` for 2000).  
- The subtraction makes sure that we are reducing `num` step by step while constructing the Roman numeral.  

Would you like me to explain anything else in more detail? 😊
   */