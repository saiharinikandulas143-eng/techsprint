
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
  },
  {
    name: "HealthTech AI Hack",
    organizer: "MediLabs",
    theme: "AI",
    mode: "Offline",
    duration: 36,
    level: "National",
    city: "Chennai",
    price: 0,
    status: "Past",
    deadline: "Mar 2"
  },
  {
    name: "Open Source Sprint",
    organizer: "GitHub Community",
    theme: "Web",
    mode: "Online",
    duration: 24,
    level: "International",
    city: "Online",
    price: 0,
    status: "Ongoing",
    deadline: "Apr 12"
  },
  {
    name: "Blockchain for Good",
    organizer: "UN Tech",
    theme: "Blockchain",
    mode: "Online",
    duration: 48,
    level: "International",
    city: "Online",
    price: 0,
    status: "Upcoming",
    deadline: "May 1"
  },
  {
    name: "Smart India Hackathon",
    organizer: "Gov of India",
    theme: "AI",
    mode: "Offline",
    duration: 48,
    level: "National",
    city: "Delhi",
    price: 0,
    status: "Upcoming",
    deadline: "May 20"
  },
  {
    name: "Women in Tech Hack",
    organizer: "SheBuilds",
    theme: "Web",
    mode: "Online",
    duration: 36,
    level: "International",
    city: "Online",
    price: 0,
    status: "Upcoming",
    deadline: "Apr 28"
  },
  {
    name: "AI for Climate",
    organizer: "GreenEarth",
    theme: "AI",
    mode: "Offline",
    duration: 48,
    level: "International",
    city: "Pune",
    price: 0,
    status: "Past",
    deadline: "Feb 18"
  },
  {
    name: "Cyber Defence League",
    organizer: "DefenceTech",
    theme: "Cybersecurity",
    mode: "Offline",
    duration: 72,
    level: "National",
    city: "Mumbai",
    price: 799,
    status: "Upcoming",
    deadline: "May 12"
  },
  {
    name: "IoT Hardware Hack",
    organizer: "MakerSpace",
    theme: "IoT",
    mode: "Offline",
    duration: 48,
    level: "College",
    city: "Coimbatore",
    price: 199,
    status: "Upcoming",
    deadline: "May 3"
  },
  {
    name: "Startup Weekend Hack",
    organizer: "Techstars",
    theme: "FinTech",
    mode: "Offline",
    duration: 72,
    level: "International",
    city: "Bangalore",
    price: 999,
    status: "Ongoing",
    deadline: "Apr 14"
  },
  {
    name: "AI x Education Hack",
    organizer: "EduFuture",
    theme: "AI",
    mode: "Online",
    duration: 36,
    level: "National",
    city: "Online",
    price: 0,
    status: "Upcoming",
    deadline: "May 8"
  },
  {
    name: "College Freshers Hack",
    organizer: "TechClub",
    theme: "Web",
    mode: "Offline",
    duration: 24,
    level: "College",
    city: "Kochi",
    price: 0,
    status: "Upcoming",
    deadline: "Apr 22"
  }
];


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

function applyFilters() {
  let data = [...hackathons];

  const search = searchInput.value.toLowerCase();

  data = data.filter(h =>
    h.name.toLowerCase().includes(search) ||
    h.theme.toLowerCase().includes(search) ||
    h.organizer.toLowerCase().includes(search)
  );

  if (filters.status.value)
    data = data.filter(h => h.status === filters.status.value);

  if (filters.mode.value)
    data = data.filter(h => h.mode === filters.mode.value);

  if (filters.level.value)
    data = data.filter(h => h.level === filters.level.value);

  if (filters.theme.value)
    data = data.filter(h => h.theme === filters.theme.value);

  if (filters.duration.value)
    data = data.filter(h => h.duration == filters.duration.value);

  if (filters.price.value)
    data = data.filter(h =>
      filters.price.value === "Free" ? h.price === 0 : h.price > 0
    );

  render(data);
}

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
          <button onclick="alert('Redirecting to registration')">
            Register
          </button>
          <button class="save" onclick="toggleSave('${h.name}')">
            ${isSaved ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    `;
  });
}

function toggleSave(name) {
  saved.has(name) ? saved.delete(name) : saved.add(name);
  applyFilters();
}

searchInput.addEventListener("input", applyFilters);
Object.values(filters).forEach(f => f.addEventListener("change", applyFilters));

applyFilters();
