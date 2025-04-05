//  Simple JavaScript for mobile menu toggle and current year
  // Update current year in footer
  document.getElementById("currentYear").textContent =
    new Date().getFullYear();

  // Mobile menu toggle
  function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("open");
  }

  function closeMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.remove("open");
  }

  // Add scroll event to change header style
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 20) {
      header.style.padding = "0.75rem 0";
      header.style.boxShadow =
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    } else {
      header.style.padding = "1.25rem 0";
      header.style.boxShadow = "none";
    }
  });

  const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
link.addEventListener('click', () => {
    tabLinks.forEach(link => link.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    const tab = link.dataset.tab;
    document.getElementById(tab).classList.add('active');
    link.classList.add('active');
});
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 51, // Adjust according to navbar height
            behavior: "smooth"
        });
    }
});
});


