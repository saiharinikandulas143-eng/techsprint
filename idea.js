function evaluateIdea() {
  const idea = document.getElementById("ideaInput").value.trim();
  const domain = document.getElementById("domain").value;
  const duration = document.getElementById("duration").value;

  if (!idea || !domain || !duration) {
    alert("Please complete all fields");
    return;
  }

  let score = 50;
  let strengths = [];
  let weaknesses = [];
  let improvements = [];
  let features = [];

  if (idea.length > 120) {
    score += 15;
    strengths.push("Clear problem description");
  } else {
    weaknesses.push("Idea description is too short");
    improvements.push("Clearly define the problem and solution");
  }

  if (idea.toLowerCase().includes("ai") || idea.toLowerCase().includes("ml")) {
    score += 10;
    strengths.push("Uses trending technology");
  }

  if (idea.toLowerCase().includes("real-time")) {
    score += 10;
    strengths.push("Real-time interaction adds value");
  }

  if (duration === "24 Hours") {
    improvements.push("Reduce scope to ensure a working demo");
  }

  features.push(
    "User authentication",
    "Analytics dashboard",
    "Role-based access",
    "Demo mode for judges",
    "Scalable architecture"
  );

  if (score > 85) score = 85 + Math.floor(Math.random() * 10);

  document.getElementById("resultCard").classList.remove("hidden");
  document.getElementById("score").innerText = score;

  fillList("strengths", strengths);
  fillList("weaknesses", weaknesses);
  fillList("improvements", improvements);
  fillList("features", features);
}

function fillList(id, items) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });
}
