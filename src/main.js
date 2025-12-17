const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  const navMenu = document.querySelector(".mobile_menue");
  navMenu.classList.toggle("hidden");
});

const hamburgerClose = document.getElementById("hamburger_close");
hamburgerClose.addEventListener("click", () => {
  const navMenu = document.querySelector(".mobile_menue");
  navMenu.classList.add("hidden");
});

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.querySelector(".mobile_menue");
    navMenu.classList.add("hidden");
  });
});

const tabs = document.querySelectorAll(".tab_wrap ul li");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
