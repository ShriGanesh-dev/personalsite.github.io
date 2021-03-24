
$('.video-mask').ready(function (){
  $('.video-mask').css('height', '-1');
  $('.text1').css('left','690px');
  $('.text2').css('left','865px');
  $('.text').css('opacity','100');
  $('.next-button').css('opacity','100');
  $('.next-button').css('left','670px');
  $('.back-button').css('opacity','100');
  $('.back-button').css('left','160px');
  $('.explore-delay').css({'transitionDelay':'3000','opacity':'100'});
  $('.welcome').css('left','914px');
  $('.welcome-sub').css('left','920px');
  $('.progress-bar').css('width','253px');
  $('.progress-bar-fill').css({'transition-duration':'10000ms','width':'253px'});
  $('.progress-bar-fill').delay(10000).css({'transition-duration':'100ms','width':'0'});

});
$('.explore').click(function (){
  $('.title-video').css("transform","rotate(180deg) scale(1.6) translate(-18%,-6%)");
  $('body').css("height","1200px");
});
