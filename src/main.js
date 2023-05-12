
var operadora = 0;
var operadorb = 0;
var operacion = "";
var esperando_operacion = false;
var esperando_valorb = false;


const teclado = document.getElementById("tresult");

const boton1 = document.getElementById("btn1");
boton1.addEventListener("click", (evento) => {
    //console.log("teclado.value");//
    concatenar(1);
})


const boton2 = document.getElementById("btn2");
boton2.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(2);
})

const boton3 = document.getElementById("btn3");
boton3.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(3);
})

const boton4 = document.getElementById("btn4");
boton4.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(4);
})

const boton5 = document.getElementById("btn5");
boton5.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(5);
})

const boton6 = document.getElementById("btn6");
boton6.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(6);
})

const boton7 = document.getElementById("btn7");
boton7.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(7);
})

const boton8 = document.getElementById("btn8");
boton8.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(8);
})

const boton9 = document.getElementById("btn9");
boton9.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(9);
})

const boton0 = document.getElementById("btncero");
boton0.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(0);
})

const botonpunto = document.getElementById("btnpunto");
botonpunto.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    concatenar(".");
})

const botonlimpiar = document.getElementById("btnlimpiar");
botonlimpiar.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    teclado.value = "";
})

const botonsuma = document.getElementById("btnsuma");
botonsuma.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    esperando_valorb = true;
    operacion = "+";

    if (operadora == 0) {
        operadora = teclado.value;
    }
    else {
        (operadorb = teclado.value)
    }

    if(operadorb == 0){
        operadorb = teclado.value;
    }
    else{
        (operadora = teclado.value)
    }

})

const botonresta = document.getElementById("btnresta");
botonresta.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    esperando_valorb = true;
    operacion = "-";

    if (operadora == 0) {
        operadora = teclado.value;
    }
    else {
        (operadorb = teclado.value)
    }

    if(operadorb == 0){
        operadorb = teclado.value;
    }
    else{
        (operadora = teclado.value)
    }

})

const botonmultiplicar = document.getElementById("btnmultiplicacion");
botonmultiplicar.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    esperando_valorb = true;
    operacion = "*";

    if (operadora == 0) {
        operadora = teclado.value;
    }
    else {
        (operadorb = teclado.value)
    }

    if(operadorb == 0){
        operadorb = teclado.value;
    }
    else{
        (operadora = teclado.value)
    }

})

const botondividir = document.getElementById("btndivision");
botondividir.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    esperando_valorb = true;
    operacion = "/";

    if (operadora == 0) {
        operadora = teclado.value;
    }
    else {
        (operadorb = teclado.value)
    }

    if(operadorb == 0){
        operadorb = teclado.value;
    }
    else{
        (operadora = teclado.value)
    }

})

function concatenar(valor) {
    if (esperando_valorb == false) {
        teclado.value += valor;
    }

    else {
        esperando_valorb = false;
        teclado.value = valor;
    }

}

const botonigual = document.getElementById("btnigual");
botonigual.addEventListener("click", (evento) => {
    //console.log("hola boton2");//
    esperando_valorb = true;

    if (operadora == 0) {
        operadora = teclado.value;
    }
    else {
        (operadorb = teclado.value)
    }
    calcular();
})

    const calcular= () => {

operadora=Number(operadora);
operadorb=Number(operadorb);

        switch(operacion){
            case '+':
                teclado.value = `${operadora + operadorb}`;
            break;
            case '-':
                teclado.value = `${operadora - operadorb}`;
            break;
            case '*':
                teclado.value = `${operadora * operadorb}`;
            break;
            case '/':
                teclado.value = `${operadora / operadorb}`;
            break;
        }
    };

       





