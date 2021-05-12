describe('The calculate bill ' , function(){
    
    
    it('should calculate the total bill of the  sms string' , function(){
        
        
        let calcu = calculate();
        calcu.calculate1('sms')
        assert.equal(calcu.total(),0.75);

        
    });
    it('should calculate the total bill of the  call string' , function(){
        
        
        let calcu2 = calculate()

        calcu2.calculate1('call');
        calcu2.calculate1('call');
        calcu2.calculate1('call');
        calcu2.calculate1('call');
        assert.equal(calcu2.total(),11.00);

        
    });
    it('should calculate the total bill of the  call and sms string' , function(){
        
        
        let calcu2 = calculate()

        calcu2.calculate1('call');
        calcu2.calculate1('sms');
        calcu2.calculate1('call');
        calcu2.calculate1('sms');
        calcu2.calculate1('sms');
        assert.equal(calcu2.total(),7.75);

        
    });
    it('should calculate the total bill of the  sms string' , function(){
        
        
        let calcu2 = calculate();
        calcu2.calculate1('sms')
        calcu2.calculate1('sms')
        calcu2.calculate1('sms')
        calcu2.calculate1('sms')
        assert.equal(calcu2.total(),3.00);

        
    });
    it('should return warning when the total bill is equal or above 20 but less than 30' , function(){
        
        
        let calcu = calculate();
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.levelcolour()
        
        assert.equal('warning',calcu.levelcolour());
    assert.equal(calcu.total(),22.00)
        
    });
    it('should return danger whe the total bill is equal and above 30' , function(){
        
        
        let calcu = calculate();
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.levelcolour()
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        calcu.calculate1('call')
        
        assert.equal('danger',calcu.levelcolour());
    assert.equal(calcu.total(),33.00)
        
    });
    
});



