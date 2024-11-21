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



//rotate

document.querySelector('.image-card').addEventListener('mouseover', () => {
    document.querySelector('.image-card').style.animationPlayState = 'paused';
});

document.querySelector('.image-card').addEventListener('mouseout', () => {
    document.querySelector('.image-card').style.animationPlayState = 'running';
});


// Array of social media data
const socialMediaData = [
    { id: 'link', imgSrc: 'link-icon.png', text: 'Link' },
    { id: 'ggithub', imgSrc: 'github-icon.png', text: 'GitHub' },
    { id: 'instagram', imgSrc: 'instagram-icon.png', text: 'Instagram' },
    { id: 'x', imgSrc: 'x-icon.png', text: 'Twitter (X)' }
];

// Function to create and append social media cards
function addSocialMediaCards(containerId, data) {
    const container = document.getElementById(containerId);

    data.forEach((item) => {
        // Create card container
        const card = document.createElement('div');
        card.id = item.id;

        // Create image element
        const img = document.createElement('img');
        img.src = item.imgSrc;
        img.alt = `${item.text} Icon`;

        // Create text element
        const text = document.createElement('p');
        text.textContent = item.text;

        // Append image and text to card
        card.appendChild(img);
        card.appendChild(text);

        // Append card to the container
        container.appendChild(card);
    });
}

// Add cards dynamically with a delay for animation
function addCardsWithDelay(containerId, data) {
    data.forEach((item, index) => {
        setTimeout(() => {
            addSocialMediaCards(containerId, [item]);
        }, index * 200); // Staggered delay for visual effect
    });
}

// Initialize
addCardsWithDelay('socialMediaContainer', socialMediaData);




