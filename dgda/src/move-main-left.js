import { gsap } from "gsap";

function move_main_left() {
    ///////////////////english animations///////////////////////
    gsap.fromTo("#en_version", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .dg_afrs_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .dg_sm_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .ml_lights_screen", {
      opacity: 1,
      x: -3000,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .dg_bf_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .dg_vwalls_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_en .dg_lights_screen", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
  
  
    ////////////// Arabic Movement /////////////
    gsap.fromTo(".home_ar .dg_afrs_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    });
    gsap.fromTo(".home_ar .dg_sm_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_ar .ml_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_ar .dg_bf_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_ar .dg_vwalls_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".home_ar .dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo("#ar_version", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    });
  
    //////// footer movement////////////
    gsap.fromTo(".dg_ft_cont_ar", {
      bottom: -220,
    }, {
      bottom: 0,
    });
    gsap.fromTo(".dg_ft_cont_en", {
      bottom: 0,
    }, {
      bottom: -220,
    });
  }

  export default move_main_left;