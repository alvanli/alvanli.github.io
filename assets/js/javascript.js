$(document).ready(function () {
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
    newDiv();
});

function newDiv() {
    var $div = $("<div class='moveObj'>");
    $(".animatedDivs").append($div);
    animateDiv();

    function animateDiv() {
        var newq = makeNewPosition();
        var speed = Math.floor(Math.random()*8000) + 2000;
        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });

    };
}

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 100;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}




jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 768) {
      $(".nav-link").addClass("dropdown-item");
      $(".nav-item").not(".dropdown").addClass("hideThis");
      $(".dropdown").removeClass("hideThis");

      $(".mySlidesL").css("height", "300px");
      $(".textSlidesL").css("top", "15%");
      $(".textSlidesL").css("left", "40%");
      $(".descSlidesL").css("left", "40%");
      $(".descSlidesL").css("max-width", "90%");
    } else if (ww >= 768) {
      $(".nav-item").not(".dropdown").removeClass("hideThis");
      $(".dropdown").addClass("hideThis");

      $(".mySlidesL").css("height", "200px");
      $(".textSlidesL").css("top", "45%");
      $(".textSlidesL").css("left", "30%");
      $(".descSlidesL").css("left", "65%");
      $(".descSlidesL").css("max-width", "40%");
    };
  };
  $(window).resize(function() {
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesL");
  var dots = document.getElementsByClassName("smolFoto");
  //var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}

window.onscroll = function() {
  "use strict";
  var $nav = $(".navbar-fixed-bottom");
  if ($(document).scrollTop() < 400) {
    $("body").get(0).style.setProperty("--font-color", " #ffffff");
    $("body").get(0).style.setProperty("--bkgd-color", " #003b6f");
    $(".nav-link").removeClass("active");
    $(".nav-link:eq(0)").addClass("active");

  } else if (($(document).scrollTop() >= 400) && ($(document).scrollTop() < 800)) {
    $("body").get(0).style.setProperty("--bkgd-color", " #ffffff");
    $("body").get(0).style.setProperty("--font-color", " #003b6f");
    $(".nav-link").removeClass("active");
    $(".nav-link:eq(1)").addClass("active");

    // $("body").attr("style","--bkgd-color: #ffffff");
    // $("body").attr("style","--font-color: #003b6f");
  } else if (($(document).scrollTop() >= 800) && ($(document).scrollTop() < 1200)) {
    $(".nav-link").removeClass("active");
    $(".nav-link:eq(2)").addClass("active");
  } else if (($(document).scrollTop() >= 1200) && ($(document).scrollTop() >= 1200)) {
    $(".nav-link").removeClass("active");
    $(".nav-link:eq(3)").addClass("active");
  }
  if ($(document).scrollTop() > 100) {
    $(".moveObj").css("opacity", "0");
  } else {
    $(".moveObj").css("opacity", "0.2");
  }
};

$("body").on("click", function() {
  if (!$(".dropdown").hasClass("show")) {
    $(".newIcon").removeClass("fa-book-open");
    $(".newIcon").addClass("fa-book");
  }
});

$(".dropdown-toggle").on("click", function() {
  if ($(".dropdown").hasClass("show")) {
    $(".newIcon").removeClass("fa-book-open");
    $(".newIcon").addClass("fa-book");
  } else {
    $(".newIcon").removeClass("fa-book");
    $(".newIcon").addClass("fa-book-open");
  }
});



$(".dropdown-item").on("click", function() {
  if ($(".dropdown").hasClass("show")) {
    $(".newIcon").removeClass("fa-book-open");
    $(".newIcon").addClass("fa-book");
  } else {
    $(".newIcon").removeClass("fa-book");
    $(".newIcon").addClass("fa-book-open");
  }
});



$(".container1").on("click", function() {
  $(this).find(".content-expand").fadeToggle();
});


$(".iconB").on("click", function() {
  if ($(".iconC").hasClass("fa-book")) {
    $(".iconC").removeClass("fa-book");
    $(".iconC").addClass("fa-book-open");
  } else {
    $(".iconC").removeClass("fa-book-open");
    $(".iconC").addClass("fa-book");
  }
  //$(".shide").toggleClass("hideThis");
  $(".shide").fadeToggle();
});
