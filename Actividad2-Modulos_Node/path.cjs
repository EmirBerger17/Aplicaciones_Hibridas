const path = require('path');
const fs = require('fs');
const os = require('os');

console.log(path.join(__dirname, 'archivos', 'nots.txt'));
console.log(fs.readFileSync('./archivos/notas.txt','utf-8'));
console.log(path.join(__dirname, 'archivos', 'info.txt'));
const informacion = `Sistema opetrativo: ${os.platform()} ${os.arch}\r`;
fs.writeFileSync('info.txt',informacion);
fs.writeFile('info.txt','Emir Berger, Hola mundo',{flag: "a"},(error,data) =>{
    if(error){
        console.log(error);
    }else{
        console.log('archivo modificado');
    }
});