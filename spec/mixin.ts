import { describe, it, expect } from '../src/spec/index'
import { mix } from '../src/mixin'

class A {
	last = 'a'
	a = 'a'
}

const B = (superclass) => class extends superclass {
	last = 'b'
	b = 'b'
}


const C = (superclass) => class extends superclass {
	last = 'c'
	c = 'c'
}


const D = (superclass) => class extends superclass {
	last = 'd'
	d = 'd'
}


class E extends mix(A).with(B, C, D) {}

it('joins five classes together', () => {
	let klass = new E()
	expect(klass.a).toEq('a')
	expect(klass.b).toEq('b')
	expect(klass.c).toEq('c')
	expect(klass.d).toEq('d')
	expect(klass.last).toEq('d')
})