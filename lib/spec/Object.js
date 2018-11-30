"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/spec/index");
require("../src/Object");
index_1.it('is not an array', () => {
    index_1.expect('Hello!'.isArray).toBe(false);
});
index_1.it('is an array', () => {
    index_1.expect(['a', 'b', 'c'].isArray).toBe(true);
});
