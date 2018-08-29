const fs = require('fs');
const dirfile = 'meu_aRQUIVO.TXT';
const flagfile = 'r+';


let filesize = fs.statSync(dirfile).size;
console.log(filesize);

fs.open(dirfile,flagfile,(err,fd)=>{
    if (err) {
        console.log(`code: ${err.code}\nmesage: ${err.mesage}`);  // ATENÇÃO A TECLA DE ASPAS QUE USEI NO WINDOWS ESTÁ A ESQUERDA AO LADO DA LETRA P 
    }else{
        console.log(`file (${fd})sucesso em abrir`); // ATENÇÃO A TECLA DE ASPAS QUE USEI NO WINDOWS ESTÁ A ESQUERDA AO LADO DA LETRA P a que está abaixo da tecla ESc nao funciona

        fs.close(fd, (err) => {
            console.log('Arquivo fechado !!!!');

        })
    }
    
})


//const readtable = fs.readFile('meu_aRQUIVO.TXT',{flag:'w',encoding:'utf8'})
