describe("Iteration 4", () => {
  describe("Function printFullName", () => {

    it("should be defined", () => {
      expect(printFullName).toBeDefined();
    });

    it("should take one arguments", () => {
      expect(printFullName.length).toBe(1);
    });

    it("should return a string with the first name and the last name separated by a space", () => {
      expect( printFullName({ firstName: "John", lastName: "Doe" }) ).toEqual("John Doe");
      expect( printFullName({ firstName: "Jane", lastName: "Doe" }) ).toEqual("Jane Doe");
    });

    it("should return undefined if the argument passed is not an object", () => {
      expect( printFullName("John Doe") ).toEqual(undefined);
      expect( printFullName(123) ).toEqual(undefined);
      expect( printFullName(true) ).toEqual(undefined);
    });

    it("should return undefined if the firstName or lastName properties are not provided", () => {
      expect( printFullName({ firstName: "John" }) ).toEqual(undefined);
      expect( printFullName({ lastName: "Doe" }) ).toEqual(undefined);
      expect( printFullName({}) ).toEqual(undefined);
    });

    // REFACTOR - Additional test
    it("should return undefined if the firstName or lastName properties are not strings", () => {
      expect( printFullName({ firstName: 123, lastName: "Doe" }) ).toEqual(undefined);
      expect( printFullName({ firstName: "John", lastName: 123 }) ).toEqual(undefined);
      expect( printFullName({ firstName: 123, lastName: 123 }) ).toEqual(undefined);
    });
    
  });
});