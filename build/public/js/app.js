function openOverlay(olEl) {
    $oLay = $(olEl);
    
    if ($('#overlay-shade').length == 0)
        $('body').prepend('<div id="overlay-shade"></div>');

    $('#overlay-shade').fadeTo(300, 0.0, function() {
        var props = {
            oLayWidth       : $oLay.width(),
            scrTop          : $(window).scrollTop(),
            viewPortWidth   : $(window).width()
        };

        var leftPos = (props.viewPortWidth - props.oLayWidth) / 2;

        $oLay
            .css({
                display : 'block',
                opacity : 0,
                right : '-=300',
                //left : leftPos+'px'
            })
            .animate({
                right : props.scrTop + 40,
                opacity : 0.6
            }, 600);
    });
}

function closeOverlay() {
    $('.overlay').animate({
        right : '-=300',
        opacity : 0.6
    }, 400, function() {
        $('#overlay-shade').fadeOut(300);
        $(this).css('display','none');
    });
}

$("body").keydown(function(e) {
  if(e.keyCode == 48) {
    closeOverlay();
    if ($(this).attr('href') == '#') e.preventDefault();
    return false;
  }
});


// Usage
$("body").keydown(function(e) {
  if(e.keyCode == 49) {
   openOverlay('#overlay-inAbox');
   e.preventDefault();
   return false;
  }
});
