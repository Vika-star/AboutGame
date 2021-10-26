
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const bodyMenu = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function(params) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    bodyMenu.classList.toggle('_active');
  });
}



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    clickable: true,
    dynamicBullets: true,

    renderBullet: function (index, className)
    {
      return '<img class ="' + className + '" src="../img/quote/' + (index + 1) + '.svg" alt="">';
    }


  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Turn Touch grab function on PC
  simulateTouch: true,
  //Sensitivity of swipe
  touchRatio: 1,
  //Angle of working swipe
  touchAngle: 45,
  //Grab coursor
  grabCursor: true,

  //Switching with click to slide
  slideToClicledSlide: true,

  //Navigation with hash
  hashNavigation:
  {
    //watch state of hash
    watchState: true,
  },

  //keyboard control
  keyboard:
  {
    //turn on/off
    enabled: true,
    //turn on/off only when slider in area of viewport
    onlyInViewport: true,
    //turn on/off control with pageUp/pageDown buttons on keyboard
    pageUpDown: true,
  },

  //mouse control
  mousewheel:
  {
    sensitivity: 1,
    //the object class on which this control wheel be able to use
    //P.S. Better to not use it if u got more then one swiper with this slider's name
    eventsTarget: ".swiper-slide"
  },

  autoHeight: false,



  centeredSlides: true,



  autoplay:
  {
    //pause between play
    delay: 1000,
    //end on last slide
    stopOnLastSlide: false,
    //turn off ofter interaction
    disableOnInteraction: false
  },

  speed: 1500,

  slidesPerView: 1,

  slidesPerGroup: 1,

  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});