import { gsap } from "gsap";
import $ from "jquery";

function move_showmodelactive(elem) {
    var nextSibling = $(elem).parent().next();
    $(nextSibling).find('a').attr('data-fromdir', 'right');
    
    var fromDir = elem.getAttribute('data-fromDir');
    console.log(fromDir)
    if(fromDir == 'right') {
      gsap.to(".dg_rs_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      });
      gsap.to(".dg_vwalls_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      });
      // gsap.to("home_ar .ml_lights_screen", {
      //   opacity: 0,
      //   x: 3000,
      //   duration: 1,
      //   visibility: 'hidden',
      // });
      gsap.to(".ml_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      });
      // gsap.to(".dg_bf_screen", {
      //   opacity: 0,
      //   x: 3000,
      //   duration: 1
      // });
      gsap.to(".dg_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      });
      gsap.to(".dg_bf_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'hidden',
      });
      gsap.fromTo(".dg_afrs_screen", {
        opacity: 0,
        x: -3000,
        duration: 1,
        visibility: 'hidden',
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
      });
    } else {
      gsap.fromTo(".dg_afrs_screen", {
        opacity: 0,
        x: -3000,
        duration: 1,
        visibility: 'hidden',
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".dg_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      gsap.to(".dg_sm_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      gsap.to(".ml_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      gsap.to(".dg_bf_screen", {
        opacity: 0,
        x: 3000,
        duration: 1
      });
      
      gsap.fromTo(".dg_vwalls_screen", {
        opacity: 1,
        x: 0,
        duration: 1,
      }, {
        opacity: 0,
        x: 3000,
        duration: 1,
      });
    }
  }

  export default move_showmodelactive;