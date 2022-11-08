// import timer from './modules/timer'
// import menu from './modules/menu'
import modal from './modules/modal'
// import serviceScroll from './modules/serviceScroll'
// import validateForms from './modules/validateForms'
// import tabs from './modules/tabs'
// import slider from './modules/slider'
import Swiper from './modules/swiper'
import accordeon from './modules/accordeon'

// timer('01 april 2022')
// menu()
modal()
// serviceScroll()
// validateForms()
// tabs()
// slider()
accordeon()

const projectsSwiper = new Swiper('.about__carousel-container', {
    slidesPerView: 4,
    spaceBetween: 30,

    slideClass: 'about__carousel-slide',
    wrapperClass: 'about__carousel-wrapper',
    navigation: {
        nextEl: '.carousel__btn-wrapper-next',
        prevEl: '.carousel__btn-wrapper-prev',
    },
    breakpoints: {
        320: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        722: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1920: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
});

const eventsBtn = document.querySelector('.podcasts__btn');
const slideHidden = document.querySelectorAll('.podcasts__item-hidden');

function toggleClass(inactive, active) {
    document.querySelector(inactive).classList.toggle(active);
}

eventsBtn.addEventListener('click', () => {
    slideHidden.forEach(item => {
        if(item.classList.contains('podcasts__item-hidden')) {
            item.classList.remove('podcasts__item-hidden')
        }
    })
    toggleClass('.podcasts__btn', 'podcasts__btn-hidden');
});