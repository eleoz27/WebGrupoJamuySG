<?php
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['correo'];
$telefono = $_POST['telefono'];
$empresa = $_POST['empresa'];
$rubro = $_POST['rubro'];
$servicio = $_POST['servicio-elegido'];
$honeypot = $_POST['pais'];

$to = 'eleo2713@gmail.com'; // Cambia esto por la dirección de correo electrónico del destinatario
$subject = 'Formulario enviado - Servicios Generales';


if (!empty($honeypot)) {
    echo "Bot detectado.";  
} else{
    $message = "Nombre: $nombre\n";
    $message .= "Apellido: $apellido\n";
    $message .= "Email: $email\n";
    $message .= "Teléfono: $telefono\n";
    $message .= "Empresa: $empresa\n";
    $message .= "Rubro: $rubro\n";
    $message .= "Servicio Elegido: $servicio\n";

    
    $headers = "From: email@grupojamuy.com" ."\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/". phpversion();
    
    if (@mail($to, $subject, $message, $headers)) {
        echo "El formulario se ha enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.";
    }
}

?>