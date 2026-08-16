
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

  nav_profile: { en: "Our Team", ko: "멘토 소개" },
  nav_courses: { en: "Courses", ko: "수업" },
  nav_consulting: { en: "College Consulting", ko: "대학 컨설팅" },
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

  services_title: { en: "What Summit Scholars Offers", ko: "Summit Scholars 프로그램" },
  pathway_title: { en: "Academic Pathway", ko: "학업 성장 경로" },
  pathway_hint: { en: "← Scroll to explore the academic progression →", ko: "← 스크롤하여 학업 성장 단계를 확인하세요 →" },

  summit_title: { en: "Why Become a Summit Scholar", ko: "왜 Summit Scholars 인가" }

};

/* ---------------- PROFILE PAGE ---------------- */
const profile = {
  team_kicker: { en: "SUMMIT SCHOLARS MENTORS", ko: "SUMMIT SCHOLARS 멘토진" },
  profile_title: { en: "Our Team", ko: "멘토 소개" },
  team_lead: { en: "Meet the mentors behind Summit Scholars.", ko: "Summit Scholars의 멘토들을 소개합니다." },
  profile_intro1: { en: "Different goals require different experience. Our mentors bring firsthand experience across competitive U.S. admissions, combined dental programs, academics, research, standardized testing, and pre-dental education.", ko: "학생의 목표에 따라 가장 적합한 멘토가 함께합니다. 미국 대학 입시, 통합치대, 학업 관리, 시험 준비, 연구, 그리고 Pre-Dental 과정까지 직접 경험한 멘토들이 학생을 장기적으로 관리합니다." },
  seven_year_dental: { en: "7-Year Dental Program", ko: "7년제 통합치대 프로그램" },
  chris_role: { en: "CEO & Mentor", ko: "대표 · 멘토" },
  chris_founder: { en: "Founder & CEO", ko: "Summit Scholars 설립자 · 대표" },
  chris_ap_split: { en: "AP 5s / 4s", ko: "AP 5점 / 4점" },
  chris_research_stats: { en: "Publications / Conferences", ko: "논문 / 학술 발표" },
  chris_bio: { en: "A graduate of an international school and incoming student in the NYU BA/DDS 7-Year Dental Program, Chris was also selected as an NYU Presidential Scholar. His academic profile includes a 1580 SAT, 35 ACT, 102.03/100 GPA, and 13 AP exams. He has authored or co-authored three research publications and presented at five professional conferences. As Founder and CEO, he oversees long-term strategy across academics, extracurriculars, Passion Projects, testing, and college admissions.", ko: "Chris는 국제학교를 졸업하고 NYU BA/DDS 7년제 통합치대 프로그램에 합격했으며, NYU Presidential Scholars 프로그램에도 선발되었습니다. SAT 1580, ACT 35, GPA 102.03/100을 기록했고 13개의 AP 시험에서 11개 과목 5점, 2개 과목 4점을 받았습니다. 연구 논문 3편과 전문 학술 컨퍼런스 발표 5회의 경험을 바탕으로, Summit Scholars 대표로서 학업, EC, Passion Project, 시험 및 대학 입시의 전체 로드맵을 총괄합니다." },
  chris_ap_details: { en: "View AP score details", ko: "AP 과목별 점수 보기" },
  yeji_role: { en: "Senior Mentor", ko: "Senior Mentor · 치대 입시 멘토" },
  yeji_bio: { en: "Yeji is a D2 student at Columbia University College of Dental Medicine. She has experience with both international-school education and Korean secondary education, including Minjok Leadership Academy. Before attending Columbia CDM, she was accepted to the NYU BA/DDS 7-Year Dental Program. At NYU, she earned a 3.96/4.00 GPA, graduated Summa Cum Laude, received Dean’s List recognition, and was inducted into Phi Beta Kappa. She earned a DAT score of 28/30 and mentors both high-school and pre-dental students.", ko: "Yeji 멘토는 Columbia University College of Dental Medicine의 D2 학생입니다. 국제학교와 민족사관고등학교 교육을 모두 경험했으며, Columbia CDM 진학 전 NYU BA/DDS 7년제 통합치대 프로그램에도 합격했습니다. NYU에서 GPA 3.96/4.00을 기록하고 Summa Cum Laude로 졸업했으며, Dean’s List와 Phi Beta Kappa에 선정되었습니다. DAT 28/30의 성취를 바탕으로 고등학생과 Pre-Dental 대학생의 학업 및 치대 입시를 전문적으로 멘토링합니다." },
  sean_role: { en: "Senior Mentor", ko: "Senior Mentor · Pre-Dental Mentor" },
  sean_ap_fives: { en: "AP Scores of 5", ko: "AP 전 과목 5점" },
  sean_bio: { en: "Sean grew up and studied in Virginia and has firsthand experience with the U.S. education system. He was admitted to the NJIT BS/DMD 7-Year Dental Program, currently maintains a 3.9/4.0 GPA, and has earned Dean’s List recognition. In high school, he scored 1540 on the SAT and earned scores of 5 on all six AP exams. His mentoring focuses on U.S. academic planning, AP/GPA management, combined dental programs, and long-term pre-dental preparation.", ko: "Sean 멘토는 미국 Virginia에서 성장하며 미국 교육과정을 직접 경험했고, NJIT BS/DMD 7년제 통합치대 프로그램에 합격했습니다. 현재 NJIT에서 GPA 3.9/4.0을 유지하며 Dean’s List에 선정되었고, 고등학교에서는 SAT 1540과 응시한 AP 6과목 모두 5점을 기록했습니다. 미국 고등학교 생활과 대학 입시 경험을 바탕으로 AP/GPA 관리, 통합치대 입시 및 장기 Pre-Dental 로드맵을 지도합니다." },
  mentoring_specialties: { en: "Mentoring Specialties", ko: "멘토링 전문 분야" },
  sp_college: { en: "College Admissions Strategy", ko: "대학 입시 전략" }, sp_gpa: { en: "GPA Management", ko: "GPA 관리" }, sp_ec: { en: "Extracurricular Strategy", ko: "EC 전략" }, sp_research: { en: "Research", ko: "연구" }, sp_essay: { en: "Essay & Interview Strategy", ko: "에세이 · 인터뷰 전략" },
  sp_dental: { en: "Dental School Admissions", ko: "치대 입시" }, sp_predental: { en: "Pre-Dental Mentoring", ko: "Pre-Dental 멘토링" }, sp_dat: { en: "DAT Preparation", ko: "DAT 준비" }, sp_undergrad_gpa: { en: "Undergraduate GPA", ko: "대학 GPA 관리" }, sp_highschool_gpa: { en: "High School GPA", ko: "고등학교 GPA 관리" }, sp_academic: { en: "Academic Planning", ko: "학업 계획" }, sp_ec_development: { en: "Extracurricular Development", ko: "EC 활동 설계" },
  sp_predental_planning: { en: "Pre-Dental Planning", ko: "Pre-Dental 계획" }, sp_us_highschool: { en: "U.S. High School Strategy", ko: "미국 고등학교 전략" }, sp_college_short: { en: "College Admissions", ko: "대학 입시" }, sp_ec_planning: { en: "Extracurricular Planning", ko: "EC 활동 계획" },
  team_philosophy_kicker: { en: "COLLABORATIVE MENTORSHIP", ko: "함께하는 멘토십" },
  team_philosophy_title: { en: "One Team, Multiple Mentors", ko: "One Team, Multiple Mentors" },
  team_philosophy_lead: { en: "Students are not limited to the expertise of a single mentor.", ko: "학생 한 명을 한 명의 멘토만 담당하지 않습니다." },
  team_philosophy_text: { en: "Depending on the student's needs, Summit Scholars mentors collaborate across admissions strategy, academics, testing, research, and pre-dental preparation.", ko: "학생의 필요에 따라 Chris, Yeji, Sean 멘토가 대학 입시 전략, 학업, 시험, 연구 및 Pre-Dental 준비 전반에서 서로 협력합니다." },
  collab_chris: { en: "Admissions Strategy", ko: "대학 입시 전략" }, collab_yeji: { en: "DAT & Dental School", ko: "DAT · 치대 입시" }, collab_sean: { en: "Pre-Dental & U.S. Curriculum", ko: "Pre-Dental · 미국 교육과정" },

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
  foundational: { en: "Foundational Courses (Grades 4-8)", ko: "기초 과정 (4-8학년)" }

};

