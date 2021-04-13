// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElem = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var smsTotaElem = document.querySelector(".smsTotalOne");
var callTotaElem =document.querySelector(".callTotalOne") 
 var billTotaElem = document.querySelector(".totalOne")

 var smsTotal = 0;
var callTotal = 0;
 var total = 0;
//add an event listener for when the add button is pressed


function addToBillBtnClicked(){
var billTypeEntered = billTypeTextElem.value;


if(billTypeEntered === "sms"){
     smsTotal += 0.75;
}
else if (billTypeEntered === "call"){
         callTotal += 2.75;
}

var total = smsTotal + callTotal;
smsTotaElem.innerHTML = smsTotal.toFixed(2);
callTotaElem.innerHTML = callTotal.toFixed(2);
billTotaElem.innerHTML = total.toFixed(2);

if (total >= 50){
    billTotaElem.classList.remove("warning");
    billTotaElem.classList.add("danger");
}
else if (total >= 30 ){
  billTotaElem.classList.remove("danger");
  billTotaElem.classList.add("warning");
}

billTotaElem.innerHTML = total.toFixed(2);

}

addToBillBtnElem.addEventListener('click', addToBillBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
