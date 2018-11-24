import { describe, it, expect } from '../src/spec/index'
import '../src/Array'

it('gets empty array', () => {
  let array = new Array().defaultValue('default')
  return array[0].shouldEq('default')
})

it('gets non-empty array', () => {
  let array = new Array().defaultValue('default')
  array.push('hello!')
  return array[0].shouldEq('hello!')
})

it('differs between even and odd', () => {
  let array = new Array().defaultValue(v => (v % 2 == 0 ? 'even' : 'odd'))

  array[2].shouldEq('even')
  array[3].shouldEq('odd')
})
