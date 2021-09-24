

$(function(){
  　$(window).scroll(function (){
      $('.effect-fade').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight){
              $(this).addClass('effect-scroll');
          }
      });
  　});
  });
  $(function(){
    　$(window).scroll(function (){
        $('.effect-fade-compass').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});
    });
    $(function(){
      　$(window).scroll(function (){
          $('.effect-fade-rectangle').each(function(){
              var elemPos = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > elemPos - windowHeight){
                  $(this).addClass('effect-scroll');
              }
          });
      　});
      });
      $(function(){
        　$(window).scroll(function (){
            $('.effect-fade-footer1').each(function(){
                var elemPos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight){
                    $(this).addClass('effect-scroll');
                }
            });
        　});
        });
        $(function(){
          　$(window).scroll(function (){
              $('.effect-fade-footer2').each(function(){
                  var elemPos = $(this).offset().top;
                  var scroll = $(window).scrollTop();
                  var windowHeight = $(window).height();
                  if (scroll > elemPos - windowHeight){
                      $(this).addClass('effect-scroll');
                  }
              });
          　});
          });
          $(function(){
            　$(window).scroll(function (){
                $('.effect-fade-footer3').each(function(){
                    var elemPos = $(this).offset().top;
                    var scroll = $(window).scrollTop();
                    var windowHeight = $(window).height();
                    if (scroll > elemPos - windowHeight){
                        $(this).addClass('effect-scroll');
                    }
                });
            　});
            });
            $(function(){
              　$(window).scroll(function (){
                  $('.effect-fade-footer4').each(function(){
                      var elemPos = $(this).offset().top;
                      var scroll = $(window).scrollTop();
                      var windowHeight = $(window).height();
                      if (scroll > elemPos - windowHeight){
                          $(this).addClass('effect-scroll');
                      }
                  });
              　});
              });
              // $(function(){
              //   　$(window).scroll(function (){
              //       $('.effect-fade-footer5').each(function(){
              //           var elemPos = $(this).offset().top;
              //           var scroll = $(window).scrollTop();
              //           var windowHeight = $(window).height();
              //           if (scroll > elemPos - windowHeight){
              //               $(this).addClass('effect-scroll');
              //           }
              //       });
              //   　});
              //   });

function slideIn(){
  var menu = $('.menu_list');
  var ham_btn = $('.ham_btn');
  var body = $(document.body);
  var menuWidth = menu.outerWidth();

  ham_btn.on('click',function(){
    console.log('C');

    body.toggleClass('open');
    if(body.hasClass('open')) {
      body.animate({'right':menuWidth},200);
      menu.animate({'right':0},200);
      $('html').addClass('scroll-prevent')
      console.log('A');
    }else {
      menu.animate({'right':-menuWidth},200);
      body.animate({'right':0},200);
      $('html').removeClass('scroll-prevent');
      console.log('B');

    }
  });
};
slideIn(); 

// レスポンシブの時動画をとめる

  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    var elem = document.getElementById('back_video') 
  	    elem.removeAttribute("autoplay");  
  } else {
  //     $('#sample').css({
  //         color: 'black'
  //     });
  //     $('#test-name').addClass('test-class') 
  }
