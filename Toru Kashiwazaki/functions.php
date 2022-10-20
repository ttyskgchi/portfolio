<?php

function add_my_files()
{
    wp_enqueue_style('ress', '//unpkg.com/ress/dist/ress.min.css', array(), false, 'all');
    wp_enqueue_style('style', get_stylesheet_uri(), array('ress'), false, 'all');

    wp_enqueue_script('script', get_theme_file_uri('/assets/js/main.js'), array('jquery'), false, false);
}
add_action('wp_enqueue_scripts', 'add_my_files');
