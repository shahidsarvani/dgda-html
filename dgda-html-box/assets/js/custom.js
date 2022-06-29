//////////// Main section movement/////////////////////

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

function move_main_right() {
  ///////////////////arabic animations///////////////////////
  gsap.fromTo("#en_version", {
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
  gsap.fromTo(".home_en .dg_afrs_screen", {
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
  gsap.fromTo(".home_en .dg_sm_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_en .ml_lights_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_en .dg_bf_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_en .dg_vwalls_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_en .dg_lights_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });




  gsap.fromTo("#ar_version", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_sm_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .ml_lights_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_bf_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_vwalls_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_lights_screen", {
    opacity: 0,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".dg_ft_cont_ar", {
    bottom: 0,
  }, {
    bottom: -220,
  });
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: 0,
  });
}




////////// End Main section movement //////////////////

function splash_video_fade() {
  // setTimeout(function() {
  //   document.addEventListener("click", handler, true);
  // }, 4000)
  // function handler(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  // }
  gsap.to(".dg_vw_screen", {
    display: 'none',
    duration: 1
  });
  // gsap.to(".main_video_btn", {
  //   pointer-event: 'none',
  //   duration: 1
  // });
  gsap.to(".logo_diriyah", {
    padding: '118px 0 0px 120px',
    top: '0',
    width: '100%',
    duration: 1,
    delay: 1,
    transform: 'translate(-50%, 0%)'
  });
  gsap.to(".logo_diriyah", {
    left: '36%',
    duration: 1,
    delay: 2,
    transform: 'translate(0%, 0%)'
  });
  gsap.to(".home_ar .logo_diriyah", {
    padding: '118px 120px 0px 0px',
    top: '0',
    width: '100%',
    duration: 1,
    delay: 1,
    transform: 'translate(50%, 0%)'
  });
  gsap.to(".home_ar .logo_diriyah", {
    left: 'unset',
    right: '0',
    duration: 1,
    delay: 2,
    transform: 'translate(0%, 0%)'
  });
  gsap.to("#header", {
    // position: 'relative',
    position: 'absolute',
    delay: 3,
  });
  gsap.from(".dg_rs_screen", {
    opacity: 1,
    x: 3000,
    duration: 1,
    delay: 2
  });
  gsap.fromTo(".overlay_sc", {
    opacity: 1,
    x: 3000,
    duration: 1,
    delay: 2
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2
  });
  gsap.fromTo(".overlay_sc", {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 2
  }, {
    opacity: 1,
    x: -3000,
    duration: 1,
    delay: 3
  });
  

}
function move_left_en() {
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
  gsap.to(".lang-switcher", {
    opacity: 1,
    visibility: 'visible',
    duration: 1,
    delay: 1,
  })
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.fromTo(".dg_afrs_screen", {
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
  gsap.fromTo(".header-menu-elements", {
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
  gsap.fromTo(".dg_ft_cont_ar", {
    bottom: -220,
  }, {
    bottom: -220,
  });
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: 0,
    opacity: 1,
  });
}


function move_left_ar() {
  // gsap.to(".dg_rs_screen", {
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1
  // });
  // gsap.fromTo(".dg_afrs_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });
  // gsap.fromTo(".header-menu-elements", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });

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
  gsap.fromTo(".dg_ft_cont_ar", {
    bottom: -220,
  }, {
    bottom: -220,
  });
  gsap.fromTo(".dg_ft_cont_en", {
    bottom: -220,
  }, {
    bottom: 0,
  });
}

function move_startshow_left() {
  gsap.to(".title_show_control", {
    opacity: 1,
    display: 'block',
    duration: 1,
    visibility: 'visible',
  });
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  // gsap.fromTo(".dg_sm_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });
  gsap.fromTo(".dg_sc_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 6000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  // gsap.fromTo(".home_ar .dg_sm_screen", {
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });

}


function move_startshow_back() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".dg_sm_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_sc_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".home_ar .dg_sm_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'visible',
  });

}





function move_startshow_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_sc_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_sm_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".home_ar .dg_sm_screen", {
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

}

function move_start_modellights_left() {
  gsap.to(".title_night_scene", {
    opacity: 1,
    display: 'block',
    duration: 1,
    visibility: 'visible',
  });
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  // gsap.fromTo(".dg_ss_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });
  gsap.fromTo(".ml_lights_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 6000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.fromTo(".home_ar .ml_lights_screen", {
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
  // gsap.fromTo(".home_ar .dg_ss_screen", {
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // }, {
  //   opacity: 1,
  //   x: 0,
  //   duration: 1,
  //   visibility: 'visible',
  // });

}
function move_start_modellights_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_ss_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'hidden',
  });

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".home_ar .dg_ss_screen", {
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

}

