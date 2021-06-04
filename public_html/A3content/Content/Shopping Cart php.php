<?php
echo '<br>Order First Name Is: ' . $_POST["fname"];
echo '<br>Order Last Name Is: ' . $_POST["lname"];
echo '<br>Order Shipping Address Is: ' . $_POST["address"];



if (isset($_POST["fast"])) {
    echo "<br>Sipping Method Is: Fast" ;
}
elseif(isset($_POST["normal"])) {
    echo "<br>Sipping Method Is: Normal " ;
} else {
    echo "<br> You Have Not Chosen a Method of Shipping";
    
}

if (isset($_POST["visa"])) {
    echo "<br>Payment Method Is: VISA" ;
}
elseif(isset($_POST["MasterCard"])) {
    echo "<br>Payment Method Is: MASTERCARD" ;
} elseif(isset($_POST["other"])) {
    echo "<br>Payment Method Is: OTHER";
} else {
echo "<br> You Have Not Chosen a Method of Payment";}
    

 