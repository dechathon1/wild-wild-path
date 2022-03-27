import { listMethods } from '../helpers/list.js'
import { missingOpts } from '../helpers/options.js'
import { testOutput } from '../helpers/output.js'

testOutput(listMethods, [
  {
    input: [{ one: 1, two: 2 }, '*', { entries: true }],
    output: [
      { value: 1, path: ['one'], missing: false },
      { value: 2, path: ['two'], missing: false },
    ],
  },
  { input: [{ one: 1, two: 2 }, [{ type: 'any' }]], output: [1, 2] },
  {
    input: [[1, 2], '*', { entries: true }],
    output: [
      { value: 1, path: [0], missing: false },
      { value: 2, path: [1], missing: false },
    ],
  },
  { input: [{}, '*', missingOpts], output: [] },
  { input: [[], '*', missingOpts], output: [] },
])
