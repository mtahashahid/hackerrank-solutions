/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// inpur array
let arr = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  // Write your code here
  let maxUnit = Math.max(...candles);
  let count = 0;
  candles.forEach((data) => {
    if (data === maxUnit) {
      count++;
    }
  });
  return count;
}
