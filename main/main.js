const fcol = document.querySelector(".fcolapse");
const scol = document.querySelector(".scolapse");
const feedcol = document.querySelector(".feedcolapse");

feed = 0;
store = 0;
friends = 0;

feedcol.addEventListener("click", ()=> {
    feed++; 
    if(feed%2 == 1){
        TweenLite.to(".feed", 2, {
            width: "7vw",
            left: "auto"
        });
        TweenLite.to(".feedcolapse", 2, {
            transform: "rotate(180deg)"
        });
    }
    else{
        TweenLite.to(".feed", 2, {
            width: "90vw"
        });
        TweenLite.to(".feedcolapse", 2, {
            transform: "rotate(0deg)"
        });
    }
    
})

scol.addEventListener("click", ()=> {
    store++; 
    if(store%2 == 1){
        TweenLite.to(".store", 2, {
            width: "12vw",
            left: "auto"
        });
        TweenLite.to(".scolapse", 2, {
            transform: "rotate(180deg)"
        });
    }
    else{
        TweenLite.to(".store", 2, {
            width: "95vw"
        });
        TweenLite.to(scol, 2, {
            transform: "rotate(0deg)"
        });
    }
    
})

fcol.addEventListener("click", ()=> {
    friends++; 
    if(friends%2 == 1){
        TweenLite.to(".friends", 2, {
            width: "17vw",
            left: "auto"
        });
        TweenLite.to(fcol, 2, {
            transform: "rotate(180deg)"
        });
    }
    else{
        TweenLite.to(".friends", 2, {
            width: "100vw"
        });
        TweenLite.to(fcol, 2, {
            transform: "rotate(0deg)"
        });
    }
    
})




console.log("okay");