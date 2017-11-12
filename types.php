<?php
$json = file_get_contents("data-1.json");
$array = json_decode($json, true);
$types = [];
$i=0;
foreach ($array as $element){
    if (!in_array($element["Tipo"], $types)) {
        $types[$i] = $element["Tipo"];
        $i++;
    }
}
echo json_encode($types);
?>