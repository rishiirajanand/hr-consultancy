const leftElements = document.querySelectorAll('.move-left');
const rightElements = document.querySelectorAll('.move-right');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateIfInViewport(elements, animationClass) {
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add(animationClass);
        }
    });
}

function handleScrollAnimation() {
    animateIfInViewport(leftElements, 'animate-left');
    animateIfInViewport(rightElements, 'animate-right');
}

window.addEventListener('scroll', handleScrollAnimation);
