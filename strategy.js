document.addEventListener("DOMContentLoaded", () => {

const content = {
  beginner: {
    desc: "Build fundamentals, clarity, and confidence for your first hackathon.",
    win: ["Choose a simple problem","Working demo first","Explain clearly"],
    plan7:["Idea","Setup","Build","Polish"],
    plan14:["Research","Design","Develop","Refine"],
    strategies:["Keep scope small"],
    mistakes:["Overengineering"]
  },

  intermediate: {
    desc: "Differentiate and align with judging criteria.",
    win:["Use real APIs","Highlight innovation","Strong pitch"],
    plan7:["Research","Architecture","Build","Pitch"],
    plan14:["Deep design","Advanced features","Testing"],
    strategies:["Better UX"],
    mistakes:["Too many features"]
  },

  advanced: {
    desc: "Focus on scalability and wow-factor.",
    win:["Scalable design","Metrics","Judge impact"],
    plan7:["System design","Core build","Optimize"],
    plan14:["Advanced architecture","AI features"],
    strategies:["System thinking"],
    mistakes:["Overcomplication"]
  }
};


/* ===== DOM ===== */

const desc = document.getElementById("trackDescription");
const winGuide = document.getElementById("winGuide");
const plan7 = document.getElementById("plan7");
const plan14 = document.getElementById("plan14");
const strategies = document.getElementById("strategies");
const mistakes = document.getElementById("mistakes");

const buttons = document.querySelectorAll(".track");


/* ===== LOAD CONTENT ===== */

function render(el, arr){
  el.innerHTML = arr.map(x => `<li>${x}</li>`).join("");
}

function load(level){
  const d = content[level];

  desc.textContent = d.desc;
  render(winGuide, d.win);
  render(plan7, d.plan7);
  render(plan14, d.plan14);
  render(strategies, d.strategies);
  render(mistakes, d.mistakes);
}


/* ===== BUTTON CLICK ===== */

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{

    buttons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const level = btn.dataset.level;
    load(level);
  });
});


/* ===== DEFAULT ===== */

load("beginner");

});
