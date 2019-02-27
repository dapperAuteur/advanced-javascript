// Object Oriented Programming (OOP)
// One of the programming paradigms in JavaScript (the other being functional programming).
// We'll talk about inheritance, and then talk about JavaScript's form of inheritance called
// prototypal inheritance.

// OOP is when we focus on objects in the system, rather than just primitive data values (like numbers and strings) and functions. Objects model real life. It's how we think about the things around us, like people and animals and phones and countries. It should feel natural to do OOP, because it's kind of like giving someone a command in real life.

// Some definitions: class, object, instance.

// Here is a common 'builder' function, which makes and returns an object.
function makePerson(first, last) {
  return {
    firstName: first,
    lastName: last,
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
}

const flavian = makePerson('Flavian', 'Price')
// console.log('flavian', flavian)
// console.log('flavian.getFullName()', flavian.getFullName())









// Classes build objects and attach functionality.
class Person {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const rija = new Person('Rija', 'Nehance')
// console.log('rija', rija)
// console.log('rija.getFullName()', rija.getFullName())







// Prove that you learned. What's an advantage of classes over object builder functions?








class Employee extends Person {
  constructor(first, last) {
    super(first, last)
    this.salary = 60000
  }

  giveRaise() {
    this.salary *= 1.20
    return this.salary
  }
}

const workerBee = new Employee('Worker', 'Bee')
// console.log('workerBee', workerBee)
// console.log('workerBee.getFullName()', workerBee.getFullName())
// console.log('workerBee.giveRaise()', workerBee.giveRaise())







// Prove that you learned. What is inheritance?








// What happens with this?
// console.log('rija.giveRaise()', rija.giveRaise())


// What happens if we remove the params in Employee's constructor? Or its call to super?










// Challenge: Create an ORM
// Make a Model class. It should have an `insert` method that accepts an array of values, and
// returns a string that's a SQL statement for an INSERT. To get the name of the table for the
// insert, it should call another method named `getTableName`. To get the names of the fields,
// it should call its `getFieldNames` method. In the Model class, those methods should throw errors.
// Then create a class named BlogPost that extends Model, and fill out those methods.
// Then do the same for a Comment class.







// JavaScript's inheritance mechanism is called prototypal inheritance.
// We don't have to create an object from a class. We can create it from any existing object.
// using Object.create(PROTOTYPE). That object will be known as the new object's prototype.
// For example:
const o1 = {
  favoriteNumber: 42
}
const o2 = Object.create(o1)
// console.log('o2.favoriteNumber', o2.favoriteNumber)







// You can change a prototype of functions as you please.
const o3 = {
  favoritePlayer: 'Lebron'
}
function Foo() {}
const o4 = new Foo()
// console.log('o4.favoritePlayer', o4.favoritePlayer)
Foo.prototype = o3
const o5 = new Foo()
// console.log('o5.favoritePlayer', o5.favoritePlayer)






// You probably know most everything you need to regarding inheritance in JavaScript.
// You'll learn more about inheritance and how it is used in the Java section of our program.
