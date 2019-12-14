<?php
    $userId = $_POST['userId'];
    $chatId = $_POST['chatId'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    $DBResponse = mysqli_query($DBLink, "SELECT * FROM `message` WHERE id_chat=\"$chatId\"");
    
    $messages = [];
    do {
        array_push($messages, $row);
    } while ($row = mysqli_fetch_array($DBResponse));
    $date = date('Y-m-d h:i:s', time());
    $DBResponse = mysqli_query($DBLink, "UPDATE `message` SET `readingtime`=\"$date\" WHERE id_chat=\"$chatId\" AND from_id!=\"$userId\"");


    print_r($messages);
?>