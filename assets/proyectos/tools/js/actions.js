// Crear un elemento display a partir del ID display.
var display = document.getElementById("display");
// Obtener el array con todos los elementos de la clase operador, que son 4 tipos.
var operadores = document.getElementsByClassName("operador");
//-- Obtener el array con todos los elementos de la clase digito, que son 10 nº.
var numeros = document.getElementsByClassName("digito");
// Crear un elemento igual, para dar la solucion a la operación mostrada en display, a partir del ID igual.
var igual = document.getElementById("igual");
// Crear un elemento para reiniciar el display o pantalla a 0, mostrando el 0,
// a partir del ID clear.
var clear = document.getElementById("clear");
// Crear un elemento para borrar el último nº o carácter del display o pantalla,
// empezando por la derecha, a partir del ID del.
var del = document.getElementById("del");
// Crear un elemento para calcular el porcentaje de un nº a partir del ID percien.
var porcentaje = document.getElementById("percien");
// Crear un elemento para calcular el cuadrado de un nº a partir del ID potencia2.
var cuadrado = document.getElementById("potencia2");
// Crear un elemento para calcular el cubo de un nº a partir del ID potencia3.
var cubo = document.getElementById("potencia3");

// Estados o momentos de la calculadora en una cte Momento.
// Momento/Fase en que estás, de la calculadora:
// Momento/Fase 0: inicial, no has metido nada.
// Momento/Fase 1: 1º operando.
// Momento/Fase 2: operador.
// Momento/Fase 3: 2º operando.
// Con todos esos momentos ya puedes dar a =.
// Si metes otro nº, se mantiene en la fase 3.
// Cuando pulsas =, va a la fase 1.
const MOMENTO = {
  INIT: 0,
  OP1: 1,
  OPER: 2,
  OP2: 3,
}

// Variable de la fase inicial.
let fase = MOMENTO.INIT;

// Variable que cuenta los nº que hay en el operando 2.
let numOp2 = 0;

//-- La función digito es una función donde se procesan las operaciones con los
// dígitos, en cada momento o cada fase.
function digito(ev)
{
    // Empezamos comprobando, con el estado o momento inicial.
    if(fase == MOMENTO.INIT)
    {
      // Escribimos en la pantalla.
      display.innerHTML = ev.target.value;
      // Pasamos al siguiente estado.
      fase = MOMENTO.OP1;
    }
    else if(fase == MOMENTO.OP1 || fase == MOMENTO.OP2 || fase == MOMENTO.OPER)
    {
      // Escribimos en la pantalla a continuación de lo anterior.
      display.innerHTML += ev.target.value;
      // Entra sólo cuando se haya escrito el operador.
      if(fase == MOMENTO.OPER)
      {
        // Pasamos al siguiente estado.
        fase = MOMENTO.OP2;
        // Inicializamos a 1 la variable que cuenta los nº que hay en el operando 2.
        numOp2 = 1;
      }
      else if(fase == MOMENTO.OP2)
      {
        // Incrementamos la variable que cuenta los nº que hay en el operando 2.
        numOp2 += 1;
      }
    }
}

// Al pulsar un dígito de los 10 digitos o nº que componen la calculadora Huawei web.
for (let boton of numeros) {
  // Al pulsar, accedemos a la función digito.
  boton.onclick = digito;
}

// Al pulsar un botón de los operadores.
for (let operador of operadores) {
  operador.onclick = (ev) => {
    if(fase == MOMENTO.OP1)
    {
      // Escribimos en la pantalla a continuación de lo anterior.
      display.innerHTML += ev.target.value;
      // Pasamos al siguiente estado.
      fase = MOMENTO.OPER;
    }
  }
}

// Al pulsar el botón igual, nos da el resultado final de la operación.
igual.onclick = () => {
  if(fase == MOMENTO.OP1 || fase == MOMENTO.OP2)
  {
    // Evaluamos lo que hay en pantalla o display con función eval(). 
    // Y sobreescribimos lo que hay en dicha pantalla o display 
    // con el resultado final de la operación evaluada.
    let resultado = eval(display.innerHTML);
    if(resultado % 1 !== 0)
    {
      resultado = resultado.toFixed(2);
      display.innerHTML = resultado;
    }else {
      display.innerHTML = eval(display.innerHTML);
    }
    
    // Pasamos a la fase 1.
    fase = MOMENTO.OP1;
  }
}

// Al pulsar el botón de AC, para reiniciar a 0, mostrando el 0.
clear.onclick = (ev) => {
  // Reiniciar el display o pantalla a 0, mostrando el 0.
  display.innerHTML = ev.target.value;
  // Pasamos a la fase 0.
  fase = MOMENTO.INIT;
}

// Al pulsar el botón de DEL, borras el último nº o carácter del display,
// empezando por la derecha.
del.onclick = () => {
  // Borrar el último nº o carácter del display, empezando por la derecha.
  display.innerHTML = display.innerHTML.slice(0,-1);
  // Procedimiento que opera según en qué fase se encuentre.
  switch(fase) 
  {
    case MOMENTO.INIT:
      break;

    case MOMENTO.OP1:
      if(display.innerHTML == "")
      {
        // Pasamos a la fase 0.
        fase = MOMENTO.INIT;
      }
      break;

    case MOMENTO.OPER:
      // Pasamos a la fase 1.
      fase = MOMENTO.OP1;
      break;

    case MOMENTO.OP2:
      // Decrementamos la variable que cuenta los nº que hay en el operando 2.
      numOp2 -= 1;
      if(numOp2 == 0)
      {
        // Cambio fase.
        fase = MOMENTO.OPER;
      }
      break;
  }
}

// Al pulsar el %, calcula el porcentaje del OP1 o del resultado final (sólo cuando está
// en la fase 1).
porcentaje.onclick = (ev) => {
  if(fase == MOMENTO.OP1)
  {
    // Multiplico el valor del operando 1 o del resultado final por 0.01 y se sobreescribe.
    let porcentuando = display.innerHTML * ev.target.value;
    if(porcentuando % 1 !== 0)
    {
      porcentuando = porcentuando.toFixed(2);
      display.innerHTML = porcentuando;
    }else {
      display.innerHTML *= ev.target.value;
    }
  }
}
// Al pulsar el ^2, calcula el cuadrado del OP1 o del resultado final (sólo cuando está
// en la fase 1).
cuadrado.onclick = () => {
  if(fase == MOMENTO.OP1)
  {
    // Multiplico el valor del operando 1 o del resultado final por 0.01 y se sobreescribe.
    let alcuadrado = display.innerHTML ** 2;
    if(alcuadrado % 1 !== 0)
    {
      alcuadrado = alcuadrado.toFixed(2);
      display.innerHTML = alcuadrado;
    }else {
      display.innerHTML **= 2;
    }
  }
}

// Al pulsar el ^3, calcula el cubo del OP1 o del resultado final (sólo cuando está
// en la fase 1).
cubo.onclick = () => {
  if(fase == MOMENTO.OP1)
  {
    // Multiplico el valor del operando 1 o del resultado final por 0.01 y se sobreescribe.
    let alcubo = display.innerHTML ** 3;
    if(alcubo % 1 !== 0)
    {
      alcubo = alcubo.toFixed(2);
      display.innerHTML = alcubo;
    }else {
      display.innerHTML **= 3;
    }
  }
}