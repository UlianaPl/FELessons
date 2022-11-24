let scroll = document.getElementById('scroll')
if (scroll) {
    scroll.eventListener('click',scrollToElementFunc)
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