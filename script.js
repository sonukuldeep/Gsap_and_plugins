// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });

// gsap.from(".right", { duraton: 1, x: "-100vw", delay: 1 });

// gsap.from(".left", { duraton: 1, x: "-100%", delay: 1.5 });

// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });

// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
// );

const timeLine = gsap.timeline({
    defaults: { duration: 1 }
});

timeLine
    .from(".header", { y: "-100%", ease: "bounce" })
    .from(".link", { opacity: 0, stagger: 0.5 })
    .from(".right", { x: "-100vw" }, 1)
    .from(".left", { x: "-100%" }, "<0.5") // after 1sec relative to the above animation
    .to(".footer", { y: 0, ease: "elastic" })
    .fromTo(
        ".button",
        { opacity: 0, scale: 0, rotation: 720 },
        { opacity: 1, scale: 1, rotation: 0 }
    );

document.querySelector(".button").addEventListener("click", () => {
    // timeLine.timeScale(2);
    timeLine.reverse();
});
