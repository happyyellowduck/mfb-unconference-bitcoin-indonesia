<?php
// Output static HTML safely
$path = get_stylesheet_directory() . '/index.html';

if (file_exists($path)) {
    echo file_get_contents($path);
} else {
    echo 'index.html not found';
}
