// Проверка на поддержку .webp браузером

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) { 
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    } else{
    document.querySelector('body').classList.add('no-webp');
    }
});

// animation

const animatedItems = document.querySelectorAll('.animated')

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

if (animatedItems.length > 0) {
  window.addEventListener('scroll', animationOnScroll)

  function animationOnScroll( ) {
    animatedItems.forEach((item) => {
      const itemHeight = item.offsetHeight,
        itemOffset = offset(item).top,
        animationRatio = 4

      let animationPoint = window.innerHeight - itemHeight / animationRatio

      if (itemHeight > window.innerHeight) {
        animationPoint = window.innerHeight - window.innerHeight / animationRatio
      }

      if ((pageYOffset > itemOffset - animationPoint) && pageYOffset < (itemOffset + itemHeight)) {
        item.classList.add('anim-active')
      } else {
        item.classList.remove('anim-active')
      }
    })
  }

  animationOnScroll()
}

// Header toggle
const openMenu = document.querySelector('.adaptive-menu');
const closeMenu = document.querySelector('.adaptive-menu-active');

openMenu.addEventListener('click', () => {
  document.querySelector('.adaptive-menu').classList.add('visually-hidden');
  document.querySelector('.adaptive-menu-active').classList.remove('visually-hidden');

  document.querySelector('.header-nav').style.display = `flex`;
  document.querySelector('.header').classList.add('adaptive-header');
})

closeMenu.addEventListener('click', () => {
  document.querySelector('.adaptive-menu-active').classList.add('visually-hidden');
  setTimeout(() => {
    document.querySelector('.adaptive-menu').classList.remove('visually-hidden');
  }, 300)

  document.querySelector('.header-nav').style.display = `none`;
  document.querySelector('.header').classList.remove('adaptive-header');
})

if (window.screen.width <= 672) {
  const headerLinks = document.querySelectorAll('.header-nav-el');

  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.adaptive-menu-active').classList.add('visually-hidden');
      setTimeout(() => {
        document.querySelector('.adaptive-menu').classList.remove('visually-hidden');
      }, 300)
    
      document.querySelector('.header-nav').style.display = `none`;
      document.querySelector('.header').classList.remove('adaptive-header');
    })
  })
}
else {
  $(".header-nav-el a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(anchor).offset().top - (document.querySelector('.header').clientHeight + 50)
    }, 300);
  });
}