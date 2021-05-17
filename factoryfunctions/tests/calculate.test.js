describe('The calculate bill ' , function(){
    
    
    it('should calculate the total bill of the  sms string' , function(){
        
        
        let calcu = calculate();
        
        assert.equal(calcu.calculate1('sms,sms'),1.50);

        
    });
    it('should calculate the total bill of the  call string' , function(){
        
        
        let calcu2 = calculate()

        
        assert.equal(calcu2.calculate1('call,call,call,call,'),11.00);

        
    });
    it('should calculate the total bill of the  call and sms string' , function(){
        
        
        let calcu2 = calculate()

        
        
        assert.equal(calcu2.calculate1('call,sms,call,sms,sms,'),7.75);

        
    });
    it('should calculate the total bill of the  sms string' , function(){
        
        
        let calcu2 = calculate();
        
        
        assert.equal(calcu2.calculate1('sms,sms,sms,sms'),3.00);

        
    });
    it('should return warning when the total bill is equal or above 20 but less than 30' , function(){
        
        
        let calcu = calculate();
    
    assert.equal(calcu.calculate1('call,call,sms,call,call,sms,call,call,sms,call,call,'),24.25)
    assert.equal('warning',calcu.levelcolour());
    });
    it('should return danger whe the total bill is equal and above 30' , function(){
        
        
        let calcu = calculate();
    
        
assert.equal(calcu.calculate1('call,call,call,sms,sms,sms,call,call,call,sms,sms,sms,call,call,call,sms,sms,sms')
    ,31.50)
    assert.equal('danger',calcu.levelcolour());
    
        
    });
    
});



