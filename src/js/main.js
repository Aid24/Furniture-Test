// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

// Swiper Slider

const swiper = new Swiper('.swiper__testimonials', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next__btn',
      prevEl: '.prev__btn',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });

// Animations

gsap.registerPlugin(ScrollTrigger)

const tlLoader = gsap.timeline()

// Loader
tlLoader
  .set('.loader__item', { yPercent: -100 })
  .set('.loader__title', { opacity: 0 })
  .to('.loader__item', {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to('.loader', {
    yPercent: -100,
    duration: 1,
  }, '-=0.2',)

// Laptop animation 
const laptopScreen = window.matchMedia('(min-width: 992px)');

if (laptopScreen.matches) {
  // Hero Scroll animation
  gsap.to('.section__hero', {
    scrollTrigger: {
      trigger: '.section__hero',
      start: 'top top',
      scrub: true,
    },
    css: {
      backgroundColor: '#10895a',
    },
  })
  gsap.to('.hero__title', {
    scrollTrigger: {
      trigger: '.section__hero',
      start: '-100 0',
      scrub: true,
    },
    yPercent: -100,
  }) 
  gsap.to('.hero__svg', {
    scrollTrigger: {
      trigger: '.section__hero',
      start: '-100 0',
      scrub: true,
    },
    scale: 0.5, 
    y: 50,
  }) 
  gsap.to('.hero__img', {
    scrollTrigger: {
      trigger: '.section__hero',
      start: '-100 0',
      scrub: true,
    },
    scale: 1.2, 
    y: -50,
  })
  gsap.to('.hero__buttons', {
    scrollTrigger: {
      trigger: '.section__hero',
      start: '-100 0',
      scrub: true,
    },
    y: 150,
  })
  // Section Materials
  gsap.from('.materials__title', {
    scrollTrigger: {
      trigger: '.section__materials',
      start: '-300 0',
    },
    y: 100,
    autoAlpha: 0,
    duration: 1,
  })
  gsap.from('.materials__text', {
    scrollTrigger: {
      trigger: '.section__materials',
      start: '-300 0',
    },
    y: 150,
    autoAlpha: 0,
    duration: 1,
  })
  gsap.from('.materials__btn', {
    scrollTrigger: {
      trigger: '.section__materials',
      start: '-200 0',
    },
    y: 40,
    autoAlpha: 0,
    duration: 1,
  })
  gsap.from('.products__img', {
    scrollTrigger: {
      trigger: '.section__materials',
      start: '-200 0',
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })
  gsap.from('.products__info', {
    scrollTrigger: {
      trigger: '.section__materials',
      start: '-200 0',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  })

  // Choose Section
  const tlChoosse = gsap.timeline()

  tlChoosse.from('.section__choose', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '0, 0',
      scrub: true,
      pin: true,
    }, 
  })
  .from('.choose__title', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '-150, 0',
      scrub: true,
    },
    y: 30,  
  })
  .from('.choose__text', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '-120, 0',
      scrub: true,
    },
    y: 60,  
  })
  .from('.why__svg', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '0, 0',
      scrub: true,
    },
    scale: 0,  
  })
  .from('.why__img', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '0, 0',
      scrub: true,
    },
    css: {
      width: 0,
      height: '100%',
    },
  })
  .from('.why__item', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '-200, 0',
      scrub: true,
    },
    stagger: 0.25,
    y: 50,
    autoAlpha: 0,
  })
  .from('.why__icon circle', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '-200, 0',
      scrub: true,
    },
    stagger: 0.25,
    css: {
      fill: '#f9bf29',
      fillOpacity: 1,
    }
  })
  .from('.why__icon svg', {
    scrollTrigger: {
      trigger: '.section__choose',
      start: '-200, 0',
      scrub: true,
    },
    stagger: 0.25,
    scale: 2,
  })
  // Help
  .from('.help__img-1', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '0 center',
      scrub: true,
      end: '+=300',
    },
    xPercent: 30,
  })
  .from('.help__img-2', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '0 center',
      scrub: true,
      end: '+=300',
    },
    scale: 0.5,
    xPercent: -100,
    yPercent: -80,
  })
  .from('.help__img-3', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '0 center',
      scrub: true,
      end: '+=400',
    },
    scale: 0.8,
    xPercent: -130,
  })
  .from('.help__title', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '50 center',
      scrub: true,
      end: '+=150',
    },
    y: 50,
    autoAlpha: 0,
  })
  .from('.help__text', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '50 center',
      scrub: true,
      end: '+=150',
    },
    y: 80,
    autoAlpha: 0,
  })
  .from('.help__list li', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '50 center',
      scrub: true,
      end: '+=200',
    },
    stagger: 0.1,
    y: 80,
    x: 80,
    opacity: 0,
  })
  .from('.help__btn', {
    scrollTrigger: {
      trigger: '.section__help',
      start: '100 center',
      scrub: true,
      end: '+=150',
    },
    y: 80,
    autoAlpha: 0,
  })
  // Examples
  .from('.examples__item', {
    scrollTrigger: {
      trigger: '.section__examples',
      start: '0 center',
      scrub: true,
      end: '+=250',
    },
    x: -100,
    autoAlpha: 0,
    stagger: 0.2,
  })
  // Testimonials
  .from('.section__testimonials', {
    scrollTrigger: {
      trigger: '.section__testimonials',
      start: '100 center',
      scrub: true,
      end: '+=150',
    },
    css: {
      backgroundColor: '#578573',
    }
  })
  .from('.section__testimonials .testimonials__title', {
    scrollTrigger: {
      trigger: '.section__testimonials',
      start: '100 center',
      scrub: true,
      end: '+=150',
    },
    css: {
      color: 'white',
    }
  })
  .from('.testimonials__text', {
    scrollTrigger: {
      trigger: '.section__testimonials',
      start: '100 center',
      scrub: true,
      end: '+=150',
    },
    css: {
      color: 'white',
    }
  })
  // Blog
  .from('.blog__title-1', {
    scrollTrigger: {
      trigger: '.section__blog',
      start: '0 center',
      scrub: true,
      end: '+=150',
    },
    css: {
      xPercent: -100,
      backgroundColor: '#3b5d50',
      color: '#3b5d50',
    },
  })
  .from('.blog__img img', {
    scrollTrigger: {
      trigger: '.section__blog',
      start: '0 center',
      scrub: true,
      end: '+=250',
    },
    css: {
      height: 0,
    },
  })
  .from('.blog__title', {
    scrollTrigger: {
      trigger: '.section__blog',
      start: '0 center',
      scrub: true,
      end: '+=250',
    },
    y: -50,
    autoAlpha: 0,
  })
  .from('.blog__info', {
    scrollTrigger: {
      trigger: '.section__blog',
      start: '0 center',
      scrub: true,
      end: '+=250',
    },
    x: -350,
    autoAlpha: 0,
    stagger: 0.5,
  })
  .from('.blog__link', {
    scrollTrigger: {
      trigger: '.section__blog',
      start: '0 350',
      scrub: true,
      end: '+=250',
    },
    x: 150,
  })
  // Subscribe
  .from('.subscribe__img', {
    scrollTrigger: {
      trigger: '.section__subscribe',
      start: '30% center',
      scrub: 1,
    },
    x: 120,
    y: -30,
  })
  .from('.subscribe__svg', {
    scrollTrigger: {
      trigger: '.section__subscribe',
      start: '30% center',
      scrub: 1,
      end: '+=100',
    },
    scale: 0,
  })
  .from('.subscribe__span', {
    scrollTrigger: {
      trigger: '.section__subscribe',
      start: '30% center',
      scrub: 1,
      end: '+=140',
    },
    y: 20,
    autoAlpha: 0,
  })
  .from('.form__item', {
    scrollTrigger: {
      trigger: '.section__subscribe',
      start: '50% center',
      scrub: 1,
      end: '+=100',
    },
    y: 120,
    stagger: 0.5,
  })
}

        