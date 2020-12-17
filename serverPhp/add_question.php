<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<title>Insert Team</title>


</head>

<body>
    <main role="main" class="container-fluid">
	<h1> Question Details </h1>
<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $sprint=$_POST["sprint"];
    $question=$_POST["question"];
    $correctAnswer=$_POST["correctAnswer"];
    $incorrect1=$_POST["incorrect1"];
    $incorrect2=$_POST["incorrect2"];
    $incorrect3=$_POST["incorrect3"];
    $incorrect4=$_POST["incorrect4"];

    if (!$sprint || !$question || !$correctAnswer) {
        echo "You have not entered all required details.  Please go back and try again.";
        exit;
    }

    //format input
    $sprint = intval($sprint);
    $question = addslashes($question);
    $correctAnswer = addslashes($correctAnswer);
    $incorrect1 = addslashes($incorrect1);
    $incorrect2 = addslashes($incorrect2);
    $incorrect3 = addslashes($incorrect3);
    $incorrect4 = addslashes($incorrect4);

    //connect to the database
    @$db = new mysqli('localhost', 'root', '', 'abracaquiz');


    if ($db->connect_error) {
        die('Connect Error ' . $db->connect_errno . ': ' . $db->connect_error);
    }

    $query = "INSERT INTO question_pool (sprint, question, correctAnswer, incorrect1, incorrect2, incorrect3, incorrect4) VALUES (?, ?, ?, ?, ?, ?, ?)";
    if ($stmt = $db->prepare($query)) {
        $stmt->bind_param("issssss", $sprint, $question, $correctAnswer, $incorrect1, $incorrect2, $incorrect3, $incorrect4);
        $stmt->execute();
        echo $stmt->affected_rows." question inserted into database";
    } else {
        $error = $db->errno . ' ' . $db->error;
        echo $error;
    }

    $db->close();
?>
    <p><a href="view_question_pool.php">View Updated Question Pool</a></p>
    <br>
    <br>
    <p><a href = "index.html">Return to Main Page</a></p>
</main>
</body>

</html>
