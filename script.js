/**
 * absolute top-14 w-full left-0 bg-slate-800 divide-gray-900 divide-y-2
 */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = anchor.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        alert('Semua bidang wajib diisi!');
        event.preventDefault(); // Mencegah form dari pengiriman
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Masukkan email yang valid!');
        event.preventDefault(); // Mencegah form dari pengiriman
      }
    });
  });
    
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menu.addEventListener('click', displayMenu);
hamburgerMenu.addEventListener('click', displayMenu);

const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

function displayMenu() {
    if (menu.classList.contains('absolute')) {
        menu.classList.add('hidden');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';

        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-slate-800');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2');
    } else {
        menu.classList.remove('hidden');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';

        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2');
    }
}