const navOpen = document.getElementById('nav-open'),
    navClose = document.getElementById('nav-close'),
    navMenu = document.getElementById('nav-menu');

navOpen.addEventListener("click", () => {
    navMenu.classList.add('nav-open');
})

navClose.addEventListener("click", () => {
    navMenu.classList.remove('nav-open'); 
})

const navLinks = document.querySelector('.nav-links').children

Array.from(navLinks).forEach(n => {
    n.addEventListener("click", () => {
        // console.log(element)
        navMenu.classList.remove('nav-open')
    })
});

// header background
const scrollHeader = () => {
    const header = document.getElementById('header');

    window.scrollY > 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');

}

window.addEventListener('scroll', scrollHeader)



// initializing swiper JS

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


// scroll up 
const sections = document.querySelectorAll('section:not(.contact)');

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
   
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// active link

const activeLink = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 40,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector(`.nav-links a[href*=${sectionId}]`);
        
            //   console.log(current);
        
        if (scrollDown > sectionTop && scrollDown <= sectionHeight + sectionTop){
            sectionClass.classList.add('active-link')
        } else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', activeLink);

// scroll reveal

const sr = ScrollReveal({
    delay: 400, 
    duration: 2500, 
    distance: '100px', 
    origin: 'top'
});

sr.reveal('.home-content, .services, .footer');
sr.reveal('.home-image', { origin: 'bottom', delay: 1000 })
sr.reveal('.about-section-images, .contact-image', {origin: 'left'})
sr.reveal('.about-content, .contact-boxs', {origin: 'right'})
sr.reveal('.project-cards', {interval: 100})