$(document).ready(function(e){
    $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    
});
window.scroll({
  top:0, 
  left: 0, 
  behavior: 'smooth'
});
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function(e){
    $('.carousel').slick({
    slidesToShow: 1,
    dots:true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
    
});
window.scroll({
  top:400, 
  left: 0, 
  behavior: 'smooth'
});
//Get the button
var mybutton = document.getElementById("myBtn");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var message = "";

$("#submitBtn").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "https://formspree.io/f/mleopyob", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});
// var sbtBtn = document.getElementById('submitBtn');

// sbtBtn.addEventListener('click', function(){
//   window.location.href = "thanks.html";

// })
