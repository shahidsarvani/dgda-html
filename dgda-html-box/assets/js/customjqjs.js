$(".navbar-nav a.nav-link-en1").click(function () {
    if ($(".navbar-nav a.nav-link-en1").classList.contains("active")) {
      $(".navbar-nav a.nav-link-en1").classList.remove("active");
    } else {
      $(".navbar-nav a.nav-link-en1").classList.add("active");
      $(".navbar-nav a.nav-link-en2").classList.remove("active");
    }
  });
  $(".navbar-nav a.nav-link-en2").click(function () {
    if ($(".navbar-nav a.nav-link-en2").classList.contains("active")) {
      $(".navbar-nav a.nav-link-en2").classList.remove("active");
    } else {
      $(".navbar-nav a.nav-link-en2").classList.add("active");
      $(".navbar-nav a.nav-link-en1").classList.remove("active");
    }
  });


  $(".navbar-nav a.nav-link-ar1").click(function () {
    if ($(".navbar-nav a.nav-link-ar1").classList.contains("active")) {
      $(".navbar-nav a.nav-link-ar1").classList.remove("active");
    } else {
      $(".navbar-nav a.nav-link-ar1").classList.add("active");
      $(".navbar-nav a.nav-link-ar2").classList.remove("active");
    }
  });
  $(".navbar-nav a.nav-link-ar2").click(function () {
    if ($(".navbar-nav a.nav-link-ar2").classList.contains("active")) {
      $(".navbar-nav a.nav-link-ar2").classList.remove("active");
    } else {
      $(".navbar-nav a.nav-link-ar2").classList.add("active");
      $(".navbar-nav a.nav-link-ar1").classList.remove("active");
    }
  });

  
  document.getElementByClassName("main_video_btn").click(function (e) {
    e.preventDefault();
    this.css('pointer-events', 'none');
  });

  document.getElementById("diriyah-room").click(function (e) {
    e.preventDefault();
    $(".navbar-nav .nav-item:first-child").classList.add("active");
  });

  document.getElementById("main_video_btn").click(function (e) {
    e.preventDefault();
    document.getElementById("main_video_btn").prop( "disabled", true );
  });

  document.querySelectorAll(".dg_ft_nav_link_en a").click(function (e) {
    e.preventDefault(); 
    $("html").attr("lang", "ar");
  });
  document.querySelectorAll(".dg_ft_nav_link_ar a").click(function (e) {
    e.preventDefault();
    
    
    $("html").attr("lang", "en");
  });

  document.getElementById("diriyah-room").click(function (e) {
    e.preventDefault();
    document.getElementById("dg_rs_screen").classList.add("firstsecanimOut");
    document.getElementById("dg_afrs_screen").classList.add("firstsec");
    document.getElementById("header").fadeIn();
    document.getElementById("header").fadeIn("slow");
  });

  
  document.getElementByClassName("ml_dg_anchor1_wrap").click(function () {
    if (document.getElementByClassName("ml_dg_anchor1_wrap").classList.contains("active")) {
      console.log("same tab");
      document.getElementByClassName("ml_dg_anchor1_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag1_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container1").classList.remove("active");
    } else {
      document.getElementByClassName("ml_dg_anchor1_wrap").classList.add("active");
      document.getElementByClassName("ml_dg_antag1_wrap").classList.add("active");
      document.getElementByClassName("ml_content_container1").classList.add("active");
      document.getElementByClassName("ml_dg_anchor2_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag2_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container2").classList.remove("active");
      document.getElementByClassName("ml_dg_anchor3_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag3_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container3").classList.remove("active");
    }
  });

  document.getElementByClassName("ml_dg_anchor2_wrap").click(function () {
    if (document.getElementByClassName("ml_dg_anchor2_wrap").classList.contains("active")) {
      console.log("same tab");
      document.getElementByClassName("ml_dg_anchor2_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag2_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container2").classList.remove("active");
    } else {
      document.getElementByClassName("ml_dg_anchor2_wrap").classList.add("active");
      document.getElementByClassName("ml_dg_antag2_wrap").classList.add("active");
      document.getElementByClassName("ml_content_container2").classList.add("active");
      document.getElementByClassName("ml_dg_anchor1_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag1_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container1").classList.remove("active");
      document.getElementByClassName("ml_dg_anchor3_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag3_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container3").classList.remove("active");
    }
  });

  document.getElementByClassName("ml_dg_anchor3_wrap").click(function () {
    if (document.getElementByClassName("ml_dg_anchor3_wrap").classList.contains("active")) {
      console.log("same tab");
      document.getElementByClassName("ml_dg_anchor3_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag3_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container3").classList.remove("active");
    } else {
      document.getElementByClassName("ml_dg_anchor3_wrap").classList.add("active");
      document.getElementByClassName("ml_dg_antag3_wrap").classList.add("active");
      document.getElementByClassName("ml_content_container3").classList.add("active");
      document.getElementByClassName("ml_dg_anchor1_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag1_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container1").classList.remove("active");
      document.getElementByClassName("ml_dg_anchor2_wrap").classList.remove("active");
      document.getElementByClassName("ml_dg_antag2_wrap").classList.remove("active");
      document.getElementByClassName("ml_content_container2").classList.remove("active");
    }
  });

  document.querySelectorAll(".dg_ft_nav_item1 a").click(function () {
    if (document.getElementByClassName("dg_ft_nav_item1").classList.contains("active")) {
      document.getElementByClassName("dg_ft_nav_item1").classList.remove("active");
    } else {
      document.getElementByClassName("dg_ft_nav_item1").classList.add("active");
      document.getElementByClassName("dg_ft_nav_item2").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item3").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item4").classList.remove("active");
    }
  });
  document.querySelectorAll(".dg_ft_nav_item2 a").click(function () {
    if (document.getElementByClassName("dg_ft_nav_item2").classList.contains("active")) {
      document.getElementByClassName("dg_ft_nav_item2").classList.remove("active");
    } else {
      document.getElementByClassName("dg_ft_nav_item2").classList.add("active");
      document.getElementByClassName("dg_ft_nav_item1").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item3").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item4").classList.remove("active");
    }
  });
  document.querySelectorAll(".dg_ft_nav_item3 a").click(function () {
    if (document.getElementByClassName("dg_ft_nav_item3").classList.contains("active")) {
      document.getElementByClassName("dg_ft_nav_item3").classList.remove("active");
    } else {
      document.getElementByClassName("dg_ft_nav_item3").classList.add("active");
      document.getElementByClassName("dg_ft_nav_item1").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item2").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item4").classList.remove("active");
    }
  });
  document.querySelectorAll(".dg_ft_nav_item4 a").click(function () {
    if (document.getElementByClassName("dg_ft_nav_item4").classList.contains("active")) {
      document.getElementByClassName("dg_ft_nav_item4").classList.remove("active");
    } else {
      document.getElementByClassName("dg_ft_nav_item4").classList.add("active");
      document.getElementByClassName("dg_ft_nav_item1").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item2").classList.remove("active");
      document.getElementByClassName("dg_ft_nav_item3").classList.remove("active");
    }
  });