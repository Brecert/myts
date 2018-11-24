import { expect } from './expectations'
import { fail } from './index'

// todo: Maybe I should make a macro for this
const ObjectExtensions = {
  shouldBe(expectedValue) {
    expect(this).toBe(expectedValue)
  },

  shouldEq(expectedValue) {
    expect(this).toEq(expectedValue)
  },
}

Object.assign(Object.prototype, ObjectExtensions)

interface Object {
  /**
   * if the Object should be the same value
   */
  shouldBe(expectedValue: any): void

  /**
   * if the Object should be equal to a value
   */
  shouldEq(expectedValue: any): void
}
