import { gsap } from "gsap";

function move_left_ar() {
  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  });
  gsap.to(".logo_diriyah", {
    padding: '118px 0 0px 120px',
    top: '0',
    width: '100%',
    duration: 1,
    delay: 1,
    transform: 'translate(-50%, 0%)'
  });

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.fromTo(".home_ar .dg_afrs_screen", {
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
  gsap.fromTo(".home_ar .header-menu-elements", {
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
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: -220,
  });
  gsap.fromTo(".dg_ft_cont_ar", {
    bottom: -220,
  }, {
    bottom: 0,
    opacity: 1,
  });
}

export default move_left_ar;