import './extensions'
export * from './expectations'

export function describe(description: string, cb) {
  cb()
}

export function it(description: string = 'assert', cb) {
  cb()
}

export function fail(msg: string) {
  throw new Error(`[AssertionFailed] ${msg}`)
}
