/* TESTE
Var
// Seção de Declarações das variáveis 
       nota1 , nota2, media : real
       nome : caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreval ("Digite o nome do aluno : ")
      leia (nome)
      escreval ("Digite a nota1 do aluno : ")
      leia (nota1)
      escreval ("Digite a nota2 do alino : ")
      leia (nota2)
      
      media := (nota1+nota2)/2
      
      se nota1 >=50 entao
      
         escreval (" Aluno aprovado : ", nome)
      
      senao
      
           escreval ("Aluno reprovado : ", nome)

           fimse
Fimalgoritmo
*/
var nome, nota1, nota2;
nome = window.prompt("Digite o nome do aluno: " + nome)
nota1 = window.prompt("Digite a nota1 do aluno: "+ nota1)
nota2 = window.prompt("Digite a nota2 do aluno: "+ nota2)
media = (parseInt(nota1) + parseInt(nota2))/2;

if (media >= 5)
	alert("Aprovado: " + nome)
else
	alert("Reprovado: " + nome)
