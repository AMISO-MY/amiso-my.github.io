"use strict";

let prelimDate = new Date("Apr 13, 2024 10:00:00").getTime();
console.log(prelimDate);

let countdown = setInterval(() => {
    let now = new Date().getTime();
    let delta = prelimDate - now;

    if (delta < 0) {
        document.getElementById("timer").innerHTML = "";
        clearInterval(countdown);
    }

    let [days, hours, minutes, seconds] = [
        Math.floor(delta / (1000 * 60 * 60 * 24)),
        Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((delta % (1000 * 60)) / 1000)
    ];

    // console.log(days, hours, minutes, seconds);
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}, 1000);
