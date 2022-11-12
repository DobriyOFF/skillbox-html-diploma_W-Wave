// import menu from './modules/menu'
import modal from './modules/modal'
import serviceScroll from './modules/serviceScroll'
// import validateForms from './modules/i'
// import tabs from './modules/tabs'
// import slider from './modules/slider'
import Swiper from './modules/swiper'
import accordeon from './modules/accordeon'

// menu()
modal()
serviceScroll()
// validateForms()
// tabs()
// slider()
accordeon()

//Swiper
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

//Кнопка "Еще подкасты"
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

//Кастомный select из библиотеки itc-custom-select.js
const select1 = new ItcCustomSelect('#select-1');

// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}};

// Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}