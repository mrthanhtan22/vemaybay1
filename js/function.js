/*Jquery */
$(document).ready(function(){
	/* slider gia ve khuyen mai */
  $('.bxslider1').bxSlider({
    mode: 'vertical',
    minSlides: 2,
    slideMargin: 10,
    auto: true
  });

  	$('.slide2').bxSlider({
    slideWidth: 900,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 0,
    auto: true,
   	padding: 10,
   	slideMargin: 10
  });

      $(".navbar a, footer a[href='#myPage']").on('click',function(event) {
        if (this.hash !== "") {
          event.preventDefault();
        /* Act on the event */
        var hash =this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top,
          },
          900, function() {
          /* stuff to do after animation is complete */
          window.location.hash = hash;
        });
        }
        
      });
   })
