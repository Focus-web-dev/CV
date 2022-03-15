// PARTICLES

particlesJS("home", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "triangle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false, mode: "remove" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

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