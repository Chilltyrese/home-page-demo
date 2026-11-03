// Show a simple message when a visitor selects a product.
// Real product pages, downloads and payments are not connected yet.
document.querySelectorAll('.product-button').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    document.getElementById('product-message').textContent = `${product} selected. A product details page can be added later.`;
  });
});

// Toggle navigation on smaller screens.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.getElementById('year').textContent = new Date().getFullYear();
