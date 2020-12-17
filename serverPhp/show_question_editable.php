<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<title>Show Edit/Delete</title>
</head>
<body>
    <main role="main" class="container-fluid">
    	<h2>Edit or Delete Questions</h2>
    	<br/>
    	<br/>
        <h6>Click on Question ID to edit or on 'Delete' to delete</h6>
<?php
    @ $db = new mysqli('localhost', 'root', '', 'abracaquiz');


    if ($db->connect_error) {
        die('Connect Error ' . $db->connect_errno . ': ' . $db->connect_error);
    }

    $query="SELECT questionID, sprint, question, correctAnswer, incorrect1, incorrect2, incorrect3, incorrect4 FROM question_pool";
    $result = $db->query($query);

    if ($result = $db->query($query)) {

        $num_results = $result->num_rows;
        $num_fields = $result->field_count;

        echo "<table class='table table-responsive'>";
        echo "<tr>";

        $dbinfo = $result->fetch_fields();

        foreach ($dbinfo as $val) {
            echo "<th>".ucwords($val->name)."</th>";
        }

        echo "</tr>";

        while ($row = $result->fetch_row()) {
            echo "<tr>";
            for ($i=0; $i<$num_fields; $i++) {
                if ($i == 0) {
                    $questionID = $row[$i];
                    echo "<td><a href='show_single_question.php?questionID=$questionID'>$questionID</a></td>";
                } else {
                    echo "<td>". stripslashes($row[$i])."</td>";
                } 
            }
            echo "<td><a href='delete_question.php?questionID=$questionID'>Delete</a></td>";
            echo "</tr>";
        }

        $result->close();
        echo "</table>";
    }

    $db->close();

?>

<p><a href = "index.html">Return to Main Page</a></p>
</main>
</body>
</html>
