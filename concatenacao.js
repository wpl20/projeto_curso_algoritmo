/* TESTE
// Seção de Declarações das variáveis 
   nome : caractere
   numero : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("Digite o nome do usuario")
   leia(nome)
   escreval("Digite o numero do usuario")
   leia(numero)
   escreval ("Nome: ",nome,"   Numero: ",numero)

Fimalgoritmo
*/
var nome, numero;

nome = prompt("Digite o nome do usuario")
numero = prompt ("Digite o numero do usuario")
document.getElementById("paragrafo").innerText = "Nome : "+ nome + ";    Numero :"+ numero