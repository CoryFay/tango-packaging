$(document).ready(function(){
    
$('#partialYes').on('click', function(){
    event.preventDefault();
    $('#hiddenPartialBox').removeClass('hide');
});

$('#partialNo').on('click', function(){
    event.preventDefault();
    $('#hiddenPartialBox').addClass('hide');
});

$('.submitBtn').click(function(){
    event.preventDefault();
    
    
});

});

