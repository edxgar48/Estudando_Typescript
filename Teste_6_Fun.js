const readline = require('readline');
const fs = require('fs');
const reg = /(\<td .*)/g;
const casado = ` `;




const rl = readline.createInterface({

    input: fs.createReadStream(`D_LOTFAC.HTM`)


});

    rl.on(`line`,line => {
    console.log('Line from file:',line);


});
    rl.on(`close`, () => {
    console.log(`acabou`);
    
});




//request('http://loterias.caixa.gov.br/wps/portal/loterias/landing/lotofacil/', function (err,res,body){
//    if (!err && res.statusCode === 200) {
//            console.log(body)


////    }
//})