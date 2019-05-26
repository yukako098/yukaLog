var isClicked = false;
function showSlideNav() {
    isClicked = !isClicked;
    var slide_nav = document.getElementById("slide-nav");
    if (isClicked) {
        slide_nav.style.display = "block";
        // slide_nav.style.width = "25%";
    } else {
        slide_nav.style.display = "none";
        // slide_nav.style.width = "0%";
    }
}
