//const s = ` `;
const dirfile = 'D_LOTFAC.HTM';
const flagfile = 'r+';
const reg = /(\<td .*)/g;
const readline = require('readline');
const fs = require('fs');

//const fs = require(`fs`);
//console.log(s.match(reg));

/// ISSO FUNCIONA AGORA PRECISO ITERAR DENTRO DO ARQUIVO d_LOTOFAC.HTM USANDO UM LAÇO FOR

var rl = readline.createInterface({
  input : fs.createReadStream(dirfile),
  output: process.stdout,
  terminal: false
})
rl.on('line',function(line){


  //console.log(line) // aqui podes fazer o que precisas com cada linha

  
  console.log(line.match(reg))

})


//  FUNCIONOU  FINALMENTE HHEEEE!!!!!!  >>>>>>>>>> AGORA É PRECISO SALVAR EM UM ARQUIVO TEXTO, APENAS O RESULTADO DA SAIDA...
// OQUE FOR null NAO DEVE SER GRAVADO 