document.addEventListener("scroll", function () {
    const projectsSection = document.querySelector(".projects-section");
    const introSectionHeight = document.querySelector(".intro-section").offsetHeight;
    console.log(window.scrollY + " " + introSectionHeight);
    if (window.scrollY >= introSectionHeight / 4) {
        console.log("window has been scrolled");
        projectsSection.classList.add("reveal");
    }
});