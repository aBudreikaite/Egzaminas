const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerGroup: 3,
    slidesPerView: 3,
    loop: false,
    // autoplay: {
    //     delay: 1000,
    //     pauseOnMouseEnter: true,
    //     disableOnInteraction: false
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    disabledClass: 'disabled_swiper_button',
    breakpoints: {
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: false,
        },
        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40
        }
    }
  
  });