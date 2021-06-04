 <?php
$server = "mysql:host=localhost;dbname=bahrim_mohammad";

$username = "bahrim";

$password = "dJw5@ZRfP9?";

try{
    
    $connection = new PDO($server, $username, $password);
    
} catch (Exception $ex) {
    
die("ERROR: Couldn't connect. {$e->getMessage()}");


}

