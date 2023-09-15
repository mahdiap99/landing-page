var swiper = new Swiper(".mySwiper", {

    // autoplay: {
    //     delay: 1000,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        568: {

            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {

            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        992: {

            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});