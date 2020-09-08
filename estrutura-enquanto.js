/*
// Seção de Declarações das variável
    nome: caracter
    idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite o numero de vezes que quer fazer validação de idade  ")
   leia (limite)
   contador:=0
   enquanto contador < limite faca
            escreva("Digite o nome: ")
            leia (nome)
            escreva("Digite a idade: ")
            leia (idade)
            se (idade > 18) entao
               escreval (nome, "Eh maior de idade")
               senao
               escreval (nome, "Eh menor de idade")
            fimse
            contador:=contador+1
   fimenquanto

Fimalgoritmo
*/
function acaoBotao() {
	
	var nome, idade, limite, contador
		limite = prompt("Digite o numero de vezes que quer fazer validação de idade  ")
		contador = 0
		while (contador < limite) {
			nome= prompt("Digite o nome: ")
		    idade= prompt("Digite a idade de " +nome+ ": ")
		    	if (idade > 18) 
		    		document.getElementById("paragrafo").innerText = nome + " Eh maior de idade"
			    else
			    	document.getElementById("paragrafo").innerText = nome + " Eh menor de idade"
		    	contador++  
		}
	}
	