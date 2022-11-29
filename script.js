 //VAR

const entrada = document.getElementById('entrada')
const resultado = document.getElementById('resultado')
const button = document.getElementById('button')

 //FUNÇÃO
function boasVindas(){

     // "!" inversão de polaridade
    if (!entrada.value){
        resultado.innerText = "Digite algum nome:"
        return
    }
    resultado.innerText = `Boas vindas ${entrada.value}!!!`

}
 
//EVENTO
button.addEventListener("click", boasVindas)
