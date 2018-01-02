$(function() {
    $('.key01').click(function() { $.playSound('mp3/sound1.mp3'); });
    $('.key02').click(function() { $.playSound('mp3/sound2.mp3'); });
    /* Add key/sound mappings here */

    $('#stop').click(function() {
        $('audio').remove();
    });
});


