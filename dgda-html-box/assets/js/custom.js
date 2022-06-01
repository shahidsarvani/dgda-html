function move_left() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.fromTo(".dg_afrs_screen", {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });

  gsap.fromTo(".header-menu-elements", {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
  gsap.to(".dg_ft_cont", {
    bottom: 0,
  });

  
  // gsap.from(".dg_afrs_screen", {
  //   opacity: 0,
  //   x: 3000,
  //   duration: 2,
  //   display: 'flex',
  //   visibility: 'visible',
  //   onComplete: a1
  // });
  // function a1 {
  //   $('#dg_afrs_screen')
  // }
}

function move_startshow_left() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.fromTo(".dg_sm_screen", {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
}
function move_startshow_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_sm_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'visible',
  });
}

function move_start_modellights_left() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.fromTo(".ml_lights_screen", {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
}
function move_start_modellights_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
  gsap.fromTo(".ml_lights_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'visible',
  });
}

function move_start_basementfloors_left() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -6000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.fromTo(".dg_bf_screen", {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
}
function move_start_basementfloors_right() {
  gsap.to(".dg_rs_screen", {
    opacity: 0,
    x: -3000,
    duration: 2
  });
  gsap.to(".dg_afrs_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'visible',
  });
  gsap.fromTo(".dg_bf_screen", {
    opacity: 1,
    x: 0,
    duration: 2,
    visibility: 'hidden',
  }, {
    opacity: 0,
    x: 3000,
    duration: 2,
    visibility: 'visible',
  });
}

$(document).ready(function () {


  $("#main_video_btn").click(function (e) {
    e.preventDefault();
    $(".dg_vw_screen").fadeOut();
    $("#main_video").fadeOut();
    $('.load_log_col .logo_diriyah').addClass('startanim');
    $('.dg_rs_row').addClass('firstsecanim');
    $('.load_log_col').addClass('logowrapanim');
    // $(".dg_vw_screen").fadeOut("slow");
    // $(".dg_vw_screen").fadeOut(3000);
    // $("#main_video").fadeOut("slow");
    // $("#main_video").fadeOut(3000);
    $("#dg_rs_screen").fadeIn();
    $("#dg_rs_screen").fadeIn("slow");
    $("#dg_rs_screen").fadeIn(5000);
  });

  // $("#diriyah-room").click(function(e){
  //   e.preventDefault();
  //   $('#dg_rs_screen').addClass('firstsecanimOut');
  //   $('#dg_afrs_screen').addClass('firstsec');
  //   $("#header").fadeIn();
  //   $("#header").fadeIn("slow");
  // });

  // Added features section for desktop
  $(".ml_dg_anchor1_wrap").click(function () {
    if ($(".ml_dg_anchor1_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
      $(".ml_content_container1").removeClass("active");
    } else {
      $(".ml_dg_anchor1_wrap").addClass("active");
      $(".ml_dg_antag1_wrap").addClass("active");
      $(".ml_content_container1").addClass("active");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
      $(".ml_content_container2").removeClass("active");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
      $(".ml_content_container3").removeClass("active");
    }
  });

  $(".ml_dg_anchor2_wrap").click(function () {
    if ($(".ml_dg_anchor2_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
      $(".ml_content_container2").removeClass("active");
    } else {
      $(".ml_dg_anchor2_wrap").addClass("active");
      $(".ml_dg_antag2_wrap").addClass("active");
      $(".ml_content_container2").addClass("active");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
      $(".ml_content_container1").removeClass("active");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
      $(".ml_content_container3").removeClass("active");
    }
  });

  $(".ml_dg_anchor3_wrap").click(function () {
    if ($(".ml_dg_anchor3_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
      $(".ml_content_container3").removeClass("active");
    } else {
      $(".ml_dg_anchor3_wrap").addClass("active");
      $(".ml_dg_antag3_wrap").addClass("active");
      $(".ml_content_container3").addClass("active");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
      $(".ml_content_container1").removeClass("active");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
      $(".ml_content_container2").removeClass("active");
    }
  });

})


