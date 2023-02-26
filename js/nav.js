//* 햄버거 메뉴 액션
const HamburgerMenu = document.getElementById("hamburger_menu");

const MenuList = document.getElementById("menu_on");

const MenuClose = document.getElementById("menu_close");

//*팝업시 뒤부분 스크롤 제거
const body = document.querySelector("body");
let scrollPosition = 0;

//*메뉴 열기

function HamburgerMenuOn(event) {
  MenuList.style.left = "0vw";
  MenuList.style.opacity = 1;
  MenuList.style.transition = "left 1s";
  scrollPosition = window.pageYOffset;
  body.style.overflow = "hidden";
  body.style.position = "fixed";
  body.style.top = `-${scrollPosition}px`;
  body.style.width = "100%";
}
HamburgerMenu.addEventListener("click", HamburgerMenuOn);

//*메뉴 닫기

const menuItems = document.querySelectorAll(".menu_items");

function HamburgerMenuClose(event) {
  MenuList.style.left = "100vw";
  body.style.removeProperty("overflow");
  body.style.removeProperty("position");
  body.style.removeProperty("top");
  body.style.removeProperty("width");
  window.scrollTo(0, scrollPosition);
  setTimeout(() => {
    MenuList.style.transition = "0s";
  }, 1000);
}
MenuClose.addEventListener("click", HamburgerMenuClose);
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", HamburgerMenuClose);
}
