$(document).ready(function() {
 	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?&key="
  var randomNum = Math.random() * 100000;
  var randomWhl = Math.floor(randomNum);
 	var randomURL = url + randomWhl;
 $("#generate").on("click", function(){
    	$.getJSON(randomURL, function (json){
      		$(".text").html(JSON.stringify(json.quoteText));
    
 var author = json.quoteAuthor;
    
    if(author){  
  		var newAuthor = author.replace(/"/i, "");
  	} else {
     	newAuthor = "Unknown"
     } 
