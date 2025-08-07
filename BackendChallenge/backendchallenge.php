<?php

$ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$response = curl_exec($ch);
curl_close($ch);

// Decode the JSON
$data = json_decode($response, true);
$entries = explode(",", $data["data"]);

$count = 0;
for ($i = 0; $i < count($entries); $i++) {
    $entry = trim($entries[$i]);
    if (substr($entry, 0, 4) === "age=") {
        $age = (int)substr($entry, 4);
        if ($age >= 50) {
            $count++;
        }
    }
}

// Print only the final count as required
echo $count;

?>
