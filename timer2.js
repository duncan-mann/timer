const readline = require('readline');

const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const close = function() {
//   console.log('Thanks for using me, caio!');
//   ask.close();
// }

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
  };
}); 
};

const timer = function() {
  beep();
  ask.on('SIGINT', () => {
    console.log('\nThanks for using me, ciao!');
    ask.close();
  });
}

timer();

