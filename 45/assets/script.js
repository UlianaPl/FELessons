let scroll = document.getElementById('scroll')
if (scroll) {
    scroll.addEventListener('click',scrollToFunc)
}
function scrollToFunc() {
    let sectionTitle = document.querySelector('.section1');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let aboutUs = document.getElementById('about_us')
if (aboutUs) {
    aboutUs.addEventListener('click',scrollElementFunc)
}
function scrollElementFunc() {
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
    projects.addEventListener('click',scrollFunc)
}
function scrollFunc() {
    let sectionTitle = document.querySelector('.section1__container');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let news = document.getElementById('news')
if (news) {
    news.addEventListener('click',toElementFunc)
}
function toElementFunc() {
    let sectionTitle = document.querySelector('.section2__container');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
let contact = document.getElementById('contact')
if (contact) {
    contact.addEventListener('click',scrollFunc)
}
function scrollFunc() {
    let sectionTitle = document.querySelector('.section4__container');
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
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,        
        
    })
})

$(function() {
    $('.section2__wrapper').slick({
        infinite: true,
        arrows: false,
        dots: true,        
        slidesToShow: 3,
        slidesToScroll: 3,        
        
    })
})



/*
$(document).ready(function() {
    $('.multiple__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        
    })
})

setInterval(function () {
    $('.slickPrev').slick("slickPrev");
}, 2000);*/