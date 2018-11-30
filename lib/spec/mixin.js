"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/spec/index");
const mixin_1 = require("../src/mixin");
class A {
    constructor() {
        this.last = 'a';
        this.a = 'a';
    }
}
const B = (superclass) => class extends superclass {
    constructor() {
        super(...arguments);
        this.last = 'b';
        this.b = 'b';
    }
};
const C = (superclass) => class extends superclass {
    constructor() {
        super(...arguments);
        this.last = 'c';
        this.c = 'c';
    }
};
const D = (superclass) => class extends superclass {
    constructor() {
        super(...arguments);
        this.last = 'd';
        this.d = 'd';
    }
};
class E extends mixin_1.mix(A).with(B, C, D) {
}
index_1.it('joins five classes together', () => {
    let klass = new E();
    index_1.expect(klass.a).toEq('a');
    index_1.expect(klass.b).toEq('b');
    index_1.expect(klass.c).toEq('c');
    index_1.expect(klass.d).toEq('d');
    index_1.expect(klass.last).toEq('d');
});
