<?php
$q = intval($_GET['q']);

$con = mysqli_connect('69.114.118.216:3306','CoC','Tracker4$','CoC_Ultimate');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"CoC_Ultimate");
$sql="SELECT * FROM Users WHERE UserName = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table border='1'><tr><th>UserName</th><th>UserLvl</th><th>GoldAmount</th><th>ElixirAmount</th><th>DarkElixirAmount</th><th>Gems</th></tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['UserName'] . "</td>";
  echo "<td>" . $row['UserLvl'] . "</td>";
  echo "<td>" . $row['GoldAmount'] . "</td>";
  echo "<td>" . $row['ElixirAmount'] . "</td>";
  echo "<td>" . $row['DarkElixirAmount'] . "</td>";
  echo "<td>" . $row['Gems'] . "</td>";
  echo "</tr>";
}
echo "</table>";

mysqli_close($con);
?>