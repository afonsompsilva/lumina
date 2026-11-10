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
  const allNavBtns = document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn');

  function switchTab(tabName) {
    activeTab = tabName;
    allNavBtns.forEach(btn => {
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

  allNavBtns.forEach(btn => {
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
