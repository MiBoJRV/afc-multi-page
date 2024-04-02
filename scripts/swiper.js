// let swiper = new Swiper(".mySwiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     spaceBetween: 40,
//     loopedSlides: 2,
//     slidesPerView: 3,
//     loop: true,
//     centeredSlides: true,
//     centeredSlidesBounds: true
// });


// let swiper = new Swiper(".mySwiper", {
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     spaceBetween: 40,
//     loopedSlides: 2,
//     slidesPerView: 3,
//     loop: true,
//     centeredSlides: true,
//     centeredSlidesBounds: true,
//
//     breakpoints: {
//         991: {
//             loopedSlides: 0,
//             slidesPerView: 1,
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//         },
//     },
// });

document.addEventListener("DOMContentLoaded", function() {
    let swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        spaceBetween: 40,
        loopedSlides: 2,
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 1,
            }
        },
    });
});






