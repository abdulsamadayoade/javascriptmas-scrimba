function validTime(str) {
  // check if the given string is a correct representation of the 24 hour clock
  // Use a regular expression to check if the string has the format "HH:MM"
  // This function uses a regular expression to check if the string has the format "HH:MM", where "HH" is a two-digit hour from 00 to 23, and "MM" is a two-digit minute from 00 to 59. If the string matches this pattern, the function returns true. Otherwise, it returns false.
    var regex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(str);
}

/**
* Test Suite 
*/
describe('validTime()', () => {
  it('returns true for valid time', () => {
      // arrange
      const str = '13:58';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(true);
  });

  it('returns false when invalid hours', () => {
      // arrange
      const str = '25:51';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(false);
  });

  it('returns false when invalid minutes', () => {
      // arrange
      const str = '02:76';
      
      // act
      const result = validTime(str);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(false);
  });
});