const a = {
  message: 'hello'
}

const b = a
const c = b

// console.log('b === a', b === a)
// console.log('c === a', c === a)

a.message = 'goodbye'

// console.log('a.message', a.message)
// console.log('b.message', b.message)







const d = [1, 2, 3]
const e = d
const f = e
// console.log('e === d', e === d)
// console.log('f === d', f === d)
d[1] = 77
// console.log('d[1]', d[1])
// console.log('e[1]', e[1])










const g = [1, 2, 3]
const h = g.slice()
// console.log('g === h', g === h)
g[1] = 99
// console.log('g[1]', g[1])
// console.log('h[1]', h[1])













const m = [{ name: 'T$' }]
const n = m.slice()
// console.log('m === n', m === n)
m[0].name = 'Jemira'
// console.log('m[0]', m[0])
// console.log('n[0]', n[0])
// console.log('n[0] === m[0]', n[0] === m[0])






// How could you make a deep copy of this array?
// You could use Lodash's cloneDeep.
// What if you had to do it yourself? What if you knew the structure (e.g. an array of objects)? And what if you didn't?








// So what's wrong with this code?
function render() {
  const array = [7, 9, 8]
  const count = array.length
  const max = getMax(array)
  
  return `<div>
    <div>Max value: ${max}</div>
    <div>Count of values: ${count}</div>
  </div>`
}
function getMax(arr) {
  let max = arr[arr.length - 1]
  while (arr.length) {
    arr.pop()
    if (arr[arr.length - 1] > max) {
      max = arr[arr.length - 1]
    }
  }
  return max
}
// console.log('render()', render())





// What's wrong with this code?
function exercise1() {
  const arr = [{ name: 'Tiffany' }, { name: 'Panil' }]
  const indexOfTiffany = arr.indexOf({ name: 'Tiffany' })
  // console.log('indexOfTiffany', indexOfTiffany)
}
exercise1()
