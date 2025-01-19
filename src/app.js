import './styles/styles.scss'

const headerE = document.querySelector('#header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerE.classList.add('header-scrolled')
  } else if (window.scrollY <= 100) {
    headerE.classList.remove('header-scrolled')
  }
});
