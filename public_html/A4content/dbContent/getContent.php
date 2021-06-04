<?php

include('Connection.php');
$get = "SELECT * FROM StudentGrades";
$prGet= $connection->prepare($get);
$prGet->execute();
$result = $prGet->fetch();

$sql = "SELECT count(*) FROM StudentGrades"; 
$resultt = $connection->prepare($sql); 
$resultt->execute(); 
$number_of_rows = $resultt->fetchColumn();

for ($x = 0; $x < $number_of_rows; $x++) {
//$result = $prGet->fetch();
echo "   &nbsp; &nbsp; " . "   Student ID:    " . $result["StudentID"];
echo "" ;
echo "  &nbsp; &nbsp;  " . "   Math Grade:    " . $result["Math"];
echo "" ;
echo "  &nbsp; &nbsp;  " . "   History Grade:   " . $result["History"];
echo "   " ;
echo "   &nbsp; &nbsp; " . "   Art Grade:   " . $result["Art"];
echo "   " ;
echo "    &nbsp; &nbsp;" . "   Culture Grade:   " . $result["Culture"];
echo "   " ;
echo "  &nbsp; &nbsp;  " . "   Physics Grade:   " . $result["Physics"];
echo " <br>  " ;
$result = $prGet->fetch();

}




