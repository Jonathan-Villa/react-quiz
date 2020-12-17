<?php
    @ $db = new mysqli('localhost', 'root', '', 'abracaquiz');


    if ($db->connect_error) {
        die('Connect Error ' . $db->connect_errno . ': ' . $db->connect_error);
    }

    $questionArray = array();
    $query="SELECT * FROM question_pool";
    $result = $db->query($query);

    if ($result = $db->query($query)) {
        
        while ($quest = mysqli_fetch_assoc($result)) {
            $questionArray[] = $quest;
        }
        echo json_encode($questionArray);

        $result->close();
    }

    $db->close();

?>