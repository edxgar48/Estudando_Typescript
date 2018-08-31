const fs = require('fs');
const dirfile = 'D_LOTFAC.HTM';
const flagfile = 'r+';


let filesize = fs.statSync(dirfile).size;
console.log(filesize);

let buf = new Buffer(filesize);

fs.open(dirfile,flagfile,(err,fd)=>{
    if (err) {
        console.log(`code: ${err.code}\nmesage: ${err.mesage}`);  // ATENÇÃO A TECLA DE ASPAS QUE USEI NO WINDOWS ESTÁ A ESQUERDA AO LADO DA LETRA P 
    }else{
        //console.log(`file (${fd})sucesso em abrir`); // ATENÇÃO A TECLA DE ASPAS QUE USEI NO WINDOWS ESTÁ A ESQUERDA AO LADO DA LETRA P a que está abaixo da tecla ESc nao funciona

        
        let Bytes_ = fs.readSync(fd,buf,0,filesize,0);
        console.log(`Bytes_ ${Bytes_}`);
        console.log(`buf ${buf.toString()}`);

        fs.close(fd, (err) => {
            console.log('Arquivo fechado !!!!');

        })
    }
    
})