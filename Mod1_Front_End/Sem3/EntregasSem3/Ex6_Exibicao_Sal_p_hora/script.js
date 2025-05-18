const nome = "João";
const setor = "administrativo";
const horas = 220;
const extras = 20;
const salario = 2560.0;

const mensagem = `O funcionário, do setor ${setor}, ${nome} teve ${horas} horas trabalhadas e ${extras} horas extras. Seu salário mensal foi de R$ ${salario
    .toFixed(2)
    .replace(".", ",")}`;

console.log(mensagem);
