// Shared site behavior

function revealOnScroll(){
  document.querySelectorAll(".reveal, .reveal-card").forEach((element) => {
    if(element.getBoundingClientRect().top < window.innerHeight - 80){
      element.classList.add("active");
    }
  });
}

function updateJourney(){
  const student = document.getElementById("journey-student");
  const track = document.getElementById("journey-track");
  const sections = document.querySelectorAll("main section");

  if(!student || !track || sections.length === 0) return;

  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = documentHeight > 0 ? window.scrollY / documentHeight : 0;
  const trackHeight = track.clientHeight - 30;
  const position = Math.min(Math.max(progress * trackHeight, 0), trackHeight);

  student.style.transform = `translate(-50%, ${position}px)`;

  const icons = ["🧑", "📘", "📚", "🏀", "🎓"];
  let currentIndex = 0;

  sections.forEach((section, index) => {
    if(section.getBoundingClientRect().top < window.innerHeight * 0.4){
      currentIndex = index;
    }
  });

  student.textContent = icons[Math.min(currentIndex, icons.length - 1)];
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
  updateJourney();
}

window.addEventListener("scroll", updateOnScroll, { passive: true });
window.addEventListener("load", updateOnScroll);
document.addEventListener("DOMContentLoaded", () => {
  initializeHeroVideo();
  initializeLanguageSwitch();
  updateOnScroll();
});
