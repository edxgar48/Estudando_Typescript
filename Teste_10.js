const dirfile = 'D_LOTFAC.HTM'
const reg = /(\<td .*)/g
//const readline = require('readline');
const fs = require('fs')



const myReadStream =fs.createReadStream(dirfile,'utf8');
//const myWriteStream =fs.createWriteStream(__dirname +'/Ajeitado.Txt');//ISSO FUNCIONA

//const escrevendo = fs.createWriteStream("Novo_ajuste.HTML") // ISSO FUNCIONA

myReadStream.on('data',(chunk_pedaco)=>{
  
    //console.log(chunk_pedaco.match(reg))// ISSO FUNCIONA
    // escrevendo.pipe(chunk_pedaco.match(reg))   // ISSO NAO FUNCIONA
    // escrita.pipe(escrevendo)  // ISSO NÃO FUNCIONA
   //let sequencia = console.log(chunk_pedaco.match(reg));//ISSO NÃO FUNCIONA
   //myWriteStream.write(console.log(chunk_pedaco.match(reg)));// ISSO NÃO FUNCIONA
   //myWriteStream.write(console.log(sequencia)));// ISSO NÃO FUNCIONA

fs.createWriteStream("Novo_ajuste.HTML",(err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists')
      return
    }

    throw err
  }
    const writeMyData = chunk_pedaco.match(reg)
    
    writeMyData(fd)  // NÃO DEU ERRO MAS TAMBEM NAO GRAVOU NADA
  })
})
