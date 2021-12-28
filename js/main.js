$(function(){

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      let sw=0;
      $('.btn_pause').click(function(){

        if(sw==0){
            $('.btn_pause').addClass('on')
            swiper.autoplay.stop();
            sw=1;
        }else{
            $('.btn_pause').removeClass('on')
            swiper.autoplay.start();
            sw=0;
        }

      });

      $('.m_menu_middle li').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
      });

      $('.m_menu_left li').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        
        let num = $(this).index();
        console.log(num);

        $('.m_menu_right').hide();
        $('.m_menu_right').eq(num).show();

      });

      // $('.m_menu_right_03 li').click(function(){
      //   $(this).toggleClass('on').siblings().removeClass('on');
      // });
      // $('.m_menu_right_03 li, .m_menu_right_04 li, .m_menu_right_05 li, .m_menu_right_06 li').click(function(){
      //   $(this).toggleClass('on').siblings().removeClass('on');
      // });

      $('.m_btn').click(function(){
        $('.m_menu').animate({'left':0},300);
        $('.blackout').fadeIn(300);
      });

      $('.m_menu_close').click(function(){
        $('.m_menu').animate({'left':'-100%'},300);
        $('.blackout').fadeOut(300);
      });

      $('.pop_close').click(function(){
        $('.pop').slideUp();
      });


      $('.m_menu_right>ul>li>a').click(function(){
        $(this).parent().find('.depth2').stop().slideToggle().parent().toggleClass('on');
        
      });



      $('.sec_11_slide').slick({
        autoplay:true,
        arrows:false,
        dots:true
      });



      


      






});