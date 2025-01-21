import './styles/styles.scss'

const headerE = document.querySelector('#header');

window.addEventListener('DOMContentLoaded', () => {
  scrolled()
  clickButtonViewMore()
  productsObserver()
})

const scrolled = function () {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerE.classList.add('header-scrolled')
    } else if (window.scrollY <= 100) {
      headerE.classList.remove('header-scrolled')
    }
  });
}
const clickButtonViewMore = function () {

  let divProducts = document.querySelector('.product-list');
  let button = document.querySelector('#viewall');
  button.addEventListener('click', () => {
    divProducts.classList.toggle('see')

    if (divProducts.classList.contains('see')) {
      button.innerText = 'view all'
    } else {
      button.innerText = 'view less'
    }
  });
}
const productsObserver = function () {

  var products = document.querySelectorAll('.product-card');
  let divProducts = document.querySelector('.product-list');


  function callback(products, observer) {
    products.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animation_grow')
        observer.unobserve(entry.target);
      }
    });
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(callback, options);

  products.forEach((product, i) => {

    observer.observe(product);
  })

}



