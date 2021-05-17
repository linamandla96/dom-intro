// get a reference to the sms or call radio buttons
//var billItemTypeWithElem = document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var callCostSetElem = document.querySelector(".callCostSetting");
var smsCostSetElem = document.querySelector(".smsCostSetting");
var warningLevelSetElem = document.querySelector(".warningLevelSetting");
var criticalLevelSetElem = document.querySelector(".criticalLevelSetting");



var callTotalSetElem = document.querySelector(".callTotalSettings");
var smsTotalSetElem = document.querySelector(".smsTotalSettings");
var totalSetElem = document.querySelector(".totalSettings");

var addItembtnElement = document.querySelector(".addItemBtn");

var updateSettingsElem = document.querySelector(".updateSettings");

//var warningLevelSetttings = 0;
//var criticalLevelSettings = 0;
//var callCostSettings = 0;
//var smsCostSettings = 0;


//var callTotalSettings3 = 0;
//var smsTotalSettings3 = 0;
//var totalSettings = 0;

let setDom= billsetting();

function updateSettingsClicked() {
//console.log(callCostSetElem)
    callCostSettings = setDom.setCallCost(Number(callCostSetElem.value))
     setDom.getCallCost;
    smsCostSettings  = setDom.setSmsCost(Number(smsCostSetElem.value));
    setDom.getSmsCost;
    criticalLevelSettings= setDom.setCriticallevel(criticalLevelSetElem.value);
    setDom.getCriticalleve;
    warningLevelSetttings = setDom.setWarninglevel(warningLevelSetElem.value);
    

    //totalSetElem.innerHTML = setDom.getTotalCost();
      setDom.getcolourTotal();
    
    
       totalSetElem.classList.remove("danger");
       totalSetElem.classList.remove("warning");
     totalSetElem.classList.add(setDom.getcolourTotal());
    
    

}
function addItemBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        setDom.billStringType(billItemType);


        
        callTotalSetElem.innerHTML = setDom.getCallTotal().toFixed(2);
        smsTotalSetElem.innerHTML = setDom.getSmsTotal().toFixed(2);
        totalSetElem.innerHTML = setDom.getTotalCost().toFixed(2);

         totalSetElem.classList.remove("danger");
       totalSetElem.classList.remove("warning");
     totalSetElem.classList.add(setDom.getcolourTotal());

    }
    
}



updateSettingsElem.addEventListener('click', updateSettingsClicked);

addItembtnElement.addEventListener('click', addItemBtnClicked);

