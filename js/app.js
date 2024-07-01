
document.addEventListener("DOMContentLoaded", function() {
    // Define navigation items
    const navItems = [
        { href: "#home-page", text: "HOME" },
        { href: "#about-me-section", text: "ABOUT ME" },
        { href: "#korean-skincare-routine-header", text: "KOREAN SKINCARE" },
        { href: "#sign-up", text: "JOIN US" },
        { href: "#reader-favourites-section", text: "READER FAVOURITES" }
    ];

    // Get the navigation list element
    const navList = document.getElementById("nav-list");
    // Select all sections within main section container
    const sections = document.querySelectorAll("main .main-section section");

    // Create and append navigation items to the navigation list
    navItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.href}">${item.text}</a>`;
        navList.appendChild(li);
    });

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        sections.forEach(section => {
            const { top, bottom } = section.getBoundingClientRect();
            if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                currentSectionId = section.getAttribute("id");
            }
        });
    
        navList.querySelectorAll("a").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // Click event for smooth scrolling to sections
    navList.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const targetSection = document.querySelector(event.target.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                console.log("Section not found for:", event.target.getAttribute("href"));
            }
        }
    });
    
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
