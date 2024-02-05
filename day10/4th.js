const { math } = require('./secret');

const operations = Object.create(math);

operations.sum = function() {
  return this.num1 + this.num2;
};

operations.product = function() {
  return this.num1 * this.num2;
};

try {
  module.exports = { operations };
} catch(e) {}
