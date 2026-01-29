const savedList = document.getElementById("savedList");

// Get saved IDs from localStorage
const savedIds = new Set(
  JSON.parse(localStorage.getItem("saved") || "[]")
);

// Filter hackathons using saved IDs
const savedHackathons = HACKATHONS.filter(h =>
  savedIds.has(h.id)
);

if (savedHackathons.length === 0) {
  savedList.innerHTML = `<p style="opacity:.7">
    You haven’t saved any hackathons yet.
  </p>`;
} else {
  savedList.innerHTML = savedHackathons.map(h => `
    <div class="card">
      <h3>${h.name}</h3>
      <div class="meta">
        ${h.mode} · ${h.duration}h · ${h.level}<br>
        Deadline: ${h.deadline}
      </div>

      <div class="badges">
        <span class="badge">${h.theme}</span>
        <span class="badge">${h.status}</span>
        <span class="badge">${h.price === 0 ? "Free" : "₹" + h.price}</span>
      </div>

      <div class="actions">
        <button onclick="alert('Redirecting to registration')">
          Register
        </button>
        <button class="save" onclick="removeSave(${h.id})">
          Remove
        </button>
      </div>
    </div>
  `).join("");
}

function removeSave(id) {
  savedIds.delete(id);
  localStorage.setItem("saved", JSON.stringify([...savedIds]));
  location.reload();
}
