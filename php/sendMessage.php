<?php
    $id1 = $_POST['userId'];
    $chatId = $_POST['chatId'];
    $msg = $_POST['msg'];
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    $date = date('Y-m-d h:i:s', time());
    $DBResponse = mysqli_query($DBLink, "SELECT timetolive FROM `chat` WHERE id_chat=\"$chatId\"");
    $timeOnLive = mysqli_fetch_array($DBResponse)[0];
    $result = mysqli_query($DBLink, "INSERT INTO message (id_chat, text, from_id, timetolive) VALUES (\"$chatId\",\"$msg\", \"$id1\", \"$timeOnLive\")");
    
    echo $result;
?>