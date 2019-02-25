const { getNameForPhonebook } = require("./context2");

class Person {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

function tellEmWhyYouMad(reasonWhyYoureMad) {
  return reasonWhyYoureMad;
}

// add getNameForPhonebook function to Person Class
Person.prototype.getNameForPhonebook = getNameForPhonebook;
Person.prototype.tellEmWhyYouMad = tellEmWhyYouMad;

const t$ = new Person("earl", "jones");
const awe = new Person("awe", "ful");

console.log("getNameForPhonebook.apply()", getNameForPhonebook.apply(t$));
console.log("getNameForPhonebook.bind()", getNameForPhonebook.bind(t$));
console.log("getNameForPhonebook.call()", getNameForPhonebook.call(t$));
console.log(
  "awe.tellEmWhyYouMad(my shit john blaze)",
  awe.tellEmWhyYouMad("my shit john blaze")
);
