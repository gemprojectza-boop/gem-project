<?php
/**
 * The main template file
 * 
 * This template displays the appropriate page based on WordPress template hierarchy
 * 
 * @package Gem_Project_Theme
 */

get_header(); 

// Get current page template and context
$current_template = get_page_template_slug();
$page_type = get_query_var('gem_page_type');
$post_type = get_post_type();
?>

<main id="main-content" class="pt-22 animate-page-fade max-content-width-lg">
    
    <?php if (is_front_page()) : ?>
        <?php get_template_part('template-parts/pages/home'); ?>
        
    <?php elseif (is_page('about')) : ?>
        <?php get_template_part('template-parts/pages/about'); ?>
        
    <?php elseif (is_page('team')) : ?>
        <?php get_template_part('template-parts/pages/team'); ?>
        
    <?php elseif (is_page('contact')) : ?>
        <?php get_template_part('template-parts/pages/contact'); ?>
        
    <?php elseif (is_page('faq')) : ?>
        <?php get_template_part('template-parts/pages/faq'); ?>
        
    <?php elseif (is_page('gallery')) : ?>
        <?php get_template_part('template-parts/pages/gallery'); ?>
        
    <?php elseif (is_page('community')) : ?>
        <?php get_template_part('template-parts/pages/community'); ?>
        
    <?php elseif (is_page('get-involved')) : ?>
        <?php get_template_part('template-parts/pages/get-involved'); ?>
        
    <?php elseif (is_page('donate')) : ?>
        <?php get_template_part('template-parts/pages/donate'); ?>
        
    <?php elseif (is_page('youth') || is_page('youth-programme')) : ?>
        <?php get_template_part('template-parts/pages/youth-programme'); ?>
        
    <?php elseif (is_page('partners')) : ?>
        <?php get_template_part('template-parts/pages/partners'); ?>
        
    <!-- DOG PAGES -->
    <?php elseif (is_post_type_archive('dog') || is_page('dogs')) : ?>
        <?php get_template_part('template-parts/pages/dogs-landing'); ?>
        
    <?php elseif (is_page('adopt-a-dog')) : ?>
        <?php get_template_part('template-parts/pages/dog-adoption'); ?>
        
    <?php elseif (is_page('forever-dogs')) : ?>
        <?php get_template_part('template-parts/pages/forever-dogs'); ?>
        
    <?php elseif (is_page('hands-on-dogs')) : ?>
        <?php get_template_part('template-parts/pages/hands-on-dogs'); ?>
        
    <?php elseif (is_page('dog-sponsorship') || is_page('dogs-sponsorship')) : ?>
        <?php get_template_part('template-parts/pages/dog-sponsorship'); ?>
        
    <?php elseif (is_page('dog-stories')) : ?>
        <?php get_template_part('template-parts/pages/dog-stories'); ?>
        
    <?php elseif (is_page('animal-health')) : ?>
        <?php get_template_part('template-parts/pages/animal-health'); ?>
        
    <?php elseif (is_page('dog-outings')) : ?>
        <?php get_template_part('template-parts/pages/dog-outings'); ?>
        
    <?php elseif (is_page('dog-training')) : ?>
        <?php get_template_part('template-parts/pages/dog-training'); ?>
        
    <?php elseif (is_page('dog-wishlist')) : ?>
        <?php get_template_part('template-parts/pages/dog-wishlist'); ?>
        
    <?php elseif (is_singular('dog')) : ?>
        <?php get_template_part('template-parts/pages/dog-profile'); ?>
        
    <!-- HORSE PAGES -->
    <?php elseif (is_post_type_archive('horse') || is_page('horses')) : ?>
        <?php get_template_part('template-parts/pages/horses-landing'); ?>
        
    <?php elseif (is_page('horse-facilities') || is_page('horses-facilities')) : ?>
        <?php get_template_part('template-parts/pages/horse-facilities'); ?>
        
    <?php elseif (is_page('horse-training') || is_page('horses-training')) : ?>
        <?php get_template_part('template-parts/pages/horse-training'); ?>
        
    <?php elseif (is_page('horse-success-stories') || is_page('horses-success-stories')) : ?>
        <?php get_template_part('template-parts/pages/horse-success-stories'); ?>
        
    <?php elseif (is_page('horse-needs') || is_page('horses-needs')) : ?>
        <?php get_template_part('template-parts/pages/horse-needs'); ?>
        
    <?php elseif (is_page('horse-rehabilitation') || is_page('horses-rehabilitation')) : ?>
        <?php get_template_part('template-parts/pages/horse-rehabilitation'); ?>
        
    <?php elseif (is_page('horse-wishlist')) : ?>
        <?php get_template_part('template-parts/pages/horse-wishlist'); ?>
        
    <?php elseif (is_singular('horse')) : ?>
        <?php get_template_part('template-parts/pages/horse-profile'); ?>
        
    <!-- SUCCESS STORIES -->
    <?php elseif (is_post_type_archive('success_story')) : ?>
        <?php get_template_part('template-parts/pages/success-stories'); ?>
        
    <?php elseif (is_singular('success_story')) : ?>
        <?php get_template_part('template-parts/pages/success-story-single'); ?>
        
    <!-- TEAM MEMBER PAGES -->
    <?php elseif (is_post_type_archive('team_member')) : ?>
        <?php get_template_part('template-parts/pages/team'); ?>
        
    <?php elseif (is_singular('team_member')) : ?>
        <?php get_template_part('template-parts/pages/team-member-single'); ?>
        
    <!-- DEFAULT FALLBACKS -->
    <?php elseif (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="container mx-auto px-4 lg:px-6 max-w-7xl py-12">
                    <header class="entry-header mb-8">
                        <?php the_title('<h1 class="text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4">', '</h1>'); ?>
                    </header>
                    
                    <div class="entry-content prose prose-lg max-w-none">
                        <?php the_content(); ?>
                    </div>
                </div>
            </article>
        <?php endwhile; ?>
        
    <?php else : ?>
        <div class="container mx-auto px-4 lg:px-6 max-w-7xl py-12 text-center">
            <h1 class="text-4xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                <?php _e('Page Not Found', 'gem-project'); ?>
            </h1>
            <p class="text-xl text-brand-text-secondary mb-8">
                <?php _e('Sorry, the page you are looking for could not be found.', 'gem-project'); ?>
            </p>
            <a href="<?php echo home_url(); ?>" class="bg-brand-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                <?php _e('Return Home', 'gem-project'); ?>
            </a>
        </div>
        
    <?php endif; ?>
    
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Apply page-specific CSS classes and force colors (converted from React useEffect)
    const body = document.body;
    const currentPath = window.location.pathname;
    
    // Clear existing classes
    body.classList.remove('horse-page-override', 'dog-page-override');
    
    // Apply horse page styling
    if (currentPath.includes('/horses') || currentPath === '/horses' || 
        currentPath.includes('/horse-') || 
        <?php echo json_encode(is_post_type_archive('horse') || is_singular('horse')); ?>) {
        
        body.classList.add('horse-page-override');
        
        // Force green colors on horse pages with JavaScript
        setTimeout(() => {
            const forceGreenColor = () => {
                const elements = document.querySelectorAll('.horse-page-override h1:not(.hero h1), .horse-page-override h2:not(.hero h2), .horse-page-override h3:not(.hero h3), .horse-page-override .text-3xl:not(.hero *), .horse-page-override .text-4xl:not(.hero *), .horse-page-override .text-5xl:not(.hero *), .horse-page-override .font-bold:not(.hero *), .horse-page-override .font-black:not(.hero *)');
                elements.forEach(el => {
                    if (!el.style.color?.includes('white')) {
                        el.style.setProperty('color', '#16a34a', 'important');
                    }
                });
            };
            forceGreenColor();
            // Re-apply every 100ms to catch dynamically loaded content
            const interval = setInterval(forceGreenColor, 100);
            setTimeout(() => clearInterval(interval), 2000);
        }, 50);
        
    } 
    // Apply dog page styling
    else if (currentPath.includes('/dogs') || currentPath === '/dogs' || 
             currentPath.includes('/dog-') || currentPath === '/adopt-a-dog' || 
             currentPath === '/forever-dogs' || 
             <?php echo json_encode(is_post_type_archive('dog') || is_singular('dog')); ?>) {
        
        body.classList.add('dog-page-override');
    }

    // Animation observer (converted from React useEffect)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Stagger children animations
    document.querySelectorAll('.stagger-children').forEach(container => {
        const children = container.querySelectorAll('.animate-on-scroll');
        children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 100}ms`;
        });
    });

    // Observe animation targets
    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => observer.observe(target));
});
</script>

<?php get_footer(); ?>