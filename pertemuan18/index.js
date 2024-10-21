//Asynchronous Js

//Synchronous -> single thread
console.log("proses 1");
console.log("proses 2");
console.log("proses 3");

//Asynchronous -> multi thread -> blocking
// 1. Paralel
setTimeout(() => {
  console.log("proses 1");
}, 3000);
console.log("proses 2");
setTimeout(() => {
  console.log("proses ");
}, 5000);
console.log("proses 4");

//2. concurrency
setTimeout(() => {
  console.log("proses 1");
  setTimeout(() => {
    console.log("proses 2");
    setTimeout(() => {
      console.log("proses 3");
      setTimeout(() => {
        console.log("proses 4");
      }, 3000);
    }, 3000);
  }, 000);
}, 3000);
