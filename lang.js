
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

  skip_content: { en: "Skip to main content", ko: "본문으로 바로가기" },

  nav_profile: { en: "Our Team", ko: "멘토 소개" },
  nav_courses: { en: "Courses", ko: "수업" },
  nav_consulting: { en: "College Consulting", ko: "대학 컨설팅" },
  nav_dental: { en: "Dental Admissions", ko: "치대 입시" },
  nav_schedule: { en: "Schedule", ko: "상담 예약" },
  nav_connect: { en: "Connect", ko: "연락처" }

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

  services_title: { en: "What Summit Scholars Offers", ko: "Summit Scholars가 제공하는 통합 지원" },
  pathway_title: { en: "Academic Pathway", ko: "학업 성장 경로" },
  pathway_hint: { en: "← Scroll to explore the academic progression →", ko: "← 스크롤하여 학업 성장 단계를 확인하세요 →" },

  home_story_kicker: { en: "THE SUMMIT SCHOLARS METHOD", ko: "SUMMIT SCHOLARS 학업 성장 시스템" },
  home_story_loading: { en: "Preparing the experience", ko: "화면을 준비하고 있습니다" },
  home_story_opening: { en: "ONE STUDENT. ONE EVOLVING STRATEGY.", ko: "한 학생을 위한, 함께 발전하는 하나의 전략" },
  home_story_close: { en: "Academics, mentorship, and admissions—moving in one direction.", ko: "학업, 멘토링, 대학 입시를 하나의 방향으로 연결합니다." },
  home_story_scroll: { en: "Scroll to explore", ko: "스크롤하여 확인하세요" },
  home_pathway_kicker: { en: "ONE CONNECTED PATH", ko: "하나로 연결된 성장 경로" },
  home_letter_kicker: { en: "WHY SUMMIT SCHOLARS", ko: "SUMMIT SCHOLARS가 시작된 이유" },
  home_letter_note: { en: "Built from firsthand experience. Designed around each student.", ko: "직접 경험한 교육과 입시를 바탕으로, 학생 한 명 한 명에 맞게 설계합니다." },
  home_explore_kicker: { en: "EXPLORE SUMMIT SCHOLARS", ko: "SUMMIT SCHOLARS 둘러보기" },
  home_explore_title: { en: "Every goal has<br>an entrance.", ko: "학생의 다음 목표로 이어지는<br>여섯 개의 시작점" },
  home_explore_text: { en: "Preview each part of Summit Scholars, then step into the path that fits your student.", ko: "각 서비스가 어떤 도움을 제공하는지 먼저 살펴보고, 학생에게 필요한 페이지로 바로 이동해 보세요." },
  home_team_preview: { en: "One student. A team of mentors.", ko: "한 학생을 함께 지도하는 전문 멘토팀" },
  home_course_preview_title: { en: "Concept first. Results follow.", ko: "개념을 이해하면 성과가 따라옵니다." },
  home_consulting_preview: { en: "ONE CONNECTED STRATEGY", ko: "하나로 연결된 장기 전략" },
  home_dental_preview: { en: "Five stages. One strong application.", ko: "다섯 단계를 하나의 강한 치대 원서로" },
  home_calendar_month: { en: "Your next step", ko: "학생의 다음 단계" },
  home_view_team: { en: "Meet the mentors", ko: "멘토 소개 자세히 보기" },
  home_view_courses: { en: "Explore courses", ko: "수업 과목 자세히 보기" },
  home_view_consulting: { en: "See the complete strategy", ko: "대학 입시 전략 자세히 보기" },
  home_view_dental: { en: "Explore dental admissions", ko: "치대 입시 과정 자세히 보기" },
  home_view_connect: { en: "Find every way to connect", ko: "연락 방법 모두 보기" },
  home_explore_cta: { en: "Explore every path", ko: "모든 서비스 둘러보기" },

  summit_title: { en: "Why Become a Summit Scholar", ko: "왜 Summit Scholars인가" }

};

