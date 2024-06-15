let elementoInputUm = document.getElementById("inptNumeroUm")
let elementoInputDois = document.getElementById("inptNumeroDois")
let resultadoElemento = document.getElementById("resultado")

function Soma(){
    let somaNumeros = Number(elementoInputUm.value) + Number(elementoInputDois.value)
    resultadoElemento.value = somaNumeros
}

function Subtracao(){
    let subtracao = Number(elementoInputUm.value) - Number(elementoInputDois.value)
    resultadoElemento.value = subtracao
}

function Divisao(){
    let divisaoNumeros = Number(elementoInputUm.value) / Number(elementoInputDois.value)
    resultadoElemento.value = divisaoNumeros
}

function Multiplicacao(){
    let multiplicacaoNumeros = Number(elementoInputUm.value) * Number(elementoInputDois.value)
    resultadoElemento.value = multiplicacaoNumeros
}

function LimparDados(){
   elementoInputUm.value = ""
   elementoInputDois.value = ""
   resultadoElemento.value = ""

}