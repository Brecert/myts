import './extensions'
export * from './expectations'

/**
 * [unfinished]
 */
export function describe(description: string, cb) {
  cb()
}

/**
 * [unfinished]
 */
export function it(description: string = 'assert', cb) {
  cb()
}

/**
 * throw an assertion fail
 */
export function fail(msg: string) {
  throw new Error(`[AssertionFailed] ${msg}`)
}
