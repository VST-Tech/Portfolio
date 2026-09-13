/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking link */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });


/* ================= DARK / LIGHT MODE ================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeToggle.textContent = "🌙";

    }

});


/* ================= TYPING ANIMATION ================= */

const typingText =
    document.getElementById("typingText");


const roles = [

    "B.Voc (IT) Student",

    "Web Developer",

    "Programmer",

    "Technology Enthusiast",

    "AI & Data Science Learner"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    const currentRole =
        roles[roleIndex];


    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }


    typingText.textContent =
        currentRole.substring(
            0,
            characterIndex
        );


    let speed =
        deleting ? 50 : 90;


    if (
        !deleting &&
        characterIndex === currentRole.length
    ) {

        speed = 1300;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        speed = 300;

    }


    setTimeout(typeRole, speed);

}


typeRole();


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SMOOTH REVEAL ================= */

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(
        ".about-card, .skill-category, .course-card, .achievement-card, .project-card, .contact-card, .timeline-item"
    )
    .forEach(function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    });


/* Add visible animation */

const style =
    document.createElement("style");


style.textContent = `

    .visible {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;


document.head.appendChild(style);