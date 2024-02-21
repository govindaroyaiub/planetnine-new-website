$(document).ready(function() {
    let workflowTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#workflow",
            start: "-10% center",
            end: "center center",
            scrub: 3,
            markers: true,
        }
    });

    workflowTL

    .add('f1')
    .to('.workflow-step-circle-1', {duration: 0.5, opacity: 1, y: 0}, 'f1')
    .to('.workflow-text-box-1', {duration: 0.5, opacity: 1, x: 0}, 'f1')
    .to('.workflow-timeline', {duration: 0.5, '--after-height': '20%'}, 'f1')

    .add('f2')
    .to('.workflow-step-circle-2', {duration: 0.5, opacity: 1, y: 0}, 'f2')
    .to('.workflow-text-box-2', {duration: 0.5, opacity: 1, x: 0}, 'f2')
    .to('.workflow-timeline', {duration: 0.5, '--after-height': '40%'}, 'f2')

    .add('f3')
    .to('.workflow-step-circle-3', {duration: 0.5, opacity: 1, y: 0}, 'f3')
    .to('.workflow-text-box-3', {duration: 0.5, opacity: 1, x: 0}, 'f3')
    .to('.workflow-timeline', {duration: 0.5, '--after-height': '60%'}, 'f3')

    .add('f4')
    .to('.workflow-step-circle-4', {duration: 0.5, opacity: 1, y: 0}, 'f4')
    .to('.workflow-text-box-4', {duration: 0.5, opacity: 1, x: 0}, 'f4')
    .to('.workflow-timeline', {duration: 0.5, '--after-height': '80%'}, 'f4')

    .add('f5')
    .to('.workflow-step-circle-5', {duration: 0.5, opacity: 1, y: 0}, 'f5')
    .to('.workflow-text-box-5', {duration: 0.5, opacity: 1, x: 0}, 'f5')
    .to('.workflow-timeline', {duration: 0.5, '--after-height': '100%'}, 'f5')
});

document.addEventListener('DOMContentLoaded', () => {

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay:{
            delay: 20000
        },
        effect: 'cube',
        cubeEffect: {
          slideShadows: false,
          shadow: false,
        },
    
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })







gsap.registerPlugin(ScrollTrigger);

// Work Horizontal Animation

const allImage = document.querySelector('.work__imageWrap--item');
const imgWidth = 336 + 20;
const imageQuantity = 11;

let allImageWidth = imgWidth * imageQuantity;

let amountToScroll = allImageWidth - window.innerWidth;

// console.log(allImageWidth);
// console.log(amountToScroll);
// console.log(window.innerWidth);

gsap.to(allImage, {
    x: -amountToScroll,
    ease: "none",
    scrollTrigger: {
        trigger: ".work",
        start: "top 0px",
        // end: "bottom 20px",
        // snap: 0.3,
        pin: true,
        scrub: 1,
    }
})

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Ads Section Snap Animation 


var tl = gsap.timeline({})

tl
.to('.displayAd', {
    delay: 0.1,
    scrollTrigger: {
        trigger: ".displayAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})

.to('.dynamicAd', {
    scrollTrigger: {
        trigger: ".dynamicAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})

.to('.weboramaAd', {
    scrollTrigger: {
        trigger: ".weboramaAd",
        // markers: true,
        scrub: 1
    },
    ease: 'expo.out'
})


gsap.from(".displayAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".displayAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    //   markers: true
    }
});


gsap.from(".dynamicAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".dynamicAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    //   markers: true
    }
});

gsap.from(".weboramaAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".weboramaAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    //   markers: true
    }
});


gsap.from(".shadowAd__head", {
    x: '20%',
    y: '15%',
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".shadowAd",
      start: "top center",
      end: "top 30vh",
      scrub: true,
    //   markers: true
    }
});
// gsap.to('.weboramaAd', { duration: 2, scrollTo: 250 });
// var t3 = gsap.timeline({})

// .to('.workflow__reveal--content', {
//     scrollTrigger: {
//         trigger: ".workflow",
//         start: "bottom 30px",
//        
//         // scrub: 1
//     },
//     height: b,
//     ease: 'expo.out',

// })

});



