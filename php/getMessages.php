<?php
    $chatId = $_POST['chatId'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    $DBResponse = mysqli_query($DBLink, "SELECT * FROM `message` WHERE id_chat=\"$chatId\"");
    //$row = mysqli_fetch_array($DBResponse);
    
    $messages = [];
    do {
        array_push($messages, $row);
    } while ($row = mysqli_fetch_array($DBResponse));
    print_r($messages);
?>