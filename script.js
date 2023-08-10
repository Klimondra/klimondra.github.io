document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nam-menu");
    
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});
