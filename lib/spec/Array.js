"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/spec/index");
require("../src/Array");
index_1.it('gets empty array', () => {
    let array = new Array().defaultValue('default');
    return array[0].shouldEq('default');
});
index_1.it('gets non-empty array', () => {
    let array = new Array().defaultValue('default');
    array.push('hello!');
    return array[0].shouldEq('hello!');
});
index_1.it('differs between even and odd', () => {
    let array = new Array().defaultValue(v => (v % 2 == 0 ? 'even' : 'odd'));
    array[2].shouldEq('even');
    array[3].shouldEq('odd');
});
