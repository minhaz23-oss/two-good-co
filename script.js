
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
 
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

function navAnimation(){
  gsap.to('.nav-part1 svg, .nav-part1 img',{
    transform:' translateY(-100%)',
    scrollTrigger:{
      scroller: '.main',
      trigger: '.page1',
      start: 'top 0',
      end: 'top -5%',
      scrub: true
    }
  })
  gsap.to('.nav-links ',{
    transform:' translateY(-100%)',
    opacity: 0,
    scrollTrigger:{
      scroller: '.main',
      trigger: '.page1',
      start: 'top 0',
      end: 'top -5%',
      scrub: true
    }
  });
};
navAnimation();
function videoconAnimation() {

  let vidcon = document.querySelector('.video-container');
    
    vidcon.addEventListener('mousemove', function(dets) {
      document.querySelector('.play').style.transform = `translate(${dets.pageX}px,${dets.pageY}px) `;
    });

    vidcon.addEventListener('mouseenter',function(){
      document.querySelector('.play').style.opacity = 1;
    });
    vidcon.addEventListener('mouseleave',function(){
      document.querySelector('.play').style.opacity = 0;
    });
  };
videoconAnimation();
  

function loadingH1Animation(){

    gsap.to('.box-h1 h1',{
        transform: 'translateY(0)',
        delay: 0.3,
        duration: 0.6,
        stagger: 0.1
    });
    gsap.from('.video-container',{
        scale: 0.6,
        duration: 0.7,
        delay: 1,
        opacity:0
    })
};
loadingH1Animation();


function theBoxHover(){
  document.addEventListener('mousemove', function (dets) {
    gsap.to('.cursor', {
        top: dets.y,
        left: dets.x
    });
  });
  
  
  document.querySelectorAll('.child').forEach(function(elem){
     elem.addEventListener('mouseenter',function () {
      gsap.to('.cursor', {
              transform: ` scale(1)`
          });
     })
  });
  document.querySelectorAll('.child').forEach(function(elem){
    elem.addEventListener('mouseleave',function () {
     gsap.to('.cursor', {
             transform: ` scale(0)`
         });
    })
  });
}
theBoxHover();