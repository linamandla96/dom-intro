//get a reference to the calculate button
var calculateBtnElem = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billtalElem = document.querySelector(".billTotal");
//get a reference to the billString
var billStringElem = document.querySelector(".billString");

let billCalc = calculate();

function calculateBtnClicked() {
   
   billtalElem.innerHTML = billCalc.calculate1(billStringElem.value);
   billtalElem.classList.remove("danger");
   billtalElem.classList.remove("warning");
   billtalElem.classList.add(billCalc.levelcolour(billCalc.calculate1(billStringElem.value)));

}

calculateBtnElem.addEventListener('click', calculateBtnClicked);


