<?php
    $DBLink = mysqli_connect('localhost','root', '', 'db');
    $date = date('Y-m-d h:i:s', time());
    mysqli_query($DBLink, "INSERT INTO chat (id_user1, id_user2, createtime, timetolive) VALUES (\"dd\", \"gg\", \"$date\", \"120\")");
    $DBResponse = mysqli_query($DBLink, "SELECT id_chat FROM chat WHERE (id_user1=\"gg\" AND id_user2=\"dd\") OR (id_user1=\"dd\" AND id_user2=\"gg\") ");
    $row = mysqli_fetch_array($DBResponse);
    echo $row[0]; 

?>