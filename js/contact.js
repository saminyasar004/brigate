/*--------------------------
        mobile menu
---------------------------*/

let mblMenuIcon = document.querySelector(".mblMenuIcon");

let mblNavLinks = document.querySelector(".mblNavLinks");

mblMenuIcon.addEventListener("click", function () {
  mblNavLinks.classList.toggle("toggleMblMenu");
});

// ----------------

// show uparrow button

let btnArrow = document.querySelector(".btnArrow");

window.addEventListener("scroll", function () {
  btnArrow.classList.toggle("showbtnArrow", window.scrollY > 100);
});

btnArrow.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// show search box

let searchIcon = document.querySelector(".searchIcon");
let searchBox = document.querySelector(".searchBox");

searchIcon.addEventListener("click", function () {
  searchBox.classList.toggle("showsearchBox");
});
