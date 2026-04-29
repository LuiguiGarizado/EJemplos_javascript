// Hoisting
console.log(x);
var x = 10;

// Closure
function contador() {
  let num = 0;
  return function() {
    num++;
    console.log(num);
  };
}

// Ejercicios
// 1. Crear una función que sume dos números

function sumNumero(num1, num2) {
  return num1 + num2
}
const resultado = sumNumero (5,30);
console.log(resultado)

// 2. Crear un contador con closure

function closure() {
  let num = 0;
  return function () {
    num++;
    console.log(num)
  };
}

const suma = closure();
const final = 100;

for( let i = 0; i < final; i++) {
  suma()
}


// 3. Diferencia entre var, let, const

const = " se le conoce como constante, y es inmutable, es decir, no se puede modificar luego"
var = " Es un ambito de funcion, que permite redeclarar y reasignar"
let = "Es un ambito de funcion, que permite reasignar, pero no redeclarar"

// 4. Crear un callback simple
// 5. Manipular DOM (crear elemento)


