<?php
/**
 * Template part for displaying the homepage content
 * 
 * @package Gem_Project_Theme
 */

// Get hero media configuration from customizer or options
$hero_media = get_theme_mod('hero_media', array(
    array(
        'url' => get_theme_mod('hero_image_1', 'https://i.ibb.co/kgGLTcRx/DSC00096-1.jpg'),
        'focal_x' => 0.6,
        'focal_y' => 0.5
    ),
    array(
        'url' => get_theme_mod('hero_image_2', 'https://i.ibb.co/TDF50hqC/image.png'),
        'focal_x' => 0.5,
        'focal_y' => 0.6
    ),
    array(
        'url' => get_theme_mod('hero_image_3', 'https://i.ibb.co/svS8mMXX/DSC03012.jpg'),
        'focal_x' => 0.4,
        'focal_y' => 0.4
    ),
    array(
        'url' => get_theme_mod('hero_image_4', 'https://i.ibb.co/XfPq7BMz/DSC03353-2.jpg'),
        'focal_x' => 0.5,
        'focal_y' => 0.5
    )
));
?>

<!-- HERO SECTION -->
<section class="relative h-screen flex items-center justify-center text-white overflow-hidden hero-section">
    <div class="absolute top-0 left-0 w-full h-full">
        <?php foreach ($hero_media as $index => $media_item): 
            $clean_url = strtok($media_item['url'], '#');
            $is_video = preg_match('/\.(mp4|webm|ogv)$/i', $clean_url);
            $object_position = ($media_item['focal_x'] * 100) . '% ' . ($media_item['focal_y'] * 100) . '%';
        ?>
            <div 
                class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out hero-slide"
                data-slide="<?php echo $index; ?>"
                style="<?php echo ($index === 0) ? 'opacity: 1;' : 'opacity: 0;'; ?>"
                aria-hidden="<?php echo ($index !== 0) ? 'true' : 'false'; ?>"
            >
                <?php if ($is_video): ?>
                    <video
                        autoplay
                        loop
                        muted
                        playsinline
                        src="<?php echo esc_url($clean_url); ?>"
                        class="w-full h-full object-cover"
                        style="object-position: <?php echo $object_position; ?>;"
                    ></video>
                <?php else: ?>
                    <img 
                        src="<?php echo esc_url($clean_url); ?>"
                        alt="<?php _e('Sanctuary hero background', 'gem-project'); ?>"
                        class="w-full h-full object-cover"
                        style="object-position: <?php echo $object_position; ?>;"
                        loading="<?php echo ($index === 0) ? 'eager' : 'lazy'; ?>"
                        decoding="async"
                    />
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    
    <div class="relative z-20 text-center px-4 max-content-width" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wider mb-4 animate-fade-in-down text-brand-primary text-shadow-strong" style="animation-delay: 200ms; text-align: center; margin: 0 auto;">
            <span><?php echo get_theme_mod('hero_title', __('Rescue, Rebuild, Rehome', 'gem-project')); ?></span>
        </h1>
        <p class="text-lg md:text-xl text-container mx-auto mb-8 animate-fade-in-up text-shadow-custom" style="animation-delay: 400ms; text-align: center; margin: 0 auto;">
            <?php echo get_theme_mod('hero_description', __('Every animal\'s journey is honoured. From those waiting for a forever home to our permanent residents, each one receives the love, care and dignity they deserve.', 'gem-project')); ?>
        </p>
        <div class="flex flex-wrap justify-center gap-3 md:gap-4" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; text-align: center; margin: 0 auto;">
            <a href="<?php echo home_url('/dogs'); ?>" class="bg-brand-secondary hover:bg-brand-secondary-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up py-3 px-6 rounded-full transition-colors font-semibold" style="animation-delay: 600ms;">
                <?php _e('Meet Our Dogs', 'gem-project'); ?>
            </a>
            <a href="<?php echo home_url('/horses'); ?>" class="bg-brand-accent hover:bg-brand-accent-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up py-3 px-6 rounded-full transition-colors font-semibold" style="animation-delay: 700ms;">
                <?php _e('Meet Our Horses', 'gem-project'); ?>
            </a>
            <a href="<?php echo home_url('/get-involved#volunteer'); ?>" class="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-text-primary text-sm md:text-base animate-fade-in-up py-3 px-6 rounded-full transition-colors font-semibold" style="animation-delay: 800ms;">
                <?php _e('Volunteer', 'gem-project'); ?>
            </a>
            <a href="<?php echo home_url('/donate'); ?>" class="bg-brand-primary hover:bg-brand-primary-hover text-white text-sm md:text-base btn-pulse animate-fade-in-up py-3 px-6 rounded-full transition-colors font-semibold" style="animation-delay: 900ms;">
                <?php _e('Donate', 'gem-project'); ?>
            </a>
        </div>
    </div>
    
    <!-- Hero navigation dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        <?php foreach ($hero_media as $index => $media): ?>
            <button 
                class="hero-dot w-3 h-3 rounded-full transition-all duration-300 <?php echo ($index === 0) ? 'bg-white' : 'bg-white/50'; ?>"
                data-slide="<?php echo $index; ?>"
                aria-label="<?php printf(__('Go to slide %d', 'gem-project'), $index + 1); ?>"
            ></button>
        <?php endforeach; ?>
    </div>
