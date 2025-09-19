// Smooth scrolling only for nav/menu links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a.scroll-link').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Dynamic year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Simple form handler (demo only)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message! This demo doesn't actually send emails.");
      this.reset();
    });
  }
});


