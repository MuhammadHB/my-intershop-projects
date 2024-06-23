<?php  /*project 2 uploading an images to database (with resize images size if the images size more than 500KB)*/


//correct conection to the database SQL
header('Access-Control-Allow-Origin: *');


// تحديد المسار الذي يتم فيه حفظ الصورة
$target_dir = "C:/MAMP/htdocs/api/";

// استقبال الصورة المرسلة
if ($_FILES['image']) {
    $image_name = $_FILES["image"]["name"];
    $image_tmp_name = $_FILES["image"]["tmp_name"];

    // نقل الصورة المرسلة إلى المسار المحدد
    if (move_uploaded_file($image_tmp_name, $target_dir . $image_name)) {
        echo "تم تحميل الصورة بنجاح";
    } else {
        echo "عذرا، حدث خطأ أثناء تحميل الصورة";
    }
} else {
    echo "لا توجد صورة مرسلة";
}

?>


