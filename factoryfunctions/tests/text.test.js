describe('The text bill ' , function(){
    
    
    it('should check if the string is sms and add total of the string' , function(){
        
        
        let textbill = text();
        textbill.text1('sms')
        assert.equal(0.75,textbill.smstext());

        
    });
    it('should check if the string is call  and add total of the string' , function(){
        
        
        let textbill = text();
        textbill.text1('call')
        assert.equal(2.75,textbill.calltext());

        
    });
    it('should check if the string is both call  and sms, add total of the both string' , function(){
        
        
        let textbill = text();
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        assert.equal(4.25,textbill.texttotal());
    });
    it('should check if the string is both call  and sms, add total of the both string and return warning if the total of both string is equal to and above 30' , function(){
        
        
        let textbill = text();
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        
        
        assert.equal(36.00,textbill.texttotal());
        assert.equal('warning',textbill.colourtotal())

    });
    it('should check if the string is both call  and sms, add total of the both string and return danger if the total of both string is equal to and above 50' , function(){
        
        
        let textbill = text();
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('sms')
        textbill.text1('call')
        textbill.text1('call')
        textbill.text1('sms')
        textbill.text1('call')
        
        assert.equal(50.75,textbill.texttotal());
        assert.equal('danger',textbill.colourtotal())
    });
});