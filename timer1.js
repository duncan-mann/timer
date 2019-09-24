let args = process.argsv.slice(1);

const beep = function(array) {
  for(let each of array) {
    setTimeout( () => {
      process.stdout.write('\x07');
    }, each * 1000);
  }
}

beep(args);