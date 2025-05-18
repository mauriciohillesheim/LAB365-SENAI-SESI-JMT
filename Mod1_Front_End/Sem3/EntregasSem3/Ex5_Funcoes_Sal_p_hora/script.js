function ajustarSalarioBase(valorBase, setor) {
    const ajustes = { AD: 1.1, GE: 1.25, OP: 1.0 };
    return valorBase * (ajustes[setor] || 1.0);
}

function calcularSalario(nome, setor, horas, valorBase) {
    const valorHora = ajustarSalarioBase(valorBase, setor);
    const horasNormais = setor === "GE" ? horas : Math.min(horas, 220);
    const horasExtras = setor !== "GE" && horas > 220 ? horas - 220 : 0;
    const total = horasNormais * valorHora + horasExtras * valorHora * 2;

    return {
        nome,
        setor,
        valorHora: valorHora.toFixed(2),
        horasNormais,
        horasExtras,
        salarioTotal: total.toFixed(2),
    };
}

const resultado = calcularSalario("Maria", "AD", 230, 25.0);
console.log(resultado);
