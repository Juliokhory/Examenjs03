console.log("B2 - Retornar un valor desde un closure");
console.log("la funcion se llama 'retornarValor( )'");
function retornarValor(n){
    var d = n;
    return (function (){
        return d;
    })()
}
