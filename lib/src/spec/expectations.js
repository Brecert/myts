"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
class BaseExpectation {
    constructor(actualValue) {
        this.actualValue = actualValue;
    }
    /**
     * the fail message to use when a spec fails
     */
    failMessage(expectedValue, not = false) {
        const actualValue = JSON.stringify(this.actualValue);
        expectedValue = JSON.stringify(expectedValue);
        const not_string = not ? '[not]' : '';
        return `Expected${not_string}: ${expectedValue}\n                         got: ${actualValue}`;
    }
}
class EqualExpectation extends BaseExpectation {
    match(expectedValue) {
        const actualValue = this.actualValue;
        return actualValue === expectedValue;
    }
}
class BeExpectation extends BaseExpectation {
    match(expectedValue) {
        const actualValue = this.actualValue;
        return Object.is(expectedValue, actualValue);
    }
}
class Expected {
    constructor(actualValue) {
        this.actualValue = actualValue;
        this._not = false;
    }
    /**
     * invert the expected values truthyness
     */
    get not() {
        this._not = !this._not;
        return this;
    }
    /**
     * if the Object is expected to equal a value
     */
    toEq(expectedValue) {
        this.base_if(EqualExpectation, expectedValue);
    }
    /**
     * if the Object is expected to be the same value
     */
    toBe(expectedValue) {
        this.base_if(BeExpectation, expectedValue);
    }
    base_if(exp, expectedValue) {
        const expectation = new exp(this.actualValue);
        if (!expectation.match(expectedValue) !== this._not) {
            index_1.fail(expectation.failMessage(expectedValue, this._not));
        }
    }
}
// todo: document this better
/**
 * any
 */
function expect(actualValue) {
    return new Expected(actualValue);
}
exports.expect = expect;
