ScrollTrigger.create({
	trigger: ".scroll-container",
	start:"top top",
	end:"bottom bottom",
  scrub: true,
	pin:".img"
})

// * https://www.youtube.com/watch?v=9Tq-docgT6U


// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".scroll-container",
//     start: "top top",
//     end: "+=3000",
//     scrub: true,
//     pin: true,
//   }
// })

//   // имплант -> абатмент
//   .to(".card", {y: "-100%", ease: "power1.in"}, 1)
//   .to(".img__bottom", {opacity: 0, ease: "power1.in"}, 1)
//   .to(".img__middle", {opacity: 1, ease: "power1.in"}, 1)

//   // абатмент -> коронка
//   .to(".card", {y: "-200%", ease: "power1.in"}, 2)
//   .to(".img__middle", {opacity: 0, ease: "power1.in"}, 2)
//   .to(".img__top", {opacity: 1, ease: "power1.in"}, 2)

//   // все вместе
//   .to(".card", {y: "-300%", ease: "power1.in"}, 3)
//   .to(".img__top", {opacity: 0, ease: "power1.in"}, 3)
//   .to(".img__top", {y: -160, duration: 0.01}, 3)
//   .to(".img__bottom", {y: 180, duration: 0.01}, 3)
//   .to(".img__bottom", {opacity: 1, ease: "power1.in"}, 3)
//   .to(".img__middle", {opacity: 1, ease: "power1.in"}, 3)
//   .to(".img__top", {opacity: 1, ease: "power1.in"}, 3)

//   // соединение
//   .to(".img__top", { y: -40 }, 4)
//   .to(".img__bottom",  { y: 90 }, 4)
//   .to(".img__middle--bottom", { opacity: 0 }, 4)
//   .to(".img", {y: -80}, 4)