
let prelimDate = new Date("Mar 19, 2023 10:00:00").getTime();
// console.log(prelimDate);

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
    {name: "Joyton Fu Hung Li", pos: "Event Coordinator, Problem Selection Committee"},
    {name: "Chang Kian Yau", pos: "Event Coordinator, Problem Selection Committee"},
    {name: "Dr Yew Weng Kean", pos: "Advisor from HWU"},
    {name: "Yap Yong Sheng", pos: "Advisor, Problem Selection Committee"},
    {name: "Lee Han Yang", pos: "Secretary"},
    {name: "Mah Hoew Yang", pos: "Secretary"},
    {name: "Liew Ze Wei", pos: "Secretary"},
    {name: "Chin Jia Yao", pos: "Publicity, Problem Selection Committee"},
    {name: "Ong Zhi Zheng", pos: "Publicity, Problem Selection Committee"},
    {name: "Annie Lim Wei-Shyuen", pos: "Logistics"},
    {name: "Lee Cheng Zhen", pos: "Logistics"},
    {name: "Ooi Chun Keat", pos: "Treasurer"},
    {name: "Tristan Chaang", pos: "Problem Selection Committee Head"},
    {name: "Pua E Rick", pos: "Problem Selection Committee"},
    {name: "Chooi Je Qin", pos: "Problem Selection Committee"},
    {name: "Ms Ong Si Ing", pos: "Problem Selection Committee"},
    {name: "Vee Hua Zhi", pos: "Problem Selection Committee"},
    {name: "Wong Jer Ren", pos: "Problem Selection Committee"},
];

for (cmt of cmts) {
    // let cmtNode = document.createElement("div");
    // cmtNode.classList.add("cmt");
    // cmtNode.innerHTML = `
    //     <div class="cmt__name">${cmt.name}</div>
    //     <div class="cmt__pos">${cmt.pos}</div>
    // `;
    // document.getElementById("cmts").appendChild(cmtNode);
}