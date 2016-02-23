console.log("B4 - Invertir el orden de un array desde un closure");
console.log("la funcion se llama 'invertirArray( )'");

function invertirArray(n){
    return (function (){
        return n.reverse();
    })()
}
