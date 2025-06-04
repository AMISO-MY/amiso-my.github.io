---
layout: single
title: Youth STEM Cup
permalink: /ysc/
classes: wide
custom_css:
    - ysc
custom_js:
    - ysc
cmts:
    - name: "Joyton Fu Hung Li"
      pos: "Advisor"
    - name: "Lee Han Yang"
      pos: "Advisor"
    - name: "Liew Ze Wei"
      pos: "Event Coordinator"
    - name: "Lee Ke Yin"
      pos: "Event Coordinator"
    - name: "Joel Pang Kai Chen"
      pos: "Event Coordinator"
    - name: "Ong Zhi Zheng"
      pos: "Event Coordinator"
    - name: "Ng Kin Him"
      pos: "Secretary"
    - name: "Tan Zhi Qi"
      pos: "Secretary"
    - name: "Yahaya Bin Basiron"
      pos: "Secretary"
    - name: "Bok Zhe Shing"
      pos: "Treasurer"
    - name: "Quincy Jules Tan Yi Liing"
      pos: "Publicity"
    - name: "Eunice Lee Xin Yi"
      pos: "Publicity"
    - name: "Ong Kok Rhui"
      pos: "Publicity"
    - name: "Lam Wei Heng"
      pos: "Publicity"
    - name: "Shee Yi Rong"
      pos: "Logistics"
    - name: "Ching Wei Yang"
      pos: "Logistics"
    - name: "Ooi Zhen Khoon"
      pos: "Logistics"
    - name: "Ho Hao Yuan"
      pos: "Logistics"
    - name: "Wong Jer Ren"
      pos: "Problem Selection Committee Head of Math"
    - name: "Nelson Loh Kwong Weng"
      pos: "Problem Selection Committee Head of Physics"
    - name: "Ms Ong Sy Ing"
      pos: "Problem Selection Committee Head of Biology"
    - name: "Aaron Oong Zhu Wen"
      pos: "Problem Selection Committee Head of Chemistry"
    - name: "Ng Kin Him"
      pos: "Problem Selection Committee Head of Earth Science"
    - name: "Shee Yi Rong"
      pos: "Problem Selection Committee Head of Social Science"
---

<div id="hero">
    <div id="countdown">
        <h2>19th April 2025 (Prelim); 21st June 2025 (Final)</h2>
        <h1>A Team Science Competition for Malaysians</h1>
        <p>AMISO's student-led olympiad returns once again in 2025!</p>
        <a href="https://forms.gle/7kMcAyDRbQfG3qE3A" target="_blank">Register now!</a>
        <h2>Countdown to AMISO 2025 Finals</h2>
        <div id="timer" style="font-size: 2em; font-weight: bold;">Loading...</div>
        <!-- <p id="timer">0d 0h 0m 0s</p> -->
        <!-- <p id="timer">It's a wrap!</p>
        <p>Thanks to everyone who joined YSC!</p> -->
    </div>
    <div id="logo"><img src="/assets/images/ysc/ysc-logo.png" alt="Logo of YSC"/></div>
</div>

