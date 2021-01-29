/*--------------------------
        mobile menu
---------------------------*/

let mblMenuIcon = document.querySelector(".mblMenuIcon");

let mblNavLinks = document.querySelector(".mblNavLinks");

mblMenuIcon.addEventListener("click", function () {
  mblNavLinks.classList.toggle("toggleMblMenu");
});

/*--------------------------
        slider section1
---------------------------*/

let img = document.getElementById("slide1");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");

function fadeSlider() {
  if (slide1.style.opacity == 1) {
    slide1.style.opacity = 0;
    slide2.style.opacity = 1;
    dot1.classList.remove("fa-circle");
    dot1.classList.add("fa-circle-o");
    dot2.classList.add("fa-circle");
    dot2.classList.remove("fa-circle-o");
  } else if (slide2.style.opacity == 1) {
    slide2.style.opacity = 0;
    slide1.style.opacity = 1;
    dot2.classList.add("fa-circle-o");
    dot2.classList.remove("fa-circle");
    dot1.classList.remove("fa-circle-o");
    dot1.classList.add("fa-circle");
  }
}
setInterval("fadeSlider()", 8000);

let sliderHeader = document.getElementById("sliderHeader");

dot1.addEventListener("click", function () {
  slide1.setAttribute("style", "opacity:1;");
  slide2.setAttribute("style", "opacity:0;");
  dot2.classList.add("fa-circle-o");
  dot2.classList.remove("fa-circle");
  dot1.classList.remove("fa-circle-o");
  dot1.classList.add("fa-circle");
  sliderHeader.textContent = "BEST QUALITY STEEL FOR CONSTRUCTION";
});

dot2.addEventListener("click", function () {
  slide2.setAttribute("style", "opacity:1;");
  slide1.setAttribute("style", "opacity:0;");
  dot1.classList.remove("fa-circle");
  dot1.classList.add("fa-circle-o");
  dot2.classList.add("fa-circle");
  dot2.classList.remove("fa-circle-o");
  sliderHeader.textContent = "Experience Is Better Way To Build Success";
});

// ----------------

// show uparrow button

let btnArrow = document.querySelector(".btnArrow");

window.addEventListener("scroll", function () {
  btnArrow.classList.toggle("showbtnArrow", window.scrollY > 700);
});

btnArrow.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// //sticky nav bar

// window.addEventListener("scroll", function () {
//   let navBar = document.querySelector(".navBar");
//   navBar.classList.toggle("sticky", window.scrollY > 40);
//   let subMenu1 = document.querySelector(".subMenu1");
//   let subMenu2 = document.querySelector(".subMenu2");
//   let subMenu3 = document.querySelector(".subMenu3");
//   let subMenu4 = document.querySelector(".subMenu4");
//   subMenu1.classList.toggle("toggleSubmenu", window.scrollY > 40);
//   subMenu2.classList.toggle("toggleSubmenu", window.scrollY > 40);
//   subMenu3.classList.toggle("toggleSubmenu", window.scrollY > 40);
//   subMenu4.classList.toggle("toggleSubmenu", window.scrollY > 40);
// });

// show search box

let searchIcon = document.querySelector(".searchIcon");
let searchBox = document.querySelector(".searchBox");

searchIcon.addEventListener("click", function () {
  searchBox.classList.toggle("showsearchBox");
});
