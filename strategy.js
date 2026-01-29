const content = {
  beginner: {
    desc: "Build fundamentals, clarity, and confidence for your first hackathon.",
    win: [
      "Choose a simple, solvable problem",
      "Focus on a working demo",
      "Explain your idea in one sentence",
      "Prepare pitch early",
      "Clarity beats complexity"
    ],
    plan7: [
      "Problem selection",
      "Idea validation",
      "Tech stack setup",
      "Core feature build",
      "Finish MVP",
      "Pitch preparation",
      "Practice & polish"
    ],
    plan14: [
      "Research problem",
      "Validate idea",
      "Design solution",
      "Setup repo",
      "Build core features",
      "UI polish",
      "Demo preparation",
      "Pitch refinement",
      "Mock judging",
      "Final review"
    ],
    strategies: [
      "Stick to one core feature",
      "Avoid scope creep",
      "Document everything clearly"
    ],
    mistakes: [
      "Overengineering",
      "No demo",
      "Poor explanation"
    ]
  },

  intermediate: {
    desc: "Differentiate your solution and align strongly with judging criteria.",
    win: [
      "Improve an existing solution",
      "Highlight innovation clearly",
      "Use real APIs or data",
      "Freeze features early",
      "Tell a strong story"
    ],
    plan7: [
      "Market research",
      "Competitor analysis",
      "Idea refinement",
      "Architecture design",
      "MVP build",
      "UX polish",
      "Demo + pitch"
    ],
    plan14: [
      "Deep problem research",
      "Validation interviews",
      "System design",
      "Core development",
      "Feature enhancement",
      "Performance tuning",
      "Pitch storytelling",
      "Judge simulation"
    ],
    strategies: [
      "Build stable MVP early",
      "Optimize UX",
      "Prepare backup demo"
    ],
    mistakes: [
      "Feature overload",
      "Weak innovation justification",
      "Ignoring UX"
    ]
  },

  advanced: {
    desc: "Focus on system thinking, scalability, and competitive advantage.",
    win: [
      "Solve a non-obvious problem",
      "Design scalable architecture",
      "Explain trade-offs",
      "Show roadmap beyond hackathon",
      "Maximize judge wow-factor"
    ],
    plan7: [
      "Identify high-impact problem",
      "Architecture planning",
      "Vertical slice build",
      "AI / analytics integration",
      "System optimization",
      "Pitch refinement",
      "Demo stress test"
    ],
    plan14: [
      "Problem discovery",
      "Data sourcing",
      "System design",
      "Core system build",
      "Scalability planning",
      "Advanced features",
      "Impact metrics",
      "Pitch mastery"
    ],
    strategies: [
      "Thin but complete solution",
      "Clear system diagrams",
      "Strong future roadmap"
    ],
    mistakes: [
      "Overcomplex architecture",
      "Unclear value proposition"
    ]
  }
};

const desc = document.getElementById("trackDescription");
const winGuide = document.getElementById("winGuide");
const plan7 = document.getElementById("plan7");
const plan14 = document.getElementById("plan14");
const strategies = document.getElementById("strategies");
const mistakes = document.getElementById("mistakes");

function load(level) {
  const d = content[level];
  desc.innerText = d.desc;

  winGuide.innerHTML = d.win.map(i => `<li>${i}</li>`).join("");
  plan7.innerHTML = d.plan7.map(i => `<li>${i}</li>`).join("");
  plan14.innerHTML = d.plan14.map(i => `<li>${i}</li>`).join("");
  strategies.innerHTML = d.strategies.map(i => `<li>${i}</li>`).join("");
  mistakes.innerHTML = d.mistakes.map(i => `<li>${i}</li>`).join("");
}

document.querySelectorAll(".track").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".track").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    load(btn.dataset.level);
  };
});

load("beginner");
