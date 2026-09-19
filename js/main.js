 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

// Initiate the wowjs
new WOW().init();

// Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

// Testimonials carousel
$(".testimonials-carousel").owlCarousel({
	center: true,
	autoplay: true,
	dots: true,
	loop: true,
	responsive: {
		0:{
			items:1
		}
	}
});

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						// console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  // Dynamic Experience Calculator (Joining Date: July 18, 2022)
  var updateDynamicExperience = function() {
    var joiningDate = new Date(2022, 6, 18); // July 18, 2022
    var now = new Date();

    var years = now.getFullYear() - joiningDate.getFullYear();
    var months = now.getMonth() - joiningDate.getMonth();
    var days = now.getDate() - joiningDate.getDate();

    if (days < 0) {
      months--;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // VenPep Experience duration (e.g. "4Years 2Months")
    var venpepText = '';
    if (years > 0 && months > 0) {
      venpepText = years + 'Years ' + months + 'Months';
    } else if (years > 0) {
      venpepText = years + (years === 1 ? 'Year' : 'Years');
    } else {
      venpepText = months + (months === 1 ? 'Month' : 'Months');
    }

    $('#venpep-exp-duration').text(venpepText);

    // Total Industry Experience (+8 months prior experience at Adiv Technologies)
    var totalMonths = (years * 12 + months) + 8;
    var totalYears = Math.floor(totalMonths / 12);
    var expYearsText = totalYears + '+';

    $('.dynamic-exp-years').text(expYearsText);
  };
  updateDynamicExperience();

  // Helper function to show field error note
  function showFieldError($el, message) {
    $el.addClass('is-invalid');
    $el.siblings('.field-error').text(message).fadeIn(200);
  }

  // Clear errors live when user types
  $('#contactForm input, #contactForm textarea').on('input keyup change', function() {
    var $el = $(this);
    if ($el.val().trim() !== '') {
      $el.removeClass('is-invalid');
      $el.siblings('.field-error').fadeOut(150).text('');
    }
  });

  // Contact Form Submission Handler (Validation + FormSubmit AJAX + Google Sheet Backup)
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();

    var $form = $(this);
    var $submitBtn = $('#submitBtn');
    var originalBtnVal = $submitBtn.val();
    var sheetUrl = $form.attr('data-sheet-url');

    // Reset previous error messages
    $form.find('.form-control').removeClass('is-invalid');
    $form.find('.field-error').hide().text('');
    $('.successMessage, .errorMessage').hide();

    // Field references
    var $name = $('#name');
    var $email = $('#email');
    var $mobile = $('#mobile');
    var $subject = $('#subject');
    var $message = $('#message');

    var isValid = true;
    var firstInvalid = null;

    // 1. Validate Name
    if ($.trim($name.val()) === '') {
      showFieldError($name, 'Please enter your name.');
      isValid = false;
      if (!firstInvalid) firstInvalid = $name;
    }

    // 2. Validate Email
    var emailVal = $.trim($email.val());
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === '') {
      showFieldError($email, 'Please enter your email address.');
      isValid = false;
      if (!firstInvalid) firstInvalid = $email;
    } else if (!emailRegex.test(emailVal)) {
      showFieldError($email, 'Please enter a valid email address (e.g. name@domain.com).');
      isValid = false;
      if (!firstInvalid) firstInvalid = $email;
    }

    // 3. Validate Mobile Number
    var mobileVal = $.trim($mobile.val());
    var phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (mobileVal === '') {
      showFieldError($mobile, 'Please enter your mobile number.');
      isValid = false;
      if (!firstInvalid) firstInvalid = $mobile;
    } else if (!phoneRegex.test(mobileVal) || mobileVal.replace(/\D/g, '').length < 7) {
      showFieldError($mobile, 'Please enter a valid mobile number (e.g. 10 digits).');
      isValid = false;
      if (!firstInvalid) firstInvalid = $mobile;
    }

    // 4. Validate Subject
    if ($.trim($subject.val()) === '') {
      showFieldError($subject, 'Please enter a subject.');
      isValid = false;
      if (!firstInvalid) firstInvalid = $subject;
    }

    // 5. Validate Message
    if ($.trim($message.val()) === '') {
      showFieldError($message, 'Please enter your message.');
      isValid = false;
      if (!firstInvalid) firstInvalid = $message;
    }

    // If validation fails, focus first invalid field and exit
    if (!isValid) {
      if (firstInvalid) firstInvalid.focus();
      return false;
    }

    $submitBtn.val('Sending...').prop('disabled', true);

    var emailUrl = $form.attr('action');
    var formData = new FormData($form[0]);
    formData.append('timestamp', new Date().toLocaleString());

    var fetchTasks = [];

    // 1. Email Service Fetch (FormSubmit)
    if (emailUrl) {
      fetchTasks.push(
        fetch(emailUrl, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData
        })
      );
    }

    // 2. Google Sheet Backup Fetch (URLSearchParams for 100% parameter parsing in Apps Script)
    if (sheetUrl && sheetUrl.trim() !== '') {
      var sheetParams = new URLSearchParams(formData);
      fetchTasks.push(
        fetch(sheetUrl, {
          method: 'POST',
          body: sheetParams,
          mode: 'no-cors'
        })
      );
    }

    // Execute both requests simultaneously using Promise.allSettled
    Promise.allSettled(fetchTasks)
      .then(function(results) {
        $form[0].reset();
        $form.find('.form-control').removeClass('is-invalid');
        $('.successMessage').fadeIn();
        $submitBtn.val(originalBtnVal).prop('disabled', false);
        setTimeout(function() {
          $('.successMessage').fadeOut();
        }, 8000);
      })
      .catch(function(err) {
        console.error('Submission error:', err);
        $('.errorMessage').fadeIn();
        $submitBtn.val(originalBtnVal).prop('disabled', false);
      });
  });

})(jQuery);

