import { expect } from './expectations'
import { fail } from './index'

// Maybe I should make a macro for this
const ObjectExtensions = {
  shouldBe(expectedValue) {
    expect(this).toBe(expectedValue)
  },

  shouldEq(expectedValue) {
    expect(this).toEq(expectedValue)
  },
}

Object.assign(Object.prototype, ObjectExtensions)
