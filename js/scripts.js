/*
    Hi Krissy!  Your validation function here looks great!  No real comments here, other than
    what I said in the HTML file, that you can use this function to also redirect the page
    to your thank you page - however, keep in mind that you only want people to go to the 
    thank you page if the validation you have passes.   There's an easy way to do this - I added
    that code inline.
*/

$(document).ready(function() {

$('form').submit(validateForm);

function validateForm() {
	event.preventDefault();

	var firstName = $('#firstName').val();
	if (firstName == '') {
		alert('You must enter your first name');
        return false; // Tells the this function to stop runnning, which you want since the user made a mistake.
	}
	var lastName = $('#lastName').val();
	if (lastName == '') {
		alert('You must enter your last name');
        return false; // Tells the this function to stop runnning, which you want since the user made a mistake.
	}

    // The user will only get to this point if they did not make a mistake, so now you can redirect to the thank you page.
    window.location.assign('thanks.html');
}



});