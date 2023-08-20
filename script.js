// toogle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click at out of box to close sidebar
const hamburger = document.querySelector("#hamburger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.getElementById("ctaButton").addEventListener("click", function () {
  window.location.href = "https://daftar.umri.ac.id/pmb/front/register";
});

document.getElementById("cta5").addEventListener("click", function () {
  window.location.href = "https://siam.umri.ac.id/index.php/member/login";
});
