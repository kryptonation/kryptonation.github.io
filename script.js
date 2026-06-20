// script.js - kryptonation developer portfolio
document.addEventListener("DOMContentLoaded", () => {
    // Print a cool ASCII console signature for developers inspecting the site
    console.log(
        "%c  _cryptonation  ",
        "background: #6366f1; color: #fff; font-size: 14px; font-weight: bold; padding: 4px; border-radius: 4px;"
    );
    console.log(
        "%cInterested in the source code? Check out my GitHub repositories directly at https://github.com/kryptonation",
        "color: #94a3b8; font-family: monospace;"
    );

    // Simple scroll indicator or headers scroll-glowing logic
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(6, 9, 19, 0.9)";
            navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.background = "rgba(6, 9, 19, 0.7)";
            navbar.style.boxShadow = "none";
        }
    });
});
