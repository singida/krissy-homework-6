$(document).ready(function() {

$('form').submit(validateForm);

function validateForm() {
	event.preventDefault();

	var firstName = $('#firstName').val();
	if (firstName == '') {
		alert('You must enter your first name')
	}
	var lastName = $('#lastName').val();
	if (lastName == '') {
		alert('You must enter your last name')
	}
}



});