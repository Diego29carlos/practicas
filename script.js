const array1 = [1,2,3,]
const array2 = [1,2,3]
const array3 = [1,2,3]

function mergeArrays(...array){

    let resultado = [];

    for(let i = 0; i<mergeArrays.length; i++){

        resultado = resultado.concat(array[i]);
    }

    return resultado;
}