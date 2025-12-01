// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Random color for Send Message button every second
const sendBtn = document.getElementById('send-btn');
function randomColor() {
  return `hsl(${Math.floor(Math.random()*360)}, 70%, 60%)`;
}
setInterval(() => {
  sendBtn.style.backgroundColor = randomColor();
}, 1000);

// Show button after scrolling down
window.onscroll = function () {
  let btn = document.getElementById("topBtn");
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Go to top when pressed
function goTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
// Handle tag clicks to open hidden info boxes
document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    const target = document.getElementById(tag.dataset.target);

    // Close all boxes first
    document.querySelectorAll(".info-box").forEach(box => box.style.display = "none");

    // Toggle the selected one
    target.style.display = "block";
  });
});
// Close info boxes when clicking outside
window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tag") && !e.target.closest(".info-box")) {
    document.querySelectorAll(".info-box").forEach(box => box.style.display = "none");
  }
});

// RAINBOW THEME COLOR PRESETS
const rainbowThemes = [
  { bg: "linear-gradient(to right, #ff9a9e, #fad0c4)", text: "#222" },
  { bg: "linear-gradient(to right, #a1c4fd, #c2e9fb)", text: "#111" },
  { bg: "linear-gradient(to right, #fbc2eb, #a6c1ee)", text: "#222" },
  { bg: "linear-gradient(to right, #84fab0, #8fd3f4)", text: "#000" },
  { bg: "linear-gradient(to right, #f6d365, #fda085)", text: "#222" },
  { bg: "linear-gradient(to right, #fccb90, #d57eeb)", text: "#222" }
];

let rainbowIndex = 0;

document.getElementById("rainbowModeBtn").addEventListener("click", () => {
  rainbowIndex = (rainbowIndex + 1) % rainbowThemes.length;

  const theme = rainbowThemes[rainbowIndex];

  // Change body background + text color
  document.body.style.background = theme.bg;
  document.body.style.color = theme.text;

  // Adjust all text elements
  document.querySelectorAll("h1, h2, h3, p, li, a, div, span").forEach(el => {
    el.style.color = theme.text;
  });
});
