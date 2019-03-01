describe('Given a generic function', function(){
    var container;
    beforeEach(function(){
        container = {
            myFunc: function(aNumber){
                return aNumber + 1;
            }
        };
    });
    afterEach(function(){
        container = null;
    });
    it('When using a spy callTrough, then it redirects all the calls to the original method', function(){
        var result;
        spyOn(container, 'myFunc').and.callThrough();
        result = container.myFunc(10);
        expect(container.myFunc).toHaveBeenCalled();
        expect(container.myFunc).toHaveBeenCalledWith(10);
        expect(result).toEqual(11);
    });

    it('When using a spy returnValue, then it returns the value specified', function(){
        var result;
        spyOn(container, 'myFunc').and.returnValue(50);
        result = container.myFunc(10);
        expect(container.myFunc).toHaveBeenCalled();
        expect(container.myFunc).toHaveBeenCalledWith(10);
        expect(result).toEqual(50);
    });

    it('When using a spy callFake, then it calls the function specified', function(){
        var result;
        spyOn(container, 'myFunc').and.callFake(function(arg){
            return arg + 10;
        });
        result = container.myFunc(10);
        expect(container.myFunc).toHaveBeenCalled();
        expect(container.myFunc).toHaveBeenCalledWith(10);
        expect(result).toEqual(20);
    });

    it('When using a spy throwError, then it throws the exception specified', function(){
        spyOn(container, 'myFunc').and.throwError('This is an exception');
        expect(function(){
            container.myFunc(10);
        }).toThrowError('This is an exception');
    });

    it('When using a spy stub, then it becomes a simple stub', function(){
        var result;
        spyOn(container, 'myFunc').and.callThrough();
        result = container.myFunc(10);
        expect(result).toEqual(11);
        container.myFunc.and.stub();
        result = container.myFunc(20);
        expect(container.myFunc).toHaveBeenCalled();
        expect(container.myFunc).toHaveBeenCalledWith(10);
        expect(container.myFunc).toHaveBeenCalledWith(20);
        expect(result).toBeUndefined();
    });
});