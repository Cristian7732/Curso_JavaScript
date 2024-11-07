/**
 * Indice validar que no sea menor a cero y que el elemento exista en el array
 */

function getbyIdx(arr, idx){
      
    if (idx < 0){
        return 'El valor debe ser superior a cero';
    }

    if (idx >= arr.length){
        return 'El indice no existe en el array';
    }

    let valor = arr[idx];
    
    return valor;
}

let resultado = getbyIdx([1,2],0);
console.log(resultado);

