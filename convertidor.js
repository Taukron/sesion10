class convertidor{
    
    constructor() {
        
    }
    conversion(n){
        let m = parseInt(n);
        var decimal = n;
        var binario = m.toString(2);
        var octal = m.toString(8);
        var hexadecimal = m.toString(16);
        
        let numeros={};

        numeros.decimal = decimal;
        numeros.binario = binario;
        numeros.octal = octal;
        numeros.hexadecimal = hexadecimal;

        
        console.table(numeros);
    }
}

var ob = new convertidor();
var n = prompt("Ingrese un numero cualquiera");
ob.conversion(n);