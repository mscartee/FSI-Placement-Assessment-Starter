// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Michael Cartee" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

function updateQuantity-gb(displayQuantity){
    let quantity=document.querySelector('.qty-gb')
    quantity.innerHTML=displayQuantity
}

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
/ 
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons