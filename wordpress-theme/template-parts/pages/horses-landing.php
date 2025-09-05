<?php
/**
 * Template part for displaying the Horses Landing page content
 * 
 * @package Gem_Project_Theme
 */
?>

<div class="bg-brand-bg-main">
    <!-- Hero Section -->
    <section class="hero relative bg-green-600 text-white py-20 md:py-32 text-center min-h-[70vh] flex items-center justify-center">
        <div class="absolute inset-0">
            <?php 
            $horses_hero_image = get_theme_mod('horses_hero_image', 'https://i.ibb.co/TDF50hqC/image.png');
            if ($horses_hero_image): 
            ?>
                <img 
                    src="<?php echo esc_url($horses_hero_image); ?>" 
                    alt="<?php _e('Horses grazing peacefully in the paddocks. Light through trees', 'gem-project'); ?>" 
                    class="w-full h-full object-cover"
                    loading="eager"
                />
            <?php endif; ?>
        </div>
        <div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; z-index: 10; display: flex; justify-content: center;">
            <div style="max-width: 80rem; margin: 0 auto;">
                <div style="padding: 3rem;">
                    <h1 class="text-white" style="text-align: center; font-size: 4rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em; text-shadow: 3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6);">
                        <?php echo get_theme_mod('horses_hero_title', __('Horses at The Gem Project Sanctuary', 'gem-project')); ?>
                    </h1>
                </div>
            </div>
        </div>
    </section>

    <!-- Welcome Section -->
    <section class="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div class="container mx-auto px-6 max-w-6xl">
            <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100">
                <div class="p-10 md:p-12 text-center">
                    <div class="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <svg class="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black text-brand-text-primary text-center mb-8">
                        <?php _e('Welcome to Our Herd', 'gem-project'); ?>
                    </h2>
                    <div class="text-xl text-brand-text-secondary space-y-6 leading-relaxed max-w-4xl mx-auto text-left">
                        <p><?php echo get_theme_mod('horses_welcome_p1', __('At The Gem Project Sanctuary, our herd is at the heart of who we are. Every horse that arrives carries a story, stories of neglect, abandonment, hardship or quiet resilience. But here, every story is rewritten with care, patience and purpose.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('horses_welcome_p2', __('Our sanctuary is home to 20 incredible horses, each with a name, a voice and a journey. Some are here for rehabilitation, others for life. What unites them is the promise that they will never again be forgotten. From the first gentle touch to the first pain-free trot, every small milestone is a victory we celebrate together.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('horses_welcome_p3', __('This is more than a place of rescue. It is a place of restoration, of dignity, of connection. It is where broken bodies heal and weary spirits rise. Whether they are learning to trust again or simply enjoying the peace of a soft bed and a full bucket, our horses know they are safe. They are home.', 'gem-project')); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission and Vision Section -->
    <section class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="lg:order-2">
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                        <?php 
                        $horses_mission_image = get_theme_mod('horses_mission_image', 'https://i.ibb.co/RkPY7W9F/image.png');
                        if ($horses_mission_image): 
                        ?>
                            <img 
                                src="<?php echo esc_url($horses_mission_image); ?>" 
                                alt="<?php _e('A horse standing calmly with a caregiver, morning light behind them', 'gem-project'); ?>" 
                                class="w-full aspect-video object-cover"
                            />
                        <?php endif; ?>
                    </div>
                </div>
                <div class="lg:order-1">
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                        <div class="p-8 md:p-12 text-center">
                            <div class="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">
                                <?php _e('Mission and Vision', 'gem-project'); ?>
                            </h3>
                            <div class="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">
                                <p><?php echo get_theme_mod('horses_mission_p1', __('At The Gem Project Sanctuary, our mission is to be a voice for the voiceless. To protect, heal and advocate for equines who have suffered neglect, abuse, abandonment or hardship. We exist to offer them not just survival, but a full and meaningful life.', 'gem-project')); ?></p>
                                <p><?php echo get_theme_mod('horses_mission_p2', __('We are committed to: Rescuing horses in need, rehabilitating body and spirit, providing lifelong sanctuary, and educating the public.', 'gem-project')); ?></p>
                                <p><?php echo get_theme_mod('horses_mission_p3', __('Our vision is a world where no horse is forgotten. Looking ahead, we aim to establish an onsite equine clinic, launch a mobile ambulance, and build deeper community partnerships.', 'gem-project')); ?></p>
                            </div>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <a href="<?php echo home_url('/about'); ?>" class="shadow-lg btn-pulse bg-brand-primary text-white hover:bg-brand-primary-hover py-3 px-6 rounded-full transition-colors font-semibold">
                                    <?php _e('Learn More About Our Mission', 'gem-project'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Adoptable Horses Section -->
    <section id="adoption" class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Adoptable Horses', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Meet our horses who are ready for their forever homes. Each one has been carefully rehabilitated and is looking for a loving family.', 'gem-project'); ?>
                </p>
            </div>
            
            <?php
            // Get adoptable horses
            $adoptable_horses = new WP_Query(array(
                'post_type' => 'horse',
                'posts_per_page' => 6,
                'meta_query' => array(
                    array(
                        'key' => '_horse_status',
                        'value' => 'adoptable'
                    )
                )
            ));
            
            if ($adoptable_horses->have_posts()): 
            ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php while ($adoptable_horses->have_posts()): $adoptable_horses->the_post(); ?>
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                            <div class="relative h-64 overflow-hidden">
                                <?php if (has_post_thumbnail()): ?>
                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500')); ?>
                                <?php else: ?>
                                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span class="text-gray-400"><?php _e('No image available', 'gem-project'); ?></span>
                                    </div>
                                <?php endif; ?>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-bold mb-1"><?php the_title(); ?></h3>
                                    <p class="text-sm opacity-90">
                                        <?php echo get_post_meta(get_the_ID(), '_horse_breed', true); ?> • 
                                        <?php echo get_post_meta(get_the_ID(), '_horse_age', true); ?> <?php _e('years old', 'gem-project'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-brand-text-secondary mb-4 line-clamp-3">
                                    <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                </p>
                                <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-brand-accent hover:text-green-700 font-semibold">
                                    <?php _e('Learn More', 'gem-project'); ?>
                                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
                <?php wp_reset_postdata(); ?>
            <?php endif; ?>
            
            <div class="text-center mt-12">
                <a href="<?php echo get_post_type_archive_link('horse'); ?>" class="inline-flex items-center bg-brand-accent hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('View All Horses', 'gem-project'); ?>
                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Forever Horses Section -->
    <section id="forever" class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Forever Sanctuary Horses', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Meet our permanent residents who have found their forever home at our sanctuary. These horses will live out their days in peace and comfort.', 'gem-project'); ?>
                </p>
            </div>
            
            <?php
            // Get forever horses
            $forever_horses = new WP_Query(array(
                'post_type' => 'horse',
                'posts_per_page' => 6,
                'meta_query' => array(
                    array(
                        'key' => '_horse_status',
                        'value' => 'forever'
                    )
                )
            ));
            
            if ($forever_horses->have_posts()): 
            ?>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php while ($forever_horses->have_posts()): $forever_horses->the_post(); ?>
                        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                            <div class="relative h-64 overflow-hidden">
                                <?php if (has_post_thumbnail()): ?>
                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500')); ?>
                                <?php else: ?>
                                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                                        <span class="text-gray-400"><?php _e('No image available', 'gem-project'); ?></span>
                                    </div>
                                <?php endif; ?>
                                <div class="absolute top-4 right-4">
                                    <span class="bg-brand-yellow text-brand-text-primary px-3 py-1 rounded-full text-sm font-semibold">
                                        <?php _e('Forever Home', 'gem-project'); ?>
                                    </span>
                                </div>
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div class="absolute bottom-4 left-4 text-white">
                                    <h3 class="text-xl font-bold mb-1"><?php the_title(); ?></h3>
                                    <p class="text-sm opacity-90">
                                        <?php echo get_post_meta(get_the_ID(), '_horse_breed', true); ?> • 
                                        <?php echo get_post_meta(get_the_ID(), '_horse_age', true); ?> <?php _e('years old', 'gem-project'); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-brand-text-secondary mb-4 line-clamp-3">
                                    <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
                                </p>
                                <div class="flex justify-between items-center">
                                    <a href="<?php the_permalink(); ?>" class="inline-flex items-center text-brand-accent hover:text-green-700 font-semibold">
                                        <?php _e('Meet', 'gem-project'); ?> <?php the_title(); ?>
                                        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </a>
                                    <a href="#sponsor" class="bg-brand-yellow hover:bg-yellow-600 text-brand-text-primary px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                                        <?php _e('Sponsor', 'gem-project'); ?>
                                    </a>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
                <?php wp_reset_postdata(); ?>
            <?php endif; ?>
        </div>
    </section>

    <!-- Training and Recovery Section -->
    <section class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="lg:order-2">
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                        <?php 
                        $horses_training_image = get_theme_mod('horses_training_image', 'https://i.ibb.co/nqnCvdcj/image.png');
                        if ($horses_training_image): 
                        ?>
                            <img 
                                src="<?php echo esc_url($horses_training_image); ?>" 
                                alt="<?php _e('Horse in liberty work session with caregiver', 'gem-project'); ?>" 
                                class="w-full aspect-video object-cover"
                            />
                        <?php endif; ?>
                    </div>
                </div>
                <div class="lg:order-1">
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                        <div class="p-8 md:p-12 text-center">
                            <div class="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">
                                <?php _e('Training and Recovery', 'gem-project'); ?>
                            </h3>
                            <div class="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">
                                <p><?php echo get_theme_mod('horses_training_description', __('Healing is more than physical. Our horses receive consistent groundwork, positive reinforcement training, and trust-building exercises to help them feel safe. It\'s about confidence, communication and calm.', 'gem-project')); ?></p>
                            </div>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <a href="<?php echo home_url('/horses/training'); ?>" class="shadow-lg btn-pulse bg-brand-accent hover:bg-brand-accent-hover text-white py-3 px-6 rounded-full transition-colors font-semibold">
                                    <?php _e('Learn About Our Approach', 'gem-project'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Facilities Section -->
    <section class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                        <?php 
                        $horses_facilities_image = get_theme_mod('horses_facilities_image', 'https://i.ibb.co/fYbptyRn/image.png');
                        if ($horses_facilities_image): 
                        ?>
                            <img 
                                src="<?php echo esc_url($horses_facilities_image); ?>" 
                                alt="<?php _e('Clean stables and large open paddocks', 'gem-project'); ?>" 
                                class="w-full aspect-video object-cover"
                            />
                        <?php endif; ?>
                    </div>
                </div>
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                        <div class="p-8 md:p-12 text-center">
                            <div class="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">
                                <?php _e('Our Facilities', 'gem-project'); ?>
                            </h3>
                            <div class="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">
                                <p><?php echo get_theme_mod('horses_facilities_description', __('Our horses live in safe, open spaces designed for healing and freedom. Large paddocks, clean stables, and dedicated rehab zones support daily care. Every design decision reflects our commitment to wellbeing.', 'gem-project')); ?></p>
                            </div>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <a href="<?php echo home_url('/horses/facilities'); ?>" class="shadow-lg btn-pulse bg-brand-accent hover:bg-brand-accent-hover text-white py-3 px-6 rounded-full transition-colors font-semibold">
                                    <?php _e('See Our Facilities', 'gem-project'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sponsor a Horse Section -->
    <section id="sponsor" class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                        <?php 
                        $horses_sponsor_image = get_theme_mod('horses_sponsor_image', 'https://i.ibb.co/yrWjZn0/DSC01896.jpg');
                        if ($horses_sponsor_image): 
                        ?>
                            <img 
                                src="<?php echo esc_url($horses_sponsor_image); ?>" 
                                alt="<?php _e('Sponsored horse with printed photo', 'gem-project'); ?>" 
                                class="w-full aspect-video object-cover"
                            />
                        <?php endif; ?>
                    </div>
                </div>
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                        <div class="p-8 md:p-12 text-center">
                            <div class="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">
                                <?php _e('Sponsor a Horse', 'gem-project'); ?>
                            </h3>
                            <div class="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">
                                <p><?php echo get_theme_mod('horses_sponsor_description', __('Make a lasting impact by sponsoring one of our forever horses. Your monthly support covers feed, veterinary care, hoof trimming and more. You\'ll receive updates, photos and the joy of knowing you\'re part of their journey.', 'gem-project')); ?></p>
                            </div>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <a href="<?php echo home_url('/donate'); ?>" class="shadow-lg btn-pulse bg-brand-accent hover:bg-brand-accent-hover text-white py-3 px-6 rounded-full transition-colors font-semibold">
                                    <?php _e('Sponsor Now', 'gem-project'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6 max-w-7xl">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                        <?php 
                        $horses_contact_image = get_theme_mod('horses_contact_image', 'https://i.ibb.co/C38CWXwG/image.png');
                        if ($horses_contact_image): 
                        ?>
                            <img 
                                src="<?php echo esc_url($horses_contact_image); ?>" 
                                alt="<?php _e('Close-up of a horse nose nuzzling caregiver\'s hand', 'gem-project'); ?>" 
                                class="w-full aspect-video object-cover"
                            />
                        <?php endif; ?>
                    </div>
                </div>
                <div>
                    <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border border-gray-100">
                        <div class="p-8 md:p-12 text-center">
                            <div class="w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg class="w-7 h-7 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <h3 class="text-3xl md:text-4xl font-black text-brand-text-primary text-center mb-6">
                                <?php _e('Contact Us', 'gem-project'); ?>
                            </h3>
                            <div class="text-brand-text-secondary space-y-6 my-8 text-lg leading-relaxed text-left">
                                <p><?php _e('Interested in adopting? Want to get involved? Reach out. We\'d love to hear from you.', 'gem-project'); ?></p>
                            </div>
                            <div class="flex flex-wrap gap-4 justify-center">
                                <a href="<?php echo home_url('/contact'); ?>" class="shadow-lg btn-pulse bg-brand-primary text-white hover:bg-brand-primary-hover py-3 px-6 rounded-full transition-colors font-semibold">
                                    <?php _e('Contact Us', 'gem-project'); ?>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>