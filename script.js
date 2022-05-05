const calculoIMC = (peso, altura) => {
    console.log(imc= (peso / (altura * altura)))
}

const resultadoIMC = (faixaIMC) => {
    if (imc >= 18.5 && imc <= 24.9) {
        console.log(faixaIMC = 'Normal')
      }
      if (imc >= 25.0 && imc <= 29.9) {
        console.log(faixaIMC = 'Sobrepeso')
      }
      if (imc >= 30.0 && imc <= 40.0) {
        console.log(faixaIMC = 'Obesidade')
      }
      if (imc > 40.0) {
        console.log(faixaIMC = 'Obesidade grave')
      }
      return faixaIMC
    }

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " +  imc

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC);
}