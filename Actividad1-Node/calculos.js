const suma = (num1,num2) =>{
    return num1+num2;
}
const division = (num1,num2) =>{
    return num1/num2;
}
const mayor = (array) =>{
    let numMayor=0;
    for(let i=0; i< array.length;i++){
        if(array[i]>numMayor){
            numMayor = array[i];
        }
    }
    console.log('Número Mayor: '+numMayor);
}
const array=[2,8,9,7,5,6];
console.log('Suma: '+suma(5,10));
console.log('División: '+division(20,2));
console.log('División: '+division(20,0));
mayor(array);