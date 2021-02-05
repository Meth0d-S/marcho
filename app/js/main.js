$(function(){

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.trends-gallery__item').addClass('trends-gallery__item--list');
    $('.shop-content__inner').addClass('shop-content__inner--list');
  });
  $('.button-grid').on('click', function(){
    $('.trends-gallery__item').removeClass('trends-gallery__item--list');
    $('.shop-content__inner').removeClass('shop-content__inner--list');
  });

  $('.filter-sort, .filter-show').styler({
    placeholder: false,
  });

  $('.product-content__input').styler();
  
  $('.filter-price__input').ionRangeSlider({
    type: 'double',
    hide_min_max: true,
    onStart: function(data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    },
    onChange: function(data) {
      $('.price-filter__from').text(data.from);
      $('.price-filter__to').text(data.to);
    }
  })
  
  $('.star').rateYo({
    starWidth: '17px',
    normalFill: '#ccccce',
    ratedFill: '#ffc35b',
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" version="1.1"><g><path d="M 7.203125 0.523438 L 5.390625 4.398438 L 1.332031 5.023438 C 0.601562 5.136719 0.3125 6.082031 0.839844 6.625 L 3.773438 9.640625 L 3.082031 13.90625 C 2.957031 14.675781 3.726562 15.25 4.371094 14.890625 L 8 12.878906 L 11.628906 14.890625 C 12.273438 15.25 13.042969 14.675781 12.917969 13.90625 L 12.226562 9.640625 L 15.160156 6.625 C 15.6875 6.082031 15.398438 5.136719 14.667969 5.023438 L 10.609375 4.398438 L 8.796875 0.523438 C 8.472656 -0.171875 7.53125 -0.179688 7.203125 0.523438 Z M 7.203125 0.523438 "/></g></svg>'
  });

  $('.product-slider__big').slick({
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider__small'
  });
  $('.product-slider__small').slick({
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: false,
    draggable: false,
    vertical: true,
    asNavFor: '.product-slider__big',
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.deal__timer');
    const daysSpan = clock.querySelector('.deal__timer-days');
    const hoursSpan = clock.querySelector('.deal__timer-hours');
    const minutesSpan = clock.querySelector('.deal__timer-minutes');
    const secondsSpan = clock.querySelector('.deal__timer-seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.deal__timer').attr('data-time');
  initializeClock('deal__timer', deadline);

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

});