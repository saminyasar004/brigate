/*--------------------------
        mobile menu
---------------------------*/

let mblMenuIcon = document.querySelector(".mblMenuIcon");

let mblNavLinks = document.querySelector(".mblNavLinks");

mblMenuIcon.addEventListener("click", function () {
  mblNavLinks.classList.toggle("toggleMblMenu");
});


/*--------------------------
        slider section2
---------------------------*/

let img = document.getElementById("slide3");
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");

function fadeSlider() {
  if (slide3.style.opacity == 1) {
    slide3.style.opacity = 0;
    slide4.style.opacity = 1;
    dot1.classList.remove("fa-circle");
    dot1.classList.add("fa-circle-o");
    dot2.classList.add("fa-circle");
    dot2.classList.remove("fa-circle-o");
  } else if (slide4.style.opacity == 1) {
    slide4.style.opacity = 0;
    slide3.style.opacity = 1;
    dot2.classList.add("fa-circle-o");
    dot2.classList.remove("fa-circle");
    dot1.classList.remove("fa-circle-o");
    dot1.classList.add("fa-circle");
  }
}
setInterval("fadeSlider()", 8000);

dot1.addEventListener("click", function () {
  slide3.setAttribute("style", "opacity:1;");
  slide4.setAttribute("style", "opacity:0;");
  dot2.classList.add("fa-circle-o");
  dot2.classList.remove("fa-circle");
  dot1.classList.remove("fa-circle-o");
  dot1.classList.add("fa-circle");
});

dot2.addEventListener("click", function () {
  slide3.setAttribute("style", "opacity:0;");
  slide4.setAttribute("style", "opacity:1;");
  dot1.classList.remove("fa-circle");
  dot1.classList.add("fa-circle-o");
  dot2.classList.add("fa-circle");
  dot2.classList.remove("fa-circle-o");
});


// ----------------

// show uparrow button

let btnArrow = document.querySelector(".btnArrow");

window.addEventListener("scroll", function () {
  btnArrow.classList.toggle("showbtnArrow", window.scrollY > 700);
});

btnArrow.addEventListener("click", function() {
  window.scrollTo(0, 0); 
})

// //sticky nav bar

// window.addEventListener("scroll", function () {
//   let navBar2 = document.querySelector(".navBar2");
//   navBar2.classList.toggle("sticky", window.scrollY > 40);
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

// project button animation

let btnAll = document.getElementById("btnAll");
let btnDesigner = document.getElementById("btnDesigner");
let btnEx = document.getElementById("btnEx");
let btnIn = document.getElementById("btnIn");

let projectBoxLast = document.querySelector(
  ".projectContainer:last-child .projectBox:last-child"
);

let projectBoxFifth = document.querySelector(
  ".projectContainer:last-child .projectBox:nth-child(2)"
);

let projectContainerLast = document.querySelector(
  ".projectContainer:last-child"
);

btnAll.addEventListener("click", function () {
  btnDesigner.classList.remove("activeBox");
  btnAll.classList.add("activeBox");
  btnEx.classList.remove("activeBox");
  btnIn.classList.remove("activeBox");
  projectBoxLast.setAttribute("style", "display:block;");
  projectBoxFifth.setAttribute("style", "display:block;");
  projectContainerLast.setAttribute("style", "display:block;");
});

btnDesigner.addEventListener("click", function () {
  btnDesigner.classList.add("activeBox");
  btnAll.classList.remove("activeBox");
  btnEx.classList.remove("activeBox");
  btnIn.classList.remove("activeBox");
  projectBoxLast.setAttribute("style", "display:none;");
});

btnEx.addEventListener("click", function () {
  btnDesigner.classList.remove("activeBox");
  btnAll.classList.remove("activeBox");
  btnEx.classList.add("activeBox");
  btnIn.classList.remove("activeBox");
  projectBoxLast.setAttribute("style", "display:none;");
  projectBoxFifth.setAttribute("style", "display:none;");
});

btnIn.addEventListener("click", function () {
  btnDesigner.classList.remove("activeBox");
  btnAll.classList.remove("activeBox");
  btnEx.classList.remove("activeBox");
  btnIn.classList.add("activeBox");
  projectContainerLast.setAttribute("style", "display:none;");
});
