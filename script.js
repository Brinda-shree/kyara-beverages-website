// Simple scroll animations
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".product-card, .feature-card").forEach(card => {
        observer.observe(card);
    });
});
