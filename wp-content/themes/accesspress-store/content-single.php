<?php
/**
 * @package AccessPress Root
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	
	<div class="entry-content">
		<?php if(has_post_thumbnail()): ?>
			<div class="post-thumbnail">
				<?php the_post_thumbnail('accesspress-blog-big-thumbnail'); ?>
			</div>
		<?php endif; ?>
		<span class="cat-name"><?php $category = get_the_category(); echo esc_html($category[0]->cat_name); ?></span>
		<h2 class="post-title"><?php the_title();?></h2>		
        <p class="meta-info">
            <?php echo esc_html__('Posted On', 'accesspress-store'); ?> 
            <?php the_time('F j, Y'); ?> 
            <?php echo esc_html__('at', 'accesspress-store'); ?>
            <?php the_time('g:i a'); ?> 
            <?php echo esc_html__('by', 'accesspress-store'); ?>
			<?php the_author_posts_link(); ?> /  <?php comments_popup_link('No Comments', '1 Comment', '% Comments'); ?>
        </p>
		<div class="content-page">
		  <?php the_content(); ?>
        </div>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'accesspress-store' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->
	
</article><!-- #post-## -->
