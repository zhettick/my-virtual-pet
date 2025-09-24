function showKitty(action, img, text) {
  let kitty = document.getElementById("kitty");
  kitty.src = img;               
  kitty.style.display = "block"; 
  document.getElementById("status").innerText = text;
}

function feed() {
  showKitty("feed", "cat/eating.gif", "😺 Your kitty is eating!");
}

function sleep() {
  showKitty("sleep", "cat/working.gif", "💤 Your kitty is sleeping...");
}

function dance() {
  showKitty("dance", "cat/dancing.gif", "🎵 Your kitty is dancing!");
}

function resetKitty() {
  let kitty = document.getElementById("kitty");
  kitty.style.display = "none"; 
  kitty.src = "";               
  document.getElementById("status").innerText = "Your kitty is waiting...";
}

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