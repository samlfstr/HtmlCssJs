<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once 'Exception.php';
require_once 'PHPMailer.php';
require_once 'SMTP.php';

$mail = new PHPMailer(true);
$p_validated = 'validated.php';
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $msg_subject = $_POST["msg_subject"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}

$mail->isSMTP();
$mail->Host = 'smtp.learnfuture.art';
$mail->SMTPAuth = true;
$mail->Username = 'contact@learnfuture.art';
$mail->Password = 'samlfstr.FR0';
$mail->Port = '587';
$mail->SMTPSecure = false;
$mail->SMTPAutoTLS = false;


$mail->setFrom('contact@learnfuture.art');
$mail->addAddress('contact@learnfuture.art');

$mail->isHTML(true);
$mail->Subject = $msg_subject;

$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";


$mail->Body = $Body;
if ($mail->send()) {
    echo "success";
} else {
    echo $errorMSG;
}

?>