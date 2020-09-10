/* TESTE
 passou = falso
      escreval ("Digite o nome do aluno : ")
      leia (nome)
      escreval ("Digite a nota1 d aluno : ")
      leia (nota1)
      escreval ("Digite a nota2 do alino : ")
      leia (nota2)
      
      media := (nota1+nota2)/2
      
      se nota1 >=50 entao
         passou = verdadeiro
      fimse
      
      se (passou) && (media>=50 || media>=70) entao  // Exemplo disjunção exclusiva, ou seja,
         escreval (" Aluno aprovado : ", nome)       //a primeira proposição tem que ser verdadeira e
      senao                                          //uma das outras duas proposiçoes tem que ser verdadeira
           escreval ("Aluno reprovado : ", nome)     // para que a primeira condição seja executada.
           fimse
           
*/
var nome, nota1, nota2 , passou;
passou = false
nome = prompt("Digite o nome do aluno: " + nome)
nota1 = prompt("Digite a nota1 do aluno: "+ nota1)
nota2 = prompt("Digite a nota2 do aluno: "+ nota2)
media = (parseInt(nota1) + parseInt(nota2))/2;

if (media >= 5)
	passou = true;
//Exemplo de condiional
/*	
if (passou)
	alert("Aprovado: " + nome)
else
	alert("Reprovado: " + nome)
endif
*/

//Exemplo de negação
/*	
if (!passou)
	alert("Reprovado: " + nome)
else
	alert("Aprovado: " + nome)
endif
*/

//Exemplo de conjunção
/*
if (passou && media>=7)
	alert("Aprovado: " + nome)
else
	alert("Reprovado: " + nome)
endif
*/

//Exemplo de Disjunção

/*
if (passou || media>=7)
	alert("Aprovado: " + nome)
else
	alert("Reprovado: " + nome)
endif
*/

//Exemplo Disjunção Exclusiva


if (passou && (media>=5 || media>=7))
	alert("Aprovado: " + nome)
else
	alert("Reprovado: " + nome)
endif
