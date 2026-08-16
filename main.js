// Shared site behavior

function revealOnScroll(){
  document.querySelectorAll(".reveal, .reveal-card").forEach((element) => {
    if(element.getBoundingClientRect().top < window.innerHeight - 80){
      element.classList.add("active");
    }
  });
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

  const closeNavigation = () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
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

function updateOnScroll(){
  revealOnScroll();
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
window.addEventListener("load", updateOnScroll);
document.addEventListener("DOMContentLoaded", () => {
  initializeHeroVideo();
  initializeLanguageSwitch();
  initializeMobileNavigation();
  updateOnScroll();
});
