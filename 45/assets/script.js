let scroll = document.getElementById('scroll')
if (scroll) {
    scroll.addEventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.section1__title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let aboutUs = document.getElementById('about_us')
if (aboutUs) {
    aboutUs.addEventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.header__title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let projects = document.getElementById('projects')
if (projects) {
    projects.addEventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.section1__title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let news = document.getElementById('news')
if (news) {
    news.addEventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.section2__wrapper_title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let contact = document.getElementById('contact')
if (contact) {
    contact.addEventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.section4__title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
$(function() {
    $('.header__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    })
})