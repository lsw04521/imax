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
    } else if (document.body.clientWidth >= 768) {
      $('#here_box li:last').prependTo('#here_box');
      $('#here_box').css('margin-left', -690);
      $('#here_box').stop().animate({ marginLeft: 0 }, 400);
    } else {
      $('#here_box li:last').prependTo('#here_box');
      $('#here_box').css('margin-left', -420);
      $('#here_box').stop().animate({ marginLeft: 0 }, 400);
    }
    
  }

  function right() {
    if ( document.body.clientWidth >= 1140) {
      $('#here_box').stop().animate({ marginLeft: -1140 }, 400,function () {
          $('#here_box li:first').appendTo('#here_box');
          $('#here_box').css({ marginLeft: 0 });
      });
    } else if (document.body.clientWidth >= 768) {
      $('#here_box').stop().animate({ marginLeft: -690 }, 400,function () {
        $('#here_box li:first').appendTo('#here_box');
        $('#here_box').css({ marginLeft: 0 });
    });
    } else {
      $('#here_box').stop().animate({ marginLeft: -420 }, 400,function () {
        $('#here_box li:first').appendTo('#here_box');
        $('#here_box').css({ marginLeft: 0 });
    });
    }
  }

  $('.left').click(function(){
      left();
  });
  
  $('.right').click(function(){
      right();
  });

  
});

  $(function () {
      $('.play').click(function () {
          $('#box').css('display', 'block');
      });
      $('#cbtn').click(function () {
          $('#box').css('display', 'none');
      });
  });
