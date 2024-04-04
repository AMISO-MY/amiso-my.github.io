"use strict";

let prelimDate = new Date("Nov 25, 2023 10:00:00").getTime();
console.log(prelimDate);

let countdown = setInterval(() => {
    let now = new Date().getTime();
    let delta = prelimDate - now;

    if (delta < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "";
    }
    else {
        let [days, hours, minutes, seconds] = [
            Math.floor(delta / (1000 * 60 * 60 * 24)),
            Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)),
            Math.floor((delta % (1000 * 60)) / 1000)
        ];
        // console.log(days, hours, minutes, seconds);
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);
