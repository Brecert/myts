"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/spec/index");
index_1.it("shouldn't crash", () => { });
index_1.it('should be true', () => {
    index_1.expect(true).toEq(true);
});
index_1.it('should not be false', () => {
    index_1.expect(true).not.toEq(false);
});
index_1.it('should not match equally', () => {
    index_1.expect(+0).not.toBe(-0);
});
index_1.it('should match correctly', () => {
    index_1.expect(false).not.toEq(true);
});
index_1.it('should have prototypes', () => {
    // note: ts doesn't like overriding/mixin things, it needs to be disable
    // @ts-ignore
    'hello!'.shouldEq('hello!');
});
