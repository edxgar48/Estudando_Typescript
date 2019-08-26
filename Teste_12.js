const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('BIG_DATA_OTHER.html')
});

var lineno = 0;
rl.on('line', (line)=> {
  
  // for (line,lineno==17);

  //lineno++;
  //console.log('Line number ' + lineno + ': ' + line);
  //console.log(typeof(line))
});