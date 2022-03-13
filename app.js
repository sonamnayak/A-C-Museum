const cslide = document.querySelector('.slide');
const cimages = document.querySelectorAll('.slide img')
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = cimages[0].clientWidth;

cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

next.addEventListener('click', () => {
    if (counter >= cimages.length -1) return;
    cslide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', () => {
    if (counter <=0) return;
    cslide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

cslide,addEventListener('transitionend', () => {
    if (cimages[counter].id === 'lastclone'){
        cslide.style.transition = "none";
        counter = cimages.length -2;
        cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (cimages[counter].id === 'firstclone'){
        cslide.style.transition = "none";
        counter = cimages.length -counter;
        cslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
