import { gsap } from "gsap";

function move_left_ar() {
  gsap.to(".diriyah_room_page", {
    opacity: 1,
    display: 'block',
    duration: 1,
  });
  gsap.to(".wadi_e_safar_room_page", {
      opacity: 0,
      display: 'none',
      duration: 1,
  });
  gsap.to(".logo_diriyah .ar_logo", {
    opacity: 0,
    display: 'none',
    left: '0',
    duration: 0,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".logo_diriyah", {
    left: '0',
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .logo_diriyah", {
    left: 'unset',
    right: '0',
    duration: 1,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .eng_logo", {
    display: 'none',
    duration: 0,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .logo_diriyah .ar_logo", {
    opacity: 1,
    // padding: '118px 120 0px 0px',
    display: 'block',
    left: 'unset',
    right: 0,
    duration: 0,
    delay: 0,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".header-arabic-wrap .lang-switcher", {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
    duration: 1,
    delay: 0,
  })
  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  })







  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  });
  // gsap.to(".logo_diriyah", {
  //   padding: '118px 0 0px 120px',
  //   top: '0',
  //   width: '100%',
  //   duration: 1,
  //   delay: 1,
  //   transform: 'translate(-50%, 0%)'
  // });

  ///////////////////arabic animations///////////////////////
  gsap.to(".main_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.fromTo(".main_ar .dg_afrs_screen", {
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
  gsap.fromTo(".header-arabic-wrap .header-menu-elements", {
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
  gsap.to(".main_ar .dg_rs_screen", {
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