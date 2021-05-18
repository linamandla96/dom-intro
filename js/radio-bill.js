// get a reference to the sms or call radio buttons
//var radiocheckedbtnElem = document.querySelector(".billItemTypeRadio");
 
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var billTotalElem = document.querySelector(".billTotal");

var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");

var billTotalElem = document.querySelector(".totalTwo");

// var smsTotal2 = 0;
// var callTotal2 = 0;
//  var billTotal2 = 0;
 let radioR = radio();
function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 
    
    
    if ( checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
     console.log(billItemType);
     radioR.radio1(billItemType);
    
    smsTotalElem.innerHTML = radioR.smsradiototal();
    callTotalElem.innerHTML = radioR.callradiototal();
    billTotalElem.innerHTML =radioR.radiototal().toFixed(2) ;
   

        billTotalElem.classList.remove("warning");
        billTotalElem.classList.remove("danger");
        billTotalElem.classList.add(radioR.colourlevel());
        

}
}
radioBillAddBtnElem.addEventListener('click' , radioBillAddBtnClicked);
