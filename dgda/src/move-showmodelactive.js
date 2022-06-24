import { gsap } from "gsap";

function move_showmodelactive() {
      gsap.to(".main_en .dg_rs_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".main_en .dg_sm_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".main_en .dg_vwalls_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".main_en .ml_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".main_en .dg_lights_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.to(".main_en .dg_bf_screen", {
        opacity: 0,
        x: 3000,
        duration: 1,
        visibility: 'visible',
      });
      gsap.fromTo(".main_en .dg_afrs_screen", {
        opacity: 0,
        x: -3000,
        duration: 1,
        visibility: 'visible',
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        visibility: 'visible',
      });
  }

  // function move_showmodelactive(elem) {
  //   var nextSibling = $(elem).parent().next();
  //   $(nextSibling).find('a').attr('data-fromdir', 'right');
    
  //   var fromdir = elem.getAttribute('data-fromdir');
  //   console.log(fromdir)
  //   if(fromdir === 'right') {
  //     gsap.to(".dg_rs_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.to(".dg_vwalls_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.to(".ml_lights_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.to(".dg_lights_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.to(".dg_bf_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.fromTo(".dg_afrs_screen", {
  //       opacity: 0,
  //       x: -3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //   } else {
  //     gsap.fromTo(".dg_afrs_screen", {
  //       opacity: 0,
  //       x: -3000,
  //       duration: 1,
  //       visibility: 'visible',
  //     }, {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //       visibility: 'visible',
  //     });
  //     gsap.to(".dg_lights_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1
  //     });
  //     gsap.to(".dg_sm_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1
  //     });
  //     gsap.to(".ml_lights_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1
  //     });
  //     gsap.to(".dg_bf_screen", {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1
  //     });
      
  //     gsap.fromTo(".dg_vwalls_screen", {
  //       opacity: 1,
  //       x: 0,
  //       duration: 1,
  //     }, {
  //       opacity: 0,
  //       x: 3000,
  //       duration: 1,
  //     });
  //   }
  // }

  export default move_showmodelactive;