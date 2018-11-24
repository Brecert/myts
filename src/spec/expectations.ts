import { fail } from './index'

abstract class BaseExpectation<T> {
  constructor(public actualValue: T) {}

  /**
   * the match conditions
   */
  abstract match(expectedValue)

  /**
   * the fail message to use when a spec fails
   */
  failMessage(expectedValue, not = false) {
    const actualValue = JSON.stringify(this.actualValue)
    expectedValue = JSON.stringify(expectedValue)
    const not_string = not ? '[not]' : ''
    return `Expected${not_string}: ${expectedValue}\n                         got: ${actualValue}`
  }
}

class EqualExpectation<T> extends BaseExpectation<T> {
  match(expectedValue) {
    const actualValue = this.actualValue

    return actualValue === expectedValue
  }
}

class BeExpectation<T> extends BaseExpectation<T> {
  match(expectedValue) {
    const actualValue = this.actualValue

    return Object.is(expectedValue, actualValue)
  }
}

class Expected<T> {
  private _not: boolean

  constructor(public actualValue: any) {
    this._not = false
  }

  /**
   * invert the expected values truthyness
   */
  get not() {
    this._not = !this._not
    return this
  }

  /**
   * if the Object is expected to equal a value
   */
  toEq(expectedValue) {
    this.base_if(EqualExpectation, expectedValue)
  }

  /**
   * if the Object is expected to be the same value
   */
  toBe(expectedValue) {
    this.base_if(BeExpectation, expectedValue)
  }

  private base_if(exp, expectedValue) {
    const expectation = new exp(this.actualValue)

    if (!expectation.match(expectedValue) !== this._not) {
      fail(expectation.failMessage(expectedValue, this._not))
    }
  }
}

// todo: document this better
/**
 * any
 */
export function expect<T>(actualValue: T) {
  return new Expected(actualValue)
}
