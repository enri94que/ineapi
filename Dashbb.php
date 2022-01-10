<!DOCTYPE html>
<html>
<body>

<?php

$api_url = 'https://servicios.ine.es/wstempus/js/es/DATOS_TABLA/30678?tip=AM&';

// Read JSON file
$json_data = file_get_contents($api_url);

// Decode JSON data into PHP array
$response_data = json_decode($json_data, true);

// Traverse array and display user data

$search_val = "CNTR4773"; 
foreach ($response_data as $use) {
    if($use['COD'] == $search_val){
	$nam = $use['Data'];
		foreach ($nam as $user) {
		echo "name: ".$user['Valor'];
		echo "<br />";
			$dats = $user['Fecha'];
			$datd= date('d-m-Y',strtotime($dats));	
		echo "fecha: ".$datd;
		echo "<br /> <br />";
}}}

$valo = null;
$date = null;
$data = null;

foreach ($response_data as $data) {
    if($use['COD'] == $search_val){	
	$dat = $data['Data'];
	foreach ($dat as $da) {
		$valo = $da['Valor'];
		$dates = $da['Fecha'];
		$dated= date('Y-m-d',strtotime($dates));
	//	$dated= new DateTime($dates);
	//	$dated->format('y-m-d H:i:s');

		$servername = "http://35.180.98.28/";
		$username = "root";
		$password = "";
		$dbname = "enrique";

		// Create connection
		$conn = mysqli_connect($servername, $username, $password,);
		mysqli_select_db($dbname, $conn);
		// Check connection
		if (!$conn) {
		  die("Connection failed: " . mysqli_connect_error());
		}
		//insert into mysql table

		$sql = "INSERT INTO apine (PIB, PIB_Date) VALUES ('$valo', '$dated')";
		//$sql = "CREATE TABLE PIB(ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, PIB int(30), PIB_Date DATETIME(6))engine=InnoDB;";
		if(!mysqli_query($conn,$sql) [
		    die('Error : ' . mysqli_error($conn))
			]
		)

		$conn->close();
	}
}}

?>

<?php include 'Dashboard.v1.html';?>

</body>
</html>
