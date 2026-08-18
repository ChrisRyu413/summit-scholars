(function(){
  const story = document.querySelector('.home-scroll-story');
  if(!story) return;

  const canvas = story.querySelector('.home-story-canvas');
  const scenes = Array.from(story.querySelectorAll('.home-story-scene'));
  const progressBar = story.querySelector('.home-story-progress');
  const context = canvas && canvas.getContext ? canvas.getContext('2d',{alpha:false,desynchronized:true}) : null;
  const totalFrames = Number(story.dataset.frameCount) || 72;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const memory = Number(navigator.deviceMemory) || 8;
  const lowPerformance = reducedMotion.matches || Boolean(connection && connection.saveData) || memory <= 2 || !context;

  let targetFrame = 0;
  let displayedFrame = 0;
  let lastDrawnFrame = -1;
  let renderRequested = false;
  let resizeRequested = false;
  let active = true;
  let loadFailures = 0;

  const frameStep = memory <= 4 || window.innerWidth < 720 ? 2 : 1;
  const requestedFrames = [];
  const loadedFrames = new Map();

  function enableFallback(){
    story.classList.add('is-fallback','is-ready');
    story.style.setProperty('--load-progress','1');
  }

  if(lowPerformance){
    enableFallback();
    return;
  }

  for(let index = 0; index < totalFrames; index += frameStep) requestedFrames.push(index);
  if(requestedFrames[requestedFrames.length - 1] !== totalFrames - 1) requestedFrames.push(totalFrames - 1);

  const formatFrame = index => String(index).padStart(3,'0');

  function updateLoadProgress(){
    const amount = loadedFrames.size / requestedFrames.length;
    story.style.setProperty('--load-progress',String(amount));
    if(loadedFrames.size >= Math.min(10,requestedFrames.length)) story.classList.add('is-ready');
  }

  function loadFrame(index){
    return new Promise(resolve => {
      const image = new Image();
      image.decoding = 'async';
      image.onload = () => {
        loadedFrames.set(index,image);
        updateLoadProgress();
        requestRender();
        resolve();
      };
      image.onerror = () => {
        loadFailures += 1;
        if(loadFailures > Math.max(4,requestedFrames.length * .2)) enableFallback();
        resolve();
      };
      image.src = `frames/frame_${formatFrame(index)}.webp`;
    });
  }

  async function preloadFrames(){
    await loadFrame(0);
    const queue = requestedFrames.filter(index => index !== 0);
    let cursor = 0;
    const workerCount = Math.min(memory <= 4 ? 3 : 6,queue.length);

    async function worker(){
      while(cursor < queue.length && !story.classList.contains('is-fallback')){
        const index = queue[cursor++];
        await loadFrame(index);
      }
    }

    await Promise.all(Array.from({length:workerCount},worker));
    if(!story.classList.contains('is-fallback')) story.classList.add('is-ready');
  }

  function resizeCanvas(){
    if(!context || story.classList.contains('is-fallback')) return;
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1,memory <= 4 ? 1.35 : 2);
    const width = Math.max(1,Math.round(bounds.width * pixelRatio));
    const height = Math.max(1,Math.round(bounds.height * pixelRatio));
    if(canvas.width !== width || canvas.height !== height){
      canvas.width = width;
      canvas.height = height;
      lastDrawnFrame = -1;
    }
  }

  function nearestLoadedFrame(index){
    const rounded = Math.max(0,Math.min(totalFrames - 1,Math.round(index)));
    if(loadedFrames.has(rounded)) return rounded;
    for(let offset = 1; offset < totalFrames; offset += 1){
      const lower = rounded - offset;
      const upper = rounded + offset;
      if(lower >= 0 && loadedFrames.has(lower)) return lower;
      if(upper < totalFrames && loadedFrames.has(upper)) return upper;
    }
    return -1;
  }

  function drawFrame(index){
    const frameIndex = nearestLoadedFrame(index);
    if(frameIndex < 0 || frameIndex === lastDrawnFrame) return;
    const image = loadedFrames.get(frameIndex);
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const scale = Math.max(canvasWidth / image.naturalWidth,canvasHeight / image.naturalHeight);
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    const x = (canvasWidth - drawWidth) / 2;
    const y = (canvasHeight - drawHeight) / 2;

    context.fillStyle = '#020814';
    context.fillRect(0,0,canvasWidth,canvasHeight);
    context.drawImage(image,x,y,drawWidth,drawHeight);
    lastDrawnFrame = frameIndex;
  }

  function smoothStep(value){
    const amount = Math.max(0,Math.min(1,value));
    return amount * amount * (3 - 2 * amount);
  }

  function sceneOpacity(progress,start,end){
    const duration = Math.max(.01,end - start);
    const fade = Math.min(.065,duration * .28);
    if(progress < start || progress > end) return 0;
    const fadeIn = start === 0 ? 1 : smoothStep((progress - start) / fade);
    const fadeOut = end === 1 ? 1 : smoothStep((end - progress) / fade);
    return Math.min(fadeIn,fadeOut);
  }

  function updateScenes(progress){
    scenes.forEach(scene => {
      const start = Number(scene.dataset.storyStart) || 0;
      const end = Number(scene.dataset.storyEnd) || 1;
      const opacity = sceneOpacity(progress,start,end);
      const midpoint = (start + end) / 2;
      const direction = progress <= midpoint ? 1 : -1;
      const translate = direction * (1 - opacity) * 34;
      const scale = .985 + opacity * .015;
      scene.style.opacity = opacity.toFixed(3);
      scene.style.transform = `translate3d(0,${translate.toFixed(2)}px,0) scale(${scale.toFixed(4)})`;
      scene.style.pointerEvents = opacity > .72 ? 'auto' : 'none';
    });
    story.style.setProperty('--story-progress',String(progress));
    story.classList.toggle('is-scrolling',progress > .018);
    if(progressBar) progressBar.setAttribute('data-progress',String(Math.round(progress * 100)));
  }

  function measureScroll(){
    const bounds = story.getBoundingClientRect();
    const travel = Math.max(1,story.offsetHeight - window.innerHeight);
    const progress = Math.max(0,Math.min(1,-bounds.top / travel));
    active = bounds.bottom > 0 && bounds.top < window.innerHeight;
    targetFrame = progress * (totalFrames - 1);
    updateScenes(progress);
    requestRender();
  }

  function render(){
    renderRequested = false;
    if(!active || story.classList.contains('is-fallback')) return;
    const distance = targetFrame - displayedFrame;
    displayedFrame = Math.abs(distance) < .05 ? targetFrame : displayedFrame + distance * .2;
    drawFrame(displayedFrame);
    if(Math.abs(targetFrame - displayedFrame) >= .05) requestRender();
  }

  function requestRender(){
    if(!renderRequested){
      renderRequested = true;
      window.requestAnimationFrame(render);
    }
  }

  function requestResize(){
    if(resizeRequested) return;
    resizeRequested = true;
    window.requestAnimationFrame(() => {
      resizeRequested = false;
      resizeCanvas();
      measureScroll();
    });
  }

  resizeCanvas();
  measureScroll();
  preloadFrames();

  window.addEventListener('scroll',measureScroll,{passive:true});
  window.addEventListener('resize',requestResize,{passive:true});
  window.addEventListener('orientationchange',requestResize,{passive:true});
  document.addEventListener('visibilitychange',() => { if(!document.hidden) requestResize(); });
})();
