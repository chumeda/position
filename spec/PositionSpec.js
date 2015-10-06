/* globals position*/
describe("Position", function() {
  var testList = [1,3,5,6];

  it("should give 2 when passed 5", function() {
    expect(position(testList,5)).toEqual(2);
  });
  it("should give 1 when passed 2", function() {
    expect(position(testList,2)).toEqual(1);
  });
  it("should give 4 when passed 7", function() {
    expect(position(testList,7)).toEqual(4);
  });
  it("should give 0 when passed 0", function() {
    expect(position(testList,0)).toEqual(0);
  });
});
