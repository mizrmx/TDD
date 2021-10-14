import { calculator } from ".";

test("sum calculator", () => {
    const result = calculator.sum(1, 2);
    expect(result).toBe(3);
});

test.todo("substrack calculator");

test.todo("multiply calculator");

test.todo("divide calculator");

//npm install --save-dev babel-jest @babel/core @babel/preset-env
// https://jestjs.io/docs/using-matchers