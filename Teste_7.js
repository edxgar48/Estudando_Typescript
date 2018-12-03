//const s = ` `;
const dirfile = 'D_LOTFAC.HTM';
// const flagfile = 'r+'; // NÃO ESTAVA USANDO ISSO
const reg = /(\<td .*)/g;
const readline = require('readline');
const fs = require('fs');

//const fs = require(`fs`);
//console.log(s.match(reg));

/// ISSO FUNCIONA AGORA PRECISO ITERAR DENTRO DO ARQUIVO d_LOTOFAC.HTM USANDO UM LAÇO FOR

const rl = readline.createInterface({
  input : fs.createReadStream(dirfile,'utf8'),
  output: process.stdout,
  terminal: false
})
rl.on('line',function(line){
  

  
  console.log(line.match(reg));     //console.log(line) // aqui podes fazer o que precisas com cada linha

})


//  FUNCIONOU  FINALMENTE HHEEEE!!!!!!  >>>>>>>>>> AGORA É PRECISO SALVAR EM UM ARQUIVO TEXTO, APENAS O RESULTADO DA SAIDA...
// OQUE FOR null NAO DEVE SER GRAVADO   >>>>>>>>>>  vou tentar com createWriteStream  ou um appendFileSync
// ACHEI NA DOCUMENTAÇÃO EM >>>>> https://nodejs.org/en/docs/guides/backpressuring-in-streams/

// MAS PRECISO APRENDER SOBRE PROCESSOS ASYNCRONOS E SYNCRONOS DO NODEjs

// ESSE É O EXEMPLO QUE ACHEI DO SITE ACIMA >>>>>  VOU TENTAR ISSO MESCLANDO COM O MEU CODIGO>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//const { pipeline } = require('stream');
//const fs = require('fs');
//const zlib = require('zlib');

//// Use the pipeline API to easily pipe a series of streams
//// together and get notified when the pipeline is fully done.
//// A pipeline to gzip a potentially huge video file efficiently:

//pipeline(
//  fs.createReadStream('The.Matrix.1080p.mkv'),
//  zlib.createGzip(),
//  fs.createWriteStream('The.Matrix.1080p.mkv.gz'),
//  (err) => {
//    if (err) {
//      console.error('Pipeline failed', err);
//    } else {
//      console.log('Pipeline succeeded');
//    }
//  }
//);












// TENTEI ISTO MAS NAO DEU CERTO >>>>>>
//var fs = require('fs');

//fs.writeFile("C:\\Pasta\\meuarquivo.txt", "Hello, txt!", function(erro) {

//  if(erro) {
//      throw erro;
//  }

//  console.log("Arquivo salvo");
//});