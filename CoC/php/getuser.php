<?php
$q = intval($_GET['q']);

$con = mysqli_connect('127.0.0.1:8080','root','eBooks4$','CoC');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
$sql="SELECT * FROM Users WHERE Username = '".$q."'";
echo json_encode(mysqli_query($con,$sql));
mysqli_close($con);
?>