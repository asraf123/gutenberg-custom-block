<?php
/**
 * Plugin Name: gutenberg-custom-block
 * Plugin URI: https://github.com/asraf123/gutenberg-custom-block
 * Description: gutenberg-custom-block — is a Gutenberg plugin created via create-guten-block.
 * Author: asraf
 * Author URI: http://iasraf.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package AKS
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
