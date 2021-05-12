describe('The radio bill ' , function(){
    
    
    it('should check if the string is call and add total of the string' , function(){
        
        
        let radiocal = radio();
        radiocal.radio1('call')
        assert.equal(2.75,radiocal.callradiototal());

        
    });
    it('should check if the string is sms and add total of the string' , function(){
        
        
        let radiocal = radio();
        radiocal.radio1('sms')
        assert.equal(0.75,radiocal.smsradiototal());

        
    });
    it('should be able to add  total of both sms and call string' , function(){
        
        
        let radiocal = radio();
        radiocal.radio1('sms')
        radiocal.radio1('call')
        assert.equal(3.50,radiocal.radiototal());

        
    });
    it('should be able to add  total of both sms and call string and return warning whe the total equal or above 30' , function(){
        
        
        let radiocal = radio();
        radiocal.radio1('sms')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        
        assert.equal(31.00,radiocal.radiototal());

        assert.equal('warning',radiocal.colourlevel());
    });
    it('should be able to add  total of both sms and call string and return danger if total is equal to and above 50' , function(){
        
        
        let radiocal = radio();
        radiocal.radio1('sms')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')
        radiocal.radio1('call')


        
        assert.equal(53.00,radiocal.radiototal());

        assert.equal('danger',radiocal.colourlevel());
    });
});