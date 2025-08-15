import type { BeltData } from '../types';

export const TECHNIQUES_BY_BELT: BeltData[] = [
  {
    belt: 'FAIXA BRANCA',
    color: 'bg-white text-black hover:bg-gray-200',
    kyus: [
      {
        name: '10º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza)
          // { name: 'Seiken Chudan Tsuki', description: 'Soco Médio (Plexo, Altura do Estômago)', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Jodan Tsuki', description: 'Soco Alto (Rosto)', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Gedan Tsuki', description: 'Soco Baixo (Região da Virilha)', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Sanbon Tsuki', description: 'Soco em Três Tempos', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Chudan Morote Tsuki', description: 'Soco Duplo Médio', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Jodan Morote Tsuki', description: 'Soco Duplo Alto', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Gedan Morote Tsuki', description: 'Soco Duplo Baixo', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Sanbon Morote Tsuki', description: 'Soco Duplo em Três Tempos', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Ago Tsuki', description: 'Soco Direto no Queixo', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Awase Tsuki', description: 'Soco Combinado Alto e Médio', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Uraken Shomen Uchi', description: 'Pancada Frontal com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Uraken Sayu Uchi', description: 'Pancada Lateral com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Uraken Furi Uchi', description: 'Pancada Lateral com Punho Invertido no Corpo', category: 'Técnicas de Mãos (Te Waza)' },
          
          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Jodan Uke', description: 'Bloqueio Alto', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Chudan Soto Uke', description: 'Bloqueio Médio de Fora para Dentro', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Chudan Uchi Uke', description: 'Bloqueio Médio de Dentro para Fora', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Gedan Barai', description: 'Bloqueio Baixo Varrendo', category: 'Técnicas de Defesa (Uke Waza)' },
          
          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Hiza Geri', description: 'Ataque com Joelho', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Mae Keage', description: 'Chute Frontal com a Perna Estendida', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Mae Kin Geri', description: 'Chute Frontal na Virilha', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Mae Geri', description: 'Chute Frontal', category: 'Técnicas de Pernas (Ashi Waza)' },
          
          // // Bases (Dachi)
          // { name: 'Fudo Dachi', description: 'Postura Normal (Natural)', category: 'Bases (Dachi)' },
          // { name: 'Sanchin Dachi', description: 'Postura dos Três Pontos (Enraizada)', category: 'Bases (Dachi)' },
          // { name: 'Heiko Dachi', description: 'Postura Paralela', category: 'Bases (Dachi)' },
          // { name: 'Zenkutsu Dachi', description: 'Postura com Apoio Frontal', category: 'Bases (Dachi)' },
         
          // Vocabulário
          { name: 'Jodan', description: 'Parte Alta do Corpo (Rosto)', category: 'Vocabulário' },
          { name: 'Chudan', description: 'Parte Média do Corpo (Plexo)', category: 'Vocabulário' },
          { name: 'Gedan', description: 'Parte Baixa do Corpo (Virilha)', category: 'Vocabulário' },
          { name: 'Mae', description: 'Frontal', category: 'Vocabulário' },
          { name: 'Tsuki', description: 'Soco', category: 'Vocabulário' },
          { name: 'Uke', description: 'Bloqueio, Defesa', category: 'Vocabulário' },
          { name: 'Geri', description: 'Chute, Pontapé', category: 'Vocabulário' },
          { name: 'Dachi', description: 'Base, Postura', category: 'Vocabulário' },
          { name: 'Kata', description: 'Forma', category: 'Vocabulário' },
          
          // // Armas do Corpo
          // { name: 'Seiken', description: 'Punho', category: 'Armas do Corpo' },
          // { name: 'Uraken', description: 'Punho Invertido', category: 'Armas do Corpo' },
          // { name: 'Hiza', description: 'Joelho', category: 'Armas do Corpo' },
          // { name: 'Haisoku', description: 'Peito do Pé', category: 'Armas do Corpo' },
          // { name: 'Chusoku', description: 'Bola do Pé', category: 'Armas do Corpo' }
        ]
      },
      {
        
        name: '9º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza)
          // { name: 'Chudan Nukite', description: 'Ataque com a Ponta dos Dedos no Plexo', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Jodan Nukite', description: 'Ataque com a Ponta dos Dedos na Garganta', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Chudan Morote Nukite', description: 'Ataque Duplo com a Ponta dos Dedos no Plexo', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Jodan Morote Nukite', description: 'Ataque Duplo com a Ponta dos Dedos na Garg.', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shotei Gedan Oroshi', description: 'Ataque com a Base da Mão Descendente', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shotei Jodan Uchi', description: 'Ataque com a Base da Mão no Queixo', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shuto Gammen Uchi', description: 'Ataque Circular com a Faca da Mão na Têmpora', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shuto Sakotsu Uchi', description: 'Ataque Descendente com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shuto Uchi Uchi', description: 'Ataque de Dentro para Fora com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)' },

          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Chudan Uchi Uke Gedan Barai', description: 'Bloqueio de Dentro para Fora + Baixo Varrendo', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Kakiwake Uke', description: 'Bloqueio Baixo Circular Duplo', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Seiken Jodan Juji Uke', description: 'Bloqueio Alto com Punhos Cerrados em Cruz', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Seiken Gedan Juji Uke', description: 'Bloqueio Baixo com Punhos Cerrados em Cruz', category: 'Técnicas de Defesa (Uke Waza)' },

          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Hiza Mawashi Geri', description: 'Ataque Circular com Joelho', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Mawashi Geri', description: 'Chute Circular', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Yoko Keage', description: 'Chute Lateral Alto com a Perna Estendida', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Yoko Geri', description: 'Chute Lateral com a Faca do Pé', category: 'Técnicas de Pernas (Ashi Waza)' },

          // // Bases (Dachi)
          // { name: 'Heisoku Dachi', description: 'Postura com os Pés Unidos', category: 'Bases (Dachi)' },
          // { name: 'Musubi Dachi', description: 'Postura com os Pés para Fora', category: 'Bases (Dachi)' },
          // { name: 'Uchi Hachiji Dachi', description: 'Postura Invertida com os Pés para Dentro', category: 'Bases (Dachi)' },
          // { name: 'Kiba Dachi', description: 'Postura Paralela do “Cavaleiro”', category: 'Bases (Dachi)' },
          // { name: 'Re Dachi', description: 'Postura Básica de Combate', category: 'Bases (Dachi)' },

          // Vocabulário
          { name: 'Te', description: 'Mão', category: 'Vocabulário' },
          { name: 'Ashi', description: 'Perna, Pé', category: 'Vocabulário' },
          { name: 'Mawashi', description: 'Circular', category: 'Vocabulário' },
          { name: 'Yoko', description: 'Lateral', category: 'Vocabulário' },
          { name: 'Dojo', description: 'Local de Treinamento', category: 'Vocabulário' },
          { name: 'Kaicho', description: 'Grande Mestre', category: 'Vocabulário' },
          { name: 'Sempai', description: 'Estudante mais Antigo, mais Experiente', category: 'Vocabulário' },
          { name: 'Kohai', description: 'Estudante Novato, menos Experiente', category: 'Vocabulário' },

          // // Armas do Corpo
          // { name: 'Shuto', description: 'Faca da Mão', category: 'Armas do Corpo' },
          // { name: 'Nukite', description: 'Ponta dos Dedos', category: 'Armas do Corpo' },
          // { name: 'Shotei', description: 'Calcanhar da Palma (corrigir)', category: 'Armas do Corpo' },
          // { name: 'Kote', description: 'Parte de fora do antebraço (corrigir)', category: 'Armas do Corpo' },
          // { name: 'Sokuto', description: 'Faca do Pé', category: 'Armas do Corpo' }
        ]
      }
    ]
  },
  {
    belt: 'FAIXA AZUL',
    color: 'bg-blue-600 text-white hover:bg-blue-700',
    kyus: [
      {
        name: '8º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza)
          // { name: 'Seiken Tate Tsuki', description: 'Soco Médio com Punho na Vertical', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Uraken Mawashi Uchi', description: 'Pancada Circular com Punho Invertido na Nuca', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shuto Sakotsu Uchi Komi', description: 'Ataque Frontal Direto com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Shuto Hizo Uchi', description: 'Ataque Circular Baixo com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Hiji Mawashi Ate', description: 'Cotovelada Circular', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Hiji Age', description: 'Cotovelada Ascendente', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Jodan Haito Uchi', description: 'Ataque Circular com a Faca Interna da Mão', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Jodan Morote Haito Uchi', description: 'Ataque Duplo com a Faca Interna da Mão', category: 'Técnicas de Mãos (Te Waza)' },

          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Jodan Soete Uke', description: 'Bloqueio Alto Reforçado', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Chudan Uchi Soete Uke', description: 'Bloqueio Médio de Dentro para Fora Reforçado', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Kote Uke', description: 'Bloqueio Circular Ascendente com Antebraço', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Kake Uke', description: 'Bloqueio Circular Descendente com Antebraço', category: 'Técnicas de Defesa (Uke Waza)' },

          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Kansetsu Geri', description: 'Chute Lateral na Altura do Joelho', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Uchi Mawashi Geri', description: 'Chute Circular de Dentro para Fora', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Soto Mawashi Geri', description: 'Chute Circular de Fora para Dentro', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Ushiro Geri', description: 'Chute para Trás', category: 'Técnicas de Pernas (Ashi Waza)' },

          // // Bases (Dachi)
          // { name: 'Kokutsu Dachi', description: 'Postura com Apoio Traseiro', category: 'Bases (Dachi)' },
          // { name: 'Shiko Dachi', description: 'Postura do Sumo', category: 'Bases (Dachi)' },

          // Vocabulário
          { name: 'Rei', description: 'Saudação', category: 'Vocabulário' },
          { name: 'Kamaete', description: 'Entrar em Postura Combativa', category: 'Vocabulário' },
          { name: 'Naore', description: 'Voltar à Posição Inicial', category: 'Vocabulário' },
          { name: 'Yame', description: 'Terminar, Parar', category: 'Vocabulário' },
          { name: 'Kyu', description: 'Graduação de Faixa Inferior à Preta; do 10º ao 1º', category: 'Vocabulário' },
          { name: 'Dan', description: 'Graduação de Faixa Preta; do 1º ao 10º', category: 'Vocabulário' },
          { name: 'Kansetsu', description: 'Articulação', category: 'Vocabulário' },
          { name: 'Ushiro', description: 'Para Trás', category: 'Vocabulário' },
          { name: 'Uchi', description: '(1) Interno; (2) Pancada', category: 'Vocabulário' },
          { name: 'Soto', description: 'Externo', category: 'Vocabulário' },
          { name: 'Migi', description: 'Lado Direito', category: 'Vocabulário' },
          { name: 'Hidari', description: 'Lado Esquerdo', category: 'Vocabulário' },
          { name: 'Shihan', description: 'Mestre', category: 'Vocabulário' },
          { name: 'Sensei', description: 'Professor', category: 'Vocabulário' },
          { name: 'Karategi', description: 'Uniforme para a Prática do Karatê', category: 'Vocabulário' },

          // // Armas do Corpo
          // { name: 'Tate Ken', description: 'Punho Horizontal', category: 'Armas do Corpo' },
          // { name: 'Hiji', description: 'Cotovelo', category: 'Armas do Corpo' },
          // { name: 'Haito', description: 'Borda do Lado do Polegar (corrigir)', category: 'Armas do Corpo' },
          // { name: 'Kakato', description: 'Calcanhar', category: 'Armas do Corpo' },
          // { name: 'Teisoku', description: 'Parte Lateral Interna do Pé', category: 'Armas do Corpo' }
        ]
      },
      {
        name: '7º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          // { name: 'Seiken Jun Tsuki', description: 'Soco Lateral Médio "Empurrando"', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Kagi Tsuki', description: 'Soco Cruzado Médio', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Shita Tsuki', description: 'Soco Curto Médio com Punho Invertido', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Seiken Age Tsuki', description: 'Soco Ascendente com Punho Invertido', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Tettsui Gammen Uchi', description: 'Ataque Circular com Lateral do Punho na Têmpora', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Tettsui Sakotsu Uchi', description: 'Ataque Descendente com Lateral do Punho ("Martelo")', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Tettsui Uchi Uchi Frontal', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza)' },
          // { name: 'Tettsui Uchi Uchi Lateral', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza)' },

          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Shuto Mawashi Uke', description: 'Bloqueio Circular Lateral com Faca da Mão (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Shuto Enkei Uke', description: 'Bloqueio Circular Duplo com Faca da Mão', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Shuto Jodan Juji Uke', description: 'Bloqueio Alto com Mãos Abertas em Cruz', category: 'Técnicas de Defesa (Uke Waza)' },
          // { name: 'Shuto Gedan Juji Uke', description: 'Bloqueio Baixo com Mãos Abertas em Cruz', category: 'Técnicas de Defesa (Uke Waza)' },

          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Kake Geri', description: 'Chute Circular de Fora para Dentro em "Gancho"', category: 'Técnicas de Pernas (Ashi Waza)' },

          // // Bases (Dachi)
          // { name: 'Nekoashi Dachi', description: 'Postura com Apoio Traseiro do "Gato"', category: 'Bases (Dachi)' },

          // Vocabulário
          { name: 'Shinzen', description: 'Templo; Centro Simbólico do Dojo', category: 'Vocabulário' },
          { name: 'Kyoshi', description: 'Instrutor Sênior ("aquele que sabe")', category: 'Vocabulário' },
          { name: 'Ritsu-Rei', description: 'Saudação em Pé', category: 'Vocabulário' },
          { name: 'Za-Rei', description: 'Saudação Ajoelhado', category: 'Vocabulário' },
          { name: 'Kiai', description: 'Grito Liberado para Focalizar Energia', category: 'Vocabulário' },
          { name: 'Hajime', description: 'Iniciar, Começar', category: 'Vocabulário' },
          { name: 'Mate', description: 'Interromper, Parar', category: 'Vocabulário' },
          { name: 'Waza', description: 'Técnica', category: 'Vocabulário' },
          { name: 'Morote', description: '(Com o Uso das) Duas Mãos', category: 'Vocabulário' },
          { name: 'Gyaku', description: 'Invertido, Contrário', category: 'Vocabulário' },
          { name: 'Koshi', description: 'Quadril', category: 'Vocabulário' },
          { name: 'Wagi', description: 'Casaco ou Blusão do Karategi', category: 'Vocabulário' },
          { name: 'Chitabaki', description: 'Calça do Karategi (= Zubon)', category: 'Vocabulário' },
          { name: 'Obi', description: 'Faixa', category: 'Vocabulário' },
          { name: 'Zori', description: 'Chinelo de Dedo', category: 'Vocabulário' },

          // Armas do Corpo
          // { name: 'Tettsui', description: 'Mão como Martelo (corrigir)', category: 'Armas do Corpo' },
          // { name: 'Toho', description: 'Parte Média Entre o Indicador e o Polegar', category: 'Armas do Corpo' },
          // { name: 'Uchi Kote', description: 'Parte de Cima Antebraço', category: 'Armas do Corpo' },
          // { name: 'Soto Kote', description: 'Parte de Baixo Antebraço', category: 'Armas do Corpo' },
          // { name: 'Ushiro Kakato', description: 'Parte de Trás do Calcanhar', category: 'Armas do Corpo'}
        ]
      }
    ]
  },
  {
    belt: 'FAIXA AMARELA',
    color: 'bg-yellow-400 text-black hover:bg-yellow-500',
    kyus: [
      {
        name: '6º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          // { name: 'Tettsui Uchi Uchi Lateral x2', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza): Em Kiba Dachi' },
          // { name: 'Hiji Yoko Ate', description: 'Cotovelada Lateral Curta', category: 'Técnicas de Mãos (Te Waza): Em Kiba Dachi' },
          // { name: 'Hiji Oroshi', description: 'Cotovelada Descendente', category: 'Técnicas de Mãos (Te Waza): Em Kiba Dachi' },

          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Koken Uke', description: 'Bloqueio Ascendente com o Pulso Superior (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)' },

          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Ushiro Kake Geri', description: 'Chute Circular para Trás em “Gancho”', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Tobi Mae Geri', description: 'Chute Frontal com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Ushiro Mawashi Geri', description: 'Chute Circular para Trás “Giratório”', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Tobi Mawashi Geri', description: 'Chute Circular com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },

          // // Bases (Dachi)
          // { name: 'Tsuruashi Dachi', description: 'Postura do "Grou" (Ave)', category: 'Bases (Dachi)' },

          // Vocabulário
          { name: 'Atemi', description: 'Pancada Direcionada a um Ponto Anatômico Frágil', category: 'Vocabulário' },
          { name: 'Ki', description: 'Energia Vital', category: 'Vocabulário' },
          { name: 'Kime', description: 'Foco de Potência, Arremate, Finalização', category: 'Vocabulário' },
          { name: 'Tai Sabaki', description: 'Esquiva', category: 'Vocabulário' },
          { name: 'Tanden', description: 'Centro de Gravidade e Energia (Ki) do Karateka (sob o umbigo)', category: 'Vocabulário' },
          { name: 'Tate', description: 'Vertical', category: 'Vocabulário' },
          { name: 'Zen', description: 'Filosofia Oriental', category: 'Vocabulário' },
          { name: 'Hansoku', description: 'Falta', category: 'Vocabulário' },
          { name: 'Hansoku Make', description: 'Desclassificação', category: 'Vocabulário' },
          { name: 'Hantei', description: 'Julgamento', category: 'Vocabulário' },
          { name: 'Ippon', description: 'Ponto Completo', category: 'Vocabulário' },
          { name: 'Shiai', description: 'Competição, Torneio', category: 'Vocabulário' },
          { name: 'Wazari', description: 'Quase Ponto Completo, Meio Ponto', category: 'Vocabulário' },

          // // Armas do Corpo
          // { name: 'Ippon Ken', description: 'Golpe com o punho onde o dedo indicador é estendido e o polegar pressionado contra ele, formando uma ponta afiada', category: 'Armas do Corpo' },
          // { name: 'Ippon Nukite', description: '(corrigir)', category: 'Armas do Corpo' },
          // { name: 'Hirate', description: 'Palma da mão', category: 'Armas do Corpo' },
          // { name: 'Koken', description: 'Parte de Cima do Pulso', category: 'Armas do Corpo' },
          // { name: 'Tsuma Saki', description: 'Ponta do Pé', category: 'Armas do Corpo' },
        ]
      },
      {
        name: '5º Kyu',
        techniques: [
          // // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          // { name: 'Hiji Ushiro Ate', description: 'Cotovelada para Trás', category: 'Técnicas de Mãos (Te Waza): Em Kiba Dachi' },
          // { name: 'Hiji Ushiro Age', description: 'Cotovelada para Trás Ascendente', category: 'Técnicas de Mãos (Te Waza): Em Kiba Dachi' },

          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Tensho Uke', description: 'Bloqueio Circular Alto de Dentro para Fora com a Faca da Mão (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)' },

          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Kuzure Ushiro Mawashi Geri', description: 'Variação do Chute Circular para Trás “Giratório”', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Tobi Yoko Geri', description: 'Chute Lateral com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Gyaku Mawashi Geri', description: 'Chute Circular Invertido de Dentro para Fora', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Uchi Mawashi Kakato Otoshi', description: 'Chute Circular de Dentro para Fora + Descendente com o Calcanhar', category: 'Técnicas de Pernas (Ashi Waza)' },
          // { name: 'Soto Mawashi Kakato Otoshi', description: 'Chute Circular de Fora para Dentro + Descendente com o Calcanhar', category: 'Técnicas de Pernas (Ashi Waza)' },

          // Vocabulário
          { name: 'Geiko', description: 'Forma de Treinamento', category: 'Vocabulário' },
          { name: 'Tori', description: 'Atacante', category: 'Vocabulário' },
          { name: 'Uke', description: '(2) Atacado, Aquele que Defende', category: 'Vocabulário' },
          { name: 'Tobi', description: 'Salto', category: 'Vocabulário' },
          { name: 'Kuzure', description: 'Variação', category: 'Vocabulário' },
          { name: 'Mokuso', description: 'Posição de Concentração, Meditação', category: 'Vocabulário' },
          { name: 'Yoi', description: 'Preparar', category: 'Vocabulário' },
          { name: 'Ukemi', description: 'Exercício de (Amortecimento) de Queda', category: 'Vocabulário' },
          { name: 'Kuzushi', description: 'Desequilíbrio', category: 'Vocabulário' },
          { name: 'Otoshi', description: 'Deixar Cair, Arremesso', category: 'Vocabulário' },
          { name: 'Kumi', description: 'Agarrar, Segurar', category: 'Vocabulário' },
          { name: 'Suri Ashi', description: 'Caminhada em que um Pé não Ultrapassa o Outro, Deslizando', category: 'Vocabulário' },
          { name: 'Ashi Barai', description: 'Varrida com o Pé', category: 'Vocabulário' },
          { name: 'Hombu Dojo', description: 'Academia Central Mundial (Nova Iorque)', category: 'Vocabulário' },
          { name: 'Makiwara', description: 'Alvo para Treinamento de Golpes, em Geral de Madeira e Palha', category: 'Vocabulário' },
        
          // // Armas do Corpo
          // { name: 'Nakadaka Ken', description: 'Seiken com dedo medio Protuberante', category: 'Armas do Corpo' },
          // { name: 'Nihon Nukite', description: 'Dois dedos (geralmente o indicador e o médio) são usados para realizar o ataque', category: 'Armas do Corpo' },
          // { name: 'Hiraken', description: 'Nós dos dedos', category: 'Armas do Corpo' },
          // { name: 'Kumade', description: 'Palma plana com os dedos Dobrados', category: 'Armas do Corpo' },
          // { name: 'Keiko', description: 'Ponta dos dedos em formato de pinça', category: 'Armas do Corpo' },
        
        ]
      }
    ]
  },
  {
    belt: 'FAIXA VERDE',
    color: 'bg-green-600 text-white hover:bg-green-700',
    kyus: [
      {
        name: '4º Kyu',
        techniques: [
          // Técnicas de Pernas (Ashi Waza)
          { name: 'Tobi Ushiro Geri', description: 'Chute para Trás com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Tobi Ushiro Mawashi Geri', description: 'Chute Circular para Trás “Giratório” com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Tobi Kuzure Ushiro Mawashi Geri', description: 'Variação do Chute Circular para Trás “Giratório” com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },

          // Bases (Dachi)
          { name: 'Kata Hiza Dachi', description: 'Postura de Combate sobre um dos Joelhos', category: 'Bases (Dachi)' },
          { name: 'Sagi Ashi Dachi', description: 'Postura sobre uma Perna de Apoio', category: 'Bases (Dachi)' },
          { name: 'Kake Dachi', description: 'Postura com uma Perna Cruzando por Trás', category: 'Bases (Dachi)' },

          // Armas do Corpo
          { name: 'Oyaubi Ken', description: 'Punho em semelhança a seiken mas com o polegar saliente em triângulo', category: 'Armas do Corpo' },
          { name: 'Haishu', description: 'Costas da Mão', category: 'Armas do Corpo' },
          { name: 'Atama', description: 'Parte posterior da cabeça', category: 'Armas do Corpo' },
          { name: 'Tsuzuki', description: 'Parte anterior da cabeça', category: 'Armas do Corpo' },
          { name: 'Sune', description: 'Canela', category: 'Armas do Corpo' }
        ]
      }
    ]
  },
  {
    belt: 'FAIXA PRETA',
    color: 'bg-black text-white hover:bg-gray-800',
    kyus: [
      {
        name: 'Shodan',
        techniques: [
          { name: 'Mae Mawashi Kubi Geri', description: 'Chute Circular na Altura do Pescoço', category: 'Golpes de Perna/Pé' },
          { name: 'Tobi Kake Geri', description: 'Chute Gancho com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Tobi Mawashi Geri', description: 'Chute Circular para Trás com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Ashi Tobi Mae Geri', description: 'Chute Frontal com Salto usando Perna de Trás', category: 'Golpes de Perna/Pé' },
          { name: 'Tate Do Mawashi Kaiten Geri', description: 'Chute Circular Vertical Giratório', category: 'Golpes de Perna/Pé' },
          { name: 'Nidan Tobi Mae Geri', description: 'Chute Frontal Duplo com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Ashi Tobi Mawashi Geri', description: 'Chute Circular com Salto usando Perna de Trás', category: 'Golpes de Perna/Pé' },
          { name: 'Yoko Do Mawashi Kaiten Geri', description: 'Chute Lateral Circular Giratório', category: 'Golpes de Perna/Pé' },
          { name: 'Nidan Tobi Mawashi Geri', description: 'Chute Circular Duplo com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Ashi Tobi Yoko Geri', description: 'Chute Lateral com Salto usando Perna de Trás', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Do Mawashi Kaiten Geri', description: 'Chute Circular para Trás Giratório', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Tobi Soto Mawashi Geri', description: 'Chute Circular de Fora para Dentro com Salto', category: 'Golpes de Perna/Pé' },
        ]
      }
    ]
  }
];
