// ==========================================================================
// LUMINA LIBRARY JAVASCRIPT LOGIC
// ==========================================================================

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
    completionDate: '15 Jan 2024',
    executiveSummary: 'A história inspiradora de autodisciplina de David Goggins, demonstrando como superar traumas, dominar a mente e ultrapassar os limites da dor física e mental através da Regra dos 40%.',
    coreConcepts: [
      { title: 'A Regra dos 40%', desc: 'Quando a tua mente diz que estás exausto, na verdade atingiste apenas 40% da tua capacidade real.' },
      { title: 'O Espelho do Escrutínio', desc: 'Confrontar a verdade crua ao olhar para o espelho e responsabilizar-te sem desculpas.' },
      { title: 'O Pote de Biscoitos', desc: 'Recordar vitórias e superações passadas para alimentar a resiliência em momentos difíceis.' }
    ],
    keyTakeaways: [
      'A verdadeira mente calejada constrói-se saindo voluntariamente da zona de conforto todos os dias.',
      'Não podes controlar as tuas origens, mas podes dominar o teu destino com disciplina implacável.'
    ],
    personalReview: 'Uma obra poderosa sobre resiliência humana. Muda radicalmente a perspetiva sobre os limites do sofrimento e do potencial.',
    authorBio: 'Ex-SEAL da Marinha dos EUA, ultramaratonista e atleta de resistência de elite.',
    quotes: [
      { text: "Não pares quando estiveres cansado, para quando tiveres terminado.", page: 85 },
      { text: "A maior parte das pessoas desiste quando está apenas a 40% do seu potencial máximo.", page: 142 }
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
  completionDate: '02 Fev 2024',
  executiveSummary: 'Um guia espiritual fundamental que ensina a libertar a mente da ansiedade do futuro e do peso do passado, vivendo plenamente ancorado no momento presente.',
  coreConcepts: [
    { title: 'Dissociação do Ego', desc: 'Compreender que tu não és os teus pensamentos, mas sim a consciência que os observa.' },
    { title: 'O Corpo de Dor', desc: 'Reconhecer a acumulação de sofrimento passado e impedir que assuma o controlo do presente.' },
    { title: 'Aceitação Absoluta', desc: 'Render-se ao momento presente como ele é, sem resistência interna.' }
  ],
  keyTakeaways: [
    'A ansiedade vive no futuro e a mágoa no passado; a paz só existe no agora.',
    'A mente é um instrumento excelente se for usada corretamente, mas destrutiva se for ela a usar-te.'
  ],
  personalReview: 'Um livro transformador para serenar a mente e encontrar foco absoluto nas ações do presente.',
  authorBio: 'Escritor e professor espiritual germânico, considerado uma das figuras espirituais mais influentes.',
  quotes: [
    { text: "Nada aconteceu no passado; aconteceu no Agora. Nada acontecerá no futuro; acontecerá no Agora.", page: 41 },
    { text: "A causa primária da infelicidade nunca é a situação, mas os teus pensamentos sobre ela.", page: 98 }
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
    completionDate: '20 Fev 2024',
    executiveSummary: 'A psicóloga Carol Dweck demonstra a diferença entre ter uma mentalidade fixa e uma mentalidade de crescimento, mostrando como a forma como encaramos o esforço e o erro molda o sucesso.',
    coreConcepts: [
      { title: 'Mindset Fixo vs. Crescimento', desc: 'Acreditar que o talento é nato vs. acreditar que as habilidades são desenvolvidas com esforço.' },
      { title: 'O Poder do "Ainda"', desc: 'Substituir "não sei fazer" por "ainda não sei fazer", mantendo a porta aberta ao progresso.' },
      { title: 'Reconfiguração do Erro', desc: 'Encarar o erro não como fracasso pessoal, mas como dado de informação para melhoria.' }
    ],
    keyTakeaways: [
      'O esforço é o que nos torna inteligentes e talentosos.',
      'As pessoas com mentalidade de crescimento abraçam desafios e persistem perante contratempos.'
    ],
    personalReview: 'Essencial para redefinir a nossa relação com falhas, aprendizagem e evolução constante.',
    authorBio: 'Professora de Psicologia na Universidade de Stanford e pesquisadora de renome internacional.',
    quotes: [
      { text: "Por que perder tempo a provar que és ótimo quando podes estar a melhorar?", page: 16 },
      { text: "A mentalidade de crescimento permite que ames o que estás a fazer, mesmo perante dificuldades.", page: 72 }
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
    completionDate: '10 Mar 2024',
    executiveSummary: 'Um manual prático de comunicação interpessoal que ensina a estabelecer ligação, confiança e sintonia imediata nos primeiros instantes de qualquer interação.',
    coreConcepts: [
      { title: 'Rapport Instantâneo', desc: 'Criar uma sensação de familiaridade e confiança espelhando linguagem corporal e tom de voz.' },
      { title: 'Linguagem Corporal Aberta', desc: 'Manter contacto visual, sorriso sincero e postura recetiva nos primeiros 5 segundos.' },
      { title: 'Estilos de Comunicação', desc: 'Identificar se o interlocutor é visual, auditivo ou cinestésico e adaptar a mensagem.' }
    ],
    keyTakeaways: [
      'As pessoas gostam de quem é semelhante a elas ou de quem se sente confortável ao seu lado.',
      'A primeira impressão é formada em segundos e estabelece a base de toda a relação.'
    ],
    personalReview: 'Uma leitura extremamente útil e direta sobre linguagem não-verbal e relações humanas.',
    authorBio: 'Especialista em Programação Neuro-Linguística e antigo fotógrafo de moda internacional.',
    quotes: [
      { text: "Quando ligas o teu coração aos teus olhos e à tua voz, a magia da conexão acontece.", page: 34 },
      { text: "A chave para a persuasão não é o que dizes, mas a confiança que inspiras ao falar.", page: 88 }
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
    completionDate: '28 Mar 2024',
    executiveSummary: 'Um romance emotivo e doloroso sobre o amor entre dois melhores amigos, as palavras que ficam por dizer e o impacto devastador das escolhas não tomadas a tempo.',
    coreConcepts: [
      { title: 'A Vulnerabilidade do Sentimento', desc: 'A dificuldade e a urgência de expressar sentimentos verdadeiros antes que seja tarde.' },
      { title: 'Amizade vs. Amor', desc: 'A linha ténue que separa a cumplicidade de uma vida inteira de uma paixão profunda.' },
      { title: 'O Tempo Perdido', desc: 'Como o medo da rejeição nos impede de viver a plenitude do amor.' }
    ],
    keyTakeaways: [
      'Nunca guardes palavras afetuosas por medo; o silêncio pode custar o futuro.',
      'O amor verdadeiro permanece mesmo quando tentamos ignorá-lo.'
    ],
    personalReview: 'Uma história emocionante que deixa uma marca profunda sobre a importância de sermos honestos com o que sentimos.',
    authorBio: 'Autora norte-americana de romances de jovem adulto focados nas complexidades das emoções.',
    quotes: [
      { text: "Se eu lhe tivesse dito que o amava, talvez o mundo não tivesse mudado de rumo.", page: 115 },
      { text: "Algumas coisas não precisam de ser ditas para existirem, mas precisam de ser ditas para sobreviverem.", page: 204 }
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
    completionDate: '14 Abr 2024',
    executiveSummary: 'Um clássico das finanças pessoais que desconstrói os mitos do trabalho tradicional e ensina a diferença crucial entre ativos e passivos para alcançar a liberdade financeira.',
    coreConcepts: [
      { title: 'Ativos vs. Passivos', desc: 'Ativos colocam dinheiro no teu bolso; passivos tiram dinheiro do teu bolso.' },
      { title: 'A Corrida dos Ratos', desc: 'O ciclo de trabalhar duro para pagar contas, aumentar despesas com o aumento do salário e ficar estagnado.' },
      { title: 'Literacia Financeira', desc: 'Desenvolver educação financeira como a ferramenta máxima para criar oportunidades.' }
    ],
    keyTakeaways: [
      'Trabalha para aprender, não apenas para ganhar um salário.',
      'O teu ativo mais poderoso é a tua mente e a tua educação financeira.'
    ],
    personalReview: 'Mudou radicalmente a minha perceção sobre dinheiro, investimento e construção de futuro.',
    authorBio: 'Empresário, investidor e autor reconhecido mundialmente pela promoção da educação financeira.',
    quotes: [
      { text: "Os pobres e a classe média trabalham pelo dinheiro. Os ricos fazem o dinheiro trabalhar para eles.", page: 35 },
      { text: "Na vida real, não são os inteligentes que progridem, mas sim os audazes.", page: 122 }
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
    completionDate: '01 Mai 2024',
    executiveSummary: 'Um manifesto inspirador sobre o amor-próprio, a aceitação individual e a coragem de viver de acordo com a própria verdade, sem tentar agradar a sociedade.',
    coreConcepts: [
      { title: 'Amor-Próprio Incondicional', desc: 'Colocar o teu bem-estar emocional em primeiro lugar para seres capaz de amar os outros.' },
      { title: 'Desapego de Expectativas', desc: 'Deixar de viver em função do que os outros esperam ou pensam de ti.' },
      { title: 'Verdade Pessoal', desc: 'Honrar a tua essência e decisões sem sentimentos de culpa.' }
    ],
    keyTakeaways: [
      'Só podes oferecer ao mundo a paz e a felicidade que já tens dentro de ti.',
      'Dizer "não" aos outros é, muitas vezes, dizer "sim" a ti próprio.'
    ],
    personalReview: 'Uma leitura direta e assertiva sobre a importância da autoestima e do respeito pela própria jornada.',
    authorBio: 'Escritor, palestrante motivacional e apresentador português dedicado ao desenvolvimento pessoal.',
    quotes: [
      { text: "Quando te amas, deixas de procurar a aprovação do mundo e começas a viver a tua verdade.", page: 48 },
      { text: "O amor-próprio não é egoísmo; é o ponto de partida para qualquer relação saudável.", page: 110 }
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
    completionDate: '18 Mai 2024',
    executiveSummary: 'Um manifesto prático sem rodeios sobre como acabar com a autossabotagem, interromper o diálogo interno negativo e tomar o controlo da tua vida através da ação.',
    coreConcepts: [
      { title: 'Diálogo Interno Construtivo', desc: 'Mudar as afirmações internas de dúvida para certezas de capacidade e compromisso.' },
      { title: 'Indiferença à Disposição', desc: 'Não esperar estar com "vontade" para agir; fazer o que tem de ser feito.' },
      { title: 'Aceitação do Desconforto', desc: 'O crescimento real apenas acontece quando abraças o incerto e o desconfortável.' }
    ],
    keyTakeaways: [
      'Não és definido pelos teus pensamentos, mas sim pelas ações que realizas.',
      'Deixa de culpar as circunstâncias e assume 100% da responsabilidade pela tua vida.'
    ],
    personalReview: 'Um livro com uma linguagem crua e motivadora, excelente para desbloquear momentos de hesitação.',
    authorBio: 'Coach de desenvolvimento pessoal de origem escocesa com uma abordagem pragmática e sem desculpas.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 },
      { text: "Muda a tua conversa interna e mudarás a tua realidade.", page: 94 }
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
    completionDate: '05 Jun 2024',
    executiveSummary: 'Um romance sobre o término de um relacionamento e o subsequente processo de redescoberta pessoal, mostrando como o fim de uma etapa pode ser o início de uma vida mais autêntica.',
    coreConcepts: [
      { title: 'Cura Emocional', desc: 'Aceitar o fim como um processo doloroso, mas necessário para a evolução pessoal.' },
      { title: 'Reencontro Consigo Mesmo', desc: 'Aprender a ser feliz na própria companhia após a rutura.' },
      { title: 'Ressignificar a Perda', desc: 'Entender que perder alguém pode significar ganhar a própria dignidade e paz.' }
    ],
    keyTakeaways: [
      'Nem todas as partidas são perdas; algumas são libertações.',
      'O amor por outro nunca deve exigir o sacrifício do amor por ti próprio.'
    ],
    personalReview: 'Uma história comovente que ensina a transformar o desgosto numa oportunidade de crescimento pessoal.',
    authorBio: 'Um dos autores portugueses de ficção e desenvolvimento emocional mais lidos da atualidade.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios.", page: 62 },
      { text: "O fim de um capítulo não é o fim do livro, mas o início da melhor parte da tua história.", page: 185 }
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
    completionDate: '22 Jun 2024',
    executiveSummary: 'Uma narrativa envolvente sobre os caminhos imprevisíveis do afeto, a forma como o amor surge nos momentos mais inesperados e a superação das defesas emocionais.',
    coreConcepts: [
      { title: 'Imprevisibilidade do Amor', desc: 'O amor acontece quando deixamos de tentar controlar o coração.' },
      { title: 'Derrubar Muros', desc: 'A coragem de baixar as defesas emocionais após desilusões passadas.' },
      { title: 'Entrega Genuína', desc: 'Viver os sentimentos sem reservas nem medos antecipados.' }
    ],
    keyTakeaways: [
      'Os melhores encontros da vida são aqueles que não planeámos.',
      'Amar exige a coragem de ser vulnerável.'
    ],
    personalReview: 'Um romance leve e inspirador sobre como o afeto consegue vencer os medos e resguardos emocionais.',
    authorBio: 'Autor bestseller português reconhecido pelas suas reflexões profundas sobre as relações humanas.',
    quotes: [
      { text: "O amor não se força nem se planeia; simplesmente acontece quando deixamos o coração aberto.", page: 77 },
      { text: "Gostar de alguém é fácil, o difícil é ter a coragem de assumir esse sentimento.", page: 140 }
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
    completionDate: '12 Jul 2024',
    executiveSummary: 'Uma obra emocionante sobre superação de adversidades e feridas emocionais, mostrando que os momentos de maior queda trazem consigo a capacidade de nos erguermos mais fortes.',
    coreConcepts: [
      { title: 'Resiliência Emocional', desc: 'Usar as dificuldades e dores do passado como impulso para o crescimento.' },
      { title: 'Transformação Pessoal', desc: 'Descobrir uma força interior desconhecida no auge da adversidade.' },
      { title: 'Perdão e Libertação', desc: 'Perdoar o passado para permitir o voo em direção ao futuro.' }
    ],
    keyTakeaways: [
      'As quedas não definem quem és, mas sim a forma como te levantas.',
      'É nas tempestades que descobrimos a verdadeira resistência das nossas asas.'
    ],
    personalReview: 'Um livro profundamente humano sobre aceitação de cicatrizes e o renascimento após a dor.',
    authorBio: 'Escritor português aclamado pelas suas obras focadas na superação pessoal e sensibilidade emocional.',
    quotes: [
      { text: "Não tenhas medo da queda; é lá no fundo que descobres que tens asas para voar.", page: 53 },
      { text: "As nossas cicatrizes são a prova de que fomos mais fortes do que aquilo que nos tentou destruir.", page: 198 }
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
    completionDate: '02 Ago 2024',
    executiveSummary: 'Uma reflexão romântica sobre a urgência de valorizar quem amamos no presente, sem adiar a demonstração de afeto nem deixar que a rotina apague a intensidade das ligações.',
    coreConcepts: [
      { title: 'A Urgência do Afeto', desc: 'Não adiar o carinho e a presença para um amanhã incerto.' },
      { title: 'Presença Consciente', desc: 'Estar verdadeiramente presente na vida das pessoas que nos rodeiam.' },
      { title: 'Valorização Mútua', desc: 'Reconhecer o valor dos pequenos gestos diários no amor.' }
    ],
    keyTakeaways: [
      'O amor exige presença, cuidado e prioridade no dia a dia.',
      'O tempo é o bem mais precioso que podes dedicar a alguém.'
    ],
    personalReview: 'Uma mensagem importante e tocante sobre não adiar sentimentos e viver o amor com entrega imediata.',
    authorBio: 'Destacado autor português de ficção focado no amor, relações e desenvolvimento emocional.',
    quotes: [
      { text: "Quem ama não adia, não hesita e não deixa para amanhã o carinho que pode dar hoje.", page: 89 },
      { text: "O melhor presente que podes dar a alguém é o teu tempo e o teu coração inteiro.", page: 162 }
    ]
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