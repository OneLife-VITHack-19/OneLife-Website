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
            width: "5vw"
        });
    }
    else{
        TweenLite.to(".feed", 2, {
            width: "100vw"
        });
    }
    
})

scol.addEventListener("click", ()=> {
    store++; 
    if(store%2 == 1){
        TweenLite.to(".store", 2, {
            width: "10vw"
        });
    }
    else{
        TweenLite.to(".store", 2, {
            width: "100vw"
        });
    }
    
})

fcol.addEventListener("click", ()=> {
    friends++; 
    if(friends%2 == 1){
        TweenLite.to(".friends", 2, {
            width: "15vw"
        });
    }
    else{
        TweenLite.to(".friends", 2, {
            width: "100vw"
        });
    }
    
})




console.log("okay");