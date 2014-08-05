<?php
$q = intval($_GET['q']);

$con = mysqli_connect('10.140.143.26:3306','root','','CoC_Ultimate');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"CoC_Ultimate");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>Firstname</th>
<th>THLevel</th>
<th>ClanCastleLevel</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['FirstName'] . "</td>";
  echo "<td>" . $row['THLevel'] . "</td>";
  echo "<td>" . $row['ClanCastleLevel'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>