import type { BeltData } from '../types';

export const TECHNIQUES_BY_BELT: BeltData[] = [
  {
    belt: 'FAIXA BRANCA',
    color: 'bg-white text-black hover:bg-gray-200',
    kyus: [
      {
        name: '10º Kyu',
        techniques: [
          { name: 'Seiken Chudan Tsuki', description: 'Soco Médio', category: 'Golpes de Mão' },
          { name: 'Seiken Jodan Tsuki', description: 'Soco Alto', category: 'Golpes de Mão' },
          { name: 'Seiken Gedan Tsuki', description: 'Soco Baixo', category: 'Golpes de Mão' },
          { name: 'Uraken Shomen Uchi', description: 'Pancada Frontal com Punho Invertido no Rosto', category: 'Golpes de Mão' },
          { name: 'Uraken Sayu Uchi', description: 'Pancada Lateral com Punho Invertido no Rosto', category: 'Golpes de Mão' },
          { name: 'Hiza Geri', description: 'Ataque com Joelho', category: 'Golpes de Perna/Pé' },
          { name: 'Mae Keage', description: 'Chute Frontal com Perna Estendida', category: 'Golpes de Perna/Pé' },
          { name: 'Mae Geri', description: 'Chute Frontal', category: 'Golpes de Perna/Pé' },
          { name: 'Jodan Uke', description: 'Bloqueio Alto', category: 'Defesas' },
          { name: 'Chudan Soto Uke', description: 'Bloqueio Médio de Fora para Dentro', category: 'Defesas' },
          { name: 'Chudan Uchi Uke', description: 'Bloqueio Médio de Dentro para Fora', category: 'Defesas' },
          { name: 'Gedan Barai', description: 'Bloqueio Baixo Varrendo', category: 'Defesas' },
          { name: 'Fudo Dachi', description: 'Postura Normal', category: 'Bases' },
          { name: 'Zenkutsu Dachi', description: 'Postura com Apoio Frontal', category: 'Bases' },
          { name: 'Jodan', description: 'Parte Alta (Rosto)', category: 'Nomenclaturas' },
          { name: 'Chudan', description: 'Parte Média (Plexo)', category: 'Nomenclaturas' },
          { name: 'Gedan', description: 'Parte Baixa (Virilha)', category: 'Nomenclaturas' },
        ]
      },
      {
        name: '9º Kyu',
        techniques: [
          { name: 'Seiken Sanbon Tsuki', description: 'Soco em Três Tempos', category: 'Golpes de Mão' },
          { name: 'Seiken Chudan Morote Tsuki', description: 'Soco Duplo Médio', category: 'Golpes de Mão' },
          { name: 'Seiken Jodan Morote Tsuki', description: 'Soco Duplo Alto', category: 'Golpes de Mão' },
          { name: 'Seiken Gedan Morote Tsuki', description: 'Soco Duplo Baixo', category: 'Golpes de Mão' },
          { name: 'Seiken Sanbon Morote Tsuki', description: 'Soco Duplo em Três Tempos', category: 'Golpes de Mão' },
          { name: 'Seiken Ago Tsuki', description: 'Soco Direto no Queixo', category: 'Golpes de Mão' },
          { name: 'Seiken Awase Tsuki', description: 'Soco Combinado Alto e Médio', category: 'Golpes de Mão' },
          { name: 'Uraken Furi Uchi', description: 'Pancada Lateral com Punho Invertido no Corpo', category: 'Golpes de Mão' },
          { name: 'Mae Kin Geri', description: 'Chute Frontal na Virilha', category: 'Golpes de Perna/Pé' },
          { name: 'Sanchin Dachi', description: 'Postura dos Três Pontos', category: 'Bases' },
          { name: 'Heiko Dachi', description: 'Postura Paralela', category: 'Bases' },
          { name: 'Mae', description: 'Frontal', category: 'Nomenclaturas' },
          { name: 'Tsuki', description: 'Soco', category: 'Nomenclaturas' },
          { name: 'Uke', description: 'Defesa', category: 'Nomenclaturas' },
          { name: 'Geri', description: 'Chute', category: 'Nomenclaturas' },
          { name: 'Dachi', description: 'Base', category: 'Nomenclaturas' },
          { name: 'Kata', description: 'Forma', category: 'Nomenclaturas' },
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
          { name: 'Seiken Tate Tsuki', description: 'Soco Médio com Punho na Vertical', category: 'Golpes de Mão' },
          { name: 'Uraken Mawashi Uchi', description: 'Pancada Circular com Punho Invertido na Nuca', category: 'Golpes de Mão' },
          { name: 'Shuto Sakotsu Uchi Komi', description: 'Ataque Frontal Direto com Faca da Mão', category: 'Golpes de Mão' },
          { name: 'Shuto Hizo Uchi', description: 'Ataque Circular Baixo com Faca da Mão', category: 'Golpes de Mão' },
          { name: 'Jodan Haito Uchi', description: 'Ataque Circular com Faca Interna da Mão', category: 'Golpes de Mão' },
          { name: 'Hiji Age', description: 'Cotovelada Ascendente', category: 'Golpes de Mão' },
          { name: 'Kansetsu Geri', description: 'Chute Lateral na Altura do Joelho', category: 'Golpes de Perna/Pé' },
          { name: 'Uchi Mawashi Geri', description: 'Chute Circular de Dentro para Fora', category: 'Golpes de Perna/Pé' },
          { name: 'Soto Mawashi Geri', description: 'Chute Circular de Fora para Dentro', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Geri', description: 'Chute para Trás', category: 'Golpes de Perna/Pé' },
          { name: 'Jodan Soete Uke', description: 'Bloqueio Alto Reforçado', category: 'Defesas' },
          { name: 'Chudan Uchi Soete Uke', description: 'Bloqueio Médio de Dentro para Fora Reforçado', category: 'Defesas' },
          { name: 'Kote Uke', description: 'Bloqueio Circular Ascendente com Antebraço', category: 'Defesas' },
          { name: 'Kokutsu Dachi', description: 'Base com Apoio Traseiro', category: 'Bases' },
          { name: 'Shiko Dachi', description: 'Base do Sumo', category: 'Bases' },
          { name: 'Rei', description: 'Saudação', category: 'Nomenclaturas' },
          { name: 'Kamaete', description: 'Entrar em Postura', category: 'Nomenclaturas' },
          { name: 'Naore', description: 'Voltar à Posição Inicial', category: 'Nomenclaturas' },
          { name: 'Yame', description: 'Parar', category: 'Nomenclaturas' },
        ]
      },
      {
        name: '7º Kyu',
        techniques: [
          { name: 'Seiken Jun Tsuki', description: 'Soco Lateral Médio “Empurrando”', category: 'Golpes de Mão' },
          { name: 'Seiken Kagi Tsuki', description: 'Soco Cruzado Médio', category: 'Golpes de Mão' },
          { name: 'Seiken Shita Tsuki', description: 'Soco Curto Médio com Punho Invertido', category: 'Golpes de Mão' },
          { name: 'Seiken Age Tsuki', description: 'Soco Ascendente com Punho Invertido', category: 'Golpes de Mão' },
          { name: 'Jodan Morote Haito Uchi', description: 'Ataque Duplo com Faca Interna da Mão', category: 'Golpes de Mão' },
          { name: 'Tettsui Gammen Uchi', description: 'Martelo na Têmpora', category: 'Golpes de Mão' },
          { name: 'Tettsui Sakotsu Uchi', description: 'Martelo Descendente', category: 'Golpes de Mão' },
          { name: 'Tettsui Uchi Uchi Frontal', description: 'Lateral do Punho de Dentro para Fora', category: 'Golpes de Mão' },
          { name: 'Hiji Mawashi Ate', description: 'Cotovelada Circular', category: 'Golpes de Mão' },
          { name: 'Kake Geri', description: 'Chute Circular de Fora para Dentro em Gancho', category: 'Golpes de Perna/Pé' },
          { name: 'Kake Uke', description: 'Bloqueio Circular Descendente com Antebraço', category: 'Defesas' },
          { name: 'Shuto Mawashi Uke', description: 'Bloqueio Circular Lateral com Faca da Mão', category: 'Defesas' },
          { name: 'Shuto Enkei Uke', description: 'Bloqueio Circular Duplo com Faca da Mão', category: 'Defesas' },
          { name: 'Shuto Jodan Juji Uke', description: 'Bloqueio Alto com Mãos Abertas Cruzadas', category: 'Defesas' },
          { name: 'Shuto Gedan Juji Uke', description: 'Bloqueio Baixo com Mãos Abertas Cruzadas', category: 'Defesas' },
          { name: 'Nekoashi Dachi', description: 'Base do Gato (Apoio Traseiro)', category: 'Bases' },
          { name: 'Kyu', description: 'Graduação antes da Preta', category: 'Nomenclaturas' },
          { name: 'Dan', description: 'Graduação de Faixa Preta', category: 'Nomenclaturas' },
          { name: 'Kansetsu', description: 'Articulação', category: 'Nomenclaturas' },
          { name: 'Ushiro', description: 'Para Trás', category: 'Nomenclaturas' },
          { name: 'Uchi', description: 'Interno / Pancada', category: 'Nomenclaturas' },
          { name: 'Soto', description: 'Externo', category: 'Nomenclaturas' },
          { name: 'Gyaku', description: 'Invertido', category: 'Nomenclaturas' },
          { name: 'Morote', description: 'Duas Mãos', category: 'Nomenclaturas' },
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
          { name: 'Tettsui Uchi Uchi Lateral', description: 'Martelo de Dentro para Fora', category: 'Golpes de Mão' },
          { name: 'Hiji Yoko Ate', description: 'Cotovelada Lateral Curta', category: 'Golpes de Mão' },
          { name: 'Hiji Oroshi', description: 'Cotovelada Descendente', category: 'Golpes de Mão' },
          { name: 'Ushiro Kake Geri', description: 'Chute Circular para Trás em Gancho', category: 'Golpes de Perna/Pé' },
          { name: 'Tobi Mae Geri', description: 'Chute Frontal com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Ushiro Mawashi Geri', description: 'Chute Circular para Trás Giratório', category: 'Golpes de Perna/Pé' },
          { name: 'Tobi Mawashi Geri', description: 'Chute Circular com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Koken Uke', description: 'Bloqueio Ascendente com Pulso Superior', category: 'Defesas' },
          { name: 'Tsuruashi Dachi', description: 'Postura do Grou', category: 'Bases' },
          { name: 'Atemi', description: 'Golpe em ponto vulnerável', category: 'Nomenclaturas' },
          { name: 'Ki', description: 'Energia Vital', category: 'Nomenclaturas' },
          { name: 'Kime', description: 'Finalização / Foco', category: 'Nomenclaturas' },
          { name: 'Tai Sabaki', description: 'Esquiva', category: 'Nomenclaturas' },
        ]
      },
      {
        name: '5º Kyu',
        techniques: [
          { name: 'Hiji Ushiro Ate', description: 'Cotovelada para Trás', category: 'Golpes de Mão' },
          { name: 'Hiji Ushiro Age', description: 'Cotovelada para Trás Ascendente', category: 'Golpes de Mão' },
          { name: 'Kuzure Ushiro Mawashi Geri', description: 'Variação de Chute Circular para Trás Giratório', category: 'Golpes de Perna/Pé' },
          { name: 'Tobi Yoko Geri', description: 'Chute Lateral com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Gyaku Mawashi Geri', description: 'Chute Circular Invertido de Dentro para Fora', category: 'Golpes de Perna/Pé' },
          { name: 'Uchi Mawashi Kakato Otoshi', description: 'Circular de Dentro + Descendente', category: 'Golpes de Perna/Pé' },
          { name: 'Soto Mawashi Kakato Otoshi', description: 'Circular de Fora + Descendente', category: 'Golpes de Perna/Pé' },
          { name: 'Tensho Uke', description: 'Bloqueio Circular Alto de Dentro para Fora com Faca da Mão', category: 'Defesas' },
          { name: 'Tanden', description: 'Centro de Gravidade', category: 'Nomenclaturas' },
          { name: 'Tate', description: 'Vertical', category: 'Nomenclaturas' },
          { name: 'Tori', description: 'Atacante', category: 'Nomenclaturas' },
          { name: 'Uke', description: 'Defensor', category: 'Nomenclaturas' },
          { name: 'Tobi', description: 'Salto', category: 'Nomenclaturas' },
          { name: 'Kuzushi', description: 'Desequilíbrio', category: 'Nomenclaturas' },
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
          { name: 'Tobi Ushiro Geri', description: 'Chute para Trás com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Tobi Ushiro Mawashi Geri', description: 'Chute Circular para Trás “Giratório” com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Kata Hiza Dachi', description: 'Combate sobre um Joelho', category: 'Bases' },
          { name: 'Sagi Ashi Dachi', description: 'Apoio em Uma Perna', category: 'Bases' },
          { name: 'Kake Dachi', description: 'Uma Perna Cruzando por Trás', category: 'Bases' },
          { name: 'Oyaubi Ken', description: 'Punho com Dedo Polegar', category: 'Nomenclaturas' },
        ]
      },
      {
        name: '3º Kyu',
        techniques: [
          { name: 'Tobi Kuzure Ushiro Mawashi Geri', description: 'Variação do Chute Circular para Trás “Giratório” com Salto', category: 'Golpes de Perna/Pé' },
          { name: 'Haishu', description: 'Parte Superior da Mão', category: 'Nomenclaturas' },
          { name: 'Tsuzuki', description: 'Continuação', category: 'Nomenclaturas' },
          { name: 'Sune', description: 'Canela', category: 'Nomenclaturas' },
          { name: 'Atama', description: 'Cabeça', category: 'Nomenclaturas' },
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
