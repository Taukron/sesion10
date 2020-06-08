var entrada;
var valores = [];
var desc = [];
class Encriptador{

    constructor(){
        entrada = "Bienvenidos";
    }
    
    encriptar(frase){
        var cadenaEncriptada = "";
        let letra;
        for (let index = 0; index < frase.length; index++) {
            //console.log(frase[index].charCodeAt());
            //frase[index].charCodeAt();
            letra = frase[index].charCodeAt();
            if(letra > 64 && letra < 91){
                if(letra == 90){
                    valores.push(65);
                }
                else{
                valores.push(letra + 1);
                }
            }
            if (letra > 96 && letra < 123) {
                if(letra == 122){
                    valores.push(97);
                }
                else{
                valores.push(letra + 1);
                }
            } else {
                valores.push(letra);
            }
            
            
        }
        for (let index = 0; index < valores.length; index++) {
            
            cadenaEncriptada = cadenaEncriptada + String.fromCharCode(valores[index]);
            
        }
        console.log("Cadena Encriptada: " + cadenaEncriptada);
    }
    desencriptar(frase){
        var cadenaEncriptada = "";
        let letra;
        for (let index = 0; index < frase.length; index++) {
            //console.log(frase[index].charCodeAt());
            //frase[index].charCodeAt();
            letra = frase[index].charCodeAt();
            if(letra > 64 && letra < 91){
                if(letra == 65){
                    desc.push(90);
                }
                else{
                desc.push(letra - 1);
                }
            }
            if (letra > 96 && letra < 123) {
                if(letra == 97){
                    desc.push(122);
                }
                else{
                desc.push(letra - 1);
                }
            } else {
                desc.push(letra);
            }
            
            
        }
        for (let index = 0; index < desc.length; index++) {
            
            cadenaEncriptada = cadenaEncriptada + String.fromCharCode(desc[index]);
            
        }
        console.log("Cadena Encriptada: " + cadenaEncriptada);
    }
    mostrarMenu(){
        var ciclo = true;
        let o = new Encriptador();
        do {
            console.log("Selecione una opcion");
            console.log("1.- encriptar");
            console.log("2.- desencriptar");
            console.log("3.- salir");
            var op = prompt("Ingrese opcion: ");
            switch (op) {
                case "1":
                    
                    let e = prompt("Ingrese una oracion cualquiera: ");
                    o.encriptar(e);
                    break;
                case "2":
                    let d = prompt("Ingrese frase a desencriptar");
                    o.desencriptar(d);
                    break;
                default:
                    ciclo = false;
                    break;
            }
        } while (ciclo);
    }
}
var ob = new Encriptador();
ob.mostrarMenu();
//ob.mostrarEncriptado();

