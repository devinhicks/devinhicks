/**********************************************
 *    MAKE NAVIGATION ACTIVE WHEN SCROLLING
 * ********************************************/

const sections = document.querySelectorAll("section");

const navLi = document.querySelectorAll(".navbar .container .collapse ul li");

window.onscroll = () => {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

/**********************************************
 *        SMOOTH SCROLLING TO ANCHORS
 * ********************************************/


function smoothScroll() {
    let x = document.querySelectorAll('li a[href*="#"]');

    let set = document.getElementsByClassName('navbar-default');
    let nav = set[0];

    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener('click', function (e) {
            e.preventDefault();

            let target = document.querySelector(this.hash);

            let yOffset = -150;

            if (nav.classList.contains("sticky")) {
                yOffset = -50;
            }

            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });           
        });
    };
}

smoothScroll();