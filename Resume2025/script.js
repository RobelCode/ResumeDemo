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