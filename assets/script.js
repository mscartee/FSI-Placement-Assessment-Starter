// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Michael Cartee" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = document.querySelector('#qty-gb').innerHTML // Gingerbread
let cc = document.querySelector('#qty-cc').innerHTML // ChatChip
let sugar = document.querySelector('#qty-sugar').innerHTML // Sugar Sprinkle

//function for GB INCREMENTING
function updateQuantitygb(e){
  let gbupdate=document.querySelector('#qty-gb')
  gbupdate.textContent=e
}
//function for CC incrementing
function updateQuantitycc(e){
  let ccupdate=document.querySelector('#qty-cc')
  ccupdate.textContent=e
}
//function for SC incrmenting

function updateQuantitysc(e){
  let scupdate=document.querySelector('#qty-sugar')
  scupdate.textContent=e
}

// selecting the elements with an id of add-gb  for the buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const scPlusBtn = document.querySelector('#add-sugar')
const scMinusBtn = document.querySelector('minus-sugar')
// selecting the element with an id of credit



const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

gbMinusBtn.addEventListener('click',function(e){
    if(gb>0){
        gb--
    }else {
        window.alert("It is already at zero, dummy! (luv you)")
    }
    updateQuantitygb(gb)
})

gbPlusBtn.addEventListener('click',function(e){
         if(gb>=0){        
                gb++
                updateQuantitygb(gb)
            }
})

//gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
//console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
//})

// TODO: Hook up event listeners for the rest of the buttons