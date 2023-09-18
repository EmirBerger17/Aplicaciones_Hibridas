export function multiplicar(numero){
    let resultado=[];;
    for(let i=1; i<=12;i++){
        resultado.push(`${numero} x ${i} = ${numero*i}`); 
    }
    return resultado;
}

import { esPar } from "./node.cjs";
console.log(esPar(7));