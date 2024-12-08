// Trigger animations when elements are in the viewport
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1; // Start animation
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
});
