<?php

include('Connection.php');
//include('getContent.php');
$s=4;
$IDGrade = $_POST["StudentID"];
$MathGrade = $_POST["Math"];
$HistoryGrade = $_POST["History"];
$ArtGrade = $_POST["Art"];
$CultureGrade = $_POST["Culture"];
$PhysicsGrade = $_POST["Physics"];

$add = "INSERT INTO StudentGrades (StudentID, Math, History, Art, Culture, Physics) VALUES ('$IDGrade', '$MathGrade', '$HistoryGrade', '$ArtGrade', '$CultureGrade', '$PhysicsGrade');";


$prAdd = $connection->prepare($add);
$prAdd->execute();
echo 'Your Marks Have Been Submited';
header('Location:../A4content/A4content.html');


