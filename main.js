// ==========================================
// 1. BASE DE DADOS DOS LIVROS (INITIAL_BOOKS)
// ==========================================
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
    executiveSummary: 'Uma obra visceral, crua e profundamente desafiante sobre resiliência humana e superação extrema. David Goggins expõe a sua transição radical: de uma infância marcada por abusos físicos e psicológicos graves, pobreza extrema, racismo severo e perturbações profundas de aprendizagem e autoestima, até se transformar numa das figuras de resistência física e mental mais endurecidas do planeta. O livro detalha o processo implacável de como se tornou no único militar da história a concluir o treino dos SEALs da Marinha, o curso de seleção dos Rangers do Exército e o treino de controladores tácticos da Força Aérea (TACP), além de completar dezenas de ultramaratonas de elite sob condições extremas. Mais do que uma simples autobiografia, a obra funciona como um manual de engenharia comportamental para destruir a autocomiseração, calejar o caráter perante o sofrimento inevitável e desbloquear o potencial latente que a mente tenta incessantemente sabotar através do conforto.',
    coreConcepts: [
      { title: 'A Regra dos 40%', desc: 'Quando o teu cérebro te envia sinais inequívocos de que estás totalmente esgotado e queres desistir, na verdade tu atingiste apenas cerca de 40% da tua capacidade máxima real, restando ainda 60% de potencial inexplorado.' },
      { title: 'Espelho do Escrutínio (Accountability Mirror)', desc: 'O hábito diário e desconfortável de confrontar as próprias falhas, medos, falhas de caráter e desculpas de forma crua, afixando notas de verdade nua e crua num espelho.' },
      { title: 'O Pote de Biscoitos (The Cookie Jar)', desc: 'Técnica de engenharia mental que consiste em resgatar memórias de vitórias, superações e dores passadas para alimentar a resiliência e forçar a mente a avançar nos momentos de crise extrema.' },
      { title: 'Calos Mentais (Callous Your Mind)', desc: 'A premissa de que a mente humana se fortalece exatamente da mesma forma que as mãos criam calos físicos: através da fricção repetida, do esforço desconfortável e da exposição controlada à dor.' },
      { title: 'A Caixa de Medo', desc: 'Enfrentar deliberadamente e de frente aquilo que mais evitas para retirar o poder paralisante que o medo exerce sobre as tuas decisões diárias.' }
    ],
    keyTakeaways: [
      'A força mental não é um dom inato, constrói-se exclusivamente através de ações desconfortáveis repetidas diariamente.',
      'As tuas origens, o teu passado traumático e as desvantagens iniciais não determinam os limites de onde podes chegar se aplicares disciplina implacável.',
      'A motivação superficial é passageira e altamente inútil; o que sustenta o progresso de longo prazo é a responsabilidade intransigente perante ti próprio.',
      'O sofrimento é o verdadeiro indicador e testador da evolução pessoal; a zona de conforto é o cemitério do potencial humano.'
    ],
    personalReview: 'Uma leitura devastadora e transformadora pela total ausência de concessões ou desculpas fáceis. Goggins destrói o conceito modernizado de "zona de conforto" e obriga o leitor a olhar diretamente para o espelho das suas próprias fraquezas, preguiça mental e vitimização crónica. É um livro que causa forte desconforto porque expõe a verdade nua e crua: a maioria dos nossos limites autoproclamados são barreiras mentais falsas construídas pelo cérebro para nos proteger do esforço real. Uma aula magistral de disciplina.',
    authorBio: 'Ex-SEAL da Marinha dos EUA, operador de elite do TACP da Força Aérea, ultramaratonista de topo mundial, recordista de pull-ups e referência global em dureza psicológica.',
    quotes: [
      { text: "Não pares quando estiveres cansado, para quando tiveres terminado.", page: 85 },
      { text: "A maior parte das pessoas desiste quando está apenas a 40% do seu potencial. O teu cérebro vai mentir-te dizendo que estás no limite, mas estás apenas no princípio.", page: 142 },
      { text: "O sofrimento é o verdadeiro teste da vida. É a prova de fogo que separa quem tu és de quem podes realmente tornar-te.", page: 112 },
      { text: "Estás a dar 100%? Se achas que sim, provavelmente estás apenas a dar 50%. A exigência interna tem de ser implacável.", page: 204 },
      { text: "A accountability extrema é a única ferramenta que te obriga a olhar para o espelho sem aceitar desculpas esfarrapadas.", page: 278 }
    ],
    frameworks: [
      { name: "Accountability Mirror", desc: "Sistema de auditoria diária onde escreves verdades duras sobre ti num espelho, confrontando diretamente as tuas falhas e metas inegociáveis." },
      { name: "Taking Souls Strategy", desc: "Estratégia de excelência competitiva onde trabalhas e superas os teus concorrentes ou adversidades de tal forma que quebras a moral de qualquer oposição e dominas o ambiente." },
      { name: "The Cookie Jar Method", desc: "Método de recuperação psicológica sob pressão: criar um inventário mental de todas as adversidades que já superaste no passado para usar como combustível de alta octanagem." },
      { name: "The After-Action Report (AAR) Diário", desc: "Uma auditoria fria, cirúrgica e sem drama emocional de cada falha ou dia menos produtivo, focando exclusivamente no que correu mal e em como o corrigir no dia seguinte." }
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
    favoriteChapter: 'Capítulo 2 - A Consciência: O Caminho para a Libertação',
    executiveSummary: 'Um clássico absoluto e guia essencial sobre espiritualidade prática, autoconhecimento e gestão mental. Eckhart Tolle demonstra com clareza cirúrgica como a mente humana vive perpetuamente aprisionada na ilusão psicológica do tempo, oscilando obsessivamente entre o remorso e a ruminação do passado e a ansiedade crónica em relação à incerteza do futuro. O livro detalha a mecânica profunda do ego — o falso eu gerado pela identificação involuntária com o fluxo incessante de pensamentos — e explica como alcançar um estado de presença consciente e iluminação através da aceitação radical do momento presente. Mais do que uma reflexão filosófica abstrata, a obra oferece um caminho prático, acessível e transformador para desarmar o ruído mental diário, cessar a criação de sofrimento psicológico desnecessário e aceder a uma perceção profunda de paz interior, clareza e vitalidade.',
    coreConcepts: [
      { title: 'Dissociação do Ego (Desidentificação)', desc: 'Compreender profundamente que tu não és a voz falante dentro da tua cabeça (os teus pensamentos automáticos), mas sim a consciência silenciosa que observa esses pensamentos.' },
      { title: 'O Corpo de Pain (Pain-Body)', desc: 'A acumulação de energia emocional negativa, mágoas e traumas acumulados do passado que sobrevive alimentando-se de novos conflitos mentais, dramas e reatividade emocional.' },
      { title: 'A Ilusão Psicológica do Tempo', desc: 'O passado já não existe senão como memória gravada e o futuro é apenas uma projeção mental hipotética; a única realidade tangível, acessível e verdadeira é sempre e irrevogavelmente o "Agora".' },
      { title: 'Presença e Atenção Plena', desc: 'A faculdade de ancorar a totalidade da atenção no momento presente, neutralizando o impulso automático da mente de antecipar problemas inexistentes.' },
      { title: 'A Rendição Ativa (Surrender)', desc: 'A arte de aceitar o momento presente exatamente como ele se apresenta antes de tomar qualquer ação externa, eliminando a resistência interna inútil que gera o sofrimento.' }
    ],
    keyTakeaways: [
      'A ansiedade e o stresse vivem exclusivamente na antecipação do futuro; a culpa e o remorso vivem no apego ao passado. A paz mental autêntica só existe no instante presente.',
      'A esmagadora maioria do sofrimento humano é autogerada pela própria mente através da resistência inconsciente e involuntária ao que "já é".',
      'Observar os próprios pensamentos de forma desapaixonada e sem julgamentos é o primeiro passo definitivo para a libertação emocional e espiritual.',
      'O tempo psicológico é uma armadilha mental; usar o tempo cronológico para fins práticos é necessário, mas deixar que ele domine a tua identidade é a raiz da infelicidade.'
    ],
    personalReview: 'Uma obra profundamente esclarecedora que atua como um antídoto cirúrgico contra a sobrecarga mental, o stresse e a hiperatividade da vida moderna. Tolle desconstrói o hábito obsessivo de viver em projeções futuras e ensina que o verdadeiro equilíbrio não resulta de tentar controlar ou manipular os pensamentos, mas sim de nos desvincularmos da sua tirania constante. É um livro para ler com calma, absorver devagar e aplicar diariamente, pois altera de forma radical a nossa reatividade perante os problemas, as adversidades e o ruído do mundo exterior.',
    authorBio: 'Escritor e professor espiritual de origem alemã, amplamente reconhecido como uma das maiores autoridades mundiais em mindfulness, presença e transformação da consciência.',
    quotes: [
      { text: "Nada aconteceu no passado; aconteceu no Agora. Nada acontecerá no futuro; acontecerá no Agora.", page: 41 },
      { text: "A causa principal da infelicidade nunca é a situação em si, mas os teus pensamentos e narrativas sobre ela.", page: 78 },
      { text: "Tudo o que precisas de fazer é aceitar este momento plenamente como se o tivesses escolhido. Então ficas em paz com o aqui e agora.", page: 102 },
      { text: "Não procurem a paz no exterior. Não procurem qualquer outro estado além daquele em que estão agora; caso contrário, estarão a criar conflito interno permanente.", page: 135 },
      { text: "Consegues sentir o espaço interior do teu corpo? Sente a vida vibrante que flui dentro de ti. Isso ancora-te instantaneamente no presente.", page: 168 }
    ],
    frameworks: [
      { name: "O Observador Silencioso", desc: "Prática constante de pausar e assistir ao fluxo contínuo de pensamentos, emoções e reações sem me identificar com eles ou julgá-los." },
      { name: "Ancoragem no Corpo Interior (Inner Body)", desc: "Técnica somática de redirecionar a atenção mental para o campo energético interno do corpo físico (como a respiração ou as mãos) para calar a ruminação mental." },
      { name: "Portal da Aceitação Ativa", desc: "Mecanismo tripartido perante o desconforto: Aceitar o momento presente de forma total, Modificar a situação se houver ação viável, ou Afastar-se por completo." },
      { name: "Desativação do Corpo de Dor", desc: "Detetar o surgimento súbito de irritação, drama ou vitimização, reconhecê-lo como energia estagnada do passado e recusar alimentar o ciclo com novos pensamentos defensivos." }
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
    favoriteChapter: 'Capítulo 3 - A Verdade Sobre a Capacidade e o Esforço',
    executiveSummary: 'Uma investigação científica revolucionária na área da psicologia comportamental e da motivação sobre como as crenças fundamentais que adotamos moldam ativamente todo o nosso percurso pessoal, académico e profissional. Carol Dweck demonstra através de décadas de estudos empíricos que as pessoas se dividem essencialmente em duas mentalidades: o mindset fixo (que pressupõe que a inteligência, o caráter e os talentos são traços estáticos e imutáveis ao longo da vida) e o mindset de crescimento (que compreende que as capacidades fundamentais podem ser cultivadas, desenvolvidas e expandidas através da dedicação, da prática deliberada, de boas estratégias e da resiliência perante o erro). O livro analisa o impacto profundo destas abordagens em contextos de liderança de alto nível, desportos de elite, relacionamentos duradouros e educação infantil, provando de forma inequívoca que a forma como encaramos o fracasso e o esforço determina os limites reais do nosso sucesso.',
    coreConcepts: [
      { title: 'Mindset Fixo vs. Mindset de Crescimento', desc: 'A crença limitativa de que o talento e a inteligência são dons natos imutáveis (fixo) em oposição à convicção de que as competências se constroem progressivamente com esforço e aprendizagem contínua (crescimento).' },
      { title: 'O Poder Mágico do "Ainda"', desc: 'Substituir declarações derrotistas ou defensivas como "não sei fazer isto" pela perspetiva de desenvolvimento evolutivo "ainda não sei fazer isto".' },
      { title: 'Reinterpretação Construtiva do Erro', desc: 'Encarar o fracasso não como um veredito definitivo sobre o teu valor intrínseco ou capacidade intelectual, mas sim como informação vital, feedback acionável e combustível para a evolução.' },
      { title: 'O Verdadero Papel do Esforço', desc: 'No mindset fixo, o esforço é visto erradamente como sinal de fraqueza ou falta de dom; no mindset de crescimento, o esforço é o elemento mágico que transforma potencial bruto em mestria genuína.' },
      { title: 'Foco no Processo versus Resultado Estático', desc: 'Valorizar a consistência, a experimentação estratégica e o progresso diário em detrimento da busca obsessiva por validação externa superficial baseada apenas no resultado final.' }
    ],
    keyTakeaways: [
      'O esforço contínuo, aliado a boas estratégias de aprendizagem, é o verdadeiro motor que transforma o potencial humano bruto em mestria duradoura.',
      'Elogiar constantemente o talento nato de alguém cria uma frágil dependência e aversão ao risco; em contrapartida, elogiar o processo, a resiliência e a dedicação constrói corajosa resiliência mental.',
      'O mindset não é um traço de personalidade permanente ou hereditário, mas sim uma escolha consciente e maleável que pode ser treinada e reconfigurada diariamente.',
      'Os desafios difíceis deixam de ser ameaças assustadoras ao ego e passam a ser encarados como oportunidades estimulantes para testar e expandir os próprios limites.'
    ],
    personalReview: 'Uma obra fundamental e indispensável para redefinir por completo a nossa relação com os erros, com a aprendizagem e com a evolução pessoal. O livro destrói definitivamente o mito tóxico do "dom natural" absoluto e obriga-nos a assumir a responsabilidade total pelo nosso desenvolvimento intelectual e emocional. É uma leitura extremamente prática para desmantelar o medo paralisante do julgamento alheio, eliminando a necessidade constante de provar valor aos outros e focando toda a energia onde ela realmente produz frutos: no progresso diário e na resiliência perante a adversidade.',
    authorBio: 'Professora distinta de Psicologia na Universidade de Stanford e amplamente reconhecida como uma das maiores autoridades mundiais nas áreas da psicologia social, motivação e desenvolvimento humano.',
    quotes: [
      { text: "Por que perder tanto tempo a provar que és ótimo quando podes simplesmente estar a melhorar e a aprender?", page: 16 },
      { text: "A mão cheia de cartas que te é dada ao nascer é apenas o ponto de partida absoluto para o jogo da vida.", page: 42 },
      { text: "No verdadeiro mindset de crescimento, os desafios e obstáculos complexos são estimulantes e empolgantes em vez de ameaçadores.", page: 95 },
      { text: "O fracasso é sempre um evento pontual, nunca uma identidade permanente. Ontem falhaste, mas hoje tens a oportunidade de aprender.", page: 158 },
      { text: "Tornar-se e evoluir é infinitamente melhor do que já ser. O foco central deve estar sempre na trajetória de crescimento, e nunca na perfeição estática.", page: 210 }
    ],
    frameworks: [
      { name: "Avaliação Orientada ao Processo (Process Audit)", desc: "Sistema rigoroso de medição de performance diária baseado no investimento de esforço, na disciplina metodológica e no foco mantido, em vez de métricas superficiais de sucesso imediato." },
      { name: "O Filtro do 'Ainda' (The Yet Framework)", desc: "Técnica cirúrgica de reestruturação cognitiva que consiste em anexar a palavra 'ainda' a qualquer bloqueio temporal, incapacidade passageira ou barreira de aprendizagem." },
      { name: "Análise Pós-Fracasso (Post-Failure Audit)", desc: "Processo estruturado de desconstrução imediata do erro para extrair lições táticas precisas, impedindo a inércia provocada pela autocrítica destrutiva." },
      { name: "Transição Ativa de Mindset (4 Passos)", desc: "Mapeamento comportamental para: Identificar o gatilho mental fixo, Reconhecer a voz interna defensiva, Responder ativamente com a perspetiva de crescimento e Tomar uma ação corretiva desafiante." }
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
    favoriteChapter: 'Capítulo 4 - Sincronia Corporal, Linguagem Não-Verbal e Tom de Voz',
    executiveSummary: 'Um manual prático, altamente estruturado e tático sobre inteligência social, dinâmica interpessoal e neurocomunicação. Nicholas Boothman desconstrói a ciência psicológica por trás das primeiras impressões, demonstrando que o cérebro humano toma decisões inconscientes e viscerais de confiança, simpatia e autoridade nos primeiros escassos segundos de qualquer contacto humano. Baseando-se em princípios avançados de Programação Neurolinguística (PNL) e psicologia comportamental, o livro ensina a dominar a linguagem corporal, a leitura de canais sensoriais, a modulação do tom de voz e a sincronia não-verbal para criar conexões genuínas, instantâneas e influentes em qualquer ambiente, seja profissional ou pessoal.',
    coreConcepts: [
      { title: 'Rapport Instantâneo e Espelhamento', desc: 'A arte e técnica de estabelecer sintonia e conforto subconsciente espelhando subtilmente a postura, os micro-movimentos, o ritmo respiratório e a cadência de voz do interlocutor.' },
      { title: 'Abertura Corporal e Projeção de Atitude', desc: 'Eliminar barreiras físicas inconscientes (como braços cruzados, corpo rodado para fora ou mãos ocultas) para projetar disponibilidade, confiança e segurança logo ao primeiro olhar.' },
      { title: 'Sistemas de Representação Sensorial (VAK)', desc: 'Identificar rapidamente se a pessoa processa e comunica predominantemente através do canal Visual, Auditivo ou Cinestésico, adaptando o vocabulário e o ritmo de comunicação a esse filtro.' },
      { title: 'Intenção, Atitude Mental e Contágio Emocional', desc: 'Entrar em qualquer sala ou reunião com uma atitude intencional e positiva, reconhecendo que o estado emocional do emissor é transmitido e absorvido antes de qualquer palavra ser pronunciada.' },
      { title: 'Sincronia de Ritmo e Cadência', desc: 'Ajustar a velocidade de fala, a energia e o tom para gerar harmonia e conforto inconsciente, evitando o choque de ritmos mentais opostos.' }
    ],
    keyTakeaways: [
      'A primeira impressão estabelece a fundação inegociável de toda a relação futura; depois de formada, o cérebro procura apenas confirmações desse julgamento inicial.',
      'A eficácia da comunicação depende exponencialmente mais da linguagem não-verbal e da tonalidade do que do conteúdo literal do discurso.',
      'A empatia e a simpatia não são traços místico-mágicos inatos, mas sim competências comportamentais mecânicas e treináveis.',
      'Fazer com que os outros se sintam compreendidos, seguros e valorizados é a ferramenta mais poderosa de persuasão e influência éticas.'
    ],
    personalReview: 'Uma leitura extremamente útil, direta e altamente acionável sobre comunicação e presença social. Boothman retira todo o misticismo da capacidade de "cair em graça" e transforma a arte de criar conexões interpessoais numa competência observável, sistemática e praticável. É um excelente guia para eliminar a timidez excessiva, otimizar a postura não-verbal em contextos de alta exigência e dominar a capacidade de causa um impacto memorável e positivo em qualquer interação.',
    authorBio: 'Especialista em PNL, consultor corporativo internacional e antigo fotógrafo de moda de prestígio global especializado em captar a essência humana.',
    quotes: [
      { text: "A chave para a persuasão autêntica não é o que dizes, mas a confiança e segurança que inspiras sem dizer uma única palavra.", page: 88 },
      { text: "As pessoas decidem se gostam de ti e se confiam em ti nos primeiros segundos. A partir daí, apenas procuram justificações racionais para confirmar essa primeira impressão visceral.", page: 24 },
      { text: "A linguagem corporal fala infinitamente mais alto do que as palavras. Se o corpo diz uma coisa e a voz diz outra, o cérebro do outro acreditará sempre no corpo.", page: 65 },
      { text: "O segredo para influenciar e conectar com os outros é fazê-los sentir seguros, respeitados e genuinamente compreendidos na tua presença.", page: 112 },
      { text: "Atitude é tudo: entra em qualquer interação humana como se já fosses amigo de longa data dessa pessoa.", page: 145 }
    ],
    frameworks: [
      { name: "Fórmula de 90 Segundos", desc: "Sequência de abertura social: Atitude mental positiva, Contacto visual direto e recíproco, Sorriso genuíno (Duchenne), Aperto de mão firme e Inclinação leve do corpo para a frente." },
      { name: "Mirroring & Matching (Espelhamento Tático)", desc: "Técnica controlada de reproduzir com atraso natural micro-posturas e ritmos de fala para acelerar o processo de empatia e confiança subconsciente." },
      { name: "Auditoria de Canais Sensoriais (VAK)", desc: "Método para identificar as palavras-chave usadas pelo interlocutor ('eu vejo', 'eu ouço', 'eu sinto') e espelhar o seu canal de pensamento dominante." },
      { name: "Checklist de Presença Social e Postura", desc: "Rotina pré-interação para desbloquear a linguagem corporal fechada, relaxar os ombros, expor o plexo solar e projetar uma postura de autoridade acessível." }
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
    executiveSummary: 'Um romance emotivo, envolvente e profundamente melancólico sobre a linha ténue e complexa que separa uma amizade de longa data de um amor romântico avassalador. A narrativa acompanha a ligação umbilical e quase indissociável entre dois melhores amigos que, apesar de uma cumplicidade inegável, tropeçam constantemente nas barreiras do medo, do receio da rejeição, das convenções sociais e de um timing tragicamente imperfeito. Laura Nowlin explora de forma visceral o impacto devastador das palavras retidas, dos sentimentos sufocados e das escolhas adiadas, culminando num retrato doloroso sobre como a ausência de coragem para comunicar a verdade a tempo pode custar irremediavelmente o futuro mais desejado.',
    coreConcepts: [
      { title: 'Vulnerabilidade Urgente', desc: 'A necessidade imperativa de expressar sentimentos autênticos e essenciais antes que as circunstâncias externas ou a imprevisibilidade da vida tornem o diálogo impossível.' },
      { title: 'O Preço Implacável do Timing', desc: 'A realidade dolorosa de que o amor não correspondido ou retido no momento certo pode perder-se de forma irreversível nas voltas imprevisíveis do tempo.' },
      { title: 'A Zona de Conforto da Amizade', desc: 'O dilema paralizante de optar por manter a segurança previsível de uma relação platónica por medo de arriscar tudo por uma paixão profunda.' },
      { title: 'Consequências do Silêncio Afetivo', desc: 'Como a repressão intencional de verdades emocionais por receio do risco gera um efeito dominó de desvios trágicos e arrependimentos nas trajetórias de vida.' }
    ],
    keyTakeaways: [
      'Nunca guardes conversas cruciais, confissões afetuosas ou palavras de valor por medo do risco; o peso do silêncio custa sempre mais caro do que a rejeição.',
      'O tempo e as oportunidades de ligação autêntica não são infinitos; adiar a exposição do que sentimos pode custar a presença de quem mais importa.',
      'As escolhas que deixamos de fazer por cobardia ou hesitação moldam a nossa realidade com a mesma força das decisões que tomamos ativamente.'
    ],
    personalReview: 'Uma história dolorosamente emocionante e profunda que nos confronta com a fragilidade das relações humanas e com o perigo da hesitação emocional. O livro destaca-se pela honestidade brutal com que retrata os arrependimentos amorosos e o luto das oportunidades perdidas, mostrando que a falta de coragem para falar a tempo é, muitas vezes, a ferida mais profunda que podemos infligir a nós próprios e a quem amamos.',
    authorBio: 'Autora norte-americana de ficção contemporânea e literatura jovem-adulto, amplamente aclamada pela capacidade de explorar a intensidade das emoções humanas, o luto e a complexidade dos afetos.',
    quotes: [
      { text: "Se eu lhe tivesse dito que o amava, talvez o mundo não tivesse mudado de rumo e o tempo tivesse esperado por nós.", page: 115 },
      { text: "Há coisas que passam uma vida inteira por dizer, até ser tarde demais para encontrar ouvidos dispostos a escutar.", page: 82 },
      { text: "O medo de perder a amizade fez-nos recuar no momento exato em que devíamos ter avançado, e no fim perdemos tudo pelo caminho.", page: 204 },
      { text: "O silêncio não protege ninguém de sofrer; apenas prolonga a agonia do inevitável e rouba o futuro.", page: 271 }
    ],
    frameworks: [
      { name: "Análise do Custo do Silêncio", desc: "Ferramenta de reflexão interna para avaliar o preço emocional real de postergar ou reprimir conversas cruciais por mero conforto temporário." },
      { name: "Auditoria de Risco Afetivo", desc: "Método pragmático de pesar o risco imediato e temporário da rejeição face ao arrependimento perpétuo de nunca ter tentado." },
      { name: "Mapeamento de Hesitações Comunicações", desc: "Exercício de tomada de consciência para identificar padrões recorrentes de recuo emocional em momentos decisivos de interatividade interpessoal." }
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
    executiveSummary: 'Um clássico absoluto e revolucionário das finanças pessoais que desafia frontalmente os paradigmas tradicionais sobre o dinheiro, o trabalho e a criação de riqueza. Robert Kiyosaki contrasta os ensinamentos e perspetivas opostas de duas figuras centrais da sua juventude: o seu próprio pai biológico (o "Pai Pobre", um homem altamente instruído, académico de topo, mas financeiramente estagnado e dependente de um salário) e o pai do seu melhor amigo (o "Pai Rico", um empresário autodidata, visionário e multimilionário). O livro desconstrói o mito de que é preciso ter um salário elevado para ficar rico, focando-se na importância inegociável da literacia financeira, na distinção matemática rigorosa entre ativos e passivos, e na necessidade urgente de fazer o dinheiro trabalhar de forma inteligente para ti, em vez de passares a vida inteira a trocar o teu tempo por um ordenado fixo.',
    coreConcepts: [
      { title: 'Ativos vs. Passivos (A Regra de Ouro)', desc: 'A definição financeira exata: ativos são tudo aquilo que coloca dinheiro no teu bolso (ex: investimentos, empresas, imóveis geradores de rendimento); passivos são tudo aquilo que retira dinheiro do teu bolso (ex: dívidas de consumo, carros caros, despesas fixas excessivas).' },
      { title: 'A Corrida dos Ratos (Rat Race)', desc: 'O ciclo perpétuo e exaustivo de trabalhar arduamente para pagar contas, obter um pequeno aumento salarial, inflacionar o estilo de vida e voltar a ficar sem liquidez financeira.' },
      { title: 'Trabalhar para Aprender vs. Trabalhar pelo Salário', desc: 'A prioridade estratégica de adquirir competências cruciais para o mundo real — como vendas, gestão de risco, liderança e contabilidade — em vez de procurar apenas uma falsa estabilidade salarial imediata.' },
      { title: 'A Importância Crucial da Empresa Própria', desc: 'Utilizar estruturas empresariais e veículos legais para otimizar drasticamente a carga fiscal, proteger o património acumulado e reinvestir capital antes de pagar impostos.' },
      { title: 'Gestão Racional de Risco versus Medo', desc: 'Compreender profundamente que o maior risco financeiro não é investir o capital, mas sim a ignorância financeira crónica e a inércia perante a inflação e a estagnação económica.' }
    ],
    keyTakeaways: [
      'Os ricos compram rigorosamente ativos que geram rendimento passivo; os pobres e a classe média acumulam passivos caros acreditando erroneamente que estão a construir riqueza.',
      'A educação escolar e académica tradicional ensina as pessoas a tornarem-se excelentes empregados obedientes, mas ignora por completo a educação financeira prática indispensável à soberania económica.',
      'As emoções humanas primárias do medo (da escassez e da perda) e da ganância controlam a esmagadora maioria das decisões monetárias da população, mantendo-a presa na corrida dos ratos.',
      'A verdadeira riqueza mede-se pelo tempo que consegues sobreviver sem trabalhar ativamente, mantendo o teu padrão de vida através do fluxo de caixa gerado pelos teus ativos.'
    ],
    personalReview: 'Uma obra fundamental e fundacional que altera de forma irreversível a nossa perceção sobre o dinheiro, o trabalho e o investimento. Kiyosaki retira o romantismo associado ao emprego tradicional e expõe com clareza matemática a armadilha da "corrida dos ratos". É um livro absolutamente essencial para redefinir prioridades, eliminar despesas fúteis de consumo imediato e começar a construir ativos de forma sistemática, estratégica e disciplinada.',
    authorBio: 'Empresário de sucesso, investidor global, orador motivacional e autor aclamado internacionalmente na área do ensino da literacia financeira e gestão de capitais.',
    quotes: [
      { text: "Os ricos fazem o dinheiro trabalhar arduamente para eles, em vez de passarem a vida a trabalhar arduamente pelo dinheiro.", page: 35 },
      { text: "O ativo mais poderoso e valioso que possuímos é a nossa própria mente. Se for bien treinada e educada, pode criar enorme riqueza do nada.", page: 72 },
      { text: "Os pobres e grande parte da classe média trabalham apenas pelo dinheiro. Os ricos estruturam a vida para ter o dinheiro a trabalhar para eles 24 horas por dia.", page: 48 },
      { text: "Não se trata de quanto dinheiro ganhas ao fim do mês, mas sim de quanto dinheiro consegues reter e guardar, e de quão duramente ele trabalha para ti.", page: 110 },
      { text: "O medo de perder dinheiro é real e universal. Toda a gente o sente, incluindo os ricos. Mas o problema estrutural não é ter medo; é exatamente como lidas com esse medo e o transformas em ação.", page: 165 }
    ],
    frameworks: [
      { name: "Fluxo de Caixa Pessoal (Cashflow Mapping)", desc: "Mapeamento rigoroso e transparente do percurso entre as fontes de rendimento (ativo e passivo) e as colunas de despesas reais para identificar desvios económicos." },
      { name: "Auditoria Implacável de Ativos vs. Passivos", desc: "Inventário trimestral estrito para separar o que efetivamente coloca dinheiro líquido no bolso daquilo que apenas gera custos ocultos de manutenção." },
      { name: "O Quadrante do Fluxo de Caixa", desc: "Framework mental de categorização económica para identificar a posição atual: Empregado (E), Autónomo (A), Dono de Negócio (D) ou Investidor (I)." },
      { name: "Estratégia de Reinvestimento de Capital", desc: "Método de alocação rigorosa dos lucros gerados por ativos para adquirir novos ativos, gerando um efeito parabólico de juros compostos financeiros." }
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
    favoriteChapter: 'Capítulo 3 - A Coragem de Dizer Não e Estabelecer Limites',
    executiveSummary: 'Um manifesto incisivo, profundo e transformador sobre a urgência inegociável do amor-próprio, da aceitação pessoal e da construção de limites saudáveis nas relações humanas. Gustavo Santos desmonta a ilusão de que a felicidade e a validação dependem da aprovação exterior, defendendo que nenhum ser humano pode oferecer ao mundo aquilo que não cultiva primeiro dentro de si próprio. O livro explora a necessidade de cortar laços com dinâmicas tóxicas, assumir a responsabilidade total pelas próprias escolhas emocionais e encarar o auto-respeito como a fundação indispensável para qualquer vida equilibrada, autêntica e em paz.',
    coreConcepts: [
      { title: 'Amor-Próprio Intransigente', desc: 'A decisão consciente e inegociável de priorizar o próprio bem-estar emocional, mental e físico, recusando aceitar migalhas afetivas ou ambientes tóxicos.' },
      { title: 'A Arte de Dizer Não', desc: 'Compreender que cada "não" dito a exigências alheias desadequadas é, na verdade, um "sim" retumbante à própria saúde mental e integridade.' },
      { title: 'Corte de Relações Tóxicas', desc: 'A coragem necessária para afastar de forma definitiva pessoas e contextos que sugam a energia vital e invalidam a dignidade pessoal.' },
      { title: 'Responsabilidade Emocional Integral', desc: 'A premissa de que a culpa pela insatisfação crónica não pertence aos outros, mas sim à falta de coragem para impor limites firmes e alinhar as ações com os valores próprios.' }
    ],
    keyTakeaways: [
      'Só podes transmitir e oferecer ao mundo a paz, o respeito e o amor que previamente cultivaste e estabilizaste dentro de ti.',
      'Quando aprendes a amar-te de forma profunda e genuína, o medo da rejeição alheia desaparece e a necessidade de validação externa deixa de ditar as tuas escolhas.',
      'O respeito pelos teus próprios limites ensina instantaneamente os outros sobre como devem tratar-te.'
    ],
    personalReview: 'Uma leitura incisiva, direta e profundamente purificadora sobre a importância da autoestima e do respeito próprio. O livro atua como um verdadeiro choque de realidade, confrontando o leitor com as vezes em que se anula para agradar aos outros. É uma obra essencial para limpar o ruído exterior, fortalecer o caráter emocional e assumir uma postura inegociável de amor-próprio.',
    authorBio: 'Escritor, conferencista, apresentador e autor português amplamente reconhecido pelas suas obras focadas no desenvolvimento emocional, na consciência humana e na busca pela paz interior.',
    quotes: [
      { text: "Quando te amas a ti próprio sem reservas, deixas instantaneamente de procurar a aprovação vazia do mundo.", page: 48 },
      { text: "Ninguém te fará mal a menos que tu lhes dês a permissão e o poder para o fazer através da tua ausência de limites.", page: 76 },
      { text: "Dizer não aos outros é, na grande maioria das vezes, dizer sim à tua própria sanidade mental.", page: 112 },
      { text: "A paz de espírito não tem preço e não se negocia por conveniência social ou medo da solidão.", page: 154 }
    ],
    frameworks: [
      { name: "Protocolo de Limites Inegociáveis", desc: "Sistema de auditoria pessoal para mapear comportamentos alheios toleráveis versus barreiras inegociáveis de respeito." },
      { name: "Inventário de Validação Interna", desc: "Exercício diário para suprimir a dependência da aprovação externa e ancorar a autoestima nas próprias conquistas e valores." },
      { name: "Filtro de Desintoxicação Relacional", desc: "Método de avaliação de interações sociais para identificar e afastar fontes crónicas de drenagem energética e manipulação." }
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
    favoriteChapter: 'Capítulo 5',
    executiveSummary: 'Manifesto direto para destruir a autossabotagem e assumir ação implacável.',
    coreConcepts: [
      { title: 'Ação sem Motivação', desc: 'A motivação surge depois da ação.' }
    ],
    keyTakeaways: [
      'Ninguém te está a impedir a não ser tu próprio.'
    ],
    personalReview: 'Excelente para sacudir a apatia.',
    authorBio: 'Coach internacional.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 }
    ],
    frameworks: [
      { name: "Execução Cega", desc: "Suprimir o debate mental e agir." }
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
    favoriteChapter: 'Capítulo 16',
    executiveSummary: 'Romance catártico sobre o fim de uma relação e a redescoberta pessoal.',
    coreConcepts: [
      { title: 'Reencontro Consigo', desc: 'Aprender a desfrutar da própria companhia.' }
    ],
    keyTakeaways: [
      'Perder alguém pode ser uma libertação para uma vida autêntica.'
    ],
    personalReview: 'Comovente e realista sobre sarar feridas.',
    authorBio: 'Autor português de ficção contemporânea.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios.", page: 62 }
    ],
    frameworks: [
      { name: "Inventário de Autonomia", desc: "Reconstrução de objetivos individuais." }
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
    favoriteChapter: 'Capítulo 12',
    executiveSummary: 'Narrativa sobre a imprevisibilidade do afeto e a superação de defesas emocionais.',
    coreConcepts: [
      { title: 'Entrega Genuína', desc: 'Coragem de viver sentimentos sem reservas.' }
    ],
    keyTakeaways: [
      'As melhores histórias surgem sem planeamento.'
    ],
    personalReview: 'Romance leve e inspirador.',
    authorBio: 'Autor bestseller português.',
    quotes: [
      { text: "O amor acontece quando deixamos o coração aberto.", page: 77 }
    ],
    frameworks: [
      { name: "Desarmamento Afetivo", desc: "Eliminar barreiras defensivas." }
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
    favoriteChapter: 'Capítulo 21',
    executiveSummary: 'Obra sobre resiliência profunda e renascimento perante crises e quedas.',
    coreConcepts: [
      { title: 'Resiliência Ativa', desc: 'Usar o impacto da queda como impulso.' }
    ],
    keyTakeaways: [
      'As quedas não definem quem és; o que importa é como te reergues.'
    ],
    personalReview: 'Profundamente empoderador.',
    authorBio: 'Romancista português aclamado.',
    quotes: [
      { text: "É lá no fundo que descobres que tens asas para voar.", page: 53 }
    ],
    frameworks: [
      { name: "Mapeamento de Superação", desc: "Análise de forças mobilizadas na crise." }
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
    favoriteChapter: 'Capítulo 18',
    executiveSummary: 'Reflexão sobre a urgência inegociável de valorizar quem amamos no presente.',
    coreConcepts: [
      { title: 'Urgência do Afeto', desc: 'Não adiar a demonstração de carinho.' }
    ],
    keyTakeaways: [
      'O tempo dedicado a alguém é o bem mais precioso.'
    ],
    personalReview: 'Uma chamada de atenção atual sobre viver o amor.',
    authorBio: 'Autor português de desenvolvimento emocional.',
    quotes: [
      { text: "Quem ama não adia e não deixa para amanhã o carinho que pode dar hoje.", page: 89 }
    ],
    frameworks: [
      { name: "Protocolo de Presença", desc: "Estar 100% focado no interlocutor." }
    ]
  }
];

// ==========================================
// 2. LÓGICA DE INICIALIZAÇÃO E NAVEGAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  
  // Renderizar dados iniciais
  renderBooks(INITIAL_BOOKS);
  renderVaultQuotes(INITIAL_BOOKS);
  renderStats(INITIAL_BOOKS);
  renderHeroQuote();

  // A. Sincronização de Abas com Scroll Inteligente (Ligeiramente mais acima para nunca cortar texto)
  const navButtons = document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn');
  const viewSections = document.querySelectorAll('.view-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab');
      if (!targetTab) return;

      // Atualizar botões ativos
      document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn').forEach(b => {
        if (b.getAttribute('data-tab') === targetTab) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

      // Atualizar secções visíveis
      viewSections.forEach(section => {
        if (section.id === `view-${targetTab}`) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      // SCROLL INTELIGENTE LIGEIRAMENTE MAIS ACIMA (Offset de 130px para garantir zero cortes de texto)
      const targetSection = document.getElementById(`view-${targetTab}`);
      if (targetSection) {
        const headerOffset = 130; 
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // B. Pesquisa e Filtros
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = INITIAL_BOOKS.filter(b => 
        b.title.toLowerCase().includes(term) || 
        b.author.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term)
      );
      renderBooks(filtered);
    });
  }

  const categoryPills = document.querySelectorAll('.cat-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-category');
      
      if (cat === 'All') {
        renderBooks(INITIAL_BOOKS);
      } else {
        const filtered = INITIAL_BOOKS.filter(b => b.category.toLowerCase() === cat.toLowerCase());
        renderBooks(filtered);
      }
    });
  });

  // C. Fechar Modal
  const modalOverlay = document.getElementById('book-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  
  if (closeBtn && modalOverlay) {
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
});

// ==========================================
// 3. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================

function renderBooks(books) {
  const grid = document.getElementById('books-grid');
  if (!grid) return;
  
  if (books.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum livro encontrado.</p>`;
    return;
  }

  grid.innerHTML = books.map(book => `
    <div class="book-card" onclick="openBookModal('${book.id}')">
      <div class="book-cover-wrap">
        <img src="${book.cover}" alt="${book.title}" class="book-cover-img" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80'">
        <div class="book-rating-badge">★ ${book.rating}.0</div>
        <div class="book-category-tag">${book.category}</div>
      </div>
      <div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-summary">${book.executiveSummary}</p>
      </div>
      <div class="book-card-footer">
        <span class="book-meta-info">${book.pages} págs • ${book.yearRead}</span>
        <span class="book-explore-link">Explorar →</span>
      </div>
    </div>
  `).join('');
}

function renderVaultQuotes(books) {
  const vaultGrid = document.getElementById('quotes-grid');
  if (!vaultGrid) return;

  let allQuotes = [];
  books.forEach(b => {
    b.quotes.forEach(q => {
      allQuotes.push({ text: q.text, page: q.page, bookTitle: b.title, author: b.author });
    });
  });

  vaultGrid.innerHTML = allQuotes.map(q => `
    <div class="vault-quote-card">
      <div class="vault-quote-top">
        <p class="vault-quote-content">"${q.text}"</p>
      </div>
      <div class="vault-quote-footer">
        <span class="vault-quote-meta-text" style="color: var(--primary); font-weight: 700;">${q.bookTitle}</span>
        <span class="vault-quote-meta-text" style="color: var(--text-dim);">Pág. ${q.page}</span>
      </div>
    </div>
  `).join('');
}

function renderStats(books) {
  const booksCountEl = document.getElementById('stat-books-count');
  const pagesCountEl = document.getElementById('stat-pages-count');
  const avgRatingEl = document.getElementById('stat-avg-rating');

  if (booksCountEl) booksCountEl.textContent = books.length;
  if (pagesCountEl) pagesCountEl.textContent = books.reduce((acc, curr) => acc + curr.pages, 0);
  if (avgRatingEl) {
    const avg = books.reduce((acc, curr) => acc + curr.rating, 0) / books.length;
    avgRatingEl.textContent = avg.toFixed(1);
  }
}

function renderHeroQuote() {
  const quoteText = document.getElementById('hero-quote-text');
  const authorText = document.getElementById('hero-quote-author');
  if (!quoteText || !authorText) return;

  let allQuotes = [];
  INITIAL_BOOKS.forEach(b => {
    b.quotes.forEach(q => {
      allQuotes.push({ text: q.text, author: b.author, title: b.title });
    });
  });

  if (allQuotes.length === 0) return;
  const rand = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  quoteText.textContent = `"${rand.text}"`;
  authorText.textContent = `— ${rand.author}, ${rand.title}`;
}

// ==========================================
// 4. MODAL DETALHADO DO LIVRO & OCULTAR MENUS
// ==========================================

function openBookModal(id) {
  const book = INITIAL_BOOKS.find(b => b.id === id);
  if (!book) return;

  const modalOverlay = document.getElementById('book-modal');
  if (!modalOverlay) return;

  // OCULTAR OS MENUS GLOBAIS (Header nav e Bottom Nav do telemóvel) enquanto o livro está aberto
  document.querySelectorAll('.nav-tabs, .mobile-bottom-nav').forEach(nav => {
    nav.style.display = 'none';
  });

  // 1. Preencher Cabeçalho do Modal
  const modalHeader = document.getElementById('modal-header');
  modalHeader.innerHTML = `
    <img src="${book.cover}" alt="${book.title}" class="modal-book-cover" onerror="this.src='https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80'">
    <div class="modal-book-info">
      <span class="book-category-tag" style="position:static; display:inline-block; margin-bottom:8px;">${book.category}</span>
      <h2 class="modal-title">${book.title}</h2>
      <p class="modal-author">por ${book.author}</p>
      
      <div class="specs-grid">
        <div class="spec-item"><span class="spec-label">Páginas</span><div class="spec-val">${book.pages}</div></div>
        <div class="spec-item"><span class="spec-label">Ano</span><div class="spec-val">${book.yearRead}</div></div>
        <div class="spec-item"><span class="spec-label">Avaliação</span><div class="spec-val">★ ${book.rating}.0</div></div>
      </div>
    </div>
  `;

  // 2. Renderizar Conteúdo Inicial da Aba "Visão Geral"
  renderModalTabContent(book, 'overview');

  // 3. Configurar cliques nas abas internas do modal (Scroll volta SEMPRE ao início do modal)
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  modalTabBtns.forEach(btn => {
    btn.onclick = () => {
      modalTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabType = btn.getAttribute('data-tab');
      renderModalTabContent(book, tabType);
    };
  });

  // Abrir Modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderModalTabContent(book, tabType) {
  const modalBody = document.getElementById('modal-body');
  const modalScrollContent = document.querySelector('.modal-scroll-content');
  if (!modalBody) return;

  if (tabType === 'overview') {
    modalBody.innerHTML = `
      <h4 class="modal-section-title">Resumo Executivo</h4>
      <div class="modal-box-text" style="margin-bottom: 24px;">${book.executiveSummary}</div>

      <h4 class="modal-section-title">Conceitos Principais</h4>
      <div class="concepts-grid" style="margin-bottom: 24px;">
        ${book.coreConcepts.map(c => `
          <div class="concept-card">
            <span class="concept-title">${c.title}</span>
            <p class="concept-desc">${c.desc}</p>
          </div>
        `).join('')}
      </div>

      <h4 class="modal-section-title">Apreciação Pessoal</h4>
      <div class="modal-box-text" style="margin-bottom: 24px;">${book.personalReview}</div>

      <h4 class="modal-section-title">Biografia do Autor</h4>
      <div class="modal-box-text">${book.authorBio}</div>
    `;
  } else if (tabType === 'highlights') {
    modalBody.innerHTML = `
      <h4 class="modal-section-title">Citações e Excertos Selecionados</h4>
      <div class="quotes-grid" style="grid-template-columns: 1fr;">
        ${book.quotes.map(q => `
          <div class="vault-quote-card">
            <p class="vault-quote-content">"${q.text}"</p>
            <span class="vault-quote-meta-text" style="color: var(--primary); margin-top: 10px; display: block;">Página ${q.page}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabType === 'frameworks') {
    modalBody.innerHTML = `
      <h4 class="modal-section-title">Prática & Frameworks</h4>
      <div class="concepts-grid">
        ${book.frameworks.map(f => `
          <div class="concept-card" style="border-left: 3px solid var(--primary);">
            <span class="concept-title" style="color: var(--primary);">${f.name}</span>
            <p class="concept-desc">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // AO CLICAR EM QUALQUER ABA NO LIVRO ABERTO, VOLTA SEMPRE AO INÍCIO DO MODAL (top: 0)
  if (modalScrollContent) {
    modalScrollContent.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('book-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';

    // VOLTAR A MOSTRAR OS MENUS GLOBAIS ao fechar o livro
    document.querySelectorAll('.nav-tabs, .mobile-bottom-nav').forEach(nav => {
      nav.style.display = '';
    });
  }
}