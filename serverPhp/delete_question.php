<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<title>Delete Question</title>
</head>
<body>
    <main role="main" class="container-fluid">
    	<?php
    	@$questionID = $_GET["questionID"];
    	if (!$questionID) {
    		echo "Error!";
    		exit;
    	}
    	

    	@$db = new mysqli('localhost', 'root', '', 'abracaquiz');


    	if ($db->connect_error) {
        	die('Connect Error ' . $db->connect_errno . ': ' . $db->connect_error);
    	}

    	$query = "DELETE FROM question_pool WHERE questionID = ?";
    	$stmt = $db->prepare($query);
    	$stmt->bind_param("i", $questionID);
    	$stmt->execute();

    	if ($stmt->affected_rows == 1) {
    		echo "<p>Question# $questionID has been deleted</p>";
    	}
  
	    ?>

	    <p><a href = "show_question_editable.php">View Updated Question Pool</a></p>
        <br>
        <p><a href = "index.html">Return to Main Page</a></p>
 
    </main>
</body>
</html>