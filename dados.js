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

const palavrasGodOfWar = [
  // ⚔️ Armas, Combate e Poderes
  { termo: "Blade", significado: "Lâmina", pronuncia: "Blêid" },
  { termo: "Chain", significado: "Corrente", pronuncia: "Tchêin" },
  { termo: "Sword", significado: "Espada", pronuncia: "Sórd" },
  { termo: "Shield", significado: "Escudo", pronuncia: "Chíld" },
  { termo: "Spear", significado: "Lança", pronuncia: "Spír" },
  { termo: "Rage", significado: "Fúria / Ira", pronuncia: "Rêidj" },
  { termo: "Magic", significado: "Magia", pronuncia: "Médiic" },
  { termo: "Lightning", significado: "Raio / Relâmpago", pronuncia: "Láit-ning" },
  { termo: "Gaze", significado: "Olhar / Olhar fixo", pronuncia: "Gêiz" },
  { termo: "Soul", significado: "Alma", pronuncia: "Sôul" },
  { termo: "Wrath", significado: "Ira divina / Rancor", pronuncia: "Uróf" },
  { termo: "Strike", significado: "Golpe / Atacar", pronuncia: "Stráik" },

  // 🏛️ História, Deuses e Mitologia
  { termo: "God", significado: "Deus", pronuncia: "Gód" },
  { termo: "War", significado: "Guerra", pronuncia: "Uór" },
  { termo: "Ghost", significado: "Fantasma", pronuncia: "Gôust" },
  { termo: "Ash", significado: "Cinza", pronuncia: "Éch" },
  { termo: "Oracle", significado: "Oráculo", pronuncia: "Óra-col" },
  { termo: "Temple", significado: "Templo", pronuncia: "Têm-pol" },
  { termo: "Desert", significado: "Deserto", pronuncia: "Dé-zert" },
  { termo: "Pandora's Box", significado: "Caixa de Pandora", pronuncia: "Pan-dó-raz Bóks" },
  { termo: "Titan", significado: "Titã", pronuncia: "Tái-tan" },
  { termo: "Mortal", significado: "Mortal", pronuncia: "Mór-tal" },
  { termo: "Olympo", significado: "Olimpo", pronuncia: "O-lím-po" },
  { termo: "Underworld", significado: "Submundo / Inferno", pronuncia: "Ânder-uórld" },
  { termo: "Throne", significado: "Trono", pronuncia: "Trôun" },

  // 👹 Inimigos e Criaturas
  { termo: "Monster", significado: "Monstro", pronuncia: "Móns-ter" },
  { termo: "Beast", significado: "Fera / Besta", pronuncia: "Bíst" },
  { termo: "Minotaur", significado: "Minotauro", pronuncia: "Mí-no-tór" },
  { termo: "Cyclops", significado: "Ciclope", pronuncia: "Sái-clops" },
  { termo: "Siren", significado: "Sereia", pronuncia: "Sái-ren" },
  { termo: "Harpy", significado: "Hárpia", pronuncia: "Hár-pi" },
  { termo: "Hydra", significado: "Hidra", pronuncia: "Hái-dra" },
  { termo: "Soldier", significado: "Soldado", pronuncia: "Sôul-djer" },

  // 🧭 Exploração, Quebra-cabeças e Itens
  { termo: "Chest", significado: "Baú", pronuncia: "Tchést" },
  { termo: "Feather", significado: "Pena", pronuncia: "Fé-der" },
  { termo: "Eye", significado: "Olho", pronuncia: "Ái" },
  { termo: "Key", significado: "Chave", pronuncia: "Quí" },
  { termo: "Gate", significado: "Portão", pronuncia: "Guêit" },
  { termo: "Lever", significado: "Alavanca", pronuncia: "Lé-ver" },
  { termo: "Crank", significado: "Manivela", pronuncia: "Crénk" },
  { termo: "Bridge", significado: "Ponte", pronuncia: "Brídj" },
  { termo: "Cliff", significado: "Despenhadeiro", pronuncia: "Clíf" },
  { termo: "Trap", significado: "Armadilha", pronuncia: "Trép" },

  // 🩸 Sentimentos, Destino e Vingança
  { termo: "Vengeance", significado: "Vingança", pronuncia: "Vên-djans" },
  { termo: "Revenge", significado: "Revanche / Vingança", pronuncia: "Ri-vêndj" },
  { termo: "Nightmare", significado: "Pesadelo", pronuncia: "Náit-mêir" },
  { termo: "Sins", significado: "Pecados", pronuncia: "Síns" },
  { termo: "Fate", significado: "Destino", pronuncia: "Fêit" },
  { termo: "Curse", significado: "Maldição", pronuncia: "Cârs" },
  { termo: "Betrayal", significado: "Traição", pronuncia: "Bi-trêi-al" }
];