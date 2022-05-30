$(document).ready(function () {

  $("#main_video_btn").click(function(e){
    e.preventDefault();
    $(".dg_vw_screen").fadeOut();
    $("#main_video").fadeOut();
    // $(".dg_vw_screen").fadeOut("slow");
    // $(".dg_vw_screen").fadeOut(3000);
    // $("#main_video").fadeOut("slow");
    // $("#main_video").fadeOut(3000);
    $("#dg_rs_screen").fadeIn();
    $("#dg_rs_screen").fadeIn("slow");
    $("#dg_rs_screen").fadeIn(5000);
    // $(".dg_vw_screen").hide();
    // $("#main_video").hide();
    // $(".dg_rs_screen").fadeIn();
    // $(".dg_rs_screen").fadeIn("slow");
    // $(".dg_rs_screen").fadeIn(3000);
  });

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


