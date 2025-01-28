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




//rocket

document.addEventListener("DOMContentLoaded", () => {
    const rocket = document.querySelector('.rocket');
    const marsPlanet = document.querySelector('.mars-planet');

    // Array of radial gradients for the Mars planet
    const gradients = [
        "radial-gradient(circle at 30% 30%, #d9d9d9, #a9a9a9, #707070)", // Initial gradient
        "radial-gradient(circle at 30% 30%, #ffa500, #ff4500, #8b0000)", // Mars-like
        "radial-gradient(circle at 30% 30%, #00ff7f, #228b22, #006400)", // Jupiter-like
        "radial-gradient(circle at 30% 30%, #87cefa, #4682b4, #1e90ff)", // Saturn-like
        "radial-gradient(circle at 30% 30%, #fffacd, #ffdead, #daa520)"  // Neptune-like
    ];
    let gradientIndex = 0; // Current gradient index

    // Function to change the Mars planet's gradient
    function changeMarsPlanetGradient() {
        gradientIndex = (gradientIndex + 1) % gradients.length; // Cycle through gradients
        marsPlanet.style.background = gradients[gradientIndex];
        console.log(`Gradient changed to: ${gradients[gradientIndex]}`); // Debugging log
    }

    // Function to start the rocket animation
    function startRocketAnimation() {
        // Reset the animation by removing and re-adding the class
        rocket.style.animation = "none"; // Stop any existing animation
        setTimeout(() => {
            rocket.style.animation = "moveRocketToPlanet 8s ease-in-out forwards"; // Restart animation
        }, 10); // Small delay to reset animation
    }

    // Listen for the animationend event
    rocket.addEventListener("animationend", () => {
        console.log("Rocket landed. Changing Mars gradient..."); // Debugging log
        changeMarsPlanetGradient(); // Change the planet's gradient after landing
        startRocketAnimation(); // Restart the rocket animation
    });

    // Start the initial animation
    startRocketAnimation();
});




//change mode

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateIcon(savedTheme);
        if (savedTheme === 'dark-mode') {
            addSpaceElements();
        }
    }

    // Toggle dark mode
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            updateIcon('light-mode');
            removeSpaceElements();
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateIcon('dark-mode');
            addSpaceElements();
        }
    });

    // Add space elements for dark mode
    function addSpaceElements() {
        const stars = document.createElement('div');
        stars.classList.add('stars');
        body.appendChild(stars);

        const comet = document.createElement('div');
        comet.classList.add('comet');
        body.appendChild(comet);

        const galaxy = document.createElement('div');
        galaxy.classList.add('galaxy');
        body.appendChild(galaxy);
    }

    // Remove space elements when exiting dark mode
    function removeSpaceElements() {
        const stars = document.querySelector('.stars');
        const comet = document.querySelector('.comet');
        const galaxy = document.querySelector('.galaxy');

        if (stars) stars.remove();
        if (comet) comet.remove();
        if (galaxy) galaxy.remove();
    }

    // Update the theme toggle icon
    function updateIcon(theme) {
        if (theme === 'dark-mode') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
});

//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
