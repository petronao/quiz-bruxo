// dados.js

export const CALICE_DE_FOGO = [
  { id: 1, frase: "Harry Potter and the Goblet of Fire", ingles: "Goblet", portugues: "Cálice", pronuncia: "gób-let" },
  { id: 2, frase: "The fire is burning.", ingles: "Fire", portugues: "Fogo", pronuncia: "fáier" }
];

export const PRINCIPE_MESTICO = [
  { id: 1, frase: "The Half-Blood Prince", ingles: "Half-Blood", portugues: "Meio-Sangue / Mestiço", pronuncia: "réf-blád" }
];

export const CONECTIVOS = [
  { id: 1, frase: "However, he decided to go.", ingles: "However", portugues: "No entanto / Porém", pronuncia: "rau-éver" }
];

export const TESTE_BOUND = [
  { id: 1, frase: "Tie it up! The cargo must be bound.", ingles: "Bound", portugues: "Amarrado / Preso", pronuncia: "báund" },
  { id: 2, frase: "Wait for me, I am bound for home.", ingles: "Bound for", portugues: "A caminho de", pronuncia: "báund fór" },
  { id: 3, frase: "Don't run, you are bound to fall.", ingles: "Bound to", portugues: "Certo de / Vai acontecer com certeza", pronuncia: "báund tû" },
  { id: 4, frase: "I am bound by my contract to work today.", ingles: "Bound by", portugues: "Obrigado por / Preso a uma regra", pronuncia: "báund bái" },
  { id: 5, frase: "Is this bus bound for the beach?", ingles: "Bound for", portugues: "Destinado a / Indo para", pronuncia: "báund fór" },
  { id: 6, frase: "The box is bound with heavy tape.", ingles: "Bound with", portugues: "Presa com / Amarrada com", pronuncia: "báund uíd" },
  { id: 7, frase: "It's bound to rain later, look at the sky.", ingles: "Bound to", portugues: "Incapaz de falhar / Certo de acontecer", pronuncia: "báund tû" },
  { id: 8, frase: "He is bound to his promise.", ingles: "Bound to", portugues: "Obrigado por / Preso a um compromisso", pronuncia: "báund tû" },
  { id: 9, frase: "The hands of the thief were bound.", ingles: "Bound", portugues: "Amarradas / Presas", pronuncia: "báund" },
  { id: 10, frase: "We are bound to make a choice.", ingles: "Bound to", portugues: "Obrigados a", pronuncia: "báund tû" }
];

// Centralizador sem brechas para erro
export const TODOS_OS_TEMAS = [
  { id: '1', titulo: "🔥 HP4: O Cálice de Fogo", dados: CALICE_DE_FOGO },
  { id: '2', titulo: "🧪 HP6: O Príncipe Mestiço", dados: PRINCIPE_MESTICO },
  { id: '3', titulo: "🔗 Conectivos e Transições", dados: CONECTIVOS },
  { id: '4', titulo: "🧠 Teste da Palavra Bound", dados: TESTE_BOUND },
];