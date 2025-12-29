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

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scrollBtn");
  const scrollHeader = document.getElementById("header");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-right-1/2");
    scrollUpBtn.classList.add("right-4");
  } else {
    scrollUpBtn.classList.add("-right-1/2");
    scrollUpBtn.classList.remove("right-4");
  }

  if (this.scrollY >= 50) {
    scrollHeader.classList.add("border-b", "border-secondary");
  } else {
    scrollHeader.classList.remove("border-b", "border-secondary");
  }
};

window.addEventListener("scroll", scrollUp);

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-icon");

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("theme", "dark");
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("theme", "dark");
  }
});

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondary");

    if (item.href.includes(current)) {
      item.classList.add("text-secondary");
    }
  });
};

window.addEventListener("scroll", activeLink);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
});

sr.reveal(".home_image");
sr.reveal(".home_content", { origin: "bottom"});
sr.reveal(".category_card", { interval: 300});
sr.reveal(".promo_card-1", { origin: "left"});
sr.reveal(".promo_card-2", { origin: "right"});
