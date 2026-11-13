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
    executiveSummary: 'Um romance emotivo, envolvente e profundamente melancólico sobre a linha ténue e complexa que separa uma amizade de longa data de um amor romântico avassalador. A narrativa acompanha a ligação umbilical e quase indissociável entre dois melhores amigos que, apesar de uma cumplicidade inegável, tropeçam constantemente nas barreiras do medo, do receio da rejeição, das convenções sociais e de um timing tragicamente imperfeito. Laura Nowlin explora de forma visceral o impacto devastador das palavras retidas, dos sentimentos sufocados e das escolhas adiadas, culminando num retrato doloroso sobre como a ausência de coragem para comunicar a tempo pode custar irremediavelmente o futuro mais desejado.',
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
    favoriteChapter: 'Capítulo 5 - Não é Preciso Ter Vontade',
    executiveSummary: 'Um manifesto direto, sem filtros e frontal contra a paralisia mental, a vitimização e a autossabotagem crónica. Gary John Bishop desconstrói o mito moderno de que precisamos de "sentir vontade", estar inspirados ou alinhar as condições perfeitas antes de agir. Com uma linguagem crua e pragmática, o autor demonstra como o diálogo interno negativo e o vício inconsciente no drama e na incerteza mantêm as pessoas presas a uma vida medíocre. Mais do que um livro de autoajuda motivacional, funciona como um choque de realidade para cortar o ruído mental, assumir total responsabilidade pelos resultados atuais e substituir desculpas emocionais por execução imediata e consistente.',
    coreConcepts: [
      { title: 'O Diálogo Interno como Prisão', desc: 'A narrativa constante que manténs na tua cabeça não é a realidade absoluta, mas sim um filtro condicionado pelo medo e pelo hábito que dita o limite das tuas ações.' },
      { title: 'Vontade vs. Ação', desc: 'A vontade e a motivação são emoções voláteis e pouco fiáveis. A ação não depende de como te sentes; o sentimento positivo surge como consequência da execução, nunca como pré-requisito.' },
      { title: 'O Vício na Incerteza e no Drama', desc: 'Muitas vezes, a estagnação não é falta de capacidade, mas um apego inconsciente à familiaridade do problema, que oferece uma desculpa segura para não arriscar falhar.' },
      { title: 'Assertividade Radical', desc: 'Assumir sem reservas que a vida que tens hoje é o reflexo exato das tuas escolhas, tolerâncias e ações passadas, eliminando qualquer culpabilização externa.' },
      { title: 'Desapego das Expectativas', desc: 'As expectativas rígidas geram frustração e paralisia quando a realidade não colabora; focar apenas no que está sob o teu controlo imediato liberta energia para agir.' }
    ],
    keyTakeaways: [
      'Ninguém te está a impedir de avançar a não ser tu próprio e as histórias que contas a ti mesmo para justificar a inação.',
      'Não precisas de ter vontade para fazer o que tem de ser feito; a disciplina consiste em agir independentemente do estado emocional.',
      'Tu és o resultado do que fazes repetidamente, não daquilo que dizes que vais fazer ou do que planeias em silêncio.',
      'Aceitar a realidade tal como ela é — sem dramas nem vitimização — é o único ponto de partida eficaz para qualquer mudança real.'
    ],
    personalReview: 'Uma leitura direta ao ponto que funciona como um abanão necessário contra a apatia e o excesso de análise. O grande mérito de Gary John Bishop é retirar todo o romantismo da "motivação" e expor a simplicidade brutal da execução: ou fazes, ou inventas uma desculpa. Sem rodeios nem teorias complexas, é um livro prático que corta pela raiz a tendência humana de complicar o que é simples e obriga a assumir o controlo imediato das próprias ações.',
    authorBio: 'Autor bestseller do New York Times, coach de desenvolvimento pessoal de renome internacional e especialista em ontologia e transformação comportamental.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 },
      { text: "Não é preciso ter vontade. Faz o que tens de fazer, quer te apeteça quer não.", page: 89 },
      { text: "Tu não és os teus pensamentos; tu és aquilo que fazes.", page: 114 },
      { text: "A forma como falas contigo próprio determina a qualidade da tua vida e a dimensão dos teus resultados.", page: 47 },
      { text: "Para de esperar pelo momento perfeito ou pela inspiração divina. O único momento que existe é agora.", page: 162 }
    ],
    frameworks: [
      { name: "Execução Cega", desc: "Suprimir o debate mental e o overthinking antes de uma tarefa difícil, passando diretamente do pensamento à ação física imediata." },
      { name: "Auditoria de Assertividade", desc: "Analisar qualquer situação estagnada através de sete afirmações diretas (como 'Eu estou disposto' e 'Eu sou assertivo') para identificar onde estás a sabotar-te." },
      { name: "Corte de Ruído Interno", desc: "Isolar os pensamentos automáticos de dúvida ou vitimização e tratá-los apenas como ruído de fundo sem autoridade sobre as tuas decisões." },
      { name: "Foco no Controlo Imediato", desc: "Separar radicalmente o que depende da tua ação direta daquilo que são apenas expectativas sobre terceiros ou circunstâncias externas." }
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
    favoriteChapter: 'Capítulo 5 - Não é Preciso Ter Vontade',
    executiveSummary: 'Um manifesto direto, sem filtros e frontal contra a paralisia mental, a vitimização e a autossabotagem crónica. Gary John Bishop desconstrói o mito moderno de que precisamos de "sentir vontade", estar inspirados ou alinhar as condições perfeitas antes de agir. Com uma linguagem crua e pragmática, o autor demonstra como o diálogo interno negativo e o vício inconsciente no drama e na incerteza mantêm as pessoas presas a uma vida medíocre. Mais do que um livro de autoajuda motivacional, funciona como um choque de realidade para cortar o ruído mental, assumir total responsabilidade pelos resultados atuais e substituir desculpas emocionais por execução imediata e consistente.',
    coreConcepts: [
      { title: 'O Diálogo Interno como Prisão', desc: 'A narrativa constante que manténs na tua cabeça não é a realidade absoluta, mas sim um filtro condicionado pelo medo e pelo hábito que dita o limite das tuas ações.' },
      { title: 'Vontade vs. Ação', desc: 'A vontade e a motivação são emoções voláteis e pouco fiáveis. A ação não depende de como te sentes; o sentimento positivo surge como consequência da execução, nunca como pré-requisito.' },
      { title: 'O Vício na Incerteza e no Drama', desc: 'Muitas vezes, a estagnação não é falta de capacidade, mas um apego inconsciente à familiaridade do problema, que oferece uma desculpa segura para não arriscar falhar.' },
      { title: 'Assertividade Radical', desc: 'Assumir sem reservas que a vida que tens hoje é o reflexo exato das tuas escolhas, tolerâncias e ações passadas, eliminando qualquer culpabilização externa.' },
      { title: 'Desapego das Expectativas', desc: 'As expectativas rígidas geram frustração e paralisia quando a realidade não colabora; focar apenas no que está sob o teu controlo imediato liberta energia para agir.' }
    ],
    keyTakeaways: [
      'Ninguém te está a impedir de avançar a não ser tu próprio e as histórias que contas a ti mesmo para justificar a inação.',
      'Não precisas de ter vontade para fazer o que tem de ser feito; a disciplina consiste em agir independentemente do estado emocional.',
      'Tu és o resultado do que fazes repetidamente, não daquilo que dizes que vais fazer ou do que planeias em silêncio.',
      'Aceitar a realidade tal como ela é — sem dramas nem vitimização — é o único ponto de partida eficaz para qualquer mudança real.'
    ],
    personalReview: 'Uma leitura direta ao ponto que funciona como um abanão necessário contra a apatia e o excesso de análise. O grande mérito de Gary John Bishop é retirar todo o romantismo da "motivação" e expor a simplicidade brutal da execução: ou fazes, ou inventas uma desculpa. Sem rodeios nem teorias complexas, é um livro prático que corta pela raiz a tendência humana de complicar o que é simples e obriga a assumir o controlo imediato das próprias ações.',
    authorBio: 'Autor bestseller do New York Times, coach de desenvolvimento pessoal de renome internacional e especialista em ontologia e transformação comportamental.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 },
      { text: "Não é preciso ter vontade. Faz o que tens de fazer, quer te apeteça quer não.", page: 89 },
      { text: "Tu não és os teus pensamentos; tu és aquilo que fazes.", page: 114 },
      { text: "A forma como falas contigo próprio determina a qualidade da tua vida e a dimensão dos teus resultados.", page: 47 },
      { text: "Para de esperar pelo momento perfeito ou pela inspiração divina. O único momento que existe é agora.", page: 162 }
    ],
    frameworks: [
      { name: "Execução Cega", desc: "Suprimir o debate mental e o overthinking antes de uma tarefa difícil, passando diretamente do pensamento à ação física imediata." },
      { name: "Auditoria de Assertividade", desc: "Analisar qualquer situação estagnada através de sete afirmações diretas (como 'Eu estou disposto' e 'Eu sou assertivo') para identificar onde estás a sabotar-te." },
      { name: "Corte de Ruído Interno", desc: "Isolar os pensamentos automáticos de dúvida ou vitimização e tratá-los apenas como ruído de fundo sem autoridade sobre as tuas decisões." },
      { name: "Foco no Controlo Imediato", desc: "Separar radicalmente o que depende da tua ação direta daquilo que são apenas expectativas sobre terceiros ou circunstâncias externas." }
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
    favoriteChapter: 'Capítulo 16 - O Peso do Fim e o Início de Tudo',
    executiveSummary: 'Um romance profundamente catártico e realista sobre o fim de uma relação que parecia definitiva e o processo doloroso, mas libertador, de reconstrução pessoal. Raul Minh\'alma explora a anatomia do luto amoroso, mostrando como a perda de alguém que amamos — por mais devastadora que pareça no momento — pode ser o catalisador necessário para nos reencontrarmos, recuperarmos a nossa identidade perdida e darmos valor ao amor-próprio. A narrativa equilibra a melancolia da rutura com uma mensagem forte de empoderamento emocional, demonstrando que fechar ciclos é a única forma de abrir espaço para uma vida verdadeiramente autêntica.',
    coreConcepts: [
      { title: 'Reencontro Consigo', desc: 'Aprender a desfrutar da própria companhia e a preencher os vazios emocionais com objetivos próprios, deixando de depender da validação alheia.' },
      { title: 'A Anatomia do Fim', desc: 'Compreender que o fim de uma relação não é um fracasso absoluto, mas sim o término de um ciclo que esgotou o seu propósito evolutivo.' },
      { title: 'Desapego da Ilusão', desc: 'A coragem de parar de viver à sombra de memórias idealizadas e aceitar a realidade fria de que o passado já não pode ser recuperado.' },
      { title: 'Independência Emocional', desc: 'O processo gradual de retirar ao outro o poder de ditar o teu estado de espírito e a tua felicidade diária.' }
    ],
    keyTakeaways: [
      'Perder alguém pode ser, paradoxalmente, a maior libertação para conseguires viver uma vida autêntica e fiel aos teus princípios.',
      'A dor da separação é inevitável, mas o sofrimento prolongado é uma escolha que fazemos quando nos recusamos a virar a página.',
      'Nenhuma relação deve servir para esconder as tuas próprias inseguranças ou para completares o que já deves trazer inteiro.',
      'O amor-próprio não é egoísmo, é a fundação inegociável sem a qual qualquer outra relação está condenada ao fracasso.'
    ],
    personalReview: 'Comovente, extremamente humano e muito realista sobre a forma como lidamos com as feridas do coração. Raul Minh\'alma escreve com uma sensibilidade cirúrgica, captando na perfeição o turbilhão de emoções que se segue a uma grande desilusão amorosa. Mais do que uma história de ficção, funciona como um abraço reconfortante e um lembrete empoderador de que nunca devemos perder-nos a nós próprios para tentar manter alguém na nossa vida.',
    authorBio: 'Um dos autores contemporâneos mais lidos em Portugal, conhecido pela sua escrita cativante focada nas complexidades das relações humanas e do desenvolvimento emocional.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios.", page: 62 },
      { text: "O amor nunca deve obrigar-nos a apagar quem somos para caber no mundo de outra pessoa.", page: 114 },
      { text: "Curar uma ferida amorosa exige tempo, coragem e a firme decisão de não reabrir a porta a quem já escolheu partir.", page: 185 },
      { text: "Só descobrimos a nossa verdadeira força quando nos vemos obrigados a caminhar sozinhos no meio da tempestade.", page: 220 },
      { text: "Ganhar uma vida nova significa ter a coragem de olhar para o futuro sem o peso do passado.", page: 251 }
    ],
    frameworks: [
      { name: "Inventário de Autonomia", desc: "Reconstrução sistemática de objetivos individuais, hobbies e projetos de vida que foram negligenciados durante a relação." },
      { name: "Protocolo de Ausência Zero", desc: "Corte consciente de contactos e vigilância digital para permitir que o sistema emocional processe o luto sem interferências." },
      { name: "Auditoria de Dependência", desc: "Identificar conscientemente onde depositaste a tua validação emocional no outro para a trazer de volta para o teu próprio eixo." }
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
    favoriteChapter: 'Capítulo 12 - O Acaso que Muda Tudo',
    executiveSummary: 'Uma narrativa sensível e envolvente sobre a imprevisibilidade absoluta do afeto e a coragem necessária para derrubar as defesas emocionais que erguemos à nossa volta. Raul Minh\'alma explora como o amor verdadeiro surge frequentemente quando menos o esperamos — sem planos, agendas ou expectativas calculadas. O livro acompanha personagens que, marcadas por desilusões anteriores, tentam proteger-se do sofrimento através do controlo e do distanciamento, apenas para descobrirem que a vida e o sentimento encontram sempre maneira de desarmar as nossas maiores resistências.',
    coreConcepts: [
      { title: 'A Magia do Acaso', desc: 'A aceitação de que os momentos mais marcantes e genuínos da nossa vida nunca são planeados, acontecendo precisamente quando baixamos a guarda.' },
      { title: 'Entrega Genuína', desc: 'A coragem de viver os sentimentos sem redes de segurança, aceitando a vulnerabilidade como parte inerente de qualquer conexão profunda.' },
      { title: 'O Peso das Máscaras', desc: 'Como o medo de sofrer nos leva a vestir couraças de indiferença que acabam por afastar aquilo que mais secretamente desejamos.' },
      { title: 'Sincronicidade Emocional', desc: 'O alinhamento natural que acontece quando duas pessoas decidem, sem pressões, entregar-se ao momento presente.' }
    ],
    keyTakeaways: [
      'As melhores histórias da nossa vida surgem quase sempre sem planeamento e à revelia de todas as nossas regras pré-concebidas.',
      'Proteger excessivamente o coração por medo de sofrer é a forma mais garantida de nos privarmos de viver experiências genuínas.',
      'O amor não se força nem se programa; ele acontece de forma orgânica quando duas pessoas se permitem ser inteiramente transparentes.',
      'A vulnerabilidade não é sinal de fraqueza, mas sim a chave indispensável para abrir a porta a um afeto verdadeiro.'
    ],
    personalReview: 'Um romance leve, inspirador e com uma mensagem muito bonita sobre a espontaneidade dos sentimentos. Raul Minh\'alma tem o dom de escrever de forma muito próxima do leitor, tocando em inseguranças comuns sobre o medo de amar e de baixar as defesas. É uma leitura que nos deixa com o coração cheio e nos lembra que, por mais feridos que estejamos, a vida tem sempre uma surpresa guardada para quando menos esperamos.',
    authorBio: 'Autor bestseller português, reconhecido pela escrita sensível e emocionante que conquista leitores de todas as idades com reflexões profundas sobre o amor e a vida.',
    quotes: [
      { text: "O amor acontece quando deixamos o coração aberto, sem medos nem planos traçados.", page: 77 },
      { text: "As pessoas que mais nos marcam são aquelas que entram na nossa vida sem bater à porta.", page: 132 },
      { text: "Tentamos controlar tudo na vida, mas esquecemos-nos de que os sentimentos não obedecem a regras lógicas.", page: 45 },
      { text: "Quem tem muito medo de sofrer acaba por nunca se permitir viver a felicidade por inteiro.", page: 198 },
      { text: "Foi sem querer que te quis, mas foi com toda a certeza do mundo que decidi ficar.", page: 240 }
    ],
    frameworks: [
      { name: "Desarmamento Afetivo", desc: "Técnica consciente de eliminar barreiras defensivas e cinismo perante novas pessoas, permitindo a aproximação sem julgamentos prévios." },
      { name: "Gestão da Espontaneidade", desc: "Aprender a desligar o excesso de planeamento mental e de controlo nas relações, aceitando o fluxo natural dos acontecimentos." }
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
    favoriteChapter: 'Capítulo 21 - O Ponto de Viragem',
    executiveSummary: 'Uma obra intensa e profundamente inspiradora sobre resiliência perante as maiores crises da vida. Raul Minh\'alma aborda o momento inevitável em que o nosso mundo desaba — seja por uma perda, uma traição ou o colapso de um sonho — e mostra que é exatamente no fundo do poço, durante a própria queda, que descobrimos recursos internos que desconhecíamos possuir. O livro é um hino à capacidade humana de renascer das cinzas, transformar o sofrimento em sabedoria e usar o impacto do fundo para criar o impulso necessário para voar mais alto.',
    coreConcepts: [
      { title: 'Resiliência Ativa', desc: 'A capacidade de não se limitar a aguentar o golpe, mas de usar a própria energia da queda como propulsão para uma transformação positiva.' },
      { title: 'O Dom do Fundo do Poço', desc: 'Compreender que atingir o limite da dor elimina todas as ilusões e nos obriga a reconstruir a nossa vida com bases sólidas e verdadeiras.' },
      { title: 'A Ilusão do Controle', desc: 'Aceitar que há acontecimentos na vida que escapam totalmente ao nosso domínio e que a verdadeira liberdade reside na forma como escolhemos reagir.' },
      { title: 'Renascimento Pessoal', desc: 'O processo de transmutação onde a pessoa que sobrevive à crise já não é a mesma que entrou nela, saindo infinitamente mais forte e consciente.' }
    ],
    keyTakeaways: [
      'As quedas e os abanões violentos da vida não definem quem és de forma permanente; o que realmente importa é a coragem com que te reergues.',
      'É nos momentos de maior vulnerabilidade e desespero que descobres a verdadeira extensão da tua força interior.',
      'Nenhuma crise é eterna, por mais escura que pareça a noite; a luz recomeça sempre para quem se recusa a desistir.',
      'Sofrer faz parte do processo de crescimento, desde que escolhas aprender com a dor em vez de te deixares consumir por ela.'
    ],
    personalReview: 'Profundamente empoderador e com uma carga emocional gigante. Raul Minh\'alma consegue transformar temas difíceis como a dor, a perda e a desilusão numa mensagem de esperança pura e de superação. É um livro que nos faz olhar para os nossos próprios problemas com outra perspetiva, mostrando que mesmo quando tudo parece perdido, temos dentro de nós asas prontas para desdobrar. Uma leitura obrigatória para quem está a atravessar uma fase turbulenta.',
    authorBio: 'Romancista português aclamado pelo público, conhecido pelas suas histórias marcantes que unem o romance à superação e ao crescimento pessoal.',
    quotes: [
      { text: "É lá no fundo, quando já não nos resta mais nada a perder, que descobrimos que temos asas para voar.", page: 53 },
      { text: "As cicatrizes não são o sinal de uma fraqueza que ficou, mas sim a prova viva de uma batalha que venceste.", page: 129 },
      { text: "Não podes evitar que a vida te derrube, mas podes decidir o tempo que decides ficar no chão.", page: 191 },
      { text: "A coragem não é a ausência de medo, mas a decisão consciente de avançar apesar de saberes que podes cair.", page: 215 },
      { text: "Foram precisas as maiores tempestades para eu perceber a força imensa que sempre tive guardada cá dentro.", page: 270 }
    ],
    frameworks: [
      { name: "Mapeamento de Superação", desc: "Análise sistemática das forças e recursos mobilizados durante uma crise para criar um plano de reestruturação pessoal." },
      { name: "Auditoria de Danos e Oportunidades", desc: "Separar o que foi destruído pelo impacto da queda daquilo que foi limpo, abrindo espaço para construir bases mais autênticas." }
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
    favoriteChapter: 'Capítulo 18 - O Tempo Não Espera por Ninguém',
    executiveSummary: 'Uma reflexão intensa e urgente sobre a inegociável necessidade de valorizar quem amamos no presente, sem adiar afetos, desculpas ou demonstrações de carinho. Raul Minh\'alma aborda o perigo silencioso do orgulho, da hesitação e da mania de achar que o tempo é infinito. Através de uma narrativa sensível, o livro alerta para o facto de as oportunidades de amar e ser feliz com alguém terem um prazo de validade invisível, mostrando que o amor verdadeiro exige presença imediata, clareza e a coragem de não deixar para amanhã o que o coração grita para fazer hoje.',
    coreConcepts: [
      { title: 'A Urgência do Afeto', desc: 'A consciência de que o tempo é o recurso mais escasso e que adiar demonstrações de carinho é o caminho mais rápido para o arrependimento.' },
      { title: 'O Perigo do Orgulho', desc: 'Como o medo de baixar a guarda e os joguinhos de poder destroem relações que, no fundo, se baseiam num amor genuíno.' },
      { title: 'O Presente como Único Palco', desc: 'A premissa de que o passado já passou e o futuro é incerto; o único momento onde o amor pode ser vivido e provado é agora.' },
      { title: 'Clareza de Intenções', desc: 'A importância de parar com ambiguidades e assumir sem medo aquilo que sentimos por quem nos importa.' }
    ],
    keyTakeaways: [
      'Quem ama verdadeiramente não adia, não hesita por orgulho e não deixa para amanhã o carinho que pode dar hoje.',
      'O tempo dedicado a alguém é o bem mais precioso que podes oferecer; nunca o desperdices com trivialidades.',
      'O orgulho é o cemitério dos melhores amores; muitas relações acabam não por falta de sentimento, mas por excesso de silêncio.',
      'A vida muda num segundo e as pessoas não ficam à espera para sempre que decidas dar valor à presença delas.'
    ],
    personalReview: 'Uma chamada de atenção muito atual e profunda sobre a forma como gerimos o nosso tempo e as nossas relações. Raul Minh\'alma toca numa ferida sensível: o hábito humano de tomar as pessoas que amamos como garantidas. É um livro que mexe com a consciência, deixando uma mensagem clara de que o amor requer ação imediata e ausência de orgulho. Emocionante do princípio ao fim.',
    authorBio: 'Autor português de referência na área do romance e do desenvolvimento emocional, amplamente querido pelos leitores pela intensidade e verdade das suas palavras.',
    quotes: [
      { text: "Quem ama não adia e não deixa para amanhã o carinho que pode dar hoje.", page: 89 },
      { text: "O orgulho é um péssimo conselheiro que nos rouba os abraços que mais tarde vamos passar a vida a chorar.", page: 142 },
      { text: "As pessoas não são eternas e os sentimentos, se forem ignorados por muito tempo, acabam por se fartar de esperar.", page: 38 },
      { text: "Achas sempre que tens todo o tempo do mundo, até que o relógio da vida te mostra o contrário.", page: 201 },
      { text: "Se me amas, não te demores. O amor quer-se agora, na urgência bonita de quem sabe que o presente é tudo o que temos.", page: 255 }
    ],
    frameworks: [
      { name: "Protocolo de Presença", desc: "Técnica de atenção plena para estar 100% focado no interlocutor, eliminando distrações e priorizando quem está ao teu lado." },
      { name: "Auditoria de Orgulho", desc: "Avaliar situações de atrito ou silêncio para identificar se o afastamento se deve a motivos reais ou apenas a birras de ego." }
    ]
  }
];

// ==========================================
// ESTADO GLOBAL DE FILTROS POR ABA
// ==========================================
let currentCategoryFilter = 'All';
let currentVaultCategoryFilter = 'All';

// ==========================================
// 2. LÓGICA DE INICIALIZAÇÃO E NAVEGAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  
  // Renderizar dados iniciais
  renderBooks(INITIAL_BOOKS, currentCategoryFilter);
  renderVaultQuotes(INITIAL_BOOKS, currentVaultCategoryFilter);
  renderStats(INITIAL_BOOKS);
  renderHeroQuote();
  renderFiltersForTab('bookshelf'); // Começa na biblioteca

  // A. Sincronização de Abas com Scroll Inteligente
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

      // Renderizar os filtros corretos na controls-bar conforme a aba ativa
      renderFiltersForTab(targetTab);

      // SCROLL INTELIGENTE LIGEIRAMENTE MAIS ACIMA
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

  // B. Pesquisa Global
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      
      // Filtrar livros
      const filteredBooks = INITIAL_BOOKS.filter(b => 
        b.title.toLowerCase().includes(term) || 
        b.author.toLowerCase().includes(term) ||
        b.category.toLowerCase().includes(term)
      );
      
      const activeTab = document.querySelector('.view-section.active');
      if (activeTab && activeTab.id === 'view-vault') {
        renderVaultQuotes(filteredBooks, currentVaultCategoryFilter);
      } else {
        renderBooks(filteredBooks, currentCategoryFilter);
      }
    });
  }

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
// FUNÇÃO PARA GERIR FILTROS POR ABA NA CONTROLS-BAR
// ==========================================
function renderFiltersForTab(tab) {
  const filterPillsContainer = document.getElementById('filter-pills-container');
  if (!filterPillsContainer) return;

  const controlsBar = document.getElementById('controls-bar');
  if (controlsBar) controlsBar.style.display = 'flex';

  if (tab === 'bookshelf') {
    filterPillsContainer.style.display = 'flex';
    filterPillsContainer.innerHTML = `
      <button class="cat-pill ${currentCategoryFilter === 'All' ? 'active' : ''}" data-category="All">Todos</button>
      <button class="cat-pill ${currentCategoryFilter === 'Desenvolvimento Pessoal' ? 'active' : ''}" data-category="Desenvolvimento Pessoal">Desenvolvimento Pessoal</button>
      <button class="cat-pill ${currentCategoryFilter === 'Romance' ? 'active' : ''}" data-category="Romance">Romance</button>
    `;

    // Eventos para biblioteca
    filterPillsContainer.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        filterPillsContainer.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategoryFilter = pill.getAttribute('data-category');
        
        const searchInput = document.getElementById('search-input');
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        
        const baseBooks = INITIAL_BOOKS.filter(b => 
          b.title.toLowerCase().includes(term) || 
          b.author.toLowerCase().includes(term) ||
          b.category.toLowerCase().includes(term)
        );

        if (currentCategoryFilter === 'All') {
          renderBooks(baseBooks, 'All');
        } else {
          const filtered = baseBooks.filter(b => b.category.toLowerCase() === currentCategoryFilter.toLowerCase());
          renderBooks(filtered, currentCategoryFilter);
        }
      });
    });

  } else if (tab === 'vault') {
    filterPillsContainer.style.display = 'flex';
    filterPillsContainer.innerHTML = `
      <button class="cat-pill ${currentVaultCategoryFilter === 'All' ? 'active' : ''}" data-category="All">Todos</button>
      <button class="cat-pill ${currentVaultCategoryFilter === 'Desenvolvimento Pessoal' ? 'active' : ''}" data-category="Desenvolvimento Pessoal">Desenvolvimento Pessoal</button>
      <button class="cat-pill ${currentVaultCategoryFilter === 'Romance' ? 'active' : ''}" data-category="Romance">Romance</button>
    `;

    // Eventos para citações
    filterPillsContainer.querySelectorAll('.cat-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        filterPillsContainer.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentVaultCategoryFilter = pill.getAttribute('data-category');
        
        const searchInput = document.getElementById('search-input');
        const term = searchInput ? searchInput.value.toLowerCase() : '';
        
        const baseBooks = INITIAL_BOOKS.filter(b => 
          b.title.toLowerCase().includes(term) || 
          b.author.toLowerCase().includes(term) ||
          b.category.toLowerCase().includes(term)
        );

        renderVaultQuotes(baseBooks, currentVaultCategoryFilter);
      });
    });

  } else if (tab === 'stats') {
    // Na parte das métricas, removemos completamente a barra de controlos/pesquisa
    const controlsBar = document.getElementById('controls-bar');
    if (controlsBar) controlsBar.style.display = 'none';
  }
}

// ==========================================
// 3. FUNÇÕES DE RENDERIZAÇÃO
// ==========================================

function renderBooks(books, category = 'All') {
  const grid = document.getElementById('books-grid');
  if (!grid) return;
  
  const booksToRender = category === 'All' ? books : books.filter(b => b.category.toLowerCase() === category.toLowerCase());

  if (booksToRender.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum livro encontrado.</p>`;
    return;
  }

  grid.innerHTML = booksToRender.map(book => `
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

function renderVaultQuotes(books, category = 'All') {
  const vaultGrid = document.getElementById('quotes-grid');
  if (!vaultGrid) return;

  const booksToRender = category === 'All' ? books : books.filter(b => b.category.toLowerCase() === category.toLowerCase());

  let allQuotes = [];
  booksToRender.forEach(b => {
    b.quotes.forEach(q => {
      allQuotes.push({ text: q.text, page: q.page, bookTitle: b.title, author: b.author });
    });
  });

  if (allQuotes.length === 0) {
    vaultGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 40px;">Nenhuma citação encontrada para esta categoria.</p>`;
    return;
  }

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

  // 3. Configurar cliques nas abas internas do modal
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
