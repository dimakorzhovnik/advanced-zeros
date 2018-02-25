module.exports = function getZerosCount(number, base) {
  // your implementation
  let tempBase = base,
      result = number;

  for (let i = 2; i <= base; i++) {

    if (tempBase % i == 0) {
      let n = 0;

      for (; tempBase % i == 0;) {

        tempBase /=  i;
        n++;
      }
      let count = 0;
      let tempNumber = number
      for (; tempNumber / i > 0;) {

        count = count + Math.floor(tempNumber / i);
        tempNumber /= i;
      }
      let z = Math.floor(count / n);
      if (result > z) {

        result = z;
      }

    }

  }

  return result;
}
