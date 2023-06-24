const cards = gsap.utils.toArray(".card__info");

cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom center",
    onToggle: self => {
      if (self.isActive && i === 0) {
        gsap.to(".img__middle", {opacity: 0, display: 'none', duration: 0.2})
        gsap.to(".img__bottom", {opacity: 1, display: 'block', duration: 0.2})
      } else if (self.isActive && i === 1) {
        gsap.to(".img__top", {opacity: 0, display: 'none', duration: 0.2})
        
        gsap.to(".img__bottom", {opacity: 0, display: 'none', duration: 0.2})
        gsap.to(".img__middle", {opacity: 1, display: 'block', duration: 0.2})
      } else if (self.isActive && i === 2) {
        gsap.to(".img__top", {y: 0, duration: 0.2})
        gsap.to(".img__middle", {y: 0, duration: 0.2})
        gsap.to(".img__bottom", {y: 0, duration: 0.2})
        gsap.to(".img__bottom", {opacity: 0, display: 'none', duration: 0.2})
        gsap.to(".img__middle", {opacity: 0, display: 'none', duration: 0.2})

        gsap.to(".img__middle", {opacity: 0, display: 'none', duration: 0.2})
        gsap.to(".img__top", {opacity: 1, display: 'block', duration: 0.2})
      } else if (self.isActive && i === 3) {
        gsap.to(".img__top", {y: -180, duration: 0.2})
        gsap.to(".img__middle", {y: -40, duration: 0.2})
        gsap.to(".img__bottom", {y: 130, duration: 0.2})

        gsap.to(".img__top", {opacity: 1, display: 'block', duration: 0.2})
        gsap.to(".img__middle", {opacity: 1, display: 'block', duration: 0.2})
        gsap.to(".img__middle--bottom", {opacity: 1, duration: 0.2})
        gsap.to(".img__bottom", {opacity: 1, display: 'block', duration: 0.2})
      }
    }
  });
})

gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-wrapper",
    start: "bottom bottom",
    end: "+=800",
    scrub: true,
    pin: true,
  }
})

  // имплант -> абатмент
  .to(".img__top", { y: -90 }, 1)
  .to(".img__middle--bottom", { opacity: 0 }, 1)
  .to(".img__bottom",  { y: 70 }, 1)