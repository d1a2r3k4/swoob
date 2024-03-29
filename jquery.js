



$(document).ready(function(){
  $("#left,#hide22,#kategoriai").click(function(){
    $("#hide").fadeToggle();
  });

  // listi

  $("#list,#xx").click(function(){
    $(".listpage").fadeToggle();
  });



  // kategory

  $("#movie").hover(function(){
    $("#hide1").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#estetic").hover(function(){
    $("#hide2").css("display", "block");
    $('#hide1').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#relax").hover(function(){
    $("#hide3").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide1').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#eat").hover(function(){
    $("#hide4").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide1').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#baby").hover(function(){
    $("#hide5").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide1').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#fun").hover(function(){
    $("#hide6").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide1').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#sport").hover(function(){
    $("#hide7").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide1').css("display","none");
    $('#hide8').css("display","none");
    $('#hide9').css("display","none");
  });

  $("#avto").hover(function(){
    $("#hide8").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide1').css("display","none");
    $('#hide9').css("display","none");
  });


  $("#else").hover(function(){
    $("#hide9").css("display", "block");
    $('#hide2').css("display","none");
    $('#hide3').css("display","none");
    $('#hide4').css("display","none");
    $('#hide5').css("display","none");
    $('#hide6').css("display","none");
    $('#hide7').css("display","none");
    $('#hide8').css("display","none");
    $('#hide1').css("display","none");


   
  });


  });


  // owl

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     autoplay:true,
     autoplayTimeout:5000,
     autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// 




  // scrol

let lastScrollTop = 0;

 $(window).scroll(function() {

      var scrollTop = $(this).scrollTop();
      
      if (scrollTop > lastScrollTop) {
          
          $('#hi').hide();
      } else {
       
          $('#hi').show();
      }
      
      lastScrollTop = scrollTop;
    });
   

  // login
  $("#login").click(function(){
    $(".loginBox").fadeToggle();
    $('header,.karusel,.first,.tbs,.owli,.part,#up,#inside1,#textii,footer').toggleClass('blur')
  });

  $("#spn").click(function(){
    $(".loginBox").fadeToggle();
    $('header,.karusel,.first,.tbs,.owli,.part,#up,#inside1,#textiifooter').toggleClass('blur')
   
  });






  





// ქარდების კარუსელი1

let multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  let carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  let carouselWidth = $(".ineri")[0].scrollWidth;
  let cardWidth = $("#itemi").width();
  let scrollPosition = 0;
  $("#carouselExampleControls .nexti").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .ineri").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .previ").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .ineri").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


// უკუთვლა
let countDownDate = new Date("march 29, 2024 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
    
  let distance = countDownDate - now;
 
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("time",).innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  document.getElementById("time2",).innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  document.getElementById("time3",).innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  document.getElementById("time4",).innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  document.getElementById("time5",).innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
  
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#time").innerHTML = "შეთავაზება დამთავრდა";
    document.querySelector("#time2").innerHTML = "შეთავაზება დამთავრდა";
    document.querySelector("#time3").innerHTML = "შეთავაზება დამთავრდა";
    document.querySelector("#time4").innerHTML = "შეთავაზება დამთავრდა";
    document.querySelector("#time5").innerHTML = "შეთავაზება დამთავრდა";
    
  }
}, 1000);


// javshani

// const cleanBtn = document.querySelector('.addd');

// cleanBtn.addEventListener('click', () => {
//   let health = document.getElementById('rooms');
//   health.value = (health.value === health.max) ? 0 : health.value + 5;
// })