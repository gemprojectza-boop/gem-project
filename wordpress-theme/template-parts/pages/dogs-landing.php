<?php
/**
 * Template part for displaying the Dogs Landing page content
 * 
 * @package Gem_Project_Theme
 */
?>

<div class="bg-brand-bg-main">
    <!-- Hero Section -->
    <section class="hero relative bg-red-600 text-white py-20 md:py-32 text-center overflow-hidden min-h-[70vh] flex items-center justify-center">
        <div class="absolute inset-0">
            <?php 
            $dogs_hero_image = get_theme_mod('dogs_hero_image', 'https://i.ibb.co/svS8mMXX/DSC03012.jpg');
            if ($dogs_hero_image): 
            ?>
                <img 
                    src="<?php echo esc_url($dogs_hero_image); ?>" 
                    alt="<?php _e('Happy dogs in a field with a staff member', 'gem-project'); ?>" 
                    class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            <?php endif; ?>
        </div>
        <div style="position: relative; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; z-index: 10; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 80rem; margin: 0 auto;">
                <div style="padding: 3rem; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <h1 class="text-white" style="text-align: center; margin: 0 auto; font-size: 4rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.025em; margin-bottom: 2rem; text-shadow: 3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6);">
                        <?php echo get_theme_mod('dogs_hero_title', __('Our Dogs', 'gem-project')); ?>
                    </h1>
                    <p class="text-white" style="text-align: center; margin: 0 auto; font-size: 1.25rem; line-height: 1.6; max-width: 56rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.6);">
                        <?php echo get_theme_mod('dogs_hero_subtitle', __('Rescue, Rebuild, Rehome – and sometimes, provide sanctuary for life.', 'gem-project')); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Enhanced CTA Section -->
    <section class="py-12 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div class="container mx-auto px-6 text-center" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div class="content-bubble bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl border border-gray-100 inline-block max-w-4xl" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <div class="p-8" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <h2 class="text-2xl md:text-3xl font-bold text-brand-text-primary mb-6" style="text-align: center; margin: 0 auto 1.5rem auto;">
                        <?php _e('Get Involved Today', 'gem-project'); ?>
                    </h2>
                    <div class="flex flex-wrap justify-center gap-4" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; text-align: center; margin: 0 auto;">
                        <a href="<?php echo home_url('/adopt-a-dog'); ?>" class="btn-pulse shadow-lg bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition-colors font-semibold" style="background-color: #E30613; color: white; border: none; padding: 1rem 2rem;">
                            🐕 <?php _e('Meet Our Dogs', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/dogs/sponsorship'); ?>" class="btn-pulse shadow-lg bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition-colors font-semibold" style="background-color: #E30613; color: white; border: none; padding: 1rem 2rem;">
                            💝 <?php _e('Sponsor a Dog', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/hands-on-dogs'); ?>" class="shadow-lg bg-brand-accent hover:bg-green-700 text-white py-3 px-6 rounded-full transition-colors font-semibold" style="background-color: #39B54A; color: white; border: none; padding: 1rem 2rem;">
                            🤝 <?php _e('Hands-On Care', 'gem-project'); ?>
                        </a>
                        <a href="<?php echo home_url('/adopt-a-dog'); ?>" class="shadow-lg bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full transition-colors font-semibold" style="background-color: #E30613; color: white; border: none; padding: 1rem 2rem;">
                            🏡 <?php _e('Adopt Today', 'gem-project'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Intro Section -->
    <section id="intro" class="py-20 md:py-24 bg-gradient-to-br from-brand-bg-main to-brand-bg-subtle">
        <div class="container mx-auto px-6 max-w-6xl" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <?php 
                $dogs_intro_image = get_theme_mod('dogs_intro_image', 'https://i.ibb.co/xqfGVkv3/DSC03088.jpg');
                if ($dogs_intro_image): 
                ?>
                    <img 
                        src="<?php echo esc_url($dogs_intro_image); ?>" 
                        alt="<?php _e('Hopeful dog looking at camera', 'gem-project'); ?>" 
                        class="rounded-t-3xl aspect-video w-full object-cover"
                    />
                <?php endif; ?>
                <div class="p-10 md:p-12">
                    <svg class="w-14 h-14 text-brand-secondary mx-auto mb-6 icon-interactive" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h2 class="text-4xl md:text-5xl font-black text-brand-secondary text-center mb-8">
                        <?php _e('Introduction to Our Dog Sanctuary', 'gem-project'); ?>
                    </h2>
                    <div class="text-xl text-brand-text-secondary space-y-6 leading-relaxed max-w-4xl text-left mx-auto">
                        <p><?php echo get_theme_mod('dogs_intro_p1', __('The Gem Project\'s Dog Sanctuary is an all-breed animal rescue based in Cape Town. Our work is driven by a clear and powerful mission: to protect dogs from neglect, abuse and exploitation. We provide the care, healing and love they need to recover and thrive.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('dogs_intro_p2', __('We rescue dogs from a wide range of situations including abandonment, abuse, neglect and medical or behavioural challenges. Every dog that enters our sanctuary receives tailored support: rehabilitation, veterinary care, behavioural guidance and emotional healing. Some go on to find loving adoptive homes. Others, who may not be suitable for rehoming, live out their days with us in safety, surrounded by people who value and care for them deeply.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('dogs_intro_p3', __('Our sanctuary provides a permanent home for dogs who cannot be rehomed due to age, trauma or health needs. Here, they are not just sheltered. They are part of a family.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('dogs_intro_p4', __('Beyond direct rescue and care, we are committed to uplifting the communities around us. Through our outreach programme, we provide animal care education and basic training in under-resourced areas, while partnering with other organisations to deliver support and resources where they\'re needed most.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('dogs_intro_p5', __('We are currently in the implementation phase of our Recycling-for-Care Token Programme – a community initiative that will allow individuals to exchange recyclable materials for essential animal supplies such as food, health products and pet accessories. This initiative not only supports pet owners but also promotes environmental responsibility and fosters pride, dignity and empowerment in underserved communities.', 'gem-project')); ?></p>
                        <p><?php echo get_theme_mod('dogs_intro_p6', __('Some of our dogs also take part in specialised training to support therapy work, emotional support services and other community-based assistance roles. At every stage, we remain focused on ensuring the wellbeing of our animals and deepening the connection between people and the dogs who change their lives.', 'gem-project')); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Therapy Dogs Section -->
    <section class="py-20 md:py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Therapy Dogs Programme', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Some of our specially trained dogs provide emotional support and comfort to those in need, visiting schools, hospitals, and community centers.', 'gem-project'); ?>
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php 
                $therapy_dogs = array(
                    array(
                        'image' => get_theme_mod('therapy_dog_1', 'https://i.ibb.co/kVHsDb0G/image.png'),
                        'title' => __('School Visits', 'gem-project'),
                        'description' => __('Our therapy dogs help children with reading programmes and emotional support.', 'gem-project')
                    ),
                    array(
                        'image' => get_theme_mod('therapy_dog_2', 'https://i.ibb.co/MkgxrVN9/image.png'),
                        'title' => __('Hospital Support', 'gem-project'),
                        'description' => __('Providing comfort and companionship to patients and healthcare workers.', 'gem-project')
                    ),
                    array(
                        'image' => get_theme_mod('therapy_dog_3', 'https://images.pexels.com/photos/8434679/pexels-photo-8434679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
                        'title' => __('Community Centers', 'gem-project'),
                        'description' => __('Supporting elderly residents and community programs with therapeutic visits.', 'gem-project')
                    )
                );
                foreach ($therapy_dogs as $dog): 
                ?>
                    <div class="bg-gray-50 rounded-2xl overflow-hidden">
                        <img 
                            src="<?php echo esc_url($dog['image']); ?>" 
                            alt="<?php echo esc_attr($dog['title']); ?>" 
                            class="w-full h-48 object-cover"
                        />
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-brand-text-primary mb-3"><?php echo $dog['title']; ?></h3>
                            <p class="text-brand-text-secondary"><?php echo $dog['description']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Service Dogs Section -->
    <section class="py-20 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-6">
                        <?php _e('Service Dogs Training', 'gem-project'); ?>
                    </h2>
                    <p class="text-lg text-brand-text-secondary mb-6">
                        <?php _e('We train select dogs to become service animals, providing life-changing support for individuals with disabilities, PTSD, and other special needs.', 'gem-project'); ?>
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-2 h-2 bg-brand-secondary rounded-full mt-2"></div>
                            <p class="text-brand-text-secondary"><?php _e('Mobility assistance and guidance', 'gem-project'); ?></p>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-2 h-2 bg-brand-secondary rounded-full mt-2"></div>
                            <p class="text-brand-text-secondary"><?php _e('PTSD and anxiety support', 'gem-project'); ?></p>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-2 h-2 bg-brand-secondary rounded-full mt-2"></div>
                            <p class="text-brand-text-secondary"><?php _e('Medical alert and response training', 'gem-project'); ?></p>
                        </div>
                    </div>
                    <a href="<?php echo home_url('/dog-training'); ?>" class="inline-flex items-center mt-6 bg-brand-secondary hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                        <?php _e('Learn More About Training', 'gem-project'); ?>
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
                <div>
                    <img 
                        src="<?php echo get_theme_mod('service_dogs_image', 'https://i.ibb.co/MQwNTVT/DSC02148.jpg'); ?>" 
                        alt="<?php _e('Service dog in training', 'gem-project'); ?>" 
                        class="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </div>
    </section>

    <!-- Meet The Team Section -->
    <section id="team" class="py-20 md:py-24 bg-gradient-to-br from-brand-bg-subtle to-brand-bg-main">
        <div class="container mx-auto px-6 text-center" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div class="max-w-4xl mx-auto">
                <div class="content-bubble bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border border-gray-100" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <?php 
                    $dog_team_image = get_theme_mod('dog_team_photo', 'https://i.ibb.co/fY2SGPmf/image.png');
                    if ($dog_team_image): 
                    ?>
                        <img 
                            src="<?php echo esc_url($dog_team_image); ?>" 
                            alt="<?php _e('Dog team members', 'gem-project'); ?>" 
                            class="rounded-t-3xl w-full h-auto object-contain"
                        />
                    <?php endif; ?>
                    <div class="p-10 md:p-12" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                        <svg class="w-16 h-16 text-brand-primary mx-auto mb-6 icon-interactive" style="margin: 0 auto 1.5rem auto;" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <h2 class="text-4xl md:text-5xl font-black text-brand-text-primary mb-6" style="text-align: center !important; margin: 0 auto 1.5rem auto; display: block; width: 100%;">
                            <?php _e('Meet Our Dedicated Team', 'gem-project'); ?>
                        </h2>
                        <p class="text-xl text-brand-text-secondary my-8 leading-relaxed" style="text-align: center !important; margin: 2rem auto; display: block; width: 100%;">
                            <?php _e('Our work is only possible thanks to the passionate individuals who care for our animals every single day.', 'gem-project'); ?>
                        </p>
                        <a href="<?php echo home_url('/team'); ?>" class="bg-brand-primary hover:bg-brand-primary-hover text-white shadow-lg btn-pulse py-3 px-8 rounded-full transition-colors font-semibold" style="background-color: #39B54A; color: white; border: none; padding: 1rem 2rem; font-size: 1.125rem;">
                            <?php _e('Meet the Team', 'gem-project'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Dog Outings Section -->
    <section class="py-20 md:py-24 bg-white">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Dog Outings & Enrichment', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Regular outings and enrichment activities ensure our dogs stay happy, healthy, and socialized while they wait for their forever homes.', 'gem-project'); ?>
                </p>
            </div>
            <div class="text-center">
                <a href="<?php echo home_url('/dog-outings'); ?>" class="inline-flex items-center bg-brand-secondary hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('Learn About Our Outings Programme', 'gem-project'); ?>
                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Health & Wellbeing Section -->
    <section class="py-20 md:py-24 bg-gray-50">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Health & Wellbeing', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Every dog receives comprehensive veterinary care, from routine check-ups to specialized medical treatment and rehabilitation.', 'gem-project'); ?>
                </p>
            </div>
            <div class="text-center">
                <a href="<?php echo home_url('/animal-health'); ?>" class="inline-flex items-center bg-brand-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                    <?php _e('Learn About Our Health Programmes', 'gem-project'); ?>
                    <svg class="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Wishlist Section -->
    <section class="py-20 md:py-24 bg-brand-accent/5">
        <div class="container mx-auto px-6">
            <div class="text-center mb-12">
                <h2 class="text-3xl lg:text-5xl font-bold text-brand-text-primary mb-4">
                    <?php _e('Support Our Dogs', 'gem-project'); ?>
                </h2>
                <p class="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    <?php _e('Help us provide the best care for our dogs by donating items from our wishlist or making a financial contribution.', 'gem-project'); ?>
                </p>
            </div>
            <div class="text-center">
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="<?php echo home_url('/dog-wishlist'); ?>" class="bg-brand-accent hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                        <?php _e('View Our Wishlist', 'gem-project'); ?>
                    </a>
                    <a href="<?php echo home_url('/donate'); ?>" class="bg-brand-primary hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg">
                        <?php _e('Make a Donation', 'gem-project'); ?>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>