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

      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
      //ngay thang nam
      if (!Modernizr.inputtypes.date) {
            // If not native HTML5 support, fallback to jQuery datePicker
            $('input[type=date]').datepicker({
                // Consistent format with the HTML5 picker
                    dateFormat : 'dd-mm-yy'
                },
                // Localization
                $.datepicker.regional['it']
            );
        }
   })
