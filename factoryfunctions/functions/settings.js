function billsetting(){

var theCallCost = 0;
var theSmsCost = 0;
var theWarninglevel = 0;
 var theCriticalleve =0;
 var callCostTotal = 0;
 var smsCostTotal = 0
 

function setCallCost(callCost){
     theCallCost = callCost;
}

function getCallCost(){
    return theCallCost;
}

function setSmsCost(smsCost){
theSmsCost = smsCost;

}
function getSmsCost(){
  return theSmsCost;
}
function setWarninglevel(warninglevel){
       theWarninglevel = warninglevel;
}
function getWarninglevel(){
return theWarninglevel;

}
function setCriticallevel(criticalevel){
      theCriticalleve = criticalevel;
}
function getCriticalleve(){
     return theCriticalleve;
}
function makeCall(){
    return callCostTotal += theCallCost; 
}
function sendsms(){
   return  smsCostTotal += theSmsCost;
}
function getCallTotal(){
  return callCostTotal;
}
function getSmsTotal(){
   return smsCostTotal;
}
function getTotalCost(){
    return callCostTotal + smsCostTotal;
}
function getcolourTotal(){
     if(getTotalCost()>= getWarninglevel()){
          return "warning";
     }
     if(getTotalCost() >= getCriticalleve()){
    return "danger";

     }
}

return{
setCallCost,
getCallCost,

setSmsCost,
getSmsCost,

setWarninglevel,
getWarninglevel,

setCriticallevel,
getCriticalleve,

makeCall,
sendsms,

getCallTotal,
getSmsTotal,
getTotalCost,
getcolourTotal,
}
}