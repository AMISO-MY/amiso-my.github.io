
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



let cmts = [
    { name: "Ong Zhi Zheng", pos: "Advisor" },
    { name: "Joyton Fu Hung Li", pos: "Advisor" },
    { name: "Chang Kian Yau", pos: "Advisor" },
    { name: "Liew Ze Wei", pos: "General Management Team" },
    { name: "Lee Ke Yin", pos: "General Management Team" },
    { name: "Joel Pang Kai Chen", pos: "General Management Team" },
    { name: "Ng Ze Xian", pos: "General Management Team" },
    { name: "Lee Han Yang", pos: "Secretary" },
    { name: "Tan Zhi Qi", pos: "Secretary" },
    { name: "Bok Zhe Shing", pos: "Treasurer" },
    { name: "Quincy Jules Tan Yi Liing", pos: "Publicity" },
    { name: "Eunice Lee Xin Yi", pos: "Publicity" },
    { name: "Ong Kok Rhui", pos: "Publicity" },
    { name: "Lam Wei Heng", pos: "Publicity" },
    { name: "Wong Jer Ren", pos: "Problem Selection Committee Head" },
    { name: "Nelson Loh Kwong Weng", pos: "Problem Selection Committee" },
    { name: "Aaron Oong Zhu Wen", pos: "Problem Selection Committee" },
    { name: "Ng Kin Him", pos: "Problem Selection Committee" },
    { name: "Tan Zhi Qi", pos: "Problem Selection Committee" },
    { name: "Shee Yi Rong", pos: "Logistics" },
    { name: "Ching Wei Yang", pos: "Logistics" },
    { name: "Ooi Zhen Khoon", pos: "Logistics" },
    // { name: "Leong Zheng Haw", pos: "Volunteer" },
];

window.addEventListener("load", () => {
    for (let cmt of cmts) {
        let cmtNode = document.createElement("div");
        cmtNode.className = "tooltip";
        cmtNode.innerHTML = `
        <img src="/assets/images/cmt/${cmt.name.replace(/ /g, "_")}.jpg"/>
        <h6>${cmt.name}</h6>
        <span class="tooltiptext">${cmt.pos}</span>
    `;
        document.getElementById("cmts").appendChild(cmtNode);
    }
})