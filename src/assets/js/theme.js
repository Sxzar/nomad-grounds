document.addEventListener("DOMContentLoaded", () => {

    // Start: Navbar
    const navbar = document.getElementById("navbar");
    const logo = navbar.querySelector(".logo");
    const hero = document.getElementById("hero");
    const navbarItems = navbar.querySelectorAll(".navbar-item");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.classList.add("tw-fixed", "tw-bg-base-100", "tw-shadow-md", "slide-bottom");
            logo.classList.remove("tw-max-h-[100px]");
            logo.classList.add("tw-max-h-[60px]");
            logo.classList.add("tw-invert");
            navbarItems.forEach((item) => {
                item.classList.add("tw-text-primary");
                item.classList.remove("tw-text-base-100");
            });
            navbar.classList.remove("tw-bg-transparent");
            hero.classList.remove("tw--mt-[135px]");
        } else {
            navbar.classList.remove("tw-fixed", "tw-bg-base-100", "tw-shadow-md", "slide-bottom");
            logo.classList.remove("tw-max-h-[60px]");
            logo.classList.add("tw-max-h-[100px]");
            logo.classList.remove("tw-invert");
            navbar.classList.add("tw-bg-transparent");
            navbarItems.forEach((item) => {
                item.classList.remove("tw-text-primary");
                item.classList.add("tw-text-base-100");
            });
            hero.classList.add("tw--mt-[135px]");
        }
    });

    // End: Navbar
});