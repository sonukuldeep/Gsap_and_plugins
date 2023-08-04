gsap.registerPlugin(ScrollTrigger)

gsap.to(".square", {
    rotation: 360,
    x: 300,
    duration: 3,
    scrollTrigger: {
        trigger: ".square2",
        start: "top 60%",//400, //400(px) or top/center/bottom top/center/bottom or top/center/bottom 50% or it can be a function too
        end: "bottom 30%", //() => `+=${document.querySelector(".square").offsetHeight}`
        markers: true,
        toggleClass: "red",
        //toggleActions: "restart pause reset pause", // default is "play none none none" onEnter/ onLeave/ onEntryBack/ onLeaveBack 
        // valid toddleActions are:- play pause restart reset reverse resume complete none  
        scrub: 1, // can be true/false or numeric value to add smoothing
        pin: ".square", // true to pin the trigger element or pass a different class to pin that instead 
        pinSpacing: true,
    }
})