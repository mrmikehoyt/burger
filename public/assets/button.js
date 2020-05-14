$(document).ready(function() {

//function when submit-button is clicked
	$('#submit-button').on('click', function() {
//trims what is input in new_burger form text box
		var burgerData = {			
				burger_name: $('#new_burger').val().trim()
			}

		// Sends a post requst 
		$.ajax("/burger/create", {
			type: "POST",
			data: burgerData
		}).then(function() {
			console.log("created a new burger");
			// Reload the page to get the updated list
			location.reload();
		});
  

	});	
//function when  devour-button is clicked
	$('.devour-button').on('click', function() {

		var devourData = {
				id: $(this).attr('data-id')	
			}

		// send a post request.
		$.ajax("/burger/eat", {
			type: "POST",
			data: devourData
		}).then(function() {
			console.log("updated a new burger to deveour!");
			// Reload the page to get the updated list
			location.reload();
		});  

	});	
//function when restore button is clicked
	$('.restore-button').on('click', function() {

		var restoreData = {
				id: $(this).attr('data-id')	
			}

		// send a post request.
		$.ajax("/burger/restore", {
			type: "POST",
			data: restoreData
		}).then(function() {
			console.log("updated a new burger to restore!");
			// Reload the page to get the updated list
			location.reload();
		});



	});	
	

		








	

});