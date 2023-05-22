var swiper = new Swiper(".js-slider-works", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
        980: {
            slidesPerView: 3,
        },
    },
});

$(document).ready(function() {
	$('#accordeon .faq__item-head').on('click', open);
});

function open(){
    $(this).toggleClass('opened');

    $('#accordeon .hidden').not($(this).next());

    $(this).next().toggleClass('active');
}