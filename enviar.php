<?php
        //En el destino colocar el correo alque quieres que lleguen los datos del contacto de tu formulario
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
        
        require 'php-mailer/Exception.php';
        require 'php-mailer/PHPMailer.php';
        require 'php-mailer/SMTP.php';
        $mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.hostinger.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'translations@juancrestrepo.com';                     //SMTP username
    $mail->Password   = '1007230771Juan';                               //SMTP password
    $mail->SMTPSecure = ssl;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('translations@juancrestrepo.com', 'New Form Submitted');
    $mail->addAddress('juanca632@hotmail.com');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['service'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $mail->Body    = $name . " - " . $email . " - " . $message;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo "<script>alert('Message has been sent')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",0)</script>";
    //header("Location: index.html");
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
    
//Esto es opcional, aqui pueden colocar un mensaje de "enviado correctamente" o redireccionarlo a algun lugar
?>