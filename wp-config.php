<?php

//Begin Really Simple SSL Load balancing fix
if ((isset($_ENV["HTTPS"]) && ("on" == $_ENV["HTTPS"]))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "1") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "on") !== false))
|| (isset($_SERVER["HTTP_CF_VISITOR"]) && (strpos($_SERVER["HTTP_CF_VISITOR"], "https") !== false))
|| (isset($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_X_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_PROTO"]) && (strpos($_SERVER["HTTP_X_PROTO"], "SSL") !== false))
) {
$_SERVER["HTTPS"] = "on";
}
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'encyclov_shopsellence');

/** MySQL database username */
define('DB_USER', 'encyclov_shopsel');

/** MySQL database password */
define('DB_PASSWORD', 'ABC#123&drm');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'QzI}I:pU,dTM]>7h+O,u>58W&tSJ`#+/:T~Q$|Kg{Kduh9&ohU.:9I</+%LIC #q');
define('SECURE_AUTH_KEY',  'jW5NXs68x>;BUQw{[Y%im,~y1#F4R%ZtU;If[hjAjSbVORXX?AN5JQ.BUgGQUa]?');
define('LOGGED_IN_KEY',    ';=zS7No>SU]xs*8=`XkAW{c@iakX,d|T7Jxx3i|G]U$G_Vh8UwUj4z%w@I5^(H~,');
define('NONCE_KEY',        'KY?VXi5p~eTd:3](pJ8h[zSH>Pc>-hZ]n`;`OaJNqg2f~.pEZ.w#,I,bwOfgd]!D');
define('AUTH_SALT',        '9wlr))()8HEi-L;a~wQ2JVfO7]99x?+Q`[.^5}V#Q!vne3<fV(m>yYldkN%XLs8 ');
define('SECURE_AUTH_SALT', '%~{xKnlLDPo~p~DBv$eW=r}Ax,Y,7]qqO.DnQ.CvHC?{&l<yBLMXe=-n-S;|!%j!');
define('LOGGED_IN_SALT',   ':omNcUiEpk7h3M-#49:BB8/1pYj%7l@f3O1WJ[@jWv!*3l}<8<=A0puf]=i@3Au5');
define('NONCE_SALT',       '!%6xPwGL!10_f/OOqK-5%<T#k8]N~];2yO3ZU/!ig1omW$3PUaKS!;I;y0)&N>U0');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'shp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
 
define( 'WP_DEBUG', false);
define('WP_SITEURL','https://shopsellence.com' );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
