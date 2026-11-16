// Mobile menu + header border on scroll. Smooth scroll itself is CSS (scroll-behavior).
const nav = document.querySelector('.nav');
const toggle = nav.querySelector('.nav__toggle');

const setOpen = (open) => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
};

toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
nav.querySelectorAll('.nav__menu a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
matchMedia('(min-width: 901px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });

const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();
