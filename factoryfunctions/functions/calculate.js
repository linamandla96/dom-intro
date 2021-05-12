function calculate() {
   var billtal = 0;
   var warning = 20;
   var danger =0;
   function calculate1(billString) {
      var billItems = billString.split(",");
      for (var i = 0; i < billItems.length; i++) {
         var billItem = billItems[i].trim();
         if (billItem === 'call') {
            billtal += 2.75;
         }
         else if (billItem === 'sms') {
            billtal += 0.75;
         }

      }
      

   }
   function total(){
      return billtal;
   }
   function levelcolour(){
if(billtal >=20&& billtal<=30 ){
    return 'warning';
}
else if(billtal>=30){
   return 'danger';
}

   }
   return {
      calculate1,
      total,
      levelcolour,
   }
}