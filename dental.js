(function(){
  const pathway = document.querySelector('.dental-pathway');
  const stages = Array.from(document.querySelectorAll('.dental-stage'));
  const steps = Array.from(document.querySelectorAll('.dental-progress li'));
  const desktopQuery = window.matchMedia('(min-width: 901px) and (min-height: 700px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentIndex = 0;
  let scrollTicking = false;

  if(!pathway || !stages.length) return;

  function sequenceEnabled(){
    return desktopQuery.matches && !reducedMotionQuery.matches;
  }

  function setCurrent(index){
    currentIndex = Math.max(0,Math.min(stages.length - 1,index));
    stages.forEach((stage,stageIndex) => { stage.open = stageIndex === currentIndex; });
    steps.forEach((step,stepIndex) => {
      step.classList.toggle('is-current',stepIndex === currentIndex);
      step.classList.toggle('is-complete',stepIndex < currentIndex);
    });
    pathway.style.setProperty('--dental-step-progress',String(currentIndex / (stages.length - 1)));
  }

  function scrollToStep(index){
    if(!sequenceEnabled()){
      setCurrent(index);
      stages[index].scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    const sectionTop = window.scrollY + pathway.getBoundingClientRect().top;
    const travel = Math.max(1,pathway.offsetHeight - window.innerHeight);
    const ratio = (index + .12) / stages.length;
    window.scrollTo({top:sectionTop + travel * ratio,behavior:'smooth'});
  }

  function updateSequenceMode(){
    pathway.classList.toggle('is-scroll-sequence',sequenceEnabled());
    setCurrent(currentIndex);
  }

  function updateFromScroll(){
    if(sequenceEnabled()){
      const rect = pathway.getBoundingClientRect();
      const travel = Math.max(1,pathway.offsetHeight - window.innerHeight);
      const ratio = Math.min(1,Math.max(0,-rect.top / travel));
      const index = Math.min(stages.length - 1,Math.floor(ratio * stages.length));
      if(index !== currentIndex) setCurrent(index);
    }
    scrollTicking = false;
  }

  function requestScrollUpdate(){
    if(!scrollTicking){
      window.requestAnimationFrame(updateFromScroll);
      scrollTicking = true;
    }
  }

  steps.forEach((step,index) => {
    step.querySelector('button').addEventListener('click',() => scrollToStep(index));
  });

  stages.forEach((stage,index) => {
    stage.querySelector('summary').addEventListener('click',event => {
      if(sequenceEnabled()){
        event.preventDefault();
        scrollToStep(index);
      }
    });
    stage.addEventListener('toggle',() => {
      if(!sequenceEnabled() && stage.open){
        stages.forEach((other,otherIndex) => { if(otherIndex !== index) other.open = false; });
        currentIndex = index;
        steps.forEach((step,stepIndex) => step.classList.toggle('is-current',stepIndex === index));
      }
    });
  });

  updateSequenceMode();
  updateFromScroll();
  window.addEventListener('scroll',requestScrollUpdate,{passive:true});
  window.addEventListener('resize',updateSequenceMode);
  desktopQuery.addEventListener('change',updateSequenceMode);
  reducedMotionQuery.addEventListener('change',updateSequenceMode);
})();
