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
    executiveSummary: 'Uma obra visceral sobre resiliência humana e superação extrema. David Goggins expõe a sua transição radical: de uma infância marcada por abusos, pobreza, racismo e graves problemas de autoestima, até se transformar numa das figuras de resistência física e mental mais duras do planeta. O livro detalha o processo de como se tornou no único militar da história a concluir o treino dos SEALs da Marinha, dos Rangers do Exército e o curso de controladores tácticos da Força Aérea (TACP), além de competir em dezenas de ultramaratonas de elite. Mais do que uma autobiografia, funciona como um manual de engenharia comportamental para destruir a autocomiseração e calejar o caráter perante o sofrimento.',
    coreConcepts: [
      { title: 'A Regra dos 40%', desc: 'Quando o teu cérebro sinaliza que estás totalmente esgotado e queres desistir, na verdade atingiste apenas 40% da tua capacidade real.' },
      { title: 'Espelho do Escrutínio', desc: 'O hábito de confrontar diariamente as próprias falhas, medos e desculpas de forma crua e sem filtros visuais.' },
      { title: 'Pote de Biscoitos', desc: 'Técnica de resgate mental de vitórias e superações passadas para alimentar a resiliência em momentos de dor extrema.' },
      { title: 'Calos Mentais', desc: 'A mente fortalece-se exatamente da mesma forma que os músculos: através da repetição de esforço desconfortável e dor controlada.' },
      { title: 'A Caixa de Medo', desc: 'Enfrentar deliberadamente aquilo que mais evitas para retirar o poder que o medo exerce sobre as tuas decisões.' }
    ],
    keyTakeaways: [
      'A força mental constrói-se exclusivamente com ações desconfortáveis diárias.',
      'As origens e o passado não definem onde podes chegar com disciplina implacável.',
      'A motivação é passageira e inútil; o que sustenta o progresso de longo prazo é a responsabilidade intransigente.'
    ],
    personalReview: 'Uma leitura devastadora e transformadora pela total ausência de concessões. Goggins destrói o conceito de "zona de conforto" e obriga o leitor a olhar diretamente para as suas próprias desculpas, preguiça e vitimização. É um livro que desconforta porque expõe a verdade nua e crua: a maioria dos nossos limites autoproclamados são barreiras mentais falsas criadas pela nossa própria mente para nos proteger do esforço.',
    authorBio: 'Ex-SEAL da Marinha dos EUA, ultramaratonista de elite e referência global em resistência psicológica.',
    quotes: [
      { text: "Não pares quando estiveres cansado, para quando tiveres terminado.", page: 85 },
      { text: "A maior parte das pessoas desiste quando está apenas a 40% do seu potencial.", page: 142 },
      { text: "O sofrimento é o verdadeiro teste da vida. É a prova de fogo que separa quem tu és de quem podes tornar-te.", page: 112 },
      { text: "Estás a dar 100%? Se achas que sim, provavelmente estás apenas a dar 50%.", page: 204 },
      { text: "A accountability (responsabilidade extrema) é a única ferramenta que te obriga a olhar para o espelho sem aceitar desculpas.", page: 278 }
    ],
    frameworks: [
      { name: "Accountability Mirror", desc: "Registo diário de metas inegociáveis e confrontação visual direta no espelho sobre o cumprimento de responsabilidades." },
      { name: "Taking Souls Strategy", desc: "Técnica de excelência competitiva onde superas as expectativas de tal forma que dominas a adversidade e surpreendes os teus próprios críticos." },
      { name: "The Cookie Jar Method", desc: "Inventário psicológico de recordações de superação e dores passadas para utilizar como combustível sob pressão física ou mental extrema." },
      { name: "The After-Action Report (AAR)", desc: "Análise fria e metódica de cada falha ou fracasso diário, focando no que correu mal e em como corrigir no dia seguinte sem drama emocional." }
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
    executiveSummary: 'Um clássico e guia essencial sobre espiritualidade prática e gestão mental. Eckhart Tolle demonstra como a mente humana vive perpetuamente presa na ilusão do tempo, oscilando entre o remorso/saudosismo do passado e a ansiedade/expectativa do futuro. O livro detalha a mecânica do ego — o falso eu criado pela identificação com os pensamentos — e explica como alcançar um estado de presença consciente através da entrega ao momento presente. Mais do que uma reflexão teórica, a obra oferece um caminho prático para desarmar o ruído mental diário, cessar a criação de sofrimento desnecessário e aceder a uma perceção de clareza e paz profunda.',
    coreConcepts: [
      { title: 'Dissociação do Ego', desc: 'Compreender que tu não és a voz dentro da tua cabeça (os teus pensamentos), mas sim a consciência que os observa silenciosamente.' },
      { title: 'O Corpo de Dor', desc: 'A acumulação de energia emocional negativa e trauma do passado que procura perpetuar-se alimentando-se de novos conflitos mentais e relacionais.' },
      { title: 'A Ilusão do Tempo', desc: 'O passado é apenas uma memória e o futuro uma projeção mental; a única realidade tangível e acessível é sempre o momento presente.' },
      { title: 'Presença e Atenção Plena', desc: 'A capacidade de ancorar a atenção no "Aqui e Agora", neutralizando o hábito da mente de antecipar problemas inexistentes.' },
      { title: 'A Rendição (Surrender)', desc: 'Aceitar o momento presente exatamente como ele é antes de tomar qualquer ação, eliminando a resistência interna inútil.' }
    ],
    keyTakeaways: [
      'A ansiedade vive na antecipação do futuro e a mágoa no apego ao passado; a paz mental só existe no instante presente.',
      'A maior parte do sofrimento humano é criada pela própria mente devido à resistência involuntária ao que é.',
      'Observar os pensamentos sem os julgar é o primeiro passo definitivo para a libertação espiritual e emocional.'
    ],
    personalReview: 'Uma obra profundamente esclarecedora que funciona como um antídoto direto contra a sobrecarga mental moderna. Tolle desconstrói o hábito obsessivo de viver no futuro e ensina que o controlo emocional não vem de tentar manipular os pensamentos, mas de nos desligarmos da sua tirania. É um livro para ler devagar, reeler e praticar diariamente, pois altera radicalmente a forma como reagimos ao stresse, ao ruído externo e às nossas próprias dinâmicas internas.',
    authorBio: 'Escritor e professor espiritual germânico, referência em mindfulness.',
    quotes: [
      { text: "Nada aconteceu no passado; aconteceu no Agora. Nada acontecerá no futuro; acontecerá no Agora.", page: 41 },
      { text: "A causa principal da infelicidade nunca é a situação, mas os teus pensamentos sobre ela.", page: 78 },
      { text: "Tudo o que precisas de fazer é aceitar este momento plenamente. Então ficas em paz com o aqui e agora.", page: 102 },
      { text: "Não procurem a paz. Não procurem qualquer outro estado além daquele em que estão agora; caso contrário, estarão a criar conflito interno.", page: 135 },
      { text: "Consegues sentir o espaço interior do teu corpo? Sente a vida que flui dentro de ti. Isso ancora-te no presente.", page: 168 }
    ],
    frameworks: [
      { name: "O Observador Silencioso", desc: "Prática de pausar e assistir ao fluxo de pensamentos e julgamentos sem reagir ou identificar-se com eles." },
      { name: "Ancoragem no Corpo Interior (Inner Body)", desc: "Técnica de redirecionar a atenção mental para o interior do corpo físico (como a respiração) para desligar a ruminação mental." },
      { name: "Portal da Aceitação Ativa", desc: "Mecanismo de 3 etapas perante o desconforto: Aceitar o momento presente, Modificar a situação se possível, ou Afastar-se completamente da situação." },
      { name: "Desativação do Corpo de Dor", desc: "Identificar o surgimento súbito de irritação ou vitimização, reconhecê-lo como energia do passado e recusar alimentá-lo com novos pensamentos defensivos." }
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
    favoriteChapter: 'Capítulo 3 - A Verdade Sobre a Capacidade',
    executiveSummary: 'Uma investigação revolucionária na área da psicologia comportamental sobre como as nossas crenças fundamentais moldam todo o nosso percurso pessoal e profissional. Carol Dweck demonstra que as pessoas se dividem em duas mentalidades: a fixa (que vê a inteligência e o talento como traços imutáveis) e a de crescimento (que entende as capacidades como competências a desenvolver através do trabalho e da resiliência). O livro analisa o impacto destas abordagens na liderança, nos desportos de alta competição, nos relacionamentos e na educação, provando que a forma como encaramos o erro e o esforço determina os limites do nosso sucesso.',
    coreConcepts: [
      { title: 'Mindset Fixo vs. Crescimento', desc: 'Acreditar que o talento é nato e imutável vs. compreender que a inteligência e as habilidades são construídas com esforço e prática.' },
      { title: 'O Poder do "Ainda"', desc: 'Substituir a afirmação defensiva "não sei fazer isto" pela mentalidade de aprendizagem "ainda não sei fazer isto".' },
      { title: 'Reinterpretação do Erro', desc: 'Ver o fracasso não como um julgamento do teu valor ou capacidade, mas como informação direta e feedback para evoluir.' },
      { title: 'O Papel do Esforço', desc: 'No mindset fixo, o esforço é visto como um sinal de fraqueza; no mindset de crescimento, é o motor essencial que transforma potencial em mestria.' },
      { title: 'Foco no Processo vs. Resultado', desc: 'Valorizar a constância, a estratégia e a dedicação diária em vez de procurar validação externa apenas pelo resultado final.' }
    ],
    keyTakeaways: [
      'O esforço contínuo e a estratégia correta são os elementos reais que transformam potencial bruto em mestria.',
      'Elogiar o talento nato gera fragilidade mental; elogiar o processo e a dedicação constrói resiliência.',
      'O mindset não é um traço de personalidade permanente, mas uma escolha consciente que pode ser treinada diariamente.'
    ],
    personalReview: 'Uma obra indispensável para redefinir a nossa relação com falhas, aprendizagem e evolução pessoal. O livro destrói o mito do "dom natural" e obriga-nos a assumir o controlo do nosso desenvolvimento. É uma leitura extremamente prática para desconstruir o medo do julgamento e focar a energia onde realmente importa: no progresso diário.',
    authorBio: 'Professora de Psicologia na Universidade de Stanford e uma das maiores especialistas mundiais em motivação e desenvolvimento humano.',
    quotes: [
      { text: "Por que perder tempo a provar que és ótimo quando podes estar a melhorar?", page: 16 },
      { text: "A mão que te é dada ao nascer é apenas o ponto de partida para o jogo.", page: 42 },
      { text: "No mindset de crescimento, os desafios são estimulantes em vez de ameaçadores.", page: 95 },
      { text: "O fracasso é um evento, não uma identidade. Ontem falhaste, mas hoje podes aprender.", page: 158 },
      { text: "Tornar-se é melhor do que ser. O foco deve estar sempre na evolução, não na perfeição estática.", page: 210 }
    ],
    frameworks: [
      { name: "Avaliação Orientada ao Processo", desc: "Sistema de medição de performance diária baseado no esforço, na disciplina e no foco mantido, em vez de métricas superficiais." },
      { name: "O Filtro do 'Ainda' (Yet Framework)", desc: "Técnica de reestruturação cognitiva que adiciona a palavra 'ainda' a qualquer bloqueio ou incapacidade temporária." },
      { name: "Análise Pós-Fracasso (Post-Failure Audit)", desc: "Processo de desconstrução imediata do erro para extrair 3 lições táticas sem permitir a paralisia pelo julgamento pessoal." },
      { name: "Transição Ativa de Mindset", desc: "Mapeamento em 4 passos: Identificar o gatilho do mindset fixo, Reconhecer a voz defensiva, Responder com o mindset de crescimento e Tomar uma ação desconfortável." }
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
    executiveSummary: 'Um manual prático e estruturado de inteligência social e comunicação interpessoal. Nicholas Boothman explora a ciência por trás da primeira impressão, demonstrando que as pessoas decidem se gostam e se confiam em ti nos primeiros segundos de qualquer interação. Baseando-se em conceitos de Programação Neurolinguística (PNL) e psicologia comportamental, o livro ensina a dominar a linguagem corporal, o tom de voz e a sintonia não-verbal para criar conexões autênticas e instantâneas em qualquer ambiente, seja profissional ou pessoal.',
    coreConcepts: [
      { title: 'Rapport Instantâneo', desc: 'A arte de criar sintonia imediata espelhando subtilmente a linguagem corporal, a postura e o ritmo de voz do interlocutor.' },
      { title: 'Abertura Consciente', desc: 'Eliminar barreiras físicas inconscientes (como braços cruzados) para projetar disponibilidade e confiança logo no primeiro contacto.' },
      { title: 'Os Sistemas de Representação Sensorial', desc: 'Compreender se a pessoa com quem falas processa mais o mundo através do canal visual, auditivo ou cinestésico, adaptando a comunicação.' },
      { title: 'Intenção e Atitude', desc: 'Entrar em qualquer sala ou reunião com uma atitude mental positiva e aberta, pois a energia emocional é transmitida antes de qualquer palavra.' },
      { title: 'Sincronia de Ritmo', desc: 'Ajustar a cadência e o tom de fala para gerar harmonia e conforto inconsciente na outra pessoa.' }
    ],
    keyTakeaways: [
      'A primeira impressão forma-se em segundos e estabelece a fundação inegociável de toda a relação futura.',
      'A comunicação eficaz depende muito mais de como te comportas e ages (linguagem não-verbal) do que propriamente do que dizes.',
      'A empatia prática treina-se através da observação atenta e do alinhamento intencional com o outro.'
    ],
    personalReview: 'Uma leitura extremamente útil, direta e altamente acionável sobre dinâmica social. Boothman retira o misticismo da simpatia e transforma a capacidade de criar conexões numa competência mecânica e observável. É um excelente guia para eliminar a timidez excessiva, melhorar a postura relacional e dominar a arte de causar um impacto positivo imediato.',
    authorBio: 'Especialista em PNL, consultor de comunicação e antigo fotógrafo de moda internacional.',
    quotes: [
      { text: "A chave para a persuasão não é o que dizes, mas a confiança que inspiras.", page: 88 },
      { text: "As pessoas decidem se gostam de ti nos primeiros segundos. A partir daí, apenas procuram justificações para confirmar essa primeira impressão.", page: 24 },
      { text: "A linguagem corporal fala muito mais alto do que as palavras. Se o corpo diz uma coisa e a voz diz outra, acreditamos no corpo.", page: 65 },
      { text: "O segredo para influenciar os outros é fazê-los sentir seguros e compreendidos na tua presença.", page: 112 },
      { text: "Atitude é tudo: entra em qualquer interação como se já fosses amigo da pessoa.", page: 145 }
    ],
    frameworks: [
      { name: "Fórmula de 90 Segundos", desc: "Sequência de abertura infalível: Atitude mental positiva, Olhar direto e recíproco, Sorriso genuíno, Aperto de mão firme e Inclinação leve do corpo." },
      { name: "Mirroring & Matching (Espelhamento)", desc: "Técnica controlada de reproduzir subtilmente micro-movimentos e posturas para acelerar o processo de empatia e confiança mútua." },
      { name: "Auditoria de Canais Sensoriais", desc: "Método de identificar palavras-chave utilizadas pelo interlocutor (ver, ouvir, sentir) para espelhar o seu canal de pensamento principal." },
      { name: "Checklist de Presença Social", desc: "Rotina pré-interação para desbloquear a linguagem corporal fechada, relaxar os ombros e projetar uma postura de autoridade acessível." }
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
    executiveSummary: 'Um romance emotivo e profundamente melancólico sobre a linha ténue entre a amizade de longa data e o amor romântico. A narrativa acompanha a ligação umbilical entre melhores amigos que, apesar da cumplicidade inegável, tropeçam nas barreiras do medo, das convenções e do timing imperfeito. Laura Nowlin explora de forma visceral o impacto devastador das palavras retidas e das escolhas adiadas, culminando num retrato doloroso sobre como o silêncio pode custar o futuro que mais se desejava.',
    coreConcepts: [
      { title: 'Vulnerabilidade Urgente', desc: 'A necessidade imperativa de expressar sentimentos verdadeiros antes que as circunstâncias externas tornem o diálogo impossível.' },
      { title: 'O Preço do Timing', desc: 'A realidade implacável de que o amor não correspondido no momento certo pode perder-se irremediavelmente nas voltas do tempo.' },
      { title: 'A Zona de Segurança da Amizade', desc: 'O dilema de manter o conforto de uma relação segura em detrimento do risco de arriscar tudo por uma paixão profunda.' },
      { title: 'Consequências do Silêncio', desc: 'Como reprimir verdades emocionais por medo de rejeição gera um efeito dominó de desvios trágicos nas trajetórias de vida.' }
    ],
    keyTakeaways: [
      'Nunca guardes palavras afetuosas ou confissões cruciais por medo do risco; o peso do silêncio custa sempre o futuro.',
      'O tempo e as oportunidades não são infinitos; adiar o que sentimos pode custar a pessoa que mais importa.',
      'As escolhas que deixamos de fazer moldam a nossa realidade de forma tão definitiva quanto as decisões que tomamos.'
    ],
    personalReview: 'Uma história dolorosamente emocionante que nos confronta com a fragilidade das relações humanas. O livro destaca-se pela honestidade brutal com que retrata os arrependimentos amorosos, mostrando que a ausência de coragem para falar a tempo é, muitas vezes, a maior ferida que podemos infligir a nós próprios e a quem amamos.',
    authorBio: 'Autora norte-americana de romances de jovem adulto e ficção contemporânea, conhecida pela intensidade emocional das suas obras.',
    quotes: [
      { text: "Se eu lhe tivesse dito que o amava, talvez o mundo não tivesse mudado de rumo.", page: 115 },
      { text: "Há coisas que passam uma vida inteira por dizer, até ser tarde demais para encontrar ouvidos.", page: 82 },
      { text: "O medo de perder a amizade fez-nos perder tudo o resto pelo caminho.", page: 204 },
      { text: "O silêncio não protege ninguém; apenas prolonga a agonia do inevitável.", page: 271 }
    ],
    frameworks: [
      { name: "Análise do Custo do Silêncio", desc: "Ferramenta de introspeção para avaliar o preço emocional de reprimir conversas cruciais por conveniência ou medo." },
      { name: "Auditoria de Risco Afetivo", desc: "Método de pesar o risco imediato da rejeição face ao arrependimento perpétuo de nunca tentar." },
      { name: "Mapeamento de Oportunidades Perdidas", desc: "Exercício de conscienciação para identificar padrões de recuo emocional em momentos decisivos de comunicação." }
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
    executiveSummary: 'Um clássico absoluto das finanças pessoais que desafia os paradigmas tradicionais sobre o dinheiro, o trabalho e a riqueza. Robert Kiyosaki contrasta os ensinamentos e mentalidades opostas de duas figuras centrais da sua juventude: o seu próprio pai (o "Pai Pobre", altamente instruído mas financeiramente estagnado) e o pai do seu melhor amigo (o "Pai Rico", um empresário autodidata e multimilionário). O livro desconstrói o mito de que é preciso ter um salário elevado para ficar rico, focando-se na importância crucial da literacia financeira, na distinção matemática entre ativos e passivos, e na necessidade de fazer o dinheiro trabalhar para ti em vez de passares a vida a trabalhar pelo dinheiro.',
    coreConcepts: [
      { title: 'Ativos vs. Passivos', desc: 'A regra fundamental: ativos colocam dinheiro no teu bolso (ex: investimentos, propriedades geradoras de rendimento); passivos tiram dinheiro do teu bolso (ex: dívidas de consumo, carros caros).' },
      { title: 'A Corrida dos Ratos (Rat Race)', desc: 'O ciclo perpétuo de trabalhar para pagar contas, obter um aumento, aumentar o estilo de vida e voltar a ficar sem liquidez.' },
      { title: 'Trabalhar para Aprender vs. Trabalhar pelo Salário', desc: 'A prioridade de adquirir competências cruciais como vendas, gestão e contabilidade em vez de procurar apenas estabilidade salarial imediata.' },
      { title: 'A Importância da Empresa Própria', desc: 'Utilizar veículos empresariais e estruturas legais para otimizar a carga fiscal e proteger o património.' },
      { title: 'Gestão de Risco vs. Medo', desc: 'Compreender que o maior risco financeiro não é investir, mas sim a ignorância financeira e a inércia perante a inflação.' }
    ],
    keyTakeaways: [
      'Os ricos compram ativos que geram rendimento; os pobres e a classe média acumulam passivos pensando que são ativos.',
      'A educação escolar tradicional ensina a ser um excelente empregado, mas ignora completamente a educação financeira prática.',
      'As emoções do medo e da ganância controlam a maioria das decisões financeiras, mantendo as pessoas presas no ciclo do salário.'
    ],
    personalReview: 'Uma obra fundamental que muda radicalmente a perceção sobre dinheiro, riqueza e investimento. Kiyosaki retira o romantismo do emprego tradicional e expõe a crueldade matemática da "corrida dos ratos". É um livro essencial para redefinir prioridades, eliminar despesas fúteis e começar a construir ativos de forma estratégica e disciplinada.',
    authorBio: 'Empresário, investidor, orador e autor aclamado internacionalmente no ensino da educação financeira.',
    quotes: [
      { text: "Os ricos fazem o dinheiro trabalhar para eles.", page: 35 },
      { text: "O ativo mais poderoso que temos é a nossa mente. Se for bem treinada, pode criar enorme riqueza.", page: 72 },
      { text: "Os pobres e a classe média trabalham pelo dinheiro. Os ricos têm o dinheiro a trabalhar para eles.", page: 48 },
      { text: "Não se trata de quanto dinheiro ganhas, mas de quanto dinheiro guardas e de quão duramente ele trabalha para ti.", page: 110 },
      { text: "O medo de perder dinheiro é real. Todos o sentem. Mas o problema não é ter medo; é como lidas com esse medo.", page: 165 }
    ],
    frameworks: [
      { name: "Fluxo de Caixa Pessoal (Cashflow Mapping)", desc: "Mapeamento rigoroso e transparente entre as fontes de rendimento passivo e as despesas reais para identificar desvios financeiros." },
      { name: "Auditoria de Ativos vs. Passivos", desc: "Inventário trimestral implacável para separar o que realmente coloca dinheiro no bolso daquilo que apenas gera custos de manutenção." },
      { name: "O Quadrante do Fluxo de Caixa", desc: "Framework mental para identificar a tua posição económica atual: Empregado (E), Autónomo (A), Dono de Empresa (D) ou Investidor (I)." },
      { name: "Estratégia de Reinvestimento de Capital", desc: "Método de alocação de lucros gerados por ativos para comprar novos ativos, gerando um efeito de juros compostos financeiros." }
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
    favoriteChapter: 'Capítulo 3 - A Libertação do Julgamento',
    executiveSummary: 'Um manifesto assertivo e apaixonado sobre a urgência do amor-próprio, da autoaceitação e do resgate da autenticidade individual. Gustavo Santos desconstrói o condicionamento social que nos ensina a procurar validação externa e a colocar as expectativas dos outros acima da nossa própria felicidade. O livro funciona como uma chamada de atenção para que o leitor assuma a responsabilidade do seu bem-estar emocional, imponha limites saudáveis nas suas relações e tenha a coragem de viver de acordo com a sua verdade mais profunda, sem medo de julgamentos ou rejeição.',
    coreConcepts: [
      { title: 'Amor-Próprio Intransigente', desc: 'Priorizar o próprio bem-estar emocional e mental como fundação inegociável para conseguir amar e respeitar os outros.' },
      { title: 'Desconexão da Aprovação Externa', desc: 'Compreender que o teu valor pessoal não depende da validação, opinião ou expetativas da sociedade ou de terceiros.' },
      { title: 'A Libertação do Julgamento', desc: 'Deixar de julgar os outros e, acima de tudo, libertar-se da autocrítica destrutiva que paralisa a evolução pessoal.' },
      { title: 'Responsabilidade Emocional', desc: 'Reconhecer que somos os únicos responsáveis pela nossa felicidade e pela paz interna que cultivamos diariamente.' },
      { title: 'Fidelidade à Verdade Pessoal', desc: 'Viver de forma autêntica e transparente, alinhando escolhas e comportamentos com os teus valores reais.' }
    ],
    keyTakeaways: [
      'Só podes oferecer ao mundo a paz, o respeito e o amor que já cultivas dentro de ti.',
      'Dizer "não" aos outros quando necessário é, na verdade, dizer "sim" a ti próprio e aos teus limites.',
      'A aprovação dos outros é uma ilusão inconstante; a verdadeira estabilidade vem do respeito próprio.'
    ],
    personalReview: 'Uma leitura incisiva e frontal que funciona como um despertar para a importância da autoestima. O tom direto do autor elimina panos quentes e desafia o leitor a olhar para as suas dependências emocionais. É um livro prático para quem precisa de impor limites, libertar-se da culpa social e tomar o controlo da sua própria vida.',
    authorBio: 'Escritor, palestrante motivacional e autor bestseller português focado em desenvolvimento pessoal e inteligência emocional.',
    quotes: [
      { text: "Quando te amas, deixas de procurar a aprovação do mundo.", page: 48 },
      { text: "Não vieste a este mundo para corresponder às expectativas de ninguém a não ser às tuas.", page: 85 },
      { text: "O amor por ti é o início de qualquer revolução pessoal. Sem ele, serás sempre refém da opinião alheia.", page: 112 },
      { text: "Dizer não a quem te desrespeita é o maior ato de amor que podes ter por ti próprio.", page: 140 },
      { text: "A paz interior começa no momento em que escolhes não permitir que outra pessoa ou evento controle as tuas emoções.", page: 175 }
    ],
    frameworks: [
      { name: "Filtro de Aprovação", desc: "Técnica de reflexão para desconectar o valor pessoal da opinião alheia, questionando: 'Estou a fazer isto por mim ou para ser aceite?'" },
      { name: "Protocolo de Limites Inegociáveis", desc: "Mapeamento claro das atitudes e comportamentos externos que não vais tolerar na tua rotina e relações." },
      { name: "Auditoria de Autenticidade", desc: "Exercício periódico para avaliar em que áreas da vida estás a ceder à pressão externa em detrimento da tua verdade." },
      { name: "Ritual de Afirmação Diária", desc: "Prática de reforço de autoaceitação para substituir o diálogo interno crítico por convicção e autonomia." }
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
    favoriteChapter: 'Capítulo 5 - Tu És o Que Fazes',
    executiveSummary: 'Um manifesto prático, direto e sem filtros sobre como destruir a autossabotagem, silenciar o diálogo interno limitador e assumir o controlo absoluto da própria vida através da ação implacável. Gary John Bishop combina uma abordagem urbana e estoica para atacar a mentalidade de vítima, desafiando o leitor a parar de dar desculpas e a perceber que a inércia é uma escolha consciente. O livro serve como um choque de realidade para redefinir a responsabilidade pessoal, provando que tu és o único arquiteto e o único obstáculo do teu próprio destino.',
    coreConcepts: [
      { title: 'Ação sem Motivação', desc: 'Compreender que a motivação surge frequentemente depois da ação, e não antes; fazer o que tem de ser feito independentemente da disposição ou do ânimo.' },
      { title: 'Desconstrução da Autossabotagem', desc: 'Reconhecer como as histórias falsas que contas a ti próprio mantêm-te preso na mediocridade e no conforto estéril.' },
      { title: 'Identidade baseada em Ações', desc: 'Tu não és definido pelas tuas intenções, pensamentos ou desejos secretos, mas estritamente pelas ações concretas que executas todos os dias.' },
      { title: 'Incerteza como Aliada', desc: 'Aceitar o desconforto e o caos inerentes à mudança em vez de procurar garantias absolutas para começar a agir.' },
      { title: 'Interrupção do Ciclo de Queixume', desc: 'Eliminar o hábito destrutivo de culpar fatores externos, o passado ou terceiros pelos resultados da tua própria vida.' }
    ],
    keyTakeaways: [
      'Ninguém te está a impedir de avançar a não ser tu próprio e as desculpas que aceitas tolerar.',
      'Esperar pelo momento perfeito ou pela vontade de agir é uma estratégia de procrastinação disfarçada.',
      'A clareza mental e a autoconfiança não aparecem por magia; constroem-se através do atrito da execução diária.'
    ],
    personalReview: 'Uma leitura crua, incisiva e altamente motivadora, excelente para desbloquear hesitações e cortar pela raiz a autopiedade. Bishop não usa panos quentes nem frases feitas de autoajuda barata; ele confronta o leitor com a dura realidade de que a inação é uma responsabilidade pessoal. É um livro direto ao osso, ideal para sacudir a apatia e forçar a execução.',
    authorBio: 'Coach de desenvolvimento pessoal de renome internacional, com uma abordagem direta, pragmática e fundamentada em princípios estoicos.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 },
      { text: "Não és aquilo que dizes que vais fazer; és aquilo que fazes efetivamente.", page: 54 },
      { text: "A tua mente é uma máquina de criar desculpas. A tua função é calá-la e agir.", page: 88 },
      { text: "Para de esperar que o mundo mude para começares a viver os teus objetivos.", page: 120 },
      { text: "O sofrimento de fazer o trabalho é infinitamente menor do que o arrependimento de não ter feito nada.", page: 162 }
    ],
    frameworks: [
      { name: "Afirmações Operacionais (Unfuck Yourself Axioms)", desc: "Substituição do diálogo interno passivo por declarações de comando e certezas de execução diária (ex: 'Eu agirei independentemente do medo')." },
      { name: "Auditoria de Desculpas", desc: "Processo de escrutínio implacável para identificar e desmantelar as narrativas de vitimização usadas para justificar a inércia." },
      { name: "O Princípio da Execução Cega", desc: "Método de suprimir o debate mental perante uma tarefa difícil e avançar diretamente para a ação nos primeiros 5 segundos." },
      { name: "Inventario de Controlo Pessoal", desc: "Framework estoica para separar categoricamente o que depende exclusivamente das tuas ações daquilo que é ruído externo irrelevante." }
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
    executiveSummary: 'Um romance emocionante e profundamente catártico sobre o fim de uma relação amorosa e a dolorosa, mas necessária, jornada de redescoberta pessoal. Raul Minh\'alma aborda a desconstrução de laços afetivos que se tornaram sufocantes, mostrando que a separação, apesar do luto inicial, pode ser o catalisador definitivo para recuperar a autonomia, a dignidade e a própria identidade. A narrativa explora com sensibilidade o processo de transformar o desgosto e o vazio emocional em combustível para o crescimento e a soberania individual.',
    coreConcepts: [
      { title: 'Reencontro Consigo', desc: 'O processo essencial de aprender a desfrutar da própria companhia e recuperar paixões e objetivos deixados para trás.' },
      { title: 'A Rutura como Libertação', desc: 'Compreender que nem todas as perdas são tragédias; muitas funcionam como cortes cirúrgicos necessários para salvar a nossa saúde mental.' },
      { title: 'Desapego Emocional', desc: 'A difícil arte de soltar o passado e parar de investir energia numa história que já esgotou o seu propósito de evolução.' },
      { title: 'Soberania Pessoal', desc: 'Reconstruir a autoestima sem depender da validação ou da presença de um parceiro para encontrar sentido na vida.' }
    ],
    keyTakeaways: [
      'Nem todas as partidas representam perdas definitivas; muitas são, na verdade, libertações para uma vida mais autêntica.',
      'Perder alguém que já não nos respeita ou acrescenta é, frequentemente, a única forma de evitar perder-nos a nós próprios.',
      'O sofrimento de uma rutura ensina mais sobre os nossos limites e valor do que anos de conforto numa relação estagnada.'
    ],
    personalReview: 'Uma história profundamente comovente e realista sobre a arte de sarar feridas e transformar desamor em crescimento pessoal. O livro destaca-se pela clareza com que retrata o luto de uma separação, provando que fechar ciclos dolorosos abre espaço para a melhor versão de nós mesmos.',
    authorBio: 'Um dos autores portugueses de ficção contemporânea mais lidos e aclamados da atualidade, especializado em romance e dinâmica emocional.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios.", page: 62 },
      { text: "O fim de um amor não é o fim da vida; é muitas vezes o princípio de quem realmente somos.", page: 94 },
      { text: "Demorei a perceber que ficar onde já não era amado estava a custar-me a minha própria luz.", page: 155 },
      { text: "A solidão assusta, mas a companhia errada consome-nos por dentro de forma irreversível.", page: 210 }
    ],
    frameworks: [
      { name: "Inventário de Autonomia", desc: "Processo estruturado de reconstrução de objetivos, identidade e projetos individuais no pós-rutura." },
      { name: "Auditoria de Custos Afetivos", desc: "Avaliação honesta do desgaste emocional suportado face ao benefício real de manter uma relação moribunda." },
      { name: "Plano de Reconstrução do Eu", desc: "Guia prático para redirecionar o foco do vazio deixado pelo outro para a criação de novos hábitos e metas pessoais." }
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
    executiveSummary: 'Uma narrativa sensível e envolvente sobre a imprevisibilidade absoluta do afeto e a necessidade urgente de superar as defesas emocionais. Raul Minh\'alma explora como o amor genuíno surge muitas vezes quando menos esperamos, desarmando armaduras criadas por deceções passadas. O livro aborda o conflito interno entre o medo de sofrer novamente e a coragem necessária para baixar a guarda e permitir uma entrega emocional verdadeira.',
    coreConcepts: [
      { title: 'Entrega Genuína', desc: 'A coragem de viver os sentimentos por inteiro, sem reservas, cálculos ou medos defensivos.' },
      { title: 'A Imprevisibilidade do Destino', desc: 'Compreender que as conexões mais profundas e transformadoras da nossa vida raramente são planeadas.' },
      { title: 'Desmantelamento de Defesas', desc: 'Reconhecer que os muros emocionais construídos para nos proteger acabam por nos isolar daqueles que nos querem bem.' },
      { title: 'Coragem de Sentir', desc: 'Aceitar a vulnerabilidade como parte essencial de qualquer relação autêntica e duradoura.' }
    ],
    keyTakeaways: [
      'Os melhores encontros e as histórias mais marcantes são sempre aqueles que surgem sem qualquer planeamento prévio.',
      'Proteger o coração de forma excessiva impede-te não só de sofrer, mas também de viver o melhor que a vida tem para oferecer.',
      'O amor verdadeiro exige a coragem de expor as fragilidades sem garantias absolutas.'
    ],
    personalReview: 'Um romance leve, inspirador e profundamente humano sobre a superação de resguardos emocionais. O autor consegue traduzir de forma simples a complexidade de nos abrimos ao outro após cicatrizes passadas, tornando a leitura cativante e reflexiva.',
    authorBio: 'Autor bestseller português de literatura sentimental e contemporânea, reconhecido pela sensibilidade com que retrata as relações afetivas.',
    quotes: [
      { text: "O amor acontece quando deixamos o coração aberto, sem mapas nem perspetivas.", page: 77 },
      { text: "Passamos a vida a tentar controlar o destino, esquecendo-nos de que as melhores coisas nos atropelam por surpresa.", page: 64 },
      { text: "Construímos muralhas tão altas para nos proteger da dor que acabamos por trancar a felicidade do lado de fora.", page: 128 },
      { text: "Amar exige uma coragem imensa: a coragem de aceitar que a outra pessoa pode mudar o nosso mundo.", page: 195 }
    ],
    frameworks: [
      { name: "Desarmamento Afetivo", desc: "Processo consciente de eliminar barreiras defensivas e rigidez emocional em novas conexões." },
      { name: "Auditoria de Resguardos", desc: "Método para identificar que medos ou traumas passados estão a sabotar a abertura a novos afetos no presente." },
      { name: "Prática da Vulnerabilidade Consciente", desc: "Exercício de permitir a partilha emocional sem tentar antecipar ou controlar o desfecho da relação." }
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
    executiveSummary: 'Uma obra marcante sobre resiliência profunda, dor emocional e renascimento pessoal perante os momentos mais críticos da vida. Raul Minh\'alma explora a forma como as maiores crises e desilusões — as verdadeiras "quedas" — podem ser transformadas no ponto de viragem para encontrar a verdadeira força interior. O livro desafia a perspetiva tradicional do sofrimento, mostrando que é precisamente nos momentos de maior vulnerabilidade que construímos as ferramentas necessárias para evoluir e redefinir o nosso caminho.',
    coreConcepts: [
      { title: 'Resiliência Ativa', desc: 'A capacidade não só de resistir à adversidade, mas de utilizar o impacto da queda como impulso direto para o crescimento.' },
      { title: 'A Força das Cicatrizes', desc: 'Compreender que as marcas deixadas pelo sofrimento passado não são fraquezas, mas sim testemunhos de superação e maturidade.' },
      { title: 'Renascimento Pessoal', desc: 'O processo de reconstruir a identidade e o propósito de vida após a demolição de expectativas antigas.' },
      { title: 'Gestão da Crise Emocional', desc: 'Encarar o fundo do poço não como um fim absoluto, mas como a base firme necessária para recomeçar.' }
    ],
    keyTakeaways: [
      'As quedas e os fracassos não definem quem és; o que determina o teu valor é a forma como escolhes levantar-te.',
      'Muitas vezes, é preciso perder estabilidade e certezas para descobrir os recursos internos que nem sabias que tinhas.',
      'O sofrimento traz uma clareza impiedosa que nos obriga a abandonar o supérfluo e a focar no que realmente importa.'
    ],
    personalReview: 'Um livro profundamente humano, comovente e empoderador sobre a aceitação de cicatrizes e a superação de crises. O autor transmite uma mensagem clara: por mais violenta que seja a queda, a capacidade de reerguer-te e voar depende exclusivamente da tua coragem de transformar a dor em evolução.',
    authorBio: 'Romancista português aclamado, amplamente reconhecido pelas suas obras focadas em superação pessoal, desenvolvimento emocional e ficção contemporânea.',
    quotes: [
      { text: "É lá no fundo que descobres que tens asas para voar.", page: 53 },
      { text: "Ninguém sai de uma grande tempestade exatamente igual à pessoa que entrou. Ou ficamos soterrados, ou aprendemos a usar o vento.", page: 88 },
      { text: "As cicatrizes não lembram apenas a dor que sentiste; provam que foste mais forte do que aquilo que tentou destruir-te.", page: 142 },
      { text: "Perder o rumo é muitas vezes a única forma de começarmos a procurar o nosso verdadeiro destino.", page: 215 }
    ],
    frameworks: [
      { name: "Mapeamento de Superação", desc: "Registo e análise metódica das forças internas mobilizadas durante os momentos de crise para usar como âncora no futuro." },
      { name: "Auditoria de Danos e Recursos", desc: "Método para inventariar o que perdeste numa fase difícil versus as competências e resiliência que ganhaste no processo." },
      { name: "Plano de Transição Pós-Queda", desc: "Framework prática para redefinir prioridades e construir uma nova direção após uma rutura drástica na rotina ou nos afetos." }
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
    executiveSummary: 'Uma reflexão profunda e tocante sobre a fragilidade da vida e a urgência inegociável de valorizar quem amamos no presente. Raul Minh\'alma aborda o perigo de dar as pessoas por garantidas e de adiar a demonstração de afeto para um amanhã incerto. O romance explora como a rotina, o orgulho e a ilusão de que teremos sempre tempo acabam por afastar quem mais importa, reforçando a premissa de que o amor verdadeiro exige presença, atenção imediata e a coragem de amar sem hesitações.',
    coreConcepts: [
      { title: 'Urgência do Afeto', desc: 'Compreender que o tempo é limitado e que não devemos adiar a demonstração de carinho e atenção para o futuro.' },
      { title: 'Presença Consciente', desc: 'Estar inteiramente disponível e dedicado no momento presente a quem nos acompanha na vida.' },
      { title: 'Desconstrução do Orgulho', desc: 'Superar picuinhas e amarguras superficiais em prol de preservar e fortalecer as relações essenciais.' },
      { title: 'Valorização do Insubstituível', desc: 'Reconhecer que o tempo e a atenção dedicada a quem amamos são os bens mais valiosos e finitos que possuímos.' }
    ],
    keyTakeaways: [
      'O tempo dedicado a alguém é o bem mais precioso e irrecuperável que podes oferecer.',
      'Quem ama não deixa para amanhã o carinho, a presença e o abraço que pode dar hoje.',
      'A maior tragédia nas relações não é a falta de amor, mas sim o adiamento sistemático da sua demonstração.'
    ],
    personalReview: 'Uma mensagem fundamental e extremamente atual sobre viver o amor com entrega imediata. O livro funciona como uma chamada de atenção para despertarmos da dormência da rotina e valorizarmos as pessoas essenciais na nossa vida antes que seja tarde demais.',
    authorBio: 'Destacado autor português de ficção contemporânea e desenvolvimento emocional, focado nas dinâmicas dos afetos e na inteligência interpessoal.',
    quotes: [
      { text: "Quem ama não adia e não deixa para amanhã o carinho que pode dar hoje.", page: 89 },
      { text: "O tempo é a única coisa que quando se perde nunca mais se recupera. Dá o teu tempo a quem merece.", page: 124 },
      { text: "Não tenhas pressa de viver a vida, mas tem urgência em amar quem está ao teu lado.", page: 168 },
      { text: "Guardar palavras de amor é como guardar flores no escuro: acabam por murchar sem que ninguém as veja.", page: 210 }
    ],
    frameworks: [
      { name: "Auditoria do Tempo Afetivo", desc: "Avaliação metódica da qualidade e quantidade de tempo efetivamente dedicado às pessoas essenciais na tua vida." },
      { name: "Protocolo de Presença Imediata", desc: "Prática diária de eliminar distrações e estar 100% focado no interlocutor durante momentos de partilha afetiva." },
      { name: "Eliminação de Hesitações Afetivas", desc: "Exercício de expressar sentimentos e gratidão no exato momento em que surgem, sem ceder ao orgulho ou à vergonha." }
    ]
  }
];

let activeTab = 'bookshelf';
let selectedCategory = 'All';
let searchQuery = '';
let selectedBook = null;
let bookModalTab = 'overview';

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

function setupNavigation() {
  const desktopBtns = document.querySelectorAll('.desktop-nav-btn');

  function switchTab(tabName) {
    activeTab = tabName;
    desktopBtns.forEach(btn => {
      if (btn.dataset.tab === tabName) btn.classList.add('active');
      else btn.classList.remove('active');
    });

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const targetSection = document.getElementById(`view-${tabName}`);
    if (targetSection) targetSection.classList.add('active');

    const controlsBar = document.getElementById('controls-bar');
    if (controlsBar) {
      controlsBar.style.display = (tabName === 'stats') ? 'none' : 'flex';
    }
  }

  desktopBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

function renderHeroQuote() {
  if (!allQuotes.length) return;
  const randomQ = allQuotes[Math.floor(Math.random() * allQuotes.length)];
  const heroText = document.getElementById('hero-quote-text');
  const heroAuthor = document.getElementById('hero-quote-author');
  
  if (heroText) heroText.textContent = `"${randomQ.quote}"`;
  if (heroAuthor) heroAuthor.innerHTML = `— <span class="text-light font-medium">${randomQ.author}</span>, ${randomQ.bookTitle}`;
}

function setupFiltersAndSearch() {
  const catPills = document.querySelectorAll('.cat-pill');
  const searchInput = document.getElementById('search-input');

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedCategory = pill.dataset.category;
      renderBookshelf();
      renderVault();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderBookshelf();
      renderVault();
    });
  }
}

function renderBookshelf() {
  const grid = document.getElementById('books-grid');
  if (!grid) return;
  
  const filtered = INITIAL_BOOKS.filter(book => {
    const matchesCat = selectedCategory === 'All' || book.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.executiveSummary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">Nenhum livro encontrado.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(book => `
    <div class="book-card" onclick="openBookModal('${book.id}')">
      <div>
        <div class="book-cover-wrap">
          <img src="${book.cover}" alt="${book.title}" class="book-cover-img" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'">
          <div class="book-rating-badge">★ ${book.rating}.0</div>
          <div class="book-category-tag">${book.category}</div>
        </div>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-summary">${book.executiveSummary}</p>
      </div>
      <div class="book-card-footer">
        <span class="book-meta-info">${book.pages} pág</span>
        <span class="book-explore-link">Explorar →</span>
      </div>
    </div>
  `).join('');
}

function renderVault() {
  const grid = document.getElementById('quotes-grid');
  if (!grid) return;

  const filtered = allQuotes.filter(q => {
    const matchesCat = selectedCategory === 'All' || q.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = q.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.bookTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          q.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">Nenhuma citação encontrada.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(q => `
    <div class="vault-quote-card">
      <div class="vault-quote-top">
        <p class="vault-quote-content">"${q.quote}"</p>
      </div>
      <div class="vault-quote-footer">
        <div class="vault-quote-meta-text">
          <span style="color: var(--primary); font-weight:700;">${q.author}</span>
          <span style="color: var(--text-dim);"> • </span>
          <span style="font-style:italic; color: var(--text-muted);">${q.bookTitle} (p. ${q.page})</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderStats() {
  const totalPages = INITIAL_BOOKS.reduce((acc, b) => acc + b.pages, 0);
  document.getElementById('stat-books-count').textContent = INITIAL_BOOKS.length;
  document.getElementById('stat-pages-count').textContent = totalPages.toLocaleString();
}

function setupModals() {
  const closeModalBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('book-modal');
  const tabBtns = document.querySelectorAll('.modal-tab-btn');

  if (closeModalBtn) {
    closeModalBtn.onclick = () => {
      if (modalOverlay) modalOverlay.classList.remove('active');
    };
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      bookModalTab = btn.dataset.tab;
      renderModalBody();
    });
  });
}

function openBookModal(bookId) {
  selectedBook = INITIAL_BOOKS.find(b => b.id === bookId);
  if (!selectedBook) return;

  bookModalTab = 'overview';
  
  const header = document.getElementById('modal-header');
  if (header) {
    header.innerHTML = `
      <img src="${selectedBook.cover}" alt="${selectedBook.title}" class="modal-book-cover" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80'">
      <div class="modal-book-info">
        <span class="manifesto-badge" style="margin-bottom:6px;">${selectedBook.category}</span>
        <h2 class="modal-title">${selectedBook.title}</h2>
        <p class="modal-author">Autor: <span style="color:var(--text-main); font-weight:600;">${selectedBook.author}</span></p>
        
        <div class="specs-grid">
          <div class="spec-item"><div class="spec-label">Formato</div><div class="spec-val">${selectedBook.format}</div></div>
          <div class="spec-item"><div class="spec-label">Páginas</div><div class="spec-val">${selectedBook.pages}</div></div>
          <div class="spec-item"><div class="spec-label">Ano Lido</div><div class="spec-val">${selectedBook.yearRead}</div></div>
          <div class="spec-item"><div class="spec-label">Capítulo Top</div><div class="spec-val" style="font-size:10px;">${selectedBook.favoriteChapter}</div></div>
        </div>
      </div>
    `;
  }

  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    if (btn.dataset.tab === 'overview') btn.classList.add('active');
    else btn.classList.remove('active');
  });

  renderModalBody();
  const modal = document.getElementById('book-modal');
  if (modal) modal.classList.add('active');
}

function renderModalBody() {
  const body = document.getElementById('modal-body');
  if (!body || !selectedBook) return;

  if (bookModalTab === 'overview') {
    body.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h4 class="modal-section-title">Resumo Executivo</h4>
        <div class="modal-box-text">${selectedBook.executiveSummary}</div>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 class="modal-section-title">Apreciação Pessoal</h4>
        <div class="modal-box-text" style="font-style: italic; border-left: 3px solid var(--primary);">
          "${selectedBook.personalReview}"
        </div>
      </div>

      <div>
        <h4 class="modal-section-title">Sobre o Autor</h4>
        <p style="color: var(--text-muted); font-size: 13px;">${selectedBook.authorBio}</p>
      </div>
    `;
  } else if (bookModalTab === 'highlights') {
    body.innerHTML = `
      <h4 class="modal-section-title" style="margin-bottom: 16px;">Excertos Selecionados</h4>
      <div>
        ${selectedBook.quotes.map(q => `
          <div class="modal-box-text" style="margin-bottom: 12px; font-family: 'Playfair Display', serif; font-style: italic;">
            "${q.text}"
            <span style="display:block; font-size:11px; color:var(--text-dim); margin-top:6px; font-family:'Plus Jakarta Sans'; font-style:normal;">Página ${q.page}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (bookModalTab === 'frameworks') {
    body.innerHTML = `
      <h4 class="modal-section-title" style="margin-bottom: 16px;">Conceitos & Aplicação Prática</h4>
      <div class="concepts-grid" style="margin-bottom:24px;">
        ${selectedBook.coreConcepts.map(c => `
          <div class="concept-card">
            <span class="concept-title">${c.title}</span>
            <p class="concept-desc">${c.desc}</p>
          </div>
        `).join('')}
      </div>

      <h4 class="modal-section-title" style="margin-bottom: 16px;">Frameworks</h4>
      <div class="concepts-grid">
        ${selectedBook.frameworks ? selectedBook.frameworks.map(f => `
          <div class="concept-card" style="border-color: rgba(56, 189, 248, 0.3);">
            <span class="concept-title" style="color: var(--primary);">${f.name}</span>
            <p class="concept-desc">${f.desc}</p>
          </div>
        `).join('') : '<p style="color:var(--text-dim); font-size:12px;">Sem frameworks registadas.</p>'}
      </div>
    `;
  }
}