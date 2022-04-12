// Changing Background

let background = document.getElementById("container")
let colors =["red","blue","dark","pink","yellow","purple","black","gray"]

function changeBackground(){
   let getCOlorsRandomly = Math.floor(  Math.random()*8)
   for(let i =0; i < colors.length; i++) {
    background.style.backgroundColor= colors[getCOlorsRandomly]
   }
}

// GENERATING QUOTES
let listOfQuotes =[" Life is too short and sweet to be spent to be complaining about things","To love or have loved, that is enough. Ask nothing further.There is no other pearl to be found in the dark folds of life.", "Love recognizes no barriers.It jumps hurdles, leaps fences,penetrates walls to arrive at its destination full of hope","Life without love is like a tree without blossoms or fruit"]
let quotesInPara = document.getElementById("Quotes")
 let border =document.getElementById("box-bottom")

function generateQuotes(){
    let getQuoteRandomly = Math.floor(Math.random()*4)
    for(let i =0; i< listOfQuotes.length;i++){
        quotesInPara.textContent= "---" + listOfQuotes[ getQuoteRandomly] + "---"
     
        
    }
}
// MESSAGE DELIVERY
 let submitText = document.getElementById("message")
 let inputElement = document.getElementById("textinput")
 let sumbitButton = document.getElementById("btn")
 
 function getText(){
    let newMessage = inputElement.value
    let deliveredmessage = "Previous Message Delivered"
    if (inputElement == ""){
        submitText.innerHTML = deliveredmessage
    }     
    submitText.innerHTML =  newMessage
    inputElement.value = "";
 
 }
//  COUNTER 

let countNum = document.getElementById("count")
let Count = 0;

function upperCounter(){
    Count = Count + 1
    countNum.innerText= Count;

}
function lowerCounter(){
    if (Count > 0) {
        Count = Count -1
    }
    countNum.innerText= Count;

}