/* ---------------- CONSULTING PAGE ---------------- */
const consulting = {
  consulting_eyebrow: { en: "Long-Term College Mentorship", ko: "장기 대학 입시 멘토링" },
  consulting_title: { en: "From the first plan to the final application.", ko: "처음부터 끝까지 관리합니다." },
  consulting_intro: { en: "We manage academics, opportunities, projects, and admissions as one connected long-term strategy—not as isolated tasks.", ko: "성적을 관리하고, 기회를 만들고, 프로젝트를 성장시키고, 마지막에는 하나의 강한 입시 스토리로 연결합니다." },
  consulting_pillar_academic: { en: "Academics", ko: "학업" },
  consulting_pillar_opportunities: { en: "Opportunities", ko: "기회" },
  consulting_pillar_admissions: { en: "Admissions", ko: "대학 입시" },
  consulting_overview_kicker: { en: "ONE CONNECTED STRATEGY", ko: "하나로 연결된 장기 전략" },
  consulting_overview_title: { en: "Hands-on guidance from beginning to end.", ko: "계획부터 실행까지 함께합니다." },
  consulting_overview_text: { en: "College consulting is more than editing an application in senior year. Summit Scholars works with students over multiple years so their academics, extracurriculars, Passion Project, and eventual application develop in one clear direction.", ko: "12학년에 원서를 고쳐주는 것만이 컨설팅이 아닙니다. Summit Scholars는 학생의 학업, 활동, Passion Project, 그리고 최종 대학 입시가 하나의 방향으로 연결되도록 여러 해에 걸쳐 장기적으로 관리합니다." },
  consulting_services_kicker: { en: "FOUR AREAS OF SUPPORT", ko: "4가지 핵심 관리 영역" },
  consulting_services_title: { en: "A complete admissions journey", ko: "입시 전 과정을 아우르는 컨설팅" },
  consulting_academic_title: { en: "Academic Management", ko: "학업 관리" },
  consulting_academic_text: { en: "Strategic management of GPA, course rigor, APs, SAT/ACT, and academic planning based on the student's target universities and long-term admissions goals.", ko: "학생의 학교 성적과 대학 입시 시험을 장기적으로 관리합니다. GPA · AP · SAT/ACT를 따로 관리하는 것이 아니라, 학생의 학년과 목표 대학에 맞춰 하나의 학업 로드맵으로 설계합니다." },
  consulting_tag_courses: { en: "Course Selection", ko: "과목 선택" },
  consulting_tag_timeline: { en: "Academic Timeline", ko: "학업 타임라인" },
  consulting_tag_testing: { en: "Testing Strategy", ko: "시험 전략" },
  consulting_ec_title: { en: "Extracurricular & Opportunity Development", ko: "EC · 활동 설계" },
  consulting_ec_text: { en: "We actively identify meaningful opportunities—including shadowing, volunteering, internships, competitions, research, and summer programs—and help students conduct outreach when needed.", ko: "쉐도잉 · 봉사 · 인턴십 · 대회 · 연구 등 학생 혼자 찾기 어려운 기회를 함께 발굴하고, 필요할 경우 학생의 이름으로 기관에 직접 Cold Outreach를 진행합니다." },
  consulting_ec_emphasis: { en: "The goal is not more activities. It is a coherent portfolio connecting the student's interests, intended major, and story.", ko: "단순히 활동의 개수를 늘리는 것이 아니라 학생의 전공과 스토리가 연결되는 활동 포트폴리오를 만드는 것이 목표입니다." },
  consulting_ec_note: { en: "When available, we also draw on mentor networks and personal connections to help develop real opportunities.", ko: "가능한 경우 멘토 네트워크와 인적 연결도 활용해 실제 참여 기회를 개발합니다." },
  consulting_tag_shadowing: { en: "Shadowing", ko: "쉐도잉" },
  consulting_tag_volunteering: { en: "Volunteering", ko: "봉사" },
  consulting_tag_internships: { en: "Internships", ko: "인턴십" },
  consulting_tag_research: { en: "Research", ko: "연구" },
  consulting_tag_programs: { en: "Summer Programs", ko: "여름 프로그램" },
  consulting_passion_title: { en: "Passion Project Development", ko: "Passion Project" },
  consulting_passion_text: { en: "Turn a student's genuine interests into a real project that is built, implemented, measured, expanded, and ultimately leaves evidence of impact.", ko: "학생의 관심사를 실제 프로젝트로 발전시켜 지역사회에서 사용되고, 확장되고, 결과가 남는 활동으로 만듭니다." },
  consulting_passion_framework: { en: "Build → Implement → Measure → Expand → Leave Impact", ko: "만들고 → 실제로 사용하게 하고 → 성과를 측정하고 → 확장하고 → 결과를 남깁니다." },
  consulting_support_label: { en: "Support may include", ko: "지원 범위" },
  consulting_passion_support: { en: "Ideation · Pitch Deck · Prototype · Pilot · Partnerships · Feedback & Data · Iteration · Impact Measurement · Competitions · Presentations · Research Connections · Scaling · Final Impact Report", ko: "주제 개발 · Pitch Deck · Prototype / Product · 프로젝트 웹사이트 · 실제 Pilot · 기관 파트너십 · Feedback / Data · 개선 · Impact 측정 · 대회 / 발표 · 연구 연계 · 확장 · Final Impact Report" },
  consulting_passion_included: { en: "Passion Project management is included in core consulting—not offered as a separate add-on.", ko: "Passion Project 관리는 별도 추가 서비스가 아니라 기본 컨설팅에 포함됩니다." },
  consulting_admissions_title: { en: "College Admissions", ko: "대학 입시" },
  consulting_admissions_text: { en: "From college-list strategy and application positioning to essays, interviews, and final submissions, we turn years of academics and activities into one coherent admissions narrative.", ko: "학생의 고등학교 활동을 하나의 강한 입시 스토리로 연결하고, 대학 리스트 구축부터 에세이 · 인터뷰 · 원서 제출까지 함께 관리합니다." },
  consulting_admissions_item1: { en: "College list · Major / program strategy", ko: "대학 리스트 · 전공 / 프로그램 전략" },
  consulting_admissions_item2: { en: "ED · EA · REA · RD planning", ko: "ED · EA · REA · RD 지원 전략" },
  consulting_admissions_item3: { en: "Personal Statement · Supplemental essays", ko: "Personal Statement · Supplemental Essays" },
  consulting_admissions_item4: { en: "Brainstorming · Proofreading · Revision", ko: "에세이 브레인스토밍 · 교정 · 수정" },
  consulting_admissions_item5: { en: "Activities · Honors / Awards · Resume", ko: "Activity List · Honors / Awards · 필요 시 Resume" },
  consulting_admissions_item6: { en: "Interviews · Deadlines · Final checks", ko: "인터뷰 · 마감 관리 · 최종 제출 점검" },
  consulting_roadmap_kicker: { en: "AN EXAMPLE, NOT A FIXED FORMULA", ko: "학생에 따라 달라지는 예시 로드맵" },
  consulting_roadmap_title: { en: "How a Passion Project can grow over time", ko: "Passion Project 성장 로드맵" },
  consulting_roadmap_intro: { en: "Every project follows the student's own pace, interests, and opportunities. One possible path looks like this:", ko: "모든 학생이 같은 일정을 따르는 것은 아닙니다. 학생의 관심사와 기회에 따라 달라지는 하나의 예시입니다." },
  consulting_grade9: { en: "Grade 9", ko: "9학년" },
  consulting_grade9_path: { en: "Choose a topic → Pitch Deck → Prototype → Launch", ko: "주제 선정 → Pitch Deck → Prototype → Launch" },
  consulting_grade9_summer: { en: "Summer after Grade 9", ko: "9학년 여름" },
  consulting_grade9_summer_path: { en: "Organization Pilot → Feedback / Data → Improve", ko: "기관 Pilot → Feedback / Data → 개선" },
  consulting_grade10: { en: "Grade 10", ko: "10학년" },
  consulting_grade10_path: { en: "Community Use → Measure Impact → Competitions / Presentations", ko: "지역사회 적용 → Impact 측정 → 대회 / 발표" },
  consulting_grade11: { en: "Grade 11", ko: "11학년" },
  consulting_grade11_path: { en: "Expand → Build a Team → Final Product / Impact Report", ko: "확장 → Team Building → Final Product / Impact Report" },
  consulting_access_kicker: { en: "HOW WE MAKE IT HAPPEN", ko: "기회를 만드는 방법" },
  consulting_access_title: { en: "We Don’t Just Recommend Opportunities. We Help Create Them.", ko: "기회는 기다리는 것이 아니라, 직접 만듭니다." },
  consulting_access_intro: { en: "Many valuable opportunities never appear in a public listing. We identify organizations, professors, clinics, laboratories, nonprofits, companies, and professionals aligned with each student’s interests—then help the student approach them strategically.", ko: "많은 가치 있는 활동은 검색이나 공개 모집만으로 찾기 어렵습니다. 학생의 관심사에 맞는 기관, 교수, 병원, 연구실, 비영리단체, 기업 및 전문가를 직접 조사하고 전략적으로 접근할 수 있도록 돕습니다." },
  consulting_outreach_title: { en: "Cold Outreach", ko: "Cold Outreach" },
  consulting_outreach_lead: { en: "Many of the best opportunities are never publicly advertised.", ko: "좋은 활동은 항상 모집 공고로 올라오지 않습니다." },
  consulting_outreach_text: { en: "We research relevant contacts and help students develop thoughtful, personalized outreach under their own name.", ko: "학생의 관심 분야와 목표에 맞는 기관과 담당자를 조사하고, 학생 명의로 정중하고 전략적인 Cold Emailing을 진행할 수 있도록 돕습니다." },
  consulting_outreach_item1: { en: "Opportunity research", ko: "연락할 기관 조사" }, consulting_outreach_item2: { en: "Contact identification", ko: "적합한 담당자 선정" }, consulting_outreach_item3: { en: "Personalized cold emails", ko: "학생 배경에 맞는 이메일 작성" }, consulting_outreach_item4: { en: "Resume and introduction materials", ko: "Resume · 소개자료 정리" }, consulting_outreach_item5: { en: "Follow-up strategy", ko: "Follow-up 전략" }, consulting_outreach_item6: { en: "Meeting preparation and next steps", ko: "미팅 준비 · 후속 관리" },
  consulting_outreach_note: { en: "We do not take ownership away from the student. We design and manage the process so the student learns to create opportunities directly.", ko: "학생 대신 모든 것을 해주는 것이 아니라, 학생이 직접 기회를 만들어가는 과정을 옆에서 설계하고 관리합니다." },
  consulting_connections_title: { en: "Connections When They Matter", ko: "직접 연결할 수 있는 기회" },
  consulting_connections_lead: { en: "Cold emailing is not the only path.", ko: "모든 활동을 Cold Emailing으로만 찾는 것은 아닙니다." },
  consulting_connections_text: { en: "When appropriate, students may also benefit from mentors’ personal and professional networks—including university and graduate students, researchers, healthcare professionals, organizations, and other mentors.", ko: "가능한 경우 멘토들이 알고 있는 대학생, 대학원생, 연구자, 의료계 관계자, 기관 및 기타 전문 네트워크를 통해 학생에게 적합한 연결도 적극적으로 활용합니다." },
  consulting_connection_tag1: { en: "University Networks", ko: "대학 네트워크" }, consulting_connection_tag2: { en: "Research", ko: "연구" }, consulting_connection_tag3: { en: "Healthcare", ko: "의료계" }, consulting_connection_tag4: { en: "Organizations", ko: "기관" },
  consulting_connections_note: { en: "A connection can provide a stronger starting point, not a guaranteed placement. Participation always depends on student fit, initiative, availability, and organization approval.", ko: "Personal connection은 기회를 보장하는 수단이 아니라 더 좋은 출발점을 돕는 방법입니다. 실제 참여는 학생의 적합성, 주도성, 자리 상황 및 기관의 승인에 따라 결정됩니다." },
  consulting_network_title: { en: "A Mentorship Network That Keeps Growing", ko: "학생과 함께 성장하는 멘토링" },
  consulting_network_lead: { en: "Our mentors are actively progressing through the academic and professional pathways our students hope to enter.", ko: "Summit Scholars의 멘토들은 학생들이 목표로 하는 학업과 전문 분야의 길을 직접 계속 나아가고 있습니다." },
  consulting_network_text: { en: "As our mentors advance through university, dental school, research, and professional education, they gain new firsthand experience and build relationships across academic and professional communities. That current knowledge and expanding network return directly to the students we mentor.", ko: "멘토들이 대학, 치대, 연구 및 전문 교육 과정에서 앞으로 나아가며 쌓는 새로운 경험과 사람들과의 연결, 입시와 학업에 대한 이해는 다시 학생들에게 돌아옵니다." },
  consulting_current_title: { en: "Current, Firsthand Experience", ko: "몇 년 전의 입시가 아니라, 지금의 입시를 경험합니다." },
  consulting_current_text: { en: "Our guidance is informed by mentors who continue to experience U.S. universities, combined dental programs, pre-dental education, dental school, research, and admissions firsthand.", ko: "멘토들이 미국 대학, 통합치대, Pre-Dental, Dental School, 연구와 전문 교육 과정을 직접 계속 경험하기 때문에 변화하는 입시 환경과 학생들의 현실적인 고민을 가까이에서 이해합니다." },
  consulting_network_note: { en: "As Summit Scholars grows, the range of experience, insight, and opportunity available to students grows with it.", ko: "회사가 성장할수록 멘토들의 경험과 네트워크도 성장하고, 학생들에게 제공할 수 있는 기회의 폭도 함께 넓어집니다." },
  consulting_process_kicker: { en: "FROM INTEREST TO IMPACT", ko: "관심사에서 실제 성과까지" }, consulting_process_title: { en: "How opportunities take shape", ko: "기회를 만드는 과정" },
  consulting_process_1_title: { en: "Interest", ko: "관심 분야 분석" }, consulting_process_1_text: { en: "Goals, academic interests, and current activities", ko: "전공, 관심사 및 현재 활동 분석" },
  consulting_process_2_title: { en: "Research", ko: "Opportunity Research" }, consulting_process_2_text: { en: "Organizations, professors, clinics, labs, and companies", ko: "기관 · 교수 · 병원 · 연구실 · 기업 조사" },
  consulting_process_3_title: { en: "Outreach", ko: "Outreach" }, consulting_process_3_text: { en: "Cold email, introduction materials, and resume", ko: "Cold Email · 소개자료 · Resume 준비" },
  consulting_process_4_title: { en: "Connection", ko: "Connection" }, consulting_process_4_text: { en: "Meetings, interviews, and organizational introductions", ko: "미팅 · 인터뷰 · 기관 연결" },
  consulting_process_5_title: { en: "Execution", ko: "Execution" }, consulting_process_5_text: { en: "Shadowing, research, internships, service, or projects", ko: "Shadowing · Research · Internship · Volunteering · Project 진행" },
  consulting_process_6_title: { en: "Development", ko: "Development" }, consulting_process_6_text: { en: "Document results, expand the work, and connect the story", ko: "성과 기록 · 프로젝트 확장 · 대학 입시 스토리 연결" },
  consulting_passion_access_kicker: { en: "PASSION PROJECTS IN PRACTICE", ko: "PASSION PROJECT의 실제 실행" },
  consulting_passion_access_title: { en: "A strong idea still needs a path into the real world.", ko: "Passion Project도 아이디어에서 끝나지 않습니다." },
  consulting_passion_access_text: { en: "A Passion Project does not end with an idea. We may help find an organization willing to pilot it, contact a professor for feedback, develop a nonprofit or healthcare partnership, recruit mentors, gather real-world feedback, and expand the project to additional institutions.", ko: "프로젝트를 실제로 사용할 기관을 찾고, 필요한 사람에게 연락하고, Pilot을 진행하고, Feedback을 받아 개선하는 과정까지 함께해야 비로소 하나의 강한 활동이 됩니다. 기관 Pilot, 교수 피드백, 비영리단체나 의료기관과의 협력, 멘토 연결 및 추가 기관으로의 확장을 함께 설계합니다." },
  consulting_longterm_kicker: { en: "LONG-TERM MENTORSHIP", ko: "장기 멘토링" }, consulting_longterm_title: { en: "From the first step to the next stage—and beyond.", ko: "처음부터 끝까지, 그리고 그 다음 단계까지" },
  consulting_longterm_text: { en: "As a student advances, academic plans become more focused, activities gain depth, Passion Projects expand, interests become clearer, and admissions strategy becomes more precise. At the same time, our mentors continue to develop within their own academic and professional fields, bringing new knowledge and relationships back to each student’s next stage.", ko: "학생의 학년이 올라갈수록 학업 계획은 발전하고, 활동의 깊이는 커지며, Passion Project는 확장되고, 관심 분야와 대학 입시 전략은 더욱 구체화됩니다. 동시에 멘토들도 각자의 학업과 전문 분야에서 계속 성장하며, 그 과정에서 쌓이는 경험과 네트워크를 학생의 다음 단계에 다시 활용합니다." },
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

/* ---------------- GLOBAL TRANSLATION MERGE ---------------- */

const translations = {
  ...nav,
  ...hero,
  ...profile,
  ...courses,
  ...consulting,
  connect_title: { en: "Connect with Summit Scholars", ko: "Summit Scholars와 소통하기" },
  connect_intro: { en: "Follow our community, see the latest updates, or get in touch directly.", ko: "커뮤니티에 참여하고 최신 소식을 확인하거나 직접 문의해 주세요." },
  connect_naver_text: { en: "Join our Naver Cafe community.", ko: "네이버 카페 커뮤니티에 참여하세요." },
  connect_instagram_text: { en: "Follow Summit Scholars on Instagram.", ko: "인스타그램에서 Summit Scholars를 팔로우하세요." },
  connect_email_text: { en: "Email us with questions and inquiries.", ko: "질문 및 문의 사항을 이메일로 보내주세요." },
  connect_visit: { en: "Visit page", ko: "페이지 방문" },
  connect_follow: { en: "Follow us", ko: "팔로우하기" },
  connect_email: { en: "Send an email", ko: "이메일 보내기" }
};

function applyLanguage(lang) {

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
