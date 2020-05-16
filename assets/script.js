$(document).ready(function(){
      $.fatNav();
      var myFullpage = new fullpage('.fr-homepage', {
        anchors: ['firstPage'],
        //sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        //navigation: true,
        //navigationPosition: 'right',
        //navigationTooltips: ['First page', 'Second page', 'Third and last page'],      

    });
      $('.center').slick({

        infinite: true,
        centerMode: true,
        centerPadding: '80px',
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
    
$('.fr-categories a').click(function(e){
      $('.fr-categories ul li').removeClass('active');
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
  
    });