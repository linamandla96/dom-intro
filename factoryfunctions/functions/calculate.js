function calculate() {
   
   function calculate1(billString) {
      var billtal = 0;

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
      levelcolour(billtal)
      return billtal.toFixed(2);
   }
   


   function levelcolour(totalBill) {
      console.log('sdsdsddsdsds')
      if (totalBill >= 30) {
         return 'danger';
      }
      else if (totalBill >= 20 && totalBill < 30) {
         return 'warning';
      }
   }

   return {
      calculate1,
   levelcolour,

   }
}