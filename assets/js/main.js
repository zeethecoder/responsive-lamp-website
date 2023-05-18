/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(item => item.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    const toggle = document.getElementById('nav-toggle')
    const logo = document.getElementById('nav-logo')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
    this.scrollY >= 50 ? toggle.classList.add('bg-text')
        : toggle.classList.remove('bg-text')
    this.scrollY >= 50 ? logo.classList.add('bg-text')
        : logo.classList.remove('bg-text')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centerdSlides: true,
    loop: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            centerdSlides: false
        }
    }

});

/*=============== CHOOSE FAQ ===============*/

// the items in the div text title button
const faqItems = document.querySelectorAll('.choose__faq-item');



// looping through each item  
faqItems.forEach((item) => {
    const faqHeader = item.querySelector('.choose__faq-header');

    // add onclick event to the button and title 
    faqHeader.addEventListener('click', () => {

        const openItem = document.querySelector('.faq-open');
        // call function
        toggleItem(item);

        if (openItem && openItem != item) {
            toggleItem(openItem)
        }
    })
})


const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose__faq-content');

    if (item.classList.contains('faq-open')) {
        faqContent.removeAttribute('style');
        item.classList.remove('faq-open');
    } else {
        faqContent.style.height = faqContent.scrollHeight + 'px';
        item.classList.add('faq-open');
    }


}


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
