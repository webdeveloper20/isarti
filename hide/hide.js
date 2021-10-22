function funhid() {
  var x = document.getElementById("hiddin");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function workhid() {
  var x = document.getElementById("work_hiddn");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
// sticky navbar
window.addEventListener("scroll", function() {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});




// perloader
var loader = document.getElementById("preloader");
var navbar = document.getElementById("fixed-top");

window.addEventListener("load", function () {
  loader.style.display = "none";
  if ((loader.style.display = "none")) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
