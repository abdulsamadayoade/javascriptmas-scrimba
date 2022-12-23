// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(num) {
  //  write code here.
  const century = Math.floor(num / 100);
  const remainder = num % 100;


  if (remainder === 0) {
    return century;
  }

  return century + 1;
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
  it('returns current century', () => {
      // arrange
      const year = 1905;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 1: ", result);
      
      // assert
      expect(result).toBe(20);
  });
  
  it('returns current century for edge case of start of century', () => {
      // arrange
      const year = 1700;
      
      // act
      const result = centuryFromYear(year);

      // log
      console.log("result 2: ", result);
      
      // assert
      expect(result).toBe(17);
  });    
});