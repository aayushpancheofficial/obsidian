/* ============================================
   THEME SYSTEM
   Handles switching between 6 different themes
   Saves user preference in localStorage
============================================ */

// Theme configuration: names, labels, and icons
const THEMES = {
  space: { label: 'Night Mode', icon: '<i class="ph ph-planet"></i>' },
  rain: { label: 'Rain Mode', icon: '<i class="ph ph-cloud-rain"></i>' },
  snow: { label: 'Snow Mode', icon: '<i class="ph ph-snowflake"></i>' },
  sun: { label: 'Sunny Mode', icon: '<i class="ph ph-sun"></i>' },
  forest: { label: 'Forest Mode', icon: '<i class="ph ph-tree-evergreen"></i>' },
  aurora: { label: 'Aurora Mode', icon: '<i class="ph ph-sparkle"></i>' }
};

// Get DOM elements
const bodyEl = document.body;
const themeIconSpan = document.getElementById('themeIcon');
const themeLabelSpan = document.getElementById('themeLabel');
const themeOptions = document.querySelectorAll('.theme-option');
const themeSwitcherDiv = document.getElementById('themeSwitcher');
const themeBtnDiv = document.getElementById('themeBtn');

// Get saved theme from localStorage, default to 'space'
let currentTheme = localStorage.getItem('aayush_theme') || 'space';

/**
 * Apply theme to the page
 * @param {string} themeName - Theme key (space, rain, snow, sun, forest, aurora)
 */
function applyTheme(themeName) {
  // Remove all theme classes from body
  bodyEl.classList.remove('rain', 'snow', 'sun', 'forest', 'aurora');

  // Add new theme class (skip for space theme)
  if (themeName !== 'space') bodyEl.classList.add(themeName);

  // Save to localStorage
  localStorage.setItem('aayush_theme', themeName);

  // Update UI: theme icon and label
  themeIconSpan.innerHTML = THEMES[themeName].icon;
  themeLabelSpan.innerHTML = THEMES[themeName].label;

  // Highlight selected option in dropdown
  themeOptions.forEach(opt => {
    opt.classList.toggle('selected', opt.dataset.theme === themeName);
  });
}

/**
 * Toggle theme dropdown visibility
 * @param {boolean} open - Optional: force open/close state
 */
function toggleDropdown(open) {
  if (open !== undefined) {
    themeSwitcherDiv.classList.toggle('open', open);
  } else {
    themeSwitcherDiv.classList.toggle('open');
  }
}

// Event listener: Click on theme button opens/closes dropdown
themeBtnDiv.addEventListener('click', (e) => {
  e.stopPropagation();  // Prevent event from bubbling up
  toggleDropdown();
});

// Event listeners: Each theme option applies its theme
themeOptions.forEach(opt => {
  opt.addEventListener('click', (e) => {
    e.stopPropagation();
    applyTheme(opt.dataset.theme);
    toggleDropdown(false);  // Close dropdown after selection
  });
});

// Click anywhere else closes the dropdown
document.addEventListener('click', () => toggleDropdown(false));

// Apply saved theme on page load
applyTheme(currentTheme);

/* ============================================
   NAVIGATION ACTIVE STATE
   Highlights the current page link
============================================ */
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    // Add 'active' class to clicked link
    link.classList.add('active');
  });
});

/* ============================================
   RAIN PARTICLE SYSTEM
   Creates falling rain effect on canvas
   Only active when 'rain' theme is selected
============================================ */
(function initRain() {
  const canvas = document.getElementById('rain-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let drops = [];        // Array to store raindrop objects
  let animId = null;     // Animation frame ID

  // Resize canvas to match window dimensions
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Initialize raindrops based on canvas width
  function initDrops() {
    drops = [];
    const dropCount = canvas.width / 6;  // ~1 drop per 6 pixels
    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 10 + 5
      });
    }
  }

  // Draw rain frame
  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    ctx.beginPath();
    for (let i = 0; i < drops.length; i++) {
      const drop = drops[i];
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      drop.y += drop.speed;

      // Reset drop to top if it falls below canvas
      if (drop.y > canvas.height) {
        drop.y = -drop.length;
        drop.x = Math.random() * canvas.width;
      }
    }
    ctx.stroke();
    animId = requestAnimationFrame(drawRain);
  }

  // Handle window resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    initDrops();
  });

  // Start animation loop
  resizeCanvas();
  initDrops();
  drawRain();
})();

/* ============================================
   SNOW PARTICLE SYSTEM
   Creates falling snow effect on canvas
   Only active when 'snow' theme is selected
============================================ */
(function initSnow() {
  const canvas = document.getElementById('snow-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let flakes = [];
  let animId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initFlakes() {
    flakes = [];
    const flakeCount = canvas.width / 8;
    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 1 - 0.5
      });
    }
  }

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    ctx.beginPath();
    for (let i = 0; i < flakes.length; i++) {
      const flake = flakes[i];
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

      flake.y += flake.speedY;
      flake.x += flake.speedX;

      if (flake.y > canvas.height) {
        flake.y = -flake.radius;
        flake.x = Math.random() * canvas.width;
      }
    }
    ctx.fill();
    animId = requestAnimationFrame(drawSnow);
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initFlakes();
  });

  resizeCanvas();
  initFlakes();
  drawSnow();
})();

