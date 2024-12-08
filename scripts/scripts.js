document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add visible class for animation
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    // Add interactivity to buttons
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.8)";
        });

        button.addEventListener("mouseout", () => {
            button.style.boxShadow = "none";
        });
    });
});
