gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(Observer)

// ScrollTrigger.create({
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 50%",
//     toggleClass: "box-red",
//     onUpdate: (self) => console.log(self),
//     // onEnter: () => console.log("enter"),
//     // onLeave: () => console.log("leave"),
//     // onEnterBack: () => console.log("enter back"),
//     // onLeaveBack: () => console.log("leave back"),
// })

ScrollTrigger.observe({
// Observer.create({
    target: window,
    type: "wheel,touch,scroll,pointer",
    onUp: () => console.log("up"),
    onDown: () => console.log("down"),
    onLeft: () => console.log("left"),
    onRight: () => console.log("right"),
    onPress: () => console.log("press"),
    onChange: (self) => console.log(self.velocityY)
})