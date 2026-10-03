document.addEventListener("DOMContentLoaded", () => {


    /* ================= SMOOTH NAVIGATION ================= */

    const navLinks =
        document.querySelectorAll('a[href^="#"]');


    navLinks.forEach(link => {


        link.addEventListener("click", function (event) {


            const targetId =
                this.getAttribute("href");


            if (targetId === "#") {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (target) {


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


            }


        });


    });



    /* ================= SCROLL REVEAL ================= */

    const revealItems =
        document.querySelectorAll(

            ".section-heading, " +

            ".about-main, " +

            ".about-card, " +

            ".skill-card, " +

            ".project-card, " +

            ".timeline-item, " +

            ".experience-card, " +

            ".contact-box"

        );


    const observer =
        new IntersectionObserver(

            (entries, observer) => {


                entries.forEach(entry => {


                    if (entry.isIntersecting) {


                        entry.target.classList.add("show");


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


    revealItems.forEach(item => {


        item.classList.add("reveal");


        observer.observe(item);


    });



    /* ================= FOOTER YEAR ================= */

    const footer =
        document.querySelector("footer");


    if (footer) {


        const year =
            new Date().getFullYear();


        const firstText =
            footer.querySelector("p");


        if (firstText) {


            firstText.textContent =
                `© ${year} M. Priyadharshini`;


        }


    }


});