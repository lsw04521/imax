$(function(){
    $("#menu").click(function () {
      $(".b").slideToggle()
    });
  });

$(function(){
  function left() {
      $('#here_box li:last').prependTo('#here_box');
      $('#here_box').css('margin-left', -1140);
      $('#here_box').stop().animate({ marginLeft: 0 }, 400);
  }

  function right() {
      $('#here_box').stop().animate({ marginLeft: -1140 }, 400,function () {
          $('#here_box li:first').appendTo('#here_box');
          $('#here_box').css({ marginLeft: 0 });
      });
  }
  
  function slide() {
      $('#here_box').stop().animate({ marginLeft: -1140 },400, function () {
          $('#here_box li:first').appendTo('#here_box');
          $('#here_box').css({ marginLeft: 0 });
      });
  }
  
  $('.left').click(function(){
      left();
  });
  
  $('.right').click(function(){
      right();
  });
});