<?php
    $id1 = $_POST['userId1'];
    $id2 = $_POST['userId2'];
    $msgLifeTime = $_POST['messageLifeTime'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    #TODO запрос к бд, чтобы создать чат
    $date = date('Y-m-d h:i:s', time());
    // echo $date;
    mysqli_query($DBLink, "INSERT INTO chat (id_user1, id_user2, createtime, timetolive) VALUES (\"$id1\", \"$id2\", \"$date\", \"$msgLifeTime\")");
    
    $DBResponse = mysqli_query($DBLink, "SELECT id_chat FROM chat WHERE (id_user1=\"$id1\" AND id_user2=\"$id2\") OR (id_user1=\"$id2\" AND id_user2=\"$id1\") ");
    $row = mysqli_fetch_array($DBResponse);
    $chatID = $row[0];
    $chatURL = 'https://hack.kom/chat'.$chatID;
    echo $chatURL;
?>