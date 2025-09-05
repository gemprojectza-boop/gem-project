</main>

<footer class="bg-brand-text-primary text-white">
    <div class="max-content-width py-12">
        <div class="container mx-auto px-6">
            
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                
                <!-- Site Info Column -->
                <div class="text-center md:text-left">
                    <div class="mb-4">
                        <a href="<?php echo home_url(); ?>" class="inline-flex items-center space-x-3 hover:opacity-80 transition-opacity">
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
                                <div class="font-bold text-white"><?php bloginfo('name'); ?></div>
                                <?php if (get_bloginfo('description')) : ?>
                                    <div class="text-sm text-gray-300"><?php bloginfo('description'); ?></div>
                                <?php endif; ?>
                            </div>
                        </a>
                    </div>
                    
                    <!-- Contact Info -->
                    <div class="space-y-2 text-sm text-gray-300">
                        <?php if (get_theme_mod('contact_address')) : ?>
                            <p><?php echo esc_html(get_theme_mod('contact_address')); ?></p>
                        <?php endif; ?>
                        <?php if (get_theme_mod('contact_phone')) : ?>
                            <p><a href="tel:<?php echo esc_attr(get_theme_mod('contact_phone')); ?>" class="hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_phone')); ?>
                            </a></p>
                        <?php endif; ?>
                        <?php if (get_theme_mod('contact_email')) : ?>
                            <p><a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email')); ?>" class="hover:text-white transition-colors">
                                <?php echo esc_html(get_theme_mod('contact_email')); ?>
                            </a></p>
                        <?php endif; ?>
                    </div>
                    
                    <!-- Social Media Links -->
                    <div class="flex items-center justify-center md:justify-start space-x-4 mt-6">
                        <?php 
                        $gem_options = get_option('gem_theme_options', array());
                        if (!empty($gem_options['facebook'])) : ?>
                            <a href="<?php echo esc_url($gem_options['facebook']); ?>" 
                               class="text-gray-300 hover:text-white transition-colors" 
                               aria-label="Facebook"
                               target="_blank" rel="noopener">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.02C18.343 21.128 22 16.991 22 12z"/>
                                </svg>
                            </a>
                        <?php endif; ?>
                        
                        <?php if (!empty($gem_options['instagram'])) : ?>
                            <a href="<?php echo esc_url($gem_options['instagram']); ?>" 
                               class="text-gray-300 hover:text-white transition-colors" 
                               aria-label="Instagram"
                               target="_blank" rel="noopener">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                                </svg>
                            </a>
                        <?php endif; ?>
                        
                        <?php if (!empty($gem_options['twitter'])) : ?>
                            <a href="<?php echo esc_url($gem_options['twitter']); ?>" 
                               class="text-gray-300 hover:text-white transition-colors" 
                               aria-label="Twitter"
                               target="_blank" rel="noopener">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.935 4.935 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.213 0-.425-.015-.637a9.935 9.935 0 002.46-2.548z"/>
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Quick Links Widget -->
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4"><?php _e('Quick Links', 'gem-project'); ?></h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo home_url('/about'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('About Us', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/contact'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Contact', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/faq'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('FAQ', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/team'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Meet the Team', 'gem-project'); ?></a></li>
                    </ul>
                    
                    <?php if (is_active_sidebar('footer-1')) : ?>
                        <div class="mt-6">
                            <?php dynamic_sidebar('footer-1'); ?>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Get Involved Widget -->
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4"><?php _e('Get Involved', 'gem-project'); ?></h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo home_url('/get-involved#volunteer'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Volunteer', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/donate'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Donate', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/dog-wishlist'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Dog Wishlist', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/horse-wishlist'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Horse Wishlist', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/youth'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Youth Programme', 'gem-project'); ?></a></li>
                    </ul>
                    
                    <?php if (is_active_sidebar('footer-2')) : ?>
                        <div class="mt-6">
                            <?php dynamic_sidebar('footer-2'); ?>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Our Animals Widget -->
                <div>
                    <h4 class="text-lg font-semibold text-white mb-4"><?php _e('Our Animals', 'gem-project'); ?></h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="<?php echo get_post_type_archive_link('dog'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Our Dogs', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo get_post_type_archive_link('horse'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Our Horses', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/community'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Our Community', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo get_post_type_archive_link('success_story'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Success Stories', 'gem-project'); ?></a></li>
                        <li><a href="<?php echo home_url('/gallery'); ?>" class="text-gray-300 hover:text-white transition-colors"><?php _e('Gallery', 'gem-project'); ?></a></li>
                    </ul>
                    
                    <?php if (is_active_sidebar('footer-3')) : ?>
                        <div class="mt-6">
                            <?php dynamic_sidebar('footer-3'); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="border-t border-gray-700 pt-8">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div class="text-sm text-gray-300">
                        <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved.', 'gem-project'); ?></p>
                    </div>
                    
                    <!-- Footer Menu -->
                    <div class="flex items-center space-x-6 text-sm">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'container' => false,
                            'menu_class' => 'flex items-center space-x-6',
                            'fallback_cb' => 'gem_fallback_footer_menu',
                            'depth' => 1,
                        ));
                        ?>
                    </div>
                    
                    <!-- Back to Top Button -->
                    <button id="back-to-top" 
                            class="bg-brand-primary hover:bg-blue-700 text-white p-2 rounded-full transition-colors hidden"
                            aria-label="<?php _e('Back to top', 'gem-project'); ?>">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

<!-- JavaScript for enhanced functionality -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('site-header');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle menu icon
            const icon = mobileMenuToggle.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                // Show hamburger icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                // Show X icon
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
    }
    
    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (header) {
            if (scrollTop > 100) {
                header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.remove('bg-white');
            } else {
                header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.add('bg-white');
            }
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Dropdown menu functionality
    const dropdownContainers = document.querySelectorAll('.dropdown-container');
    dropdownContainers.forEach(container => {
        const menu = container.querySelector('.dropdown-menu');
        if (menu) {
            let timeout;
            
            container.addEventListener('mouseenter', function() {
                clearTimeout(timeout);
                menu.classList.remove('hidden');
            });
            
            container.addEventListener('mouseleave', function() {
                timeout = setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300);
            });
        }
    });
    
    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.classList.remove('hidden');
            } else {
                backToTop.classList.add('hidden');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Stagger animations
    document.querySelectorAll('.stagger-children').forEach(container => {
        const children = container.querySelectorAll('.animate-on-scroll');
        children.forEach((child, index) => {
            child.style.setProperty('--stagger-delay', `${index * 100}ms`);
        });
    });
});
</script>

<?php
/**
 * Fallback footer menu
 */
function gem_fallback_footer_menu() {
    echo '<a href="' . home_url('/privacy-policy') . '" class="text-gray-300 hover:text-white transition-colors">' . __('Privacy Policy', 'gem-project') . '</a>';
    echo '<a href="' . home_url('/terms-of-service') . '" class="text-gray-300 hover:text-white transition-colors">' . __('Terms of Service', 'gem-project') . '</a>';
}
?>

</body>
</html>