</section>

<!-- WELCOME/ABOUT SECTION -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div class="order-2 lg:order-1">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-6">
                    <?php echo get_theme_mod('welcome_title', __('Welcome to The Gem Project Sanctuary', 'gem-project')); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary mb-6">
                    <?php echo get_theme_mod('welcome_description', __('A sanctuary for rescued dogs and horses, providing them with a forever home and a second chance at life. Our mission is to rescue, rehabilitate, and provide lifetime care for animals in need while educating our community about responsible pet ownership.', 'gem-project')); ?>
                </p>
                <a href="<?php echo home_url('/about'); ?>" class="inline-flex items-center bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                    <?php _e('Learn More About Us', 'gem-project'); ?>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
            <div class="order-1 lg:order-2">
                <div class="relative">
                    <img 
                        src="<?php echo get_theme_mod('welcome_image', 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg'); ?>"
                        alt="<?php _e('Welcome to our sanctuary', 'gem-project'); ?>"
                        class="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                    <?php if (get_theme_mod('welcome_video', '')): ?>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <button class="play-btn bg-white/90 hover:bg-white text-brand-primary p-4 rounded-full shadow-lg transition-colors">
                                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </button>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- MEET THE ANIMALS SECTION -->
<section class="py-16 lg:py-24 bg-gray-50">
    <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                <?php _e('Meet Our Animals', 'gem-project'); ?>
            </h2>
            <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                <?php _e('Every animal in our care has a unique story. From rescue to rehabilitation, we provide lifetime care for those who need it most.', 'gem-project'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Dogs Section -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div class="relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_theme_mod('dogs_section_image', 'https://i.ibb.co/svS8mMXX/DSC03012.jpg'); ?>"
                        alt="<?php _e('Our rescue dogs', 'gem-project'); ?>"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h3 class="text-2xl font-bold mb-2"><?php _e('Our Dogs', 'gem-project'); ?></h3>
                        <p class="text-sm opacity-90"><?php _e('Meet our amazing rescue dogs', 'gem-project'); ?></p>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-brand-text-secondary mb-4">
                        <?php _e('From playful puppies to wise seniors, each dog receives individual care, training, and love while they wait for their forever families.', 'gem-project'); ?>
                    </p>
                    <a href="<?php echo home_url('/dogs'); ?>" class="inline-flex items-center text-brand-primary hover:text-blue-700 font-semibold">
                        <?php _e('Meet Our Dogs', 'gem-project'); ?>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
            
            <!-- Horses Section -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div class="relative h-64 overflow-hidden">
                    <img 
                        src="<?php echo get_theme_mod('horses_section_image', 'https://i.ibb.co/TDF50hqC/image.png'); ?>"
                        alt="<?php _e('Our rescue horses', 'gem-project'); ?>"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h3 class="text-2xl font-bold mb-2"><?php _e('Our Horses', 'gem-project'); ?></h3>
                        <p class="text-sm opacity-90"><?php _e('Meet our majestic rescue horses', 'gem-project'); ?></p>
                    </div>
                </div>
                <div class="p-6">
                    <p class="text-brand-text-secondary mb-4">
                        <?php _e('Our horses receive specialized rehabilitation, training, and care in our state-of-the-art facilities with expert equine professionals.', 'gem-project'); ?>
                    </p>
                    <a href="<?php echo home_url('/horses'); ?>" class="inline-flex items-center text-brand-accent hover:text-green-700 font-semibold">
                        <?php _e('Meet Our Horses', 'gem-project'); ?>
                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- COMMUNITY EVENTS SECTION -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                <?php _e('Community & Events', 'gem-project'); ?>
            </h2>
            <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                <?php _e('Building stronger communities through education, outreach, and collaborative care for animals in need.', 'gem-project'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="text-center">
                <div class="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Education Programs', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary"><?php _e('Teaching responsible pet ownership and animal welfare through workshops and school visits.', 'gem-project'); ?></p>
            </div>
            
            <div class="text-center">
                <div class="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Mobile Clinic', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary"><?php _e('Bringing veterinary services to underserved communities, ensuring every animal receives care.', 'gem-project'); ?></p>
            </div>
            
            <div class="text-center">
                <div class="w-20 h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Adoption Events', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary"><?php _e('Regular adoption days connecting loving families with animals ready for their forever homes.', 'gem-project'); ?></p>
            </div>
        </div>
        
        <div class="text-center mt-12">
            <a href="<?php echo home_url('/community'); ?>" class="inline-flex items-center bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
                <?php _e('Learn More About Our Community', 'gem-project'); ?>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
    </div>
</section>

<!-- YOUTH PROGRAMME SECTION -->
<section class="py-16 lg:py-24 bg-brand-accent/5">
    <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
                <img 
                    src="<?php echo get_theme_mod('youth_programme_image', 'https://i.ibb.co/yBFj9WnZ/DSC03629-2.jpg'); ?>"
                    alt="<?php _e('Youth programme participants', 'gem-project'); ?>"
                    class="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
            </div>
            <div>
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-6">
                    <?php _e('Youth Programme', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary mb-6">
                    <?php _e('Empowering young people through hands-on learning, responsibility, and compassion for animals. Our youth programme builds character, work ethic, and valuable life skills.', 'gem-project'); ?>
                </p>
                <div class="space-y-4 mb-8">
                    <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                        <p class="text-brand-text-secondary"><?php _e('Hands-on animal care experience', 'gem-project'); ?></p>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                        <p class="text-brand-text-secondary"><?php _e('Life skills development and mentorship', 'gem-project'); ?></p>
                    </div>
                    <div class="flex items-start space-x-3">
                        <div class="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                        <p class="text-brand-text-secondary"><?php _e('Educational workshops and career guidance', 'gem-project'); ?></p>
                    </div>
                </div>
                <a href="<?php echo home_url('/youth'); ?>" class="inline-flex items-center bg-brand-accent hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                    <?php _e('Learn About Our Youth Programme', 'gem-project'); ?>
                    <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- HOW TO HELP SECTION -->
<section class="py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="text-center mb-12">
            <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                <?php _e('How You Can Help', 'gem-project'); ?>
            </h2>
            <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                <?php _e('Every contribution makes a difference in the lives of our animals. From volunteering to donating, there are many ways to support our mission.', 'gem-project'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center group">
                <div class="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                        src="<?php echo get_theme_mod('volunteer_image', 'https://i.ibb.co/5g6Ss0Ps/DSC09944.jpg'); ?>"
                        alt="<?php _e('Volunteers helping animals', 'gem-project'); ?>"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-brand-primary/20 group-hover:bg-brand-primary/30 transition-colors"></div>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Volunteer', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary mb-4"><?php _e('Join our team of dedicated volunteers and make a direct impact.', 'gem-project'); ?></p>
                <a href="<?php echo home_url('/get-involved#volunteer'); ?>" class="text-brand-primary hover:text-blue-700 font-semibold"><?php _e('Learn More', 'gem-project'); ?></a>
            </div>
            
            <div class="text-center group">
                <div class="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                        src="<?php echo get_theme_mod('sponsor_image', 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg'); ?>"
                        alt="<?php _e('Sponsor an animal', 'gem-project'); ?>"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-brand-secondary/20 group-hover:bg-brand-secondary/30 transition-colors"></div>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Sponsor', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary mb-4"><?php _e('Sponsor an animal and follow their journey to recovery.', 'gem-project'); ?></p>
                <a href="<?php echo home_url('/dogs/sponsorship'); ?>" class="text-brand-secondary hover:text-orange-700 font-semibold"><?php _e('Learn More', 'gem-project'); ?></a>
            </div>
            
            <div class="text-center group">
                <div class="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                        src="<?php echo get_theme_mod('wishlist_image', 'https://i.ibb.co/jPZXQBFs/DSC03204.jpg'); ?>"
                        alt="<?php _e('Donate supplies', 'gem-project'); ?>"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-brand-accent/20 group-hover:bg-brand-accent/30 transition-colors"></div>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Wishlist', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary mb-4"><?php _e('Donate supplies and items from our wishlist.', 'gem-project'); ?></p>
                <a href="<?php echo home_url('/dog-wishlist'); ?>" class="text-brand-accent hover:text-green-700 font-semibold"><?php _e('View Wishlist', 'gem-project'); ?></a>
            </div>
            
            <div class="text-center group">
                <div class="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                        src="<?php echo get_theme_mod('donate_image', 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg'); ?>"
                        alt="<?php _e('Make a donation', 'gem-project'); ?>"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div class="absolute inset-0 bg-brand-yellow/20 group-hover:bg-brand-yellow/30 transition-colors"></div>
                </div>
                <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php _e('Donate', 'gem-project'); ?></h3>
                <p class="text-brand-text-secondary mb-4"><?php _e('Make a financial contribution to support our work.', 'gem-project'); ?></p>
                <a href="<?php echo home_url('/donate'); ?>" class="text-brand-yellow hover:text-yellow-700 font-semibold"><?php _e('Donate Now', 'gem-project'); ?></a>
            </div>
        </div>
    </div>
</section>

<!-- FINAL CTA SECTION -->
<section class="relative py-24 text-white overflow-hidden">
    <div class="absolute inset-0">
        <img 
            src="<?php echo get_theme_mod('final_cta_image', 'https://i.ibb.co/0RRZkBQn/DSC03228-2.jpg'); ?>"
            alt="<?php _e('Join our mission', 'gem-project'); ?>"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
    </div>
    <div class="relative container mx-auto px-4 lg:px-6 max-w-7xl text-center">
        <h2 class="text-4xl lg:text-6xl font-bold mb-6">
            <?php echo get_theme_mod('final_cta_title', __('Every Animal Deserves Love', 'gem-project')); ?>
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
            <?php echo get_theme_mod('final_cta_description', __('Join us in our mission to rescue, rehabilitate, and provide forever homes for animals in need. Together, we can make a difference.', 'gem-project')); ?>
        </p>
        <div class="flex flex-wrap justify-center gap-4">
            <a href="<?php echo home_url('/donate'); ?>" class="bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                <?php _e('Make a Donation', 'gem-project'); ?>
            </a>
            <a href="<?php echo home_url('/get-involved'); ?>" class="border-2 border-white hover:bg-white hover:text-brand-text-primary text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                <?php _e('Get Involved', 'gem-project'); ?>
            </a>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Hero carousel functionality
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let heroInterval;

    function showSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.setAttribute('aria-hidden', i !== index);
        });
        heroDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('bg-white/50');
                dot.classList.add('bg-white');
            } else {
                dot.classList.remove('bg-white');
                dot.classList.add('bg-white/50');
            }
        });
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % heroSlides.length;
        showSlide(next);
    }

    function startCarousel() {
        heroInterval = setInterval(nextSlide, 5000);
    }

    function stopCarousel() {
        if (heroInterval) {
            clearInterval(heroInterval);
        }
    }

    // Initialize carousel
    startCarousel();

    // Dot click handlers
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopCarousel);
        heroSection.addEventListener('mouseleave', startCarousel);
    }
});
</script>