var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: ".nav-logo2",
    triggerHook: 0.8, 
    duration: 800, 
    offset: 100 
})
.setClassToggle(".nav-logo2", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".exp",
    triggerHook: 0.8, 
    duration: 800, 
    offset: 50 
})
.setClassToggle(".exp", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".text2",
    triggerHook: 1, 
    duration: 800,
    offset: 0
})
.setClassToggle(".text2", "show-test2") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".nav-logo3",
    triggerHook: 0.8, 
    duration: 800, 
    offset: 100
})
.setClassToggle(".nav-logo3", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".gloves",
    triggerHook: 0.8,
    duration: 800,
    offset: 50 
})
.setClassToggle(".gloves", "show") // add class to reveal
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".text3",
    triggerHook: 0.8,
    duration: 800, 
    offset: 90
})
.setClassToggle(".text3", "show-test3") // add class to reveal
.addTo(controller);
