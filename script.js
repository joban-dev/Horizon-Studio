let leftbox = document.querySelector('.leftmenu');
let rightbox = document.querySelector('.rightmenu');
let btn = document.querySelector('.headermenu');
let closemenubtn = document.querySelector('.closemenubtn');
let flag = 0;

btn.addEventListener('click', function () {
    if (flag === 0) {
        leftbox.style.top = '0%';
        leftbox.style.transition = '1.5s ease';
        flag = 1;
        gsap.from(".leftmenu .leftmenuin", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".menuu",
                scroller: "body",
                start: "top 60%",
                end: "top 100%"
            }
        });
    } else if (flag === 1) {
        leftbox.style.top = '-105%';
        leftbox.style.transition = '1.5s';
        flag = 0;
    }
});

btn.addEventListener('click', function () {
    if (flag === 0) {
        rightbox.style.top = '100%';
        rightbox.style.transition = '1.5s ease';
        flag = 1;
    } else if (flag === 1) {
        rightbox.style.top = '0%';
        rightbox.style.transition = '1.5s';
        flag = 0;
        gsap.from(".rightmenu div", {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".menuu",
                scroller: "body",
                start: "top 60%",
                end: "top 0%"
            }
        });
    }
});

closemenubtn.addEventListener('click', function () {
    if (flag === 0) {
        leftbox.style.top = '-100%';
        leftbox.style.transition = '1.5s ease';
        flag = 1;
    } else if (flag === 1) {
        leftbox.style.top = '0%';
        leftbox.style.transition = '1.5s';
        flag = 0;
    }
});

closemenubtn.addEventListener('click', function () {
    if (flag === 0) {
        rightbox.style.top = '0%';
        rightbox.style.transition = '1.5s ease';
        flag = 1;
    } else if (flag === 1) {
        rightbox.style.top = '100%';
        rightbox.style.transition = '1.5s';
        flag = 0;
    }
});


document.addEventListener('click', function (event) {
    const isClickInsideLeftMenu = leftbox.contains(event.target);
    const isClickInsideRightMenu = rightbox.contains(event.target);
    const isClickInsideButton = btn.contains(event.target);
    const isClickInsideCloseButton = closemenubtn.contains(event.target);


    if (!isClickInsideLeftMenu && !isClickInsideRightMenu && !isClickInsideButton && !isClickInsideCloseButton) {

        if (leftbox.style.top === '0%') {
            leftbox.style.top = '-100%';
            leftbox.style.transition = '1.5s ease';
        }

        if (rightbox.style.top === '0%') {
            rightbox.style.top = '100%';
            rightbox.style.transition = '1.5s ease';
        }
        flag = 0;
    }
});


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
});

tl.from(".section3 .sec3div1 h1", {
    x: -50,
    opacity: 0,
    duration: 1,

})
tl.from(".section3 .div2uptext ", {
    y: 50,
    opacity: 0,
    duration: 0.5,
})

tl.from(".section3 .div2lotext ", {
    y: 100,
    opacity: 0,
    duration: 0.5,
})
tl.from(".section3 .div2lotext h4 ", {
    y: 100,
    opacity: 0,
    duration: 0.5,
})


gsap.from(".section4 .featuredpro p", {
    y: 200,
    opacity:0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section4 .oneb", {
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section4 .sec4updiv button", {
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section4 .sec4lodiv .sec4img1", {
    width:200,
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 60%",
        end: "top 0%"
    }
})

gsap.from(".section5 .updivsec5 ", {
    y:100,
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section5 .lodivsec5 .sec5img1", {
    x:-1000,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top 30%",
        end: "top 0%"
    }
})
gsap.from(".section5 .lodivsec5 .sec5img2", {
    x:1000,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section5",
        scroller: "body",
        start: "top 30%",
        end: "top 0%"
    }
})



gsap.from(".section6 .updivsec5 ", {
    y:100,
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section6",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section6 .lodivsect6 .sec6img1", {
    x:-1000,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section6",
        scroller: "body",
        start: "top 30%",
        end: "top 0%"
    }
})
gsap.from(".section6 .lodivsect6 .sec6img2", {
    x:1000,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section6",
        scroller: "body",
        start: "top 30%",
        end: "top 0%"
    }
})


gsap.from(".section7 .sec7updiv p", {
    y:100,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section7",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section7 .sec7updiv .p1", {
    y:-100,
    opacity:0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section7",
        scroller: "body",
        start: "top 70%",
        end: "top a0%"
    }
})

gsap.from(".section7 .sec7lodiv", {
    width:50,
    opacity:0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section7",
        scroller: "body",
        start: "top 30%",
        end: "top 0%"
    }
})

gsap.from(".section8 .sec8img", {
    x:-1000,
    opacity:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".section8",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".section8 .sec8data", {
    x:1000,
    opacity:0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".section8",
        scroller: "body",
        start: "top 70%",
        end: "top 0%"
    }
})
gsap.from(".upfooter .upfoot1 div", {
    y:100,
    opacity:0,
    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from("footer .upfoot2 .text-box h1", {
    opacity:0,
    duration: 2.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from("footer .upfoot2 .text-box p", {
    opacity:0,
    duration: 2.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from("footer .upfoot2 .text-box div", {
    opacity:0,
    duration: 2.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 60%",
        end: "top 0%"
    }
})
gsap.from(".lofooter div", {
    y:100,
    opacity:0,
    duration: 1.5,
    stagger: 0.2,
    scrollTrigger: {
        trigger: "footer",
        scroller: "body",
        start: "top 20%",
        end: "top 20%"
    }
})