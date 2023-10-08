document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navLinks.forEach(function(navLink) {
                navLink.classList.remove("active");
            });
            link.classList.add("active");
        });
    });
    const currentDateElement = document.createElement("p");
    const footer = document.querySelector("footer");
    const currentDate = new Date().toLocaleDateString();

    currentDateElement.textContent = `\u00A9 ${currentDate} Our School. All rights reserved.`;
    footer.appendChild(currentDateElement);
});