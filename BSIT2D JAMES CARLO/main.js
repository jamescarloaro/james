// Initialize Swiper with cube effect
const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false, // prevent swipe on mobile/touch
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true, // allow mousewheel navigation
});

// Optional logging function (not used currently)
swiper.sliderMove = function (s, e) {
    console.log("Slider moved:", s, e);
};

// Navigation sidebar control
function Navigate(index) {
    const navItems = document.querySelectorAll(".Links li");
    if (!navItems.length) {
        console.warn("No navigation items found with selector '.Links li'");
        return;
    }

    // Remove activeLink class from all nav items
    navItems.forEach(item => item.classList.remove("activeLink"));

    // Add activeLink class to the clicked nav item (if exists)
    if (navItems[index]) {
        navItems[index].classList.add("activeLink");
    }

    // Slide to selected section safely
    if (typeof swiper.slideTo === "function") {
        swiper.slideTo(index, 800, true);
    } else {
        console.warn("Swiper slideTo method not found.");
    }
}

// Optional: Add event listeners for your navigation links if needed
document.querySelectorAll(".Links li").forEach((item, index) => {
    item.addEventListener("click", () => Navigate(index));
});
