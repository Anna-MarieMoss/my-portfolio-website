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
  .go();
