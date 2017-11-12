<?php
    $json = file_get_contents("data-1.json");

    if(isset($_GET["prizemin"]) and isset($_GET["prizemax"])){
        $json = filterPrize($json);
    }

    if(isset($_GET["Ciudad"])){ $json = ($_GET["Ciudad"] != "") ? filter("Ciudad", $json) : $json;};
    if(isset($_GET["Tipo"])){$json = ($_GET["Tipo"] != "") ? filter("Tipo", $json) :  $json;};

    echo $json;

    function filter($name, $json){
        $array = json_decode($json, true);
        $newArray = [];
        $i = 0;

        foreach ($array as $element){
            if ($element[$name] == $_GET[$name]){
                $newArray[$i] = $element;
                $i++;
            }
        }
        return json_encode($newArray);
    }
    function filterPrize($json){
        $array = json_decode($json, true);
        $newArray = [];
        $i = 0;

        foreach ($array as $element){
            $prizeElement = (float)substr(str_replace(',', '',$element["Precio"]), 1);
            $prizeMin = (float)substr(str_replace(' ', '',$_GET["prizemin"]), 1);
            $prizeMax = (float)substr(str_replace(' ', '',$_GET["prizemax"]), 1);
            if ($prizeElement >= $prizeMin and $prizeElement <= $prizeMax){
                $newArray[$i] = $element;
                $i++;
            }
        }
        return json_encode($newArray);
    }
?>