/* ---------------- PROFILE PAGE ---------------- */
const profile = {
  team_kicker: { en: "SUMMIT SCHOLARS MENTORS", ko: "SUMMIT SCHOLARS 멘토진" },
  profile_title: { en: "Our Team", ko: "멘토 소개" },
  team_lead: { en: "Meet the mentors behind Summit Scholars.", ko: "Summit Scholars의 멘토들을 소개합니다." },
  profile_intro1: { en: "Different goals require different experience. Our mentors bring firsthand experience across competitive U.S. admissions, combined dental programs, academics, research, standardized testing, and pre-dental education.", ko: "학생의 목표에 따라 가장 적합한 멘토가 함께합니다. 미국 대학 입시, 통합치대, 학업 관리, 시험 준비, 연구, 그리고 대학 치대 준비 과정(Pre-Dental)까지 직접 경험한 멘토들이 학생을 장기적으로 관리합니다." },
  seven_year_dental: { en: "7-Year Dental Program", ko: "7년제 통합치대 프로그램" },
  chris_role: { en: "CEO & Mentor", ko: "대표 · 멘토" },
  chris_founder: { en: "Founder & CEO", ko: "Summit Scholars 설립자 · 대표" },
  chris_presidential: { en: "NYU Presidential Scholar", ko: "NYU Presidential Scholar 선발" },
  chris_ap_split: { en: "AP 5s / 4s", ko: "AP 5점 / 4점" },
  chris_research_stats: { en: "Publications / Conferences", ko: "논문 / 학술 발표" },
  chris_bio: { en: "A graduate of an international school and incoming student in the NYU BA/DDS 7-Year Dental Program, Chris was also selected as an NYU Presidential Scholar. His academic profile includes a 1580 SAT, 35 ACT, 102.03/100 GPA, and 13 AP exams. He has authored or co-authored three research publications and presented at five professional conferences. As Founder and CEO, he oversees long-term strategy across academics, extracurriculars, Passion Projects, testing, and college admissions.", ko: "Chris는 국제학교를 졸업하고 NYU BA/DDS 7년제 통합치대 프로그램에 합격했으며, NYU Presidential Scholars 프로그램에도 선발되었습니다. SAT 1580, ACT 35, GPA 102.03/100을 기록했고 13개의 AP 시험에서 11개 과목 5점, 2개 과목 4점을 받았습니다. 연구 논문 3편과 전문 학술 컨퍼런스 발표 5회의 경험을 바탕으로, Summit Scholars 대표로서 학업, 비교과 활동(EC), 주도형 프로젝트(Passion Project), 시험 및 대학 입시의 전체 로드맵을 총괄합니다." },
  chris_ap_details: { en: "View AP score details", ko: "AP 과목별 점수 보기" },
  yeji_role: { en: "Senior Mentor", ko: "선임 멘토 · 치대 입시" },
  yeji_program: { en: "College of Dental Medicine · D2 Student", ko: "치과대학 · 본과 2학년(D2)" },
  yeji_cdm: { en: "Columbia CDM · D2", ko: "컬럼비아 치과대학 · 본과 2학년" },
  summa_cum_laude: { en: "Summa Cum Laude", ko: "최우등 졸업" },
  phi_beta_kappa: { en: "Phi Beta Kappa", ko: "미국 대학 명예학회" },
  deans_list: { en: "Dean’s List", ko: "성적 우수자 명단" },
  yeji_bio: { en: "Yeji is a D2 student at Columbia University College of Dental Medicine. She has experience with both international-school education and Korean secondary education, including Minjok Leadership Academy. Before attending Columbia CDM, she was accepted to the NYU BA/DDS 7-Year Dental Program. At NYU, she earned a 3.96/4.00 GPA, graduated Summa Cum Laude, received Dean’s List recognition, and was inducted into Phi Beta Kappa. She earned a DAT score of 28/30 and mentors both high-school and pre-dental students.", ko: "Yeji 멘토는 컬럼비아대학교 치과대학 본과 2학년(D2)입니다. 국제학교와 민족사관고등학교 교육을 모두 경험했으며, 컬럼비아 치대 진학 전 NYU BA/DDS 7년제 통합치대 프로그램에도 합격했습니다. NYU에서 GPA 3.96/4.00을 기록하고 최우등(Summa Cum Laude)으로 졸업했으며, 성적 우수자 명단(Dean’s List)과 미국 대학 명예학회(Phi Beta Kappa)에 선정되었습니다. 치대 입학시험(DAT) 28/30의 성취를 바탕으로 고등학생과 치대 진학을 준비하는 대학생의 학업 및 입시를 전문적으로 멘토링합니다." },
  sean_role: { en: "Senior Mentor", ko: "선임 멘토 · 대학 치대 준비" },
  sean_ap_fives: { en: "AP Scores of 5", ko: "AP 전 과목 5점" },
  sean_bio: { en: "Sean grew up and studied in Virginia and has firsthand experience with the U.S. education system. He was admitted to the NJIT BS/DMD 7-Year Dental Program, currently maintains a 3.9/4.0 GPA, and has earned Dean’s List recognition. In high school, he scored 1540 on the SAT and earned scores of 5 on all six AP exams. His mentoring focuses on U.S. academic planning, AP/GPA management, combined dental programs, and long-term pre-dental preparation.", ko: "Sean 멘토는 미국 Virginia에서 성장하며 미국 교육과정을 직접 경험했고, NJIT BS/DMD 7년제 통합치대 프로그램에 합격했습니다. 현재 NJIT에서 GPA 3.9/4.0을 유지하며 Dean’s List에 선정되었고, 고등학교에서는 SAT 1540과 응시한 AP 6과목 모두 5점을 기록했습니다. 미국 고등학교 생활과 대학 입시 경험을 바탕으로 AP/GPA 관리, 통합치대 입시 및 장기 Pre-Dental 로드맵을 지도합니다." },
  mentoring_specialties: { en: "Mentoring Specialties", ko: "멘토링 전문 분야" },
  sp_college: { en: "College Admissions Strategy", ko: "대학 입시 전략" }, sp_gpa: { en: "GPA Management", ko: "학교 성적(GPA) 관리" }, sp_ec: { en: "Extracurricular Strategy", ko: "비교과 활동(EC) 전략" }, sp_research: { en: "Research", ko: "연구" }, sp_essay: { en: "Essay & Interview Strategy", ko: "에세이 · 인터뷰 전략" },
  sp_dental: { en: "Dental School Admissions", ko: "치대 입시" }, sp_predental: { en: "Pre-Dental Mentoring", ko: "대학 치대 준비(Pre-Dental) 멘토링" }, sp_dat: { en: "DAT Preparation", ko: "치대 입학시험(DAT) 준비" }, sp_undergrad_gpa: { en: "Undergraduate GPA", ko: "대학 학점(GPA) 관리" }, sp_highschool_gpa: { en: "High School GPA", ko: "고등학교 성적(GPA) 관리" }, sp_academic: { en: "Academic Planning", ko: "학업 계획" }, sp_ec_development: { en: "Extracurricular Development", ko: "비교과 활동(EC) 설계" },
  sp_predental_planning: { en: "Pre-Dental Planning", ko: "대학 치대 준비(Pre-Dental) 계획" }, sp_us_highschool: { en: "U.S. High School Strategy", ko: "미국 고등학교 학업 전략" }, sp_college_short: { en: "College Admissions", ko: "대학 입시" }, sp_ec_planning: { en: "Extracurricular Planning", ko: "비교과 활동(EC) 계획" },
  sp_combined_dental: { en: "BS/DDS & Pre-Dental", ko: "통합치대 및 대학 치대 준비" },
  sp_passion_project: { en: "Passion Projects", ko: "주도형 프로젝트" },
  sp_combined_strategy: { en: "BS/DDS Strategy", ko: "통합치대 지원 전략" },
  sp_combined_admissions: { en: "BS/DMD Admissions", ko: "통합치대 입시" },
  team_philosophy_kicker: { en: "COLLABORATIVE MENTORSHIP", ko: "함께하는 멘토십" },
  team_philosophy_title: { en: "One Team, Multiple Mentors", ko: "한 팀으로 함께하는 여러 전문 멘토" },
  team_philosophy_lead: { en: "Students are not limited to the expertise of a single mentor.", ko: "학생 한 명을 한 명의 멘토만 담당하지 않습니다." },
  team_philosophy_text: { en: "Depending on the student's needs, Summit Scholars mentors collaborate across admissions strategy, academics, testing, research, and pre-dental preparation.", ko: "학생의 필요에 따라 Chris, Yeji, Sean 멘토가 대학 입시 전략, 학업, 시험, 연구 및 대학 치대 준비 전반에서 서로 협력합니다." },
  collab_chris: { en: "Admissions Strategy", ko: "대학 입시 전략" }, collab_yeji: { en: "DAT & Dental School", ko: "치대 입학시험(DAT) · 치대 입시" }, collab_sean: { en: "Pre-Dental & U.S. Curriculum", ko: "대학 치대 준비 · 미국 교육과정" },

  affiliated_with: { en: "Affiliated with:", ko: "소속:" },

  education: { en: "Education", ko: "학력" },
  research: { en: "Research & Academic Experience", ko: "연구 및 학문 활동" },
  leadership: { en: "Leadership", ko: "리더십" },
  awards: { en: "Awards & Honors", ko: "수상 경력" },
  honors: { en: "Honors", ko: "수상 및 성과" },
  publications: { en: "Publications", ko: "출판" },
  skills: { en: "Skills", ko: "기술" },
  matriculation: { en: "College Matriculation", ko: "대학 진학 결과" }

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
  foundational: { en: "Foundational Courses (Grades 4-8)", ko: "기초 과정 (4-8학년)" },
  course_calc: { en: "AP Calculus BC", ko: "AP 미적분학 BC" },
  course_chem: { en: "AP Chemistry", ko: "AP 화학" },
  course_micro: { en: "AP Microeconomics", ko: "AP 미시경제학" },
  course_macro: { en: "AP Macroeconomics", ko: "AP 거시경제학" },
  course_csa: { en: "AP Computer Science A", ko: "AP 컴퓨터과학 A" },
  course_csp: { en: "AP Computer Science Principles", ko: "AP 컴퓨터과학 원리" },
  course_music: { en: "AP Music Theory", ko: "AP 음악 이론" },
  course_lang: { en: "AP English Language and Composition", ko: "AP 영어 언어와 작문" },
  course_ush: { en: "AP United States History", ko: "AP 미국사" },
  course_bio: { en: "AP Biology", ko: "AP 생물학" },
  course_stats: { en: "AP Statistics", ko: "AP 통계학" },
  course_lit: { en: "AP English Literature and Composition", ko: "AP 영문학과 작문" },
  course_foundation_math: { en: "Foundational Math<br><small>(SAT Prep, Pre-Algebra, Algebra I, Algebra II)</small>", ko: "기초 수학<br><small>(SAT 준비, 예비대수, 대수학 I·II)</small>" },
  course_foundation_english: { en: "Foundational English<br><small>(SAT Prep – Reading & Writing, Essay, Speaking)</small>", ko: "기초 영어<br><small>(SAT 읽기·쓰기, 에세이, 말하기)</small>" }

};

