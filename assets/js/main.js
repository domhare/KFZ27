(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
        
   /* ================================
       Mobile Menu Js Start
    ================================ */
    
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
    
     /* ================================
       Sidebar Toggle Js Start
    ================================ */

      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
      
       /* ================================
       Body Overlay Js Start
    ================================ */

      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
      /* ================================
       Sticky Header Js Start
    ================================ */

      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".gt-count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

        if ($('.single-select').length) {
          $('.single-select').niceSelect();
      }

    /* ================================
       Brand Slider Js Start
    ================================ */

    const gtheroSlider = new Swiper('.gt-hero-slider', {
        // Optional parameters
        speed: 3000,
        loop: true,
        slidesPerView: 1,
        autoplay: true,
        effect: 'fade',
        breakpoints: {
            '1600': {
                slidesPerView: 1,
            },
            '1400': {
                slidesPerView: 1,
            },
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },

            a11y: false,
        },
        navigation: {
            prevEl: ".array-prev",
            nextEl: ".array-next",
        },

    });

   /* ================================
       Brand Slider Js Start
    ================================ */

    if($('.gt-brand-slider').length > 0) {
        const gtBrandSlider = new Swiper(".gt-brand-slider", {
            spaceBetween: 50,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

     if($('.gt-brand-slider-2').length > 0) {
        const gtBrandSlider2 = new Swiper(".gt-brand-slider-2", {
            spaceBetween: 50,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }
      
   /* ================================
       Instagram Slider Js Start
    ================================ */

    if($('.gt-instagram-slider').length > 0) {
        const gtInstagramSlider = new Swiper(".gt-instagram-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    if($('.gt-instagram-slider-2').length > 0) {
        const gtInstagramSlider2 = new Swiper(".gt-instagram-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            breakpoints: {
                1399: {
                    slidesPerView: 6,
                },
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 4,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

   /* ================================
       Testimonial Sliders Js Start
    ================================ */

    if ($('.gt-testimonial-slider-thumb').length > 0 && $('.gt-testimonial-content-slider').length > 0) {
    
      // First, initialize the thumbnail swiper
      const gtTestimonialSliderThumb = new Swiper(".gt-testimonial-slider-thumb", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          // slidesPerView: 7,
          breakpoints: {
              575: { slidesPerView: 7 },
              0: { slidesPerView: 1 },
          },
          navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
      });
  
      // Then, initialize the main content swiper and link the thumbnails
      const gtTestimonialContentSlider = new Swiper(".gt-testimonial-content-slider", {
          spaceBetween: 30,
          speed: 1300,
          loop: true,
          centeredSlides: true,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
          },
          slidesPerView: 1,
          thumbs: {
              swiper: gtTestimonialSliderThumb,
          },
          breakpoints: {
              1199: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              767: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
          },
          navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
      });
    }

    if($('.gt-testimonial-slider-2').length > 0) {
        const gtTestimonialSlider2 = new Swiper(".gt-testimonial-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },

            breakpoints: {
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    if($('.gt-testimonial-slider-3').length > 0) {
        const gttestimonialslider3 = new Swiper(".gt-testimonial-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    /* ================================
       Team Sliders Js Start
    ================================ */

    if($('.gt-team-slider').length > 0) {
        const gtTeamSlider = new Swiper(".gt-team-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

     /* ================================
       Project Sliders Js Start
    ================================ */

    if($('.gt-project-slider').length > 0) {
        const gtProjectSlider = new Swiper(".gt-project-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

     if($('.gt-project-slider-2').length > 0) {
        const gtProjectSlider2 = new Swiper(".gt-project-slider-2", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
             navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

     /* ================================
       Shop Slider Js Start
    ================================ */

    if($('.gt-shop-slider').length > 0) {
        const gtShopSlider = new Swiper(".gt-shop-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }


    /* ================================
       Dynamic Image Switch Js Start
    ================================ */
   
    // Image src and class add js area start here ***
    $(document).on("mouseenter", ".changeImage2", function () {
        let newImage = $(this).data("image");
        let fadeDuration = 200;

        $("#myImage2").fadeOut(fadeDuration, function () {
            $("#myImage2").attr("src", newImage);
            $("#myImage2").fadeIn(fadeDuration);
        });

        $(this).addClass("clicked");
        $(".changeImage2").not(this).removeClass("clicked");
    });
    // Image src and class add js area end here ***

   /* ================================
       Countdown Timer Js Start
    ================================ */

   (function () {
    const targetDate = new Date("2025-09-20T00:00:00").getTime();
  
    const countdownInterval = setInterval(() => {
      const currentDate = Date.now();
      const remainingTime = targetDate - currentDate;
  
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        $("#countdown-container").text("Countdown has ended!");
        return;
      }
  
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
      $("#day").text(days.toString().padStart(2, "0"));
      $("#hour").text(hours.toString().padStart(2, "0"));
      $("#min").text(minutes.toString().padStart(2, "0"));
      $("#sec").text(seconds.toString().padStart(2, "0"));
    }, 1000);
  })();
  
     /* ================================
       Team Hover Interaction Js Start
    ================================ */

    const contentBoxes = document.querySelectorAll('.gt-content-box');
    const teamBoxes = document.querySelectorAll('.gt-team-box-items');

    contentBoxes.forEach((contentBox, index) => {
        const teamBox = teamBoxes[index];

        const addHover = () => {
            teamBox.classList.add('hovered');
        };

        const removeHover = (e) => {
            // If moving to contentBox or teamBox, do not remove
            const toElement = e.relatedTarget;
            if (contentBox.contains(toElement) || teamBox.contains(toElement)) {
                return;
            }
            teamBox.classList.remove('hovered');
        };

        // Add event listeners to both content and team boxes
        contentBox.addEventListener('mouseenter', addHover);
        contentBox.addEventListener('mouseleave', removeHover);

        teamBox.addEventListener('mouseenter', addHover);
        teamBox.addEventListener('mouseleave', removeHover);
    });


   /* ================================
       Progress Bar Animation Js Start
    ================================ */

    $('.gt-progress-bar').waypoint(function() {
        $('.gt-progress-bar').css({
            animation: "animate-positive 2.6s",
            opacity: "1"
        });
    }, { offset: '75%' });

   /* ================================
       Custom Accordion Js Start
    ================================ */

		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});

    /* ================================
        Quantity Increment/Decrement Js Start
    ================================ */
    const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
    if (quantityButtons.length) {
        quantityButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const input = button.parentElement.querySelector("input");
                let value = parseInt(input.value, 10) || 0;

                if (button.classList.contains("quantityIncrement")) {
                    input.value = value + 1;
                } else if (button.classList.contains("quantityDecrement") && value > 1) {
                    input.value = value - 1;
                }
            });
        });
    }

    /* ================================
       Payment Method Update Js Start
    ================================ */

    function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    }

    // Initial load
    updatePaymentMethod();

    // On click of radio option
    $(".checkout-radio-single input[name='pay-method']").on("change", function () {
        updatePaymentMethod();
    });
    
    /* ================================
       Additional Quantity Controls Js Start
    ================================ */

    const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
    const btnminus = document.querySelectorAll('.qtyminus');
    const btnplus = document.querySelectorAll('.qtyplus');

    if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

        inputs.forEach(function(input, index) {
            const min = Number(input.getAttribute('min'));
            const max = Number(input.getAttribute('max'));
            const step = Number(input.getAttribute('step'));

            function qtyminus(e) {
                const current = Number(input.value);
                const newval = (current - step);
                if (newval < min) {
                    newval = min;
                } else if (newval > max) {
                    newval = max;
                }
                input.value = Number(newval);
                e.preventDefault();
            }

            function qtyplus(e) {
                const current = Number(input.value);
                const newval = (current + step);
                if (newval > max) newval = max;
                input.value = Number(newval);
                e.preventDefault();
            }

            btnminus[index].addEventListener('click', qtyminus);
            btnplus[index].addEventListener('click', qtyplus);
        });
    }
    

    /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
      function itCursor() {
          var myCursor = jQuery(".mouseCursor");
          if (myCursor.length) {
              if ($("body")) {
                  const e = document.querySelector(".cursor-inner"),
                      t = document.querySelector(".cursor-outer");
                  let n,
                      i = 0,
                      o = !1;
                  (window.onmousemove = function(s) {
                      o ||
                          (t.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                          (e.style.transform =
                              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                          (n = s.clientY),
                          (i = s.clientX);
                  }),
                  $("body").on(
                          "mouseenter",
                          "button, a, .cursor-pointer",
                          function() {
                              e.classList.add("cursor-hover"),
                                  t.classList.add("cursor-hover");
                          }
                      ),
                      $("body").on(
                          "mouseleave",
                          "button, a, .cursor-pointer",
                          function() {
                              ($(this).is("a", "button") &&
                                  $(this).closest(".cursor-pointer").length) ||
                              (e.classList.remove("cursor-hover"),
                                  t.classList.remove("cursor-hover"));
                          }
                      ),
                      (e.style.visibility = "visible"),
                      (t.style.visibility = "visible");
              }
          }
      }
      itCursor();
    }

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }

    /* ================================
       Back To Top Button Js Start
    ================================ */

    $windowOn.on('scroll', function() {
        if ($(this).scrollTop() > 20) {
            $("#gt-back-top").addClass("show");
        } else {
            $("#gt-back-top").removeClass("show");
        }
    });
    
    $documentOn.on('click', '#gt-back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    
    }); // End Document Ready Function

     /* ================================
           Price Range Slider Js Start
        ================================ */
        document.addEventListener("DOMContentLoaded", function () {
            const minSlider = document.getElementById("min-slider");
            const maxSlider = document.getElementById("max-slider");
            const amount = document.getElementById("amount");
        
            // Exit early if essential elements are missing
            if (!minSlider || !maxSlider || !amount) return;
        
            function updateAmount() {
                let minValue = parseInt(minSlider.value, 10);
                let maxValue = parseInt(maxSlider.value, 10);
        
                // Swap values if min is greater than max
                if (minValue > maxValue) {
                    [minValue, maxValue] = [maxValue, minValue];
                    minSlider.value = minValue;
                    maxSlider.value = maxValue;
                }
        
                // Update amount input
                amount.value = `$${minValue} - $${maxValue}`;
        
                // Calculate percentages for gradient
                const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
                const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
        
                const trackStyle = `linear-gradient(to right, #1D1D1D ${minPercent}%, #E63946 ${minPercent}%, #E63946 ${maxPercent}%, #1D1D1D ${maxPercent}%)`;
        
                minSlider.style.background = trackStyle;
                maxSlider.style.background = trackStyle;
            }
        
            // Initialize on page load
            updateAmount();
        
            // Add event listeners
            minSlider.addEventListener("input", updateAmount);
            maxSlider.addEventListener("input", updateAmount);
        });
    
        function loader() {
            $windowOn.on('load', function() {
                // Animate loader off screen
                $(".preloader").addClass('loaded');
                $(".preloader").delay(200).fadeOut();
            });
        }
        
        loader();
    
  
  })(jQuery); // End jQuery

  
