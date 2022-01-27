function checkingInput(val) {
    if (isNaN(val)) {
      throw new Error('please provide a number, try again');
    }
    if (val > 100 || val < 1) {
      throw new Error('write a number between 1 and 100');
    }
    if (val % 3 === 0 && val % 5 === 0) {
      return 'FizzBuzz';
    }
    if (val % 3 === 0) {
      return 'Fizz';
    }
    if (val % 5 === 0) {
      return 'Buzz';
    }
    return val;
  }
  