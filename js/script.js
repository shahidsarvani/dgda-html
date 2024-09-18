$(document).ready(function () {
  var defaultAnimations = [
    "fade-in",
    "slide-left",
    "slide-right",
    "slide-up",
    "slide-down",
  ];

  // Establish WebSocket connection
  var socket = new WebSocket("ws://localhost:8080");

  socket.onopen = function () {
    console.log("WebSocket connection established");
  };

  socket.onerror = function (error) {
    console.log("WebSocket Error: " + error);
  };

  // Variable to prevent triggering slide change from receiving message
  var isReceiving = false;

  socket.onmessage = function (event) {
    console.log("Received raw message:", event.data); // Log the raw data
    try {
      var receivedData = JSON.parse(event.data);
      console.log("Parsed message:", receivedData); // Log the parsed data
      if (receivedData.action === "slideChange" && !isReceiving) {
        isReceiving = true;
        $(".slick-carousel").slick("slickGoTo", receivedData.slideIndex);
        isReceiving = false;
      }
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  };

  $(".slick-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: false,
    slidesToShow: 1,
    fade: true,
    speed: 500,
    cssEase: "linear",
    infinite: false,
    draggable: false,
  });

  $(".slick-carousel").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // console.log("beforeChange event triggered", currentSlide, nextSlide);
      // console.log("isReceiving:", isReceiving);
      if (!isReceiving) {
        var currentElement = $(slick.$slides[currentSlide]);
        var nextElement = $(slick.$slides[nextSlide]);
        currentElement.removeClass(defaultAnimations.join(" "));
        var animationClass =
          $(nextElement).data("animation") ||
          defaultAnimations[nextSlide % defaultAnimations.length];
        nextElement.addClass(animationClass);

        // Broadcast the slide change to the WebSocket server
        socket.send(
          JSON.stringify({ action: "slideChange", slideIndex: nextSlide })
        );
        console.log(`your current slide is ${currentSlide}`);
        // Make the API call to update the server with the slide change
        console.log(`Making API call to update slide ${nextSlide}`);
        fetch(`http://localhost:3001/api/room/2/play_pres/${nextSlide + 1}`)
          .then((response) => {
            console.log("Received response from API:", response);
            if (!response.ok) {
              return response.text().then((text) => {
                throw new Error(
                  `Network response was not ok: ${response.status} ${response.statusText} - ${text}`
                );
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log("API response data:", data);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      }
    }
  );

  $(".slick-carousel").on("afterChange", function (event, slick, currentSlide) {
    var currentElement = $(slick.$slides[currentSlide]);
    currentElement.removeClass(defaultAnimations.join(" "));
  });

  $("a[data-slide]").click(function (e) {
    e.preventDefault();
    var slideno = $(this).data("slide");
    $(".slick-carousel").slick("slickGoTo", slideno);

    // Broadcast the slide change to the WebSocket server
    if (!isReceiving) {
      socket.send(
        JSON.stringify({ action: "slideChange", slideIndex: slideno })
      );

      // Make the API call to update the server with the slide change
      console.log(`Making API call to update slide ${slideno}`); // Log before fetch
      fetch(`http://localhost:3001/api/room/2/play_pres/${slideno}`)
        .then((response) => {
          console.log("Received response from API:", response); // Log the response
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("API response data:", data); // Handle API response if needed
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  });
});
