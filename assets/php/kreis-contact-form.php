<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['contact_name']) && isset($_POST['contact_mail']) && isset($_POST['contact_subject']) && isset($_POST['contact_msg'])) {

    //check if any of the inputs are empty
    if (empty($_POST['contact_name']) || empty($_POST['contact_mail']) || empty($_POST['contact_subject']) || empty($_POST['contact_msg'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }


    $msg = '';
    date_default_timezone_set('Etc/UTC');

    //create an instance of PHPMailer
    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->SMTPDebug = 2;

    $mail->Host = 'mx1.hostinger.mx';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
 

    $mail->Username = 'kreisindustries_webapp@kreisindustries.com';
    $mail->Password = '/Pq#dfsl+6i3';

    $mail->setFrom('kreisindustries_webapp@kreisindustries.com', 'Kreis Industries Webapp'); //sender
    $mail->AddAddress('contact@kreisindustries.com', 'Kreis Industries'); //recipient 
    
    if ($mail->addReplyTo($_POST['contact_mail'], $_POST['contact_name'])) {
        $mail->Subject = 'A visitor has left a comment';
        $mail->isHTML(false);

        $mail->Body = "Name: " . $_POST['contact_name'] . "\r\n\r\nResponse to:".$_POST['contact_mail'] . "\r\n\r\nSubject:" . $_POST['contact_subject'] . "\r\n\r\nMessage: " . stripslashes($_POST['contact_msg']);
    
          if(!$mail->send()) {
                $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
                echo json_encode($data);
                exit;
        }
        $data = array('success' => !false, 'message' => 'algo paso.');
        echo json_encode($data);
    }


    

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}

?>