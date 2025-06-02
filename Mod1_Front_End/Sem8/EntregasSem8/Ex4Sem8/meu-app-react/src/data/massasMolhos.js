// Dados das massas e molhos permitidos
export const molhos = [
  {
    id: 1,
    nome: "Alla Puttanesca",
    descricao: "Molho à base de tomate, azeitonas, alcaparras, alho e pimenta",
    imagem: "./public/images/puttanesca.jpg"
  },
  {
    id: 2,
    nome: "Al Pesto di Basilico",
    descricao: "Molho à base de manjericão, alho, pinhões, queijo parmesão e azeite",
    imagem: "./public/images/pesto.jpg"
  },
  {
    id: 3,
    nome: "Cacio e Pepe",
    descricao: "Molho cremoso à base de queijo pecorino romano e pimenta-do-reino",
    imagem: "./public/images/cacio.jpg"
  },
  {
    id: 4,
    nome: "Alla Matriciana",
    descricao: "Molho à base de tomate, guanciale (bochecha de porco), queijo pecorino e pimenta",
    imagem: "./public/images/matriciana.jpg"
  }
];

export const massas = [
  {
    id: 1,
    nome: "Espaguete",
    descricao: "Massa longa e cilíndrica, versátil para diversos molhos",
    valor: 28.90,
    imagem: "./public/images/espaguete.jpg",
    molhosPermitidos: [1, 2, 3, 4] // IDs dos molhos permitidos
  },
  {
    id: 2,
    nome: "Tagliatelle",
    descricao: "Massa em formato de fitas largas, ideal para molhos encorpados",
    valor: 32.90,
    imagem: "./public/images/tagliatelle.jpg",
    molhosPermitidos: [1, 4]
  },
  {
    id: 3,
    nome: "Fettuccine",
    descricao: "Massa em formato de fitas, perfeita para molhos cremosos",
    valor: 30.90,
    imagem: "./public/images/fettuccine.jpg",
    molhosPermitidos: [1, 2, 3]
  },
  {
    id: 4,
    nome: "Penne",
    descricao: "Massa tubular cortada em diagonal, ótima para reter molhos",
    valor: 26.90,
    imagem: "./public/images/penne.jpg",
    molhosPermitidos: [1, 3]
  },
  {
    id: 5,
    nome: "Rigatoni",
    descricao: "Massa tubular com estrias, excelente para molhos encorpados",
    valor: 27.90,
    imagem: "./public/images/rigatoni.jpg",
    molhosPermitidos: [4]
  },
  {
    id: 6,
    nome: "Pappardelle",
    descricao: "Massa em formato de fitas muito largas, ideal para molhos robustos",
    valor: 34.90,
    imagem: "./public/images/pappardelle.jpg",
    molhosPermitidos: [1, 4]
  }
];

// Função auxiliar para obter os molhos permitidos para uma massa específica
export const getMolhosPermitidos = (massaId) => {
  const massa = massas.find(m => m.id === massaId);
  if (!massa) return [];
  
  return molhos.filter(molho => massa.molhosPermitidos.includes(molho.id));
};
