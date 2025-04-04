const inputValues = document.getElementById('cash');
const purchaseButton = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Function to convert input cash into numbers
const convertInputCash = () => {
    const values = inputValues.value;
    const array = values.split(/,\s*/g);
    return array.map((numbers) => Number(numbers));
};

// Function to sum total cash in drawer
const getTotalCID = () => {
    return cid.reduce((sum, [, amount]) => sum + amount, 0);
};

const calculateChange = () => {
    const cashGiven = convertInputCash().reduce((sum, num) => sum + num, 0);
    const changeDueAmount = cashGiven - price;
    let totalCID = getTotalCID();

    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } 
    
    if (cashGiven === price) {
        changeDue.innerText = "No change due - customer paid with exact cash";
        return;
    }

    if (totalCID < changeDueAmount) {
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    // Sorting cid from highest to lowest value
    let currencyUnits = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    let changeArray = [];
    let remainingChange = changeDueAmount;

    for (let [unit, unitValue] of currencyUnits) {
        let drawerAmount = cid.find(([name]) => name === unit)[1];
        let amountToReturn = 0;

        while (remainingChange >= unitValue && drawerAmount > 0) {
            remainingChange = (remainingChange - unitValue).toFixed(2);
            drawerAmount -= unitValue;
            amountToReturn += unitValue;
        }

        if (amountToReturn > 0) {
            changeArray.push([unit, amountToReturn]);
        }
    }

    if (remainingChange > 0) {
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (changeDueAmount === totalCID) {
    changeDue.innerText = "Status: CLOSED " + 
        cid.filter(([unit, amount]) => amount > 0) // Keep only available denominations
            .reverse()
            .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
            .join(" ");
    return;
}


    if (changeDueAmount === totalCID) {
        changeDue.innerText = "Status: CLOSED " + changeArray.map(([unit, amount]) => `${unit}: $${amount}`).join(" ");
    } else {
        changeDue.innerText = "Status: OPEN " + changeArray.map(([unit, amount]) => `${unit}: $${amount}`).join(" ");
    }
};

purchaseButton.addEventListener('click', calculateChange);
