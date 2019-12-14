<?php
    $id1 = $_POST['userId1'];
    $id2 = $_POST['userId2'];
    $msgLifeTime = $_POST['messageLifeTime'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    #TODO запрос к бд, чтобы создать чат
    #mysqli_query($DBLink, "");
    $chatID = "543";
    $chatURL = 'https://hack.kom/chat'.$chatID;
    echo $chatURL;
?>