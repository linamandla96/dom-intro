function billsetting() {

     var theCallCost = 0;
     var theSmsCost = 0;
     var theWarninglevel = 0;
     var theCriticalleve = 0;
     var callCostTotal = 0;
     var smsCostTotal = 0


     function setCallCost(callCost) {
          theCallCost += callCost;
     }

     function getCallCost() {
          return theCallCost;
     }

     function setSmsCost(smsCost) {
          theSmsCost += smsCost;

     }
     function getSmsCost() {
          return theSmsCost;
     }
     function setWarninglevel(warninglevel) {
          theWarninglevel = warninglevel;
     }
     function getWarninglevel() {
          return theWarninglevel;

     }
     function setCriticallevel(criticalevel) {
          theCriticalleve = criticalevel;
     }
     function getCriticalleve() {
          return theCriticalleve;
     }
     function makeCall() {
          if (stopCritical()) {
               callCostTotal += theCallCost;
          }
          
     }
     function sendsms() {

          if (stopCritical()) {
               smsCostTotal += theSmsCost;
          }
          
     }
     function getCallTotal() {
          return callCostTotal;
     }
     function getSmsTotal() {
          return smsCostTotal;
     }
     function getTotalCost() {
          
          return getSmsTotal() + getCallTotal();

     }
     function getcolourTotal() {
          if (getTotalCost() >= getWarninglevel() && getTotalCost() < getCriticalleve()) {
               return "warning";
          }
          if (getTotalCost() >= getCriticalleve()) {
               return "danger";
          }
     }
     function billStringType(stringType) {
          //alert(getTotalCost())
          if (stringType === 'call') {
               makeCall();
          }
          else if (stringType === 'sms') {
               sendsms();
          }

     }
     function stopCritical() {
          return getTotalCost() < getCriticalleve()
     }

     return {
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

          billStringType,

          stopCritical,
     }

}