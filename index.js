const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav');

// add the word "show" to the class names so that it will invoke the relevant css if the hamburger is clicked
const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', () => {
  if (navLeft < 0) {
    menu.classList.add('show');
    document.body.classList.add('show');
    navBar.classList.add('show');
  }
});

// removes the word "show" from the class names so that the nav bar will close when the "X" is clicked
navClose.addEventListener('click', () => {
  if (navLeft < 0) {
    menu.classList.remove('show');
    document.body.classList.remove('show');
    navBar.classList.remove('show');
  }
});

// Fix nav bar
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add('fix-nav');
  } else {
    navBar.classList.remove('fix-nav');
  }
});

// animated job roles text for the hero intro block
new TypeIt('#type1', {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type('Designer', { delay: 400 })
  .pause(500)
  .delete(9)
  .type('Developer', { delay: 400 })
  .pause(500)
  .delete(9)
  .type('Project Mgr', { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

// animated job roles text for "About me" page
new TypeIt('#type2', {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type('Designer', { delay: 400 })
  .pause(500)
  .delete(9)
  .type('Developer', { delay: 400 })
  .pause(500)
  .delete(9)
  .type('Project Mgr', { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

// gsap - javascript web animation on the "Software Developer Title at top of page"
gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -10 }); // slides down
gsap.from('.hamburger', { opacity: 0, duration: 1, delay: 1, x: 20 }); // slides from righthand side
gsap.from('.banner', { opacity: 0, duration: 1, delay: 1.5, x: -200 }); // slide from lefthand side
gsap.from('.hero h3', { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from('.hero h1', { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from('.hero h4', { opacity: 0, duration: 1, delay: 3, y: -30 });
gsap.from('.hero a', { opacity: 0, duration: 1, delay: 3.5, y: 50 }); //slides up
gsap.from('.nav-item', {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
}); //makes nav links ripple up one after the other
gsap.from('.icons span', {
  opacity: 0,
  duration: 1,
  delay: 4,
  x: -30,
  stagger: 0.2,
}); //ripples in from left

// Glidejs
const glide = document.querySelector('.glide');

if (glide)
  new Glide(glide, {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    hoverpause: true,
    autoplay: 2000,
    animationDuration: 800,
    animationTimingFunction: 'ease-in-out',
    breakpoints: {
      996: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
    },
  }).mount();
