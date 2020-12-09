<!DOCTYPE html>
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<title>Sprint 2 Material</title>
</head>
<body>
    <main role="main" class="container-fluid">
        <h1>Sprint 2 Quiz</h1>
<?php
    @ $db = new mysqli('localhost', 'root', '', 'abracaquiz');


    if ($db->connect_error) {
        die('Connect Error ' . $db->connect_errno . ': ' . $db->connect_error);
    }

    $query="SELECT * FROM question_pool WHERE sprint = 2";
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
                echo "<td>". stripslashes($row[$i])."</td>";
            }
            echo "</tr>";
        }

        $result->close();
        echo "</table>";
    }

    $db->close();

?>
<p><a href = "index.html">Return to Main Page</a></p>

</main>