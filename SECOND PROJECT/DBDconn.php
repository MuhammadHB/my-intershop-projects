<?php /*project 2 uploading an images to database (with resize images size if the images size more than 500KB)*/

//correct conection to the database SQL gg
header('Access-Control-Allow-Origin: *');

// تأسيس الاتصال بقاعدة البيانات
$conn = new mysqli('localhost', 'root', '', 'images');

// تحقق من وجود الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// استقبال الصورة المرسلة من الواجهة الأمامية
if ($_FILES['image']) {
    $image_name = $_FILES["image"]["name"];
    $image_data = file_get_contents($_FILES["image"]["tmp_name"]);

    // إدراج الصورة في قاعدة البيانات
    $stmt = $conn->prepare("INSERT INTO images (image_name, image_data) VALUES (?, ?)");
    $stmt->bind_param("sb", $image_name, $image_data);
    $stmt->execute();
    $stmt->close();

    echo "Image uploaded successfully";



    
}

$conn->close();
?>


->close();
?>

