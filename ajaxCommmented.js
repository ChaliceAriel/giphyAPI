$( document ).ready(function() {


	$( "#subButton" ).on('click',function() {
		//remove giphy results from previous search
		$(".gifList").empty();

		//store results from text input field in variable 'input', and use .replace() method 
		//to replace any spaces in the string with '+'
		var input = $("#inputText").val().replace(" ", "+");
		//store api key in var 'apiKey'
		var apiKey = "&api_key=dc6zaTOxFJmzC";

		//fetch the response object from giphy.com
		$.ajax({
			//use "GET" method
			method: "GET",
			//fetch object from giphy api using text input for search query, and append url with api key
			url: 'http://api.giphy.com/v1/gifs/search?q=' + input + apiKey
			// setup asynchronous promise  
		}).then (function(response){ 
			//log response object
			console.log(response); 

			//create an array for giphy images
			var imageArray = [];
			//loop through response.data array
			for (var i = 0; i < response.data.length; i++){
				//add giphy images to imageArray
				imageArray[i] = response.data[i].images.downsized_medium.url;
			}
			//create variable to store target div
			var div = $(".gifList");

			//for each element in imageArray, create new image html tag, 
			//setting the image tag's "src" attribute to the value stored in the current index of the array
			//then append the image tags to the target div with the class of "gifList"
			$.each(imageArray, function(i, value) {
        	$("<img />").attr("src", value).appendTo(div);
   			
   			});
		});
	});
    
});