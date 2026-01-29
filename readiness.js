const sliders = document.querySelectorAll("input[type='range']");
const scoreText = document.getElementById("score");
const verdict = document.getElementById("verdict");
const circle = document.getElementById("progressCircle");

function calculateScore() {
  let total = 0;

  sliders.forEach(slider => {
    total += slider.value * parseFloat(slider.dataset.weight);
  });

  total = Math.round(total);
  scoreText.textContent = total;

  const circumference = 628;
  circle.style.strokeDashoffset =
    circumference - (total / 100) * circumference;

  if (total >= 80) verdict.textContent = "🔥 Excellent – Strong chance of winning";
  else if (total >= 65) verdict.textContent = "✅ Good – Minor improvements needed";
  else if (total >= 45) verdict.textContent = "⚠️ Moderate – Risky without planning";
  else verdict.textContent = "❌ Weak – Reconsider scope or preparation";
}

sliders.forEach(s => s.addEventListener("input", calculateScore));
calculateScore();
