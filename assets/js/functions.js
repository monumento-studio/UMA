
$( document ).ready(function() {

    //menu hover
    $('.ham').on('click', function(){
      $(this).toggleClass('clicked');
      $('.links').slideToggle();
    });

    $('.cont').on('click', function(){
      $('.contacto').css('display', 'flex');
    });

    $('.close').on('click', function(){
      $('.contacto').css('display', 'none');
    });


//Scrollify 
  $(function() {

    $.scrollify({
      section : ".full",
      interstitialSection : "#footer",
      });
    });

    var $win = $(window);
    var winH = $win.height() - 10;   // Get the window height.
    var winH2 = $win.height() * 2 - 10;   // Get the window height.
    var winH3 = $win.height() * 2 + 10;   // Get the window height.
    var winH4 = $win.height() * 3 + 10;   // Get the window height.

    $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
          $('.living').addClass('up');
          $('.living p').css( 'opacity', '1' );
          $('.living p').css( 'top', '50%' );
      } else {
      }

      if ($(this).scrollTop() > winH2 ) {
          $('.bosque').addClass('upbosque');
          $('.living p').css( 'opacity', '0' );
          $('.living p').css( 'top', '40%' );
      } else {
        $('.bosque').removeClass('upbosque');
        $('.living').addClass('up');
      }

      if ($(this).scrollTop() < winH ) {
          $('.living').removeClass('up');
          $('.living p').css( 'opacity', '0' );
          $('.living p').css( 'top', '55%' );
      } else {

      }

      if ($(this).scrollTop() > winH3 ) {
      } else {
      }





    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
     });



  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//slick
  $('.galeria').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });





// plantas

$('.tab').on('click', function(){
  $(this).addClass('clickedtab');
  $(this).siblings().removeClass('clickedtab');
});


//plano interactivo a

$('#num-uno-a').on('click', function(){
  $('#fig-uno-a').toggle();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-dos-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').toggle();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-tres-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').toggle();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-cuatro-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').toggle();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-cinco-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').toggle();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-seis-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').toggle();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-siete-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').toggle();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-ocho-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').toggle();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-nueve-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').toggle();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-diez-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').toggle();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});


$('#num-once-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').toggle();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-doce-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').toggle();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-trece-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').toggle();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-catorce-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').toggle();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-quince-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').toggle();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').hide();
});

$('#num-dieciseis-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').toggle();
  $('#fig-diecisiete-a').hide();
});

$('#num-diecisiete-a').on('click', function(){
  $('#fig-uno-a').hide();
  $('#fig-dos-a').hide();
  $('#fig-tres-a').hide();
  $('#fig-cuatro-a').hide();
  $('#fig-cinco-a').hide();
  $('#fig-seis-a').hide();
  $('#fig-siete-a').hide();
  $('#fig-ocho-a').hide();
  $('#fig-nueve-a').hide();
  $('#fig-diez-a').hide();
  $('#fig-once-a').hide();
  $('#fig-doce-a').hide();
  $('#fig-trece-a').hide();
  $('#fig-catorce-a').hide();
  $('#fig-quince-a').hide();
  $('#fig-dieciseis-a').hide();
  $('#fig-diecisiete-a').toggle();
});

//plano interactivo b

$('#num-uno').on('click', function(){
  $('#fig-uno').toggle();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-dos').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').toggle();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-tres').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').toggle();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-cuatro').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').toggle();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-cinco').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').toggle();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-seis').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').toggle();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-siete').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').toggle();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-ocho').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').toggle();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-nueve').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').toggle();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-diez').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').toggle();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});


$('#num-once').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').toggle();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-doce').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').toggle();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-trece').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').toggle();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-catorce').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').toggle();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-quince').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').toggle();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').hide();
});

$('#num-dieciseis').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').toggle();
  $('#fig-diecisiete').hide();
});

$('#num-diecisiete').on('click', function(){
  $('#fig-uno').hide();
  $('#fig-dos').hide();
  $('#fig-tres').hide();
  $('#fig-cuatro').hide();
  $('#fig-cinco').hide();
  $('#fig-seis').hide();
  $('#fig-siete').hide();
  $('#fig-ocho').hide();
  $('#fig-nueve').hide();
  $('#fig-diez').hide();
  $('#fig-once').hide();
  $('#fig-doce').hide();
  $('#fig-trece').hide();
  $('#fig-catorce').hide();
  $('#fig-quince').hide();
  $('#fig-dieciseis').hide();
  $('#fig-diecisiete').toggle();
});





$('.tipoa').on('click', function(){
  $('.departamentoa').show();
  $('.departamentob').hide();
  $('.departamentofachada').hide();
});

$('.tipob').on('click', function(){
  $('.departamentob').show();
  $('.departamentoa').hide();
  $('.departamentofachada').hide();
});

$('.fachada').on('click', function(){
  $('.departamentoa').hide();
  $('.departamentob').hide();
  $('.departamentofachada').show();
});







});

$(window).scroll(function () {
var $this = $(this),
    $head = $('body');
if ($this.scrollTop() > 100) {
   $('.logo').addClass('scrolled');
} else {
   $('.logo').removeClass('scrolled');
}
});


// var iScrollPos = 0;
//
// $(window).scroll(function () {
//     var iCurScrollPos = $(this).scrollTop();
//     if (iCurScrollPos > iScrollPos) {
//         //Scrolling Down
//     } else {
//        //Scrolling Up
//     }
//     iScrollPos = iCurScrollPos;
// });


document.querySelectorAll('.cocoen').forEach(function(element){
  new Cocoen(element);
});
