const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,

    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});
