$(document).ready(function(){

    //start 
$('#myform').submit(function(){

    var search = $("#books").val(); //get value of searchbox

    if(search == '') {
        alert("please enter a value to query")
    }  //if search is NULL


    else {
       var url = '';
       var img = '';
       var title = '';
       var author = '';
       
       $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){


    console.log(response);

       })

return false;


    