/* ---------------- DENTAL ADMISSIONS PAGE ---------------- */
const dental = {
  dental_eyebrow: { en: "DENTAL SCHOOL ADMISSIONS", ko: "미국 치대 입시 컨설팅" },
  dental_hero_title: { en: "Every detail,<br><em>one strong application.</em>", ko: "모든 준비를 연결해,<br><em>하나의 강한 치대 원서로.</em>" },
  dental_hero_text: { en: "From clinical experience and school strategy to AADSAS, interviews, and the final decision—we manage the complete dental school application as one connected plan.", ko: "치과 활동과 임상 경험 설계부터 미국 치대 공통원서(AADSAS), 인터뷰, 최종 학교 선택까지 지원 과정 전체를 하나의 전략으로 관리합니다." },
  dental_explore: { en: "Explore the complete pathway", ko: "전체 지원 과정을 확인하세요" },
  dental_art_experience: { en: "Experience", ko: "임상 경험" },
  dental_art_strategy: { en: "Strategy", ko: "지원 전략" },
  dental_art_application: { en: "Application", ko: "원서 완성" },
  dental_approach_kicker: { en: "01 — OUR APPROACH", ko: "01 — 준비 방향" },
  dental_approach_title: { en: "Dental school preparation begins<br>long before the application.", ko: "치대 지원은 원서 작성보다<br>훨씬 먼저 시작됩니다." },
  dental_approach_text: { en: "Clinical experience, school prerequisites, admission probability, and the student's own story must reinforce one another. Summit Scholars turns scattered preparation into a clear application strategy.", ko: "임상 경험의 방향, 학교별 선수과목, 지원 가능성, 그리고 학생만의 스토리가 서로 연결되어야 합니다. Summit Scholars는 흩어진 준비 과정을 하나의 명확한 지원 전략으로 만듭니다." },
  dental_support_kicker: { en: "02 — COMPLETE SUPPORT", ko: "02 — 치대 지원 전 과정" },
  dental_support_title: { en: "One pathway.<br>Five critical stages.", ko: "하나의 지원 과정,<br>다섯 가지 핵심 단계" },
  dental_support_hint: { en: "Select each stage to review the support included.", ko: "각 단계를 선택하면 구체적인 지원 내용을 확인할 수 있습니다." },

  dental_nav_1: { en: "Experiences & Clinical Exposure", ko: "활동 및 임상 경험" },
  dental_nav_2: { en: "School List & Strategy", ko: "학교 선정 및 지원 전략" },
  dental_nav_3: { en: "Personal Statement", ko: "자기소개서" },
  dental_nav_4: { en: "AADSAS & Supplements", ko: "공통원서 및 학교별 추가 원서" },
  dental_nav_5: { en: "Interviews & Decisions", ko: "인터뷰 및 합격 후 결정" },

  dental_s1_kicker: { en: "BUILD THE FOUNDATION", ko: "지원의 기반 만들기" },
  dental_s1_title: { en: "Experience & Clinical Exposure", ko: "치과 활동 및 임상 경험 관리" },
  dental_s1_intro: { en: "We build experiences that demonstrate sustained understanding of dentistry—not activities completed only to check a box.", ko: "단순히 활동 수를 채우는 것이 아니라, 치과 진로에 대한 이해와 지속적인 관심을 보여주는 경험을 설계합니다." },
  dental_s1_i1: { en: "Shadowing & Clinical Experience Strategy", ko: "치과 쉐도잉(직무 관찰) 및 임상 경험 전략" },
  dental_s1_i1_text: { en: "Plan target hours, settings, and specialties for balanced clinical exposure", ko: "목표 시간, 경험할 환경과 전문 분야를 고려해 균형 있게 구성합니다." },
  dental_s1_i2: { en: "Volunteer Experience Management", ko: "봉사 활동 관리" },
  dental_s1_i2_text: { en: "Connect service with the student's values and application story", ko: "학생의 가치관과 지원 스토리에 연결되는 봉사 방향을 설정합니다." },
  dental_s1_i3: { en: "Outreach & Opportunity Development", ko: "기관 직접 연락 및 활동 기회 연결" },
  dental_s1_i3_text: { en: "Research organizations, prepare personalized outreach, and manage follow-ups", ko: "기관 조사, 학생 맞춤형 이메일 작성과 후속 연락을 지원합니다." },
  dental_s1_i4: { en: "Progress Tracking", ko: "활동 진행 상황 관리" },
  dental_s1_i4_text: { en: "Document hours, roles, outcomes, and lessons throughout the process", ko: "활동 시간, 역할, 성과와 배운 점을 진행 과정에서 꾸준히 기록합니다." },

  dental_s2_kicker: { en: "FIND THE RIGHT FIT", ko: "학생에게 맞는 학교 찾기" },
  dental_s2_title: { en: "School Selection & Application Strategy", ko: "치대 학교 선정 및 지원 전략" },
  dental_s2_intro: { en: "We build a realistic, balanced strategy based on the student's academic profile and goals—not rankings alone.", ko: "단순한 학교 순위가 아니라 학생의 학업 성적, 경험과 목표를 바탕으로 현실적이고 균형 잡힌 지원 전략을 세웁니다." },
  dental_s2_i1: { en: "Build the School List", ko: "지원 학교 리스트 구성" },
  dental_s2_i1_text: { en: "Create a balanced list reflecting goals and competitiveness", ko: "학생의 목표와 경쟁력을 반영해 상향·적정·안정 학교를 균형 있게 구성합니다." },
  dental_s2_i2: { en: "Verify Prerequisites", ko: "학교별 선수과목과 필수 요건 확인" },
  dental_s2_i2_text: { en: "Review required courses, credits, tests, and school-specific policies", ko: "필수 과목, 학점, 시험과 학교별 세부 요건을 확인합니다." },
  dental_s2_i3: { en: "Assess Competitiveness", ko: "지원 가능성 분석" },
  dental_s2_i3_text: { en: "Evaluate GPA, DAT, experiences, and each school's profile together", ko: "GPA, 치대 입학시험(DAT), 활동 경험과 학교 특성을 함께 분석합니다." },
  dental_s2_i4: { en: "Application Timeline", ko: "지원 전략 및 일정 수립" },
  dental_s2_i4_text: { en: "Plan preparation and submission around rolling admissions", ko: "선착순 심사 방식(Rolling Admissions)을 고려해 준비와 제출 일정을 관리합니다." },

  dental_s3_kicker: { en: "SHAPE YOUR STORY", ko: "학생만의 이야기 만들기" },
  dental_s3_title: { en: "Personal Statement Development", ko: "자기소개서(Personal Statement) 작성 및 첨삭" },
  dental_s3_intro: { en: "We uncover the student's own answer to 'Why dentistry?' and shape it into a clear narrative connecting experience, values, and goals.", ko: "‘왜 치과의사가 되고 싶은가’에 대한 학생만의 답을 찾고, 경험과 가치관, 미래 목표가 자연스럽게 이어지는 글로 완성합니다." },
  dental_s3_i1: { en: "Personal Statement Planning", ko: "자기소개서 기획" },
  dental_s3_i1_text: { en: "Define the central message and differentiating qualities", ko: "글의 핵심 메시지와 학생만의 차별점을 정합니다." },
  dental_s3_i2: { en: "Narrative Structure", ko: "스토리 흐름 구성" },
  dental_s3_i2_text: { en: "Connect experiences, motivation, growth, and future goals", ko: "경험, 동기, 성장 과정과 미래 목표를 하나의 흐름으로 연결합니다." },
  dental_s3_i3: { en: "Drafting Guidance", ko: "초안 작성 지도" },
  dental_s3_i3_text: { en: "Develop structure and language while preserving the student's voice", ko: "학생 본인의 목소리를 살리면서 글의 구조와 문장을 발전시킵니다." },
  dental_s3_i4: { en: "Revision & Final Draft", ko: "반복 첨삭 및 최종본 완성" },
  dental_s3_i4_text: { en: "Refine content, flow, and expression through structured revisions", ko: "내용, 흐름과 표현을 단계적으로 다듬어 최종본을 완성합니다." },

  dental_s4_kicker: { en: "EXECUTE WITH PRECISION", ko: "정확하게 원서 완성하기" },
  dental_s4_title: { en: "AADSAS & Supplemental Applications", ko: "미국 치대 공통원서(AADSAS) 및 학교별 추가 원서 관리" },
  dental_s4_intro: { en: "We organize a process with many sections and deadlines so every submission is accurate, complete, and aligned around one message.", ko: "항목과 마감일이 많은 치대 지원 과정을 체계적으로 정리하고, 모든 제출 자료가 하나의 일관된 메시지를 전달하도록 관리합니다." },
  dental_s4_i1: { en: "AADSAS Review", ko: "미국 치대 공통원서(AADSAS) 작성 및 검토" },
  dental_s4_i1_text: { en: "Check accuracy and consistency across the complete application", ko: "기본 정보부터 전체 원서의 정확성과 일관성을 확인합니다." },
  dental_s4_i2: { en: "Activities & Experiences", ko: "활동 및 경험 항목 정리" },
  dental_s4_i2_text: { en: "Describe roles, contributions, growth, and impact clearly", ko: "학생의 역할, 기여, 성장과 영향이 드러나도록 활동 내용을 정리합니다." },
  dental_s4_i3: { en: "Recommendation Letters", ko: "추천서 관리" },
  dental_s4_i3_text: { en: "Plan recommenders, request timing, and submission tracking", ko: "추천인 구성, 요청 시점과 제출 상태를 관리합니다." },
  dental_s4_i4: { en: "Supplemental Essay Review", ko: "학교별 추가 에세이 첨삭" },
  dental_s4_i4_text: { en: "Develop responses tailored to each school's values and questions", ko: "각 학교의 가치와 질문 의도에 맞는 답변을 개발합니다." },
  dental_s4_i5: { en: "Submission & Deadline Management", ko: "원서 제출 및 일정 관리" },
  dental_s4_i5_text: { en: "Track deadlines, additional requests, and application status", ko: "마감일, 추가 요청 자료와 제출 상태를 한 흐름으로 관리합니다." },

  dental_s5_kicker: { en: "FINISH STRONG", ko: "인터뷰부터 최종 선택까지" },
  dental_s5_title: { en: "Interviews & Post-Acceptance Decisions", ko: "인터뷰 및 합격 후 관리" },
  dental_s5_intro: { en: "From interview invitations through the final decision, we prepare the right message and decision criteria for each situation.", ko: "인터뷰 초대부터 최종 학교 결정까지, 각 상황에 맞는 답변과 판단 기준을 함께 준비합니다." },
  dental_s5_i1: { en: "School-Specific Interview Preparation", ko: "학교별 인터뷰 대비" },
  dental_s5_i1_text: { en: "Prepare for each school's format, values, and likely questions", ko: "학교별 인터뷰 형식, 중요 가치와 예상 질문에 맞춰 준비합니다." },
  dental_s5_i2: { en: "Mock Interview", ko: "모의 인터뷰" },
  dental_s5_i2_text: { en: "Improve answers through realistic practice and specific feedback", ko: "실전과 같은 연습과 구체적인 피드백으로 답변을 개선합니다." },
  dental_s5_i3: { en: "Update Letter & Letter of Intent", ko: "업데이트 레터 및 최우선 지원 의향서" },
  dental_s5_i3_text: { en: "Communicate new achievements and continued interest strategically", ko: "새로운 성과와 학교에 대한 지원 의지를 전략적으로 전달합니다." },
  dental_s5_i4: { en: "Waitlist Strategy", ko: "대기자 명단(Waitlist) 대응" },
  dental_s5_i4_text: { en: "Plan follow-up based on each school's policies and situation", ko: "학교별 정책과 학생의 상황에 맞는 후속 전략을 세웁니다." },
  dental_s5_i5: { en: "Final School Decision", ko: "최종 학교 선택 상담" },
  dental_s5_i5_text: { en: "Compare education, cost, environment, and career goals", ko: "교육 과정, 비용, 생활 환경과 진로 목표를 종합해 결정합니다." },

  dental_mentors_kicker: { en: "03 — FIRSTHAND GUIDANCE", ko: "03 — 직접 경험한 멘토의 지도" },
  dental_mentors_title: { en: "Students learn from mentors<br>who know the path.", ko: "치대 진학 과정을 직접 경험한<br>멘토가 함께합니다." },
  dental_mentors_text: { en: "Our perspective is grounded in combined dental programs, pre-dental education, the DAT, and current dental school experience.", ko: "통합치대 프로그램, 대학 치대 준비 과정, 치대 입학시험(DAT), 실제 치과대학 경험을 바탕으로 각 단계에 필요한 현실적인 관점을 제공합니다." },
  dental_mentors_link: { en: "Meet our mentors", ko: "멘토 소개 보기" },
  dental_cta_kicker: { en: "READY FOR THE NEXT STEP?", ko: "치대 준비, 어디서부터 시작해야 할까요?" },
  dental_cta_title: { en: "Your dental school path<br>starts with a clear plan.", ko: "명확한 계획에서<br>치대 진학의 첫걸음이 시작됩니다." },
  dental_cta_button: { en: "Book a consultation", ko: "맞춤 상담 예약하기" }
};

