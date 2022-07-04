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

const showcase = document.getElementsByClassName("showcase")

for( let i=0 ;i<showcase.length;i++){

    const sectionOffsetTop = showcase[i].offsetTop;
    const sectionHeight = showcase[i].offsetHeight;
    const showcaseAnimationTimeline = new ScrollTimeline({
        scrolloffsets:[CSS.px(sectionOffsetTop + sectionHeight - window.innerHeight),CSS.px(sectionOffsetTop)]
    });

    showcase[i].animate(
        {
          transform:["translateY(6rem)","translateY(0)"],
          transform:["scaleX(1)","scaleX(0.9)"]

        },
        {
            duration: 1000,
            timeline:showcaseAnimationTimeline
        }
    )
}
