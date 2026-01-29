const form = document.getElementById("hackathonForm");
const previewBtn = document.getElementById("previewBtn");

previewBtn.onclick = () => {
  const title = document.getElementById("title").value;
  if (!title) {
    alert("Please enter hackathon title first.");
    return;
  }
  alert("Preview generated (demo)");
};

form.addEventListener("submit", e => {
  e.preventDefault();
  alert("Hackathon published successfully (demo)");
});
