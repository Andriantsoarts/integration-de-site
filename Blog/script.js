window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var navLinks = document.querySelectorAll("nav a");
    var sections = document.querySelectorAll("section");

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
            var currentSection = section.getAttribute("id");
            navLinks.forEach(function(link) {
                link.classList.remove("active");
                if (link.getAttribute("href").substring(1) === currentSection) {
                    link.classList.add("active");
                }
            });
        }
    });
});
