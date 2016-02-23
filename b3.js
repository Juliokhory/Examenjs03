console.log("B3 - Ejecutar una funcion dentro de un closure");
var b = function(){
    console.log("imprimo algo");
};
console.log("b es una funcion que solo imprime");
console.log(b);
console.log("la funcion se llama 'functionC( )', pasarle b o una fucnion cualquiera");

function funcionC(n){
    return n();
}
