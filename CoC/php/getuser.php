<?php
$q = intval($_GET['q']);

$con = mysqli_connect('http://localhost:8080','root','eBooks4$','CoC');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}
$sql="SELECT * FROM Users WHERE Username = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table border='1'>
<tr>
<th>UserName</th>
<th>THLevel</th>
<th>MaxBarracks</th>
<th>MaxDarkBarracks</th>
<th>LaboratoryLevel</th>
<th>SpellFactoryLevel</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['UserName'] . "</td>";
  echo "<td>" . $row['THLevel'] . "</td>";
  echo "<td>" . $row['MaxBarracks'] . "</td>";
  echo "<td>" . $row['MaxDarkBarracks'] . "</td>";
  echo "<td>" . $row['LaboratoryLevel'] . "</td>";
  echo "<td>" . $row['SpellFactoryLevel'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>