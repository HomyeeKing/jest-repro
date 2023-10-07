import {describe, expect, test} from '@jest/globals';
import { add } from '../src/utils/aa'

test('test add',()=>{
  expect(add()).toBe(3)
})