/* ===============================
   COUNTDOWN TIMER
================================ */
const hackathonEnd = new Date();
hackathonEnd.setHours(hackathonEnd.getHours() + 36);

function updateTimer() {
  const now = new Date();
  const diff = hackathonEnd - now;

  if (diff <= 0) {
    document.getElementById("timer").innerText = "Hackathon Ended";
    return;
  }

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerText =
    `${h}h ${m}m ${s}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ===============================
   SAVED HACKATHONS
================================ */
const savedList = document.getElementById("savedHackathons");
const saved = JSON.parse(localStorage.getItem("saved") || "[]");

if (saved.length === 0) {
  savedList.innerHTML = "<li>No saved hackathons</li>";
} else {
  saved.forEach(id => {
    const li = document.createElement("li");
    li.textContent = `Hackathon #${id}`;
    savedList.appendChild(li);
  });
}

/* ===============================
   TASK PLANNER
================================ */
const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
const taskList = document.getElementById("tasks");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} 
        onchange="toggleTask(${i})">
      ${t.text}
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;
  tasks.push({ text: input.value, done: false });
  input.value = "";
  saveTasks();
}

function toggleTask(i) {
  tasks[i].done = !tasks[i].done;
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();

/* ===============================
   CHECKLIST
================================ */
const checklistItems = [
  "Problem finalized",
  "MVP working",
  "GitHub README ready",
  "Demo prepared",
  "Pitch deck ready",
  "Backup demo saved"
];

const checklist = document.getElementById("checklist");
checklistItems.forEach(item => {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox"> ${item}`;
  checklist.appendChild(li);
});

/* ===============================
   DEADLINES
================================ */
const deadlines = [
  "Idea Freeze — 6 hrs left",
  "Demo Ready — 12 hrs left",
  "Final Submission — 3 hrs left"
];

const deadlinesList = document.getElementById("deadlines");
deadlines.forEach(d => {
  const li = document.createElement("li");
  li.textContent = d;
  deadlinesList.appendChild(li);
});

/* ===============================
   NOTES
================================ */
const notes = document.getElementById("notes");
notes.value = localStorage.getItem("notes") || "";

notes.addEventListener("input", () => {
  localStorage.setItem("notes", notes.value);
});
