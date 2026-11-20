/* ===== Dra. Camila Marconi — interações ===== */

// Número do WhatsApp (troque pelo número real, formato: 55 + DDD + número)
const WHATSAPP = '5500000000000';

// Ano no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Header muda ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('active');
});
// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Revelar elementos ao rolar
const reveals = document.querySelectorAll('[data-reveal]');
const revealAll = () => reveals.forEach((el) => el.classList.add('is-visible'));

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!('IntersectionObserver' in window) || prefersReduced) {
  // Sem suporte a IntersectionObserver ou movimento reduzido: mostra tudo direto
  revealAll();
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));

  // Rede de segurança: se por algum motivo o observer não disparar
  // (aba em segundo plano etc.), garante que nada fique invisível.
  window.addEventListener('load', () => setTimeout(revealAll, 2500));
}

// Formulário -> abre WhatsApp com a mensagem
function enviarWhatsApp(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  let texto = `Olá Dra. Camila! Meu nome é ${nome}.`;
  if (telefone) texto += ` Telefone: ${telefone}.`;
  if (mensagem) texto += ` ${mensagem}`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank');
  return false;
}
