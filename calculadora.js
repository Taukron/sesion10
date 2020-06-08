function Calculadora() {
    var total = 0;
    var numeroAnterior;
    console.log("Bienvenido");
    var ciclo = true;
    do {

        console.log("1.- Sumar");
        console.log("2.- Restar");
        console.log("3.- Multiplicar");
        console.log("4.- Dividir");
        console.log("5.- Regresar");
        console.log("6.- Borrar");
        console.log("7.- Salir");
        var op = prompt("Ingrese la opcion deseada");
        let n;
        let m;
        switch (op) {
            case "1":
                console.log("total: " + total);
                n = prompt("Ingrese valor    a sumar");
                m = parseInt(n);
                console.log("Operacion: " + total + " + "+ m);
                sumar(m);
                console.log("resultado: " + total);
                break;
            case "2":
                console.log("total: " + total);
                n = prompt("Ingrese valor a restar");
                m = parseInt(n);
                console.log("Operacion: " + total + " - "+ m);
                restar(m);
                console.log("resultado: " + total);
                break;
            case "3":
                console.log("total: " + total);
                n = prompt("Ingrese valor a multiplicar");
                m = parseInt(n);
                console.log("Operacion: " + total + " x "+ m);
                multi(m);
                console.log("resultado: " + total);
                break;
            case "4":
                console.log("total: " + total);
                n = prompt("Ingrese valor a dividir");
                m = parseInt(n);
                console.log("Operacion: " + total + " / "+ m);
                dividir(m);
                console.log("resultado: " + total);
                break;
            case "5":
                console.log("total: " + total);
                regresar();
                console.log("Anterior total: " + total);
                break;
            case "6":
                console.log("total: " + total);
                borrar();
                console.log("Nuevo total: " + total);
                break;       
            default:
                ciclo = false;
                break;
        }
    } while (ciclo);
    
    function sumar(n) {
        numeroAnterior = total;
        total = n + total;
    }
    function restar(n){
       numeroAnterior = total;
       total = total - n;
    }
    function multi(n){
       numeroAnterior = total;
       total = n * total;
        
    }
    function dividir(n) {
        numeroAnterior = total;
        total = total/n;
    }
    function regresar() {
        if(numeroAnterior != null){
        total = numeroAnterior;
        }
    }
    function borrar() {
        total = 0;
    }
}

Calculadora();