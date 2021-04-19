// get a reference to the sms or call radio buttons
var billItemTypeWithElem = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callCostSetElem = document.querySelector(".callCostSetting");
var smsCostSetElem = document.querySelector(".smsCostSetting");
var warningLevelSetElem = document.querySelector(".warningLevelSetting");
var criticalLevelSetElem = document.querySelector(".criticalLevelSetting");



var callTotalSetElem = document.querySelector(".callTotalSettings");
var smsTotalSetElem = document.querySelector(".smsTotalSettings");
var totalSetElem = document.querySelector(".totalSettings");

//get a reference to the add button
var addItembtnElement = document.querySelector(".addItemBtn");
//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var warningLevelSetttings = 0;
var criticalLevelSettings = 0;
var callCostSettings = 0;
var smsCostSettings = 0;

// create a variables that will keep track of all three totals.
var callTotalSettings3 = 0;
var smsTotalSettings3 = 0;
var totalSettings = 0;



function updateSettingsClicked() {
console.log(callCostSetElem)
    callCostSettings = Number(callCostSetElem.value);
    smsCostSettings  = Number(smsCostSetElem.value);
    
    criticalLevelSettings= Number(criticalLevelSetElem.value);
    warningLevelSetttings = warningLevelSetElem.value;
     
    // smsTotalSettings3 = smsTotalSetElem.value;
    // callTotalSettings3 = callTotalSetElem.value;
   // totalSettings = totalSetElem.value;

}
function addItemBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        


        if (billItemType === 'call') {
            callTotalSettings3 += callCostSettings;
            

        }
        else if (billItemType === 'sms') {
            

            smsTotalSettings3 += smsCostSettings;
            
        }
       

    }
    callTotalSetElem.innerHTML = callTotalSettings3.toFixed(2);
    smsTotalSetElem.innerHTML = smsTotalSettings3.toFixed(2);
    
    totalSettings = smsTotalSettings3 + callTotalSettings3;

     totalSetElem.innerHTML = totalSettings.toFixed(2);
      
    if(totalSettings >= criticalLevelSettings){ 
        totalSetElem.classList.add("danger");
        totalSetElem.classList.remove("warning");

    }
    else if(totalSettings >= warningLevelSetttings){

        totalSetElem.classList.add("warning");
        totalSetElem.classList.remove("danger");
    }
    totalSetElem.innerHTML = totalSettings;
}


//add an event listener for when the 'Update settings' button is pressed
updateSettingsElem.addEventListener('click', updateSettingsClicked);
//add an event listener for when the add button is pressed

addItembtnElement.addEventListener('click', addItemBtnClicked);
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
