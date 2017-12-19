$(document).ready(function(){

    // smooth scroll
    $('nav ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:3
            },
            700:{
                items:5
            },
        }
    });

    // contact-image-large 
    $('#contact-image').on('click', function(){
        $('.address-image-wrap').toggleClass('address-image-wrap-large');
    });
})




