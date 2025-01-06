<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%i-ciJTPu4}2FKFK@!Ev5lFA?,-7C5bp(ArKLUc?-TXYP* L=Q|vhhFs,Pb4ag;Z' );
define( 'SECURE_AUTH_KEY',  '`DA3Nk;E&WF%ut`uwmM@j8F!LtReoh;WKhu9%FO $)!>b+RhQj%-Xuf*Z,1kubU+' );
define( 'LOGGED_IN_KEY',    '.cg+wm5ER|@w__D~c Uj@OhIEV>8^%8FXZ)O:N{d.k_m}K76WXzuV+/G|w4Llp37' );
define( 'NONCE_KEY',        '<Gqk9~Xy5|Y|Cfbg:k(i*0V8^P1#5:$e0`nH_q2@k==1Ys(FtE LNsX[wWCw.dxp' );
define( 'AUTH_SALT',        '/Ex76LdIgjga2xl[b2m/>v}p_LGk^%}7vVWuTDm bQZxI-dq@Gx/OFA:S}|?z?{3' );
define( 'SECURE_AUTH_SALT', 'O;D]T8R9I)FSr2-Z<RO`0zq|a$yj_C/Cq1.R8=Al0{sV7/g;m jDp,G==a0Dm4wn' );
define( 'LOGGED_IN_SALT',   'fPM9Ll<~6J|3iM|Mh~pb_g+%h$fic$c):@gBl3@`=^m(/Mwf^p72ei=9[f [m_NI' );
define( 'NONCE_SALT',       'oPz;b/6e,eq>KpuHpkn$/ErI5A^,-[F9>_%`yN9Gwis@IF p&x=ZX,MUsD7hD;U>' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
