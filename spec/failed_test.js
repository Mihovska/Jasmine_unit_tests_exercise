describe("Given MyClass implementation", function () {
    var myObj = new MyClass();
    it("when accessing message, then it should not be null", function() {
        expect(myObj.message).not.toBeNull();
    });
    it("when accessing message, then it should be equal to \"Hello Jasmine!\"", function () {
        expect(myObj.message).toEqual("This is not the right message!");
    });
});