/* ---------------- CONSULTING PAGE ---------------- */
const consulting = {
  strategy_visual_kicker: { en: "THE SUMMIT PATH", ko: "SUMMIT 성장 로드맵" },
  strategy_visual_title: { en: "Four parts. One rising strategy.", ko: "네 가지 영역을 하나의 성장 전략으로 연결합니다." },
  strategy_visual_intro: { en: "Select a milestone to see how each part supports the next—and how the complete student profile develops over time.", ko: "각 단계를 선택하여 학업, 기회, 프로젝트, 원서가 어떻게 서로 연결되어 학생의 전체 프로필을 성장시키는지 확인해 보세요." },
  strategy_visual_academics: { en: "Academics", ko: "학업 관리" },
  strategy_visual_opportunities: { en: "Opportunities", ko: "활동과 기회" },
  strategy_visual_application: { en: "Application", ko: "대학 원서" },
  strategy_visual_academics_title: { en: "Build the academic foundation", ko: "입시의 기반이 되는 학업 경쟁력을 설계합니다." },
  strategy_visual_academics_text: { en: "Course selection, GPA, AP rigor, and testing are planned together so the student’s academic record supports their intended universities and major.", ko: "과목 선택, GPA, AP 난이도, 시험 준비를 따로 관리하지 않고, 목표 대학과 전공을 뒷받침하는 하나의 학업 계획으로 구성합니다." },
  strategy_visual_opportunities_title: { en: "Turn interests into experience", ko: "학생의 관심 분야를 실제 경험으로 연결합니다." },
  strategy_visual_opportunities_text: { en: "We identify relevant research, programs, organizations, and professionals, then support thoughtful outreach and preparation.", ko: "관심 분야에 맞는 연구, 프로그램, 기관 및 전문가를 찾고, 맞춤형 연락과 준비 과정을 지원합니다." },
  strategy_visual_project_title: { en: "Create evidence of initiative", ko: "주도성을 보여주는 실제 결과를 만듭니다." },
  strategy_visual_project_text: { en: "The student develops, pilots, measures, and expands a project that transforms genuine interest into visible ownership and impact.", ko: "학생이 직접 프로젝트를 개발하고, 시범 운영하고, 성과를 측정한 뒤 확장하여 관심사를 주도성과 측정 가능한 결과로 발전시킵니다." },
  strategy_visual_application_title: { en: "Connect everything into one story", ko: "모든 준비를 하나의 설득력 있는 원서로 연결합니다." },
  strategy_visual_application_text: { en: "College selection, positioning, essays, activities, interviews, and deadlines bring years of work into one coherent application.", ko: "대학 선정, 지원 전략, 에세이, 활동, 인터뷰, 마감 관리를 통해 여러 해의 준비 과정을 하나의 일관된 대학 원서로 완성합니다." },
  consulting_eyebrow: { en: "Long-Term College Mentorship", ko: "장기 대학 입시 멘토링" },
  consulting_title: { en: "From the first plan to the final application.", ko: "처음부터 끝까지 관리합니다." },
  consulting_intro: { en: "We manage academics, opportunities, projects, and admissions as one connected long-term strategy—not as isolated tasks.", ko: "성적을 관리하고, 기회를 만들고, 프로젝트를 성장시키고, 마지막에는 하나의 강한 입시 스토리로 연결합니다." },
  consulting_pillar_academic: { en: "Academics", ko: "학업" },
  consulting_pillar_opportunities: { en: "Opportunities", ko: "기회" },
  consulting_pillar_project: { en: "Passion Project", ko: "주도형 프로젝트" },
  consulting_pillar_admissions: { en: "Admissions", ko: "대학 입시" },
  consulting_overview_kicker: { en: "ONE CONNECTED STRATEGY", ko: "하나로 연결된 장기 전략" },
  consulting_overview_title: { en: "Hands-on guidance from beginning to end.", ko: "계획부터 실행까지 함께합니다." },
  consulting_overview_text: { en: "College consulting is more than editing an application in senior year. Summit Scholars works with students over multiple years so their academics, extracurriculars, Passion Project, and eventual application develop in one clear direction.", ko: "12학년에 원서를 고쳐주는 것만이 컨설팅은 아닙니다. Summit Scholars는 학생의 학업, 비교과 활동, 주도형 프로젝트(Passion Project), 최종 대학 원서가 하나의 방향으로 연결되도록 여러 해에 걸쳐 관리합니다." },
  consulting_services_kicker: { en: "A CONNECTED SYSTEM", ko: "하나로 연결된 입시 시스템" },
  consulting_services_title: { en: "Three foundations—and one defining project", ko: "세 가지 기반과 학생을 보여주는 하나의 핵심 프로젝트" },
  passion_dimension_kicker: { en: "A SEPARATE DIMENSION OF THE APPLICATION", ko: "원서의 새로운 차원을 만드는 과정" },
  passion_dimension_title: { en: "Where an interest becomes something real.", ko: "관심이 실제 결과로 발전하는 곳" },
  passion_dimension_idea: { en: "Idea", ko: "아이디어" }, passion_dimension_idea_sub: { en: "Find the problem", ko: "문제 발견" },
  passion_dimension_build: { en: "Build", ko: "개발" }, passion_dimension_build_sub: { en: "Create the prototype", ko: "프로토타입 제작" },
  passion_dimension_pilot: { en: "Pilot", ko: "파일럿" }, passion_dimension_pilot_sub: { en: "Enter the real world", ko: "실제 환경에 적용" },
  passion_dimension_measure: { en: "Measure", ko: "측정" }, passion_dimension_measure_sub: { en: "Gather evidence", ko: "성과와 데이터 수집" },
  passion_dimension_impact: { en: "Impact", ko: "성과와 영향력" }, passion_dimension_impact_sub: { en: "Improve and expand", ko: "개선 및 확장" },
  consulting_academic_title: { en: "Academic Management", ko: "학업 관리" },
  consulting_academic_text: { en: "Strategic management of GPA, course rigor, APs, SAT/ACT, and academic planning based on the student's target universities and long-term admissions goals.", ko: "학교 성적(GPA), 과목 난이도, AP 과목, SAT/ACT 시험을 따로 보지 않고 학생의 학년과 목표 대학에 맞는 하나의 장기 학업 로드맵으로 설계합니다." },
  consulting_tag_courses: { en: "Course Selection", ko: "과목 선택" },
  consulting_tag_timeline: { en: "Academic Timeline", ko: "학업 타임라인" },
  consulting_tag_testing: { en: "Testing Strategy", ko: "시험 전략" },
  consulting_ec_title: { en: "Extracurricular & Opportunity Development", ko: "비교과 활동과 참여 기회 설계" },
  consulting_ec_text: { en: "We actively identify meaningful opportunities—including shadowing, volunteering, internships, competitions, research, and summer programs—and help students conduct outreach when needed.", ko: "직업 체험, 봉사, 인턴십, 대회, 연구, 여름 프로그램처럼 학생 혼자 찾기 어려운 기회를 함께 발굴하고, 필요하면 학생이 기관에 직접 연락할 수 있도록 준비와 후속 과정을 지도합니다." },
  consulting_ec_emphasis: { en: "The goal is not more activities. It is a coherent portfolio connecting the student's interests, intended major, and story.", ko: "단순히 활동의 개수를 늘리는 것이 아니라 학생의 전공과 스토리가 연결되는 활동 포트폴리오를 만드는 것이 목표입니다." },
  consulting_ec_note: { en: "When available, we also draw on mentor networks and personal connections to help develop real opportunities.", ko: "가능한 경우 멘토 네트워크와 인적 연결도 활용해 실제 참여 기회를 개발합니다." },
  consulting_tag_shadowing: { en: "Shadowing", ko: "쉐도잉" },
  consulting_tag_volunteering: { en: "Volunteering", ko: "봉사" },
  consulting_tag_internships: { en: "Internships", ko: "인턴십" },
  consulting_tag_research: { en: "Research", ko: "연구" },
  consulting_tag_programs: { en: "Summer Programs", ko: "여름 프로그램" },
  consulting_tag_outreach: { en: "Cold Outreach", ko: "기관 직접 연락" },
  consulting_passion_title: { en: "Passion Project Development", ko: "주도형 프로젝트(Passion Project) 개발" },
  consulting_passion_text: { en: "Turn a student's genuine interests into a real project that is built, implemented, measured, expanded, and ultimately leaves evidence of impact.", ko: "학생의 관심사를 실제 프로젝트로 발전시켜 지역사회에서 사용되고, 확장되고, 결과가 남는 활동으로 만듭니다." },
  consulting_passion_framework: { en: "Build → Implement → Measure → Expand → Leave Impact", ko: "만들고 → 실제로 사용하게 하고 → 성과를 측정하고 → 확장하고 → 결과를 남깁니다." },
  consulting_support_label: { en: "Support may include", ko: "지원 범위" },
  consulting_passion_support: { en: "Ideation · Pitch Deck · Prototype · Pilot · Partnerships · Feedback & Data · Iteration · Impact Measurement · Competitions · Presentations · Research Connections · Scaling · Final Impact Report", ko: "주제 기획 · 프로젝트 제안서 · 시제품 또는 결과물 · 실제 시범 운영 · 기관 협력 · 피드백과 성과 데이터 · 반복 개선 · 성과 측정 · 대회와 발표 · 연구 연계 · 확장 · 최종 성과 보고서" },
  consulting_passion_included: { en: "Passion Project management is included in core consulting—not offered as a separate add-on.", ko: "주도형 프로젝트 관리는 별도 추가 서비스가 아니라 기본 컨설팅에 포함됩니다." },
  consulting_admissions_title: { en: "College Admissions", ko: "대학 입시" },
  consulting_admissions_text: { en: "From college-list strategy and application positioning to essays, interviews, and final submissions, we turn years of academics and activities into one coherent admissions narrative.", ko: "학생의 고등학교 활동을 하나의 강한 입시 스토리로 연결하고, 대학 리스트 구축부터 에세이 · 인터뷰 · 원서 제출까지 함께 관리합니다." },
  consulting_admissions_item1: { en: "College list · Major / program strategy", ko: "대학 리스트 · 전공 / 프로그램 전략" },
  consulting_admissions_item2: { en: "ED · EA · REA · RD planning", ko: "ED · EA · REA · RD 지원 전략" },
  consulting_admissions_item3: { en: "Personal Statement · Supplemental essays", ko: "공통 자기소개서 · 학교별 추가 에세이" },
  consulting_admissions_item4: { en: "Brainstorming · Proofreading · Revision", ko: "에세이 브레인스토밍 · 교정 · 수정" },
  consulting_admissions_item5: { en: "Activities · Honors / Awards · Resume", ko: "활동 목록 · 수상 경력 · 필요 시 이력서" },
  consulting_admissions_item6: { en: "Interviews · Deadlines · Final checks", ko: "인터뷰 · 마감 관리 · 최종 제출 점검" },
  consulting_roadmap_kicker: { en: "AN EXAMPLE, NOT A FIXED FORMULA", ko: "학생에 따라 달라지는 예시 로드맵" },
  consulting_roadmap_title: { en: "How a Passion Project can grow over time", ko: "주도형 프로젝트 성장 로드맵" },
  consulting_roadmap_intro: { en: "Every project follows the student's own pace, interests, and opportunities. One possible path looks like this:", ko: "모든 학생이 같은 일정을 따르는 것은 아닙니다. 학생의 관심사와 기회에 따라 달라지는 하나의 예시입니다." },
  consulting_grade9: { en: "Grade 9", ko: "9학년" },
  consulting_grade9_path: { en: "Choose a topic → Pitch Deck → Prototype → Launch", ko: "주제 선정 → 프로젝트 제안서 → 시제품 제작 → 실행" },
  consulting_grade9_summer: { en: "Summer after Grade 9", ko: "9학년 여름" },
  consulting_grade9_summer_path: { en: "Organization Pilot → Feedback / Data → Improve", ko: "기관 시범 운영 → 피드백과 성과 데이터 → 개선" },
  consulting_grade10: { en: "Grade 10", ko: "10학년" },
  consulting_grade10_path: { en: "Community Use → Measure Impact → Competitions / Presentations", ko: "지역사회 적용 → 성과 측정 → 대회 또는 발표" },
  consulting_grade11: { en: "Grade 11", ko: "11학년" },
  consulting_grade11_path: { en: "Expand → Build a Team → Final Product / Impact Report", ko: "확장 → 팀 구성 → 최종 결과물과 성과 보고서" },
  consulting_access_kicker: { en: "HOW WE MAKE IT HAPPEN", ko: "기회를 만드는 방법" },
  consulting_access_title: { en: "We Don’t Just Recommend Opportunities. We Help Create Them.", ko: "기회는 기다리는 것이 아니라, 직접 만듭니다." },
  consulting_access_intro: { en: "Many valuable opportunities never appear in a public listing. We identify organizations, professors, clinics, laboratories, nonprofits, companies, and professionals aligned with each student’s interests—then help the student approach them strategically.", ko: "많은 가치 있는 활동은 검색이나 공개 모집만으로 찾기 어렵습니다. 학생의 관심사에 맞는 기관, 교수, 병원, 연구실, 비영리단체, 기업 및 전문가를 직접 조사하고 전략적으로 접근할 수 있도록 돕습니다." },
  consulting_outreach_title: { en: "Cold Outreach", ko: "기관 직접 연락(Cold Outreach)" },
  consulting_outreach_lead: { en: "Many of the best opportunities are never publicly advertised.", ko: "좋은 활동은 항상 모집 공고로 올라오지 않습니다." },
  consulting_outreach_text: { en: "We research relevant contacts and help students develop thoughtful, personalized outreach under their own name.", ko: "학생의 관심 분야와 목표에 맞는 기관과 담당자를 조사하고, 학생 명의로 정중한 맞춤 이메일을 작성해 연락하도록 지도합니다." },
  consulting_outreach_item1: { en: "Opportunity research", ko: "연락할 기관 조사" }, consulting_outreach_item2: { en: "Contact identification", ko: "적합한 담당자 선정" }, consulting_outreach_item3: { en: "Personalized cold emails", ko: "학생 배경에 맞는 이메일 작성" }, consulting_outreach_item4: { en: "Resume and introduction materials", ko: "이력서와 소개 자료 정리" }, consulting_outreach_item5: { en: "Follow-up strategy", ko: "후속 연락 전략" }, consulting_outreach_item6: { en: "Meeting preparation and next steps", ko: "미팅 준비 · 후속 관리" },
  consulting_outreach_note: { en: "We do not take ownership away from the student. We design and manage the process so the student learns to create opportunities directly.", ko: "학생 대신 모든 것을 해주는 것이 아니라, 학생이 직접 기회를 만들어가는 과정을 옆에서 설계하고 관리합니다." },
  consulting_connections_title: { en: "Connections When They Matter", ko: "직접 연결할 수 있는 기회" },
  consulting_connections_lead: { en: "Cold emailing is not the only path.", ko: "모든 활동을 처음 보는 기관에 이메일을 보내서만 찾는 것은 아닙니다." },
  consulting_connections_text: { en: "When appropriate, students may also benefit from mentors’ personal and professional networks—including university and graduate students, researchers, healthcare professionals, organizations, and other mentors.", ko: "가능한 경우 멘토들이 알고 있는 대학생, 대학원생, 연구자, 의료계 관계자, 기관 및 기타 전문 네트워크를 통해 학생에게 적합한 연결도 적극적으로 활용합니다." },
  consulting_connection_tag1: { en: "University Networks", ko: "대학 네트워크" }, consulting_connection_tag2: { en: "Research", ko: "연구" }, consulting_connection_tag3: { en: "Healthcare", ko: "의료계" }, consulting_connection_tag4: { en: "Organizations", ko: "기관" },
  consulting_connections_note: { en: "A connection can provide a stronger starting point, not a guaranteed placement. Participation always depends on student fit, initiative, availability, and organization approval.", ko: "지인 네트워크를 통한 연결은 기회를 보장하는 수단이 아니라 더 좋은 출발점을 만드는 방법입니다. 실제 참여는 학생의 적합성, 주도성, 자리 상황과 기관의 승인에 따라 결정됩니다." },
  consulting_network_title: { en: "A Mentorship Network That Keeps Growing", ko: "학생과 함께 성장하는 멘토링" },
  consulting_network_lead: { en: "Our mentors are actively progressing through the academic and professional pathways our students hope to enter.", ko: "Summit Scholars의 멘토들은 학생들이 목표로 하는 학업과 전문 분야의 길을 직접 계속 나아가고 있습니다." },
  consulting_network_text: { en: "As our mentors advance through university, dental school, research, and professional education, they gain new firsthand experience and build relationships across academic and professional communities. That current knowledge and expanding network return directly to the students we mentor.", ko: "멘토들이 대학, 치대, 연구 및 전문 교육 과정에서 앞으로 나아가며 쌓는 새로운 경험과 사람들과의 연결, 입시와 학업에 대한 이해는 다시 학생들에게 돌아옵니다." },
  consulting_current_title: { en: "Current, Firsthand Experience", ko: "몇 년 전의 입시가 아니라, 지금의 입시를 경험합니다." },
  consulting_current_text: { en: "Our guidance is informed by mentors who continue to experience U.S. universities, combined dental programs, pre-dental education, dental school, research, and admissions firsthand.", ko: "멘토들이 미국 대학, 학부·치대 통합 프로그램, 대학 치대 준비 과정(Pre-Dental), 치과대학, 연구와 입시를 직접 계속 경험하기 때문에 변화하는 환경과 학생의 현실적인 고민을 가까이에서 이해합니다." },
  consulting_network_note: { en: "As Summit Scholars grows, the range of experience, insight, and opportunity available to students grows with it.", ko: "회사가 성장할수록 멘토들의 경험과 네트워크도 성장하고, 학생들에게 제공할 수 있는 기회의 폭도 함께 넓어집니다." },
  consulting_process_kicker: { en: "FROM INTEREST TO IMPACT", ko: "관심사에서 실제 성과까지" }, consulting_process_title: { en: "How opportunities take shape", ko: "기회를 만드는 과정" },
  consulting_process_1_title: { en: "Interest", ko: "관심 분야 분석" }, consulting_process_1_text: { en: "Goals, academic interests, and current activities", ko: "전공, 관심사 및 현재 활동 분석" },
  consulting_process_2_title: { en: "Research", ko: "기회 조사" }, consulting_process_2_text: { en: "Organizations, professors, clinics, labs, and companies", ko: "관련 기관 · 교수 · 병원 · 연구실 · 기업 조사" },
  consulting_process_3_title: { en: "Outreach", ko: "맞춤형 연락" }, consulting_process_3_text: { en: "Cold email, introduction materials, and resume", ko: "학생별 이메일 · 소개 자료 · 이력서 준비" },
  consulting_process_4_title: { en: "Connection", ko: "기관 및 전문가 연결" }, consulting_process_4_text: { en: "Meetings, interviews, and organizational introductions", ko: "상담 · 면접 준비 · 적합한 기관 연결" },
  consulting_process_5_title: { en: "Execution", ko: "활동 실행" }, consulting_process_5_text: { en: "Shadowing, research, internships, service, or projects", ko: "직업 체험 · 연구 · 인턴십 · 봉사 · 프로젝트 진행" },
  consulting_process_6_title: { en: "Development", ko: "성과 발전" }, consulting_process_6_text: { en: "Document results, expand the work, and connect the story", ko: "성과 기록 · 활동 확장 · 대학 입시 이야기로 연결" },
  consulting_passion_access_kicker: { en: "PASSION PROJECTS IN PRACTICE", ko: "주도형 프로젝트의 실제 실행" },
  consulting_passion_access_title: { en: "A strong idea still needs a path into the real world.", ko: "좋은 아이디어도 실제 세상으로 나아가는 과정이 필요합니다." },
  consulting_passion_access_text: { en: "A Passion Project does not end with an idea. We may help find an organization willing to pilot it, contact a professor for feedback, develop a nonprofit or healthcare partnership, recruit mentors, gather real-world feedback, and expand the project to additional institutions.", ko: "프로젝트를 실제로 사용할 기관을 찾고, 필요한 사람에게 연락하고, 시범 운영과 피드백을 거쳐 개선해야 비로소 강한 활동이 됩니다. 기관 시범 운영, 교수 의견, 비영리단체나 의료기관과의 협력, 멘토 연결, 추가 기관으로의 확장까지 함께 설계합니다." },
  consulting_execution_framework: { en: "Build → Implement → Measure → Expand → Impact", ko: "개발 → 실제 적용 → 성과 측정 → 확장 → 영향력" },
  consulting_longterm_kicker: { en: "LONG-TERM MENTORSHIP", ko: "장기 멘토링" }, consulting_longterm_title: { en: "From the first step to the next stage—and beyond.", ko: "처음부터 끝까지, 그리고 그 다음 단계까지" },
  consulting_longterm_text: { en: "As a student advances, academic plans become more focused, activities gain depth, Passion Projects expand, interests become clearer, and admissions strategy becomes more precise. At the same time, our mentors continue to develop within their own academic and professional fields, bringing new knowledge and relationships back to each student’s next stage.", ko: "학생의 학년이 올라갈수록 학업 계획은 구체화되고 활동의 깊이는 커지며, 주도형 프로젝트와 대학 입시 전략도 함께 발전합니다. 동시에 멘토들은 각자의 학업과 전문 분야에서 얻은 새로운 경험과 네트워크를 학생의 다음 단계에 다시 연결합니다." },
  consulting_longterm_close: { en: "Long-term mentorship that evolves with the student.", ko: "학생과 함께 성장하는 장기 멘토링." },
  consulting_motto: { en: "Manage the grades. Create opportunities. Grow the project.", ko: "성적을 관리하고, 기회를 만들고, 프로젝트를 성장시킵니다." },
  consulting_motto_sub: { en: "Then connect it all into one strong admissions story.", ko: "그리고 마지막에는 하나의 강한 입시 스토리로 연결합니다." },

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
  schedule_eyebrow: { en: "PERSONALIZED INTRODUCTORY CONSULTATION", ko: "학생별 맞춤형 첫 상담" },
  schedule_page_title: { en: "Plan Your Next Academic Step", ko: "다음 학업 단계를 함께 설계하세요" },
  home_cta_title: { en: "Begin Your Academic Journey", ko: "목표를 향한 학업 여정을 시작하세요" },
  home_cta_text: { en: "Academic mentorship and university consulting through Summit Scholars.", ko: "Summit Scholars의 학업 멘토링과 대학 컨설팅으로 명확한 방향을 만들어보세요." },

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
  consult_length_label: { en: "30 minutes", ko: "30분 상담" },
  consult_length_note: { en: "Focused introductory conversation", ko: "학생의 목표에 집중하는 첫 대화" },
  consult_format_label: { en: "Online meeting", ko: "상담 요약 및 맞춤 안내서 제공" },
  consult_format_note: { en: "Join from wherever you are", ko: "상담 내용과 권장 지원 방향, 비용 안내를 문서로 정리해 드립니다" },
  consult_booking_prompt: { en: "Choose a convenient time through our secure booking page.", ko: "카카오톡 상담 신청 안내를 확인해 주세요." },

  summit_text: {
    en: "Summit Scholars was built from direct experience navigating the U.S. curriculum and competitive university admissions.\n\nStudents need more than information — they need structure, mentorship, and a clear academic strategy. Through an integrated system combining academic guidance, standardized test preparation, and college consulting, Summit Scholars provides a pathway that is both rigorous and intentional.\n\nOur focus is not only on outcomes, but on developing students who think critically, build meaningful portfolios, and approach their academic journey with clarity and confidence.",
    ko: "Summit Scholars는 미국 교육과정과 대학 입시를 직접 경험한 바탕에서 시작되었습니다.\n\n학생들에게 필요한 것은 단순한 정보가 아니라, 체계적인 방향성, 멘토링, 그리고 명확한 학업 전략입니다. 학업 지도, 시험 준비, 대학 컨설팅을 하나의 통합된 시스템으로 제공하여, 의도적이고 체계적인 성장 경로를 만듭니다.\n\n저희의 목표는 단순한 결과가 아니라, 학생들이 비판적으로 사고하고 의미 있는 포트폴리오를 구축하며 자신의 학업 여정을 주도할 수 있도록 돕는 것입니다."
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

/* ---------------- CONSULTING CINEMA ---------------- */
const cinema = {
  cinema_0_title: { en: "Before we plan,<br>we learn the student.", ko: "계획보다 먼저,<br>학생을 이해합니다." },
  cinema_0_text: { en: "We begin with the student’s transcript, school curriculum, testing history, activities, interests, time commitments, and family priorities. This diagnostic tells us what is already strong, what is missing, and which goals are ambitious but still realistic.", ko: "학교 성적표, 교육과정, 시험 기록, 활동, 관심 분야, 사용 가능한 시간, 그리고 가족이 중요하게 생각하는 목표부터 함께 살펴봅니다. 이를 통해 현재 강점과 부족한 부분을 정확히 파악하고, 도전적이면서도 현실적인 목표를 설정합니다." },
  cinema_0_label: { en: "What families receive", ko: "가족이 받게 되는 것" },
  cinema_0_detail: { en: "A clear starting-point assessment and a prioritized plan—not a generic checklist.", ko: "일반적인 체크리스트가 아닌, 학생의 현재 위치를 분석한 우선순위 중심의 실행 계획입니다." },
  cinema_1_title: { en: "Build an academic plan<br>that keeps doors open.", ko: "가능성을 넓히는<br>학업 계획을 설계합니다." },
  cinema_1_text: { en: "Course selection, GPA, AP rigor, and SAT or ACT preparation must support the same university goals. We map these decisions across multiple semesters, balancing ambition with the student’s actual workload and protecting the academic foundation of the application.", ko: "과목 선택, GPA, AP 난이도, SAT 또는 ACT 준비가 하나의 대학 목표를 향하도록 설계합니다. 학생이 감당할 수 있는 실제 학업량을 고려하면서도 경쟁력 있는 수준을 유지하도록 여러 학기에 걸친 로드맵을 만듭니다." },
  cinema_1_label: { en: "What we manage", ko: "관리하는 영역" },
  cinema_1_detail: { en: "Course rigor, GPA targets, testing milestones, and the order in which each goal should be tackled.", ko: "과목 난이도, GPA 목표, 시험 준비 시점, 그리고 각 목표를 어떤 순서로 진행할지까지 관리합니다." },
  cinema_2_title: { en: "Turn an interest into<br>firsthand experience.", ko: "관심 분야를<br>실제 경험으로 연결합니다." },
  cinema_2_text: { en: "Students often know what they like but not where to explore it. We research suitable professors, laboratories, clinics, nonprofits, competitions, and summer programs, then help the student prepare personalized outreach, a résumé, follow-ups, and meetings.", ko: "학생은 관심 분야는 알고 있어도 어디에서 어떻게 경험해야 하는지 모르는 경우가 많습니다. 적합한 교수, 연구실, 병원, 비영리기관, 대회, 여름 프로그램을 조사하고, 학생 맞춤형 이메일, 이력서, 후속 연락과 미팅 준비를 함께 진행합니다." },
  cinema_2_label: { en: "Why this matters", ko: "이 과정이 중요한 이유" },
  cinema_2_detail: { en: "The goal is not to collect activities. It is to test an interest in the real world and discover which direction deserves deeper commitment.", ko: "활동 개수를 늘리는 것이 목적이 아닙니다. 관심 분야를 실제 환경에서 확인하고, 어떤 방향에 더 깊이 투자할지 발견하는 과정입니다." },
  cinema_3_title: { en: "Move from joining<br>to creating.", ko: "참여하는 학생에서<br>만드는 학생으로 성장합니다." },
  cinema_3_text: { en: "Participating in an existing program demonstrates interest. Creating something demonstrates initiative. We help the student use what they observed through classes and activities to identify a specific problem worth solving.", ko: "기존 프로그램에 참여하는 것은 관심을 보여주지만, 직접 무언가를 만드는 것은 주도성을 보여줍니다. 수업과 활동에서 발견한 경험을 바탕으로 학생이 직접 해결해 볼 가치가 있는 구체적인 문제를 찾도록 돕습니다." },
  cinema_3_label: { en: "The transition", ko: "전환 과정" },
  cinema_3_detail: { en: "Interest becomes a focused question; the question becomes a proposal; the proposal becomes a project the student genuinely owns.", ko: "관심을 구체적인 질문으로, 질문을 제안으로, 제안을 학생이 실제로 주도하는 프로젝트로 발전시킵니다." },
  cinema_4_title: { en: "Make the idea work<br>outside the student’s head.", ko: "아이디어가 현실에서<br>작동하도록 만듭니다." },
  cinema_4_text: { en: "A Passion Project becomes meaningful only when someone can use it, respond to it, or benefit from it. We guide development of the prototype, identify a pilot audience or partner organization, organize feedback, and help the student improve the work through multiple iterations.", ko: "주도형 프로젝트는 누군가가 실제로 사용하거나 도움을 받을 때 의미가 생깁니다. 시제품 개발, 시범 운영 대상 또는 협력 기관 선정, 의견 수집과 반복 개선 과정을 함께 관리합니다." },
  cinema_4_label: { en: "Hands-on support", ko: "실행 지원 범위" },
  cinema_4_detail: { en: "Prototype development, pilot planning, partnerships, research connections, data collection, presentations, competitions, and iteration.", ko: "시제품 개발, 시범 운영 계획, 기관 협력, 연구 연계, 데이터 수집, 발표, 대회와 반복 개선을 지원합니다." },
  cinema_5_title: { en: "Show what changed<br>because of the work.", ko: "프로젝트를 통해<br>무엇이 달라졌는지 보여줍니다." },
  cinema_5_text: { en: "Impact does not need to mean thousands of users. It must be specific and credible. We help the student define meaningful outcomes, document participation and feedback, analyze what improved, and decide whether the project should expand to new people or institutions.", ko: "영향력이 반드시 수천 명의 사용자를 의미하는 것은 아닙니다. 중요한 것은 구체적이고 신뢰할 수 있는 결과입니다. 의미 있는 성과를 정하고, 참여와 의견을 기록하며, 무엇이 개선되었는지 분석하고, 새로운 대상이나 기관으로 확장할지 판단합니다." },
  cinema_5_label: { en: "What remains", ko: "최종적으로 남는 것" },
  cinema_5_detail: { en: "A functioning result, evidence of learning and leadership, measurable outcomes, and a final product or impact report.", ko: "실제로 작동하는 결과물, 학습과 리더십의 증거, 측정 가능한 성과와 최종 성과 보고서가 남습니다." },
  cinema_6_title: { en: "Choose where—and how—<br>the student should apply.", ko: "어디에, 어떤 방식으로<br>지원할지 결정합니다." },
  cinema_6_text: { en: "We build a balanced university list by examining academic fit, intended major, program structure, selectivity, and the student’s preferences. Then we decide how Early Decision, Early Action, Restrictive Early Action, and Regular Decision should be used within one realistic plan.", ko: "학업 적합성, 희망 전공, 프로그램 구조, 합격 난이도와 학생의 선호도를 분석해 균형 잡힌 대학 리스트를 구성합니다. 이후 구속력 있는 조기전형(ED), 일반 조기전형(EA), 제한적 조기전형(REA), 정시전형(RD)을 하나의 현실적인 전략 안에서 결정합니다." },
  cinema_6_label: { en: "The strategy includes", ko: "지원 전략에 포함되는 것" },
  cinema_6_detail: { en: "University and major selection, reach–target–likely balance, application positioning, round selection, and a complete deadline calendar.", ko: "대학 및 전공 선정, 상향·적정·안정 지원 조합, 지원 포지셔닝, 전형 선택, 전체 마감 일정이 포함됩니다." },
  cinema_7_title: { en: "Translate years of work into<br>one credible story.", ko: "여러 해의 노력을<br>하나의 설득력 있는 이야기로 만듭니다." },
  cinema_7_text: { en: "The application should explain the meaning behind the record without exaggerating it. We guide the personal statement and supplemental essays from brainstorming through revision, refine activity and honors descriptions, prepare interviews, and review every component before submission.", ko: "원서는 기록을 과장하는 것이 아니라 그 의미를 설명해야 합니다. 공통 자기소개서와 학교별 추가 에세이의 주제 기획부터 반복 수정까지 지도하고, 활동 및 수상 내역을 정리하며, 인터뷰와 제출 전 모든 항목을 최종 검토합니다." },
  cinema_7_label: { en: "What we review", ko: "검토 및 관리 범위" },
  cinema_7_detail: { en: "Personal statement, supplemental essays, activities, honors, résumé, additional information, interviews, deadlines, and final submission checks.", ko: "공통 자기소개서, 학교별 추가 에세이, 활동, 수상, 이력서, 추가 정보, 인터뷰, 마감 일정과 최종 제출 점검을 관리합니다." },
  cinema_8_title: { en: "The plan changes<br>as the student grows.", ko: "학생이 성장하면<br>계획도 함께 발전합니다." },
  cinema_8_text: { en: "Interests change, grades fluctuate, opportunities appear, and goals become more specific. We revisit the strategy throughout the relationship instead of forcing the student to follow an outdated plan. Our mentor team collaborates across academics, research, projects, testing, and admissions whenever the student’s next decision requires it.", ko: "관심 분야는 변하고, 성적은 오르내리며, 새로운 기회가 생기고, 목표는 점점 구체화됩니다. 오래된 계획을 그대로 따르게 하지 않고, 학생의 변화에 맞춰 전략을 계속 조정합니다. 다음 결정에 필요한 경우 학업, 연구, 프로젝트, 시험, 입시 분야의 멘토들이 함께 협력합니다." },
  cinema_8_label: { en: "The Summit Scholars difference", ko: "Summit Scholars의 차이" },
  cinema_8_detail: { en: "One evolving strategy, shared across mentors, from the student’s current position through the final application and next stage.", ko: "학생의 현재 위치부터 최종 원서와 그다음 단계까지, 여러 멘토가 하나의 발전하는 전략을 공유합니다." },
  cinema_8_cta: { en: "Begin your strategy ↗", ko: "맞춤 전략 상담 시작하기 ↗" }
};

/* ---------------- GLOBAL TRANSLATION MERGE ---------------- */

const translations = {
  ...nav,
  ...hero,
  ...profile,
  ...courses,
  ...dental,
  ...consulting,
  ...cinema,
  connect_title: { en: "Connect with Summit Scholars", ko: "Summit Scholars와 소통하기" },
  connect_intro: { en: "Follow our community, see the latest updates, or get in touch directly.", ko: "커뮤니티에 참여하고 최신 소식을 확인하거나 직접 문의해 주세요." },
  connect_naver_text: { en: "Join our Naver Cafe community.", ko: "네이버 카페 커뮤니티에 참여하세요." },
  connect_instagram_text: { en: "Follow Summit Scholars on Instagram.", ko: "인스타그램에서 Summit Scholars를 팔로우하세요." },
  connect_email_text: { en: "Email us with questions and inquiries.", ko: "질문 및 문의 사항을 이메일로 보내주세요." },
  connect_visit: { en: "Visit page", ko: "페이지 방문" },
  connect_follow: { en: "Follow us", ko: "팔로우하기" },
  connect_email: { en: "Send an email", ko: "이메일 보내기" }
};

const consultationLinks = {
  en: "https://calendly.com/chrisryu4986/30min",
  ko: "https://docs.google.com/document/d/1M03ic6TssZmMdGmDrhaGEJjeOH6RDXdkgluSVavK0aw/edit?usp=sharing"
};

const documentTitles = {
  home: { en: "Summit Scholars | Academic Mentorship", ko: "Summit Scholars | 학업 멘토링" },
  profile: { en: "Our Team | Summit Scholars", ko: "멘토 소개 | Summit Scholars" },
  courses: { en: "Courses | Summit Scholars", ko: "수업 과목 | Summit Scholars" },
  consulting: { en: "College Consulting | Summit Scholars", ko: "미국 대학 입시 컨설팅 | Summit Scholars" },
  dental: { en: "Dental School Admissions | Summit Scholars", ko: "미국 치대 입시 컨설팅 | Summit Scholars" },
  schedule: { en: "Schedule | Summit Scholars", ko: "상담 예약 | Summit Scholars" },
  connect: { en: "Connect | Summit Scholars", ko: "연락처 | Summit Scholars" }
};

function updateConsultationLinks(lang){
  const href = consultationLinks[lang] || consultationLinks.en;
  document.querySelectorAll("[data-consult-link]").forEach(link => {
    link.href = href;
  });
}

function applyLanguage(lang) {

  document.documentElement.lang = lang;
  updateConsultationLinks(lang);
  const pageTitle = documentTitles[document.body && document.body.dataset.page];
  if(pageTitle) document.title = pageTitle[lang] || pageTitle.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if(!entry) return;
    const text = entry[lang] || entry["en"]; // fallback to English
    if(!text) return;
    const formatted = text.replace(/\n/g, "<br>");

    if(el.tagName === "H1" || el.tagName === "DIV" || el.innerHTML.includes("<br>") || key === "summit_text"){
      el.innerHTML = formatted;
    } else {
      el.innerText = text;
    }
  });
}

