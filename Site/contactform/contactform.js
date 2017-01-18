/*

Contact Form Control File

Obtains data from View (HTML) and sends it to process in the Model (PHP).

*/

function sendMail(){
	//var name = $("#name").attr("value");
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;
	
	alert(name + " || " + email + " || " + subject + " || " + message); 
}

function mailResults(){
	
}

//event.preventDefault();