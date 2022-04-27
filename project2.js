// let buttons =document.getElementById("get-data")
// let anwerScreen = document.getElementById("answer-screen")
// let removeData = documen.getElementById("clear-work")



//              (function(){
//                 buttons.forEach(function(button){
//                     button.addEventListener('click', function(e){
//                       let value = e.target.dataset.num;
//                       answerScreen.value += value;
//                     })
//                   });
let numberOfPeople = document.getElementById("noOfpeople")
let billAmount = document.getElementById("billinput")
let totalCal = Document.getElementById("cal")
function calculate(){
    let newpeople = numberOfPeople.value
    let newbill = billAmount.value
    totalCal.innerHTML += newbill + newpeople 

}