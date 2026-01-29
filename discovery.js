/* ===============================
   DATA
================================ */

const hackathons = [
  {
    name: "AI Innovation Challenge",
    organizer: "TechCorp",
    theme: "AI",
    mode: "Online",
    duration: 48,
    level: "National",
    city: "Online",
    price: 0,
    status: "Upcoming",
    deadline: "Apr 20"
  },
  {
    name: "Web3 Buildathon",
    organizer: "CryptoOrg",
    theme: "Blockchain",
    mode: "Online",
    duration: 24,
    level: "International",
    city: "Online",
    price: 0,
    status: "Ongoing",
    deadline: "Apr 15"
  },
  {
    name: "College Web Hack",
    organizer: "ABC University",
    theme: "Web",
    mode: "Offline",
    duration: 48,
    level: "College",
    city: "Bangalore",
    price: 299,
    status: "Upcoming",
    deadline: "Apr 30"
  },
  {
    name: "CyberSecure Hack",
    organizer: "SecureNow",
    theme: "Cybersecurity",
    mode: "Online",
    duration: 36,
    level: "National",
    city: "Online",
    price: 499,
    status: "Upcoming",
    deadline: "May 5"
  },
  {
    name: "IoT Smart City Hack",
    organizer: "GovTech",
    theme: "IoT",
    mode: "Offline",
    duration: 72,
    level: "International",
    city: "Hyderabad",
    price: 0,
    status: "Past",
    deadline: "Mar 10"
  },
  {
    name: "FinTech Sprint",
    organizer: "PayFlow",
    theme: "FinTech",
    mode: "Online",
    duration: 48,
    level: "National",
    city: "Online",
    price: 199,
    status: "Upcoming",
    deadline: "Apr 25"
  }
];

/* ===============================
   ELEMENTS
================================ */

const list = document.getElementById("hackathonList");
const searchInput = document.getElementById("searchInput");

const filters = {
  status: document.getElementById("statusFilter"),
  mode: document.getElementById("modeFilter"),
  price: document.getElementById("priceFilter"),
  duration: document.getElementById("durationFilter"),
  level: document.getElementById("levelFilter"),
  theme: document.getElementById("themeFilter")
};

let saved = new Set();

/* ===============================
   FILTER LOGIC (FIXED)
================================ */

function applyFilters() {
  let data = [...hackathons];
  const search = searchInput.value.toLowerCase();

  // SEARCH
  if (search) {
    data = data.filter(h =>
      h.name.toLowerCase().includes(search) ||
      h.organizer.toLowerCase().includes(search) ||
      h.theme.toLowerCase().includes(search)
    );
  }

  // STATUS
  if (filters.status.value) {
    data = data.filter(h => h.status === filters.status.value);
  }

  // MODE
  if (filters.mode.value) {
    data = data.filter(h => h.mode === filters.mode.value);
  }

  // LEVEL
  if (filters.level.value) {
    data = data.filter(h => h.level === filters.level.value);
  }

  // THEME
  if (filters.theme.value) {
    data = data.filter(h => h.theme === filters.theme.value);
  }

  // DURATION
  if (filters.duration.value) {
    data = data.filter(h => h.duration === Number(filters.duration.value));
  }

  // PRICE
  if (filters.price.value === "Free") {
    data = data.filter(h => h.price === 0);
  }
  if (filters.price.value === "Paid") {
    data = data.filter(h => h.price > 0);
  }

  render(data);
}

/* ===============================
   RENDER
================================ */

function render(data) {
  list.innerHTML = "";

  if (!data.length) {
    list.innerHTML = `<p style="opacity:.7">No hackathons match your filters.</p>`;
    return;
  }

  data.forEach(h => {
    const isSaved = saved.has(h.name);

    list.innerHTML += `
      <div class="hackathon-card">
        <h3>${h.name}</h3>

        <div class="meta">
          ${h.mode} · ${h.duration}h · ${h.level}<br>
          ${h.city} · ${h.price === 0 ? "Free" : "₹" + h.price}<br>
          Deadline: ${h.deadline}
        </div>

        <div class="tags">
          <span class="tag">${h.theme}</span>
          <span class="tag">${h.status}</span>
        </div>

        <div class="actions">
          <button>Register</button>
          <button class="save" onclick="toggleSave('${h.name}')">
            ${isSaved ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    `;
  });
}

/* ===============================
   SAVE
================================ */

function toggleSave(name) {
  saved.has(name) ? saved.delete(name) : saved.add(name);
  applyFilters();
}

/* ===============================
   EVENTS
================================ */

searchInput.addEventListener("input", applyFilters);
Object.values(filters).forEach(f =>
  f.addEventListener("change", applyFilters)
);

/* INIT */
applyFilters();
