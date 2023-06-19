// Burger menu
$('.burger-menu').on('click', function (e){
    $('.burger-menu').toggleClass('active');
    $('header').toggleClass('active');
})

// Slick slider
$(function() {
    $('.top-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,

    })
})

//Swiper slider
const swiper = new Swiper('.news-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        20: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        }
    }
});

// Fancybox
/*Fancybox.bind('[data-fancybox="gallery"]', {
});*/
// $(document).ready(function() {
//     $("[data-fancybox-trigger='gallery']").fancybox({
//       // Опції FancyBox, якщо необхідно
//     });
//   });

// let scroll = document.getElementById('scroll')
// if (scroll) {
//     scroll.addEventListener('click',scrollToFunc)
// }
// function scrollToFunc() {
//     let sectionTitle = document.querySelector('.section1');
//     if (sectionTitle) {
//         sectionTitle.scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// }
// let aboutUs = document.getElementById('about_us')
// if (aboutUs) {
//     aboutUs.addEventListener('click',scrollElementFunc)
// }
// function scrollElementFunc() {
//     let sectionTitle = document.querySelector('.header__title');
//     if (sectionTitle) {
//         sectionTitle.scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// }
// let projects = document.getElementById('projects')
// if (projects) {
//     projects.addEventListener('click',scrollFunc)
// }
// function scrollFunc() {
//     let sectionTitle = document.querySelector('.section1__container');
//     if (sectionTitle) {
//         sectionTitle.scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// }
// let news = document.getElementById('news')
// if (news) {
//     news.addEventListener('click',toElementFunc)
// }
// function toElementFunc() {
//     let sectionTitle = document.querySelector('.section2__container');
//     if (sectionTitle) {
//         sectionTitle.scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// }
// let contact = document.getElementById('contact')
// if (contact) {
//     contact.addEventListener('click',scrollFunc)
// }
// function scrollFunc() {
//     let sectionTitle = document.querySelector('.section4__container');
//     if (sectionTitle) {
//         sectionTitle.scrollIntoView({
//             block: 'start',
//             behavior: 'smooth'
//         })
//     }
// }
//
//
// $(function() {
//     $('.section2__wrapper').slick({
//         infinite: true,
//         arrows: false,
//         dots: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//
//     })
// })
//
// function initMap() {
//     // Координати центру карти
//     const center = { lat: 51.5074, lng: -0.1278 };
//
//     // Створення карти
//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: center,
//       zoom: 12,
//     });
//
//     // Створення кастомного маркера
//     const marker = new google.maps.Marker({
//       position: center,
//       map: map,
//       icon: "path/to/custom-marker.png", // Шлях до зображення кастомного маркера
//       draggable: true, // Якщо ви хочете, щоб маркер був пересуваним
//     });
//   }
//
//   const image = document.querySelector('.section3__wrapper_one');
//
//   image.addEventListener('mouseenter', function() {
//     image.classList.add('zoomed');
//   });
//
//   image.addEventListener('mouseleave', function() {
//     image.classList.remove('zoomed');
//   });
//
// /*
// const icon = document.querySelector('.header__scroll_down');
// icon.addEventListener('click', smoothScroll);
//
// function smoothScroll() {
//     const targetElement = document.querySelector('.section1__container');
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   }
//
// AIzaSyBN9XcuV-uz8KNK8lOg-r9lDuFXD7mS1Rs
// $(document).ready(function() {
//     $('.multiple__slider').slick({
//         infinite: true,
//         arrows: true,
//         dots: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//
//     })
// })
//
// setInterval(function () {
//     $('.slickPrev').slick("slickPrev");
// }, 2000);
// function initMap() {
//     new google.maps.Map(document.getElementById("map"), {
//       mapId: "8e0a97af9386fef",
//       center: { lat: 48.85, lng: 2.35 },
//       zoom: 12,
//     });
//   }
//
//   window.initMap = initMap;
//   */