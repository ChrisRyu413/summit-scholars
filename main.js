// Shared site behavior

function initializeReveals(){
  const elements = Array.from(document.querySelectorAll(".reveal, .reveal-card"));
  if(!elements.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion || !("IntersectionObserver" in window)){
    elements.forEach((element) => element.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  },{rootMargin:"0px 0px -70px",threshold:.06});

  elements.forEach((element) => observer.observe(element));
}

function initializeHeroVideo(){
  const heroVideo = document.getElementById("hero-video");
  if(heroVideo) heroVideo.playbackRate = 0.5;
}

function initializeLanguageSwitch(){
  document.querySelectorAll("[data-language]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const language = link.getAttribute("data-language");

      if(language === "ko" && typeof setKorean === "function") setKorean();
      if(language === "en" && typeof setEnglish === "function") setEnglish();
    });
  });
}

function initializeMobileNavigation(){
  const toggle = document.querySelector(".nav-toggle");
  const navigation = document.getElementById("site-nav");
  if(!toggle || !navigation) return;

  const label = (open) => document.documentElement.lang === "ko" ? (open ? "메뉴 닫기" : "메뉴 열기") : (open ? "Close navigation menu" : "Open navigation menu");

  const closeNavigation = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", label(false));
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", label(isOpen));
  });

  navigation.addEventListener("click", (event) => {
    if(event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if(event.key === "Escape" && document.body.classList.contains("nav-open")){
      closeNavigation();
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if(document.body.classList.contains("nav-open") && !event.target.closest("header")){
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth > 900) closeNavigation();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeHeroVideo();
  initializeLanguageSwitch();
  initializeMobileNavigation();
  initializeReveals();
});
