<?php
$success = '';
$error = '';

// Fetch user's information
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// Email Address that will be used to send and recieve the Contact Us emails
$our_email = "EMAIL GOES HERE";		

// In case user managed to get here without any inputs
if (empty($name) || empty($email) || empty($subject) || empty($message)){
	onExit("", "All fields must be filled.");
}

// In case user managed to get an incorrect email through validation
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email))
{
	onExit("", "Invalid email address.");
}

// No errors were found, thus starting our preparations
if (empty($error)){
	// Mail format goes as so: mail(to,subject,message,headers)
	$email_body = "You have received a new message from the user $name.\n".
								"Here is the message:\n $message";
								
	// It is important to receive the email from ourselves
	// Most email services nowadays will reject the email thinking it's an impersonation
	// Having an email address sending to itself SHOULD (hopefully) bypass this
	$headers = "From: $our_email \r\n";
	$headers .= "Reply-To: $email \r\n";


	// Once everything is prepared then the email will be sent
	mail($our_email, $subject, $email_body, $headers)
	
}

onExit($success, $error);

 # ========================================================================
 # onExit Function
 # ========================================================================
 # Function stores either an indication of success or an error message into JSON string then outputs
 # it and exits.
 # ========================================================================
function onExit($success, $error){
    $arr = array('success' => $success, 'error' => $error);
    echo json_encode($arr);     // Echo the array as a JSON string
    exit();
}

?>