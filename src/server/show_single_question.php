<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


    <title>Edit Question</title>
</head>

<body>
    <main role="main" class="container-fluid">
        <h2>Edit Question</h2>
        <?php
            @$questionID = $_GET["questionID"];
            if (!$questionID) {
                echo "<p>Error!</p>";
                exit;
        }

        @$db=new mysqli("localhost", "root", "", "abracaquiz");

        if($db->connect_error) {
            die("Connect error".$db->connect_errno.": ".$db->connect_error);
        }

        $query = "SELECT * FROM question_pool WHERE questionID=?";
        $stmt = $db->prepare($query);
        $stmt->bind_param("i", $questionID);
        $stmt->execute();
        $result=$stmt->get_result();
        if ($result) {
            $row = $result->fetch_assoc();
            $sprint = $row["sprint"];
            $question = $row["question"];
            $correctAnswer = $row["correctAnswer"];
            $incorrect1 = $row["incorrect1"];
            $incorrect2 = $row["incorrect2"];
            $incorrect3 = $row["incorrect3"];
            $incorrect4 = $row["incorrect4"];
        }

        ?>
        <form action="edit_question.php" method="post">
            <p>Question ID <input type="text" name="questionID" maxlength="5" size="5" value=<?php echo "'".$questionID."'";?> readonly/></p>
            <p>Sprint <input type="text" name="sprint" maxlength="50" size="30" value=<?php echo "'".$sprint."'";?> /></p>
            <p>Question <input type="text" name="question" maxlength="255" size="100" value=<?php echo "'".$question."'";?> /></p>
            <p>Correct Answer <input type="text" name="correctAnswer" maxlength="15" size="15" value=<?php echo "'".$correctAnswer."'";?> /></p>
            <p>Incorrect Answer #1 <input type="text" name="incorrect1" maxlength="50" size="30" value=<?php echo "'".$incorrect1."'";?> /></p>
            <p>Incorrect Answer #2 <input type="text" name="incorrect2" maxlength="50" size="30" value=<?php echo "'".$incorrect2."'";?> /></p>
            <p>Incorrect Answer #3 <input type="text" name="incorrect3" maxlength="50" size="30" value=<?php echo "'".$incorrect3."'";?> /></p>
            <p>Incorrect Answer #4 <input type="text" name="incorrect4" maxlength="50" size="30" value=<?php echo "'".$incorrect4."'";?> /></p>

            <div id="submit" class="form-div">
                <button type="submit" class="btn btn-primary">Submit Changes</button>
                <button type="reset" class="btn btn-secondary"> Clear </button>
            </div>
        </form>
        <br/>
        <br/>
        <a href = "show_question_editable.php">View Question Pool</a>
        <br>
        <br>
        <p><a href = "index.html">Return to Main Page</a></p>

    </main>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>

</html>