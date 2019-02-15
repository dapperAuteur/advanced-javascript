const a = {
  message: "hello"
};

const b = a;
const c = b;

// console.log('b === a', b === a)
// console.log('c === a', c === a)

a.message = "goodbye";

// console.log('a.message', a.message)
// console.log('b.message', b.message)

const d = [1, 2, 3];
const e = d;
const f = e;
// console.log('e === d', e === d)
// console.log('f === d', f === d)
d[1] = 77;
// console.log('d[1]', d[1])
// console.log('e[1]', e[1])

const g = [1, 2, 3];
const h = g.slice();
// console.log('g === h', g === h)
g[1] = 99;
// console.log('g[1]', g[1])
// console.log('h[1]', h[1])

const m = [{ name: "T$" }];
const n = m.slice();
console.log("m === n", m === n);
m[0].name = "Jemira";
console.log("m[0]", m[0]);
console.log("n[0]", n[0]);
console.log("n[0] === m[0]", n[0] === m[0]);

// How could you make a deep copy of this array?
// You could use Lodash's cloneDeep.
// What if you had to do it yourself? What if you knew the structure (e.g. an array of objects)? And what if you didn't?
// Answer: you would need to write a function that would look at each element of an array, or value for an object, and copy it. If that it is itself an array or object, you'd need to copy its elements too, and so on.

// So what's wrong with this code?
// Answer: The getMax function first mutates the array, so the count is 0 because array.length is 0.
// There are several ways to fix, but the best would be to make the getMax function use a strategy
// that doesn't mutate its inputs.
function render() {
  const array = [7, 9, 8];
  const max = getMax(array);
  const count = array.length;

  return `<div>
    <div>Max value: ${max}</div>
    <div>Count of values: ${count}</div>
  </div>`;
}
function getMax(arr) {
  let max = arr[arr.length - 1];
  while (arr.length) {
    arr.pop();
    if (arr[arr.length - 1] > max) {
      max = arr[arr.length - 1];
    }
  }
  return max;
}
// console.log("render()", render());

// What's wrong with this code?
// Answer: it will not find the item because it's looking for a reference to an anonymous object.
// It would be impossible to find it.
// Another solution might be to use arr.findIndex(person => person.name === 'Tiffany').
function exercise1() {
  const arr = [{ name: "Tiffany" }, { name: "Panil" }];
  const indexOfTiffany = arr.indexOf({ name: "Tiffany" });
  console.log("indexOfTiffany", indexOfTiffany);
}
exercise1();
