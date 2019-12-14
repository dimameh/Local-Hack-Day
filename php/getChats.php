<?php
    $userId = $_POST['userId'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    $DBResponse = mysqli_query($DBLink, "SELECT id_chat FROM chat WHERE id_user1=\"$userId\" OR id_user2=\"$userId\"");
    $row = mysqli_fetch_array($DBResponse);
    $chats = [];
    do {
        array_push($chats, $row['id_chat']);
    } while ($row = mysqli_fetch_array($DBResponse));
    echo $chats;
?>