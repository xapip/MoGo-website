$(function () {
  
  let header = $('#header');
  let introH = $('#intro').innerHeight();
  let scrollOffset = $(window).scrollTop();

  /* fixed header */
  checkScroll(scrollOffset);

  $(window).on('scroll', function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  /* smooth scroll */
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();

    const $this = $(this);
    let blockId = $this.data('scroll');
    let blockOffset = $(blockId).offset().top;
    
    $('#nav a').removeClass('active');
    $this.addClass('active');

    $('html, body').animate({
      scrollTop: blockOffset
    }, 500);
  })

  /* menu nav toggle */
  $('#nav_toggle').on('click', function(event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
    
  })


  /* collapse */
  $('[data-collapse]').on('click', function(event) {
    event.preventDefault();

    const $this = $(this);
    const blockId = $this.data('collapse');

    $this.toggleClass('active');
    $(blockId).slideToggle();
  })

  /* slider */
  $('[data-slider]').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
})