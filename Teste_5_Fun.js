import { createWriteStream } from 'fs'; //AQUI FUNCIONA MELHOR O ECMA6 JÁ no Teste_4_Fun.js nao funcionou 
const fs = require('fs')

const writetable = createWriteStream('meu_aRQUIVO.TXT',{flag:'w',encoding:'utf8'})
    
writetable.write('Olá Mundão\n')
writetable.write('Eu nem acreidto que consegui finalmente oque queria fazer OOOOOOBBBBBAAAAAAA!!!!!!!\n')
writetable.end('Tchau Belo!!!')
