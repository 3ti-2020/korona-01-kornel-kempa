<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "kempa";

    $conn = new mysqli($servername, $username, $password, $dbname);

    $result = $conn->query("SELECT * FROM spis");
    $result1 = $conn->query("SELECT * FROM poziom_trudnosci");

    echo("<table border='1'>");
    echo("<tr>
    <th>id</th>
    <th>nazwa</th>
    <th>data_dodania</th>
    </tr>");
    while($wiersz = $result->fetch_assoc()){
        echo("<tr>");
        echo("<td>".$wiersz['id']."</td>"."<td>".$wiersz['nazwa']."</td>"."<td>".$wiersz['data_dodania']."</td>");
        echo("</tr>");
    }

    echo("<table border='1'>");
    echo("<tr>
    <th>id</th>
    <th>nazwa</th>
    <th>poziom</th>
    </tr>");
    while($wiersz1 = $result1->fetch_assoc()){
        echo("<tr>");
        echo("<td>".$wiersz1['id']."</td>"."<td>".$wiersz1['nazwa']."</td>"."<td>".$wiersz1['poziom']."</td>");
        echo("</tr>");
    }

    ?>
    
</body>
</html>