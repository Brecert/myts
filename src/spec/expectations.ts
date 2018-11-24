import { fail } from './index'

abstract class BaseExpectation<T> {
  constructor(public actualValue: T) {}

  abstract match(expectedValue)

  failMessage(expectedValue) {
    const actualValue = JSON.stringify(this.actualValue)
    expectedValue = JSON.stringify(expectedValue)

    return `Expected: ${expectedValue}\n                         got: ${actualValue}`
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
  constructor(public actualValue) {}

  toEq(expectedValue) {
    this.base_if(EqualExpectation, expectedValue)
  }

  toBe(expectedValue) {
    this.base_if(BeExpectation, expectedValue)
  }

  private base_if(exp, expectedValue) {
    const expectation = new exp(this.actualValue)

    if (!expectation.match(expectedValue)) {
      fail(expectation.failMessage(expectedValue))
    }
  }
}

export function expect<T>(actualValue: T) {
  return new Expected(actualValue)
}
