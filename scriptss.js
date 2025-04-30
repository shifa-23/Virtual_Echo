function show() {
    gsap.registerPlugin(ScrollTrigger);
  
    // const locoScroll = new LocomotiveScroll({
    //   el: document.querySelector("#main"),
    //   smooth: true,
    //   lerp: 0.1, // optional: controls scroll speed
    //   multiplier: 1, // optional: scroll speed multiplier
    //   getDirection: true
    // });
  
    // Mark scroll updates for ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    // Update Locomotive when ScrollTrigger refreshes
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  
  show();
  
  // GSAP animation
  gsap.to("#myimg", {
    rotate: -15,
    scrollTrigger: {
      trigger: "#myimg",
      scroller: "#main",
     
      start: "top 5%",
      end: "top -300%",
      scrub: true,
      pin: true
      
    }
    
  });
  