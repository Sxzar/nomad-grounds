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
            hero.classList.remove("tw--mt-[115px]");
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
            hero.classList.add("tw--mt-[115px]");
        }
    });

    // End: Navbar

    // Start: Hero
    const slides = document.querySelectorAll(".tw-carousel-item");
    const totalSlides = slides.length;
    let currentSlideIndex = 0;
  
    // Function to go to a specific slide
    function goToSlide(index) {
      slides.forEach((slide, i) => {
        const image = slide.querySelector(".tw-carousel-image");
        slide.classList.toggle("tw-carousel-item-active", i === index);
        
        if (i === index) {
          image.style.transform = "scale(1.1)";
        } else {
          image.style.transform = "scale(1)"; 
        }
      });
    }
  
    // Initialize: Show the first slide
    function initializeCarousel() {
      // Apply the active class to the first slide
      slides[currentSlideIndex].classList.add("tw-carousel-item-active");
  
      // Force the zoom effect on the first slide
      const firstImage = slides[currentSlideIndex].querySelector(".tw-carousel-image");
      firstImage.style.transform = "scale(1.1)";
  
      // Delay transition to ensure initial styles apply properly
      setTimeout(() => {
        firstImage.style.transition = "transform 10s ease-in-out"; // Smooth zoom effect
      }, 100); // Small delay to ensure browser applies initial styles
    }
  
    // Function to go to the next slide
    function goToNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      goToSlide(currentSlideIndex);
    }
  
    // Function to go to the previous slide
    function goToPrevSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlideIndex);
    }
  
    // Add event listeners for controls
    document.querySelectorAll(".slide-controls a").forEach((control) => {
      control.addEventListener("click", (event) => {
        event.preventDefault();
        const isNext = control.textContent.trim() === "❯";
        if (isNext) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
      });
    });
  
    // Initialize carousel
    initializeCarousel();
  
    // Auto-slide interval
    setInterval(goToNextSlide, 10000);
    // End: Hero
});