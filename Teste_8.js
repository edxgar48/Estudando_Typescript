const dirfile = 'D_LOTFAC.HTM';
const reg = /(\<td .*)/g;
const readline = require('readline');
const fs = require('fs');

//const fs = require(`fs`);
//console.log(s.match(reg));

/// ISSO FUNCIONA AGORA PRECISO ITERAR DENTRO DO ARQUIVO d_LOTOFAC.HTM USANDO UM LAÇO FOR

const myReadStream =fs.createReadStream(dirfile,'utf8');
const myWriteStream =fs.createWriteStream(__dirname +'/Ajeitado.Txt');

myReadStream.on('data',function(chunk_pedaco){


    //chunk_pedaco.match(reg);// até aqui funcionou vamos ver a linha de baixo agora
    myWriteStream.write(chunk_pedaco.match(reg));
})

