window.addEventListener("DOMContentLoaded", function () {
    console.log("Nina's bold web is live!");
    let links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        link.onclick = function(e) {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        };
    });
});