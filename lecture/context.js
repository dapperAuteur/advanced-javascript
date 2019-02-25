const { getNameForPhonebook } = require('./context2')

class Person {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

const t$ = new Person('T', '$')
console.log('t$', t$)
const fullName = t$.getFullName()
console.log('fullName', fullName)
