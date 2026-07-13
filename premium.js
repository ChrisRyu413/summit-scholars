// Reversible interaction layer for the premium theme.

(function(){
  const pageLinks = {
    profile: "profile.html",
    courses: "courses.html",
    consulting: "consulting.html",
    schedule: "schedule.html",
    connect: "connect.html"
  };

  function setActiveNavigation(){
    const page = document.body.dataset.page;
    const activeHref = pageLinks[page];
    if(!activeHref) return;

    const activeLink = document.querySelector(`header nav a[href="${activeHref}"]`);
    if(activeLink){
      activeLink.classList.add("is-active");
      activeLink.setAttribute("aria-current","page");
    }
  }

  function createScrollProgress(){
    const progress = document.createElement("div");
    const bar = document.createElement("span");

    progress.className = "premium-progress";
    bar.className = "premium-progress-bar";
    progress.setAttribute("aria-hidden","true");
    progress.appendChild(bar);
    document.body.appendChild(progress);

    function update(){
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const amount = scrollable > 0 ? Math.min(window.scrollY / scrollable,1) : 0;
      bar.style.transform = `scaleX(${amount})`;
    }

    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    update();
  }

  function initializeHeader(){
    const header = document.querySelector("header");
    if(!header) return;

    function update(){
      header.classList.toggle("is-scrolled",window.scrollY > 24);
    }

    window.addEventListener("scroll",update,{passive:true});
    update();
  }

  function initializeCardSpotlights(){
    if(!window.matchMedia("(pointer:fine)").matches) return;

    const cards = document.querySelectorAll(".feature, .course-box, .profile-block, .connect-card, .consult-card, .test-score-card, .ap-course-card");

    cards.forEach((card) => {
      card.classList.add("premium-interactive");
      card.addEventListener("pointermove",(event) => {
        const bounds = card.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        card.style.setProperty("--pointer-x",`${x}%`);
        card.style.setProperty("--pointer-y",`${y}%`);
      });
    });
  }

  function initializePremiumLayer(){
    setActiveNavigation();
    createScrollProgress();
    initializeHeader();
    initializeCardSpotlights();
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded",initializePremiumLayer);
  }else{
    initializePremiumLayer();
  }
})();
