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
    cover: 'img/naomepodem.png', 
    favoriteChapter: 'Capítulo 7 - A Armadura Mental',
    executiveSummary: 'Uma das obras mais viscerais sobre resiliência humana e superação extrema. David Goggins retrata a sua trajetória: de uma infância marcada por racismo e violência até se tornar no único homem a concluir o treino militar de SEAL, Ranger e Tacp. O livro é um manual prático para calejar a mente e temperar o caráter.',
    coreConcepts: [
      { title: 'A Regra dos 40%', desc: 'Quando a mente diz que estás exausto, atingiste apenas 40% da capacidade real.' },
      { title: 'Espelho do Escrutínio', desc: 'Confronto diário visual e honesto sobre as tuas falhas e responsabilidades.' },
      { title: 'Pote de Biscoitos', desc: 'Reserva mental de vitórias passadas para alimentar momentos de sofrimento extremo.' }
    ],
    keyTakeaways: [
      'A força mental constrói-se com ações desconfortáveis diárias.',
      'As origens não definem onde podes chegar com disciplina implacável.'
    ],
    personalReview: 'Uma obra devastadora pela ausência de concessões. Goggins obriga a olhar para as próprias desculpas sem filtros.',
    authorBio: 'Ex-SEAL da Marinha dos EUA, ultramaratonista de elite e referência global em resistência psicológica.',
    quotes: [
      { text: "Não pares quando estiveres cansado, para quando tiveres terminado.", page: 85 },
      { text: "A maior parte das pessoas desiste quando está apenas a 40% do seu potencial.", page: 142 }
    ],
    frameworks: [
      { name: "Accountability Mirror", desc: "Registo diário de metas inegociáveis colar no espelho." },
      { name: "Taking Souls Strategy", desc: "Superar os próprios limites em momentos de cansaço para inspirar e dominar a adversidade." }
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
    cover: 'img/opoderdoagora.png', 
    favoriteChapter: 'Capítulo 2 - A Consciência: O Caminho para a Libertação',
    executiveSummary: 'Um guia espiritual fundamental que ensina a libertar a mente da ansiedade do futuro e do peso do passado, vivendo plenamente ancorado no momento presente.',
    coreConcepts: [
      { title: 'Dissociação do Ego', desc: 'Compreender que tu não és os teus pensamentos, mas a consciência que os observa.' },
      { title: 'O Corpo de Dor', desc: 'Reconhecer a acumulação de sofrimento passado e impedir que assuma o controlo.' }
    ],
    keyTakeaways: [
      'A ansiedade vive no futuro e a mágoa no passado; a paz só existe no agora.'
    ],
    personalReview: 'Um livro transformador para serenar a mente e encontrar foco absoluto no presente.',
    authorBio: 'Escritor e professor espiritual germânico, referência em mindfulness.',
    quotes: [
      { text: "Nada aconteceu no passado; aconteceu no Agora. Nada acontecerá no futuro; acontecerá no Agora.", page: 41 }
    ],
    frameworks: [
      { name: "O Observador Silencioso", desc: "Pausar para assistir ao fluxo de pensamentos sem reagir a eles." }
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
    executiveSummary: 'Demonstra a diferença entre ter uma mentalidade fixa e de crescimento, mostrando como a forma como encaramos o esforço e o erro molda o sucesso.',
    coreConcepts: [
      { title: 'Mindset Fixo vs. Crescimento', desc: 'Acreditar que o talento é nato vs. acreditar no desenvolvimento pelo esforço.' },
      { title: 'O Poder do "Ainda"', desc: 'Substituir "não sei" por "ainda não sei".' }
    ],
    keyTakeaways: [
      'O esforço contínuo é o elemento que transforma potencial em mestria real.'
    ],
    personalReview: 'Essencial para redefinir a nossa relação com falhas, aprendizagem e evolução.',
    authorBio: 'Professora de Psicologia na Universidade de Stanford.',
    quotes: [
      { text: "Por que perder tempo a provar que és ótimo quando podes estar a melhorar?", page: 16 }
    ],
    frameworks: [
      { name: "Avaliação Orientada ao Processo", desc: "Medir a performance diária pelo esforço e foco mantido." }
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
    cover: 'img/comofazer.png', 
    favoriteChapter: 'Capítulo 4 - Sincronia Corporal e Voz',
    executiveSummary: 'Manual prático de comunicação interpessoal que ensina a estabelecer ligação e confiança nos primeiros instantes de qualquer interação.',
    coreConcepts: [
      { title: 'Rapport Instantâneo', desc: 'Criar sintonia espelhando linguagem corporal e tom de voz.' }
    ],
    keyTakeaways: [
      'A primeira impressão é formada em segundos e estabelece a base da relação.'
    ],
    personalReview: 'Uma leitura extremamente útil e direta sobre linguagem não-verbal.',
    authorBio: 'Especialista em PNL e antigo fotógrafo de moda internacional.',
    quotes: [
      { text: "A chave para a persuasão não é o que dizes, mas a confiança que inspiras.", page: 88 }
    ],
    frameworks: [
      { name: "Fórmula de 90 Segundos", desc: "Sequência de abertura: atitude, olhar, sorriso, aperto de mão e inclinação." }
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
    cover: 'img/seeulhetivessedito.png', 
    favoriteChapter: 'Capítulo 28 - O Peso do Não Dito',
    executiveSummary: 'Um romance emotivo sobre o amor entre melhores amigos, as palavras não ditas e o impacto das escolhas não tomadas a tempo.',
    coreConcepts: [
      { title: 'Vulnerabilidade', desc: 'A urgência de expressar sentimentos verdadeiros antes que seja tarde.' }
    ],
    keyTakeaways: [
      'Nunca guardes palavras afetuosas por medo; o silêncio custa o futuro.'
    ],
    personalReview: 'Uma história emocionante sobre a importância de sermos honestos com o que sentimos.',
    authorBio: 'Autora norte-americana de romances de jovem adulto.',
    quotes: [
      { text: "Se eu lhe tivesse dito que o amava, talvez o mundo não tivesse mudado de rumo.", page: 115 }
    ],
    frameworks: [
      { name: "Análise do Custo do Silêncio", desc: "Reflexão sobre as consequências de reprimir conversas cruciais." }
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
    cover: 'img/pairicopaipobre.png', 
    favoriteChapter: 'Capítulo 2 - Lição 1: Os Ricos Não Trabalham pelo Dinheiro',
    executiveSummary: 'Clássico das finanças pessoais que ensina a diferença crucial entre ativos e passivos para alcançar a liberdade financeira.',
    coreConcepts: [
      { title: 'Ativos vs. Passivos', desc: 'Ativos poem dinheiro no teu bolso; passivos tiram.' }
    ],
    keyTakeaways: [
      'Trabalha para aprender, não apenas para ganhar um salário.'
    ],
    personalReview: 'Mudou radicalmente a minha perceção sobre dinheiro e investimento.',
    authorBio: 'Empresário e investidor aclamado no ensino da educação financeira.',
    quotes: [
      { text: "Os ricos fazem o dinheiro trabalhar para eles.", page: 35 }
    ],
    frameworks: [
      { name: "Fluxo de Caixa Pessoal", desc: "Mapeamento rigoroso entre fontes de rendimento passivo e despesas." }
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
    cover: 'img/amate.png', 
    favoriteChapter: 'Capítulo 3 - A Libertação do Julgamento',
    executiveSummary: 'Manifesto inspirador sobre amor-próprio, aceitação e a coragem de viver de acordo com a própria verdade.',
    coreConcepts: [
      { title: 'Amor-Próprio', desc: 'Colocar o bem-estar emocional em primeiro lugar para amar os outros.' }
    ],
    keyTakeaways: [
      'Só podes oferecer ao mundo a paz que já tens dentro de ti.'
    ],
    personalReview: 'Leitura assertiva sobre a importância da autoestima.',
    authorBio: 'Escritor e palestrante motivacional português.',
    quotes: [
      { text: "Quando te amas, deixas de procurar a aprovação do mundo.", page: 48 }
    ],
    frameworks: [
      { name: "Filtro de Aprovação", desc: "Desconectar o valor pessoal da opinião alheia." }
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
    cover: 'img/naotefodas.png', 
    favoriteChapter: 'Capítulo 5 - Tu És o Que Fazes',
    executiveSummary: 'Manifesto prático sem rodeios sobre como acabar com a autossabotagem e tomar o controlo da vida através da ação.',
    coreConcepts: [
      { title: 'Ação sem Motivação', desc: 'Fazer o que tem de ser feito independentemente da disposição.' }
    ],
    keyTakeaways: [
      'Não és definido pelos teus pensamentos, mas pelas tuas ações.'
    ],
    personalReview: 'Linguagem crua e motivadora, excelente para desbloquear hesitações.',
    authorBio: 'Coach de desenvolvimento pessoal com abordagem estoica.',
    quotes: [
      { text: "Ninguém te está a impedir a não ser tu próprio.", page: 31 }
    ],
    frameworks: [
      { name: "Afirmações Operacionais", desc: "Muda o diálogo interno para certezas de execução." }
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
    cover: 'img/ganheiumavida.png', 
    favoriteChapter: 'Capítulo 16 - A Reconstrução do Eu',
    executiveSummary: 'Romance sobre o término de uma relação e a subsequente redescoberta pessoal e autonomia.',
    coreConcepts: [
      { title: 'Reencontro Consigo', desc: 'Aprender a ser feliz na própria companhia.' }
    ],
    keyTakeaways: [
      'Nem todas as partidas são perdas; algumas são libertações.'
    ],
    personalReview: 'História comovente sobre transformar desgosto em crescimento.',
    authorBio: 'Um dos autores portugueses de ficção mais lidos da atualidade.',
    quotes: [
      { text: "Às vezes, perder alguém é a única forma de não nos perdermos a nós próprios.", page: 62 }
    ],
    frameworks: [
      { name: "Inventário de Autonomia", desc: "Reconstrução de objetivos individuais pós-rutura." }
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
    cover: 'img/foisemquererque-tequis.png', 
    favoriteChapter: 'Capítulo 12 - A Coragem de Sentir',
    executiveSummary: 'Narrativa sobre a imprevisibilidade do afeto e a superação das defesas emocionais.',
    coreConcepts: [
      { title: 'Entrega Genuína', desc: 'Viver sentimentos sem reservas nem medos.' }
    ],
    keyTakeaways: [
      'Os melhores encontros são os que não planeámos.'
    ],
    personalReview: 'Romance leve e inspirador sobre o vencer dos resguardos emocionais.',
    authorBio: 'Autor bestseller português de literatura sentimental.',
    quotes: [
      { text: "O amorcontece quando deixamos o coração aberto.", page: 77 }
    ],
    frameworks: [
      { name: "Desarmamento Afetivo", desc: "Eliminar barreiras defensivas em novas conexões." }
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
    cover: 'img/duranteaquedaaprendiavoar.png', 
    favoriteChapter: 'Capítulo 21 - A Força das Cicatrizes',
    executiveSummary: 'Obra sobre resiliência e renascimento pessoal perante momentos de crise e dor.',
    coreConcepts: [
      { title: 'Resiliência', desc: 'Usar as dificuldades como impulso para o crescimento.' }
    ],
    keyTakeaways: [
      'As quedas não te definem, mas sim a forma como te levantas.'
    ],
    personalReview: 'Profundamente humano sobre a aceitação de cicatrizes.',
    authorBio: 'Romancista aclamado focado em superação pessoal.',
    quotes: [
      { text: "É lá no fundo que descobres que tens asas para voar.", page: 53 }
    ],
    frameworks: [
      { name: "Mapeamento de Superação", desc: "Registrar forças internas mobilizadas na crise." }
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
    cover: 'img/semeamasnaotedemores.png', 
    favoriteChapter: 'Capítulo 18 - O Valor do Presente',
    executiveSummary: 'Reflexão sobre a urgência de valorizar quem amamos no presente, sem adiar afetos.',
    coreConcepts: [
      { title: 'Urgência do Afeto', desc: 'Não adiar carinho para um amanhã incerto.' }
    ],
    keyTakeaways: [
      'O tempo é o bem mais precioso que podes dedicar a alguém.'
    ],
    personalReview: 'Mensagem importante sobre viver o amor com entrega imediata.',
    authorBio: 'Destacado autor português de ficção e desenvolvimento emocional.',
    quotes: [
      { text: "Quem ama não adia e não deixa para amanhã o carinho que pode dar hoje.", page: 89 }
    ],
    frameworks: [
      { name: "Auditoria do Tempo Afetivo", desc: "Avaliação do tempo dedicado às pessoas essenciais." }
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
    closeModalBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
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
  document.getElementById('book-modal').classList.add('active');
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
