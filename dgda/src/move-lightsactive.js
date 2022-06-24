import { gsap } from "gsap";

function move_lightsactive() {
    gsap.to(".dg_vwalls_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
    gsap.fromTo(".dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".dg_sm_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
    // gsap.to("home_en .ml_lights_screen", {
    //   opacity: 0,
    //   x: -3000,
    //   duration: 1,
    //   visibility: 'visible',
    // });
    gsap.to(".dg_bf_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    });
  }

  export default move_lightsactive;