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
  console.log(animatedItems);
}