<?php
// Connect to your database
$servername = "localhost";
$username = "username"; // Your MySQL username
$password = "password"; // Your MySQL password
$dbname = "database";   // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) 
{
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT name, points FROM players ORDER BY points DESC";
$result = $conn->query($sql);

$leaderboardData = array();

if ($result->num_rows > 0) 
{
    // Output data of each row
    while($row = $result->fetch_assoc()) 
    {
        $leaderboardData[] = $row;
    }
} else 
{
    echo "0 results";
}

// Close the connection
$conn->close();

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($leaderboardData);
?>