// theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  const body = document.body;
  const LIGHT = 'light';
  const DARK = 'dark';

  // Initialize theme from system or saved preference
  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    if (!saved) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('theme', systemPrefersDark ? DARK : LIGHT);
    }
    applyTheme(localStorage.getItem('theme'));
  };

  // Apply theme and update button label
  const applyTheme = (theme) => {
    if (theme === DARK) {
      body.classList.add(DARK);
      toggleBtn.textContent = '☀️ Light Mode';
    } else {
      body.classList.remove(DARK);
      toggleBtn.textContent = '🌙 Dark Mode';
    }
  };

  // Handle toggle button click
  toggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle(DARK);
    const theme = isDark ? DARK : LIGHT;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  });

  // Initialize on load
  initTheme();
});
