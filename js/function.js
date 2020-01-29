$(function () {
    
 
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage','.footer'],
        scrollBar: true


        
    });
    
    $('.sec').height($(window).height());
    
    
});


//스크롤 높이 값에 따른 헤더 스타일 변화


 $(function(){
  
  var $section = $('.sec');
  var $header = $('header');
  var $mnu = $('.gnb>li>a');
  var scrollTop = 0;
  var nowIdx = 0;

  var arrTopVal = [];
     
  $section.each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
  });


 $(window).on('scroll',function(){
    scrollTop = $(this).scrollTop(); 

    //scroll이벤트 발생 시 scrollTop값에 따른 .scroll처리
    if(scrollTop>arrTopVal[1]-50){ 
      $header.addClass('scroll')

    }else{
      $header.removeClass('scroll')

    }
     if(scrollTop == 0){
         document.getElementById('myVideo').play();
     }
 })

});