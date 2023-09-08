<?php
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "test";

    //Making connection
    $conn = mysqli_connect($db_hostname,$db_username,$db_password,$db_name);

    //Checking if connection is sucessfull or not and get a error message
    if(!$conn){
        $response = array("success" => false, "message" => "Connection Failed");
        echo json_encode($response);
        return;
    }

    //getting data(Email and Password) from html file(login.html)
    $email = $_POST["email"];
    $password = $_POST["password"];

    //$email = "sanja@gmail.com";
    //$password = "password";

    //Execute a sql query
    $sql = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";

    //ckecking whether a sql query is executed or not
    $result = mysqli_query($conn,$sql);

    $row = mysqli_fetch_assoc($result);

    if($row == null){
        $response = array("success" => false, "message" => "Login Unsuccesful - Either email or password is incorrect");
        echo json_encode($response);
        return;
    }else{
        $name = $row['name'];
        $response = array("success" => true, "name" => $name, "message" => "Login successful!");
        echo json_encode($response);
        mysqli_close($conn);
    }
?>