document.addEventListener("DOMContentLoaded", function() {
    const creditsContainer = document.querySelector(".scrolling-credits");
    const credits = creditsContainer.querySelectorAll("p");
    let currentCredit = 0;

    function typeText(element, text, index = 0) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1), 50);
        }
    }

    function typeNextCredit() {
        if (currentCredit < credits.length) {
            const creditElement = credits[currentCredit];
            const creditText = creditElement.textContent;
            creditElement.textContent = ""; // Clear existing text
            typeText(creditElement, creditText);
            currentCredit++;
        }
    }

    typeNextCredit();
});

const testimonials = [
    "I couldn't be happier with the quality of videos Caleb created for my business!",
    "Caleb's videos have significantly improved my online presence and engagement.",
    "Professional and creative – Caleb's videos have exceeded my expectations.",
    "Choosing Caleb for video content was the best decision I made for my brand.",
    "The attention to detail and storytelling in Caleb's videos is truly remarkable."
];

const testimonialOutput = document.getElementById("testimonialOutput");
const generateTestimonialButton = document.getElementById("generateTestimonial");

generateTestimonialButton.addEventListener("click", () => {
    const randomTestimonial = generateRandomTestimonial();

    // Fade out current testimonial
    testimonialOutput.style.opacity = 0;

    setTimeout(() => {
        // Generate new testimonial content
        testimonialOutput.textContent = randomTestimonial;

        // Fade in the new testimonial
        testimonialOutput.style.opacity = 1;
    }, 500); // Adjust timing as needed
});

function generateRandomTestimonial() {
    const randomIndex = Math.floor(Math.random() * testimonials.length);
    return testimonials[randomIndex];
}
