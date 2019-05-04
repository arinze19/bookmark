$(function(){
        $('#toggle').click(function(){
            $(this).toggleClass('on');
            $('#resize').toggleClass('active');
        })



                                // gallery modal 

var modal = $('#myModal');
var image =  $('.gallery-item img');
var modalImg =  $('#img01');
var captionText =  $('caption');
var span =  $('.close');

image.each(function(){
        var $this = $(this);
        $this.on('click', function(){
            var p = $this.attr('src')
            modal.css('display', 'block')
            modalImg.attr('src', p)     
        })
    })

span.on('click', function(){
    modal.css('display', 'none')
    })
})