import { describe, it, expect } from '../src/spec/index'

it("shouldn't crash", () => {})

it('should be true', () => {
  expect(true).toEq(true)
})

it('should not be false', () => {
  expect(true).not.toEq(false)
})

it('should not match equally', () => {
  expect(+0).not.toBe(-0)
})

it('should match correctly', () => {
  expect(false).not.toEq(true)
})

it('should have prototypes', () => {
  // note: ts doesn't like overriding/mixin things, it needs to be disable
  // @ts-ignore
  'hello!'.shouldEq('hello!')
})
