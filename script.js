import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.getElementsByClassName("scroll-tracker")[0]

const scrollTrackingTimeline  = new ScrollTimeline({
    scrolloffsets:[CSS.percent(0),CSS.percent(100)]
});

scrollTracker.animate(
    {
        transform:["scaleX(0)","scaleX(1)"]
    },
    {
        duration:1000,
        timeline:scrollTrackingTimeline
    }
)

// const showcase = document.getElementsByClassName("showcase")

// for( let i=0 ;i<showcase.length;i++){

//     const sectionOffsetTop = showcase[i].offsetTop;
//     const sectionHeight = showcase[i].offsetHeight;
//     const showcaseAnimationTimeline = new ScrollTimeline({
//         scrolloffsets:[CSS.px(sectionOffsetTop + sectionHeight),CSS.px(sectionOffsetTop)]
//     });

//     showcase[i].animate(
//         {
//           transform:["translateX(100rem)","translateX(0)"]  
//         },
//         {
//             duration: 1000,
//             timeline:showcaseAnimationTimeline
//         }
//     )
// }

// showcase.forEach(function(section){
//     const sectionOffsetTop = section.offsetTop;
//     const sectionHeight = section.offsetHeight;
//     const showcaseAnimationTimeline = new ScrollTimeline({
//         scrolloffsets:[CSS.px(sectionOffsetTop + sectionHeight),CSS.px(sectionOffsetTop)]
//     });

//     section.animate(
//         {
//           transform:["translateX(100rem)","translateX(0)"]  
//         },
//         {
//             duration: 1000,
//             timeline:showcaseAnimationTimeline
//         }
//     )
// })
