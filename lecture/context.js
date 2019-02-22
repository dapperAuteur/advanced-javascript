class Person {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}