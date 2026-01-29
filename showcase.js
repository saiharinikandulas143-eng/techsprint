const projectsData = [
  {
    title: "HackHub Platform",
    description: "AI-powered hackathon guidance & performance platform.",
    tech: ["Web","AI"],
    github: "https://github.com/example/hackhub",
    demo: "https://hackhub.demo",
    media: "Demo Video Available"
  },
  {
    title: "GreenTech Optimizer",
    description: "Carbon footprint optimization using ML.",
    tech: ["AI"],
    github: "https://github.com/example/greentech",
    demo: "https://greentech.demo",
    media: "Screenshots Uploaded"
  },
  {
    title: "ChainVote",
    description: "Blockchain-based secure voting system.",
    tech: ["Blockchain","Web"],
    github: "https://github.com/example/chainvote",
    demo: "https://chainvote.demo",
    media: "Live Demo"
  }
];

const projectsContainer = document.getElementById("projects");
const techFilter = document.getElementById("techFilter");

function renderProjects(filter="all") {
  projectsContainer.innerHTML = "";
  projectsData
    .filter(p => filter==="all" || p.tech.includes(filter))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="links">
          <a href="${p.github}" target="_blank">GitHub</a>
          <a href="${p.demo}" target="_blank">Demo</a>
        </div>
        <div class="media">${p.media}</div>
      `;
      projectsContainer.appendChild(card);
    });
}

techFilter.addEventListener("change", e => {
  renderProjects(e.target.value);
});

document.getElementById("shareBtn").onclick = () => {
  navigator.clipboard.writeText(window.location.href);
  alert("Portfolio link copied!");
};

renderProjects();
