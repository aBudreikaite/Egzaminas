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
        10: {
            direction: "vertical",
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        600: {
            direction: "horizontal",
            slidesPerView: 2,
            slidesPerGroup: 2,
            loop: false,
        },
        1024: {
            direction: "horizontal",
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30
        },
        1440:{
            direction: "horizontal",
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        },
        1920:{
            direction: "horizontal",
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        },
        2560:{
            direction: "horizontal",
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 30
        }
        
    }
  
  });