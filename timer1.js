let args = process.argv.slice(2);

const beep = function(array) {
  for(let each of array) {
    if(each > 0) {
      setTimeout( () => {
        process.stdout.write('\x07');
      }, each * 1000);
    }
  }
};

beep(args);