import { describe, it, expect } from '../src/spec/index'
import '../src/Object'

it('is not an array', () => {
  expect('Hello!'.isArray).toBe(false)
})

it('is an array', () => {
  expect(['a', 'b', 'c'].isArray).toBe(true)
})
