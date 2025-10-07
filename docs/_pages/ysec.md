---
layout: single
title: Youth STEM Experimentation Camp 2025
permalink: /ysec/
classes: wide
custom_css:
    - ysec
custom_js:
    - ysec
---

<div id="hero">
  <div id="countdown">
    <h2>13–14th December 2025 @ DISTED College, Penang</h2>
    <h1>An experimental camp for Malaysians</h1>
    <p>A student-led exploration into practical science.</p>
    <a href="https://forms.cloud.microsoft/r/Crfjj8ydZf" target="_blank">Register now!</a>
    <p id="register-timer">Registration closes in: Loading...</p>
    <p id="timer">Loading...</p>
  </div>
  <div id="logo"><img src="/assets/images/ysec/ysec-logo.png" alt="YSC Logo" /></div>
</div>

<script>
  // === CONFIG ===
  const registrationEnd = new Date("2025-12-01T23:59:59+08:00"); // registration closes
  const preliminaryStart = new Date("2025-12-13T00:00:00+08:00"); // prelim start
  const preliminaryEnd = new Date("2025-12-14T23:59:59+08:00");   // prelim end
  const resultsAnnounce = new Date("2026-01-01T12:00:00+08:00");  // results day
  const finalStart = new Date("2026-02-15T00:00:00+08:00");       // final start
  const finalEnd = new Date("2026-02-16T23:59:59+08:00");         // final end

  const registerTimer = document.getElementById("register-timer");
  const eventTimer = document.getElementById("timer");

  function formatTime(diff) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  }

  function updateTimers() {
    const now = new Date();

    // === REGISTRATION TIMER ===
    if (now < registrationEnd) {
      const diff = registrationEnd - now;
      registerTimer.innerHTML = `Registration closes in: <b>${formatTime(diff)}</b>`;
    } else {
      registerTimer.innerHTML = "📝 Registration closed!";
    }

    // === EVENT TIMER ===
    if (now < preliminaryStart) {
      const diff = preliminaryStart - now;
      eventTimer.innerHTML = `Countdown to Preliminary Round:<br><b>${formatTime(diff)}</b>`;
    } else if (now < preliminaryEnd) {
      eventTimer.innerHTML = "🏁 Preliminary Round in progress!";
    } else if (now < resultsAnnounce) {
      eventTimer.innerHTML = "📄 Preliminary Round ended! Results will be announced on <b>1 January 2026</b>.";
    } else if (now < finalStart) {
      const diff = finalStart - now;
      eventTimer.innerHTML = `Countdown to Final Round:<br><b>${formatTime(diff)}</b>`;
    } else if (now < finalEnd) {
      eventTimer.innerHTML = "⚗️ Final Round in progress!";
    } else {
      eventTimer.innerHTML = "🎉 Thanks for joining YSEC 2025! See you next year!";
    }
  }

  setInterval(updateTimers, 1000);
  updateTimers();
</script>




# Introduction
The Youth STEM Experimental Camp (YSEC) is the first ever student-led, nation-wide experimental science camp hosted by AMISO, in collaboration with DISTED College!

The camp aims to foster participants’ knowledge in the experimental aspects of STEM and introduce **high school and pre-university** participants to the practical aspects of the International Science Olympiads. In a world where science is used as a guiding light, it is crucial to also use science in the dark; to apply the scientific method in foreign scenarios and better understand the incricate world around us when not much else is understood! Covering **Biology, Chemistry, and Physics**, YSEC welcomes students to explore the world together!

YSEC 2025 is a competition in which participants can join in groups of four, and are allowed to discuss amongst their teams during the competition. Points are calculated in teams rather than individually, and if there is a tie in points between teams, the team which submitted their answers earlier will be ranked higher.

The Youth STEM Experiment Cup consists of 2 rounds: the **Preliminary Round**, and the **Final Experiment Camp**. Participants will have to qualify in the preliminary round in order to proceed.

The important details are as follows:

**Preliminary Round**
- **Date**			: 8th November 2025
- **Time**			: 10:00am - 11:32 am (Prelims, subject to changes)
- **Venue**			: Online
- **Question Format**			: A total of six questions, with participants required to complete 4 questions in total, as specified in each section. In Section A, 3 questions are presented from each major Science. All must be answered. In Section B, another 3 questions are given (one for each Science), with the participants required to answer at least 1 of their choice.


**Experiment Camp**
- **Date**			: 13th to 14th December 2025
- **Time**			: 8:00am - 9:00pm (First day), 8:00am - 6:00pm (second day)
- **Venue**			: DISTED College @ Penang
- **Question Format**			: TBD

The final experiment camp, held in DISTED College in Penang, includes practical sessions, talks by academic professionals, and many more exciting games and events!

More details can be found in the [YSEC Infopack](https://docs.google.com/document/d/1rCYlhHTnN9SkOXW6YTTUiNv6Obcr9_QMTqjRvvX1gdA/edit?pli=1&tab=t.0), such as the detailed schedules, terms and conditions, and additional details on both the Preliminary and the Final Camp Round.


# Registration
- Application for YSC 2025 is **free of charge**!
- [Sign up today!](https://forms.cloud.microsoft/r/Crfjj8ydZf)


# Timeline
- 08/10/2025: Registration Starts
- 02/11/2025: Registration Deadline
- 08/11/2025: Preliminary Round
- 26/11/2025: Announcement of Top Scorers
- 03/12/2025: Finalist Attendance Confirmation Deadline
- 13/12/2025 - 13/12/2025: Final Round


# Special Thanks
<div id="logos">
    <img src="/assets/images/ysec/disted.png" alt="Disted Logo"/>
    <img src="/assets/images/amiso-logo.png" alt="AMISO Logo"/>
</div>


# Links
- [YSEC Infopack](https://docs.google.com/document/d/1z4oLtsypTcpf7X5R42FE8y_79gJ14lWaZdiih1w6Aak/edit?usp=sharing)
- [Instagram](https://instagram.com/youthstemexperimentcamp)
