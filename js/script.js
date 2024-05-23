$(document).ready(function(){
    // --Preloader Start-----------------------------------------------------------------
    $(document).ready(function(){
      setTimeout (function(){
        $('.preloader').fadeOut();
      },4000)
    })
    // --Preloader End-----------------------------------------------------------------
    
    // --Slider start-----------------------------------------------------------------
    $('#first_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        items:1
    })
    
    $('#second_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1,
        navText:['<i class="fa-solid fa-left-long"></i>','<i class="fa-solid fa-right-long"></i>']
    })
    
    $('#third_slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:5
    })
    // --Slider End-----------------------------------------------------------------
    
    // --Header Fix start-----------------------------------------------------------------
    $(window).scroll(function(){
        var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
        
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    // --Header Fix End-----------------------------------------------------------------
    

    // --Upwrw start-----------------------------------------------------------------
    var btn = $('.uparw');
    btn.hide();
    $(window).scroll(function () {
      if($(window).scrollTop()>500)
      {
        btn.fadeIn();
      }
      else
      {
        btn.fadeOut();
      }
    });
    
    btn.on('click',function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:0},'300');
    });
    // --Upwrw End-----------------------------------------------------------------
    
    // --Accordian start-----------------------------------------------------------------
    const accordionBtns = document.querySelectorAll(".accordion");

    accordionBtns.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);

        if (content.style.maxHeight) {
          //this is if the accordion is open
          content.style.maxHeight = null;
        } else {
          //if the accordion is currently closed
          content.style.maxHeight = content.scrollHeight + "px";
          console.log(content.style.maxHeight);
        }
      };
    });

    // --Accordian end-----------------------------------------------------------------
})
