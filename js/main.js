window.onload = function () {
    const themeBtn = document.getElementById('toggleBtn');
    themeBtn.addEventListener('click', function () {
      // Lấy thuộc tính data-theme
      const root = document.querySelector(':root');
      const isLightMode =
        root.getAttribute('data-theme') === 'dark' ? false : true;
      // toggle theme mode
      if (isLightMode) {
        document.querySelector("body").style.backgroundImage = "url('./img/BACKGROUND-DARK.png')"
        root.setAttribute('data-theme', 'dark');
      } else {
        document.querySelector("body").style.backgroundImage = "url('./img/BACKGROUND.png')"
        root.setAttribute('data-theme', 'light');
      }
      // thay đổi vị trí của button
      this.classList.toggle('active');
    });
  };
