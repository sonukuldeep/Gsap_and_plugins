gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%",//400, //400(px) or top/center/bottom top/center/bottom or top/center/bottom 50% or it can be a function too
        end: "top 50%", //() => `+=${document.querySelector(".square").offsetHeight}`
        markers: true,
        toggleClass: "red",
        toggleActions: "restart pause reset pause", // default is "play none none none" onEnter/ onLeave/ onEntryBack/ onLeaveBack 
        // valid toddleActions are:- play pause restart reset reverse resume complete none  
    }
})