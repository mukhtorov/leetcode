// No:2726 - https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript

// Solution - 1
// Runtime - 46ms 82.54%
// Memory - 41.12MB 85.58%

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(value) {
    this.value += value;
    return this;
  }

  subtract(value) {
    this.value -= value;
    return this;
  }

  multiply(value) {
    this.value *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.value /= value;
    return this;
  }

  power(value) {
    this.value **= value;
    return this;
  }

  getResult() {
    return this.value;
  }
}
