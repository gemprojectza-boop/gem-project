<?php
/**
 * The Gem Project Theme Functions
 * 
 * Sets up theme functionality including custom post types,
 * visual editing capabilities, and content management
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme constants
define('GEM_THEME_VERSION', '1.0.0');
define('GEM_THEME_URI', get_template_directory_uri());
define('GEM_THEME_PATH', get_template_directory());

/**
 * Theme Setup
 */
function gem_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    add_theme_support('custom-header');
    add_theme_support('custom-background');
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    
    // Custom image sizes
    add_image_size('animal-profile', 800, 600, true);
    add_image_size('animal-gallery', 400, 400, true);
    add_image_size('hero-banner', 1920, 800, true);
    add_image_size('story-image', 600, 400, true);
    
    // Navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'gem-project'),
        'footer' => __('Footer Menu', 'gem-project'),
        'mobile' => __('Mobile Menu', 'gem-project'),
    ));
    
    // Load text domain
    load_theme_textdomain('gem-project', get_template_directory() . '/languages');
}
add_action('after_setup_theme', 'gem_theme_setup');

/**
 * Enqueue Scripts and Styles
 */
function gem_theme_scripts() {
    // Tailwind CSS built stylesheet
    $tailwind_css = GEM_THEME_URI . '/assets/css/style.css';
    $fallback_css = get_stylesheet_uri();
    
    // Check if Tailwind built file exists, otherwise use fallback
    $css_file = file_exists(GEM_THEME_PATH . '/assets/css/style.css') ? $tailwind_css : $fallback_css;
    wp_enqueue_style('gem-theme-style', $css_file, array(), GEM_THEME_VERSION);
    
    // Custom JavaScript for theme functionality
    wp_enqueue_script('gem-theme-script', GEM_THEME_URI . '/assets/js/theme.js', array('jquery'), GEM_THEME_VERSION, true);
    
    // Localize script for AJAX
    wp_localize_script('gem-theme-script', 'gem_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('gem_nonce'),
        'theme_uri' => GEM_THEME_URI
    ));
    
    // Load responsive images script
    wp_enqueue_script('gem-responsive-images', GEM_THEME_URI . '/assets/js/responsive-images.js', array(), GEM_THEME_VERSION, true);
    
    // Animation observer script
    wp_enqueue_script('gem-scroll-animations', GEM_THEME_URI . '/assets/js/scroll-animations.js', array(), GEM_THEME_VERSION, true);
    
    // Hero carousel script
    wp_enqueue_script('gem-hero-carousel', GEM_THEME_URI . '/assets/js/hero-carousel.js', array(), GEM_THEME_VERSION, true);
}
add_action('wp_enqueue_scripts', 'gem_theme_scripts');

/**
 * Custom Post Types
 */
