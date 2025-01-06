<?php
function hello_elementor_child_enqueue_styles() {
    wp_enqueue_style( 'hello-elementor-child-style', get_stylesheet_uri(), array( 'hello-elementor' ), wp_get_theme()->get('Version') );
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_styles' );
