<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
    
    <!-- Custom CSS Variables from WordPress Customizer -->
    <style>
        :root {
            --brand-primary: <?php echo get_theme_mod('brand_primary_color', '#2563eb'); ?>;
            --brand-secondary: <?php echo get_theme_mod('brand_secondary_color', '#16a34a'); ?>;
        }
    </style>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="site-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-scroll" ref="headerRef">
    <nav class="bg-white border-b border-brand-border shadow-sm">
        <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
            <div class="flex items-center justify-between h-22">
                
                <!-- Logo Section -->
                <div class="flex items-center space-x-3">
                    <a href="<?php echo home_url(); ?>" class="flex items-center space-x-3 hover:opacity-90 transition-opacity">
                        <?php if (has_custom_logo()) : ?>
                            <div class="w-12 h-12 flex-shrink-0">
                                <?php the_custom_logo(); ?>
                            </div>
                        <?php else : ?>
                            <img src="https://i.ibb.co/BKHgCBNC/gem-new-logo-icon-removebg-preview.png" 
                                 alt="<?php bloginfo('name'); ?>" 
                                 class="w-12 h-12 object-contain">
                        <?php endif; ?>
                        <div>
                            <div class="text-xl font-bold text-brand-text-primary">
                                <?php bloginfo('name'); ?>
                            </div>
                            <?php if (get_bloginfo('description')) : ?>
                                <div class="text-xs text-brand-text-secondary hidden sm:block">
                                    <?php bloginfo('description'); ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex items-center space-x-8',
                        'fallback_cb' => 'gem_fallback_menu',
                        'walker' => new Gem_Nav_Walker()
                    ));
                    ?>
                    
                    <!-- CTA Button -->
                    <div class="ml-8">
                        <a href="<?php echo home_url('/donate'); ?>" 
                           class="bg-brand-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
                            <?php _e('Donate Now', 'gem-project'); ?>
                        </a>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" 
                        class="lg:hidden p-2 rounded-md text-brand-text-primary hover:bg-gray-100 transition-colors"
                        aria-label="<?php _e('Toggle mobile menu', 'gem-project'); ?>">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-brand-border">
            <div class="container mx-auto px-4 py-4">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'mobile',
                    'container' => false,
                    'menu_class' => 'space-y-4',
                    'fallback_cb' => 'gem_fallback_mobile_menu',
                    'walker' => new Gem_Mobile_Nav_Walker()
                ));
                ?>
                
                <!-- Mobile CTA Button -->
                <div class="pt-4 border-t border-brand-border">
                    <a href="<?php echo home_url('/donate'); ?>" 
                       class="block w-full text-center bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300">
                        <?php _e('Donate Now', 'gem-project'); ?>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</header>

<!-- Main Content Container -->
<main id="main-content" class="pt-22 animate-page-fade max-content-width-lg">

<?php
/**
 * Custom Navigation Walker for Desktop Menu
 */
class Gem_Nav_Walker extends Walker_Nav_Menu {
    
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<div class="dropdown-menu absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 hidden">';
        $output .= '<div class="py-2">';
    }
    
    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</div></div>';
    }
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        if ($depth === 0) {
            $output .= '<div class="relative dropdown-container">';
            $output .= '<a href="' . $item->url . '" class="flex items-center space-x-1 text-brand-text-primary hover:text-brand-primary font-medium transition-colors py-2">';
            $output .= $item->title;
            
            // Check if item has children
            if (in_array('menu-item-has-children', $classes)) {
                $output .= '<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">';
                $output .= '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';
                $output .= '</svg>';
            }
            $output .= '</a>';
        } else {
            $output .= '<a href="' . $item->url . '" class="block px-4 py-2 text-sm text-brand-text-primary hover:bg-gray-50 hover:text-brand-primary transition-colors">';
            $output .= $item->title;
            $output .= '</a>';
        }
    }
    
    function end_el(&$output, $item, $depth = 0, $args = null) {
        if ($depth === 0) {
            $output .= '</div>';
        }
    }
}

/**
 * Custom Mobile Navigation Walker
 */
class Gem_Mobile_Nav_Walker extends Walker_Nav_Menu {
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        
        if ($depth === 0) {
            $output .= '<div class="mobile-menu-item">';
            $output .= '<a href="' . $item->url . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">';
            $output .= $item->title;
            $output .= '</a>';
        } else {
            $output .= '<a href="' . $item->url . '" class="block text-sm text-brand-text-secondary hover:text-brand-primary py-1 pl-4 transition-colors">';
            $output .= $item->title;
            $output .= '</a>';
        }
    }
    
    function end_el(&$output, $item, $depth = 0, $args = null) {
        if ($depth === 0) {
            $output .= '</div>';
        }
    }
}

/**
 * Fallback menu for when no menu is assigned
 */
function gem_fallback_menu() {
    echo '<div class="flex items-center space-x-8">';
    echo '<a href="' . home_url() . '" class="text-brand-text-primary hover:text-brand-primary font-medium transition-colors">' . __('Home', 'gem-project') . '</a>';
    echo '<a href="' . home_url('/about') . '" class="text-brand-text-primary hover:text-brand-primary font-medium transition-colors">' . __('About', 'gem-project') . '</a>';
    echo '<a href="' . get_post_type_archive_link('dog') . '" class="text-brand-text-primary hover:text-brand-primary font-medium transition-colors">' . __('Dogs', 'gem-project') . '</a>';
    echo '<a href="' . get_post_type_archive_link('horse') . '" class="text-brand-text-primary hover:text-brand-primary font-medium transition-colors">' . __('Horses', 'gem-project') . '</a>';
    echo '<a href="' . home_url('/contact') . '" class="text-brand-text-primary hover:text-brand-primary font-medium transition-colors">' . __('Contact', 'gem-project') . '</a>';
    echo '</div>';
}

/**
 * Fallback mobile menu
 */
function gem_fallback_mobile_menu() {
    echo '<div class="space-y-4">';
    echo '<a href="' . home_url() . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">' . __('Home', 'gem-project') . '</a>';
    echo '<a href="' . home_url('/about') . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">' . __('About', 'gem-project') . '</a>';
    echo '<a href="' . get_post_type_archive_link('dog') . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">' . __('Dogs', 'gem-project') . '</a>';
    echo '<a href="' . get_post_type_archive_link('horse') . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">' . __('Horses', 'gem-project') . '</a>';
    echo '<a href="' . home_url('/contact') . '" class="block text-brand-text-primary hover:text-brand-primary font-medium py-2 transition-colors">' . __('Contact', 'gem-project') . '</a>';
    echo '</div>';
}
?>