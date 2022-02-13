console.log('1.1 script start');

const interval = setInterval(() => {
  console.log('2.1 (e 4.1) setInterval');
}, 0);

setTimeout(() => {
  console.log('3.1 setTimeout 1');

  Promise.resolve()
    .then(() => {
      console.log('3.2.1 promise 3');
    })
    .then(() => {
      console.log('3.2.2 promise 4');
    })
    .then(() => {
      setTimeout(() => {
        console.log('4.2 setTimeout 2');
        Promise.resolve()
          .then(() => {
            console.log('4.3.1 promise 5');
          })
          .then(() => {
            console.log('4.3.2 promise 6');
          })
          .then(() => {
            clearInterval(interval);
          });
      }, 0);
    });
}, 0);

Promise.resolve()
  .then(() => {
    console.log('1.4.1 promise 1');
  })
  .then(() => {
    console.log('1.4.2 promise 2');
  });

console.log('1.2 Lucas Tick');

let result = 0;

for (let i = 0; i < 900000000; i++) {
  result++;
}

console.log(`1.3 RESULT: ${result}`);
