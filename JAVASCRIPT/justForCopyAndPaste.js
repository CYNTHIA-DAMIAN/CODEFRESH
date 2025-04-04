 

const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});












































/* 
Decimal to Binary function after modification
const decimalToBinary = (input) => {
  let binary = "";

  if (input === 0) {
    binary = "0";
  }

  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }

  result.innerText = binary;
};
*/


/* 
Decimal to Binary code before modification

const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if (input === 0) {
    result.innerText = "0";
    return;
  }

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);

  result.innerText = remainders.reverse().join("");
};
 */

/*const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  while (input > 0) {
    const quotient = Math.floor(input / 2);
    const remainder = input % 2;

    inputs.push(input);
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  }

  console.log("Inputs: ", inputs);
  console.log("Quotients: ", quotients);
  console.log("Remainders: ", remainders);
  
};

const checkUserInput = () => {
  if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

*/




// const taskForm = document.getElementById("task-form");
// const confirmCloseDialog = document.getElementById("confirm-close-dialog");
// const openTaskFormBtn = document.getElementById("open-task-form-btn");
// const closeTaskFormBtn = document.getElementById("close-task-form-btn");
// const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
// const cancelBtn = document.getElementById("cancel-btn");
// const discardBtn = document.getElementById("discard-btn");
// const tasksContainer = document.getElementById("tasks-container");
// const titleInput = document.getElementById("title-input");
// const dateInput = document.getElementById("date-input");
// const descriptionInput = document.getElementById("description-input");

// const taskData = [];
// let currentTask = {};



// const reset = () => {
//   titleInput.value = "";
//   dateInput.value = "";
//   descriptionInput.value = "";
//   taskForm.classList.toggle("hidden");
//   currentTask = {};
// }

// openTaskFormBtn.addEventListener("click", () =>
//   taskForm.classList.toggle("hidden")
// );

// closeTaskFormBtn.addEventListener("click", () => {
//   const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;

//   if (formInputsContainValues) {
//     confirmCloseDialog.showModal();
//   } else {
//     reset();
//   }
// });

// cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

// discardBtn.addEventListener("click", () => {
//   confirmCloseDialog.close();
//   reset()
// });

// taskForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
//   const taskObj = {
//     id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
//     title: titleInput.value,
//     date: dateInput.value,
//     description: descriptionInput.value,
//   };

//    if (dataArrIndex === -1) {
//     taskData.unshift(taskObj);
//   }

//  taskData.forEach(
//     ({ id, title, date, description }) => {
//         tasksContainer.innerHTML += `
//         <div class="task" id="${id}">
//           <p><strong>Title:</strong> ${title}</p>
//           <p><strong>Date:</strong> ${date}</p>
//           <p><strong>Description:</strong> ${description}</p>
//           <button type="button" class="btn">Edit</button>
//           <button type="button" class="btn">Delete</button>
//         </div>
//       `
//     }
//   );

//   reset()
// });


/*
ALL ABOUT LOCAL STORAGE:
const myTaskArr = [
  { task: "Walk the Dog", date: "22-04-2022" },
  { task: "Read some books", date: "02-11-2023" },
  { task: "Watch football", date: "10-08-2021" },
];

localStorage.setItem("data", JSON.stringify(myTaskArr));

localStorage.clear();

const getTaskArr = localStorage.getItem("data")
console.log(getTaskArr)

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);
*/