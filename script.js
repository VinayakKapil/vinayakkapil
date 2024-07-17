const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")

elemc.addEventListener("mouseenter",function(){
    fixed.style.display = 'block'
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display = 'none'
})


function page4animation(){
    var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

function loaderAnimation(){
    var loader = document.querySelector('#loader')
setTimeout(function(){
    loader.style.top = '-100%'
},3500)
}

function menuAnimation(){
    document.addEventListener('DOMContentLoaded', function() {
        const menuOpen = document.getElementById('menu-open');
        const menuClose = document.getElementById('menu-close');
        const navPart2 = document.getElementById('nav-part2');
    
        menuOpen.addEventListener('click', function() {
            navPart2.style.display = 'flex';
            setTimeout(() => {
                navPart2.style.right = '0';
            }, 10); // Small delay to allow the display to be set before transitioning
            menuOpen.style.display = 'none';
            menuClose.style.display = 'block';
        });
    
        menuClose.addEventListener('click', function() {
            navPart2.style.right = '-100%';
            setTimeout(() => {
                navPart2.style.display = 'none';
            }, 300); // Match the transition duration in the CSS
            menuOpen.style.display = 'block';
            menuClose.style.display = 'none';
        });
    });
}

// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }




loaderAnimation();
page4animation();
swiperAnimation();
// loco();
menuAnimation()






