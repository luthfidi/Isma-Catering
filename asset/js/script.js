// Scroll Top Button
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', function() {
  if (this.scrollY > 100) {
    scrollTop.classList.remove('d-none');
    scrollTop.classList.add('d-flex');
  } else {
    scrollTop.classList.remove('d-flex');
    scrollTop.classList.add('d-none');
  }
});