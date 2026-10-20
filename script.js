/* =====================================================
   VELOURA
   JAVASCRIPT
===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");


function handleNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", handleNavbar);

handleNavbar();


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = mobileMenu.querySelectorAll("a");


function toggleMenu() {

    menuButton.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

}


menuButton.addEventListener("click", toggleMenu);


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    });

});


/* ================= SCROLL REVEALS ================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveLink);


/* ================= CONTACT FORM ================= */




/* ================= IMAGE FALLBACK ================= */

const projectImages = document.querySelectorAll(
    ".project-image img"
);


projectImages.forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        image.parentElement.style.background =
            "linear-gradient(135deg, #F4C9D6, #F5F0E6)";

    });

});


/* ================= HERO PARALLAX ================= */

const heroImage = document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1) translateY(${scrollPosition * 0.12}px)`;

    }

});


/* ================= PROJECT CARD STAGGER ================= */

const cards = document.querySelectorAll(".project-card");


const cardObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const card = entry.target;

                const index =
                    Array.from(cards).indexOf(card);

                setTimeout(() => {

                    card.classList.add("visible");

                }, index % 3 * 120);

                cardObserver.unobserve(card);

            }

        });

    },

    {
        threshold: 0.08
    }

);


cards.forEach(card => {

    cardObserver.observe(card);

});