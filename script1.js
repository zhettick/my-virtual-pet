const button = document.getElementById("show-instructions");
const instructions = document.getElementById("instructions");
const cat = document.getElementById("cat");
const scoreDisplay = document.getElementById("score");
var score = 0;

button.addEventListener("click", () => {
  const isHidden = instructions.style.display === "none";
  instructions.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "Hide Instructions" : "Show Instructions";
});

cat.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
});

setInterval(() => {
  cat.style.left = Math.random() * 400 + "px";
  cat.style.top = Math.random() * 300 + "px";
}, 1500);