AOS.init({
    once: true
});

new Swiper('.swiper.team', {
    loop: true,
    slidesPerView: 2,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        }
    }
});

const swiperNews = new Swiper('.swiper.else-news', {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
            },
        }
    }
});

new Swiper('.swiper.else-articles', {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            pagination: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        },
    }
});

new Swiper('.swiper.swiper-banner', {
    loop: true,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // breakpoints: {
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //         pagination: false,
    //         navigation: {
    //             nextEl: '.button-next',
    //             prevEl: '.button-prev',
    //         },
    //     }
    // }
});




document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.select__head').forEach((item) => {
        item.onclick = _ => {
            item.closest('.select').classList.toggle('active')
        }
    })
})


// burger menu 

document.getElementById('burgerBtn').addEventListener('click', function() {
    document.getElementById('burgerMenu').classList.toggle('hidden');
});

const toggleProjects = document.getElementById('toggleProjects');
const projectsBody = document.getElementById('projectsBody');

toggleProjects.addEventListener('click', function() {
    projectsBody.classList.toggle('hidden');
});