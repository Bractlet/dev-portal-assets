window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
      .forEach(tooltip => {
        new bootstrap.Tooltip(tooltip)
      });
  }, 3000);
  console.log("Window is loaded!");
});