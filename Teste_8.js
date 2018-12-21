const dirfile = 'D_LOTFAC.HTM';
const reg = /(\<td .*)/g;
const readline = require('readline');
const fs = require('fs');

//const fs = require(`fs`);
//console.log(s.match(reg));

/// ISSO FUNCIONA AGORA PRECISO ITERAR DENTRO DO ARQUIVO d_LOTOFAC.HTM USANDO UM LAÇO FOR

const myReadStream =fs.createReadStream(dirfile,'utf8');
//const myWriteStream =fs.createWriteStream(__dirname +'/Ajeitado.Txt');//ISSO FUNCIONA



myReadStream.on('data',(chunk_pedaco)=>{
  
   console.log(chunk_pedaco.match(reg));// ISSO FUNCIONA

   //let sequencia = console.log(chunk_pedaco.match(reg));//ISSO NÃO FUNCIONA
   //myWriteStream.write(console.log(chunk_pedaco.match(reg)));// ISSO NÃO FUNCIONA
   //myWriteStream.write(console.log(sequencia)));// ISSO NÃO FUNCIONA
})

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push