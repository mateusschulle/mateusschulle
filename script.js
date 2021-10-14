// Boolean: true or false
// Null: nulo
// Undefined: indefinido
// Number: numero
// String: palavras

//  + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % Modulo
// ++ Incremento
// -- Decremento

// =   x = y    x = y
// +=  x += y   x = x + y 
// -=  x -= y   x = x - y
// *=  x *= y   x = x * y
// /=  x /= y   x = x / y
// %=  x %= y   x = x % y

// == igual a, compara apenas o valor
// === valor igual e igual, compara o valor e o tipo
// != não é igual, compara apenas o valor
// !== não igual e não igual, compara o valor e o tipo 
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a

// && e
//  || ou
// Negativo !variável

var idade = 20;
var menor20 = idade >= 20;
var maior65 = idade <= 30;
var gratuidade = menor20 && maior65;

console.log ("Idade", idade);
console.log ("É menor que 20?", menor20);
console.log ("É maior que 65", maior65);
console.log ("Recebe gratuidade?", gratuidade);