function gem_register_post_types() {
    // Horses Post Type
    register_post_type('horse', array(
        'labels' => array(
            'name' => __('Horses', 'gem-project'),
            'singular_name' => __('Horse', 'gem-project'),
            'add_new' => __('Add New Horse', 'gem-project'),
            'add_new_item' => __('Add New Horse', 'gem-project'),
            'edit_item' => __('Edit Horse', 'gem-project'),
            'new_item' => __('New Horse', 'gem-project'),
            'view_item' => __('View Horse', 'gem-project'),
            'search_items' => __('Search Horses', 'gem-project'),
            'not_found' => __('No horses found', 'gem-project'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-pets',
        'menu_position' => 20,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'horses'),
        'show_in_rest' => true,
    ));
    
    // Dogs Post Type
    register_post_type('dog', array(
        'labels' => array(
            'name' => __('Dogs', 'gem-project'),
            'singular_name' => __('Dog', 'gem-project'),
            'add_new' => __('Add New Dog', 'gem-project'),
            'add_new_item' => __('Add New Dog', 'gem-project'),
            'edit_item' => __('Edit Dog', 'gem-project'),
            'new_item' => __('New Dog', 'gem-project'),
            'view_item' => __('View Dog', 'gem-project'),
            'search_items' => __('Search Dogs', 'gem-project'),
            'not_found' => __('No dogs found', 'gem-project'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-buddicons-buddypress-logo',
        'menu_position' => 21,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'dogs'),
        'show_in_rest' => true,
    ));
    
    // Success Stories Post Type
    register_post_type('success_story', array(
        'labels' => array(
            'name' => __('Success Stories', 'gem-project'),
            'singular_name' => __('Success Story', 'gem-project'),
            'add_new' => __('Add New Story', 'gem-project'),
            'add_new_item' => __('Add New Success Story', 'gem-project'),
            'edit_item' => __('Edit Success Story', 'gem-project'),
            'new_item' => __('New Success Story', 'gem-project'),
            'view_item' => __('View Success Story', 'gem-project'),
            'search_items' => __('Search Stories', 'gem-project'),
            'not_found' => __('No stories found', 'gem-project'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-heart',
        'menu_position' => 22,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'success-stories'),
        'show_in_rest' => true,
    ));
    
    // Team Members Post Type
    register_post_type('team_member', array(
        'labels' => array(
            'name' => __('Team Members', 'gem-project'),
            'singular_name' => __('Team Member', 'gem-project'),
            'add_new' => __('Add New Member', 'gem-project'),
            'add_new_item' => __('Add New Team Member', 'gem-project'),
            'edit_item' => __('Edit Team Member', 'gem-project'),
            'new_item' => __('New Team Member', 'gem-project'),
            'view_item' => __('View Team Member', 'gem-project'),
            'search_items' => __('Search Team', 'gem-project'),
            'not_found' => __('No team members found', 'gem-project'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-groups',
        'menu_position' => 23,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'rewrite' => array('slug' => 'team'),
        'show_in_rest' => true,
    ));
}
add_action('init', 'gem_register_post_types');

/**
 * Custom Taxonomies
 */
function gem_register_taxonomies() {
    // Animal Status Taxonomy
    register_taxonomy('animal_status', array('horse', 'dog'), array(
        'labels' => array(
            'name' => __('Animal Status', 'gem-project'),
            'singular_name' => __('Status', 'gem-project'),
            'add_new_item' => __('Add New Status', 'gem-project'),
            'edit_item' => __('Edit Status', 'gem-project'),
        ),
        'hierarchical' => false,
        'public' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'status'),
    ));
    
    // Animal Breed Taxonomy
    register_taxonomy('animal_breed', array('horse', 'dog'), array(
        'labels' => array(
            'name' => __('Breeds', 'gem-project'),
            'singular_name' => __('Breed', 'gem-project'),
            'add_new_item' => __('Add New Breed', 'gem-project'),
            'edit_item' => __('Edit Breed', 'gem-project'),
        ),
        'hierarchical' => true,
        'public' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'breed'),
    ));
}
add_action('init', 'gem_register_taxonomies');

/**
 * Widget Areas
 */
function gem_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget 1', 'gem-project'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in the first footer column.', 'gem-project'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget 2', 'gem-project'),
        'id' => 'footer-2',
        'description' => __('Add widgets here to appear in the second footer column.', 'gem-project'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget 3', 'gem-project'),
        'id' => 'footer-3',
        'description' => __('Add widgets here to appear in the third footer column.', 'gem-project'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'gem_widgets_init');

/**
 * Customizer Setup
 */
function gem_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('gem_hero', array(
        'title' => __('Hero Section', 'gem-project'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('hero_title', array(
        'default' => 'Welcome to The Gem Project',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'gem-project'),
        'section' => 'gem_hero',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('hero_subtitle', array(
        'default' => 'A sanctuary for animals in need',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('hero_subtitle', array(
        'label' => __('Hero Subtitle', 'gem-project'),
        'section' => 'gem_hero',
        'type' => 'textarea',
    ));
    
    // Colors Section
    $wp_customize->add_section('gem_colors', array(
        'title' => __('Brand Colors', 'gem-project'),
        'priority' => 40,
    ));
    
    $wp_customize->add_setting('brand_primary_color', array(
        'default' => '#2563eb',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'brand_primary_color', array(
        'label' => __('Primary Color', 'gem-project'),
        'section' => 'gem_colors',
    )));
    
    $wp_customize->add_setting('brand_secondary_color', array(
        'default' => '#16a34a',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'brand_secondary_color', array(
        'label' => __('Secondary Color (Horses)', 'gem-project'),
        'section' => 'gem_colors',
    )));
    
    // Contact Information
    $wp_customize->add_section('gem_contact', array(
        'title' => __('Contact Information', 'gem-project'),
        'priority' => 50,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone Number', 'gem-project'),
        'section' => 'gem_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label' => __('Email Address', 'gem-project'),
        'section' => 'gem_contact',
        'type' => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default' => '',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'gem-project'),
        'section' => 'gem_contact',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'gem_customize_register');

/**
 * Custom Admin Menus
 */
function gem_admin_menu() {
    add_menu_page(
        __('Gem Project', 'gem-project'),
        __('Gem Project', 'gem-project'),
        'manage_options',
        'gem-project-dashboard',
        'gem_dashboard_page',
        'dashicons-pets',
        2
    );
    
    add_submenu_page(
        'gem-project-dashboard',
        __('Theme Options', 'gem-project'),
        __('Theme Options', 'gem-project'),
        'manage_options',
        'gem-theme-options',
        'gem_theme_options_page'
    );
    
    add_submenu_page(
        'gem-project-dashboard',
        __('Import/Export', 'gem-project'),
        __('Import/Export', 'gem-project'),
        'manage_options',
        'gem-import-export',
        'gem_import_export_page'
    );
}
add_action('admin_menu', 'gem_admin_menu');

/**
 * Dashboard Page
 */
function gem_dashboard_page() {
    ?>
    <div class="wrap">
        <h1><?php _e('Gem Project Dashboard', 'gem-project'); ?></h1>
        <div class="gem-dashboard">
            <div class="gem-stats">
                <div class="gem-stat-box">
                    <h3><?php _e('Horses', 'gem-project'); ?></h3>
                    <p class="gem-stat-number"><?php echo wp_count_posts('horse')->publish; ?></p>
                </div>
                <div class="gem-stat-box">
                    <h3><?php _e('Dogs', 'gem-project'); ?></h3>
                    <p class="gem-stat-number"><?php echo wp_count_posts('dog')->publish; ?></p>
                </div>
                <div class="gem-stat-box">
                    <h3><?php _e('Success Stories', 'gem-project'); ?></h3>
                    <p class="gem-stat-number"><?php echo wp_count_posts('success_story')->publish; ?></p>
                </div>
            </div>
            <div class="gem-quick-actions">
                <h3><?php _e('Quick Actions', 'gem-project'); ?></h3>
                <a href="<?php echo admin_url('post-new.php?post_type=horse'); ?>" class="button button-primary"><?php _e('Add New Horse', 'gem-project'); ?></a>
                <a href="<?php echo admin_url('post-new.php?post_type=dog'); ?>" class="button button-primary"><?php _e('Add New Dog', 'gem-project'); ?></a>
                <a href="<?php echo admin_url('post-new.php?post_type=success_story'); ?>" class="button button-primary"><?php _e('Add Success Story', 'gem-project'); ?></a>
                <a href="<?php echo admin_url('customize.php'); ?>" class="button button-secondary"><?php _e('Customize Theme', 'gem-project'); ?></a>
            </div>
        </div>
        
        <style>
        .gem-dashboard { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; }
        .gem-stats { display: flex; gap: 20px; flex: 1; }
        .gem-stat-box { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center; min-width: 120px; }
        .gem-stat-number { font-size: 2em; font-weight: bold; color: #2563eb; margin: 0; }
        .gem-quick-actions { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .gem-quick-actions .button { margin-right: 10px; margin-bottom: 10px; }
        </style>
    </div>
    <?php
}

/**
 * Theme Options Page
 */
function gem_theme_options_page() {
    if (isset($_POST['submit'])) {
        update_option('gem_theme_options', $_POST['gem_options']);
        echo '<div class="notice notice-success"><p>' . __('Settings saved!', 'gem-project') . '</p></div>';
    }
    
    $options = get_option('gem_theme_options', array());
    ?>
    <div class="wrap">
        <h1><?php _e('Theme Options', 'gem-project'); ?></h1>
        <form method="post" action="">
            <table class="form-table">
                <tr>
                    <th scope="row"><?php _e('Enable Hero Slider', 'gem-project'); ?></th>
                    <td>
                        <input type="checkbox" name="gem_options[hero_slider]" value="1" <?php checked(isset($options['hero_slider']) ? $options['hero_slider'] : 0, 1); ?>>
                        <p class="description"><?php _e('Enable the hero image slider on the homepage', 'gem-project'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Animals Per Page', 'gem-project'); ?></th>
                    <td>
                        <input type="number" name="gem_options[animals_per_page]" value="<?php echo isset($options['animals_per_page']) ? $options['animals_per_page'] : 12; ?>" min="1" max="50">
                        <p class="description"><?php _e('Number of animals to display per page in archives', 'gem-project'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><?php _e('Social Media Links', 'gem-project'); ?></th>
                    <td>
                        <p><label><?php _e('Facebook:', 'gem-project'); ?> <input type="url" name="gem_options[facebook]" value="<?php echo isset($options['facebook']) ? esc_url($options['facebook']) : ''; ?>" style="width: 300px;"></label></p>
                        <p><label><?php _e('Instagram:', 'gem-project'); ?> <input type="url" name="gem_options[instagram]" value="<?php echo isset($options['instagram']) ? esc_url($options['instagram']) : ''; ?>" style="width: 300px;"></label></p>
                        <p><label><?php _e('Twitter:', 'gem-project'); ?> <input type="url" name="gem_options[twitter]" value="<?php echo isset($options['twitter']) ? esc_url($options['twitter']) : ''; ?>" style="width: 300px;"></label></p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

/**
 * Import/Export Page
 */
function gem_import_export_page() {
    ?>
    <div class="wrap">
        <h1><?php _e('Import/Export Content', 'gem-project'); ?></h1>
        <p><?php _e('Import animal data from your existing React site or export current data.', 'gem-project'); ?></p>
        
        <h2><?php _e('Import from React Site', 'gem-project'); ?></h2>
        <form method="post" enctype="multipart/form-data">
            <?php wp_nonce_field('gem_import', 'gem_import_nonce'); ?>
            <table class="form-table">
                <tr>
                    <th><?php _e('JSON Data File', 'gem-project'); ?></th>
                    <td><input type="file" name="import_file" accept=".json"></td>
                </tr>
            </table>
            <input type="submit" name="import_data" class="button button-primary" value="<?php _e('Import Data', 'gem-project'); ?>">
        </form>
        
        <hr>
        
        <h2><?php _e('Export Current Data', 'gem-project'); ?></h2>
        <p><?php _e('Download all animals, stories, and settings as JSON.', 'gem-project'); ?></p>
        <a href="<?php echo admin_url('admin.php?page=gem-import-export&export=true'); ?>" class="button button-secondary"><?php _e('Export Data', 'gem-project'); ?></a>
    </div>
    <?php
}

/**
 * Handle data import/export
 */
function gem_handle_import_export() {
    if (isset($_POST['import_data']) && wp_verify_nonce($_POST['gem_import_nonce'], 'gem_import')) {
        // Handle import logic here
        // This would parse the JSON and create WordPress posts
    }
    
    if (isset($_GET['export']) && $_GET['export'] === 'true') {
        // Handle export logic here
        // This would generate JSON of all animals and stories
        $data = array(
            'horses' => get_posts(array('post_type' => 'horse', 'numberposts' => -1)),
            'dogs' => get_posts(array('post_type' => 'dog', 'numberposts' => -1)),
            'stories' => get_posts(array('post_type' => 'success_story', 'numberposts' => -1)),
        );
        
        header('Content-Type: application/json');
        header('Content-Disposition: attachment; filename="gem-project-export-' . date('Y-m-d') . '.json"');
        echo json_encode($data, JSON_PRETTY_PRINT);
        exit;
    }
}
add_action('admin_init', 'gem_handle_import_export');

/**
 * Add custom fields meta boxes
 */
function gem_add_meta_boxes() {
    // Horse meta box
    add_meta_box(
        'horse-details',
        __('Horse Details', 'gem-project'),
        'gem_horse_meta_box',
        'horse',
        'normal',
        'high'
    );
    
    // Dog meta box
    add_meta_box(
        'dog-details',
        __('Dog Details', 'gem-project'),
        'gem_dog_meta_box',
        'dog',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'gem_add_meta_boxes');

/**
 * Horse meta box content
 */
function gem_horse_meta_box($post) {
    wp_nonce_field('gem_horse_meta', 'gem_horse_nonce');
    
    $age = get_post_meta($post->ID, '_horse_age', true);
    $breed = get_post_meta($post->ID, '_horse_breed', true);
    $gender = get_post_meta($post->ID, '_horse_gender', true);
    $status = get_post_meta($post->ID, '_horse_status', true);
    $ideal_home = get_post_meta($post->ID, '_horse_ideal_home', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="horse_age"><?php _e('Age', 'gem-project'); ?></label></th>
            <td><input type="text" id="horse_age" name="horse_age" value="<?php echo esc_attr($age); ?>"></td>
        </tr>
        <tr>
            <th><label for="horse_breed"><?php _e('Breed', 'gem-project'); ?></label></th>
            <td><input type="text" id="horse_breed" name="horse_breed" value="<?php echo esc_attr($breed); ?>"></td>
        </tr>
        <tr>
            <th><label for="horse_gender"><?php _e('Gender', 'gem-project'); ?></label></th>
            <td>
                <select id="horse_gender" name="horse_gender">
                    <option value="mare" <?php selected($gender, 'mare'); ?>><?php _e('Mare', 'gem-project'); ?></option>
                    <option value="stallion" <?php selected($gender, 'stallion'); ?>><?php _e('Stallion', 'gem-project'); ?></option>
                    <option value="gelding" <?php selected($gender, 'gelding'); ?>><?php _e('Gelding', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="horse_status"><?php _e('Status', 'gem-project'); ?></label></th>
            <td>
                <select id="horse_status" name="horse_status">
                    <option value="available" <?php selected($status, 'available'); ?>><?php _e('Available', 'gem-project'); ?></option>
                    <option value="pending" <?php selected($status, 'pending'); ?>><?php _e('Adoption Pending', 'gem-project'); ?></option>
                    <option value="adopted" <?php selected($status, 'adopted'); ?>><?php _e('Adopted', 'gem-project'); ?></option>
                    <option value="forever" <?php selected($status, 'forever'); ?>><?php _e('Forever Sanctuary', 'gem-project'); ?></option>
                    <option value="future" <?php selected($status, 'future'); ?>><?php _e('Future Adoptable', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="horse_ideal_home"><?php _e('Ideal Home', 'gem-project'); ?></label></th>
            <td><textarea id="horse_ideal_home" name="horse_ideal_home" rows="3" style="width:100%;"><?php echo esc_textarea($ideal_home); ?></textarea></td>
        </tr>
    </table>
    <?php
}

/**
 * Dog meta box content
 */
function gem_dog_meta_box($post) {
    wp_nonce_field('gem_dog_meta', 'gem_dog_nonce');
    
    $age = get_post_meta($post->ID, '_dog_age', true);
    $breed = get_post_meta($post->ID, '_dog_breed', true);
    $gender = get_post_meta($post->ID, '_dog_gender', true);
    $size = get_post_meta($post->ID, '_dog_size', true);
    $sterilised = get_post_meta($post->ID, '_dog_sterilised', true);
    $status = get_post_meta($post->ID, '_dog_status', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="dog_age"><?php _e('Age', 'gem-project'); ?></label></th>
            <td><input type="text" id="dog_age" name="dog_age" value="<?php echo esc_attr($age); ?>"></td>
        </tr>
        <tr>
            <th><label for="dog_breed"><?php _e('Breed', 'gem-project'); ?></label></th>
            <td><input type="text" id="dog_breed" name="dog_breed" value="<?php echo esc_attr($breed); ?>"></td>
        </tr>
        <tr>
            <th><label for="dog_gender"><?php _e('Gender', 'gem-project'); ?></label></th>
            <td>
                <select id="dog_gender" name="dog_gender">
                    <option value="male" <?php selected($gender, 'male'); ?>><?php _e('Male', 'gem-project'); ?></option>
                    <option value="female" <?php selected($gender, 'female'); ?>><?php _e('Female', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="dog_size"><?php _e('Size', 'gem-project'); ?></label></th>
            <td>
                <select id="dog_size" name="dog_size">
                    <option value="small" <?php selected($size, 'small'); ?>><?php _e('Small', 'gem-project'); ?></option>
                    <option value="medium" <?php selected($size, 'medium'); ?>><?php _e('Medium', 'gem-project'); ?></option>
                    <option value="large" <?php selected($size, 'large'); ?>><?php _e('Large', 'gem-project'); ?></option>
                    <option value="extra-large" <?php selected($size, 'extra-large'); ?>><?php _e('Extra Large', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="dog_sterilised"><?php _e('Sterilised', 'gem-project'); ?></label></th>
            <td>
                <select id="dog_sterilised" name="dog_sterilised">
                    <option value="yes" <?php selected($sterilised, 'yes'); ?>><?php _e('Yes', 'gem-project'); ?></option>
                    <option value="no" <?php selected($sterilised, 'no'); ?>><?php _e('No', 'gem-project'); ?></option>
                    <option value="too-young" <?php selected($sterilised, 'too-young'); ?>><?php _e('Too Young', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
        <tr>
            <th><label for="dog_status"><?php _e('Status', 'gem-project'); ?></label></th>
            <td>
                <select id="dog_status" name="dog_status">
                    <option value="available" <?php selected($status, 'available'); ?>><?php _e('Available', 'gem-project'); ?></option>
                    <option value="pending" <?php selected($status, 'pending'); ?>><?php _e('Adoption Pending', 'gem-project'); ?></option>
                    <option value="adopted" <?php selected($status, 'adopted'); ?>><?php _e('Adopted', 'gem-project'); ?></option>
                    <option value="forever" <?php selected($status, 'forever'); ?>><?php _e('Forever Sanctuary', 'gem-project'); ?></option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save meta box data
 */
function gem_save_meta_boxes($post_id) {
    // Verify nonces and save horse data
    if (isset($_POST['gem_horse_nonce']) && wp_verify_nonce($_POST['gem_horse_nonce'], 'gem_horse_meta')) {
        if (current_user_can('edit_post', $post_id)) {
            update_post_meta($post_id, '_horse_age', sanitize_text_field($_POST['horse_age']));
            update_post_meta($post_id, '_horse_breed', sanitize_text_field($_POST['horse_breed']));
            update_post_meta($post_id, '_horse_gender', sanitize_text_field($_POST['horse_gender']));
            update_post_meta($post_id, '_horse_status', sanitize_text_field($_POST['horse_status']));
            update_post_meta($post_id, '_horse_ideal_home', sanitize_textarea_field($_POST['horse_ideal_home']));
        }
    }
    
    // Save dog data
    if (isset($_POST['gem_dog_nonce']) && wp_verify_nonce($_POST['gem_dog_nonce'], 'gem_dog_meta')) {
        if (current_user_can('edit_post', $post_id)) {
            update_post_meta($post_id, '_dog_age', sanitize_text_field($_POST['dog_age']));
            update_post_meta($post_id, '_dog_breed', sanitize_text_field($_POST['dog_breed']));
            update_post_meta($post_id, '_dog_gender', sanitize_text_field($_POST['dog_gender']));
            update_post_meta($post_id, '_dog_size', sanitize_text_field($_POST['dog_size']));
            update_post_meta($post_id, '_dog_sterilised', sanitize_text_field($_POST['dog_sterilised']));
            update_post_meta($post_id, '_dog_status', sanitize_text_field($_POST['dog_status']));
        }
    }
}
add_action('save_post', 'gem_save_meta_boxes');

/**
 * Custom body classes
 */
function gem_body_classes($classes) {
    if (is_singular('horse') || is_post_type_archive('horse')) {
        $classes[] = 'horse-page-override';
    }
    if (is_singular('dog') || is_post_type_archive('dog')) {
        $classes[] = 'dog-page-override';
    }
    return $classes;
}
add_filter('body_class', 'gem_body_classes');

/**
 * Disable WordPress admin bar for non-admins
 */
function gem_disable_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'gem_disable_admin_bar');

/**
 * Custom excerpt length
 */
function gem_excerpt_length($length) {
    return 25;
}
add_filter('excerpt_length', 'gem_excerpt_length');

/**
 * Custom excerpt more
 */
function gem_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'gem_excerpt_more');

/**
 * Security enhancements
 */
remove_action('wp_head', 'wp_generator');
add_filter('the_generator', '__return_empty_string');

/**
 * Performance optimizations
 */
function gem_optimize_wp() {
    // Remove unnecessary WordPress features
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
}
add_action('init', 'gem_optimize_wp');

/**
 * Contact Form Handler
 */
function gem_handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['gem_contact_nonce'], 'gem_contact_form')) {
        wp_redirect(home_url('/contact?error=security'));
        exit;
    }
    
    // Sanitize form data
    $name = sanitize_text_field($_POST['contact_name']);
    $email = sanitize_email($_POST['contact_email']);
    $phone = sanitize_text_field($_POST['contact_phone']);
    $subject = sanitize_text_field($_POST['contact_subject']);
    $message = sanitize_textarea_field($_POST['contact_message']);
    
    // Basic validation
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        wp_redirect(home_url('/contact?error=required'));
        exit;
    }
    
    if (!is_email($email)) {
        wp_redirect(home_url('/contact?error=email'));
        exit;
    }
    
    // Prepare email
    $admin_email = get_option('admin_email');
    $site_name = get_bloginfo('name');
    
    $email_subject = sprintf('[%s] Contact Form: %s', $site_name, $subject);
    $email_message = sprintf(
        "New contact form submission from %s\n\n" .
        "Name: %s\n" .
        "Email: %s\n" .
        "Phone: %s\n" .
        "Subject: %s\n\n" .
        "Message:\n%s\n\n" .
        "---\n" .
        "Submitted on: %s\n" .
        "IP Address: %s",
        $site_name,
        $name,
        $email,
        $phone,
        $subject,
        $message,
        current_time('mysql'),
        $_SERVER['REMOTE_ADDR']
    );
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: ' . $site_name . ' <' . $admin_email . '>',
        'Reply-To: ' . $name . ' <' . $email . '>'
    );
    
    // Send email
    $sent = wp_mail($admin_email, $email_subject, $email_message, $headers);
    
    // Send auto-reply to user
    $auto_reply_subject = sprintf('[%s] Thank you for contacting us', $site_name);
    $auto_reply_message = sprintf(
        "Dear %s,\n\n" .
        "Thank you for contacting The Gem Project Sanctuary. We have received your message regarding: %s\n\n" .
        "We aim to respond within 1-2 working days. If your inquiry is urgent, please call us at 021 065 1691.\n\n" .
        "Your message:\n%s\n\n" .
        "Best regards,\n" .
        "The Gem Project Sanctuary Team\n\n" .
        "---\n" .
        "This is an automated response. Please do not reply to this email.",
        $name,
        $subject,
        $message
    );
    
    wp_mail($email, $auto_reply_subject, $auto_reply_message, $headers);
    
    // Redirect with success message
    if ($sent) {
        wp_redirect(home_url('/contact?submitted=true'));
    } else {
        wp_redirect(home_url('/contact?error=send'));
    }
    exit;
}
add_action('admin_post_nopriv_gem_contact_form', 'gem_handle_contact_form');
add_action('admin_post_gem_contact_form', 'gem_handle_contact_form');

/**
 * Add Tailwind CSS build script info to admin
 */
function gem_tailwind_admin_notice() {
    $css_file = GEM_THEME_PATH . '/assets/css/style.css';
    if (!file_exists($css_file)) {
        echo '<div class="notice notice-warning"><p>';
        echo '<strong>Gem Project Theme:</strong> Tailwind CSS not built. Run <code>npm install && npm run build</code> in the theme directory.';
        echo '</p></div>';
    }
}
add_action('admin_notices', 'gem_tailwind_admin_notice');

/**
 * Media Management Functions
 */

/**
 * Get optimized image URL with fallback
 */
function gem_get_image($image_url, $size = 'full', $default = null) {
    if (empty($image_url)) {
        return $default;
    }
    
    // If it's a WordPress attachment ID
    if (is_numeric($image_url)) {
        $image = wp_get_attachment_image_url($image_url, $size);
        return $image ? $image : $default;
    }
    
    // If it's already a URL, return as is
    if (filter_var($image_url, FILTER_VALIDATE_URL)) {
        return $image_url;
    }
    
    return $default;
}

/**
 * Get responsive image attributes
 */
function gem_get_responsive_image($image_url, $alt = '', $class = '', $sizes = '(max-width: 768px) 100vw, 50vw') {
    $image_url = gem_get_image($image_url);
    if (!$image_url) {
        return '';
    }
    
    $attributes = array(
        'src' => esc_url($image_url),
        'alt' => esc_attr($alt),
        'loading' => 'lazy',
        'decoding' => 'async'
    );
    
    if (!empty($class)) {
        $attributes['class'] = esc_attr($class);
    }
    
    // Add srcset for WordPress attachments
    if (is_numeric($image_url)) {
        $srcset = wp_get_attachment_image_srcset($image_url);
        if ($srcset) {
            $attributes['srcset'] = $srcset;
            $attributes['sizes'] = $sizes;
        }
    }
    
    $attr_string = '';
    foreach ($attributes as $key => $value) {
        $attr_string .= sprintf(' %s="%s"', $key, $value);
    }
    
    return sprintf('<img%s>', $attr_string);
}

/**
 * Import external image to WordPress media library
 */
function gem_import_external_image($image_url, $post_id = 0) {
    if (!function_exists('media_sideload_image')) {
        require_once(ABSPATH . 'wp-admin/includes/media.php');
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        require_once(ABSPATH . 'wp-admin/includes/image.php');
    }
    
    // Check if URL is valid
    if (!filter_var($image_url, FILTER_VALIDATE_URL)) {
        return false;
    }
    
    // Generate filename from URL
    $filename = basename(parse_url($image_url, PHP_URL_PATH));
    if (empty($filename)) {
        $filename = 'imported-image-' . time() . '.jpg';
    }
    
    // Import the image
    $attachment_id = media_sideload_image($image_url, $post_id, null, 'id');
    
    if (is_wp_error($attachment_id)) {
        error_log('Failed to import image: ' . $attachment_id->get_error_message());
        return false;
    }
    
    return $attachment_id;
}

/**
 * Bulk import images utility for admin
 */
function gem_bulk_import_images() {
    if (!current_user_can('manage_options')) {
        wp_die(__('You do not have sufficient permissions to access this page.'));
    }
    
    $default_images = array(
        'hero_banner_03' => 'https://i.ibb.co/kgGLTcRx/DSC00096-1.jpg',
        'welcome_section_01' => 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg',
        'dogs_hero_banner' => 'https://i.ibb.co/svS8mMXX/DSC03012.jpg',
        'horses_landing_hero' => 'https://i.ibb.co/TDF50hqC/image.png',
        'about_hero' => 'https://i.ibb.co/XfPq7BMz/DSC03353-2.jpg',
        'contact_hero' => 'https://i.ibb.co/9HkSDNm9/DSC00598.jpg'
    );
    
    echo '<div class="wrap">';
    echo '<h1>Import External Images</h1>';
    
    if (isset($_POST['import_images'])) {
        echo '<div class="notice notice-info"><p>Importing images...</p></div>';
        
        foreach ($default_images as $key => $url) {
            $attachment_id = gem_import_external_image($url);
            if ($attachment_id) {
                // Save as theme mod
                set_theme_mod($key . '_image', $attachment_id);
                echo '<p>✓ Imported: ' . esc_html($key) . ' (ID: ' . $attachment_id . ')</p>';
            } else {
                echo '<p>✗ Failed to import: ' . esc_html($key) . '</p>';
            }
        }
        
        echo '<div class="notice notice-success"><p>Import completed!</p></div>';
    }
    
    echo '<form method="post">';
    wp_nonce_field('gem_import_images', 'gem_import_nonce');
    echo '<p>This will import key external images to the WordPress media library.</p>';
    echo '<input type="submit" name="import_images" class="button-primary" value="Import Images">';
    echo '</form>';
    echo '</div>';
}

/**
 * Add media import page to admin menu
 */
function gem_add_media_import_page() {
    add_theme_page(
        'Import Images',
        'Import Images',
        'manage_options',
        'gem-import-images',
        'gem_bulk_import_images'
    );
}
add_action('admin_menu', 'gem_add_media_import_page');

/**
 * Enhanced image size generation
 */
function gem_add_image_sizes() {
    // Hero banners
    add_image_size('hero-desktop', 1920, 800, true);
    add_image_size('hero-tablet', 1024, 500, true);
    add_image_size('hero-mobile', 768, 400, true);
    
    // Content images
    add_image_size('content-large', 800, 600, true);
    add_image_size('content-medium', 600, 400, true);
    add_image_size('content-small', 400, 300, true);
    
    // Cards and thumbnails
    add_image_size('card-large', 500, 300, true);
    add_image_size('card-medium', 400, 250, true);
    add_image_size('card-small', 300, 200, true);
    
    // Animal profiles
    add_image_size('animal-hero', 1200, 800, true);
    add_image_size('animal-profile', 600, 600, true);
    add_image_size('animal-thumbnail', 250, 250, true);
    
    // Gallery images
    add_image_size('gallery-large', 800, 800, true);
    add_image_size('gallery-medium', 400, 400, true);
    add_image_size('gallery-thumbnail', 150, 150, true);
}
add_action('after_setup_theme', 'gem_add_image_sizes');

/**
 * Register image sizes in customizer and admin
 */
function gem_custom_image_sizes($sizes) {
    return array_merge($sizes, array(
        'hero-desktop' => __('Hero Desktop', 'gem-project'),
        'hero-tablet' => __('Hero Tablet', 'gem-project'),
        'hero-mobile' => __('Hero Mobile', 'gem-project'),
        'content-large' => __('Content Large', 'gem-project'),
        'content-medium' => __('Content Medium', 'gem-project'),
        'card-large' => __('Card Large', 'gem-project'),
        'animal-profile' => __('Animal Profile', 'gem-project'),
        'gallery-medium' => __('Gallery Medium', 'gem-project'),
    ));
}
add_filter('image_size_names_choose', 'gem_custom_image_sizes');