const assert = require('assert');

function multiply(num1, num2) {
    return num1 * num2;
}

function random() {
    return Math.floor(Math.random() * 100) + 1;
}

function mod(num1, num2) {
    return num1 % num2;
}

function max(numbers) {
    return Math.max(...numbers);
}

describe('index.js', function() {
    describe('multiply', function() {
        it('is an equation whose multiplied results will equal 62', function() {
            const num1 = 31;
            const num2 = 2;
            assert.strictEqual(multiply(num1, num2), 62);
        });
    });

    describe('random', function() {
        it('generates a random integer greater than 0', function() {
            const result = random();
            assert.ok(result > 0);
        });
    });

    describe('mod', function() {
        it('is an equation that calculates a remainder that is equal to 4', function() {
            const num1 = 10;
            const num2 = 6;
            assert.strictEqual(mod(num1, num2), 4);
        });
    });

    describe('max', function() {
        it('will return 20 as the highest number in the set', function() {
            const numbers = [10, 15, 20, 5];
            assert.strictEqual(max(numbers), 20);
        });
    });
});