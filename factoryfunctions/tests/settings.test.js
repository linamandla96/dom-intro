describe('The settings bill function ' , function(){
    
    
    it('should be able to set the call cost' , function(){
        
        
        let billset = billsetting();
        billset.setCallCost('2.75')
        assert.equal(2.75,billset.getCallCost());

        
    });
    it('should be able to set the sms cost' , function(){
        
        
        let billset = billsetting();
        billset.setSmsCost('0.75')
        assert.equal(0.75,billset.getSmsCost());

        
    });
    it('should be able to set the warning level' , function(){
        
        
        let billset = billsetting();
        billset.setWarninglevel('30')
        assert.equal(30,billset.getWarninglevel());

        
    });
    it('should be able to set critical level' , function(){
        
        
        let billset = billsetting();
        billset.setCriticallevel('50')
        assert.equal(50,billset.getCriticalleve());

    });
    });
    describe('Use values function ' , function(){
    
    
        it('should be able to use the sms cost set for 2 sms at 0.60 each and calls 2.75 each' , function(){
            
            
            let billset = billsetting();
            billset.setCallCost(2.75)
            billset.setSmsCost(0.60)
        

            billset.sendsms();
            billset.sendsms();
            billset.makeCall();
            
        
            
            assert.equal(3.95,billset.getTotalCost());
            assert.equal(2.75,billset.getCallTotal());
            assert.equal(1.20,billset.getSmsTotal());
            
        });
        it('should be able to use the sms cost set for 2 sms at 0.60 each' , function(){
            
            
            let billset = billsetting();
    
            billset.setSmsCost(0.60)
        

            billset.sendsms();
            billset.sendsms();
            
            
        
            
            assert.equal(1.20,billset.getTotalCost());
            assert.equal(0.00,billset.getCallTotal());
            assert.equal(1.20,billset.getSmsTotal());
            
        });
        it('should be able to use the sms cost set for 2 call at 5.60 each' , function(){
            
            
            let billset = billsetting();
    
            billset.setCallCost(5.60)
        

            billset.makeCall();
            billset.makeCall();
            
            
        
            
            assert.equal(11.20,billset.getTotalCost());
            assert.equal(11.20,billset.getCallTotal());
            assert.equal(0.00,billset.getSmsTotal());
            
        });
        it('should be able to use the sms cost set for 4 sms at 0.60 each and c 3 alls 2.75 each' , function(){
            
            
            let billset = billsetting();
            billset.setCallCost(2.75)
            billset.setSmsCost(0.60)
        

            billset.sendsms();
            billset.sendsms();
            billset.makeCall();
            billset.makeCall();
            billset.makeCall();
            billset.sendsms();
            billset.sendsms();
            
        
            
            assert.equal(10.65,billset.getTotalCost());
            assert.equal(8.25,billset.getCallTotal());
            assert.equal(2.40,billset.getSmsTotal());
            
        });
        it('should be able to return warning level when warning level set has been reached' , function(){
            
            
            let billset = billsetting();
            billset.setCallCost(2.75)
            billset.setSmsCost(0.60)
            billset.setWarninglevel(10)
        

            billset.sendsms();
            billset.sendsms();
            billset.makeCall();
            billset.makeCall();
            billset.makeCall();
            billset.sendsms();
            billset.sendsms();
            
        
            
            assert.equal("warning",billset.getcolourTotal());
            
            
        });
        it('should be able to return warning level when warning level set has been reached' , function(){
            
            
            let billset = billsetting();
            billset.setCallCost(2.75)
            billset.setSmsCost(0.60)
            billset.setCriticallevel(10)
        

            billset.sendsms();
            billset.sendsms();
            billset.makeCall();
            billset.makeCall();
            billset.makeCall();
            billset.sendsms();
            billset.sendsms();
            
        
            
            assert.equal("warning",billset.getcolourTotal());
            
            
        });
    });