function setKorean(){
  localStorage.setItem('siteLanguage','ko');
  applyLanguage('ko');
  updateRoadmapImage('ko');
}

function setEnglish(){
  localStorage.setItem('siteLanguage','en');
  applyLanguage('en');
  updateRoadmapImage('en');
}

function updateRoadmapImage(lang){
  const roadmap = document.getElementById("roadmap-img");
  if(!roadmap) return;

  if(lang === "ko"){
    roadmap.src = "roadmap-kr.png";
  } else {
    roadmap.src = "roadmap-us.png";
  }
}

/* ---------------- FLOATING CONSULT BUTTON ---------------- */

function createConsultButton(){

  if(document.querySelector(".floating-consult")) return;

  const btn = document.createElement("a");

  btn.href = "https://calendly.com/chrisryu4986/30min";
  btn.target = "_blank";
  btn.rel = "noopener noreferrer";
  btn.className = "floating-consult";
  btn.setAttribute("data-consult-link", "");

  btn.setAttribute("data-i18n","book_consult");
  btn.innerText = "Book Consultation";

  document.body.appendChild(btn);

}

if(document.body){
  createConsultButton();
}else{
  window.addEventListener("DOMContentLoaded", createConsultButton);
}

window.addEventListener('DOMContentLoaded', function(){

  const saved = localStorage.getItem('siteLanguage') || 'en';

  applyLanguage(saved);
  updateRoadmapImage(saved);

});
