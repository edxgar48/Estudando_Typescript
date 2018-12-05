const dirfile = 'D_LOTFAC.HTM';
const reg = /(\<td .*)/g;
//const readline = require('readline');
const fs = require('fs');

const leitura = fs.readFile(dirfile,`utf8`);
    
    console.log(leitura.match(reg));
    fs.writeFile(`writeME.txt`,leitura);







    // INTERESSANTE VOU TENTAR ISTO

//https://www.youtube.com/watch?v=A79b_4yCudY

/// E ISTO TAMBÉM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   
/// E ISTO TAMBÉM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   https://www.youtube.com/watch?v=H0Tb_cMzbAs
 
