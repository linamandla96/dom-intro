//get a reference to the calculate button
var calculateBtnElem = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billtalElem = document.querySelector(".billTotal");

//get a reference to the billString
var billStringElem = document.querySelector(".billString");


//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


function calculateBtnClicked(){
var billString = billStringElem.value;
var billItems = billString.split(",")
var billtal = 0;
    for (var i = 0; i < billItems.length;i++){
    var billItem = billItems[i].trim();
    if(billItem === 'call'){
        billtal += 2.75;
    }
    else if (billItem ==='sms'){
        billtal += 0.75;
    }
    
} 
      var billtall = billtal.toFixed(2);
      //console.log(BillTotal)
      if (billtal >= 30){
        billtalElem.classList.remove("warning");
        billtalElem.classList.add("danger");

      }
      else if (billtal >= 20){
        billtalElem.classList.remove("danger");
         billtalElem.classList.add("warning");
      }
       else {
        billtalElem.classList.remove("danger");
         billtalElem.classList.remove("warning");

      }



      billtalElem.innerHTML = billtal.toFixed(2);

}

    


calculateBtnElem.addEventListener('click' , calculateBtnClicked);



