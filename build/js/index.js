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

// swiper about

const swiper = new Swiper(".mySwiper-about", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
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
    const headers = document.querySelector("header");

    document.getElementById('burgerMenu').classList.toggle('hidden');
    headers.classList.toggle("lgs:bg-blue-500", "lgs:border-b-2", "lgs:border-b-whiteOp-300");
});

// header project

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.projectsButton');
    const menus = document.querySelectorAll('.projectsMenu');

    buttons.forEach((button, index) => {
        const menu = menus[index];

        button.addEventListener('click', function() {
            menu.classList.toggle('hidden');
        });

        document.addEventListener('click', function(event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                menu.classList.add('hidden');
            }
        });
    });
});

// scroll header

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.classList.add("bg-blue-500", "border-b", "border-b-whiteOp-300");
        header.classList.remove("lg:bg-transparent", "lg:border-none");
      } else {
        header.classList.remove("bg-blue-500", "border-b", "border-b-whiteOp-300");
        header.classList.add("lg:bg-transparent", "lg:border-none");
      }
    });
  });

//

const toggleProjects = document.getElementById('toggleProjects');
const projectsBody = document.getElementById('projectsBody');

toggleProjects.addEventListener('click', function() {
    projectsBody.classList.toggle('hidden');
});