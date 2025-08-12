export const Units = {
  LANCEIRO: { speed: 18, attack: 10, def_geral: 15, def_cavalaria: 45 },
  ESPADACHIM: { speed: 22, attack: 25, def_geral: 50, def_cavalaria: 25 },
  VIKING: { speed: 18, attack: 40, def_geral: 10, def_cavalaria: 5 },

  BATEDOR: { speed: 9, attack: 0, def_geral: 2, def_cavalaria: 1 },
  CAVALARIA_LEVE: { speed: 10, attack: 130, def_geral: 30, def_cavalaria: 40 },
  CAVALARIA_PESADA: {
    speed: 11,
    attack: 150,
    def_geral: 200,
    def_cavalaria: 80,
  },

  ARIETE: { speed: 30, attack: 2, def_geral: 20, def_cavalaria: 50 },
  CATAPULTA: { speed: 30, attack: 100, def_geral: 100, def_cavalaria: 50 },

  NOBRE: { speed: 35, attack: 30, def_geral: 100, def_cavalaria: 50 },
} as const;
