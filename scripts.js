
/*

Variáveis -> Um espaço de memória que você reserva
e pode guardar o que quiser lá dentro.

Existem 3 jeitos de se criar uma variável

- var / jeito antigo - NÃO USE
- let -> pode alterar o valor depois
- const -> constante


Funções -> Um trecho de código executado quando é chamado


*/


const form = document.querySelector(".Formulario-Fale-Conosco")
const mascaraform = document.querySelector(".mascara-formulario")

function mostrarForm(){
        
        form.style.left = "50%"
        form.style.transform = "translateX(-50%)"
        mascaraform.style.visibility = "visible"

}

function esconderForm(){

    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascaraform.style.visibility = "hidden"

}