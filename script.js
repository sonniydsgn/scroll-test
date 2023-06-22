if ( screen.width >= 800 ) {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
    }
  })
  
    // имплант -> абатмент
    .to(".card", {y: "-100%", ease: "power1.in"}, 1)
    .to(".img__bottom", {opacity: 0, display: 'none', ease: "power1.in"}, 1)
    .to(".img__middle", {opacity: 1, display: 'block', ease: "power1.in"}, 1)
  
    // абатмент -> коронка
    .to(".card", {y: "-200%", ease: "power1.in"}, 3)
    .to(".img__middle", {opacity: 0, display: 'none', ease: "power1.in"}, 3)
    .to(".img__top", {opacity: 1, display: 'block', ease: "power1.in"}, 3)
  
    // все вместе
    .to(".card", {y: "-300%", ease: "power1.in"}, 5)
    .to(".img__top", {y: -180, ease: "power1.in"}, 5)
    .to(".img__middle", {y: -40, duration: 0.01}, 5)
    .to(".img__bottom", {y: 130, duration: 0.01}, 5)
    .to(".img__bottom", {opacity: 1, display: 'block', ease: "power1.in"}, 5)
    .to(".img__middle", {opacity: 1, display: 'block', ease: "power1.in"}, 5)
  
    // соединение
    .to(".img__top", { y: -90 }, 7)
    .to(".img__middle--bottom", { opacity: 0 }, 7)
    .to(".img__bottom",  { y: 70 }, 7)
} else {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-wrapper",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
    }
  })
  
    // имплант -> абатмент
    .to(".card", {y: "-100%", ease: "power1.in"}, 1)
    .to(".img__bottom", {opacity: 0, display: 'none', ease: "power1.in"}, 1)
    .to(".img__middle", {opacity: 1, display: 'block', ease: "power1.in"}, 1)
  
    // абатмент -> коронка
    .to(".card", {y: "-200%", ease: "power1.in"}, 3)
    .to(".img__middle", {opacity: 0, display: 'none', ease: "power1.in"}, 3)
    .to(".img__top", {opacity: 1, display: 'block', ease: "power1.in"}, 3)
  
    // все вместе
    .to(".card", {y: "-300%", ease: "power1.in"}, 5)
    .to(".img__top", {y: -130, ease: "power1.in"}, 5)
    .to(".img__middle", {y: -30, duration: 0.01}, 5)
    .to(".img__bottom", {y: 90, duration: 0.01}, 5)
    .to(".img__bottom", {opacity: 1, display: 'block', ease: "power1.in"}, 5)
    .to(".img__middle", {opacity: 1, display: 'block', ease: "power1.in"}, 5)
  
    // соединение
    .to(".img__top", { y: -75 }, 7)
    .to(".img__middle--bottom", { opacity: 0 }, 7)
    .to(".img__bottom",  { y: 30 }, 7)
}