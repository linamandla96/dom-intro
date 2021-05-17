function radio() {
    var smsTotal2 = 0;
    var callTotal2 = 0;
    
    function radio1(billItemType) {
        if (billItemType === 'sms') {
            smsTotal2 += 0.75;
        }
        else if (billItemType === 'call') {
            callTotal2 += 2.75;
        }
    }

    function callradiototal() {
        return callTotal2.toFixed(2);
    }

    function smsradiototal() {
        return smsTotal2.toFixed(2);
    }
    function radiototal() {
        return smsTotal2 + callTotal2;
    }
      function colourlevel() {
        if (radiototal() >= 50){
            return 'danger';
        }
        else if (radiototal() >= 30 ){
          return 'warning';
        }
    }
    
    return {
        radio1,
        callradiototal,
        smsradiototal,
        radiototal,
        colourlevel,
        
    }
}