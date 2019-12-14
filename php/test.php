<?php
    $id1 = $_POST['userId1'];
    $id2 = $_POST['userId2'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');

    $DBResponse = mysqli_query($DBLink, "SELECT id_chat FROM chat WHERE (id_user1=\"$id1\" AND id_user2=\"$id2\") OR (id_user1=\"$id2\" AND id_user2=\"$id1\") ");
    $row = mysqli_fetch_array($DBResponse);
    $chatID = $row[0];
    echo $chatID;
    $DBResponse = mysqli_query($DBLink, "DELETE FROM chat WHERE id_chat=\"$chatID\"");
?>