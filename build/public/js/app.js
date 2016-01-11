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


        $oLay
            .css({
                display : 'block',
                opacity : 0,
                right : '-=300'
            })
            .animate({
                right : 220,
                opacity : 1
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


// Usage #0
$("body").keydown(function(e) {
  if(e.keyCode == 48) {
    console.log("#0");
    closeOverlay();
    if ($(this).attr('href') == '#') e.defaultPrevented();
    return false;
  }
});


// Usage #1
$("body").keydown(function(e) {
  if(e.keyCode == 49) {
    console.log("#1");
    openOverlay('#overlay-inAbox');
    
    e.defaultPrevented();

    return false;
  }

});

// Usage #2  - Hide slide view & play
$("body").keydown(function(e) {
  if(e.keyCode == 50) {

    codeCalled(0);
    return false;
  }
});

// Usage #3  - pause and show slide view
$("body").keydown(function(e) {
  if(e.keyCode == 51) {
    codeCalled(1);
    return false;
  }
});

function completedTx() {
    // pause playback
    var sample = document.getElementById("vid");
    sample.play();
 
    // slide overlay away
    closeOverlay();

    // update other instances
    updateOtherViews();

}

function startTx() {
    // pause playback
    var sample = document.getElementById("vid");
    sample.pause();

    // slide in overlay
    openOverlay('#overlay-inAbox');

    // update other instances
    updateOtherViews();
}

function codeCalled(code) {
    viewStatus.code = code;

    switch(code) {
        case 0:
            completedTx();
            break;
        case 1:
            startTx();
            break;
        default:

    }

    
}
