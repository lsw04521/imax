$(function(){
    $("#menu").click(function () {
      $(".b").slideToggle()
    });
  });

$(function(){
  function left() {
    if ( document.body.clientWidth >= 1140) {
      $('#here_box li:last').prependTo('#here_box');
      $('#here_box').css('margin-left', -1140);
      $('#here_box').stop().animate({ marginLeft: 0 }, 400);
    } else {document.body.clientWidth >= 768
        $('#here_box li:last').prependTo('#here_box');
        $('#here_box').css('margin-left', -420);
        $('#here_box').stop().animate({ marginLeft: 0 }, 400);}
  }

  function right() {
    if ( document.body.clientWidth >= 1140) {
      $('#here_box').stop().animate({ marginLeft: -1140 }, 400,function () {
          $('#here_box li:first').appendTo('#here_box');
          $('#here_box').css({ marginLeft: 0 });
      });
    } else {document.body.clientWidth >= 767
        $('#here_box').stop().animate({ marginLeft: -420 }, 400,function () {
            $('#here_box li:first').appendTo('#here_box');
            $('#here_box').css({ marginLeft: 0 });});}
  }

  $('.left').click(function(){
      left();
  });
  
  $('.right').click(function(){
      right();
  });

  
});