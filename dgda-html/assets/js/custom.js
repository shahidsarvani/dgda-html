$(document).ready(function () {

  // Added features section for desktop
  $(".ml_dg_anchor1_wrap").click(function () {
    if ($(".ml_dg_anchor1_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
    } else {
      $(".ml_dg_anchor1_wrap").addClass("active");
      $(".ml_dg_antag1_wrap").addClass("active");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
    }
  });

  $(".ml_dg_anchor2_wrap").click(function () {
    if ($(".ml_dg_anchor2_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
    } else {
      $(".ml_dg_anchor2_wrap").addClass("active");
      $(".ml_dg_antag2_wrap").addClass("active");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
    }
  });

  $(".ml_dg_anchor3_wrap").click(function () {
    if ($(".ml_dg_anchor3_wrap").hasClass("active")) {
      console.log("same tab");
      $(".ml_dg_anchor3_wrap").removeClass("active");
      $(".ml_dg_antag3_wrap").removeClass("active");
    } else {
      $(".ml_dg_anchor3_wrap").addClass("active");
      $(".ml_dg_antag3_wrap").addClass("active");
      $(".ml_dg_anchor1_wrap").removeClass("active");
      $(".ml_dg_antag1_wrap").removeClass("active");
      $(".ml_dg_anchor2_wrap").removeClass("active");
      $(".ml_dg_antag2_wrap").removeClass("active");
    }
  });
    
})


