
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.nav-links');
    const navLi = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function (){
        //animate burger icon
        burger.classList.toggle('open');
        //have nav appear
        mobileNav.classList.toggle('nav-open');

        //animate links
    navLi.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    });
}
navSlide();

