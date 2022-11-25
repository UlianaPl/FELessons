let scroll = document.getElementById('scroll')
if (scroll) {
    scroll.addeventListener('click',scrollToElementFunc)
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
    aboutUs.addeventListener('click',scrollToElementFunc)
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
    projects.addeventListener('click',scrollToElementFunc)
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
    news.addeventListener('click',scrollToElementFunc)
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
    contact.addeventListener('click',scrollToElementFunc)
}
function scrollToElementFunc() {
    let sectionTitle = document.querySelector('.form__title');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
}
$('.header__title').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,    
})