const INITIAL_BOOKS = [
  {
    id: '1',
    title: 'Não Me Podem Magoar',
    author: 'David Goggins',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 360,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/nao me podem.png', 
    favoriteChapter: 'Capítulo 7 - A Armadura Mental',
    executiveSummary: 'Uma das obras mais viscerais e impactantes da literatura contemporânea sobre resiliência humana, disciplina implacável e superação extrema. David Goggins retrata a sua extraordinária trajetória: de uma infância marcada por violência doméstica, pobreza extrema, racismo e graves dificuldades de aprendizagem, até se tornar no único homem na história a concluir o treino militar dos Navy SEALs, Army Ranger e Air Force Tactical Air Controller, estabelecendo recordes mundiais de resistência. O livro é um manifesto prático que desconstrói a ideia de talento ou sorte, ensinando a utilizar o sofrimento, a dor e o desconforto como ferramentas de temperagem da mente para alcançar a mestria pessoal.',
    coreConcepts: [
      { title: 'A Regra dos 40%', desc: 'Quando a mente envia sinais de exaustão e pede para parar, o corpo atingiu na verdade apenas 40% da sua verdadeira capacidade física e mental. Os restantes 60% encontram-se bloqueados por mecanismos de autoproteção do cérebro, exigindo vontade consciente para serem acedidos.' },
      { title: 'O Espelho do Escrutínio (Accountability Mirror)', desc: 'Método de confronto visual e honestidade brutal. Colocar post-its no espelho com a verdade nua e crua sobre as tuas falhas, inseguranças e metas diárias, assumindo responsabilidade absoluta sem desculpas externas.' },
      { title: 'O Pote de Biscoitos (The Cookie Jar)', desc: 'Arquivo mental com todas as memórias de vitórias difíceis, dores ultrapassadas e obstáculos superados no passado. Em momentos de sofrimento extremo, recorre-se a esta reserva moral para recordar o próprio valor e resiliência.' },
      { title: 'Calos Mentais (Taking Souls)', desc: 'Processo contínuo de exposição voluntária ao desconforto físico e psicológico diário. É a arte de superar a expetativa alheia e dominar a adversidade através de um desempenho tão disciplinado que desarma qualquer dúvida.' },
      { title: 'Remover o Piloto Automático', desc: 'Conscientização constante para identificar quando o cérebro procura o caminho de menor resistência e intervir com ação imediata no sentido oposto.' },
      { title: 'A Armadura Mental', desc: 'Construção gradual de uma barreira psicológica inabalável contra críticas, dúvida interna e pessimismo externo através da acumulação diária de provas de superação.' }
    ],
    keyTakeaways: [
      'A verdadeira força mental constrói-se com ações desconfortáveis repetidas diariamente, não com frases motivacionais.',
      'As tuas origens e traumas passados explicam de onde vieste, mas apenas o teu esforço diário determina onde podes chegar.',
      'O sofrimento e a dor são os únicos testes da vida que revelam sem filtro a verdadeira essência da vontade humana.',
      'A motivação é inconstante e efémera; a disciplina pura é o único pilar que sustenta a consistência quando não há vontade de agir.'
    ],
    personalReview: 'Uma obra devastadora pela sua veracidade e ausência de concessões. Goggins obriga o leitor a olhar para as suas próprias desculpas com clareza cristalina. Não se trata de uma leitura passiva, mas de um desafio direto à nossa zona de conforto. Para quem valoriza o rigor, a disciplina e a capacidade de superar limites no treino e na vida, é um livro que redefine padrões mentais.',
    authorBio: 'David Goggins é ex-membro das forças especiais Navy SEALs da Marinha dos EUA, ultramaratonista de elite, triatleta e anterior detentor do Recorde Mundial do Guiness de elevações na barra fixa. É uma referência global em resistência psicológica e auto-superação.',
    quotes: [
      { text: "Não pares quando estiveres cansado, para quando tiveres terminado.", page: 85 },
      { text: "A maior parte das pessoas desiste quando está apenas a 40% do seu potencial máximo.", page: 142 },
      { text: "O sofrimento é o verdadeiro teste da vida. É no fundo do poço que descobres a tua verdadeira essência.", page: 210 },
      { text: "A motivação é um lixo. A disciplina é o que te obriga a agir quando tudo o resto falha e não tens vontade nenhuma.", page: 264 },
      { text: "Estás em competição contigo próprio todos os dias da tua vida. O resto é apenas ruído de fundo.", page: 318 },
      { text: "Não podes comprar uma mente forte na loja. Tens de a temperar no fogo do teu próprio esforço.", page: 178 },
      { text: "Assume o controlo da tua mente antes que a tua mente assuma o controlo absoluto de ti.", page: 295 },
      { text: "Tudo na vida é um jogo mental. Sempre que te deixas vencer pela preguiça, perdeste uma batalha para o teu pior inimigo.", page: 52 },
      { text: "Se queres adquirir calos mentais, tens de ir em busca das coisas que odeias fazer.", page: 112 },
      { text: "Ser invulgar entre invulgares exige que vás mais longe do que qualquer pessoa consideraria razoável.", page: 340 }
    ],
    frameworks: [
      { name: "Accountability Mirror Ritual", desc: "Sessão diária em frente ao espelho com lista de objetivos inegociáveis, fraquezas a eliminar e auto-avaliação fria." },
      { name: "Taking Souls Strategy", desc: "Técnica de foco intenso em momentos de cansaço para superar limites pessoais e inspirar/desarmar a concorrência pelo exemplo." },
      { name: "After Action Report (AAR)", desc: "Relatório de pós-análise imparcial de qualquer falha ou vitória: identificar o erro técnico/mental e definir a correção para a execução seguinte." }
    ]
  },
  {
    id: '2',
    title: 'O Poder do Agora',
    author: 'Eckhart Tolle',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 224,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/o poder do agora.png', 
    favoriteChapter: 'Capítulo 2 - A Consciência: O Caminho para a Libertação da Dor',
    executiveSummary: 'Um clássico da literatura reflexiva e espiritual sobre o funcionamento da mente humana. Eckhart Tolle desconstrói os mecanismos do sofrimento psicológico, demonstrando como a ansiedade, a mágoa e o stresse decorrem da identificação compulsiva com o pensamento egoico. Ao viver projetada no futuro ou ancorada no passado, a mente cria ilusões e resistências à realidade. Tolle oferece um mapa conciso para aceder ao estado de Presença — a capacidade de observar os pensamentos sem reagir a eles, ancorando a atenção no instante presente para alcançar serenidade e foco absoluto.',
    coreConcepts: [
      { title: 'Dissociação do Ego', desc: 'Compreender que o indivíduo não é a voz contínua que fala na sua cabeça (pensamentos), mas sim a consciência silenciosa e atenta que observa esses mesmos pensamentos.' },
      { title: 'O Corpo de Dor (Pain-Body)', desc: 'Acumulação de traumas e dores emocionais do passado que ganham autonomia mental e procuram perpetuar-se alimentando-se de novos conflitos, reatividade e drama.' },
      { title: 'Aceitação Absoluta (Surrender)', desc: 'Eliminação da resistência interna perante os factos do instante presente. Aceitar a realidade tal como ela é como ponto de partida para qualquer ação consciente.' },
      { title: 'A Ilusão do Tempo Psicológico', desc: 'A perceção de que o passado é apenas uma memória armazenada no agora e o futuro uma projeção mental a ser vivida no agora. O momento presente é a única realidade palpável.' },
      { title: 'O Estado de Presença', desc: 'Ativação da perceção sensorial e da energia interna do corpo para estancar o ruído mental e desenvolver clareza de decisão.' },
      { title: 'A Quietude Interior', desc: 'Espaço de silêncio mental entre pensamentos de onde nascem a verdadeira criatividade, intuição e paz.' }
    ],
    keyTakeaways: [
      'A ansiedade é a mente fixada no futuro; o desgosto e a culpa são a mente presa ao passado. A paz real só habita no momento presente.',
      'A mente é um instrumento excelente quando utilizada com propósito, mas torna-se um mestre tirânico quando assume o controlo das emoções.',
      'Nenhum evento do passado tem o poder de impedir a tua capacidade de estar plenamente consciente e focado no agora.',
      'A resistência ao que "é" constitui a fonte primária de todo o sofrimento emocional desnecessário.'
    ],
    personalReview: 'Um livro de rigor e sensibilidade filosófica impressionantes. Tolle oferece uma perspetiva clarificadora para neutralizar o ruído do quotidiano. A leitura proporciona uma sensação imediata de clareza mental e mestria sobre o foco, sendo essencial para quem procura manter a calma e a lucidez em ambientes de alta exigência.',
    authorBio: 'Eckhart Tolle é um autor e professor espiritual alemão, residente no Canadá. É reconhecido globalmente pelas suas obras focadas na transformação da consciência humana, mindfulness e superação do ego.',
    quotes: [
      { text: "Nada aconteceu no passado; aconteceu no Agora. Nada acontecerá no futuro; acontecerá no Agora.", page: 41 },
      { text: "A causa primária da infelicidade nunca é a situação, mas os teus pensamentos sobre ela.", page: 98 },
      { text: "Identificaste-te tanto com a tua mente que ela se tornou um monstro invisível a gerir a tua vida.", page: 155 },
      { text: "Encontra a paz interior aceitando este exato momento como se o tivesses escolhido voluntariamente.", page: 188 },
      { text: "A dor é inevitável enquanto fores identificado com a tua mente.", page: 32 },
      { text: "Onde quer que estejas, está lá por inteiro.", page: 75 },
      { text: "Dar atenção ao momento presente é o maior ato de amor e presença que podes oferecer a ti próprio.", page: 120 },
      { text: "A libertação começa quando percebes que não és o pensador.", page: 19 },
      { text: "A queixa é sempre a não aceitação do que é.", page: 134 },
      { text: "Procurar a felicidade no futuro é uma ilusão; ela só pode ser encontrada na profundidade do presente.", page: 202 }
    ],
    frameworks: [
      { name: "O Observador Silencioso", desc: "Técnica de distanciamento: pausar periodicamente para assistir ao fluxo de pensamentos sem julgamento ou envolvimento emocional." },
      { name: "Ancoragem no Corpo Interno", desc: "Focar a atenção consciente nas sensações físicas do corpo e na respiração para interromper estados de ansiedade." },
      { name: "Portal dos Espaços", desc: "Dirigir a escuta e a visão para os intervalos de silêncio entre os sons e objetos para induzir foco claro." }
    ]
  },
  {
    id: '3',
    title: 'Mindset: A Nova Psicologia do Sucesso',
    author: 'Carol S. Dweck',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 312,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/mindset.png', 
    favoriteChapter: 'Capítulo 3 - A Verdade Sobre a Capacidade e o Realizamento',
    executiveSummary: 'Baseado em décadas de investigação empírica na Universidade de Stanford, este livro apresenta a teoria das duas mentalidades que regem o desenvolvimento humano: o Mindset Fixo e o Mindset de Crescimento. Carol Dweck demonstra rigorosamente como a perceção individual sobre a inteligência e o talento molda o comportamento no desporto, nos negócios, no ensino e nas relações interpessoais. A obra desmonta o mito da capacidade nata, provando que o esforço focado, a aprendizagem com o erro e a persistência são os verdadeiros motores da excelência.',
    coreConcepts: [
      { title: 'Mindset Fixo vs. Crescimento', desc: 'No mindset fixo, acredita-se que inteligência e talento são traços imutáveis, levando à necessidade constante de provar valor e evitar falhas. No mindset de crescimento, entende-se que as capacidades são desenvolvidas através de esforço, treino e método.' },
      { title: 'O Poder do "Ainda"', desc: 'Adicionar a palavra "ainda" a afirmações de limitação (ex: "não sei fazer isto AINDA") altera a disposição neurológica e mantém a orientação para o progresso.' },
      { title: 'Reconfiguração do Erro', desc: 'No mindset de crescimento, o erro deixa de ser um veredito sobre a capacidade pessoal e torna-se num dado estatístico valioso para ajuste de estratégia.' },
      { title: 'O Risco do Elogio ao Talento', desc: 'Elogiar o talento nato gera fragilidade e medo de arriscar; elogiar o processo, o foco e o empenho desenvolve resiliência e orientação para desafios.' },
      { title: 'Paixão pelo Desafio', desc: 'Aproximação voluntária a tarefas complexas com o objetivo de expandir limites cognitivos e motores.' },
      { title: 'A Curva de Aprendizagem Contínua', desc: 'Compreender que o progresso é um processo cumulativo e não um evento linear de sucesso instantâneo.' }
    ],
    keyTakeaways: [
      'O esforço contínuo e fundamentado é o elemento que transforma o potencial em mestria real.',
      'Indivíduos com mentalidade de crescimento encaram contratempos como etapas normais da evolução.',
      'Proteger o ego da possibilidade de falhar é a forma mais rápida de estagnar o desenvolvimento pessoal.',
      'A crença de que as tuas habilidades podem ser esculpidas pela tua ação diária altera radicalmente os teus resultados.'
    ],
    personalReview: 'Uma obra de enorme utilidade científica e prática. A clareza com que Carol Dweck expõe os padrões mentais ajuda a identificar bloqueios e a otimizar a abordagem perante novos estudos, rotinas de treino e metas profissionais. É uma leitura transformadora para quem valoriza a melhoria contínua.',
    authorBio: 'Carol S. Dweck, Ph.D., é uma das investigadoras mais aclamadas no campo da psicologia social e da personalidade. É professora de Psicologia na Universidade de Stanford e membro da Academia Americana de Artes e Ciências.',
    quotes: [
      { text: "Por que perder tempo a provar que és ótimo quando podes estar a dedicar esse tempo a melhorar?", page: 16 },
      { text: "A mentalidade de crescimento permite que ames o que estás a fazer, mesmo perante enormes dificuldades.", page: 72 },
      { text: "O fracasso é um evento ou informação de percurso, nunca uma identidade pessoal.", page: 184 },
      { text: "O sucesso não consiste em atingir a perfeição estática, mas em procurar crescer continuamente.", page: 250 },
      { text: "Tornar-se é melhor do que ser.", page: 48 },
      { text: "O teste de avaliação da vida não mede onde chegas, mas a distância que percorreste a partir do teu ponto de partida.", page: 135 },
      { text: "Mudar de mentalidade não resolve todos os teus problemas, mas dá-te uma nova forma de lutar por eles.", page: 290 },
      { text: "No mindset fixo, a necessidade de validação substitui a paixão por aprender.", page: 60 },
      { text: "Os campeões não são feitos no ringue; são feitos naquilo que realizam quando ninguém está a ver.", page: 110 },
      { text: "Se tens uma mentalidade de crescimento, ves os teus pontos fracos como desafios a superar.", page: 215 }
    ],
    frameworks: [
      { name: "Mapeamento da Voz do Mindset Fixo", desc: "Identificar áreas em que a mente sugere limitações natas e substituir por planos de ação estruturados." },
      { name: "Avaliação Orientada ao Processo", desc: "Medir a performance diária com base em três variáveis: Esforço Aplicado, Estratégia Adotada e Foco Mantido." },
      { name: "Reenquadramento Verbal do 'Ainda'", desc: "Técnica imediata para corrigir verbalmente frases de limitação diante de tarefas difíceis." }
    ]
  },
  {
    id: '4',
    title: 'Como Fazer os Outros Gostarem de Si em 90 Segundos',
    author: 'Nicholas Boothman',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 256,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/como fazer.png', 
    favoriteChapter: 'Capítulo 4 - Sincronia Corporal e Voz',
    executiveSummary: 'Um manual prático de inteligência interpessoal e Programação Neuro-Linguística (PNL) direcionado para a construção de relações humanas sólidas e eficientes. Nicholas Boothman analisa a janela crítica dos primeiros 90 segundos de qualquer interação social, detalhando como o cérebro humano processa sinais subconscientes de confiança, empatia e autoridade. O livro fornece estratégias objetivas sobre postura corporal, contacto visual, calibração vocal e adaptação ao estilo comunicativo do interlocutor.',
    coreConcepts: [
      { title: 'Rapport Instantâneo', desc: 'Estabelecimento de afinidade e confiança recíproca através da harmonização não-verbal e da escuta ativa.' },
      { title: 'A Regra dos Primeiros 5 Segundos', desc: 'Adoção imediata de uma postura aberta, contacto visual direto, sorriso genuíno e inclinação corporal acolhedora no momento da abordagem.' },
      { title: 'Espelhamento Subtil (Matching & Mirroring)', desc: 'Ajuste consciente do tom de voz, ritmo de fala, postura e linguagem corporal para gerar sensação de familiaridade no interlocutor.' },
      { title: 'Sistemas Representacionais (VAK)', desc: 'Identificação do perfil dominante do interlocutor — Visual (processamento por imagens), Auditivo (foco na precisão das palavras) ou Cinestésico (foco em sensações e intuição) — e adaptação da mensagem a essa linguagem.' },
      { title: 'Escuta Ativa e Perguntas Abertas', desc: 'Condução de conversas que incentivam o interlocutor a expressar os seus valores e ideias sem interrupções.' },
      { title: 'Alinhamento de Sinalização Não-Verbal', desc: 'Garantir que a expressão facial, os gestos e a postura transmitem a mesma mensagem que as palavras faladas.' }
    ],
    keyTakeaways: [
      'A primeira impressão é formada em segundos e cria a lente através da qual as interações futuras serão avaliadas.',
      'A linguagem corporal e a tonalidade vocal representam a maioria do impacto da comunicação inicial.',
      'Construir rapport não é manipular, mas sim adaptar a comunicação para que o interlocutor se sinta confortável e compreendido.',
      'A empatia genuína e a curiosidade pelo outro são a base de qualquer ligação interpessoal de sucesso.'
    ],
    personalReview: 'Um livro direto e pragmático. A análise detalhada sobre a comunicação não-verbal e a PNL aplicada oferece ferramentas imediatamente utilizáveis para reuniões profissionais e contextos sociais. Excelente para aperfeiçoar a presença, a assertividade e a clareza interpessoal.',
    authorBio: 'Nicholas Boothman é um especialista internacional em comunicação, PNL e dinâmica social. Ex-fotógrafo de moda internacional, dedicou anos a estudar o impacto da linguagem corporal na liderança e nas vendas.',
    quotes: [
      { text: "Quando ligas o teu coração aos teus olhos e à tua voz, a magia da conexão interpessoalcontece.", page: 34 },
      { text: "A chave para a persuasão não é o que dizes, mas a confiança e segurança que inspiras ao falar.", page: 88 },
      { text: "O segredo para cativar está em fazer o outro sentir-se verdadeiramente ouvido e importante.", page: 132 },
      { text: "A sincronia física precede e estabelece a sintonia emocional.", page: 194 },
      { text: "As pessoas decidem se gostam de ti ou se te causam desconfiança antes de terminares a tua primeira frase.", page: 22 },
      { text: "A tua atitude é o perfume da tua personalidade; certifica-te de que cheira a entusiasmo e abertura.", page: 105 },
      { text: "Gostar de alguém é uma questão de encontrar semelhanças e respeitar as diferenças.", page: 58 },
      { text: "O contacto visual franco constrói pontes; o olhar esquivo ergue muros.", page: 92 },
      { text: "Adaptar a tua linguagem ao interlocutor é o maior sinal de inteligência social.", page: 160 },
      { text: "As pessoas esquecem o que dizes, mas nunca esquecem como as fizeste sentir nos primeiros momentos.", page: 210 }
    ],
    frameworks: [
      { name: "Protocolo de Abertura em 5 Passos", desc: "Ajuste de atitude -> Contacto visual -> Sorriso sincero -> Aperto de mão firme -> Leve inclinação de atenção." },
      { name: "Calibração VAK", desc: "Identificação das palavras-chave mentais do interlocutor para responder no mesmo registo sensorial." },
      { name: "Técnica de Espelhamento Vocálico", desc: "Ajuste do volume, velocidade e cadência da fala ao ritmo do interlocutor para maximizar a recetividade." }
    ]
  },
  {
    id: '5',
    title: 'Se Eu Lhe Tivesse Dito',
    author: 'Laura Nowlin',
    category: 'Romance',
    yearRead: 2024,
    pages: 336,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/se eu lhe.png', 
    favoriteChapter: 'Capítulo 28 - O Peso do Não Dito',
    executiveSummary: 'Um romance de enorme densidade emocional que explora a fragilidade das relações humanas, o peso das escolhas não assumidas e a linha ténue que separa uma amizade profunda de um grande amor. A narrativa foca-se na história de dois amigos cujas vidas estão ligadas desde a infância, abordando o impacto das palavras reprimidas e o risco de procrastinar decisões afetivas. A obra é uma reflexão poderosa sobre a vulnerabilidade, a honestidade emocional e a urgência de viver os sentimentos no momento certo.',
    coreConcepts: [
      { title: 'A Vulnerabilidade do Sentimento', desc: 'A necessidade de assumir as emoções reais com coragem, reconhecendo que o silêncio carrega um risco superior ao da rejeição.' },
      { title: 'Amizade vs. Paixão', desc: 'A complexidade de transitar da cumplicidade segura de uma amizade para a entrega de uma relação amorosa.' },
      { title: 'O Custo do Silêncio Emocional', desc: 'As consequências acumuladas de manter segredos por receio de alterar a estabilidade do presente.' },
      { title: 'O Tempo Irrecuperável', desc: 'Compreender que o tempo não espera pela hesitação humana e que oportunidades perdidas raramente regressam.' },
      { title: 'A Memória dos Afetos', desc: 'O valor dos detalhes, das rotinas e da cumplicidade partilhada ao longo dos anos.' },
      { title: 'A Aceitação das Consequências', desc: 'A necessidade de assumir a responsabilidade pelas escolhas não tomadas e pelo seu impacto na vida dos outros.' }
    ],
    keyTakeaways: [
      'Guardar sentimentos genuínos por medo é uma escolha que pode custar a felicidade futura.',
      'O amor verdadeiro exige clareza e transparência; a omissão gera mal-entendidos irreparáveis.',
      'A presença das pessoas que amamos deve ser valorizada hoje, sem assumir que o amanhã está garantido.',
      'A honestidade com o próprio coração é o único caminho para viver sem remorsos.'
    ],
    personalReview: 'Uma narrativa emotiva e lucidamente construída. Laura Nowlin retrata com precisão a psicologia do hesitar emocional e as suas consequências. A obra destaca-se pelo realismo com que aborda as relações interpessoais, tornando-se uma leitura marcante para quem aprecia literatura com profundidade sentimental.',
    authorBio: 'Laura Nowlin é uma autora bestseller norte-americana, licenciada em Escrita Criativa pela Universidade de Missouri. As suas obras destacam-se pela sensibilidade psicológica com que abordam as emoções de jovens e adultos.',
    quotes: [
      { text: "Se eu lhe tivesse dito que o amava, talvez o mundo não tivesse mudado de rumo de forma tão devastadora.", page: 115 },
      { text: "Algumas coisas não precisam de ser ditas para existirem, mas precisam desesperadamente de ser ditas para sobreviverem.", page: 204 },
      { text: "O tempo voa quando passas a vida inteira à espera do momento certo para seres corajoso.", page: 290 },
      { text: "O amor mais doloroso é aquele que nunca chegou a ter uma verdadeira oportunidade de acontecer.", page: 325 },
      { text: "É incrível como uma pessoa pode ser o teu mundo inteiro sem que tu tenhas a audácia de lhe dizer.", page: 88 },
      { text: "O silêncio entre nós nunca foi ausência de conversa, mas sim o peso de tudo o que não tínhamos coragem de confessar.", page: 162 },
      { text: "Às vezes amar alguém significa ter de aceitar a dor de o ver seguir em frente.", page: 240 },
      { text: "As memórias mais bonitas são aquelas que nos fazem sorrir e doer ao mesmo tempo.", page: 45 },
      { text: "Procrastinar um sentimento é permitir que a vida decida por ti.", page: 178 },
      { text: "O amor não exige perfeição; exige presença e coragem de estar lá.", page: 210 }
    ],
    frameworks: [
      { name: "Análise do Custo do Silêncio", desc: "Exercício de reflexão escrita para identificar conversas cruciais adiadas e planear a sua resolução." },
      { name: "Auditoria de Afeto Presente", desc: "Ação consciente de expressar apreço e consideração às pessoas essenciais sem aguardar por datas festivas." }
    ]
  },
  {
    id: '6',
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert T. Kiyosaki',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 336,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/pai rico.png', 
    favoriteChapter: 'Capítulo 2 - Lição 1: Os Ricos Não Trabalham pelo Dinheiro',
    executiveSummary: 'Uma das obras de referência em literacia financeira e gestão patrimonial. Robert Kiyosaki utiliza o contraste entre dois modelos de mentalidade — o seu pai biológico (Pai Pobre, instruído academicamente mas financeiramente dependente de um salário) e o pai do seu melhor amigo (Pai Rico, sem diploma universitário mas detentor de vasta inteligência financeira e empresarial) — para explicar a dinâmica do dinheiro. O livro desconstrói a ideia de que salários elevados garantem riqueza, focando a importância de construir um portfólio de ativos que gerem rendimento passivo e promovam a independência financeira.',
    coreConcepts: [
      { title: 'Ativos vs. Passivos', desc: 'Ativo é tudo o que coloca dinheiro no teu bolso (ações, imóveis para arrendamento, negócios automáticos). Passivo é tudo o que retira dinheiro do teu bolso (créditos pessoais, veículos de consumo, despesas desnecessárias).' },
      { title: 'A Corrida dos Ratos (The Rat Race)', desc: 'O ciclo financeiro em que a maioria das pessoas se encontra: trabalhar para pagar contas, aumentar o consumo à medida que o rendimento sobe e depender exclusivamente de um emprego fixo.' },
      { title: 'Literacia e Contabilidade Financeira', desc: 'Capacidade de ler demonstrações financeiras, compreender fluxos de caixa e utilizar a legislação fiscal de forma estratégica.' },
      { title: 'Trabalhar para Aprender', desc: 'Escolher experiências profissionais com base na aquisição de competências chave (vendas, negociação, gestão de equipas) e não apenas pela compensação imediata.' },
      { title: 'Gestão de Risco vs. Aversão ao Risco', desc: 'Aprender a avaliar e mitigar riscos financeiros através do estudo e da análise, em vez de os evitar por medo ou ignorância.' },
      { title: 'O Poder da Mente Financeira', desc: 'Desenvolver a capacidade de identificar oportunidades de negócio onde outros apenas veem problemas ou falta de recursos.' }
    ],
    keyTakeaways: [
      'Os ricos fazem com que o dinheiro trabalhe para eles, em vez de passarem a vida a trabalhar exclusivamente por dinheiro.',
      'A independência financeira mede-se pelo tempo que o teu património sustenta o teu estilo de vida sem necessidade de trabalho ativo.',
      'Superar o medo da perda e a conformidade social é o primeiro passo para construir estabilidade patrimonial.',
      'O teu conhecimento e educação financeira constituem o ativo mais valioso que podes cultivar.'
    ],
    personalReview: 'Um livro estruturante na forma de encarar despesas, investimentos e o futuro financeiro. Kiyosaki apresenta conceitos complexos com uma clareza exemplar. É uma leitura indispensável para quem pretende construir hábitos financeiros disciplinados e orientados para o longo prazo.',
    authorBio: 'Robert T. Kiyosaki é um investidor, empresário e autor norte-americano. É o fundador da Rich Dad Company e uma voz influente no ensino da educação financeira e dos investimentos em ativos.',
    quotes: [
      { text: "Os pobres e a classe média trabalham pelo dinheiro. Os ricos fazem o dinheiro trabalhar para eles.", page: 35 },
      { text: "Na vida real, não são simplesmente os inteligentes que progridem, mas sim os audazes e determinados.", page: 122 },
      { text: "O maior risco que podes correr na vida é não aprender a gerir o teu próprio risco.", page: 215 },
      { text: "A maioria das pessoas não percebe que na vida não importa quanto dinheiro ganhas, mas sim quanto conservas e multiplicas.", page: 280 },
      { text: "A tua mente é o teu ativo mais poderoso. Se for bem treinada, pode criar uma riqueza enorme em instantes.", page: 90 },
      { text: "A emoção do medo de perder dinheiro não pode ser maior do que a paixão por alcançar a liberdade.", page: 160 },
      { text: "A falência é temporária; a pobreza é um estado de espírito constante.", page: 205 },
      { text: "Para alcançar a liberdade financeira, tens de aprender a distinguir um ativo de um passivo e comprar ativos.", page: 48 },
      { text: "As pessoas que evitam o fracasso também evitam o sucesso.", page: 138 },
      { text: "O dinheiro sem inteligência financeira é dinheiro que desaparece rapidamente.", page: 175 }
    ],
    frameworks: [
      { name: "Balanço Pessoal de Fluxo de Caixa", desc: "Mapeamento mensal rigoroso: separar Ativos (fontes de receita autónoma) de Passivos (fontes de despesa fixa)." },
      { name: "Regra do Paga-te a Ti Primeiro", desc: "Alocação prioritária de uma percentagem do rendimento mensal para fundos de investimento antes do pagamento de despesas variáveis." },
      { name: "Plano de Aquisição de Competências", desc: "Identificação de áreas de lacuna profissional (vendas, finanças, gestão) para formação direcionada." }
    ]
  },
  {
    id: '7',
    title: 'Ama-te',
    author: 'Gustavo Santos',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 208,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/ama te.png', 
    favoriteChapter: 'Capítulo 3 - A Libertação do Julgamento Alheio',
    executiveSummary: 'Um manifesto incisivo sobre a importância do amor-próprio, da autenticidade e da responsabilidade individual. Gustavo Santos apela à libertação de padrões sociais impostos, criticando a procura desenfreada por validação externa e a culpa associada a escolhas pessoais. O livro defende a definição de limites claros nas relações, a aceitação da própria verdade e o protagonismo absoluto sobre a própria vida, inspirando o leitor a tomar decisões alinhadas com os seus valores fundamentais.',
    coreConcepts: [
      { title: 'Amor-Próprio Incondicional', desc: 'Reconhecimento do valor pessoal como pré-requisito essencial para construir relações interpessoais saudáveis e equilibradas.' },
      { title: 'Desconexão da Aprovação Externa', desc: 'Compreender que pautar a vida pela opinião dos outros resulta na perda de identidade e na estagnação pessoal.' },
      { title: 'A Coragem de Dizer "Não"', desc: 'Entender que recusar pedidos que violam os teus princípios é uma afirmação de respeito pela tua própria integridade.' },
      { title: 'Responsabilidade pelas Escolhas', desc: 'Assumir as rédeas do teu caminho sem culpar terceiros pelas dificuldades ou erros cometidos.' },
      { title: 'Higiene Relacional', desc: 'Capacidade de identificar e afastar ambientes e ligações tóxicas que minam a autoconfiança.' },
      { title: 'Viver em Autenticidade', desc: 'Agir em conformidade com a tua essência, recusando papéis sociais desconfortáveis.' }
    ],
    keyTakeaways: [
      'A qualidade das tuas relações externas reflete o nível de respeito e consideração que manténs por ti próprio.',
      'Viver para agradar a todos é a fórmula garantida para a frustração pessoal.',
      'O amor-próprio é a base da maturidade emocional, não um ato de egoísmo.',
      'Tens a responsabilidade e o poder de definir o rumo da tua vida sem pedir permissão ao mundo.'
    ],
    personalReview: 'Uma obra direta, assertiva e sem rodeios. A escrita incisiva de Gustavo Santos funciona como um apelo ao alinhamento de prioridades e à conquista de autonomia emocional. Muito útil para quem procura reforçar a determinação e o foco nos seus objetivos.',
    authorBio: 'Gustavo Santos é um autor e palestrante motivacional português. Com diversas obras publicadas no âmbito do desenvolvimento pessoal, é conhecido pela sua abordagem direta sobre autenticidade e amor-próprio.',
    quotes: [
      { text: "Quando te amas verdadeiramente, deixas de procurar a aprovação do mundo e começas a viver a tua verdade com orgulho.", page: 48 },
      { text: "O amor-próprio não é egoísmo; é o ponto de partida inegociável para qualquer relação saudável.", page: 110 },
      { text: "Ninguém te pode fazer sentir inferior sem que tu tenhas dado o teu consentimento interno.", page: 165 },
      { text: "Ser autêntico pode custar-te algumas companhias, mas traz-te a paz de espírito irsubstituível de seres fiel a ti próprio.", page: 192 },
      { text: "Deixa de pedir licença para seres quem nasceste para ser.", page: 34 },
      { text: "A tua vida é a tua maior obra de arte. Não deixes que outros segurem o pincel por ti.", page: 82 },
      { text: "A culpa é o travão da tua liberdade. Perdoa-te e avança.", page: 145 },
      { text: "Respeita o teu tempo e a tua verdade acima de qualquer expectativa social.", page: 60 },
      { text: "A aprovação de que realmente precisas é aquela que vês quando te olhas ao espelho.", page: 128 },
      { text: "Dizer não a algo que te magoa é dizer sim à tua dignidade.", page: 175 }
    ],
    frameworks: [
      { name: "Filtro de Decisão Autónoma", desc: "Questionário prévio diante de compromissos: 'Estou a aceitar isto por convicção ou por pressão externa?'" },
      { name: "Definição de Limites Inegociáveis", desc: "Registo de regras e valores pessoais que não devem ser ultrapassados por terceiros." }
    ]
  },
  {
    id: '8',
    title: 'Não Te Fodas',
    author: 'Gary John Bishop',
    category: 'Desenvolvimento Pessoal',
    yearRead: 2024,
    pages: 208,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/nao te fodas.png', 
    favoriteChapter: 'Capítulo 5 - Tu És o Que Fazes, Não o Que Dizes Que Vais Fazer',
    executiveSummary: 'Um manifesto pragmático focado na eliminação da autossabotagem, na interrupção de padrões mentais negativos e no incentivo à ação direta. Gary John Bishop utiliza princípios da filosofia estoica para demonstrar que o principal obstáculo ao progresso pessoal reside no diálogo interno destrutivo. O livro apresenta sete afirmações de poder estruturadas para reconfigurar a perspetiva do leitor, promovendo a aceitação da incerteza, a disciplina e a execução imediata de tarefas.',
    coreConcepts: [
      { title: 'Diálogo Interno Construtivo', desc: 'Consciência de que o discurso mental interno molda a perceção da realidade e a predisposição para agir.' },
      { title: 'Indiferença à Disposição (Ação sem Motivação)', desc: 'Princípio de que a execução de deveres deve ocorrer independentemente do estado emocional ou da vontade momentânea.' },
      { title: 'Aceitação do Desconforto', desc: 'Reconhecimento de que o crescimento pessoal e profissional exige atuar em ambientes de incerteza e desafio.' },
      { title: 'Definição pela Ação', desc: 'Compreensão de que o indivíduo é avaliado exclusivamente pelos seus atos concretos e não pelas suas intenções teóricas.' },
      { title: 'Responsabilidade Absoluta', desc: 'Recusa em culpar o passado ou as circunstâncias externas pelos resultados do presente.' },
      { title: 'Foco na Resolução', desc: 'Canalizar energia para soluções práticas em vez de alimentar lamentações sobre problemas.' }
    ],
    keyTakeaways: [
      'A tua vida atual reflete os comportamentos que toleras e as ações que realizas diariamente.',
      'A hesitação é o principal fator de bloqueio do potencial individual; a ação imediata reduz o medo.',
      'A incerteza é o único ambiente onde é possível construir novas oportunidades e progresso.',
      'Não és controlado pelos teus pensamentos automáticos, mas sim pela tua decisão de agir ou não sobre eles.'
    ],
    personalReview: 'Um livro dinâmico e extremamente objetivo. Bishop vai direto ao essencial com uma linguagem clara e enérgica. Excelente para momentos em que é necessário superar a procrastinação, retomar o controlo de rotinas e manter um ritmo de trabalho focado.',
    authorBio: 'Gary John Bishop é um autor e coach de desenvolvimento pessoal escocês, radicado nos EUA. É amplamente conhecido pelo seu estilo direto e sem rodeios, focado na ontologia e na filosofia estoica aplicada à vida moderna.',
    quotes: [
      { text: "Ninguém te está a impedir de progredir na vida a não ser tu próprio e a conversa que alimentas na tua cabeça.", page: 31 },
      { text: "Muda a tua conversa interna e mudarás radicalmente a tua perceção da realidade.", page: 94 },
      { text: "A tua vida resume-se exatamente ao que estás disposto a tolerar e às ações que realizas.", page: 150 },
      { text: "A ação vence a hesitação todas as vezes, sem exceção.", page: 189 },
      { text: "Estou disposto. Eu estou seguro para vencer. Eu aceito o incerto.", page: 62 },
      { text: "Não sejas uma vítima da tua própria história; sê o autor da tua próxima ação.", page: 118 },
      { text: "Nada muda se nada mudares nas tuas rotinas diárias.", page: 172 },
      { text: "O desconforto é a prova de que estás a expandir os teus limites.", page: 80 },
      { text: "Para de esperar pelas condições perfeitas; elas não existem.", page: 135 },
      { text: "A tua determinação tem de ser maior do que a tua desculpa mais convincente.", page: 200 }
    ],
    frameworks: [
      { name: "As Afirmações Operacionais", desc: "Prática diária de ancoragem mental: 'Estou disposto', 'Aceito a incerteza', 'Sou definido pelas minhas ações'." },
      { name: "Protocolo Anti-Procrastinação", desc: "Regra de execução em 5 segundos assim que surge a necessidade de uma tarefa inegociável." }
    ]
  },
  {
    id: '9',
    title: 'Ganhei Uma Vida Quando Te Perdi',
    author: 'Raul Minh\'alma',
    category: 'Romance',
    yearRead: 2024,
    pages: 272,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/ganhei uma vida.png', 
    favoriteChapter: 'Capítulo 16 - A Reconstrução do Eu',
    executiveSummary: 'Um romance sobre superação afetiva, aut redescoberta e reconstrução pessoal após o término de um relacionamento. Raul Minh\'alma explora a dinâmica do desapego, demonstrando como o fim de uma etapa amorosa pode ser o catalisador para recuperar a dignidade, a independência e a clareza sobre os objetivos individuais. A obra aborda a importância de atravessar o luto emocional com serenidade, transformando a perda na oportunidade de erguer uma vida mais autêntica.',
    coreConcepts: [
      { title: 'Cura e Processamento Emocional', desc: 'Compreender que a superação exige aceitar a dor da transição sem recorrer a atalhos ou negações.' },
      { title: 'Redescoberta da Autonomia', desc: 'Reconstruir a identidade individual fora do espaço de casal, valorizando a própria companhia e projetos pessoais.' },
      { title: 'Ressignificação da Perda', desc: 'Alterar a narrativa mental do término, encarando a mudança como um ganho de liberdade e perspetiva.' },
      { title: 'Identificação da Dependência Emocional', desc: 'Reconhecer padrões de apego que levam a aceitar menos do que o merecido por receio da solidão.' },
      { title: 'A Paz como Critério de Escolha', desc: 'Entender que o equilíbrio psicológico é a prioridade em qualquer relação humana.' },
      { title: 'O Valor dos Novos Recomeços', desc: 'Aceitar que o encerramento de um ciclo abre espaço para vivências mais alinhadas com o presente.' }
    ],
    keyTakeaways: [
      'Nem todas as partidas são perdas; muitas representam a oportunidade de reconquistar a autonomia.',
      'O amor por outro indivíduo nunca deve custar a perda do amor-próprio e da auto-respeito.',
      'Desenvolver o gosto pela própria companhia é a garantia de que as escolhas futuras serão baseadas em afinidade e não em carência.',
      'O fim de uma relação é um ponto de viragem para redefinir prioridades pessoais.'
    ],
    personalReview: 'Uma narrativa sensível e com excelente agudeza psicológica. Raul Minh\'alma capta com clareza o processo de reconstrução pessoal. Uma leitura envolvente para quem aprecia obras que combinam ficção romântica com lições de maturidade emocional.',
    authorBio: 'Raul Minh\'alma é um dos autores de ficção e literatura sentimental mais lidos em Portugal. As suas obras destacam-se pela abordagem poética e analítica sobre os relacionamentos e a superação afetiva.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios pelo caminho.", page: 62 },
      { text: "O fim de um capítulo não é o fim do livro da tua vida, mas sim o início da melhor parte da tua história.", page: 185 },
      { text: "A tua felicidade futura não pode ficar refém de quem escolheu voluntariamente partir do teu presente.", page: 240 },
      { text: "Descobri que a minha solidão era muito mais bonita e serena do que uma companhia vazia e incerta.", page: 260 },
      { text: "Não peças amor a quem nem sequer sabe cuidar de si próprio.", page: 95 },
      { text: "Recuperar o controlo da tua vida é o maior ato de amor-próprio que podes praticar.", page: 142 },
      { text: "Há partidas que chegam como tempestades, mas deixam o céu perfeitamente limpo para o teu renascimento.", page: 215 },
      { text: "Perdoar o passado é a chave para não carregar correntes no presente.", page: 110 },
      { text: "A tua dignidade vale mais do que qualquer promessa não cumprida.", page: 168 },
      { text: "Renascer é escolher ser fiel a ti próprio todos os dias.", page: 250 }
    ],
    frameworks: [
      { name: "Inventário de Objetivos Pessoais", desc: "Mapeamento de metas e projetos individuais a serem priorizados de forma autónoma." },
      { name: "Reenquadramento de Narrativa", desc: "Exercício de escrita para focar as lições de aprendizagem extraídas de experiências passadas." }
    ]
  },
  {
    id: '10',
    title: 'Foi Sem Querer Que Te Quis',
    author: 'Raul Minh\'alma',
    category: 'Romance',
    yearRead: 2024,
    pages: 256,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/foi sem crer.png', 
    favoriteChapter: 'Capítulo 12 - A Coragem de Sentir',
    executiveSummary: 'Um romance sobre o surgimento inesperado do afeto e a superação de bloqueios emocionais. A história acompanha dois protagonistas que, após desilusões anteriores, construíram barreiras para proteger a sua estabilidade emocional. Através do convívio diário e de diálogos francos, o enredo demonstra como a cumplicidade autêntica exige a coragem de assumir a vulnerabilidade e voltar a confiar no amor.',
    coreConcepts: [
      { title: 'A Imprevisibilidade do Afeto', desc: 'Compreender que as ligações emocionais mais profundas surgem frequentemente fora dos planos preconcebidos.' },
      { title: 'Derrubar Defesas Emocionais', desc: 'A necessidade de desarmar mecanismos de proteção rígidos para permitir a entrada de novas conexões.' },
      { title: 'A Coragem de Ser Vulnerável', desc: 'Entender a vulnerabilidade como uma demonstração de força e honestidade nas relações.' },
      { title: 'Superação do Histórico Emocional', desc: 'Evitar projetar nas pessoas do presente os erros ou falhas de relacionamentos anteriores.' },
      { title: 'A Força da Cumplicidade Diária', desc: 'O valor dos pequenos gestos de atenção e respeito na consolidação da confiança mútua.' },
      { title: 'A Aceitação dos Sentimentos', desc: 'Honrar a verdade do coração sem tentar racionalizar excessivamente as emoções.' }
    ],
    keyTakeaways: [
      'As melhores vivências interpessoais acontecem quando há abertura para o inesperado.',
      'Construir muros emocionais intransponíveis protege da dor, mas impede a experiência da felicidade partilhada.',
      'Amar exige aceitar o risco consciente da entrega e da transparência.',
      'A confiança é o resultado da consistência de atitudes ao longo do tempo.'
    ],
    personalReview: 'Um romance envolvente, fluido e com momentos de reflexão profunda. Raul Minh\'alma consegue traduzir os receios e desejos das relações modernas com mestria. Ótimo para quem aprecia histórias de afeto bem estruturadas.',
    authorBio: 'Raul Minh\'alma é um proeminente autor português no género de ficção sentimental, amplamente reconhecido pela sensibilidade com que aborda os dilemas das relações humanas.',
    quotes: [
      { text: "O amor não se força nem se planeia com a cabeça; simplesmente acontece quando deixamos o coração aberto sem reservas.", page: 77 },
      { text: "Gostar de alguém é fácil e involuntário, o difícil e verdadeiramente nobre é ter a coragem de assumir esse sentimento ao mundo.", page: 140 },
      { text: "As melhores histórias de vida começam exatamente quando o nosso plano inicial falha redondamente.", page: 210 },
      { text: "Quando menos esperas, a vida coloca no teu caminho quem te faz reescrever todas as regras que juraste manter.", page: 245 },
      { text: "Proteger o coração de tudo é garantir que nada de maravilhoso entra nele.", page: 50 },
      { text: "O amor não divide a tua vida; multiplica a tua capacidade de ser feliz.", page: 112 },
      { text: "Estar com alguém é querer estar lá, mesmo quando o mundo lá fora está desmoronar.", page: 180 },
      { text: "A honestidade emocional é a maior prova de respeito que podes dar a alguém.", page: 90 },
      { text: "Os sentimentos não se escolhem, mas a coragem de os viver é uma decisão tua.", page: 165 },
      { text: "Confiar é dar ao outro o poder de nos magoar e acreditar que ele não o fará.", page: 225 }
    ],
    frameworks: [
      { name: "Mapeamento de Defesas Emocionais", desc: "Identificação consciente de atitudes evasivas para desenvolvimento de uma comunicação mais transparente." },
      { name: "Prática de Comunicação Aberta", desc: "Exercício de partilha clara de expetativas e sentimentos nas relações pessoais." }
    ]
  },
  {
    id: '11',
    title: 'Durante a Queda Aprendi a Voar',
    author: 'Raul Minh\'alma',
    category: 'Romance',
    yearRead: 2024,
    pages: 288,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/durante a queda.png', 
    favoriteChapter: 'Capítulo 21 - A Força das Cicatrizes',
    executiveSummary: 'Uma obra sobre resiliência, superação de adversidades e renascimento pessoal. A narrativa aborda a vida de uma protagonista confrontada com um obstáculo devastador que altera os seus planos futuros. O enredo demonstra como os momentos de maior crise contêm o potencial para transformar o sofrimento em crescimento interno, revelando forças desconhecidas e ensinando a encarar os desafios como oportunidades de evolução.',
    coreConcepts: [
      { title: 'Resiliência e Metamorfose', desc: 'Utilizar as dificuldades da vida como impulso para uma redefinição pessoal profunda.' },
      { title: 'Valorização das Cicatrizes', desc: 'Encarar as marcas do passado como testemunhos de superação e aprendizagem contínua.' },
      { title: 'O Poder do Perdão', desc: 'Libertar ressentimentos passados para permitir uma caminhada mais leve no presente.' },
      { title: 'Superação do Papel de Vítima', desc: 'Assumir uma postura ativa de reconstrução em vez de alimentar a passividade perante a dor.' },
      { title: 'Descberta da Força Interior', desc: 'Reconhecer recursos emocionais pessoais até então desconhecidos diante de crises profundas.' },
      { title: 'Gratidão pelo Presente', desc: 'Aprender a valorizar as conquistas diárias após ultrapassar momentos críticos.' }
    ],
    keyTakeaways: [
      'Os momentos de queda não determinam o teu valor, mas a tua capacidade de te reerguer define a tua trajetória.',
      'As dificuldades testam e expandem a verdadeira capacidade de resistência do ser humano.',
      'O sofrimento é ultrapassado quando se decide aprender com a experiência e olhar para o futuro.',
      'Possuis a capacidade interna necessária para recomeçar e construir novos caminhos.'
    ],
    personalReview: 'Um romance tocante e profundamente humano. A obra aborda a dor e a superação com um realismo notável. Para leitores que procuram histórias inspiradoras sobre força interior e renovação de propósito, é uma leitura de grande impacto.',
    authorBio: 'Raul Minh\'alma é um dos autores bestseller mais proeminentes em Portugal, aclamado pela sua capacidade de unir enredos românticos a reflexões sobre desenvolvimento pessoal e resiliência.',
    quotes: [
      { text: "Não tenhas medo da queda; é lá no fundo do abismo que descobres que tens asas fortes para voar.", page: 53 },
      { text: "As nossas cicatrizes são a prova irrefutável de que fomos mais fortes do que aquilo que nos tentou destruir.", page: 198 },
      { text: "O abismo não existe para te engolir, mas sim para te ensinar a olhar para o céu com um novo propósito.", page: 250 },
      { text: "Nenhuma dor dura para sempre se tiveres a coragem de sarar por dentro sem cultivar o rancor.", page: 275 },
      { text: "Chorar não é sinal de fraqueza; é a água a lavar a alma para que possas ver com clareza.", page: 85 },
      { text: "Quando tudo desmorona, tens a oportunidade rara de escolher que peças queres voltar a montar.", page: 140 },
      { text: "A tua força real revela-se quando o mundo pensa que estás derrotado.", page: 220 },
      { text: "Voar alto exige primeiro a coragem de desatarrachar as âncoras do passado.", page: 95 },
      { text: "A tempestade serve para nos mostrar a firmeza das nossas raízes.", page: 160 },
      { text: "Erguer de uma queda é o ato mais corajoso que podes praticar por ti próprio.", page: 235 }
    ],
    frameworks: [
      { name: "Registo de Aprendizagem de Crise", desc: "Exercício de identificação dos recursos internos utilizados para ultrapassar momentos difíceis no passado." },
      { name: "Prática do Desapego de Rancor", desc: "Técnica de escrita reflexiva voltada para a libertação de desilusões passadas." }
    ]
  },
  {
    id: '12',
    title: 'Se Me Amas Não Te Demores',
    author: 'Raul Minh\'alma',
    category: 'Romance',
    yearRead: 2024,
    pages: 264,
    format: 'Livro Físico',
    rating: 5,
    cover: 'img/se me amas.png', 
    favoriteChapter: 'Capítulo 18 - O Valor do Presente',
    executiveSummary: 'Uma reflexão romântica sobre a urgência de valorizar as relações no momento presente. O livro alerta para o risco de procrastinar demonstrações de afeto, adiar conversas importantes e permitir que a rotina atenue a atenção devida a quem nos rodeia. Raul Minh\'alma aborda a fragilidade do tempo, reforçando a importância de viver o amor com presença consciente, dedicação e prioridade diária.',
    coreConcepts: [
      { title: 'Presença Consciente no Afeto', desc: 'Dedicação de atenção de qualidade às pessoas importantes, livre de distrações digitais ou preocupações secundárias.' },
      { title: 'Combate à Procrastinação Afetiva', desc: 'Recusa em adiar palavras de apreço, carinho ou reconciliação para um futuro incerto.' },
      { title: 'Valorização dos Detalhes Diários', desc: 'Reconhecimento de que a consistência dos atos quotidianos sustenta a longevidade dos relacionamentos.' },
      { title: 'A Fragilidade do Tempo', desc: 'Consciência de que a disponibilidade de tempo é finita, exigindo priorização clara dos afetos.' },
      { title: 'Comunicação Clara e Transparente', desc: 'Expressão aberta de emoções para evitar o acúmulo de mal-entendidos.' },
      { title: 'Priorização das Relações', desc: 'Colocar o bem-estar dos laços interpessoais no topo das decisões diárias.' }
    ],
    keyTakeaways: [
      'O amor requer presença constante, atenção diária e prioridade nas escolhas de vida.',
      'O tempo dedicado a alguém é o investimento mais valioso que se pode oferecer.',
      'Expressa os teus sentimentos hoje; o amanhã é uma incerteza para todos.',
      'A rotina deve ser combatida com atos conscientes de consideração e carinho.'
    ],
    personalReview: 'Uma obra poética e marcante sobre a importância de viver o presente. Raul Minh\'alma expõe com clareza o valor do tempo nas relações humanas. Leitura indispensável para quem valoriza o reforço de laços afetivos com verdade e presença.',
    authorBio: 'Raul Minh\'alma é um destacado romancista português, amplamente seguido pela sensibilidade com que aborda o amor, a passagem do tempo e a importância da presença nas relações humanas.',
    quotes: [
      { text: "Quem ama verdadeiramente não adia, não hesita e não deixa para amanhã o carinho que pode dar hoje.", page: 89 },
      { text: "O melhor presente que podes dar a alguém é o teu tempo precioso e o teu coração inteiro sem distrações.", page: 162 },
      { text: "O amanhã nunca é uma promessa garantida; o agora é o único lugar real onde o amor acontece.", page: 230 },
      { text: "Diz o que sentes com coragem enquanto quem amas tem o tempo e a oportunidade de ouvir a tua voz.", page: 255 },
      { text: "Não deixes que a rotina transforme a maravilha de uma presença num hábito invisível.", page: 45 },
      { text: "Amar é um verbo de ação diária, não uma intenção guardada na gaveta.", page: 118 },
      { text: "O tempo que dedicas a quem amas é a única coisa que realmente fica gravada na eternidade.", page: 201 },
      { text: "A distância mais longa é a falta de atenção quando se está lado a lado.", page: 72 },
      { text: "Não adies um abraço; podes não ter a mesma oportunidade amanhã.", page: 139 },
      { text: "O amor cultiva-se com a presença constante do olhar e do gesto.", page: 218 }
    ],
    frameworks: [
      { name: "Auditoria do Tempo Afetivo", desc: "Avaliação semanal da quantidade e qualidade de tempo dedicado às pessoas mais importantes da vida." },
      { name: "Ritual de Desconexão Digital", desc: "Pausa consciente de ecrãs durante momentos de partilha pessoal para garantir presença plena." }
    ]
  }
];
  }
];

