(() => {
  const root = document.documentElement;
  const button = document.getElementById('themeToggle');
  const saved = localStorage.getItem('cv-theme');
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  button.addEventListener('click', () => {
    const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('cv-theme', next);
  });
})();