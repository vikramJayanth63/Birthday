const flightPath = {
    curviness : 1.75,
    autoRotate : true,
    values : [
        {x : 80,y : 0},
        {x : 100,y : -150},
        {x : 30,y : -75},
        {x : 70,y : 0},
        {x : 170 , y:-20},
        {x : 210,y : -50},
        {x : window.innerWidth,y:-250}
    ] 
};

const tween = new TimelineLite();
tween.add(
    TweenLite.to('.paper-plane',1,{
        bezier : flightPath,
        ease : Power1.easeInOut
    })
);


const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement : ".animation",
    duration : 2000,
    triggerHook : .5
})
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);