// STATE VARIABLES
let activeTab = 'bookshelf'; // 'bookshelf' | 'vault' | 'stats'
let selectedCategory = 'All';
let searchQuery = '';
let selectedBook = null;
let bookModalTab = 'overview';
let fullscreenQuote = null;
let copiedKey = null;

// ALL QUOTES FLATTENED
const allQuotes = INITIAL_BOOKS.flatMap(book => 
  book.quotes.map((q, idx) => ({
    id: `${book.id}-${idx}`,
    quote: q.text,
    page: q.page,
    bookTitle: book.title,
    author: book.author,
    category: book.category,
    cover: book.cover
  }))
);

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  setupNavigation();
  setupFiltersAndSearch();
  setupModals();
  renderHeroQuote();
  renderBookshelf();
  renderVault();
  renderStats();
}

// NAVIGATION SETUP
function setupNavigation() {
  const desktopBtns = document.querySelectorAll('.desktop-nav-btn');
  const mobileBtns = document.querySelectorAll('.mobile-toggle-btn');

  function switchTab(tabName) {
    activeTab = tabName;
    
    desktopBtns.forEach(btn => {
      if(btn.dataset.tab === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    mobileBtns.forEach(btn => {
      if(btn.dataset.tab === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`view-${tabName}`).classList.add('active');

    const controlsBar = document.getElementById('controls-bar');
    if (controlsBar) {
      controlsBar.style.display = (tabName === 'stats') ? 'none' : 'flex';
    }
  }

  desktopBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  mobileBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

// HERO QUOTE & RANDOMIZER
function renderHeroQuote() {
  const randomQ = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  document.getElementById('hero-quote-text').textContent = `"${randomQ.quote}"`;
  document.getElementById('hero-quote-author').innerHTML = `— <span class="text-light font-medium">${randomQ.author}</span>, ${randomQ.bookTitle}`;
}

// FILTERS & SEARCH SETUP
function setupFiltersAndSearch() {
  const catPills = document.querySelectorAll('.cat-pill');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCategory = pill.dataset.category;
      renderBookshelf();
      renderVault();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (searchQuery) clearSearchBtn.classList.remove('hidden');
    else clearSearchBtn.classList.add('hidden');
    
    renderBookshelf();
    renderVault();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderBookshelf();
    renderVault();
  });
}

// RENDER BOOKSHELF
function renderBookshelf() {
  const grid = document.getElementById('books-grid');
  
  const filtered = INITIAL_BOOKS.filter(book => {
    const matchesCat = selectedCategory === 'All' || book.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 64px 0; background: rgba(18,22,33,0.3); border-radius: 24px; border: 1px solid rgba(56,189,248,0.1);">
        <p class="text-muted">Nenhum livro encontrado para este filtro.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(book => `
    <div class="book-card" onclick="openBookModal('${book.id}')">
      <div>
        <div class="book-cover-wrap">
          <img src="${book.cover}" alt="${book.title}" class="book-cover-img">
          <div class="book-rating-badge">
            <svg class="star-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span class="book-rating-value">${book.rating}.0</span>
          </div>
          <div class="book-category-tag">${book.category}</div>
        </div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-summary">${book.executiveSummary}</p>
      </div>
      <div class="book-card-footer">
        <div class="book-meta-info">
          <span class="book-meta-item">${book.pages} pág</span>
        </div>
        <span class="book-explore-link">
          Explorar <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </div>
    </div>
  `).join('');
}

// RENDER VAULT (QUOTES)
function renderVault() {
  const grid = document.getElementById('quotes-grid');

  const filtered = allQuotes.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = q.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 64px 0; background: rgba(18,22,33,0.3); border-radius: 24px; border: 1px solid rgba(56,189,248,0.1);">
        <p class="text-muted">Nenhuma citação encontrada para a pesquisa.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((q, idx) => `
    <div class="vault-quote-card">
      <div class="vault-quote-top">
        <svg class="vault-quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vault-quote-content">"${q.quote}"</p>
      </div>
      <div class="vault-quote-footer">
        <div class="vault-quote-meta-text">
          <span class="text-accent font-semibold">${q.author}</span>
          <span class="text-dim"> • </span>
          <span class="text-muted font-serif" style="font-style:italic;">${q.bookTitle} (pág. ${q.page})</span>
        </div>
        <div class="vault-quote-actions">
          <button class="vault-action-btn" onclick="openFullscreenQuoteById('${q.id}')" title="Ecrã Inteiro">
            <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
          </button>
          <button class="vault-action-btn" onclick="copyTextToClipboard('${q.quote.replace(/'/g, "\\'")}', 'vault-${idx}')" title="Copiar Frase">
            ${copiedKey === `vault-${idx}` ? '<svg viewBox="0 0 24 24" width="14" height="14" stroke="#34d399" stroke-width="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>' : '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// RENDER STATS METRICS
function renderStats() {
  const totalPages = INITIAL_BOOKS.reduce((acc, b) => acc + b.pages, 0);

  document.getElementById('stat-books-count').textContent = INITIAL_BOOKS.length;
  document.getElementById('stat-pages-count').textContent = totalPages.toLocaleString();
}

// MODAL CONTROLS & INSPECTION
function openBookModal(bookId) {
  selectedBook = INITIAL_BOOKS.find(b => b.id === bookId);
  if (!selectedBook) return;

  bookModalTab = 'overview';
  
  const header = document.getElementById('modal-header');
  header.innerHTML = `
    <img src="${selectedBook.cover}" alt="${selectedBook.title}" class="modal-book-cover">
    <div class="modal-book-info">
      <div>
        <span class="modal-tag">${selectedBook.category}</span>
        <span class="text-dim" style="font-size: 11px; margin-left: 8px;">• Concluído a ${selectedBook.completionDate}</span>
      </div>
      <h2 class="modal-title">${selectedBook.title}</h2>
      <p class="modal-author">Autor: <span class="text-light font-medium">${selectedBook.author}</span></p>
      <div class="modal-rating-row">
        ${[...Array(5)].map((_, i) => `
          <svg class="star-icon" viewBox="0 0 24 24" style="width:14px;height:14px;fill:${i < selectedBook.rating ? 'var(--primary)' : '#334155'};color:${i < selectedBook.rating ? 'var(--primary)' : '#334155'}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        `).join('')}
        <span class="text-light font-semibold" style="font-size: 12px; margin-left: 4px;">(${selectedBook.rating}.0 / 5.0)</span>
      </div>
    </div>
  `;

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    if(btn.dataset.tab === 'overview') btn.classList.add('active');
    else btn.classList.remove('active');
  });
  document.getElementById('modal-tab-highlights-btn').textContent = `Highlights & Citações (${selectedBook.quotes.length})`;

  renderModalBody();
  document.getElementById('book-modal').classList.add('active');
}

function renderModalBody() {
  const body = document.getElementById('modal-body');

  if (bookModalTab === 'overview') {
    body.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 class="modal-section-title">Premissa Principal</h4>
        <div class="modal-box-text">${selectedBook.executiveSummary}</div>
      </div>
      <div>
        <h4 class="modal-section-title">Conceitos Chave</h4>
        <div class="concepts-grid">
          ${selectedBook.coreConcepts.map(c => `
            <div class="concept-card">
              <span class="concept-title">${c.title}</span>
              <p class="concept-desc">${c.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (bookModalTab === 'highlights') {
    body.innerHTML = `
      <h4 class="modal-section-title" style="margin-bottom: 16px;">Citações e Excertos Selecionados</h4>
      <div>
        ${selectedBook.quotes.map((q, idx) => `
          <div class="modal-highlight-item">
            <div style="display: flex; gap: 14px; align-items: flex-start;">
              <svg style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <div>
                <p class="font-serif" style="font-size: 13px; font-style: italic; color: #e2e8f0; line-height: 1.6;">"${q.text}"</p>
                <span class="text-dim" style="font-size: 11px; margin-top: 6px; display: block;">Página ${q.page}</span>
              </div>
            </div>
            <button class="vault-action-btn" onclick="copyTextToClipboard('${q.text.replace(/'/g, "\\'")}', 'modal-${idx}')" title="Copiar Frase">
              ${copiedKey === `modal-${idx}` ? '<svg viewBox="0 0 24 24" width="14" height="14" stroke="#34d399" stroke-width="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>' : '<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'}
            </button>
          </div>
        `).join('')}
      </div>
    `;
  } else if (bookModalTab === 'frameworks') {
    body.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 class="modal-section-title">Lições Práticas Extraídas</h4>
        <div>
          ${selectedBook.keyTakeaways.map(t => `
            <div class="modal-takeaway-item">
              <svg style="width: 16px; height: 16px; color: var(--primary); flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <p style="font-size: 12px; color: #cbd5e1; line-height: 1.6;">${t}</p>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <h4 class="modal-section-title">A Minha Opinião Pessoal</h4>
        <div class="modal-box-text">${selectedBook.personalReview}</div>
      </div>
    `;
  } else if (bookModalTab === 'specs') {
    body.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 16px;">
        <div class="concept-card">
          <span class="text-dim" style="font-size: 11px;">Capítulo Favorito</span>
          <p class="text-accent font-semibold" style="font-size: 13px;">${selectedBook.favoriteChapter}</p>
        </div>
        <div class="concept-card">
          <span class="text-dim" style="font-size: 11px;">Formato da Obra</span>
          <p class="text-light font-semibold" style="font-size: 13px;">${selectedBook.format}</p>
        </div>
        <div class="concept-card">
          <span class="text-dim" style="font-size: 11px;">Extensão</span>
          <p class="text-light font-semibold" style="font-size: 13px;">${selectedBook.pages} páginas</p>
        </div>
        <div class="concept-card">
          <span class="text-dim" style="font-size: 11px;">Sobre o Autor</span>
          <p class="text-muted" style="font-size: 12px; line-height: 1.6; margin-top: 2px;">${selectedBook.authorBio}</p>
        </div>
      </div>
    `;
  }
}

// SETUP MODALS EVENT LISTENERS
function setupModals() {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bookModalTab = btn.dataset.tab;
      renderModalBody();
    });
  });

  const bookModal = document.getElementById('book-modal');
  document.getElementById('modal-close-btn').addEventListener('click', () => bookModal.classList.remove('active'));
  bookModal.addEventListener('click', (e) => {
    if (e.target === bookModal) bookModal.classList.remove('active');
  });

  const fsModal = document.getElementById('fullscreen-quote-modal');
  document.getElementById('fs-close-btn').addEventListener('click', () => fsModal.classList.remove('active'));
  fsModal.addEventListener('click', (e) => {
    if (e.target === fsModal) fsModal.classList.remove('active');
  });

  document.getElementById('fs-copy-btn').addEventListener('click', () => {
    if (fullscreenQuote) {
      copyTextToClipboard(fullscreenQuote.quote, 'fs');
    }
  });
}

function openFullscreenQuoteById(qId) {
  const q = allQuotes.find(item => item.id === qId);
  if (!q) return;
  fullscreenQuote = q;

  document.getElementById('fs-quote-text').textContent = `"${q.quote}"`;
  document.getElementById('fs-author').textContent = q.author;
  document.getElementById('fs-book').textContent = q.bookTitle;
  
  document.getElementById('fullscreen-quote-modal').classList.add('active');
}

// CLIPBOARD HELPER
function copyTextToClipboard(text, key) {
  navigator.clipboard.writeText(text).then(() => {
    copiedKey = key;
    if (activeTab === 'bookshelf' || activeTab === 'vault') {
      renderVault();
      if (selectedBook) renderModalBody();
    }
    setTimeout(() => {
      copiedKey = null;
      if (activeTab === 'bookshelf' || activeTab === 'vault') {
        renderVault();
        if (selectedBook) renderModalBody();
      }
    }, 2000);
  });
}
