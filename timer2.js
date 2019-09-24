const readline = require('readline');

const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  SIGINT: 'Thanks for using me, ciao!'
});

const beep = function() {
  ask.question('What do you want to do?', (answer) => {
    if (answer === 'b') {
      process.stdout.write('\x07');
      answer = beep();
    } else if (answer >= 1 && answer <= 9) {
      console.log(`setting timer for ${answer} seconds...`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, answer * 1000);
      answer = beep();
    }
    ask.on('SIGINT', () => {
        ask.close();
    });
  });
};

beep();


// let args = process.argv.slice(2);

// const beep = function(array) {
//   for(let each of array) {
//     if(each > 0) {
//       setTimeout( () => {
//         process.stdout.write('\x07');
//       }, each * 1000);
//     }
//   }
// };

// beep(args);