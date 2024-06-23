<?php /*project 1 save user information into database*/

//correct conection to the database SQL
    header('Access-Control-Allow-Origin: *');
     
    $conn = new mysqli("localhost","root","","testing123");
     
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $mobile = $_POST['mobile'];
        $email = $_POST['email'];
         
        $sql = "INSERT INTO testing123(name,mobile,email) VALUES('$name','$mobile','$email');";
        $res = mysqli_query($conn, $sql);
         
        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();
    }
?>