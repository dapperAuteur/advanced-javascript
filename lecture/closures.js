// Table of contents
//   * Scope review
//   * Identify a closure
//   * Challenges/exercises
//   * See where you've already been using closures
//   * Why are closures useful?

// First, scope review

var a = 7;

function f() {
  // What is a?
  // console.log('a', a)

  var b = 8;
}

// What is b?
// console.log('b', b)

// Now with block scope

const c = 9;

if (true) {
  // What is c?
  // console.log('c', c)
  let d = 10;
}

// What is d?
// console.log('d', d)

// The rule with scope is simple. We can see values outside of the function we're in. But we can't see values inside of other functions. (If we're talking about const and let, replace the word "function" with the word "block" and it's still the same.) Simple right? We can't violate this rule, right?

// So what's up with this?
// Ignore this container function, it's just so we can keep reusing these variable names.
// Every function is a different scope after all.
function container10() {
  function x() {
    // Could use var here. Same diff. It's not the point.
    const m = 11;
    function y() {
      return m;
    }
    return y;
  }

  const q = x();
  // What data type is q? How could you know, based on the line below?
  const n = q();
  // console.log("n", n);
}
// Where does the function y execute?
// container10();

// Above we were able to get access to the value m from outside the scope!
// It doesn't stop at just reading the value. We can even manipulate it.
// Note this slight change.
function container20() {
  function x() {
    let m = 11;
    function y() {
      m++;
      // console.log("m", m);
    }
    return y;
  }

  const q = x();
  q();
  q();
  const q2 = x();
  q2();
  q();
  q2();
}
// container20();

// Closures

// By the end of this, you might know how to describe closures better than some senior developers. The only thing you'll need is more practice. But you've actually been writing and using closures already.

// Definition from MDN: "A closure is the combination of a function and the lexical environment within which that function was declared."
// Ty's Definition: a closure is controlled access to a scope, via a function.

// By passing functions, we can give the ability to access a scope that otherwise wouldn't be possible. Technically all functions are closures. Not all functions are used as closures, as in, for the sake of accessing a scope

// Challenge highlight in your editor the closure in container20.

// Hmm. When we call x(), m is created as a local variable. What happens if we call x again? That's right, it's created as a separate local variable! The second time x() is called, it's a new and separate scope!
function container30() {
  function x() {
    let m = 11;
    function y() {
      m++;
      // console.log('m', m)
    }
    return y;
  }

  const q = x();
  q();
  q();
  const q2 = x();
  q2();
}
container30();

// Challenge 1

// Here's a copy of container10 from above. Modify it here such that m can be initialized from the outside. As in, we don't necessarily want m to start at 11.
function container11() {
  function x() {
    const m = 11;
    function y() {
      return m;
    }
    return y;
  }

  const q = x();
  const n = q();
  // console.log('n', n)
}

container11();

// Trivia. Is this a closure? Why or why not? (Remember the discussion is more
// important than the answer.)
const msg = "hi";
// setTimeout(() => console.log(msg), 0)

// Challenge 2: Make i print properly (1-5, not all 6). Do not change var to
// let; there's another way.
function container40() {
  for (var i = 1; i <= 5; i++) {
    // setTimeout(() => console.log(`timeout for i = ${i}`), i * 1000);
  }
}
container40();

// Trivia: are we using a closure here?
const startingCharacter = "T";
const names = ["T$", "Dudley", "Trent"];
const awesomeNames = names.filter(x => x.startsWith(startingCharacter));
// console.log('awesomeNames', awesomeNames)

// Challenge 3: What will newArray be?
function container50() {
  const array = [7, 8, 9];

  function f1() {
    let amount = 1;
    return () => {
      amount *= -1;
      return amount;
    };
  }

  function f2() {
    const f3 = f1();
    const newArray = array.map(x => x * f3());
    // console.log("newArray", newArray);
  }
  f2();
}
// container50();

// Module pattern
// If you understand closures, you understand the module pattern. Rather than passing 1 function, we pass multiple functions, use in an object. This is how node modules work.

// Run the closures2.js file.

// Challenge: Make a 'module'.
// Challenge: Make a module and use it in React.

// IIFE
// Have you seen an immediately invoked function expression before?
(function() {
  const oldSetTimeout = setTimeout;
  setTimeout = (fn, ms) => {
    // Do something extra here...
    // Now call original setTimeout.
    oldSetTimeout(fn, ms);
  };
})();
// Why would we do this?

// Why closures? Keeping data private? Why? It's not really about security. It's called encapsulation. Encapsulation means we can do things without exposing HOW they are done. That way, someone who uses our code doesn't rely on how we do things. If they rely on how we do things, and we change it, their code breaks.

// Example: imagine we make a School class, and it has a addStudent(studentId, name) method that can be called many times, a deleteStudent(id) method, and a getStudents() method that returns an array. Initially we store our students in an array property named 'students'. Someone who uses our code wants to update a student, and they think to themselves "hey, rather than delete the student and re-add them, since I can access the students property directly, I'll just do that in one line of code rather than two!" Unfortunately, if we change our implementation and stop using an array and instead use an object, we have just broken our code. If this is a small company, it might not be a big deal. If it's a popular library, such a change just might "break the internet".

// Challenge: do it for yourself here. Create a school class and use it as mentioned above, using addStudent and deleteStudent. Then change the class from storing students as an array to storing them as an object. Watch your code break. There's no better way to learn than to experience the "pain"; it's memorable.

class School {
  constructor(studentId, name) {
    // this.studentId = studentId;
    // this.name = name;
    this.students = [];
  }
  addStudent(studentId, name) {
    this.students.push({ studentId, name });
  }
  deleteStudent(studentId) {
    let oldStudents = this.students;
    let newStudents = oldStudents.filter(
      student => student.studentId !== studentId
    );
    this.students = newStudents;
  }
  getStudents() {
    return this.students;
  }
}

let s = new School();

s.addStudent("studentId", "name");
s.addStudent("studentId0", "name0");
s.addStudent("studentId1", "name1");
console.log("s 218");
console.log(s);
s.deleteStudent("studentId0");
console.log("s 221");
console.log(s);
console.log("s.getStudents()");
console.log(s.getStudents());

/*
Closures alternative
function school() {
  const students = [];
  return {
    addStudent() {},
    deleteStudent() {},
    getStudents() {}
  }
}
*/

// Challenge: have your neighbor ask you "what is a closure?" The best answer will include a description of when/where you've used closures before.

// More: debounce.
// Practical use: button click count: https://codepen.io/tylercollier/pen/exbeMj?editors=1011