<script>
  function updateCountdown() {
    const targetDate = new Date("June 21, 2025 08:00:00").getTime(); 
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById("timer").innerHTML = "The event has started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
</script>


# Introduction
The Youth STEM Cup (YSC) is a student-led, nation-wide competitive science olympiad hosted by AMISO in collaboration with Heriot-Watt University!

Our main purpose is to promote interests in competitive STEM subjects (especially Olympiad competitions) amongst **high school and pre-university students** in Malaysia, while also equipping participants with the knowledge to prepare themselves for the selection tests of International Science Olympiads.

The Youth STEM Cup is a competition in which participants can join in groups of four, and are allowed to discuss amongst their teams during the competition. Points are calculated in teams rather than individually, and if there is a tie in points between teams, the team which submitted their answers earlier will be ranked higher.

The Youth STEM Cup consists of 2 rounds: the **Preliminary Round**, and the **Final Round**. Participants will have to qualify in the preliminary round in order to proceed.

The important details are as follows:

**Preliminary Round:**
- **Date**			: 19th April 2025
- **Time**			: 10:00am - 11:02am
- **Venue**			: Online

**Final Round**:
- **Date**			: 21st June 2025
- **Venue**			: Heriot-Watt University Malaysia

# Registration
- Application for YSC is **free of charge**!
- Registration Deadline : 18 April 2025 (11.59pm)
- Participants may join individually or form a group of four, discussion is allowed. Preliminary round consists of 36 questions whereas final round consists of 5 problems with 10 questions each (tbc).
- Top 15 teams from each category will be selected to contest in final round.
- [Sign up today!](https://forms.gle/7kMcAyDRbQfG3qE3A)

# Cash prize and certificate awarded:
Winners and participants will receive certificates!

Prize money fingers crossed? We're trying to find sponsors to fund for it. Do email us (youthstemcup@gmail.com) if you're interested in sponsoring us.

<!-- # Timeline
- 01/01/2024: Registration Starts
- 31/03/2024: Registration Deadline
- 13/04/2024: Preliminary Round
- 22/06/2024: Final Round -->

<!-- # Schedule
![Preliminary Round Schedule]()
![Final Round Day-Of Schedule]() -->

# Special Thanks
<!-- HWU Logo, AMISO Logo -->
<div id="logos">
    <img src="/assets/images/ysc/hwu.jpg" alt="HWU Logo"/>
    <img src="/assets/images/amiso-logo.png" alt="AMISO Logo"/>
</div>

# Reading Materials
Below are some reading materials recommended by the YSC Problem Setting Committee.
A scope of the YSC syllabus can be found [here](https://docs.google.com/document/d/1jajnhqAS3pBfq2higLZdCzB7_z7gj2b0xEm4aL5FabQ/edit?usp=sharing) as well.

### Mathematics
- *A First Course in Calculus* by Serge Lang
- *Junior Problem Seminar* by D.A. Santos
- [Tristan Chaang's Book](https://play.google.com/store/books/details?id=N-WuEAAAQBAJ)

### Physics
- *An Introduction to Mechanics* by Kleppner and Kolenkow
- *Fundamentals of Physics* by Halliday, Resnick, Walker
- *The Art of Insight* by Sanjoy Mahajan

### Chemistry
- [CK Yau's Handouts](https://drive.google.com/drive/folders/1_YMI3C_rzULoGbdFbkBGiLnUULl1z4ek?usp=sharing)
- [Introduction to Lattice Structures in Crystalline Solid](https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Inorganic_Chemistry_(LibreTexts)/07%3A_The_Crystalline_Solid_State/7.02%3A_Formulas_and_Structures_of_Solids/7.2.02%3A_Lattice_Structures_in_Crystalline_Solids)
- [USNCO Quizzes](https://usnco-quizzes.web.app/)
- Form 6 (STPM) Chemistry Textbooks (any publishers)
- *Organic Chemistry* by Jonathan Clayden, Nick Greeves and Stuart Warren

### Biology
- *Campbell Biology* by Lisa A. Urry

### Earth Science
- [https://chojeq.com/iao](https://chojeq.com/iao)
- [https://usaaao.org/resources/](https://usaaao.org/resources/)
- [USESO Guide](https://useso.guide/)

### Social Science
- [The Economy 1.0 by the CORE team](https://www.core-econ.org/the-economy/v1/book/text/0-3-contents.html)
- [Materials from the UK Linguistics Olympiad](https://www.uklo.org/how-do-i-prepare/)


# YSC Past Papers

The below are the Sample Problem Sets.

- [YSC Sample Problem Set (Senior)](</assets/files/ysc/YSC_Sample_Problem_Set_(Senior).pdf>)
- [YSC Sample Problem Set (Junior)](</assets/files/ysc/YSC_Sample_Problem_Set_(Junior).pdf>)

The below contains Problems and Answers of previous YSC's.

### 2025

- [YSC 2025 Prelim (Senior) - Problems and Answers](</assets/files/ysc/YSC_2025_Prelim_(Senior)_-_Problems_and_Answers.pdf>)

- [YSC 2025 Prelim (Junior) - Problems and Answers](</assets/files/ysc/YSC_2025_Prelim_(Junior)_-_Problems_and_Answers.pdf>)

### 2024
- [YSC 2024 Final (Senior) - Problems & Answers](</assets/files/ysc/YSC_2024_Final_(Senior)_Problems_&_Answers.pdf>)
- [YSC 2024 Final (Junior) - Problems & Answers](</assets/files/ysc/YSC_2024_Final_(Junior)_Problems_&_Answers.pdf>)
- [YSC 2024 Prelim (Senior) - Problems & Answers](</assets/files/ysc/YSC_2024_Prelim_(Senior)_Problems_&_Answers.pdf>)
- [YSC 2024 Prelim (Junior) - Problems & Answers](</assets/files/ysc/YSC_2024_Prelim_(Junior)_Problems_&_Answers.pdf>)

### 2023
- [YSC 2023 Final - Problems & Answers](</assets/files/ysc/YSC_2023_Final_Problems_&_Answers.pdf>)
- [YSC 2023 Prelim - Problems & Answers](</assets/files/ysc/YSC_2023_Prelim_Problems_&_Answers.pdf>)

# Links
- [YSC Infopack](https://docs.google.com/document/d/16fuy7yK94xt0-6DNxi0a4RGrZkSRgXIB8JK1Vastlx0/edit?usp=sharing)
- [Instagram](https://instagram.com/youthstemcup)

# Past YSC Events
The first YSC was held in 2023, with huge support from Heriot-Watt University Malaysia - the event was a success, and garnered the participation of over 1k students from all across Malaysia! A post-event writeup [can be found here](https://drive.google.com/file/d/1uLmDlMcmzXX3LqL3cueniZ45SrJdaWI4/view?usp=sharing), and below are some images from the Final Round of YSC 2023:

<div id="past-imgs">
    <div>
        <img src="/assets/images/ysc-2023-group.jpg" alt="YSC 2023 Group Photo"/>
        <img src="/assets/images/ysc-2023-exam.jpg" alt="YSC 2023 Exam Photo"/>
    </div>
    <div>
        <img src="/assets/images/ysc-2023-forum.jpg" alt="YSC 2023 Forum Photo"/>
        <img src="/assets/images/ysc-2023-talk.jpg" alt="YSC 2023 Economics Talk Photo"/>
    </div>
</div>

<div id="cmts-wrapper">
<div id="cmts">
{% for cmt in page.cmts %}
<div class="tooltip">
  <img loading="lazy" src="/assets/images/cmt/{{ cmt.name | replace: ' ', '_' }}.jpg" alt="Picture of {{ cmt.name }}">
  <h6>{{ cmt.name }}</h6>
  <span class="tooltiptext">{{ cmt.pos }}</span>
</div>
{% endfor %}
</div>
</div>
