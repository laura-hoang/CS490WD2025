const greetEl= document.getElementById('greeting');
(function setGreeting(){
  const h = new Date().getHours();
  const msg = h<12 ? "Good Morning!":h<18 ? "Good afternoon!":"Good evening!";
  greetEl.textContent = msg;
})();

document.getElementById('year').textContent=new Date().getFullYear();

const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const save = localStorage.getItem('theme');

if (saved === 'dark') {
  root.classList.add('dark');
  toggle.setAttribute('aria-pressed','true');
  toggle.textContent = '☀️ Light';
}

toggle.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  toggle.setAttribute('aria-pressed', String(isDark));
  toggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 280)
  toTop.classList.add('show');
  else
  toTop.classList.remove('show');
});

toTop.addEventListener('click', () => window.scrollTo({
  top:0, behavior:'smooth'
}
));

const modal = document.getElementById('modal');
const mTitle = document.getElementById('modalTitle');
const mDesc  = document.getElementById('modalDesc');
const mLink  = document.getElementById('modalLink');
const mClose = document.getElementById('modalClose');

function openModal(card){
  mTitle.textContent = card.dataset.title;
  mDesc.textContent = card.dataset.desc;
  mLink.href = card.dataset.link;
  if (typeof modal.showModal === 'function')
  modal.showModal();
  else
  modal.setAttribute('open','open');
}

function closeModal(){
  if (typeof modal.close === 'function')
  modal.close();
  else
  modal.removeAttribute('open');
}

document.querySelectorAll('.card .more').forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.currentTarget.closest('.card');
    openModal(card);
  });
});

mClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });