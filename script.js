gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.create({
    trigger: ".box",
    markers: true,
    start: "top 80%",
    end: "top 50%",
    toggleClass: "box-red",
    onUpdate: (self) => console.log(self),
    // onEnter: () => console.log("enter"),
    // onLeave: () => console.log("leave"),
    // onEnterBack: () => console.log("enter back"),
    // onLeaveBack: () => console.log("leave back"),
})