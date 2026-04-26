const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mainNav.classList.toggle("show");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("show");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      menuToggle.classList.remove("active");
      mainNav.classList.remove("show");
    }
  });
}
