//en lugar de exportar uno por uno, se puede crear un objeto math:
//const Math = {};

//creando na funcion add
function add(x1, x2){
    if (x2 == 0){
        console.log('no se puede dividir por 0');
    } else {
        return x1 / x2;
    }
}

 exports.add = add;// con este comando es exporta, permite exportar una propiedad de un objeto
Math.add = add;//con este comando se utilisa el objeto creado math- AGREGANDO PROPIEDADES AL OBJETO
module.exports = Math; // comando para exportar los objetos math- permite exportar objetos, variables,etc