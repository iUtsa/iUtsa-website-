document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        "#first-box, #overview, #edu-box, .experience-box1, .experience-box2, .experience-box3"
    );

    function handleScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.style.transform = "translateY(0)";
                el.style.opacity = "1";
            } else {
                el.style.transform = "translateY(30px)"; /* Offset to appear as scroll-in effect */
                el.style.opacity = "0.5"; /* Partial visibility for smooth appearance */
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to show elements on load if they're already in view
});
