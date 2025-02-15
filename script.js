function showTable() {
    document.getElementById("moodTable").style.display = "block";
}

// Scroll effect for background image
window.addEventListener("scroll", function () {
    const backgroundImage = document.getElementById("backgroundImage");
    let scrollPosition = window.scrollY;

    // Increase opacity as user scrolls
    let opacity = 0.2 + (scrollPosition / 1000); // Adjust the divisor for faster/slower fade
    if (opacity > 0.8) opacity = 0.8; // Cap opacity at 0.8 to avoid being too bright
    backgroundImage.style.opacity = opacity;
});