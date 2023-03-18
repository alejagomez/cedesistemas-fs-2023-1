//v1 funcion tradicional
function sumar(numero1, numero2) { //numero1 y numero2 son parametros de la funcion, cuando le paso el valor a la funcion se llaman argumentos
    return numero1 + numero2; //puedo retornar inmediatamente el resultado
}

const resultado = sumar(3, 7); //el resultado deberia ser una constante que va a almacenar una función entre dos numeros porque no va a cambiar en el tiempo


//funcion (arrow function)

const sumarFlecha1 = (numero1, numero2) => { //se una llaves cuando tengo una función de varias lineas, serie de sentencias y al final un return. Función con retorno explicito es que vamos a usar llaves
    return numero1 + numero2;
}

const sumarFlecha2 = (numero1, numero2) => (numero1 + numero2)//cuando escribo una función con retorno implicito, es decir no escribo la palabra return, se hace la operación directamente en la funcion

const sumarFlecha3 = (numero1, numero2) => numero1 + numero2;

