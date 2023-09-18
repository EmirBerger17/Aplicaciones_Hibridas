import('./node.mjs').then(({multiplicar})=>{
    console.log(multiplicar(8));
})

function esPar(numero){
    let parImpar='';
    if(numero%2 == 0){
        parImpar= 'Es par';
    }else{
        parImpar= 'Es impar';
    }
    return parImpar;
}
module.exports = {esPar};