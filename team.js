const teammates = [
  { name: "Aarav", skills: "Frontend, React", exp: "Intermediate" },
  { name: "Meera", skills: "AI, Python", exp: "Advanced" },
  { name: "Kunal", skills: "Backend, Node", exp: "Beginner" },
  { name: "Isha", skills: "UI/UX Design", exp: "Intermediate" }
];

const mentors = [
  { name: "Rahul (Ex-Google)", domain: "AI & ML" },
  { name: "Sneha (Startup Founder)", domain: "Pitching" },
  { name: "Ankit (Senior Dev)", domain: "Full Stack" }
];

const matchList = document.getElementById("matchList");
const mentorList = document.getElementById("mentorList");

teammates.forEach(t => {
  matchList.innerHTML += `
    <div class="card-box">
      <strong>${t.name}</strong>
      <p>${t.skills}</p>
      <small>${t.exp}</small>
      <button class="neon-btn">Invite</button>
    </div>
  `;
});

mentors.forEach(m => {
  mentorList.innerHTML += `
    <div class="card-box">
      <strong>${m.name}</strong>
      <p>${m.domain}</p>
      <button class="neon-btn">Connect</button>
    </div>
  `;
});
