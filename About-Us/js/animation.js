const paragraphs = document.querySelectorAll('.move');
const text = document.querySelectorAll('.move-text');
const textRight = document.querySelectorAll('.move-text-right');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    paragraphs.forEach(paragraph => {
        if (isInViewport(paragraph)) {
            paragraph.classList.add('animate');
        }
    });
}
function handleScrollText() {
    text.forEach(paragraph => {
        if (isInViewport(paragraph)) {
            paragraph.classList.add('animate-text');
        }
    });
}
function handleScrollTextRight() {
    textRight.forEach(paragraph => {
        if (isInViewport(paragraph)) {
            paragraph.classList.add('animate-text-right');
        }
    });
}


// handleScroll();
// handleScrollText()
// handleScrollTextRight()


window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', handleScrollText);
window.addEventListener('scroll', handleScrollTextRight);