/*
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:8,
    loop:true,
    margin:05,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
*/
$('.owl-carousel').owlCarousel({
    loop:true,
    
    autoplay:true,
    autoplayTimeout:5000,
    
    margin:05,
    nav:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})
