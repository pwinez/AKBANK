$(document).ready(function(){
    $('.home-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        navText: ["<img src='public/solok.png'>","<img src='public/sagok.png'>"],
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
           
        }
    })
  });