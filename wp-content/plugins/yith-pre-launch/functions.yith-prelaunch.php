<?php
/**
 * Functions
 *
 * @author Your Inspiration Themes
 * @package YITH Pre-Launch
 * @version 1.0.2
 */

if ( !defined( 'YITH_PRELAUNCH' ) ) { exit; } // Exit if accessed directly

if( !function_exists( 'yith_prelaunch_is_enabled' ) ) {
    /**
     * Return if the plugin is enabled
     *
     * @return bool
     * @since 1.0.0
     */
    function yith_prelaunch_is_enabled() {
        return get_option('yith_prelaunch_enable') == '1';
    }
}

if( !function_exists( 'yith_prelaunch_unixstamp' ) ) {
    /**
     * Return if the plugin is enabled
     *
     * @param array $date The date from the option
     * @return integer
     * @since 1.0.0
     */
    function yith_prelaunch_unixstamp( $date ) {

        // parse date
        $date_parse = !empty( $date['date'] ) ? date_parse( $date['date'] ) : array();
        // double check for date_parse result
        ! $date_parse && $date_parse = array();

        $mm = isset( $date_parse['month'] ) ? $date_parse['month'] : 0;
        $yy = isset( $date_parse['year'] ) ? $date_parse['year'] : 0;
        $dd = isset( $date_parse['day'] ) ? $date_parse['day'] : 0;
        $h = $date['hh'];
        $m = $date['mm'];
        $s = $date['ss'];

        return mktime( (int) $h, (int) $m, (int) $s, (int) $mm, (int) $dd, (int) $yy );
    }
}

if( !function_exists( 'yith_countdown_days' ) ) {
    /**
     * How many days remains to $to
     *
     * @return bool
     * @since 1.0.0
     */
    function yith_countdown_days( $to ) {
        return floor( ( $to - time() ) / 60 / 60 / 24 );
    }
}

if( !function_exists( 'yith_countdown_hours' ) ) {
    /**
     * How many days remains to $to
     *
     * @return bool
     * @since 1.0.0
     */
    function yith_countdown_hours( $to ) {
        return floor( ( $to - time() ) / 60 / 60 );
    }
}

if( !function_exists( 'yith_countdown_minutes' ) ) {
    /**
     * How many days remains to $to
     *
     * @return bool
     * @since 1.0.0
     */
    function yith_countdown_minutes( $to ) {
        return floor( ( $to - time() ) / 60 );
    }
}

if( !function_exists( 'yith_countdown_seconds' ) ) {
    /**
     * How many days remains to $to
     *
     * @return bool
     * @since 1.0.0
     */
    function yith_countdown_seconds( $to ) {
        return $to - time();
    }
}