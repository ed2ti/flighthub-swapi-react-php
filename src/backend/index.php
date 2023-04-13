<?php
require 'AltoRouter.php';

//AltoRouter instance
$router     = new AltoRouter();
$base_url   = 'https://swapi.dev/api';


// map the four endpoints
$router->map('GET', '/person/[i:name]', function() {
    $url        = $GLOBALS["base_url"].'/people';
    $resut      = file_get_contents($url);
    echo $resut;
});

$router->map('GET', '/people/[i:page]', function($page) {
    if ($page == ''){$page=1;}
    $url        = $GLOBALS["base_url"].'/people/?page=' . $page;
    $resut      = file_get_contents($url);
    echo $resut;
});

$router->map('GET', '/planets', function($page) {
    $url        = $GLOBALS["base_url"].'/planets/?page=' . $page;
    $resut      = file_get_contents($url);
    echo $resut;
});

$router->map('GET', '/starships', function($page) {
    $url        = $GLOBALS["base_url"].'/starships/?page=' . $page;
    $resut      = file_get_contents($url);
    echo $resut;
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