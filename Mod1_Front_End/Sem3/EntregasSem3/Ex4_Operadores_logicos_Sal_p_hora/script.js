const nomeFuncionario = "Maria Silva";
const setorFuncionario = "AD";
const horasTrabalhadas = 230;
const valorHoraBase = 30.0;
const horasMensaisPadrao = 220;

let valorHoraAjustado = valorHoraBase;

if (setorFuncionario === "AD") {
    valorHoraAjustado = valorHoraBase * 1.1;
} else if (setorFuncionario === "GE") {
    valorHoraAjustado = valorHoraBase * 1.25;
}

let salarioNormal = horasTrabalhadas * valorHoraAjustado;
let horasExtras = 0;
let adicionalExtras = 0;

if (setorFuncionario !== "GE" && horasTrabalhadas > horasMensaisPadrao) {
    salarioNormal = horasMensaisPadrao * valorHoraAjustado;
    horasExtras = horasTrabalhadas - horasMensaisPadrao;
    adicionalExtras = horasExtras * (valorHoraAjustado * 2);
}

const salarioTotal = salarioNormal + adicionalExtras;

document.getElementById("resultado").innerHTML = `
    <p><strong>Funcionário:</strong> ${nomeFuncionario}</p>
    <p><strong>Setor:</strong> ${setorFuncionario}</p>
    <p><strong>Horas trabalhadas:</strong> ${horasTrabalhadas}h</p>
    <p><strong>Valor hora:</strong> R$ ${valorHoraAjustado.toFixed(2)}</p>
    <p><strong>Horas normais:</strong> ${
        setorFuncionario === "GE"
            ? horasTrabalhadas
            : Math.min(horasTrabalhadas, horasMensaisPadrao)
    }h</p>
    <p><strong>Horas extras:</strong> ${horasExtras}h</p>
    <p><strong>Salário total:</strong> R$ ${salarioTotal.toFixed(2)}</p>`;