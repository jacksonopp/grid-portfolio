const menu = document.querySelector('.menu');
const burger = document.querySelector('.hamburger');
const menuNodeList = menu.childNodes;
const menuX = menuNodeList[1];
const menuLs = menuNodeList[3];
const links = [(menuLs as Element).childNodes[1], (menuLs as Element).childNodes[3], (menuLs as Element).childNodes[5]];

let isOpen = true;

export function openCloseMenu() {
  document.querySelector('#close').addEventListener('click', (e: Event) => toggleMenu());
  burger.addEventListener('click', () => toggleMenu());
  window.addEventListener('resize', () => toggleMenuFromSize(window.innerWidth));
  links.forEach((link) =>
    link.addEventListener('click', () => {
      console.log(window.innerWidth);
      if (window.innerWidth < 1058) {
        console.log('triggered');
        closeMenu();
        isOpen = false;
      }
    })
  );
  toggleMenuFromSize(window.innerWidth);
}

function toggleMenu() {
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isOpen = !isOpen;
}

function openMenu() {
  setTimeout(() => {
    (menuLs as Element).classList.remove('hide-text');
  }, 200);
  menu.classList.remove('close');
  burger.classList.add('close');
}

function closeMenu() {
  (menuLs as Element).classList.add('hide-text');
  menu.classList.add('close');
  setTimeout(() => burger.classList.remove('close'), 200);
}

function toggleMenuFromSize(size: number) {
  console.log(size);
  if (size < 888) {
    closeMenu();
    isOpen = false;
  } else if (size > 888) {
    openMenu();
    isOpen = true;
  }
}
