const readline = require('readline');

// Calculator class definition
class Calculator {
  validateInputs(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Both arguments must be numbers.");
    }
  }
  add(a, b) {
    this.validateInputs(a, b);
    return a + b;
  }

  subtract(a, b) {
    this.validateInputs(a, b);
    return a - b;
  }

  multiply(a, b) {
    this.validateInputs(a, b);
    return a * b;
  }

  divide(a, b) {
    this.validateInputs(a, b);
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

}

const cal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = new Calculator();

cal.question('Enter the first number: ', (num1) => {
  cal.question('Enter the second number: ', (num2) => {
    cal.question('Choose an operation (+, -, *, /): ', (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      try {
        let result;
        switch (operation) {
          case '+':
            result = calculator.add(a, b);
            break;
          case '-':
            result = calculator.subtract(a, b);
            break;
          case '*':
            result = calculator.multiply(a, b);
            break;
          case '/':
            result = calculator.divide(a, b);
            break;
          default:
            console.log('Invalid operation. Please choose +, -, *, or /.');
            cal.close();
            return;
        }

        console.log(`Result: ${result}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
      }
      cal.close();
    });
  });
});
