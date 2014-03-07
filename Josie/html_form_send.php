<?php
if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "joefrizzell@gmail.com";
	$email_subject = "Subscription request";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['the_name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['comments'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$the_name = $_POST['the_name']; // required
	$email_from = $_POST['email']; // required
	$comments = $_POST['comments']; // required

	$error_message = "";
	$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
  	$error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
	$string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$the_name)) {
  	$error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  if(strlen($comments) < 2) {
  	$error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Name: ".clean_string($the_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<!-- place your own success html below -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Josie Robin, Science Fiend - Home</title>
		<link rel="stylesheet" href="../css/template.css" type="text/css" />
	</head>
	<body>
		<div class="h95">
			<div class="w30">
				<img class="w100" src="../images/magnifying-glass.png" alt="magnifying-glass"/>
			</div>		
			<table class="NavBar">
				<tr>
					<td><a href="../aboutjosie/">HOME</td>
					<td class="current">ABOUT JOSIE</a></td>
					<td><a href="../aboutauthor/">ABOUT THE AUTHOR</a></td>
					<td><a href="../press/">PRESS</a></td>
					<td><a href="../contact/">CONTACT</a></td>
				</tr>
			</table>
			<div class="content">
				<div class="lightbox">
				<p class="headline">Thanks! You should email confirmation shortly.</p>
				</div>
			</div>
		</div>
	</body>
</html>



<?php
}
die();
?>