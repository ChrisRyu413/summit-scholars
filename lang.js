
// Summit Scholars Website Language System

/* ----------------------------------------------------------------
PROJECT STRUCTURE (for scalable multilingual architecture)

tutoring-website/
│
├── index.html
├── profile.html
├── courses.html
├── consulting.html
├── schedule.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── lang.js
│   ├── navigation.js
│   └── animations.js
│
└── translations/
    ├── nav.js
    ├── hero.js
    ├── profile.js
    ├── courses.js
    └── consulting.js

As the site grows, each page's translations can move into
the /translations folder and be imported here.
---------------------------------------------------------------- */

/* ---------------- NAVIGATION ---------------- */
const nav = {

  nav_profile: { en: "Profile", ko: "프로필" },
  nav_courses: { en: "Courses", ko: "수업" },
  nav_consulting: { en: "College Consulting", ko: "대학 컨설팅" },
  nav_schedule: { en: "Schedule", ko: "상담 예약" }

};

/* ---------------- HOME PAGE ---------------- */
const hero = {

  hero_title: { en: "Summit Scholars<br>Academic Mentorship", ko: "Summit Scholars<br>학업 멘토링" },
  hero_subtitle: { en: "Custom curriculum. Structured thinking. Proven academic results.", ko: "맞춤형 커리큘럼 · 체계적인 사고 · 검증된 학업 성과" },
  hero_motto: { en: '"I design my own materials and guide students toward real academic success."', ko: '"모든 수업 자료는 직접 제작하며 학생들이 진정한 학업 성취를 이루도록 지도합니다."' },

  feature1_title: { en: "Custom Materials", ko: "맞춤형 학습 자료" },
  feature2_title: { en: "Concept-Based Learning", ko: "개념 중심 학습" },
  feature3_title: { en: "Focused Mentorship", ko: "집중 멘토링" },

  feature1_text: { en: "All worksheets and lesson materials are personally designed.", ko: "모든 워크시트와 연습 문제, 시험 대비 자료는 직접 제작합니다." },
  feature2_text: { en: "Students learn reasoning and conceptual understanding.", ko: "단순 암기가 아닌 개념과 원리를 이해하도록 지도합니다." },
  feature3_text: { en: "Each student receives structured guidance and feedback.", ko: "학생 맞춤형 학습 전략과 지속적인 피드백을 제공합니다." },

  services_title: { en: "What Summit Scholars Offers", ko: "Summit Scholars 프로그램" },
  pathway_title: { en: "Academic Pathway", ko: "학업 성장 경로" },
  pathway_hint: { en: "← Scroll to explore the academic progression →", ko: "← 스크롤하여 학업 성장 단계를 확인하세요 →" },

  summit_title: { en: "Why Become a Summit Scholar", ko: "왜 Summit Scholars 인가" }

};

/* ---------------- PROFILE PAGE ---------------- */
const profile = {

  profile_title: { en: "About the Founder", ko: "설립자 소개" },

  profile_intro1: {
    en: "I am the founder of Summit Scholars, leading a mentorship program dedicated to developing strong analytical thinking and academic excellence. Our team of mentors supports students through structured guidance and academic coaching.",
    ko: "저는 Summit Scholars의 설립자로서 학생들의 분석적 사고와 학업 성장을 이끄는 멘토링 프로그램을 운영하고 있습니다. 여러 멘토들과 함께 학생들의 학업 발전을 지원합니다."
  },

  affiliated_with: { en: "Affiliated with:", ko: "소속:" },

  education: { en: "Education", ko: "학력" },
  research: { en: "Research & Academic Experience", ko: "연구 및 학문 활동" },
  leadership: { en: "Leadership & Activities", ko: "리더십 및 활동" },
  awards: { en: "Awards & Honors", ko: "수상 경력" },
  publications: { en: "Publications", ko: "출판" },
  skills: { en: "Skills", ko: "기술" }

};

/* ---------------- COURSES PAGE ---------------- */
const courses = {

  courses_title: { en: "Courses", ko: "수업 과목" },

  courses_intro: {
    en: "Students are trained using structured practice, real mock examinations based on previous AP exam questions, and concept-focused lessons.",
    ko: "학생들은 실제 AP 시험 문제를 기반으로 한 모의고사와 개념 중심 수업을 통해 높은 학업 성과를 달성하도록 훈련됩니다."
  },

  ap_courses: { en: "AP Courses (Grades 9-12)", ko: "AP 과정 (9-12학년)" },
  ap_dev: { en: "AP Courses in Development", ko: "개발 중인 AP 과정" },
  foundational: { en: "Foundational Courses (Grades 4-8)", ko: "기초 과정 (4-8학년)" }

};

