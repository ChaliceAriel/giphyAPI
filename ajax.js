$( document ).ready(function() {


	$( "#subButton" ).on('click',function() {
		$(".gifList").empty();

		var input = $("#inputText").val().replace(" ", "+");
		var apiKey = "&api_key=dc6zaTOxFJmzC";

		$.ajax({
			method: "GET",
			url: 'http://api.giphy.com/v1/gifs/search?q=' + input + apiKey
			// setup asynchronous promise  
		}).then (function(response){ 

			console.log(response); 

			//do something with response here
			var imageArray = [];
			for (var i = 0; i < response.data.length; i++){
				imageArray[i] = response.data[i].images.downsized_medium.url;
			}

			var div = $(".gifList");

			$.each(imageArray, function(i, value) {
        	$("<img />").attr("src", value).appendTo(div);
   			
   			});
		});
	});
    
});