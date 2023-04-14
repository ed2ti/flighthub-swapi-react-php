<?php
require 'AltoRouter.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');

//AltoRouter instance
$router     = new AltoRouter();
$base_url   = 'https://swapi.dev/api';


// map the four endpoints
$router->map('GET', '/person/[*:name]?', function($name) {
    $url                = $GLOBALS["base_url"].'/people/?search='. $name;
    $json               = file_get_contents($url);
    $array              = json_decode($json,1);
    $result['pages']    = intval($array['count']/10+1);
    $data=[];
    foreach($array['results'] as $value){
        array_push($data,$value);
    }
    $result['results']=$data; 
    echo json_encode($result);
});

$router->map('GET', '/people/[i:page]?', function($page) {
    if ($page == ''){$page=1;}
    $url                = $GLOBALS["base_url"].'/people/?page=' . $page;
    $json               = file_get_contents($url);
    $array              = json_decode($json,1);
    $result['pages']    = intval($array['count']/10+1);
    $result['page']     = intval($page);
    $data=[];
    foreach($array['results'] as $value){
        array_push($data,$value);
    }
    $result['results']=$data; 
    echo json_encode($result);
});

$router->map('GET', '/planets/[i:page]?', function($page) {
    if ($page == ''){$page=1;}
    $url        = $GLOBALS["base_url"].'/planets/?page=' . $page;
    $json               = file_get_contents($url);
    $array              = json_decode($json,1);
    $result['pages']    = intval($array['count']/10+1);
    $result['page']     = intval($page);
    $data=[];
    foreach($array['results'] as $value){
        array_push($data,$value);
    }
    $result['results']=$data; 
    echo json_encode($result);
});

$router->map('GET', '/starships/[i:page]?', function($page) {
    if ($page == ''){$page=1;}
    $url        = $GLOBALS["base_url"].'/starships/?page=' . $page;
    $json               = file_get_contents($url);
    $array              = json_decode($json,1);
    $result['pages']    = intval($array['count']/10+1);
    $result['page']     = intval($page);
    $data=[];
    foreach($array['results'] as $value){
        array_push($data,$value);
    }
    $result['results']=$data; 
    echo json_encode($result);
});

// match the current request against the defined routes
$match = $router->match();

// if a match is found, call the corresponding function
if ($match && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // handle the case where no match is found
    echo '404 Page Not Found';
}
?>