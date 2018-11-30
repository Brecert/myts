"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expectations_1 = require("./expectations");
// todo: Maybe I should make a macro for this
const ObjectExtensions = {
    shouldBe(expectedValue) {
        expectations_1.expect(this).toBe(expectedValue);
    },
    shouldEq(expectedValue) {
        expectations_1.expect(this).toEq(expectedValue);
    },
};
Object.assign(Object.prototype, ObjectExtensions);
