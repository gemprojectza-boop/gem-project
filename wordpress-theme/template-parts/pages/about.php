<?php
/**
 * Template part for displaying the About page content
 * 
 * @package Gem_Project_Theme
 */
?>

<div class="bg-brand-bg-main">
    <!-- Hero Section -->
    <section class="relative bg-brand-text-primary text-white py-20 md:py-32 text-center">
        <div class="absolute inset-0">
            <?php 
            $about_hero_image = get_theme_mod('about_hero_image', 'https://i.ibb.co/XfPq7BMz/DSC03353-2.jpg');
            if ($about_hero_image): 
            ?>
                <img 
                    src="<?php echo esc_url($about_hero_image); ?>" 
                    alt="<?php _e('Sanctuary landscape', 'gem-project'); ?>" 
                    class="w-full h-full object-cover"
                />
            <?php endif; ?>
        </div>
        <div class="relative container mx-auto px-6">
            <div class="content-bubble content-bubble-inverted max-w-4xl mx-auto animate-fade-in-up text-center" style="background: rgba(0,0,0,0.3); animation-delay: 0.3s;">
                <h1 class="text-4xl md:text-6xl font-black uppercase text-brand-primary text-shadow-strong text-center">
                    <span><?php echo get_theme_mod('about_hero_title', __('About The Sanctuary', 'gem-project')); ?></span>
                </h1>
                <p class="mt-4 text-lg md:text-xl text-shadow-custom text-center">
                    <?php echo get_theme_mod('about_hero_subtitle', __('A promise to animals. A commitment to healing. A home for life and hope for adoption.', 'gem-project')); ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Who We Are -->
    <section class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
            <div class="content-bubble animate-on-scroll">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary"><?php _e('Who We Are', 'gem-project'); ?></h2>
                    <div class="text-lg text-brand-text-secondary space-y-4 text-left">
                        <p><?php echo get_theme_mod('about_who_we_are_p1', __('The Gem Project Sanctuary is a nonprofit organisation just outside Cape Town that offers refuge to dogs and horses in need. We provide adoption, lifelong sanctuary, rehabilitation and community support all in one place.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('about_who_we_are_p2', __('Our name reflects our mission. We find the overlooked gems among animals and people. Whether it\'s a frightened dog, a withdrawn horse or a young person searching for direction, we believe every life holds value. Like diamonds in the rough we help them shine.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('about_who_we_are_p3', __('We are proudly one of the few true animal sanctuaries in the Western Cape. Our work honours two equally important paths: Adoption and Sanctuary.', 'gem-project')); ?></p>
                    </div>
                </div>
            </div>
            <div class="content-bubble animate-on-scroll">
                <?php 
                $welcome_gate_image = get_theme_mod('about_welcome_gate_image', 'https://i.ibb.co/XZrt0nR2/DSC00848.jpg');
                if ($welcome_gate_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($welcome_gate_image); ?>" 
                        alt="<?php _e('Animal being welcomed to the sanctuary', 'gem-project'); ?>" 
                        class="w-full h-auto object-cover rounded-t-lg"
                    />
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Community Programmes -->
    <section class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto content-bubble text-center animate-on-scroll">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary text-center"><?php _e('Community Programmes', 'gem-project'); ?></h2>
                    <p class="text-lg text-brand-text-secondary text-center"><?php _e('Our care extends beyond the animals. We invest in people too.', 'gem-project'); ?></p>
                </div>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 stagger-children">
                <div class="content-bubble animate-on-scroll">
                    <div class="p-4 md:p-6">
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <div>
                                <h3 class="text-lg font-bold mb-2 text-center"><?php _e('Mobile Vet Clinic', 'gem-project'); ?></h3>
                                <p class="text-brand-text-secondary text-sm text-left"><?php _e('Brings essential care to communities with limited veterinary access.', 'gem-project'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-bubble animate-on-scroll">
                    <div class="p-4 md:p-6">
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <div>
                                <h3 class="text-lg font-bold mb-2 text-center"><?php _e('Youth Apprenticeship Programme', 'gem-project'); ?></h3>
                                <p class="text-brand-text-secondary text-sm text-left"><?php _e('A mentorship opportunity for youth to gain life skills, empathy and real-world experience.', 'gem-project'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-bubble animate-on-scroll">
                    <div class="p-4 md:p-6">
                        <div class="flex items-start">
                            <svg class="w-6 h-6 text-brand-primary mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            <div>
                                <h3 class="text-lg font-bold mb-2 text-center"><?php _e('Hands-On Caregiver Programme', 'gem-project'); ?></h3>
                                <p class="text-brand-text-secondary text-sm text-left"><?php _e('Connects people directly with animals in our care for walking, bonding, and support.', 'gem-project'); ?></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 content-bubble animate-on-scroll">
                <?php 
                $mobile_vet_image = get_theme_mod('about_mobile_vet_image', 'https://i.ibb.co/yFsK5D7T/DSC06133.jpg');
                if ($mobile_vet_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($mobile_vet_image); ?>" 
                        alt="<?php _e('Youth helping with animal care', 'gem-project'); ?>" 
                        class="w-full h-auto object-cover rounded-t-lg"
                    />
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- What Makes Us Different -->
    <section class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
            <div class="md:order-2 content-bubble animate-on-scroll">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary"><?php _e('What Makes Us Different', 'gem-project'); ?></h2>
                    <div class="text-lg text-brand-text-secondary space-y-4 text-left">
                        <p><?php echo get_theme_mod('about_different_p1', __('Trust. Time. A home-like environment where no one is forgotten. The Gem Project Sanctuary is designed to offer something most animals have never known: the time and space to truly heal.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('about_different_p2', __('Dogs sleep indoors on warm beds. Horses roam in bonded herds. Every animal receives a care plan tailored to their medical, emotional and behavioural needs. Our sanctuary is a community of animals and people, built on compassion, respect and second chances.', 'gem-project')); ?></p>
                    </div>
                </div>
            </div>
            <div class="md:order-1 content-bubble animate-on-scroll">
                <?php 
                $sleeping_dogs_image = get_theme_mod('about_sleeping_dogs_image', 'https://i.ibb.co/BVD7R6Nm/DSC00774.jpg');
                if ($sleeping_dogs_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($sleeping_dogs_image); ?>" 
                        alt="<?php _e('Peaceful sleeping dog', 'gem-project'); ?>" 
                        class="w-full h-auto object-cover rounded-t-lg"
                    />
                <?php endif; ?>
            </div>
        </div>
    </section>
    
    <!-- Life at the Sanctuary -->
    <section class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center stagger-children">
            <div class="content-bubble animate-on-scroll">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary"><?php _e('Life at the Sanctuary', 'gem-project'); ?></h2>
                    <div class="text-lg text-brand-text-secondary space-y-4 text-left">
                        <p><?php echo get_theme_mod('about_life_description', __('Each day is filled with purpose, routine and love. Our animals wake up in peace surrounded by people who know them. This is not just care. It is what home was always meant to be. A home-like environment where healing can truly begin.', 'gem-project')); ?></p>
                        <ul class="list-disc list-inside space-y-2 mt-4">
                            <li><?php _e('Soft bedding and warm sleeping areas', 'gem-project'); ?></li>
                            <li><?php _e('Specialised meals and consistent vet care', 'gem-project'); ?></li>
                            <li><?php _e('Enrichment activities like walks and puzzles', 'gem-project'); ?></li>
                            <li><?php _e('Time, love and emotional safety', 'gem-project'); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content-bubble animate-on-scroll">
                <?php 
                $dog_walk_image = get_theme_mod('about_dog_walk_image', 'https://i.ibb.co/Y475WXP4/DSC01099.jpg');
                if ($dog_walk_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($dog_walk_image); ?>" 
                        alt="<?php _e('Group dog walk on the beach', 'gem-project'); ?>" 
                        class="w-full h-auto object-cover rounded-t-lg"
                    />
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Facilities -->
    <section class="py-20 md:py-24 bg-brand-bg-subtle">
        <div class="container mx-auto px-6">
            <div class="max-w-3xl mx-auto content-bubble text-center">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary text-center"><?php _e('Our Facilities', 'gem-project'); ?></h2>
                    <p class="text-lg text-brand-text-secondary text-center"><?php _e('Built for healing. Designed with heart. Every corner of our sanctuary reflects our belief that healing starts with feeling safe, seen and loved.', 'gem-project'); ?></p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-12 items-stretch mt-8">
                <div class="content-bubble">
                    <div class="p-6 md:p-8">
                        <svg class="w-8 h-8 text-brand-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h3 class="text-2xl font-bold mb-4 text-center"><?php _e('Dog Sanctuary Features', 'gem-project'); ?></h3>
                        <ul class="list-disc list-inside space-y-2 text-brand-text-secondary text-left">
                            <li><?php _e('Indoor sleeping rooms with home-style comfort', 'gem-project'); ?></li>
                            <li><?php _e('Outdoor fields for play and exploration', 'gem-project'); ?></li>
                            <li><?php _e('Medical, quarantine and grooming stations', 'gem-project'); ?></li>
                            <li><?php _e('Enrichment zones and interaction areas', 'gem-project'); ?></li>
                            <li><?php _e('Onsite overnight staff presence', 'gem-project'); ?></li>
                        </ul>
                    </div>
                </div>
                <div class="content-bubble">
                    <div class="p-6 md:p-8">
                        <svg class="w-8 h-8 text-brand-primary mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h3 class="text-2xl font-bold mb-4 text-center"><?php _e('Horse Sanctuary Features', 'gem-project'); ?></h3>
                        <ul class="list-disc list-inside space-y-2 text-brand-text-secondary text-left">
                            <li><?php _e('Large shaded paddocks and rest areas', 'gem-project'); ?></li>
                            <li><?php _e('Gentle training yards and grooming stations', 'gem-project'); ?></li>
                            <li><?php _e('Covered stables and soft ground shelters', 'gem-project'); ?></li>
                            <li><?php _e('Space to roam, bond and recover', 'gem-project'); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="mt-12 content-bubble">
                <?php 
                $drone_shot_image = get_theme_mod('about_drone_shot_image', 'https://i.ibb.co/fzqVKSRZ/DSC09212.jpg');
                if ($drone_shot_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($drone_shot_image); ?>" 
                        alt="<?php _e('Aerial view of the sanctuary facilities', 'gem-project'); ?>" 
                        class="w-full h-auto object-cover rounded-t-lg"
                    />
                <?php endif; ?>
            </div>
        </div>
    </section>
    
    <!-- Final CTA -->
    <section class="py-20 md:py-24 bg-brand-bg-main">
        <div class="container mx-auto px-6 text-center">
            <div class="content-bubble">
                <div class="p-6 md:p-8">
                    <svg class="w-10 h-10 text-brand-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-3xl md:text-4xl font-bold text-brand-primary"><?php _e('Get Involved', 'gem-project'); ?></h2>
                    <div class="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto mt-8">
                        <a href="<?php echo home_url('/dogs'); ?>" class="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Meet the Dogs', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/horses'); ?>" class="bg-brand-accent text-white hover:bg-brand-accent-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Meet the Horses', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/youth'); ?>" class="bg-brand-yellow text-brand-text-primary hover:bg-brand-yellow-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Our Youth Programme', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/dogs/sponsorship'); ?>" class="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Sponsor a Dog', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/horses#sponsor'); ?>" class="bg-brand-accent text-white hover:bg-brand-accent-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Sponsor a Horse', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/hands-on-dogs'); ?>" class="bg-brand-secondary text-white hover:bg-brand-secondary-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Hands-On Care (Dogs)', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/horses#hands-on'); ?>" class="bg-brand-accent text-white hover:bg-brand-accent-hover px-8 py-3 rounded-full transition-colors font-semibold">
                            <?php _e('Hands-On Care (Horses)', 'gem-project'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>