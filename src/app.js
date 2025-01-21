import './styles/styles.scss'

// Este listener espera que el dom ya se haya cargado para establecer las demas funciones despues de ello
window.addEventListener('DOMContentLoaded', () => {
  scrolled()
  clickButtonViewMore()
  productsObserver()
})

// funcion scrolled
// @description: obtiene la posicion del scroll de la ventana y modifica la clade del header para dar la animacion de blur al bajar 
const scrolled = function () {

  const headerE = document.querySelector('#header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      headerE.classList.add('header-scrolled')
    } else if (window.scrollY <= 100) {
      headerE.classList.remove('header-scrolled')
    }
  });
}

// funcion clickButtonViewMore
// @description: modifica la clase del contenedor de la lista de productos para mostrar el resto de cards en le pagina principal
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

// funcion productsObserver
// @description: modifica la clase de las cards al implementer un intersection observer para dar el efecto de scaleIn al abrir el contenedor de las mismas
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



