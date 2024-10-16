# A. TypeScript Calculator

A simple string calculator implemented in TypeScript following Test-Driven Development (TDD) principles.

## Project Setup

### 1. Initialize the Project

First, create a new directory for your project and initialize it with npm.

```bash
mkdir ts-calculator
cd ts-calculator
npm init -y
```

### 2. Install Dependencies

Install TypeScript, Jest, and the necessary types for testing.

```bash
npm install typescript jest ts-jest @types/jest --save-dev
```

### 3. Set Up TypeScript Configuration

```javascript
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

### 4. Set Up Jest Configuration

Create a jest.config.js file in the project root with the following content:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
};
```

### 5. Set Up Jest Configuration

Create the necessary directories and files for your project.

```bash
mkdir src
mkdir __tests__
touch src/calculator.ts
touch __tests__/calculator.test.ts
```

### 5. Set Up Project Structure

Create the necessary directories and files for your project.

```bash
mkdir src
mkdir __tests__
touch src/calculator.ts
touch __tests__/calculator.test.ts
```



## B. Test-Driven Development (TDD)

### 1. Write the First Test (Addition)

Create a test for the addition function in **tests**/calculator.test.ts.

```javascript
import { Calculator } from "../src/calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

 it('when string is empty should return 0', () => {
        expect(calculator.add('')).toBe(0);
  });

  test("should add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
});
```

### 2. Run the Test and See It Fail

Run the test to ensure it fails (as we haven't implemented the Calculator class and add method yet).

```bash
npx jest

```


### 3. Implement the Feature to Pass the Test

Implement the addition function in src/calculator.ts.

```javascript
export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
```

### 4. Run the Test Again

Run the test again to ensure it passes.

```bash
npx jest
```
