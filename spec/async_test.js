describe('Given an async service', function(){
    var myService, myResult;
    beforeEach(function(done){
        myService = new MyService();
        spyOn(myService, 'fetchResult').and.callFake(function(callback){
            setTimeout(function(){
                callback(10);
                done();
            }, 50);
        });
        myService.fetchResult(function(result){
            myResult = result;
        });
    });

    it('When service is tested with the async pattern, then it can be simulated', function(done){
        expect(myResult).toEqual(10);
        done();
    });
})