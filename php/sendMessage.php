<?php
    $id1 = $_POST['userId'];
    $chatId = $_POST['chatId'];
    $msg = $_POST['msg'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    #TODO запрос к бд, чтобы создать чат
    $date = date('Y-m-d h:i:s', time());
    // echo $date;
    $result = mysqli_query($DBLink, "INSERT INTO message (id_chat, text, from_id) VALUES (\"$chatId\",\"$msg\", \"$id1\")");
    
    
    echo $result;
?>