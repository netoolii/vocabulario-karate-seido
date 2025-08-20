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
          // { name: 'Seiken Chudan Tsuki', description: 'Soco Médio (Plexo, Altura do Estômago)', category: 'Técnicas de Mãos (Te Waza)', src: 'https://ashiharakarate.org/assets/images/tsukichudananimation.gif'},
          // { name: 'Seiken Jodan Tsuki', description: 'Soco Alto (Rosto)', category: 'Técnicas de Mãos (Te Waza)', src: 'https://ashiharakarate.org/assets/images/tsukijodaanimation.gif'},
          // { name: 'Seiken Gedan Tsuki', description: 'Soco Baixo (Região da Virilha)', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          // { name: 'Seiken Sanbon Tsuki', description: 'Soco em Três Tempos', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          // { name: 'Seiken Chudan Morote Tsuki', description: 'Soco Duplo Médio', category: 'Técnicas de Mãos (Te Waza)', src: 'https://i.pinimg.com/474x/78/a6/75/78a675b45e3952c3fe230d3ef1ae6f4f.jpg'},
          // { name: 'Seiken Jodan Morote Tsuki', description: 'Soco Duplo Alto', category: 'Técnicas de Mãos (Te Waza)', src: 'https://www.internationalkarate.co.uk/wp-content/uploads/2017/11/seikan_morote_tsuki_jodan.png'},
          // { name: 'Seiken Gedan Morote Tsuki', description: 'Soco Duplo Baixo', category: 'Técnicas de Mãos (Te Waza)', src: 'https://www.internationalkarate.co.uk/wp-content/uploads/2017/11/seikan_morote_tsuki_gedan.png'},
          // { name: 'Seiken Sanbon Morote Tsuki', description: 'Soco Duplo em Três Tempos', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          // { name: 'Seiken Ago Tsuki', description: 'Soco Direto no Queixo', category: 'Técnicas de Mãos (Te Waza)', src: 'https://ashiharakarate.org/assets/images/uchiagoanimation.gif'},
          // { name: 'Seiken Awase Tsuki', description: 'Soco Combinado Alto e Médio', category: 'Técnicas de Mãos (Te Waza)', src: 'https://lh3.googleusercontent.com/proxy/dhMONv_PW6qTtemQ3s5rrlheSvgwxVwSSeRTvEbBm2PBY5oNyrxODsSXWNoXut5Uf_ZG4tev9qH1-k91Qok3d7PHx30sJGU5lFkTpFMqIujx-jPLBR7UU1lxKKYlLYXnhAoO'},
          // { name: 'Uraken Shomen Uchi', description: 'Pancada Frontal com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)', src: 'https://www.internationalkarate.co.uk/wp-content/uploads/2017/11/uraken_shomen_ganmen_uchi.png'},
          // { name: 'Uraken Sayu Uchi', description: 'Pancada Lateral com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)', src: 'https://www.ashiharakarate.org/assets/images/uchisayuanimation.gif'},
          // { name: 'Uraken Furi Uchi', description: 'Pancada Lateral com Punho Invertido no Corpo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          
          // // Técnicas de Defesa (Uke Waza)
          // { name: 'Jodan Uke', description: 'Bloqueio Alto', category: 'Técnicas de Defesa (Uke Waza)', src: 'https://i.pinimg.com/474x/68/8c/4e/688c4eb5239e9866d74121c793333086.jpg'},
          // { name: 'Chudan Soto Uke', description: 'Bloqueio Médio de Fora para Dentro', category: 'Técnicas de Defesa (Uke Waza)', src: 'https://www.tecnicas-de-karate.info/wa_images/codoopt.gif?v=1hu7p9p'},
          // { name: 'Chudan Uchi Uke', description: 'Bloqueio Médio de Dentro para Fora', category: 'Técnicas de Defesa (Uke Waza)', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2cij3WcdQtUnR0JgVfq8QPWWtMteja-YMICb_DsDMteDCztsgHGDoNlSVxMV3DjG9nng&usqp=CAU'},
          // { name: 'Gedan Barai', description: 'Bloqueio Baixo Varrendo', category: 'Técnicas de Defesa (Uke Waza)', src: 'https://lh3.googleusercontent.com/proxy/S6izJiMw4YiiPQ9i7nkVn8ynwgYl0ZGGOChus86ayOD3VSd7g0cHbTHRmwUbLvRPp1k2vQ__6ejKNIqV4szUJV9sqmpGy97D3btds2O_WJpAWpENW7H0zgMV3hSlTyd1sak'},
          
          // // Técnicas de Pernas (Ashi Waza)
          // { name: 'Hiza Geri', description: 'Ataque com Joelho', category: 'Técnicas de Pernas (Ashi Waza)', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UnDyWl1fSA9CnL06GysnBaR4_C6BpWmqfA&s'},
          // { name: 'Mae Keage', description: 'Chute Frontal com a Perna Estendida', category: 'Técnicas de Pernas (Ashi Waza)', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-nTblOm2aqzPH614B1VKmeujkFhZkVi7Bg&s'},
          // { name: 'Mae Kin Geri', description: 'Chute Frontal na Virilha', category: 'Técnicas de Pernas (Ashi Waza)', src: 'https://shotokankaratekent.co.uk/wp-content/uploads/2013/01/kin-geri.jpg'},
          // { name: 'Mae Geri', description: 'Chute Frontal', category: 'Técnicas de Pernas (Ashi Waza)', src: 'https://i.pinimg.com/474x/02/f5/cc/02f5cc040e4dfc3dbe41a0ef9f4c7f10.jpg'},

          // Técnicas de Mãos (Te Waza)
          { name: 'Seiken Chudan Tsuki', description: 'Soco Médio (Plexo, Altura do Estômago)', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Jodan Tsuki', description: 'Soco Alto (Rosto)', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Gedan Tsuki', description: 'Soco Baixo (Região da Virilha)', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Sanbon Tsuki', description: 'Soco em Três Tempos', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Chudan Morote Tsuki', description: 'Soco Duplo Médio', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Jodan Morote Tsuki', description: 'Soco Duplo Alto', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Gedan Morote Tsuki', description: 'Soco Duplo Baixo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Sanbon Morote Tsuki', description: 'Soco Duplo em Três Tempos', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Ago Tsuki', description: 'Soco Direto no Queixo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Awase Tsuki', description: 'Soco Combinado Alto e Médio', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Uraken Shomen Uchi', description: 'Pancada Frontal com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Uraken Sayu Uchi', description: 'Pancada Lateral com Punho Invertido no Rosto', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Uraken Furi Uchi', description: 'Pancada Lateral com Punho Invertido no Corpo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          
          // Técnicas de Defesa (Uke Waza)
          { name: 'Jodan Uke', description: 'Bloqueio Alto', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Chudan Soto Uke', description: 'Bloqueio Médio de Fora para Dentro', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Chudan Uchi Uke', description: 'Bloqueio Médio de Dentro para Fora', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Gedan Barai', description: 'Bloqueio Baixo Varrendo', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          
          // Técnicas de Pernas (Ashi Waza)
          { name: 'Hiza Geri', description: 'Ataque com Joelho', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Mae Keage', description: 'Chute Frontal com a Perna Estendida', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Mae Kin Geri', description: 'Chute Frontal na Virilha', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Mae Geri', description: 'Chute Frontal', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          
          // Bases (Dachi)
          { name: 'Fudo Dachi', description: 'Postura Normal (Natural)', category: 'Bases (Dachi)', src: 'https://karatecoaching.com/wp-content/uploads/2012/10/Hachiji-Dachi-2.jpg'},
          { name: 'Sanchin Dachi', description: 'Postura dos Três Pontos (Enraizada)', category: 'Bases (Dachi)', src: 'https://jksmexico.com/wp-content/uploads/2009/10/pa2600211.jpg?w=640'},
          { name: 'Heiko Dachi', description: 'Postura Paralela', category: 'Bases (Dachi)', src: 'https://projetoshotokankarate.wordpress.com/wp-content/uploads/2021/01/screenshot_20210124-091901.jpg'},
          { name: 'Zenkutsu Dachi', description: 'Postura com Apoio Frontal', category: 'Bases (Dachi)', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_5FtpJza-2-mjQnl9FbMJl_yOLIHwX3w3w&s'},
         
          // Vocabulário
          { name: 'Jodan', description: 'Parte Alta do Corpo (Rosto)', category: 'Vocabulário', src: ''},
          { name: 'Chudan', description: 'Parte Média do Corpo (Plexo)', category: 'Vocabulário', src: ''},
          { name: 'Gedan', description: 'Parte Baixa do Corpo (Virilha)', category: 'Vocabulário', src: ''},
          { name: 'Mae', description: 'Frontal', category: 'Vocabulário', src: ''},
          { name: 'Tsuki', description: 'Soco', category: 'Vocabulário', src: ''},
          { name: 'Uke', description: 'Bloqueio, Defesa', category: 'Vocabulário', src: ''},
          { name: 'Geri', description: 'Chute, Pontapé', category: 'Vocabulário', src: ''},
          { name: 'Dachi', description: 'Base, Postura', category: 'Vocabulário', src: ''},
          { name: 'Kata', description: 'Forma', category: 'Vocabulário', src: ''},
          
          // Armas do Corpo
          { name: 'Seiken', description: 'Punho', category: 'Armas do Corpo', src: 'https://www.thomasrye.com/wp-content/uploads/2010/01/foreknuckle_punch.jpg'},
          { name: 'Uraken', description: 'Punho Invertido', category: 'Armas do Corpo', src: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Uraken.png'},
          { name: 'Hiza', description: 'Joelho', category: 'Armas do Corpo', src: 'https://www.internationalkarate.co.uk/wp-content/uploads/2017/11/hiza.png'},
          { name: 'Haisoku', description: 'Peito do Pé', category: 'Armas do Corpo', src: 'https://www.smartdojo.net/img/syllabus/karate/detail/haisoku.png'},
          { name: 'Chusoku', description: 'Bola do Pé', category: 'Armas do Corpo', src: 'https://www.smartdojo.net/img/syllabus/karate/detail/chusoku.png'}
        ]
      },
      {
        
        name: '9º Kyu',
        techniques: [
          // Técnicas de Mãos (Te Waza)
          { name: 'Chudan Nukite', description: 'Ataque com a Ponta dos Dedos no Plexo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Jodan Nukite', description: 'Ataque com a Ponta dos Dedos na Garganta', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Chudan Morote Nukite', description: 'Ataque Duplo com a Ponta dos Dedos no Plexo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Jodan Morote Nukite', description: 'Ataque Duplo com a Ponta dos Dedos na Garg.', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shotei Gedan Oroshi', description: 'Ataque com a Base da Mão Descendente', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shotei Jodan Uchi', description: 'Ataque com a Base da Mão no Queixo', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shuto Gammen Uchi', description: 'Ataque Circular com a Faca da Mão na Têmpora', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shuto Sakotsu Uchi', description: 'Ataque Descendente com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shuto Uchi Uchi', description: 'Ataque de Dentro para Fora com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},

          // Técnicas de Defesa (Uke Waza)
          { name: 'Chudan Uchi Uke Gedan Barai', description: 'Bloqueio de Dentro para Fora + Baixo Varrendo', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Kakiwake Uke', description: 'Bloqueio Baixo Circular Duplo', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Seiken Jodan Juji Uke', description: 'Bloqueio Alto com Punhos Cerrados em Cruz', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Seiken Gedan Juji Uke', description: 'Bloqueio Baixo com Punhos Cerrados em Cruz', category: 'Técnicas de Defesa (Uke Waza)', src: ''},

          // Técnicas de Pernas (Ashi Waza)
          { name: 'Hiza Mawashi Geri', description: 'Ataque Circular com Joelho', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Mawashi Geri', description: 'Chute Circular', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Yoko Keage', description: 'Chute Lateral Alto com a Perna Estendida', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Yoko Geri', description: 'Chute Lateral com a Faca do Pé', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Bases (Dachi)
          { name: 'Heisoku Dachi', description: 'Postura com os Pés Unidos', category: 'Bases (Dachi)', src: 'https://jksmexico.com/wp-content/uploads/2009/10/pa2600191.jpg?w=640'},
          { name: 'Musubi Dachi', description: 'Postura com os Pés para Fora', category: 'Bases (Dachi)', src: 'https://lh5.googleusercontent.com/proxy/XaaKUT66scmEfor0qdQFA_8ycNH3bdUJ8zTjPRvYFTG15iPQgqAWP7HBvtFOuzJeeDyLbETq7NfzSnmPDtyREki_uCC9gji3Uis'},
          { name: 'Uchi Hachiji Dachi', description: 'Postura Invertida com os Pés para Dentro', category: 'Bases (Dachi)', src: 'https://yiochukangkarate.wordpress.com/wp-content/uploads/2012/12/uchi-hachiji-dachi.jpg'},
          { name: 'Kiba Dachi', description: 'Postura Paralela do "Cavaleiro"', category: 'Bases (Dachi)', src: 'https://www.dojoupdate.com/wp-content/uploads/karate-stance-kiba-dachi.jpg'},
          { name: 'Re Dachi', description: 'Postura Básica de Combate', category: 'Bases (Dachi)', src: 'https://www.wikihow.com/images_en/thumb/2/26/Block-Punches-in-Karate-Step-1-Version-2.jpg/v4-460px-Block-Punches-in-Karate-Step-1-Version-2.jpg'},

          // Vocabulário
          { name: 'Te', description: 'Mão', category: 'Vocabulário', src: ''},
          { name: 'Ashi', description: 'Perna, Pé', category: 'Vocabulário', src: ''},
          { name: 'Mawashi', description: 'Circular', category: 'Vocabulário', src: ''},
          { name: 'Yoko', description: 'Lateral', category: 'Vocabulário', src: ''},
          { name: 'Dojo', description: 'Local de Treinamento', category: 'Vocabulário', src: ''},
          { name: 'Kaicho', description: 'Grande Mestre', category: 'Vocabulário', src: ''},
          { name: 'Sempai', description: 'Estudante mais Antigo, mais Experiente', category: 'Vocabulário', src: ''},
          { name: 'Kohai', description: 'Estudante Novato, menos Experiente', category: 'Vocabulário', src: ''},

          // Armas do Corpo
          { name: 'Shuto', description: 'Faca da Mão', category: 'Armas do Corpo', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shuto.png/800px-Shuto.png'},
          { name: 'Nukite', description: 'Ponta dos Dedos', category: 'Armas do Corpo', src: 'https://karatecoaching.com/wp-content/uploads/2012/10/Nukite-2.jpg'},
          { name: 'Shotei', description: 'Calcanhar da Palma (corrigir)', category: 'Armas do Corpo', src: 'https://www.janetmcclintock.com/wp-content/uploads/2014/08/palm-vs-fist.jpg'},
          { name: 'Kote', description: 'Parte externa do antebraço (corrigir)', category: 'Armas do Corpo', src: 'https://www.tecnicas-de-karate.info/wa_images/kote%20uchi%20-%20copia_1.jpg?v=1g1v56d'},
          { name: 'Sokuto', description: 'Faca do Pé', category: 'Armas do Corpo', src: 'https://lh5.googleusercontent.com/proxy/8BGzXePGk4odfWnDICsJC5nzofzsf0IXjpIjkSV4kJlSUJ4UASt8xfNH8oyY3tBYuIE8y5SeW3aMnU7_uoj5IgIhHgh6e9QB4-knASdOntT2qyps4g'}
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
          // Técnicas de Mãos (Te Waza)
          { name: 'Seiken Tate Tsuki', description: 'Soco Médio com Punho na Vertical', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Uraken Mawashi Uchi', description: 'Pancada Circular com Punho Invertido na Nuca', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shuto Sakotsu Uchi Komi', description: 'Ataque Frontal Direto com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Shuto Hizo Uchi', description: 'Ataque Circular Baixo com a Faca da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Hiji Mawashi Ate', description: 'Cotovelada Circular', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Hiji Age', description: 'Cotovelada Ascendente', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Jodan Haito Uchi', description: 'Ataque Circular com a Faca Interna da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Jodan Morote Haito Uchi', description: 'Ataque Duplo com a Faca Interna da Mão', category: 'Técnicas de Mãos (Te Waza)', src: ''},

          // Técnicas de Defesa (Uke Waza)
          { name: 'Jodan Soete Uke', description: 'Bloqueio Alto Reforçado', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Chudan Uchi Soete Uke', description: 'Bloqueio Médio de Dentro para Fora Reforçado', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Kote Uke', description: 'Bloqueio Circular Ascendente com Antebraço', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Kake Uke', description: 'Bloqueio Circular Descendente com Antebraço', category: 'Técnicas de Defesa (Uke Waza)', src: ''},

          // Técnicas de Pernas (Ashi Waza)
          { name: 'Kansetsu Geri', description: 'Chute Lateral na Altura do Joelho', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Uchi Mawashi Geri', description: 'Chute Circular de Dentro para Fora', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Soto Mawashi Geri', description: 'Chute Circular de Fora para Dentro', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Ushiro Geri', description: 'Chute para Trás', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Bases (Dachi)
          { name: 'Kokutsu Dachi', description: 'Postura com Apoio Traseiro', category: 'Bases (Dachi)', src: 'https://www.shotokan.it/wp-content/uploads/2024/12/posizioni.jpg'},
          { name: 'Shiko Dachi', description: 'Postura do Sumô', category: 'Bases (Dachi)', src: 'https://the-martial-way.com/wp-content/uploads/2019/12/%E5%9B%9B%E8%82%A1%E7%AB%8B.jpg'},

          // Vocabulário
          { name: 'Rei', description: 'Saudação', category: 'Vocabulário', src: ''},
          { name: 'Kamaete', description: 'Entrar em Postura Combativa', category: 'Vocabulário', src: ''},
          { name: 'Naore', description: 'Voltar à Posição Inicial', category: 'Vocabulário', src: ''},
          { name: 'Yame', description: 'Terminar, Parar', category: 'Vocabulário', src: ''},
          { name: 'Kyu', description: 'Graduação de Faixa Inferior à Preta; do 10º ao 1º', category: 'Vocabulário', src: ''},
          { name: 'Dan', description: 'Graduação de Faixa Preta; do 1º ao 10º', category: 'Vocabulário', src: ''},
          { name: 'Kansetsu', description: 'Articulação', category: 'Vocabulário', src: ''},
          { name: 'Ushiro', description: 'Para Trás', category: 'Vocabulário', src: ''},
          { name: 'Uchi', description: '(1) Interno; (2) Pancada', category: 'Vocabulário', src: ''},
          { name: 'Soto', description: 'Externo', category: 'Vocabulário', src: ''},
          { name: 'Migi', description: 'Lado Direito', category: 'Vocabulário', src: ''},
          { name: 'Hidari', description: 'Lado Esquerdo', category: 'Vocabulário', src: ''},
          { name: 'Shihan', description: 'Mestre', category: 'Vocabulário', src: ''},
          { name: 'Sensei', description: 'Professor', category: 'Vocabulário', src: ''},
          { name: 'Karategi', description: 'Uniforme para a Prática do Karatê', category: 'Vocabulário', src: ''},

          // Armas do Corpo
          { name: 'Tate Ken', description: 'Punho Horizontal', category: 'Armas do Corpo', src: 'https://www.tecnicas-de-karate.info/wa_images/tate-tsuki.jpg?v=1hu7pa0'},
          { name: 'Hiji', description: 'Cotovelo', category: 'Armas do Corpo', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jud-hiji.svg/640px-Jud-hiji.svg.png'},
          { name: 'Haito', description: 'Borda do Lado do Polegar (corrigir)', category: 'Armas do Corpo', src: 'https://www.smartdojo.net/img/syllabus/karate/detail/haito.png'},
          { name: 'Kakato', description: 'Calcanhar', category: 'Armas do Corpo', src: 'https://www.tecnicas-de-karate.info/wa_images/ushiro-kakato-waza-opt.jpg?v=1hu7pa0'},
          { name: 'Teisoku', description: 'Parte Lateral Interna do Pé', category: 'Armas do Corpo', src: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Teisoku.svg'}
        ]
      },
      {
        name: '7º Kyu',
        techniques: [
          // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          { name: 'Seiken Jun Tsuki', description: 'Soco Lateral Médio "Empurrando"', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Kagi Tsuki', description: 'Soco Cruzado Médio', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Shita Tsuki', description: 'Soco Curto Médio com Punho Invertido', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Seiken Age Tsuki', description: 'Soco Ascendente com Punho Invertido', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Tettsui Gammen Uchi', description: 'Ataque Circular com Lateral do Punho na Têmpora', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Tettsui Sakotsu Uchi', description: 'Ataque Descendente com Lateral do Punho ("Martelo")', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Tettsui Uchi Uchi Frontal', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Tettsui Uchi Uchi Lateral', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza)', src: ''},

          // Técnicas de Defesa (Uke Waza)
          { name: 'Shuto Mawashi Uke', description: 'Bloqueio Circular Lateral com Faca da Mão (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Shuto Enkei Uke', description: 'Bloqueio Circular Duplo com Faca da Mão', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Shuto Jodan Juji Uke', description: 'Bloqueio Alto com Mãos Abertas em Cruz', category: 'Técnicas de Defesa (Uke Waza)', src: ''},
          { name: 'Shuto Gedan Juji Uke', description: 'Bloqueio Baixo com Mãos Abertas em Cruz', category: 'Técnicas de Defesa (Uke Waza)', src: ''},

          // Técnicas de Pernas (Ashi Waza)
          { name: 'Kake Geri', description: 'Chute Circular de Fora para Dentro em "Gancho"', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Bases (Dachi)
          { name: 'Nekoashi Dachi', description: 'Postura com Apoio Traseiro do "Gato"', category: 'Bases (Dachi)', src: ''},

          // Vocabulário
          { name: 'Shinzen', description: 'Templo; Centro Simbólico do Dojo', category: 'Vocabulário', src: ''},
          { name: 'Kyoshi', description: 'Instrutor Sênior ("aquele que sabe")', category: 'Vocabulário', src: ''},
          { name: 'Ritsu-Rei', description: 'Saudação em Pé', category: 'Vocabulário', src: ''},
          { name: 'Za-Rei', description: 'Saudação Ajoelhado', category: 'Vocabulário', src: ''},
          { name: 'Kiai', description: 'Grito Liberado para Focalizar Energia', category: 'Vocabulário', src: ''},
          { name: 'Hajime', description: 'Iniciar, Começar', category: 'Vocabulário', src: ''},
          { name: 'Mate', description: 'Interromper, Parar', category: 'Vocabulário', src: ''},
          { name: 'Waza', description: 'Técnica', category: 'Vocabulário', src: ''},
          { name: 'Morote', description: '(Com o Uso das) Duas Mãos', category: 'Vocabulário', src: ''},
          { name: 'Gyaku', description: 'Invertido, Contrário', category: 'Vocabulário', src: ''},
          { name: 'Koshi', description: 'Quadril', category: 'Vocabulário', src: ''},
          { name: 'Wagi', description: 'Casaco ou Blusão do Karategi', category: 'Vocabulário', src: ''},
          { name: 'Chitabaki', description: 'Calça do Karategi (= Zubon)', category: 'Vocabulário', src: ''},
          { name: 'Obi', description: 'Faixa', category: 'Vocabulário', src: ''},
          { name: 'Zori', description: 'Chinelo de Dedo', category: 'Vocabulário', src: ''},

          // Armas do Corpo
          { name: 'Tettsui', description: 'Mão como Martelo (corrigir)', category: 'Armas do Corpo', src: ''},
          { name: 'Toho', description: 'Parte Média Entre o Indicador e o Polegar', category: 'Armas do Corpo', src: ''},
          { name: 'Uchi Kote', description: 'Parte de Cima Antebraço', category: 'Armas do Corpo', src: ''},
          { name: 'Soto Kote', description: 'Parte de Baixo Antebraço', category: 'Armas do Corpo', src: ''},
          { name: 'Ushiro Kakato', description: 'Parte de Trás do Calcanhar', category: 'Armas do Corpo'}
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
          // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          { name: 'Tettsui Uchi Uchi Lateral x2', description: 'Ataque de Dentro para Fora com Lateral do Punho', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Hiji Yoko Ate', description: 'Cotovelada Lateral Curta', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Hiji Oroshi', description: 'Cotovelada Descendente', category: 'Técnicas de Mãos (Te Waza)', src: ''},

          // Técnicas de Defesa (Uke Waza)
          { name: 'Koken Uke', description: 'Bloqueio Ascendente com o Pulso Superior (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)', src: ''},

          // Técnicas de Pernas (Ashi Waza)
          { name: 'Ushiro Kake Geri', description: 'Chute Circular para Trás em “Gancho”', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Tobi Mae Geri', description: 'Chute Frontal com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Ushiro Mawashi Geri', description: 'Chute Circular para Trás “Giratório”', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Tobi Mawashi Geri', description: 'Chute Circular com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Bases (Dachi)
          { name: 'Tsuruashi Dachi', description: 'Postura do "Grou" (Ave)', category: 'Bases (Dachi)', src: ''},

          // Vocabulário
          { name: 'Atemi', description: 'Pancada Direcionada a um Ponto Anatômico Frágil', category: 'Vocabulário', src: ''},
          { name: 'Ki', description: 'Energia Vital', category: 'Vocabulário', src: ''},
          { name: 'Kime', description: 'Foco de Potência, Arremate, Finalização', category: 'Vocabulário', src: ''},
          { name: 'Tai Sabaki', description: 'Esquiva', category: 'Vocabulário', src: ''},
          { name: 'Tanden', description: 'Centro de Gravidade e Energia (Ki) do Karateka (sob o umbigo)', category: 'Vocabulário', src: ''},
          { name: 'Tate', description: 'Vertical', category: 'Vocabulário', src: ''},
          { name: 'Zen', description: 'Filosofia Oriental', category: 'Vocabulário', src: ''},
          { name: 'Hansoku', description: 'Falta', category: 'Vocabulário', src: ''},
          { name: 'Hansoku Make', description: 'Desclassificação', category: 'Vocabulário', src: ''},
          { name: 'Hantei', description: 'Julgamento', category: 'Vocabulário', src: ''},
          { name: 'Ippon', description: 'Ponto Completo', category: 'Vocabulário', src: ''},
          { name: 'Shiai', description: 'Competição, Torneio', category: 'Vocabulário', src: ''},
          { name: 'Wazari', description: 'Quase Ponto Completo, Meio Ponto', category: 'Vocabulário', src: ''},

          // Armas do Corpo
          { name: 'Ippon Ken', description: 'Golpe com o punho onde o dedo indicador é estendido e o polegar pressionado contra ele, formando uma ponta afiada', category: 'Armas do Corpo', src: ''},
          { name: 'Ippon Nukite', description: '(corrigir)', category: 'Armas do Corpo', src: ''},
          { name: 'Hirate', description: 'Palma da mão', category: 'Armas do Corpo', src: ''},
          { name: 'Koken', description: 'Parte de Cima do Pulso', category: 'Armas do Corpo', src: ''},
          { name: 'Tsuma Saki', description: 'Ponta do Pé', category: 'Armas do Corpo', src: ''},
        ]
      },
      {
        name: '5º Kyu',
        techniques: [
          // Técnicas de Mãos (Te Waza): Em Kiba Dachi
          { name: 'Hiji Ushiro Ate', description: 'Cotovelada para Trás', category: 'Técnicas de Mãos (Te Waza)', src: ''},
          { name: 'Hiji Ushiro Age', description: 'Cotovelada para Trás Ascendente', category: 'Técnicas de Mãos (Te Waza)', src: ''},

          // Técnicas de Defesa (Uke Waza)
          { name: 'Tensho Uke', description: 'Bloqueio Circular Alto de Dentro para Fora com a Faca da Mão (Kokutsu Dachi)', category: 'Técnicas de Defesa (Uke Waza)', src: ''},

          // Técnicas de Pernas (Ashi Waza)
          { name: 'Kuzure Ushiro Mawashi Geri', description: 'Variação do Chute Circular para Trás “Giratório”', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Tobi Yoko Geri', description: 'Chute Lateral com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Gyaku Mawashi Geri', description: 'Chute Circular Invertido de Dentro para Fora', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Uchi Mawashi Kakato Otoshi', description: 'Chute Circular de Dentro para Fora + Descendente com o Calcanhar', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Soto Mawashi Kakato Otoshi', description: 'Chute Circular de Fora para Dentro + Descendente com o Calcanhar', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Vocabulário
          { name: 'Geiko', description: 'Forma de Treinamento', category: 'Vocabulário', src: ''},
          { name: 'Tori', description: 'Atacante', category: 'Vocabulário', src: ''},
          { name: 'Uke', description: '(2) Atacado, Aquele que Defende', category: 'Vocabulário', src: ''},
          { name: 'Tobi', description: 'Salto', category: 'Vocabulário', src: ''},
          { name: 'Kuzure', description: 'Variação', category: 'Vocabulário', src: ''},
          { name: 'Mokuso', description: 'Posição de Concentração, Meditação', category: 'Vocabulário', src: ''},
          { name: 'Yoi', description: 'Preparar', category: 'Vocabulário', src: ''},
          { name: 'Ukemi', description: 'Exercício de (Amortecimento) de Queda', category: 'Vocabulário', src: ''},
          { name: 'Kuzushi', description: 'Desequilíbrio', category: 'Vocabulário', src: ''},
          { name: 'Otoshi', description: 'Deixar Cair, Arremesso', category: 'Vocabulário', src: ''},
          { name: 'Kumi', description: 'Agarrar, Segurar', category: 'Vocabulário', src: ''},
          { name: 'Suri Ashi', description: 'Caminhada em que um Pé não Ultrapassa o Outro, Deslizando', category: 'Vocabulário', src: ''},
          { name: 'Ashi Barai', description: 'Varrida com o Pé', category: 'Vocabulário', src: ''},
          { name: 'Hombu Dojo', description: 'Academia Central Mundial (Nova Iorque)', category: 'Vocabulário', src: ''},
          { name: 'Makiwara', description: 'Alvo para Treinamento de Golpes, em Geral de Madeira e Palha', category: 'Vocabulário', src: ''},
        
          // Armas do Corpo
          { name: 'Nakadaka Ken', description: 'Seiken com dedo medio Protuberante', category: 'Armas do Corpo', src: ''},
          { name: 'Nihon Nukite', description: 'Dois dedos (geralmente o indicador e o médio) são usados para realizar o ataque', category: 'Armas do Corpo', src: ''},
          { name: 'Hiraken', description: 'Nós dos dedos', category: 'Armas do Corpo', src: ''},
          { name: 'Kumade', description: 'Palma plana com os dedos Dobrados', category: 'Armas do Corpo', src: ''},
          { name: 'Keiko', description: 'Ponta dos dedos em formato de pinça', category: 'Armas do Corpo', src: ''},
        
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
          { name: 'Tobi Ushiro Geri', description: 'Chute para Trás com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Tobi Ushiro Mawashi Geri', description: 'Chute Circular para Trás “Giratório” com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},
          { name: 'Tobi Kuzure Ushiro Mawashi Geri', description: 'Variação do Chute Circular para Trás “Giratório” com Salto', category: 'Técnicas de Pernas (Ashi Waza)', src: ''},

          // Bases (Dachi)
          { name: 'Kata Hiza Dachi', description: 'Postura de Combate sobre um dos Joelhos', category: 'Bases (Dachi)', src: ''},
          { name: 'Sagi Ashi Dachi', description: 'Postura sobre uma Perna de Apoio', category: 'Bases (Dachi)', src: ''},
          { name: 'Kake Dachi', description: 'Postura com uma Perna Cruzando por Trás', category: 'Bases (Dachi)', src: ''},

          // Armas do Corpo
          { name: 'Oyaubi Ken', description: 'Punho em semelhança a seiken mas com o polegar saliente em triângulo', category: 'Armas do Corpo', src: ''},
          { name: 'Haishu', description: 'Costas da Mão', category: 'Armas do Corpo', src: ''},
          { name: 'Atama', description: 'Parte posterior da cabeça', category: 'Armas do Corpo', src: ''},
          { name: 'Tsuzuki', description: 'Parte anterior da cabeça', category: 'Armas do Corpo', src: ''},
          { name: 'Sune', description: 'Canela', category: 'Armas do Corpo', src: ''}
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
          { name: 'Mae Mawashi Kubi Geri', description: 'Chute Circular na Altura do Pescoço', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Tobi Kake Geri', description: 'Chute Gancho com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Tobi Mawashi Geri', description: 'Chute Circular para Trás com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Ashi Tobi Mae Geri', description: 'Chute Frontal com Salto usando Perna de Trás', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Tate Do Mawashi Kaiten Geri', description: 'Chute Circular Vertical Giratório', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Nidan Tobi Mae Geri', description: 'Chute Frontal Duplo com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Ashi Tobi Mawashi Geri', description: 'Chute Circular com Salto usando Perna de Trás', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Yoko Do Mawashi Kaiten Geri', description: 'Chute Lateral Circular Giratório', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Nidan Tobi Mawashi Geri', description: 'Chute Circular Duplo com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Ashi Tobi Yoko Geri', description: 'Chute Lateral com Salto usando Perna de Trás', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Do Mawashi Kaiten Geri', description: 'Chute Circular para Trás Giratório', category: 'Técnicas de Pernas (Ashi Waza)' },
          { name: 'Ushiro Tobi Soto Mawashi Geri', description: 'Chute Circular de Fora para Dentro com Salto', category: 'Técnicas de Pernas (Ashi Waza)' },
        ]
      }
    ]
  }
];
