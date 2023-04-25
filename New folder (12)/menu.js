//for menu
const logo = document.querySelector('.right-logo');
const menu = document.querySelector('.menu-page');
const closeBtn = document.querySelector('.close-menu');

logo.addEventListener('click', () => {
  gsap.to(menu, { duration: 0.5, top: 0, ease: "power4.out" });
});

closeBtn.addEventListener('click', () => {
  gsap.to(menu, { duration: 0.5, top: "-100%", ease: "power4.out" });
});

//menu list

const menuWrapper = document.querySelector('.menu-wrapper');
const menuHeads = document.querySelector('.menu-heads');
const menuList = document.querySelector('.menu-list');
const menuItems = menuList.querySelectorAll('li');

menuWrapper.addEventListener('mousemove', (e) => {
  const containerRect = menuWrapper.getBoundingClientRect();
  const containerWidth = containerRect.width;
  
  const containerLeft = containerRect.left;
  const cursorX = e.clientX;
  const cursorOffsetX = cursorX - containerLeft;
  const normalizedOffsetX = (cursorOffsetX - containerWidth / 2) / containerWidth;
 
  // Get the width of the first menu item
  const firstItemWidth = menuItems[0].getBoundingClientRect().width;
  
  // Calculate the maximum offset based on the width of the menu list and the first item
  const maxOffsetX = (menuList.offsetWidth - containerWidth + firstItemWidth) / 2;

  let offsetX = normalizedOffsetX * maxOffsetX * 3.4;
  
  // Check if the normalized offset exceeds the boundaries of the menu list
  if (offsetX < 0) {
    offsetX = 0;
  } else if (offsetX + containerWidth > menuList.offsetWidth) {
    offsetX = menuList.offsetWidth - containerWidth;
  }

  menuItems.forEach(item => {
    item.style.transform = `translateX(${-offsetX}px)`;
  });
});
// Add event listeners to trigger the animation
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth; // get mouse position as a fraction of window width
  if (x > 0.5) {
    menuList.classList.add('active'); // add active class when mouse is on right side of screen
  } else {
    menuList.classList.remove('active'); // remove active class when mouse is on left side of screen
  }
});