/* ---------------- CONSULTING PAGE ---------------- */
const consulting = {

  consulting_title: { en: "College Consulting", ko: "대학 입시 컨설팅" },

  consulting_intro: {
    en: "Summit Scholars provides a structured consulting framework guiding students from early academic planning to competitive university admissions. Each stage builds a strong academic identity tailored to the student’s intended field.",
    ko: "Summit Scholars는 학생들이 초기 학업 계획부터 경쟁력 있는 대학 진학까지 준비할 수 있도록 체계적인 컨설팅 프레임워크를 제공합니다. 각 단계는 학생이 선택한 전공 분야에 맞는 강한 학업 정체성을 형성하도록 설계되어 있습니다."
  },

  consulting_major_title: { 
    en: "Major-Focused Strategy", 
    ko: "전공 중심 전략" 
  },

  consulting_major_text: {
    en: "Consulting begins by identifying the student’s intended academic pathway such as medicine, dentistry, business, or other disciplines. Each student receives a long-term strategy aligned with their field. Students pursuing medicine or dentistry receive direct guidance from the program founder.",
    ko: "컨설팅은 의대, 치대, 경영 등 학생이 목표로 하는 전공 분야를 설정하는 것에서 시작합니다. 각 학생은 자신의 진로에 맞는 장기 전략을 수립하며, 의대와 치대를 준비하는 학생들은 프로그램 설립자의 직접 지도를 받게 됩니다."
  },

  consulting_academic_title: { 
    en: "Academic Performance & Testing", 
    ko: "학업 성취 및 시험 전략" 
  },

  consulting_academic_text: {
    en: "Students receive structured guidance for GPA management, course selection, SAT preparation, AP coursework strategy, and other standardized examinations that strengthen a competitive academic profile.",
    ko: "학생들은 GPA 관리, 과목 선택 전략, SAT 준비, AP 과목 전략 등 경쟁력 있는 학업 프로필을 구축하기 위한 체계적인 학습 지도를 받습니다."
  },

  consulting_portfolio_title: { 
    en: "Portfolio Development", 
    ko: "포트폴리오 개발" 
  },

  consulting_extracurricular_title: { 
    en: "Extracurricular Activities", 
    ko: "비교과 활동" 
  },

  consulting_honors_title: { 
    en: "Honors & Distinction", 
    ko: "수상 및 성과" 
  },

  consulting_application_title: { 
    en: "College Application Strategy", 
    ko: "대학 지원 전략" 
  },

  consulting_application_text: {
    en: "The final stage focuses on building a compelling university application. Students receive guidance on Common Application essays, supplemental essays, and presenting their full academic portfolio as a coherent narrative for university admissions.",
    ko: "마지막 단계에서는 경쟁력 있는 대학 지원서를 완성하는 데 집중합니다. 학생들은 Common Application 에세이, 보충 에세이 작성, 그리고 자신의 학업 및 활동 포트폴리오를 하나의 일관된 이야기로 구성하는 방법에 대한 지도를 받습니다."
  },

  consulting_motto: {
    en: "Plan early. Build depth. Present your story well.",
    ko: "일찍 계획하고, 깊이를 쌓고, 자신의 이야기를 잘 전달하세요."
  },

  consulting_motto_sub: {
    en: "A structured pathway from academic planning to successful university admission.",
    ko: "체계적인 학업 계획부터 성공적인 대학 진학까지 이어지는 로드맵입니다."
  },

  consulting_notice: {
    en: "College consulting services are currently in development and will be launching soon.",
    ko: "대학 입시 컨설팅 서비스는 현재 준비 중이며 곧 제공될 예정입니다."
  },

  consulting_text1: {
    en: "College consulting services will open soon through Summit Scholars.",
    ko: "Summit Scholars를 통한 대학 입시 컨설팅 서비스는 곧 시작될 예정입니다."
  },

  consulting_text2: {
    en: "Future offerings will include long-term academic planning and college application mentorship.",
    ko: "향후 제공 서비스에는 장기 학업 계획, 과목 선택 전략, 대학 지원 준비가 포함될 예정입니다."
  },

  consulting_text3: {
    en: "More information will be available in a future update.",
    ko: "자세한 정보는 추후 업데이트될 예정입니다."
  },

  schedule_title: { en: "Schedule a Meeting", ko: "상담 예약" },

  schedule_text1: {
    en: "Parents may schedule an introductory consultation to discuss student academic goals and course planning.",
    ko: "학부모님들은 학생의 학업 목표와 과목 계획에 대해 상담을 예약할 수 있습니다."
  },

  consult_length: { en: "Consultation Length:", ko: "상담 시간:" },
  consult_format: { en: "Format:", ko: "형식:" },
  consult_email: { en: "Email to schedule:", ko: "예약 이메일:" },
  consult_length_full: { en: "Consultation Length: 30 minutes", ko: "상담 시간: 30분" },
  consult_format_full: { en: "Format: Online meeting", ko: "형식: 온라인 미팅" },
  consult_booking_full: { en: "Booking: Schedule a meeting directly through the booking link below.", ko: "예약: 아래 링크를 통해 상담 일정을 바로 예약하세요." },

  summit_text: {
    en: "Summit Scholars combines academic rigor, long-term mentorship, and strategic planning to develop students who are not only academically strong but also intellectually curious and well prepared for the most competitive universities.",
    ko: "Summit Scholars는 학문적 엄격함, 장기 멘토십, 전략적 계획을 결합하여 학생들이 학업적으로 뛰어날 뿐만 아니라 지적 호기심을 갖고 경쟁력 있는 대학 진학을 준비하도록 돕습니다."
  },

  path_foundations: { en: "Foundations", ko: "기초 단계" },
  path_foundations_text: { en: "Core mathematics and academic writing", ko: "핵심 수학과 학문적 글쓰기" },

  path_mastery: { en: "Mastery", ko: "심화 학습" },
  path_mastery_text: { en: "Advanced coursework including AP classes", ko: "AP 과목을 포함한 심화 학업 과정" },

  path_extracurricular: { en: "Extracurricular Development", ko: "비교과 활동 발전" },
  path_extracurricular_text: { en: "Research, volunteering, nonprofit initiatives, and academic competitions", ko: "연구, 봉사활동, 비영리 프로젝트, 학술 대회" },

  path_college: { en: "College Applications", ko: "대학 지원 전략" },
  path_college_text: { en: "Strategic positioning for competitive university admissions", ko: "상위권 대학 진학을 위한 전략적 준비" },

  path_postcollege: { en: "Post-College Preparation", ko: "대학 이후 준비" },
  path_postcollege_text: { en: "Graduate school and professional development planning", ko: "대학원 및 진로 개발 계획" },

  book_consult: { en: "Book a Consultation", ko: "상담 예약하기" }

};

