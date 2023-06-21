gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true
  }
})
  // имплант -> абатмент
  .to(".card", {y: "-100%"}, 1)
  .to(".img__bottom", {opacity: 0}, 1)
  .to(".img__middle", {opacity: 1}, 1)

  // абатмент -> коронка
  .to(".card", {y: "-200%"}, 2)
  .to(".img__middle", {opacity: 0}, 2)
  .to(".img__top", {opacity: 1}, 2)

  // все вместе
  .to(".card", {y: "-300%"}, 3)
  .to(".img__top", {opacity: 0}, 3)
  .to(".img__top", {y: -160, duration: 0.01}, 3)
  .to(".img__bottom", {y: 180, duration: 0.01}, 3)
  .to(".img__bottom", {opacity: 1}, 3)
  .to(".img__middle", {opacity: 1}, 3)
  .to(".img__top", {opacity: 1}, 3)

  // соединение
  .to(".img__top", { y: -40 }, 4)
  .to(".img__bottom",  { y: 90 }, 4)
  .to(".img__middle--bottom", { opacity: 0 }, 4)
  .to(".img", {y: -80}, 4)