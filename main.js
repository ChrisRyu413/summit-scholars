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

function updateOnScroll(){
  revealOnScroll();
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
window.addEventListener("load", updateOnScroll);
document.addEventListener("DOMContentLoaded", () => {
  initializeHeroVideo();
  initializeLanguageSwitch();
  updateOnScroll();
});
