$(document).ready(function(){
      $.fatNav();
      
      var myFullpage = new fullpage('.fr-homepage', {
         anchors: ['first', 'second', 'third', 'fourth'],
        // sectionsColor: ['', '', '', '#0c233f'],
        scrollOverflow: true
    });
      //$('#pagepiling').pagepiling();
      $('.center').slick({

        infinite: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    
$('.categories a').click(function(e){
      $('.categories ul li').removeClass('active');
      $(this).parent('li').addClass('active');
      var itemSelected = $(this).attr('data-filter');
      $('.portfolio-item').each(function(){
        if (itemSelected == '*'){
          $(this).removeClass('filtered').removeClass('selected');
          return;
        } else if($(this).is(itemSelected)){
          $(this).removeClass('filtered').addClass('selected');
        } else{
          $(this).removeClass('selected').addClass('filtered');
        }
      });
    });
  
$(window).scroll(function(){
    var light_pos = $('.site-footer').offset().top;
    var light_height = $('.site-footer').height();
    var menu_pos = $('.navbar-brand').offset().top;
    var menu_height = $('.navbar-brand').height();
    var scroll = $(window).scrollTop();
    console.log('light',light_pos);
    console.log('menu',menu_pos);
    console.log('scroll',scroll);
    
    if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
      $('.navbar-brand').addClass('logo_white');
      $('.navbar-brand').removeClass('logo_default');
    }
    else {
      $('.navbar-brand').removeClass('logo_white');
      $('.navbar-brand').addClass('logo_default');
    }
    
  })


    });