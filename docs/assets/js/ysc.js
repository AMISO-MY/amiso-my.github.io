
let prelimDate = new Date("Apr 13, 2024 10:00:00").getTime();
console.log(prelimDate);

let countdown = setInterval(() => {
    let now = new Date().getTime();
    let delta = prelimDate - now;

    if (delta < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "";
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



let cmts = [
    { name: "Joyton Fu Hung Li", pos: "Advisor" },
    { name: "Lee Han Yang", pos: "Advisor" },
    { name: "Liew Ze Wei", pos: "Event Coordinator" },
    { name: "Lee Ke Yin", pos: "Event Coordinator" },
    { name: "Joel Pang Kai Chen", pos: "Event Coordinator" },
    { name: "Ong Zhi Zheng", pos: "Event Coordinator" },
    { name: "Ng Kin Him", pos: "Secretary" },
    { name: "Tan Zhi Qi", pos: "Secretary" },
    { name: "Yahaya Bin Basiron", pos: "Secretary" },
    { name: "Bok Zhe Shing", pos: "Treasurer" },
    { name: "Quincy Jules Tan Yi Liing", pos: "Publicity" },
    { name: "Eunice Lee Xin Yi", pos: "Publicity" },
    { name: "Ong Kok Rhui", pos: "Publicity" },
    { name: "Lam Wei Heng", pos: "Publicity" },
    { name: "Shee Yi Rong", pos: "Logistics" },
    { name: "Ching Wei Yang", pos: "Logistics" },
    { name: "Ooi Zhen Khoon", pos: "Logistics" },
    { name: "Ho Hao Yuan", pos: "Logistics" },
    { name: "Wong Jer Ren", pos: "Problem Selection Committee Head of Math" },
    { name: "Nelson Loh Kwong Weng", pos: "Problem Selection Committee Head of Physics" },
    { name: "Ms Ong Sy Ing", pos: "Problem Selection Committee Head of Biology" },
    { name: "Aaron Oong Zhu Wen", pos: "Problem Selection Committee Head of Chemistry" },
    { name: "Ng Kin Him", pos: "Problem Selection Committee Head of Earth Science" },
    { name: "Shee Yi Rong", pos: "Problem Selection Committee Head of Social Science" },
];

window.addEventListener("load", () => {
    for (let cmt of cmts) {
        let cmtNode = document.createElement("div");
        cmtNode.className = "tooltip";
        cmtNode.innerHTML = `
        <img src="/assets/images/cmt/${cmt.name.replace(/ /g, "_")}.jpg" alt="Picture of ${cmt.name}"/>
        <h6>${cmt.name}</h6>
        <span class="tooltiptext">${cmt.pos}</span>
    `;
        document.getElementById("cmts").appendChild(cmtNode);
    }
})
