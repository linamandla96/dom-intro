// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtnElem = document.querySelector(".addToBillBtn");
//create a variable that will keep track of the total bill
var smsTotaElem = document.querySelector(".smsTotalOne");
var callTotaElem =document.querySelector(".callTotalOne") 
 var billTotaElem = document.querySelector(".totalOne")


let textB = text();

function addToBillBtnClicked(){
var billTypeEntered = billTypeTextElem.value;
textB.text1(billTypeEntered);


 smsTotaElem.innerHTML = textB.smstext().toFixed(2);
 callTotaElem.innerHTML = textB.calltext().toFixed(2);
 billTotaElem.innerHTML = textB.texttotal().toFixed(2);

  billTotaElem.classList.remove("warning");
  billTotaElem.classList.remove("danger");
  billTotaElem.classList.add(textB.colourtotal());
  


}

addToBillBtnElem.addEventListener('click', addToBillBtnClicked);
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