function move_start_basementfloors_left() {
  gsap.to(".title_basement_floors", {
    opacity: 1,
    display: 'block',
    duration: 1,
    visibility: 'visible',
  });
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.fromTo(".dg_bf_screen", {
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

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 6000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.fromTo(".home_ar .dg_bf_screen", {
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

}
function move_start_basementfloors_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_bf_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: 3000,
    duration: 1,
    visibility: 'visible',
  });

  ///////////////////arabic animations///////////////////////
  gsap.to(".home_ar .dg_rs_screen", {
    opacity: 0,
    x: 3000,
    duration: 1
  });
  gsap.to(".home_ar .dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  });
  gsap.fromTo(".home_ar .dg_bf_screen", {
    opacity: 1,
    x: 0,
    duration: 1,
    visibility: 'visible',
  }, {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'visible',
  });

}



function move_homeactive(elem) {
  var nextSibling = $(elem).parent().next();
  $(nextSibling).find('a').attr('data-fromdir', 'right');
  
  var fromDir = elem.getAttribute('data-fromDir');
  console.log(fromDir)
  if(fromDir == 'right') {
    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
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
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
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
    gsap.to(".dg_sc_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_ss_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.fromTo(".dg_ft_cont_en", {
      opacity: 1,
      bottom: 0,
      duration: 1,
    }, {
      opacity: 0,
      bottom: -220,
      duration: 1,
    });
    gsap.fromTo(".dg_rs_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    })
    gsap.fromTo(".header-menu-elements", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    })
    gsap.to(".logo_diriyah", {
      left: '36%',
      duration: 1,
      delay: 0,
      transform: 'translate(0%, 0%)'
    })
    gsap.to(".lang-switcher", {
      opacity: 0,
      visibility: 'hidden',
      duration: 1,
      delay: 0,
    })
    gsap.to(".logo_diriyah .ar_logo", {
      opacity: 1,
      display: 'block',
      left: '0',
      duration: 1,
      delay: 0,
      transform: 'translate(0%, 0%)'
    });
  } else {
    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".logo_diriyah .ar_logo", {
      opacity: 1,
      display: 'block',
      left: '0',
      duration: 1,
      delay: 0,
      transform: 'translate(0%, 0%)'
    })
    gsap.fromTo(".header-menu-elements", {
      opacity: 1,
      x: 0,
      duration: 1,
      visibility: 'visible',
    }, {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".logo_diriyah", {
      left: '36%',
      duration: 1,
      delay: 0,
      transform: 'translate(0%, 0%)'
    })
    gsap.to(".lang-switcher", {
      opacity: 0,
      visibility: 'hidden',
      duration: 1,
      delay: 0,
    })
    gsap.fromTo(".dg_rs_screen", {
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
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_sm_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_sc_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_ss_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".dg_bf_screen", {
      opacity: 0,
      x: 3000,
      duration: 1
    });
    gsap.fromTo(".dg_ft_cont_ar", {
      opacity: 1,
      bottom: 0,
      duration: 1,
    }, {
      opacity: 0,
      bottom: -220,
      duration: 1,
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




function move_showmodelactive(elem) {
  var nextSibling = $(elem).parent().next();
  $(nextSibling).find('a').attr('data-fromdir', 'right');
  
  var fromDir = elem.getAttribute('data-fromDir');
  console.log(fromDir)
  if(fromDir == 'right') {
    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'hidden',
    });
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
    gsap.to(".dg_sc_screen", {
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
    gsap.to(".title_show_control", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".title_night_scene", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".title_basement_floors", {
      opacity: 0,
      display: 'none',
      duration: 1,
      visibility: 'visible',
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
    gsap.to(".dg_rs_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'hidden',
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
    gsap.to(".dg_ss_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'visible',
    });
    gsap.to(".dg_sc_screen", {
      opacity: 0,
      x: 3000,
      duration: 1,
      visibility: 'visible',
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
function move_videowallsactive(elem) {
  var fromDir = elem.getAttribute('data-fromDir');
  console.log(fromDir)
  if (fromDir == 'right') {
    gsap.to(".dg_lights_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
    });
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
    });
    gsap.fromTo(".dg_vwalls_screen", {
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
    gsap.to(".dg_sm_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1, 
    });
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: -3000,
      duration: 1,
      visibility: 'hidden',
    });
    // gsap.to("home_en .ml_lights_screen", {
    //   opacity: 0,
    //   x: -3000,
    //   duration: 1,
    //   visibility: 'hidden',
    // });
    gsap.to(".dg_bf_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
    });
  } else {
    gsap.to(".dg_lights_screen", {
      opacity: 0,
      x: 3000,
      visibility: 'hidden',
      duration: 1,
    });
    gsap.to(".ml_lights_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
    });
    gsap.to(".dg_afrs_screen", {
      opacity: 0,
      x: -3000,
      visibility: 'hidden',
      duration: 1,
    });
    gsap.fromTo(".dg_vwalls_screen", {
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
  }
}
function move_vwalls_right() {
  gsap.fromTo(".dg_vwalls_screen", {
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
}

function move_lightsactive(elem) {
  var prevSibling = $(elem).parent().prev();
  // console.log(prevSibling);
  $(prevSibling).find('a').attr('data-fromdir', 'left')
  gsap.to(".dg_vwalls_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.fromTo(".dg_lights_screen", {
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
  gsap.to(".dg_sm_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  gsap.to(".ml_lights_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
  // gsap.to("home_en .ml_lights_screen", {
  //   opacity: 0,
  //   x: -3000,
  //   duration: 1,
  //   visibility: 'hidden',
  // });
  gsap.to(".dg_bf_screen", {
    opacity: 0,
    x: -3000,
    duration: 1,
    visibility: 'hidden',
  });
}







$(document).ready(function () {

  
  $("#dg_rs_screen a #diriyah-room").click(function () {
    if ($(".ft_model").hasClass("active")) {
      $(".ft_model").removeClass("active");
    } else {
      $(".ft_model").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  $(".ft_model").click(function () {
    if ($(".ft_model").hasClass("active")) {
      $(".ft_model").removeClass("active");
    } else {
      $(".ft_model").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  // $(".start_show_a").click(function () {
  //   if ($(".ft_model").hasClass("active")) {
  //     $(".ft_model").removeClass("active");
  //   } else {
  //     $(".ft_model").addClass("active");
  //     $(".ft_videowalls").removeClass("active");
  //     $(".ft_lights").removeClass("active");
  //     $(".ft_main_page").removeClass("active");
  //   }
  // });
  // $(".start_modelzone_a").click(function () {
  //   if ($(".ft_model").hasClass("active")) {
  //     $(".ft_model").removeClass("active");
  //   } else {
  //     $(".ft_model").addClass("active");
  //     $(".ft_videowalls").removeClass("active");
  //     $(".ft_lights").removeClass("active");
  //     $(".ft_main_page").removeClass("active");
  //   }
  // });
  // $(".start_basementfloors_a").click(function () {
  //   if ($(".ft_model").hasClass("active")) {
  //     $(".ft_model").removeClass("active");
  //   } else {
  //     $(".ft_model").addClass("active");
  //     $(".ft_videowalls").removeClass("active");
  //     $(".ft_lights").removeClass("active");
  //     $(".ft_main_page").removeClass("active");
  //   }
  // });
  $(".ft_videowalls").click(function () {
    if ($(".ft_videowalls").hasClass("active")) {
      $(".ft_videowalls").removeClass("active");
    } else {
      $(".ft_videowalls").addClass("active");
      $(".ft_model").removeClass("active");
      $(".ft_lights").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });
  $(".ft_lights").click(function () {
    if ($(".ft_lights").hasClass("active")) {
      $(".ft_lights").removeClass("active");
    } else {
      $(".ft_lights").addClass("active");
      $(".ft_videowalls").removeClass("active");
      $(".ft_model").removeClass("active");
      $(".ft_main_page").removeClass("active");
    }
  });

  // $(".dg_afrs_screen a").click(function () {
  //   $(".title_show_control").css('display', 'block');
  //   $(".title_show_control").css('opacity', '1');
  //   $(".title_show_control").css('visibility', 'visible');
  // })

  $(".dg_scen_optnon_item").click(function () {
    if ($(".dg_scen_optnon_item").hasClass("active")) {
      $(".dg_scen_optnon_item").removeClass("active");
    } else {
      $(".dg_scen_optnon_item").addClass("active");
      $(".dg_scen_optnoff_item").removeClass("active");
    }
  });
  $(".dg_scen_optnoff_item").click(function () {
    if ($(".dg_scen_optnoff_item").hasClass("active")) {
      $(".dg_scen_optnoff_item").removeClass("active");
    } else {
      $(".dg_scen_optnoff_item").addClass("active");
      $(".dg_scen_optnon_item").removeClass("active");
    }
  });

  $(".dg_scar_optnon_item").click(function () {
    if ($(".dg_scar_optnon_item").hasClass("active")) {
      $(".dg_scar_optnon_item").removeClass("active");
    } else {
      $(".dg_scar_optnon_item").addClass("active");
      $(".dg_scar_optnoff_item").removeClass("active");
    }
  });
  $(".dg_scar_optnoff_item").click(function () {
    if ($(".dg_scar_optnoff_item").hasClass("active")) {
      $(".dg_scar_optnoff_item").removeClass("active");
    } else {
      $(".dg_scar_optnoff_item").addClass("active");
      $(".dg_scar_optnon_item").removeClass("active");
    }
  });

  $(".dg_ss_optnon_item").click(function () {
    if ($(".dg_ss_optnon_item").hasClass("active")) {
      $(".dg_ss_optnon_item").removeClass("active");
    } else {
      $(".dg_ss_optnon_item").addClass("active");
      $(".dg_ss_optnoff_item").removeClass("active");
    }
  });
  $(".dg_ss_optnoff_item").click(function () {
    if ($(".dg_ss_optnoff_item").hasClass("active")) {
      $(".dg_ss_optnoff_item").removeClass("active");
    } else {
      $(".dg_ss_optnoff_item").addClass("active");
      $(".dg_ss_optnon_item").removeClass("active");
    }
  });

  // Added features section for desktop
  $(".navbar-nav a.nav-link-en1").click(function () {
    if ($(".navbar-nav a.nav-link-en1").hasClass("active")) {
      $(".navbar-nav a.nav-link-en1").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-en1").addClass("active");
      $(".navbar-nav a.nav-link-en2").removeClass("active");
    }
  });
  $(".navbar-nav a.nav-link-en2").click(function () {
    if ($(".navbar-nav a.nav-link-en2").hasClass("active")) {
      $(".navbar-nav a.nav-link-en2").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-en2").addClass("active");
      $(".navbar-nav a.nav-link-en1").removeClass("active");
    }
  });


  $(".navbar-nav a.nav-link-ar1").click(function () {
    if ($(".navbar-nav a.nav-link-ar1").hasClass("active")) {
      $(".navbar-nav a.nav-link-ar1").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-ar1").addClass("active");
      $(".navbar-nav a.nav-link-ar2").removeClass("active");
    }
  });
  $(".navbar-nav a.nav-link-ar2").click(function () {
    if ($(".navbar-nav a.nav-link-ar2").hasClass("active")) {
      $(".navbar-nav a.nav-link-ar2").removeClass("active");
    } else {
      $(".navbar-nav a.nav-link-ar2").addClass("active");
      $(".navbar-nav a.nav-link-ar1").removeClass("active");
    }
  });

  
  $(".main_video_btn").click(function (e) {
    e.preventDefault();
    $(this).css('pointer-events', 'none');
  });

  $("#diriyah-room").click(function (e) {
    e.preventDefault();
    $(".navbar-nav .nav-item:first-child").addClass('active');
  });

  $("#main_video_btn").click(function (e) {
    e.preventDefault();
    $("#main_video_btn").prop( "disabled", true );
  });

  $(".dg_ft_nav_link_en a").click(function (e) {
    e.preventDefault();
    // $("#ar_version").show();
    // $("#en_version").hide();
    $("html").attr("lang", "ar");
  });
  $(".dg_ft_nav_link_ar a").click(function (e) {
    e.preventDefault();
    // $("#en_version").show();
    // $("#ar_version").hide();
    $("html").attr("lang", "en");
  });

  // $("#main_video_btn").click(function (e) {
  //   e.preventDefault();
  //   $(".dg_vw_screen").fadeOut();
  //   $("#main_video").fadeOut();
  //   $('.load_log_col .logo_diriyah').addClass('startanim');
  //   $('.dg_rs_row').addClass('firstsecanim');
  //   $('.load_log_col').addClass('logowrapanim');
  //   // $(".dg_vw_screen").fadeOut("slow");
  //   // $(".dg_vw_screen").fadeOut(3000);
  //   // $("#main_video").fadeOut("slow");
  //   // $("#main_video").fadeOut(3000);
  //   $("#dg_rs_screen").fadeIn();
  //   $("#dg_rs_screen").fadeIn("slow");
  //   $("#dg_rs_screen").fadeIn(5000);
  // });

  $("#diriyah-room").click(function (e) {
    e.preventDefault();
    $('#dg_rs_screen').addClass('firstsecanimOut');
    $('#dg_afrs_screen').addClass('firstsec');
    $("#header").fadeIn();
    $("#header").fadeIn("slow");
  });

  // Added features section for desktop
  // $(".ml_dg_anchor1_wrap").click(function () {
  //   if ($(".ml_dg_anchor1_wrap").hasClass("active")) {
  //     console.log("same tab");
  //     $(".ml_dg_anchor1_wrap").removeClass("active");
  //     $(".ml_dg_antag1_wrap").removeClass("active");
  //     $(".ml_content_container1").removeClass("active");
  //   } else {
  //     $(".ml_dg_anchor1_wrap").addClass("active");
  //     $(".ml_dg_antag1_wrap").addClass("active");
  //     $(".ml_content_container1").addClass("active");
  //     $(".ml_dg_anchor2_wrap").removeClass("active");
  //     $(".ml_dg_antag2_wrap").removeClass("active");
  //     $(".ml_content_container2").removeClass("active");
  //     $(".ml_dg_anchor3_wrap").removeClass("active");
  //     $(".ml_dg_antag3_wrap").removeClass("active");
  //     $(".ml_content_container3").removeClass("active");
  //   }
  // });

  // $(".ml_dg_anchor2_wrap").click(function () {
  //   if ($(".ml_dg_anchor2_wrap").hasClass("active")) {
  //     console.log("same tab");
  //     $(".ml_dg_anchor2_wrap").removeClass("active");
  //     $(".ml_dg_antag2_wrap").removeClass("active");
  //     $(".ml_content_container2").removeClass("active");
  //   } else {
  //     $(".ml_dg_anchor2_wrap").addClass("active");
  //     $(".ml_dg_antag2_wrap").addClass("active");
  //     $(".ml_content_container2").addClass("active");
  //     $(".ml_dg_anchor1_wrap").removeClass("active");
  //     $(".ml_dg_antag1_wrap").removeClass("active");
  //     $(".ml_content_container1").removeClass("active");
  //     $(".ml_dg_anchor3_wrap").removeClass("active");
  //     $(".ml_dg_antag3_wrap").removeClass("active");
  //     $(".ml_content_container3").removeClass("active");
  //   }
  // });

  // $(".ml_dg_anchor3_wrap").click(function () {
  //   if ($(".ml_dg_anchor3_wrap").hasClass("active")) {
  //     console.log("same tab");
  //     $(".ml_dg_anchor3_wrap").removeClass("active");
  //     $(".ml_dg_antag3_wrap").removeClass("active");
  //     $(".ml_content_container3").removeClass("active");
  //   } else {
  //     $(".ml_dg_anchor3_wrap").addClass("active");
  //     $(".ml_dg_antag3_wrap").addClass("active");
  //     $(".ml_content_container3").addClass("active");
  //     $(".ml_dg_anchor1_wrap").removeClass("active");
  //     $(".ml_dg_antag1_wrap").removeClass("active");
  //     $(".ml_content_container1").removeClass("active");
  //     $(".ml_dg_anchor2_wrap").removeClass("active");
  //     $(".ml_dg_antag2_wrap").removeClass("active");
  //     $(".ml_content_container2").removeClass("active");
  //   }
  // });

  $(".dg_ft_nav_item1 a").click(function () {
    if ($(".dg_ft_nav_item1").hasClass("active")) {
      $(".dg_ft_nav_item1").removeClass("active");
    } else {
      $(".dg_ft_nav_item1").addClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item2 a").click(function () {
    if ($(".dg_ft_nav_item2").hasClass("active")) {
      $(".dg_ft_nav_item2").removeClass("active");
    } else {
      $(".dg_ft_nav_item2").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item3 a").click(function () {
    if ($(".dg_ft_nav_item3").hasClass("active")) {
      $(".dg_ft_nav_item3").removeClass("active");
    } else {
      $(".dg_ft_nav_item3").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item4").removeClass("active");
    }
  });
  $(".dg_ft_nav_item4 a").click(function () {
    if ($(".dg_ft_nav_item4").hasClass("active")) {
      $(".dg_ft_nav_item4").removeClass("active");
    } else {
      $(".dg_ft_nav_item4").addClass("active");
      $(".dg_ft_nav_item1").removeClass("active");
      $(".dg_ft_nav_item2").removeClass("active");
      $(".dg_ft_nav_item3").removeClass("active");
    }
  });

})


