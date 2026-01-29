const list = document.getElementById("archiveList");
const searchInput = document.getElementById("searchInput");
const techFilter = document.getElementById("techFilter");
const domainFilter = document.getElementById("domainFilter");

function render(data) {
  list.innerHTML = "";

  if (!data.length) {
    list.innerHTML = `<p style="opacity:.7">No matching projects found.</p>`;
    return;
  }

  data.forEach(p => {
    list.innerHTML += `
      <div class="archive-card">
        <h3>${p.hackathon}</h3>
        <div class="rank">${p.rank} · ${p.team}</div>

        <div class="section"><strong>Problem:</strong> ${p.problem}</div>
        <div class="section"><strong>Solution:</strong> ${p.solution}</div>

        <div class="tags">
          ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>

        <div class="section">
          <strong>Why it won:</strong> ${p.whyWin}
        </div>

        <div class="section">
          <strong>Judges’ feedback:</strong> ${p.feedback}
        </div>

        <div class="links">
          <a href="${p.github}" target="_blank">GitHub</a>
          ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ""}
        </div>
      </div>
    `;
  });
}

function applyFilters() {
  let data = [...ARCHIVE];
  const search = searchInput.value.toLowerCase();

  if (search) {
    data = data.filter(p =>
      p.hackathon.toLowerCase().includes(search) ||
      p.domain.toLowerCase().includes(search) ||
      p.tech.join(" ").toLowerCase().includes(search)
    );
  }

  if (techFilter.value) {
    data = data.filter(p => p.tech.includes(techFilter.value));
  }

  if (domainFilter.value) {
    data = data.filter(p => p.domain === domainFilter.value);
  }

  render(data);
}

searchInput.addEventListener("input", applyFilters);
techFilter.addEventListener("change", applyFilters);
domainFilter.addEventListener("change", applyFilters);

render(ARCHIVE);
