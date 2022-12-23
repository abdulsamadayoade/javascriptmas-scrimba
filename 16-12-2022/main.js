function insertDashes(arr) {
  // write code here
  const arr1 = arr.split(" ");
  const arr2 = arr1.map((item) => {
    return item.split("").join("-");
  });

  return arr2.join(" ");
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
  it('insert dashes in between chars', () => {
      // arrange
      const value = "aba caba";
      
      // act
      const result = insertDashes(value);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe("a-b-a c-a-b-a");
  });
});