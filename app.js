const intro = document.querySelector("#intro");
const video = intro.querySelector("video");
const text1 = intro.querySelector("#h01");
const text2 = intro.querySelector("#h02");
const text3 = intro.querySelector("#h03");
const text4 = intro.querySelector("#h04");
const text5 = intro.querySelector("#h05");
const text6 = intro.querySelector("#h06");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();
var tween = new TimelineMax()
.add(TweenMax.from('#h02', 1, { opacity: 0 }) )
.add(TweenMax.from('#h03', 1, { opacity: 0 }) )
.add(TweenMax.from('#h04', 1, { opacity: 0 }) )
.add(TweenMax.from('#h05', 1, { opacity: 0 }) )
.add(TweenMax.from('#h06', 1, { opacity: 0 }) )


//Scenes
let scene = new ScrollMagic.Scene({
  duration: 29000,
  triggerElement: intro,
  triggerHook: 0
})  
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim10 = TweenMax.fromTo(text1, 3, { opacity: 1 }, { opacity: 0 });
const textAnim20 = TweenMax.fromTo(text2, 3, { opacity: 0 }, { opacity: 1 });
const textAnim21 = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });
const textAnim30 = TweenMax.fromTo(text3, 3, { opacity: 0 }, { opacity: 1 });
const textAnim31 = TweenMax.fromTo(text3, 3, { opacity: 1 }, { opacity: 0 });
const textAnim40 = TweenMax.fromTo(text4, 3, { opacity: 0 }, { opacity: 1 });
const textAnim41 = TweenMax.fromTo(text4, 3, { opacity: 1 }, { opacity: 0 });
const textAnim50 = TweenMax.fromTo(text5, 3, { opacity: 0 }, { opacity: 1 });
const textAnim51 = TweenMax.fromTo(text5, 3, { opacity: 1 }, { opacity: 0 });
const textAnim60 = TweenMax.fromTo(text6, 3, { opacity: 0 }, { opacity: 1 });

let scene10 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  offset: 5000,
  triggerHook: 0
})
  .setTween(textAnim10)
  .addTo(controller);

let scene20 = new ScrollMagic.Scene({
    duration: 500,
    offset: 5500,
    triggerHook: 0
  })
    .setTween(textAnim20)
    .addTo(controller);

let scene21 = new ScrollMagic.Scene({
    duration: 500,
    offset: 8500,
    triggerHook: 0
  })
    .setTween(textAnim21)
    .addTo(controller);

let scene30 = new ScrollMagic.Scene({
    duration: 500,
    offset: 9500,
    triggerHook: 0
  })
    .setTween(textAnim30)
    .addTo(controller);

let scene31 = new ScrollMagic.Scene({
    duration: 500,
    offset: 13000,
    triggerHook: 0
  })
    .setTween(textAnim31)
    .addTo(controller);

let scene40 = new ScrollMagic.Scene({
    duration: 500,
    offset: 14000,
    triggerHook: 0
  })
    .setTween(textAnim40)
    .addTo(controller);

let scene41 = new ScrollMagic.Scene({
    duration: 500,
    offset: 19000,
    triggerHook: 0
  })
    .setTween(textAnim41)
    .addTo(controller);
    
let scene50 = new ScrollMagic.Scene({
    duration: 500,
    offset: 20000,
    triggerHook: 0
  })
    .setTween(textAnim50)
    .addTo(controller);

let scene51 = new ScrollMagic.Scene({
    duration: 500,
    offset: 25000,
    triggerHook: 0
  })
    .setTween(textAnim51)
    .addTo(controller);

let scene60 = new ScrollMagic.Scene({
    duration: 1500,
    offset: 27000,
    triggerHook: 0
  })
    .setTween(textAnim60)
    .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.3);

//parallax Animation
$("#section1").mousemove(function(e) {
  parallaxIt(e, "img", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $("#section1");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
  });
}

// Scroll animation


