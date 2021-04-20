// get a reference to the sms or call radio buttons
//var radiocheckedbtnElem = document.querySelector(".billItemTypeRadio");
 
//get a reference to the add button
var radioBillAddBtnElem = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var billTotalElem = document.querySelector(".billTotal");

var callTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");

var billTotalElem = document.querySelector(".totalTwo");

var smsTotal2 = 0;
var callTotal2 = 0;
 var billTotal2 = 0;
 
function radioBillAddBtnClicked(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
 
    //var billItemType = radiocheckedbtnElem.value;
    //var smsTotal = 0;
   // var callsTotal = 0;
    // var billTotal = 0;
     
    if ( checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
     console.log(billItemType);
    
    if (billItemType ==='sms'){

        smsTotal2 += 0.75;
    }
   else if (billItemType === 'call'){
          callTotal2 += 2.75;
   
        }
    }
   console.log(callTotal);
   smsTotalElem.innerHTML = smsTotal2.toFixed(2);
   
   callTotalElem.innerHTML = callTotal2.toFixed(2);
   var total = smsTotal2 + callTotal2;
   
   billTotalElem.innerHTML = total.toFixed(2);
   
   if (total >= 50){
       billTotalElem.classList.remove("warning");
       billTotalElem.classList.add("danger");
   }
   else if (total >= 30 ){
     billTotalElem.classList.remove("danger");
     billTotalElem.classList.add("warning");
   }
//    else{
//        billTotalElem.classList.remove("warning");
//        billTotalElem.classList.remove("danger");
//    }
   billTotalElem.innerHTML = total.toFixed(2);
} 
//add an event listener for when the add button is pressed
radioBillAddBtnElem.addEventListener('click' , radioBillAddBtnClicked);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
