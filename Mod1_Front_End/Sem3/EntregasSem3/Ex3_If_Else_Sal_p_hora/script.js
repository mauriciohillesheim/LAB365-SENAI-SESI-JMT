const nomeFuncionario = "Carlos Souza";
const setorFuncionario = "Produção";
const horasTrabalhadas = 230;
const valorHoraFuncionario = 25.0;
const horasMensaisPadrao = 220;

document.getElementById("nome").textContent = nomeFuncionario;
document.getElementById("setor").textContent = setorFuncionario;
document.getElementById("horas").textContent = horasTrabalhadas;
document.getElementById(
    "valor-hora"
).textContent = `R$ ${valorHoraFuncionario.toFixed(2)}`;

let salarioNormal, horasExtras, adicionalExtras, salarioTotal;

if (horasTrabalhadas <= horasMensaisPadrao) {
    salarioNormal = horasTrabalhadas * valorHoraFuncionario;
    horasExtras = 0;
    adicionalExtras = 0;
} else {
    salarioNormal = horasMensaisPadrao * valorHoraFuncionario;
    horasExtras = horasTrabalhadas - horasMensaisPadrao;
    adicionalExtras = horasExtras * (valorHoraFuncionario * 2);
}

salarioTotal = salarioNormal + adicionalExtras;

document.getElementById("horas-normais").textContent =
    horasTrabalhadas <= horasMensaisPadrao
        ? horasTrabalhadas
        : horasMensaisPadrao;
document.getElementById("horas-extras").textContent = horasExtras;
document.getElementById(
    "salario-normal"
).textContent = `R$ ${salarioNormal.toFixed(2)}`;
document.getElementById(
    "adicional-extras"
).textContent = `R$ ${adicionalExtras.toFixed(2)}`;
document.getElementById(
    "salario-total"
).textContent = `R$ ${salarioTotal.toFixed(2)}`;