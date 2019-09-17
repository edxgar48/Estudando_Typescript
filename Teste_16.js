//const dirfile = 'd_lotfac.htm'
const dirfile_2 = 'BIG_DATA_2.csv'
//const reg = /<td rowspan="\d.*">\d.*/g   // essa REGEX é MUUUITO  MELHOR
//const reg_2 = /(\<td rowspan="\d.*"\>)|(<\/td>)/g
//const reg = /(\<td .*)/g  // essa NÂO serviu proque tem algumas linhas dentro do <td> que estão mal formatadas no original

const reg_3 = /\r\n|\n/ // ------>>>>> essa REGEX casa bem com windows ou linux ou mac ....
                        // ------>>>>> essa REGEX .*(?:(?=\,)) acho que vou ter que casar isso para mais um ajuste no arquivo 
                        // ------>>>>> ela casa tudo que estiver antes de uma virgula
                        // ------>>>>> vou ter que voltar no Teste_12.js e fazer mais essa alteração para ajustar o arquivo BIG_DATA.csv
                        // ------>>>>> pois o numero de linhas total do arquivo não esta batendo, para simplesmente fazer o laço for e salvar em DataBase
const fs = require('fs')
//const replace = require('replace-in-file');
const regex1 = "  "

const dirfile_1 = 'BIG_DATA.csv'


// ----->>>>>  exemplo do site :   https://stackoverflow.com/questions/23331546/how-to-use-javascript-to-read-local-text-file-and-read-line-by-line
//

fs.readFile(dirfile_2, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let result = data.split(reg_3);

  // for (let i = 0; i <= 14; i++) {
  //   console.log(result.unshift(i))


  // }
  //const i = 0
  for (let i=0;i<=16;i++){
  console.log(result[i]) // ------->>>>>FUNCIONA LÊ O PRIMEIRO INDICE DO ARRAY (RETORNA 1, NO CASO)
     if (i>16){
       result.unshift(i)
       i=0
     }
  }    
  //console.log(typeof(result)) // ----->>>>>RETORNA UM OBJECT

  //console.log(result) // ------>>>>>> FUNCIONA  LÊ TUDO COMO UM UNICO ARRAY
  
  // if (result === "+") {S
  //   for (let i = 0; result.length(i) <= 14; i++) {
  //     result.unshift(i)
  //     i = [0]
  //     console.log(result)
  //   }
  //   // //console.log(result)  
  // } 

  // result.forEach(function(line, index, arr) {
  //   if (index === arr.length - 1 && line === " ") { return; }
  //   console.log(index + " " + line);
  // });

  // for (result>=16;result.length;result++) {



  //   }
  
})


// handleFiles(input) ;{

//   const file = input.target.files[0];
//   const reader = new FileReader();

//   reader.onload = (event) => {
//       const file = event.target.result;
//       const allLines = file.split(/\r\n|\n/);
//       // Reading line by line
//       allLines.forEach((line) => {
//           console.log(line);
//       });
//   };

//   reader.onerror = (event) => {
//       alert(event.target.error.name);
//   };

//   reader.readAsText(file);
// }

//
// ------>>>> Fim do exemplo anterior
//------->>>> mais um exemplo : https://gist.github.com/cowboy/777bdf8eb9b757691346

//const stream_2 = fs.createWriteStream(dirfile_2,'utf8')
//const myreadStream = fs.createReadStream(dirfile_other,'utf8')

//myreadStream.on('data',(chunk_)=>{

  //  var myReturn = chunk_.replace(reg_2,'') // este parte das REGEX funciona o match funciona mas NÃO o REPLACE

    //  myReturn.forEach((trechoEncontrado_2)=> { stream_2.write(trechoEncontrado_2 + '\n'); });
//})

// const lendo = fs.createReadStream(dirfile_1,'utf8')
// lendo.on('data',(pegaga)=>{

//   var retorno =pegapega.match(regex1)
//   retorno.forEach((elemento) => {
    
//   });

// })

// fs.readFile(dirfile_1, 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }

//   for (let i=0;i<16;i++) {

//     if (i < 16){
//       console.log(data)
//       if (i>=30) {
//         data.unshift()
//       }
//     } 




//   }
  
  
  
  
  
  
  
  
//   //let result = data.replace(reg_2,'');

//  // fs.writeFile(dirfile_2, data, 'utf8', function (err) {
//    //  if (err) return console.log(err);
//  // });
// });