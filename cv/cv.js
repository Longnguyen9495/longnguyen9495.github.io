(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('themeToggle');
  const printButton = document.getElementById('printButton');
  const profileImage = document.getElementById('profileImage');
  const saved = localStorage.getItem('cv-theme');

  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;

  themeButton.addEventListener('click', () => {
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const current = root.dataset.theme || systemTheme;
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('cv-theme', next);
  });

  const waitForProfileImage = async () => {
    if (!profileImage) return;

    try {
      if (!profileImage.src.startsWith('data:')) {
        const response = await fetch(profileImage.src, { cache: 'force-cache' });
        if (!response.ok) throw new Error('Không thể tải ảnh đại diện');
        const blob = await response.blob();
        profileImage.src = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      }

      if (profileImage.decode) await profileImage.decode();
    } catch {
      if (!profileImage.complete) {
        await new Promise((resolve) => {
          profileImage.addEventListener('load', resolve, { once: true });
          profileImage.addEventListener('error', resolve, { once: true });
        });
      }
    }
  };

  waitForProfileImage();

  printButton.addEventListener('click', async () => {
    printButton.disabled = true;
    await waitForProfileImage();
    await new Promise(requestAnimationFrame);
    printButton.disabled = false;
    window.print();
  });
})();