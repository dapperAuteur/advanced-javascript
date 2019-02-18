const request = require("request");
const fs = require("fs");
// console.log(request);

// Note: we're going to be using fakeAxios instead of axios. It's just a simulation.
// It doesn't really contact the internet so it's much faster. It uses promises
// so should get the point across exactly the same.
const fakeAxios = require("./fakeAxios");

// What order are these printed in? Draw a picture like from the video.
// Think about it, then uncomment it and run it.
// How could we change it?
// console.log('1')
// fakeAxios.get('some url').then(response => {
//   console.log('2')
// })
// console.log('3')

// Look, it's the same with async callbacks. Think about it, then uncomment it and run it.
// console.log('1')
// setTimeout(() => console.log('2'), 100)
// console.log('3')

// Watch this video until 17:30:
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en

// Challenge. Write a function called setTimeout2 that takes milliseconds first and a callback
// second, but otherwise behaves like setTimeout.
// solution
// function waitAndThenDoStuff(cb, time) {
//   setTimeout(cb, time);
// }

// function con(params) {
//   console.log(params);
// }

// request('https://jsonplaceholder.typicode.com/users/1', (err, result) => {
//   {
//     if (err) {
//       // Do something, ...
//       return
//     }
//     console.log('result', result.body);
//   }

//   request('https://jsonplaceholder.typicode.com/users/badurl', (err, response, body) => {
//   {
//     console.log('err', err);
//     console.log('response.statusCode', response.statusCode);
//   }
// })

// node style callback
// superagent('ur', (err, result)) {

// }

// fs.readFile("./lecture/async.jsk", "utf8", (err, text) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("got text!", text);
// });

// const p = new Promise(resolve => {
//   setTimeout(resolve, 500);
// });

// p.then(() => {
//   console.log("done");
// });

// const delay = function(time) {
//   console.log("before promise");
//   return new Promise(resolve => {
//     console.log("in promise, before timeout");
//     setTimeout(resolve, time);
//     console.log("in promise, after timeout");
//   });
//   console.log("after promise");
// };

// new Promise((resolve, reject) => {
//   reject(new Error("bad stuff happened"));
// });

// const readFilePromise = function(fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, "utf8", (err, contents) => {
//       if (!err) {
//         console.log("contents 92", contents);
//         resolve(contents);
//       } else {
//         console.log(err);
//         reject(err);
//       }
//     });
//   });
// };

// readFilePromise("./lecture/async.js").then(contents => {
//   console.log("contents", contents);
// });
// readFilePromise("./error.js").catch(error => {
//   console.log("error", error);
// });

// delay(500);
// delay(500).then(console.log(".then do stuff"));

// How can we get this code to not resemble callback hell (nesting)?
// Try to clean it up and produce the same result (console.log the results array).
// const results = [];
// fakeAxios.post("www.getlatlon.fake", { ip: "fake" }).then(response1 => {
//   results.push(response1.data);
//   fakeAxios
//     .post("www.getaddressfromlatlon.fake", { latlon: response1.data })
//     .then(response2 => {
//       results.push(response2.data);
//       fakeAxios
//         .get("www.registerhereforspam.fake", { address: response2.data })
//         .then(response3 => {
//           results.push(response3.data);
//           console.log("results", results);
//         });
//     });
// });

// solution
// const results = [];

// fakeAxios
//   .post("www.getlatlon.fake", { ip: "fake" })
//   .then(response => {
//     results.push(response.data);
//     return fakeAxios.post("www.getaddressfromlatlon.fake", {
//       latlon: response.data
//     });
//   })
//   .then(response => {
//     results.push(response.data);
//     return fakeAxios.get("www.registerhereforspam.fake", {
//       address: response.data
//     });
//   })
//   .then(response => {
//     results.push(response.data);
//     console.log("results", results);
//   });

// Promise.all([fakeAxios.get("1"), fakeAxios.get("2")]).then(
//   ([response1, response2]) => {
//     console.log([response1, response2]);
//   }
// );

function multiPromise(array) {
  let arr = [];
  let response1Done = false;
  let response2Done = false;
  return new Promise((resolve, reject) => {
    // console.log(array);
    if (response1Done) {
      resolve();
    } else if (response2Done) {
    }
    for (let i = 0; i < array.length; i++) {
      resolve(arr[i]);
      arr.push(array[i]);
    }
    return arr;
  });
}

multiPromise([fakeAxios.get("1"), fakeAxios.get("2")]).then(
  ([response1, response2]) => {
    console.log("response1", response1);
    console.log("response2", response2);
  }
);

//
// fs.readFile(fileName, "utf8", (err, contents) => {
//   if (!err) {
//     console.log("contents 92", contents);
//     resolve(contents);
//   } else {
//     console.log(err);
//     reject(err);
//   }
// });
