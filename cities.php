<?php
$json = file_get_contents("data-1.json");
$array = json_decode($json, true);
$cities = [];
$i=0;
foreach ($array as $element){
    if (!in_array($element["Ciudad"], $cities)) {
        $cities[$i] = $element["Ciudad"];
        $i++;
    }
}
echo json_encode($cities);
?>