<?php

function add_my_files()
{
    wp_enqueue_style('ress', '//unpkg.com/ress/dist/ress.min.css', array(), false, 'all');
    wp_enqueue_style('style', get_stylesheet_uri(), array('ress'), false, 'all');
    wp_enqueue_style('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
    wp_enqueue_style('moddal', 'https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/css/modaal.min.css');

    wp_enqueue_script('script', get_theme_file_uri('/assets/js/main.js'), array('jquery'), false, false);
    wp_enqueue_script('slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'),);
    wp_enqueue_script('TweenMax', '//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', array('jquery'),);
    wp_enqueue_script('moddal', 'https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/js/modaal.min.js', array('jquery'),);
}
add_action('wp_enqueue_scripts', 'add_my_files');
