document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animated-text");

    elements.forEach((element) => {
        const texts = JSON.parse(element.getAttribute("data-texts"));
        let index = 0;

        function changeText() {
            // Randomly choose an animation type
            const exitAnimations = ["fade-out-up", "fade-out-down"];
            const randomExit = exitAnimations[Math.floor(Math.random() * exitAnimations.length)];

            element.classList.add(randomExit); // Apply exit animation

            setTimeout(() => {
                element.textContent = texts[index]; // Change text
                element.classList.remove(randomExit); // Remove exit animation
                element.classList.add("fade-in"); // Apply enter animation

                index = (index + 1) % texts.length;

                setTimeout(() => {
                    element.classList.remove("fade-in"); // Remove enter animation after displaying
                }, 600);
            }, 600); // Time for fade-out effect
        }

        setInterval(changeText, 3500); // Change text every 3.5s
        changeText(); // Run immediately on page load
    });
});
// Change greeting every 5 seconds
const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) box.classList.add("show");
    else box.classList.remove("show");
  });
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();


document.querySelectorAll('.glitch-text').forEach((element) => {
    let originalText = element.getAttribute('data-text'); // Get original text from data attribute
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+";
    let interval = null;

    element.addEventListener('mouseenter', () => {
        let iteration = 0;
        interval = setInterval(() => {
            element.innerText = originalText.split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index]; // Reveal correct letter
                    }
                    return characters[Math.floor(Math.random() * characters.length)]; // Random glitch text
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3; // Speed of revealing text
        }, 50); // Interval time (adjust for speed)
    });

    element.addEventListener('mouseleave', () => {
        clearInterval(interval);
        element.innerText = originalText; // Reset to original text when mouse leaves
    });
});


document.querySelectorAll('.glitch-btn-text').forEach((element) => {
    let originalText = element.getAttribute('data-text');
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-=_+";
    let interval = null;

    element.addEventListener('mouseenter', () => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            element.innerText = originalText
                .split("")
                .map((char, index) => {
                    if (index < iteration) {
                        return originalText[index]; // Reveal correct letter
                    }
                    return characters[Math.floor(Math.random() * characters.length)]; // Random character
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }

            iteration += 1;
        }, 50); // Speed of glitch effect
    });

    element.addEventListener('mouseleave', () => {
        clearInterval(interval);
        element.innerText = originalText; // Reset text when hover ends
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const daysInMarch = 31;
    const startDay = 6; // March 1st is a Saturday in 2025
    const specialDays = [24, 25]; // Highlighted days

    const calendar = document.getElementById("mini-calendar-dates");

    // Add empty divs for previous month spacing
    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement("div");
        calendar.appendChild(emptyDiv);
    }

    // Generate days
    for (let day = 1; day <= daysInMarch; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;

        // Highlight 24th & 25th
        if (specialDays.includes(day)) {
            dayDiv.classList.add("highlight");
        }

        calendar.appendChild(dayDiv);
    }
});


