/*Var TESTE
// Seção de Declarações das variáveis 
   resultado, valor1, valor2, valor3 : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   valor1 := 10
   valor2 := 10
   valor3 := 10
   //resultado := (valor1+valor2)*valor3  exemplo usando multiplicação e soma
   //resultado := (valor1 -  valor2) / valor3   exemplo usando subtação e divisao
   resultado := (valor1+valor2+valor2)/valor3 %2  //exemplo usando modulo
   escreval ("Resultado : ", resultado)

Fimalgoritmo
*/

var resultado, valor1, valor2, valor3;
valor1=10
valor2=10
valor3=10
//resultado = (valor1 + valor2) * valor3 Exemplo usando multiplicação e soma
//resultado = (valor1 - valor2) / valor3 Exemplo usando subtração e divisao
resultado = ((valor1 + valor2 + valor2) / valor3 ) % 2 
alert ("Resultado : " + resultado)