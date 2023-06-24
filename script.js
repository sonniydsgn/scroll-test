const cards = gsap.utils.toArray(".card__info");

// function IsActive (i) {
//   document.querySelector(`#section-${i}`).classList.add('active')
// }

cards.forEach((card, i) => {
  ScrollTrigger.create({
    trigger: card,
    start: "top center",
    end: "bottom bottom",
    markers: true, 
    onToggle: self => {
      if (self.isActive && i === 0) {
        gsap.to(".img__middle", {opacity: 0, display: 'none'})
        gsap.to(".img__bottom", {opacity: 1, display: 'block'})
      } else if (self.isActive && i === 1) {
        gsap.to(".img__top", {opacity: 0, display: 'none'})
        
        gsap.to(".img__bottom", {opacity: 0, display: 'none'})
        gsap.to(".img__middle", {opacity: 1, display: 'block'})
      } else if (self.isActive && i === 2) {
        gsap.to(".img__top", {y: 0})
        gsap.to(".img__middle", {y: 0})
        gsap.to(".img__bottom", {y: 0})
        gsap.to(".img__bottom", {opacity: 0, display: 'none'})
        gsap.to(".img__middle", {opacity: 0, display: 'none'})

        gsap.to(".img__middle", {opacity: 0, display: 'none'})
        gsap.to(".img__top", {opacity: 1, display: 'block'})
      } else if (self.isActive && i === 3) {
        gsap.to(".img__top", {y: -180})
        gsap.to(".img__middle", {y: -40})
        gsap.to(".img__bottom", {y: 130})

        gsap.to(".img__top", {opacity: 1, display: 'block'})
        gsap.to(".img__middle", {opacity: 1, display: 'block'})
        gsap.to(".img__middle--bottom", {opacity: 1})
        gsap.to(".img__bottom", {opacity: 1, display: 'block'})
      }
    }
  });
})

ScrollTrigger.create({
  trigger: '.scroll-wrapper',
  start: "bottom bottom",
  end: "+=1000",
  pin: true,
  scrub: true,
  onToggle: self => {
    if (self.isActive) {
      gsap.to(".img__top", {opacity: 1, display: 'block'})
      gsap.to(".img__middle", {opacity: 1, display: 'block'})
      gsap.to(".img__middle--bottom", {opacity: 1})
      gsap.to(".img__bottom", {opacity: 1, display: 'block'})

      gsap.to(".img__top", { y: -90, delay: 0.2 })
      gsap.to(".img__middle--bottom", { opacity: 0, delay: 0.2 })
      gsap.to(".img__bottom",  { y: 70, delay: 0.2 })
    }
  }
})