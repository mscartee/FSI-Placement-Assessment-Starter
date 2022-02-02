// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = window.prompt("What's Your name")// HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = document.querySelector('#qty-gb').innerHTML // Gingerbread
let cc = document.querySelector('#qty-cc').innerHTML // ChatChip
let sc = document.querySelector('#qty-sugar').innerHTML // Sugar Sprinkle
let tot=document.querySelector('#qty-total').innerHTML
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
function updateTotal(){
    let gb = document.querySelector('#qty-gb').innerHTML // Gingerbread
    let cc = document.querySelector('#qty-cc').innerHTML // ChatChip
    let sc = document.querySelector('#qty-sugar').innerHTML // Sugar Sprinkle
    let tot=Number(gb)+Number(cc)+Number(sc)
    let totalUpdate=document.querySelector('#qty-total')
    totalUpdate.textContent=tot
}
// selecting the elements with an id of add-gb  for the buttons
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const scPlusBtn = document.querySelector('#add-sugar')
const scMinusBtn = document.querySelector('#minus-sugar')
// selecting the element with an id of credit





// Event listener for clicks on the "+" button for Gingerbread cookies

gbMinusBtn.addEventListener('click',function(e){
    if(gb>0){
        gb--
    }else {
        window.alert("It is already at zero, dummy! (luv you)")
    }
    updateQuantitygb(gb)
    updateTotal()

})

gbPlusBtn.addEventListener('click',function(e){
         if(gb>=0){        
                gb++
                updateQuantitygb(gb)
            }
            updateTotal()
})
//CHOCALATE CHIP
ccMinusBtn.addEventListener('click',function(e){
    if(cc>0){
        cc--
    }else {
        window.alert("It is already at zero, dummy! (luv you)")
    }
    updateQuantitycc(cc)
    updateTotal()
})

ccPlusBtn.addEventListener('click',function(e){
         if(cc>=0){        
                cc++
                updateQuantitycc(cc)
            }
            updateTotal()
})
//SUGAR COOKIE
scMinusBtn.addEventListener('click',function(e){
    if(sc>0){
        sc--
    }else {
        window.alert("It is already at zero, dummy! (luv you)")
    }
    updateQuantitysc(sc)
    updateTotal()
})

scPlusBtn.addEventListener('click',function(e){
         if(sc>=0){        
                sc++
                updateQuantitysc(sc)
            }
            updateTotal()
})
//updating my name on the bottom of the sheet (moved to the bottom because it was in a weird spot. )

const credit = document.querySelector('#credit')
// Code to update name display
credit.textContent = `Created by ${yourName}`



// TODO: Hook up event listeners for the rest of the buttons