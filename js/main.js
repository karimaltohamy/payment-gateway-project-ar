const headClick = document.querySelector(".lang_list .head");
const list = document.querySelector(".lang_list .list");
const headClick2 = document.querySelector(".lang_list2 .head");
const list2 = document.querySelector(".lang_list2 .list");

headClick.addEventListener("click", () => {
  list.classList.toggle("active");
});

headClick2.addEventListener("click", () => {
  list2.classList.toggle("active");
});

// menu
const iconMenu = document.querySelector(".icon_menu");
const overflow = document.querySelector(".overflow");
const menuMobile = document.querySelector(".menu_mobile");
const btnCloseMenu = document.querySelector(".btn_close_menu");

iconMenu.addEventListener("click", () => {
  overflow.classList.toggle("active");
  menuMobile.classList.toggle("active");
});

btnCloseMenu.addEventListener("click", () => {
  overflow.classList.remove("active");
  menuMobile.classList.remove("active");
});
