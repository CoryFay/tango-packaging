$(document).ready(function(){
//target the 'empty-div' div
var emptyDiv = $('#empty-div');
//on-click event.. append text to the empty-div 
$('#testBtn').on('click', function(){
    event.preventDefault();
    for (var i = 0; i < 100 ; i++){
    var text = 'lorem ';
    emptyDiv.append(text);
    }
    
})


});