//grabs ur time to say whatever greeting when u view it the time yk
const greetEl= document.getElementById('greeting');
(function setGreeting(){
  const h = new Date().getHours();
  const msg = h<12 ? "Good Morning!":h<18 ? "Good afternoon!":"Good evening!";
  greetEl.textContent = msg;
})();

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const root = document.documentElement;
const toggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  const isDark = theme === 'dark';
  root.classList.toggle('dark', isDark);
  if (toggle) {
    toggle.textContent = isDark ? '☀️ Light' : '🌑 Dark';
    toggle.setAttribute('aria-pressed', String(isDark));
  }
}

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

applyTheme(getInitialTheme());

// when u click the light or dark buttpn it will read it
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
}

// the button that listen when u click the scroll up
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) toTop.classList.add('show');
    else toTop.classList.remove('show');
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const modal  = document.getElementById('modal');
const mTitle = document.getElementById('modalTitle');
const mDesc  = document.getElementById('modalDesc');
const mLink  = document.getElementById('modalLink');
const mClose = document.getElementById('modalClose');

function openModal(card){
  if (!modal) return;
  if (mTitle) mTitle.textContent = card.dataset.title || 'Project';
  if (mDesc)  mDesc.textContent  = card.dataset.desc  || '';
  if (mLink)  mLink.href         = card.dataset.link  || '#';
  if (typeof modal.showModal === 'function') modal.showModal();
  else modal.setAttribute('open','open');
}

function closeModal(){
  if (!modal) return;
  if (typeof modal.close === 'function') modal.close();
  else modal.removeAttribute('open');
}

document.querySelectorAll('.card .more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.currentTarget.closest('.card');
    if (card) openModal(card);
  });
});

if (mClose && modal) {
  mClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
}