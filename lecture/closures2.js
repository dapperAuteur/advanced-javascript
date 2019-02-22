const closures3 = require("./closures3");

const counterThing1 = closures3(100);
const counterThing2 = closures3(200);

counterThing1.incrementLocalCounter();
counterThing1.incrementLocalCounter();
counterThing1.decrementLocalCounter();
const m = counterThing1.incrementLocalCounter();
console.log("m", m);

counterThing2.decrementLocalCounter();
const n = counterThing2.decrementLocalCounter();
console.log("n", n);

counterThing1.incrementGlobalCounter();
counterThing1.incrementGlobalCounter();
counterThing1.incrementGlobalCounter();
counterThing2.incrementGlobalCounter();
counterThing2.incrementGlobalCounter();
const p = counterThing2.incrementGlobalCounter();
console.log("p", p);
