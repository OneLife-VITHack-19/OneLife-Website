var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: ".nav-logo2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle(".nav-logo2", "show") // add class to reveal
.addTo(controller);