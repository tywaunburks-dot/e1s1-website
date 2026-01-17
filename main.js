(function () {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const menu = document.querySelector('[data-nav-links]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();