function text(){
    var smsTotal = 0;
    var callTotal = 0;
    var total = 0;
    
    function text1(billTypeEntered){
    if(billTypeEntered === "sms"){
         smsTotal += 0.75;
    }
    else if (billTypeEntered === "call"){
             callTotal += 2.75;
    }

}
function smstext(){
return smsTotal;
}


function calltext(){
 return callTotal;
}


function texttotal(){
return smsTotal + callTotal;

}


function colourtotal(){
if (texttotal() >=30  && texttotal() <= 50){
return 'warning';
}
else if (texttotal() >= 50){
  return 'danger';
}
}

return{
   text1,
   smstext,
   calltext,
   texttotal,
   colourtotal,
}
}

