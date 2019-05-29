var isClicked = false;
function showSlideNav() {
    isClicked = !isClicked;
    var slide_nav = document.getElementById("slide-nav");
    var black_bg_filter = document.getElementById("black-bg-filter");
    var main_body_section = document.getElementById("main-body-section");
    var footer = document.getElementById("footer");
    if (isClicked) {
        slide_nav.style.display = "block";
        slide_nav.style.width = "25%";
        black_bg_filter.style.display = "block";
        main_body_section.classList.remove("d-flex");
        main_body_section.style.display = "none";
        footer.style.display = "none";
    } else {
        slide_nav.style.display = "none";
        slide_nav.style.width = "0%";
        black_bg_filter.style.display = "none";
        main_body_section.style.display = "block";
        main_body_section.classList.add("d-flex");
        footer.style.display = "block";
    }
}
