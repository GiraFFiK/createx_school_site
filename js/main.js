$(function () {
    Fancybox.bind("[data-fancybox]", {

    });

})

$(function () {

    var mixer = mixitup('.directions__list');
    $('.direcions__filter-btn').on('click', function (e) {
        $('.direcions__filter-btn').removeClass('direcions__filter-btn--active')
        $(this).addClass('direcions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        appendArrows: $('.team__slider-arrows'),
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')({

        })
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')({

        })
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,

    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')({

        })
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')({

        })
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
            $(this).removeClass('program__acc-link--active')
            $(this).children('.program__acc-text').slideUp()
            stopImmediatePropagation()
        }
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).toggleClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
    })

    // $('.contacts__map')
    //     .gmap3({
    //         center: [48.8620722, 2.352047],
    //         zoom: 10
    //     })
    //     .marker([
    //         { position: [48.8620722, 2.352047] },
    //         { address: "86000 Poitiers, France" },
    //         { address: "66000 Perpignan, France", icon: "https://maps.google.com/mapfiles/marker_grey.png" }
    //     ])
    //     .on('click', function (marker) {
    //         marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
    //     });

    
})

ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.15891,61.365938],
            zoom: 15
            
        });
        var myPlacemark = new ymaps.Placemark([55.15891,61.365938], null, {
            preset: 'islands#redDotIcon'
        });
        myMap.geoObjects.add(myPlacemark);
    }

