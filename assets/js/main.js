/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    // Ensure the class is toggled correctly
    menuBtn.classList.toggle("responsive");
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader = document.getElementById("header");
    // Simplified condition check
    const isScrolled = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
    navHeader.style.boxShadow = isScrolled ? "0 1px 6px rgba(0, 0, 0, 0.1)" : "none";
    navHeader.style.height = isScrolled ? "70px" : "90px";
    navHeader.style.lineHeight = isScrolled ? "70px" : "90px";
}

/* ----- TYPING EFFECT ----- */
if (document.querySelector(".typedText")) { // Check if element exists
    var typingEffect = new Typed(".typedText",{
        strings : ["Designer","Developer"],
        loop : true,
        typeSpeed : 100, 
        backSpeed : 80,
        backDelay : 2000
    });
}

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
if (typeof ScrollReveal !== 'undefined') { // Check if ScrollReveal is available
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
    });

    /* -- HOME -- */
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})

    /* -- PROJECT BOX -- */
    sr.reveal('.project-box',{interval: 200})

    /* -- HEADINGS -- */
    sr.reveal('.top-header',{})

    /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

    /* -- ABOUT INFO & CONTACT INFO -- */
    const srLeft = ScrollReveal({
        origin: 'left',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srLeft.reveal('.about-info',{delay: 100})
    srLeft.reveal('.contact-info',{delay: 100})

    /* -- ABOUT SKILLS & FORM BOX -- */
    const srRight = ScrollReveal({
        origin: 'right',
        distance: '80px',
        duration: 2000,
        reset: true
    })

    srRight.reveal('.skills-box',{delay: 100})
    srRight.reveal('.form-control',{delay: 100})
}

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

    const link = document.querySelector('.nav-menu a[href*="' + sectionId + '"]');
    if (link) { // Check if the link exists
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    }
  })
}

window.addEventListener('scroll', scrollActive)

// JavaScript for adding hover effects or other interactions
document.querySelectorAll('.icon').forEach(item => {
    item.addEventListener('mouseover', function() {
        // Actions to perform on mouse over, e.g., log to console
        console.log('Mouse over on social icon');
    });

    item.addEventListener('mouseout', function() {
        // Actions to perform on mouse out, e.g., log to console
        console.log('Mouse out from social icon');
    });
});