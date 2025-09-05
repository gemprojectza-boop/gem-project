<?php
/**
 * Template part for displaying the Contact page content
 * 
 * @package Gem_Project_Theme
 */
?>

<div class="bg-brand-bg-main">
    <!-- Hero Section -->
    <section class="relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
        <div class="absolute inset-0">
            <?php 
            $contact_hero_image = get_theme_mod('contact_hero_image', 'https://i.ibb.co/9HkSDNm9/DSC00598.jpg');
            if ($contact_hero_image): 
            ?>
                <img 
                    src="<?php echo esc_url($contact_hero_image); ?>" 
                    alt="<?php _e('The welcoming entrance to The Gem Project Sanctuary', 'gem-project'); ?>" 
                    class="w-full h-full object-cover"
                />
            <?php endif; ?>
        </div>
        <div class="relative container mx-auto px-6">
            <div class="content-bubble content-bubble-inverted max-w-4xl mx-auto animate-fade-in-up text-center" style="background: rgba(0,0,0,0.3); animation-delay: 0.3s;">
                <h1 class="text-4xl md:text-6xl font-black uppercase text-brand-primary text-shadow-strong text-center">
                    <?php echo get_theme_mod('contact_hero_title', __('Contact Us', 'gem-project')); ?>
                </h1>
                <p class="mt-4 text-lg md:text-xl text-shadow-custom text-center">
                    <?php echo get_theme_mod('contact_hero_subtitle', __('We would love to hear from you. Whether you are ready to adopt, sponsor an animal, donate supplies, or simply ask a question, our team is here to help.', 'gem-project')); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Content Section -->
    <section class="py-16 md:py-20">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                <!-- Left Column: Contact Details -->
                <div class="space-y-8">
                    <div class="content-bubble bg-white rounded-2xl shadow-lg">
                        <div class="p-6 md:p-8 space-y-6">
                            <!-- Location -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-text-primary"><?php _e('Location', 'gem-project'); ?></h4>
                                    <div class="text-brand-text-secondary text-sm text-left">
                                        <p><?php echo get_theme_mod('contact_address', __('Philadelphia, Atlantis, Western Cape, South Africa', 'gem-project')); ?></p>
                                        <p class="font-semibold text-brand-secondary"><?php _e('Visits are by appointment only.', 'gem-project'); ?></p>
                                    </div>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-text-primary"><?php _e('Email', 'gem-project'); ?></h4>
                                    <div class="text-brand-text-secondary text-sm text-left">
                                        <?php $email = get_theme_mod('contact_email', 'info@gemproject.org.za'); ?>
                                        <a href="mailto:<?php echo esc_attr($email); ?>" class="hover:underline text-brand-primary"><?php echo esc_html($email); ?></a>
                                        <p><?php _e('For all general enquiries including adoption, sponsorship, donations, volunteering and Hands-On Care.', 'gem-project'); ?></p>
                                    </div>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-brand-primary/10 text-brand-primary rounded-full flex items-center justify-center">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-brand-text-primary"><?php _e('Phone', 'gem-project'); ?></h4>
                                    <div class="text-brand-text-secondary text-sm text-left">
                                        <p class="font-semibold"><?php echo get_theme_mod('contact_phone', '021 065 1691'); ?></p>
                                        <p><?php _e('We are available Monday to Friday from 9am to 5pm.', 'gem-project'); ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Social Media -->
                    <div class="content-bubble bg-white rounded-2xl shadow-lg">
                        <div class="p-6 md:p-8">
                            <svg class="w-8 h-8 text-brand-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <h3 class="text-xl font-bold text-brand-primary mb-4 text-center"><?php _e('Follow Our Journey', 'gem-project'); ?></h3>
                            <p class="text-brand-text-secondary mb-4 text-left"><?php _e('See the daily lives you are changing by following us on social media.', 'gem-project'); ?></p>
                            <div class="flex space-x-4">
                                <?php if ($facebook_url = get_theme_mod('social_facebook', 'https://facebook.com')): ?>
                                    <a href="<?php echo esc_url($facebook_url); ?>" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-brand-text-secondary hover:text-brand-primary transition-colors">
                                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                <?php endif; ?>
                                <?php if ($instagram_url = get_theme_mod('social_instagram', 'https://instagram.com')): ?>
                                    <a href="<?php echo esc_url($instagram_url); ?>" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-brand-text-secondary hover:text-brand-primary transition-colors">
                                        <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.490-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.490-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z"/>
                                        </svg>
                                    </a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Contact Form -->
                <div class="content-bubble bg-white rounded-2xl shadow-lg">
                    <div class="p-6 md:p-8">
                        <svg class="w-10 h-10 text-brand-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h2 class="text-3xl font-bold text-brand-primary mb-2 text-center"><?php _e('Send Us a Message', 'gem-project'); ?></h2>
                        <p class="text-brand-text-secondary mb-6 text-left"><?php _e('Fill in the form below and we will get back to you as soon as possible.', 'gem-project'); ?></p>
                        
                        <?php 
                        // Display success message if form is submitted
                        if (isset($_GET['submitted']) && $_GET['submitted'] === 'true'): 
                        ?>
                            <div class="text-center bg-brand-accent/20 text-brand-accent-hover p-8 rounded-lg">
                                <h3 class="text-2xl font-bold mb-2 text-center"><?php _e('Thank You!', 'gem-project'); ?></h3>
                                <p class="text-left"><?php _e('Your message has been sent. We aim to respond within 1 to 2 working days.', 'gem-project'); ?></p>
                            </div>
                        <?php else: ?>
                            <!-- Contact Form -->
                            <form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="space-y-6">
                                <?php wp_nonce_field('gem_contact_form', 'gem_contact_nonce'); ?>
                                <input type="hidden" name="action" value="gem_contact_form">
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label for="contact_name" class="block text-sm font-medium text-brand-text-primary mb-1"><?php _e('Name *', 'gem-project'); ?></label>
                                        <input 
                                            type="text" 
                                            id="contact_name" 
                                            name="contact_name" 
                                            required 
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label for="contact_email" class="block text-sm font-medium text-brand-text-primary mb-1"><?php _e('Email *', 'gem-project'); ?></label>
                                        <input 
                                            type="email" 
                                            id="contact_email" 
                                            name="contact_email" 
                                            required 
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="contact_phone" class="block text-sm font-medium text-brand-text-primary mb-1"><?php _e('Phone', 'gem-project'); ?></label>
                                    <input 
                                        type="tel" 
                                        id="contact_phone" 
                                        name="contact_phone" 
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label for="contact_subject" class="block text-sm font-medium text-brand-text-primary mb-1"><?php _e('Subject *', 'gem-project'); ?></label>
                                    <select 
                                        id="contact_subject" 
                                        name="contact_subject" 
                                        required 
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                                    >
                                        <option value=""><?php _e('Please select a subject', 'gem-project'); ?></option>
                                        <option value="Adoption"><?php _e('Adoption', 'gem-project'); ?></option>
                                        <option value="Sponsorship"><?php _e('Sponsorship', 'gem-project'); ?></option>
                                        <option value="Donation"><?php _e('Donation', 'gem-project'); ?></option>
                                        <option value="Volunteering"><?php _e('Volunteering', 'gem-project'); ?></option>
                                        <option value="Hands-On Care"><?php _e('Hands-On Care', 'gem-project'); ?></option>
                                        <option value="Other"><?php _e('Other', 'gem-project'); ?></option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="contact_message" class="block text-sm font-medium text-brand-text-primary mb-1"><?php _e('Message *', 'gem-project'); ?></label>
                                    <textarea 
                                        id="contact_message" 
                                        name="contact_message" 
                                        rows="5" 
                                        required 
                                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors"
                                    ></textarea>
                                </div>
                                
                                <div class="text-center">
                                    <button 
                                        type="submit" 
                                        class="bg-brand-primary hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 btn-pulse"
                                    >
                                        <?php _e('Send Message', 'gem-project'); ?>
                                    </button>
                                </div>
                            </form>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 text-white overflow-hidden">
        <div class="absolute inset-0">
            <?php 
            $contact_cta_image = get_theme_mod('contact_cta_image', 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg');
            if ($contact_cta_image): 
            ?>
                <img 
                    src="<?php echo esc_url($contact_cta_image); ?>" 
                    alt="<?php _e('Join our mission', 'gem-project'); ?>" 
                    class="w-full h-full object-cover"
                />
            <?php endif; ?>
            <div class="absolute inset-0 bg-black/60"></div>
        </div>
        <div class="relative container mx-auto px-6 text-center">
            <h2 class="text-4xl lg:text-6xl font-bold mb-6">
                <?php echo get_theme_mod('contact_cta_title', __('Ready to Make a Difference?', 'gem-project')); ?>
            </h2>
            <p class="text-xl mb-8 max-w-3xl mx-auto">
                <?php echo get_theme_mod('contact_cta_description', __('Whether you want to adopt, volunteer, or support our mission, every action helps create a better world for animals in need.', 'gem-project')); ?>
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="<?php echo home_url('/dogs'); ?>" class="bg-brand-secondary hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('Meet Our Dogs', 'gem-project'); ?>
                </a>
                <a href="<?php echo home_url('/horses'); ?>" class="bg-brand-accent hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('Meet Our Horses', 'gem-project'); ?>
                </a>
                <a href="<?php echo home_url('/get-involved'); ?>" class="border-2 border-white hover:bg-white hover:text-brand-text-primary text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('Get Involved', 'gem-project'); ?>
                </a>
            </div>
        </div>
    </section>
</div>