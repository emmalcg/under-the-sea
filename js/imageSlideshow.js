function Slider(imageEl) {
    if(!(imageEl instanceof Element)) {
        throw new Error('no slider passed through');
    }
//create some variable for working with the slider
//all functions that are inside startSlider must have access to this
let current;
let prev;
let next;

//select the elements needed for the slider
//images
const images = document.querySelector('.carousel');

//prev/ next buttons 
const nextButton = document.querySelector('.nextButton');
const prevButton = document.querySelector('.prevButton');

console.log(images);
console.log(nextButton);
console.log(prevButton);

function startSlider() {
    current = imageEl.querySelector('.current');
    prev = current.previousElementSibling || images.lastElementChild;
    console.log(prev);
    next = current.nextElementSibling || images.firstElementChild;
    console.log({current, prev, next});
}

//function to apply new classes
function applyClasses() {
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
}

//remove the classes when next/prev button is clicked
function move(direction) {
    //first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    //shift all classes to the left
    if (direction === 'back') {
        //make a new array of the new values, and destructure them over and into the prev, current and next variables
        [prev, current, next] = [
            //get the prev slide, if there is none, get the last slide from the entire slider for wrapping
            prev.previousElementSibling || images.lastElementChild, prev, current
        ];
    } else {
        [prev, current, next] = [
            //get the next slide, or if it's at the end, loop around and grab the first slide 
            current, next, next.nextElementSibling || images.firstElementChild
        ];
    }

    applyClasses();
}
//when this slider is created, run the start slider function
startSlider();
applyClasses();


//event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move)
}


const mySlider = Slider(document.querySelector('.gallery'));