/* ---------------- GLOBAL TRANSLATION MERGE ---------------- */

const translations = {
  ...nav,
  ...hero,
  ...profile,
  ...courses,
  ...consulting
};

function applyLanguage(lang) {

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if(!entry) return;
    const text = entry[lang] || entry["en"]; // fallback to English
    if(!text) return;
    if(el.tagName === "H1" || el.tagName === "DIV" || el.innerHTML.includes("<br>")){
      el.innerHTML = text;
    } else {
      el.innerText = text;
    }
  });
}

function setKorean(){
  localStorage.setItem('siteLanguage','ko');
  applyLanguage('ko');
}

function setEnglish(){
  localStorage.setItem('siteLanguage','en');
  applyLanguage('en');
}

/* ---------------- FLOATING CONSULT BUTTON ---------------- */

function injectConsultStyles(){
  const style = document.createElement("style");
  style.innerHTML = `
  .floating-consult{
    position:fixed;
    right:28px;
    bottom:28px;

    background:linear-gradient(135deg,#d6b25a,#b89333);
    color:#fff;

    padding:14px 22px;

    border-radius:32px;

    font-weight:600;
    font-size:14px;
    letter-spacing:.3px;

    text-decoration:none;

    box-shadow:
      0 6px 20px rgba(0,0,0,0.25),
      0 0 12px rgba(214,178,90,0.45);

    z-index:9999;

    overflow:hidden;

    transition:
      transform .22s ease,
      box-shadow .22s ease,
      background .25s ease;
  }

  .floating-consult:hover{

    transform:translateY(-4px) scale(1.04);

    box-shadow:
      0 12px 32px rgba(0,0,0,0.35),
      0 0 18px rgba(214,178,90,0.7);

    background:linear-gradient(135deg,#e2c067,#c9a046);
  }

  .floating-consult::after{
    content:"";
    position:absolute;
    top:0;
    left:-75%;
    width:50%;
    height:100%;
    background:linear-gradient(
      120deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.55) 50%,
      rgba(255,255,255,0) 100%
    );
    transform:skewX(-20deg);
    animation:consultShine 4s infinite;
  }

  @keyframes consultShine{
    0%{ left:-75%; }
    60%{ left:130%; }
    100%{ left:130%; }
  }
  `;
  document.head.appendChild(style);
}

function createConsultButton(){

  if(document.querySelector(".floating-consult")) return;

  const btn = document.createElement("a");

  btn.href = "https://calendly.com/chrisryu4986/30min";
  btn.target = "_blank";
  btn.className = "floating-consult";

  btn.setAttribute("data-i18n","book_consult");
  btn.innerText = "Book Consultation";

  document.body.appendChild(btn);

}

injectConsultStyles();

if(document.body){
  createConsultButton();
}else{
  window.addEventListener("DOMContentLoaded", createConsultButton);
}

window.addEventListener('DOMContentLoaded', function(){

  const saved = localStorage.getItem('siteLanguage') || 'en';

  applyLanguage(saved);

});