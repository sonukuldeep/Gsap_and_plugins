gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
    trigger: ".box",
    markers: true,
    start: "top 80%",
    end: "top 50%",
    toggleClass: "box-red"
})