/* 
variável:
caixinha para guardar informações que serão utilizadas posteriomente.

plavrinhas mágicas para criar variáveis:

var
let
const

var: é a forma mais antiga de criar variáveis, mas é recomendada para uso apenas em casos específicos, pois tem um comportamento diferente das outras palavras-chave.
let: é a forma mais comum de criar variáveis atualmente, pois tem um comportamento mais previsível e é mais fácil de entender.
const: é usada para criar variáveis que não podem ser reatribuídas, ou seja, seu valor não pode ser alterado depois de definido.
*/

/* funções
      É um trecho de código que, só é executado, quando chamado. ( quando nós quisermos)
      palavrinhas mágicas para criar funções:

function: é a forma mais tradicional de criar funções, e é amplamente utilizada em JavaScript.
arrow function: é uma forma mais concisa de criar funções, introduzida no ES6. Ela tem uma sintaxe mais curta e não tem seu próprio contexto de "this", o que pode ser útil em algumas situações.
 */



/* objetivo: quando clicar no botao, mostra o formulário e a máscara 
    qual botão clicar?
    qual formulário?
    qual máscara?
    o que é mostrar?
        trazer o formulário da esquerda para direita
        centralizar o formulário na tela 
        exibir a máscara
*/

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarform(){
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderform(){
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}



