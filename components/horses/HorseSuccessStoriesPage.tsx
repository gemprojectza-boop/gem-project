

import React from 'react';
import { MediaContent } from '../../types.ts';
import EditableMedia from '../EditableMedia.tsx';
import CtaButton from '../CtaButton.tsx';
import { PageHero, ContentSection } from '../PageComponents.tsx';
import { PawIcon } from '../icons.tsx';

interface HorseSuccessStoriesPageProps {
  mediaContent: MediaContent;
  isEditMode: boolean;
  onMediaUpdate: (key: string, url: string) => void;
}

const stories = [
    { 
        title: "The Rescue of Stella: A Story of Hope and Healing",
        name: "Stella",
        beforeKeys: ['stella_success_before_1', 'stella_success_before_2', 'stella_success_before_3'], 
        afterKeys: ['stella_success_after_1', 'stella_success_after_2'], 
        text: `Stella’s story began in the shadows, hidden from the kindness and care every horse deserves. It was another rescue organisation in the area that first alerted us to her desperate situation — one that required immediate action. Stella was being cruelly beaten by children, who tried to force her to move despite her fragile state. Emaciated and painfully unsound, she was barely able to walk. Very little is known about Stella’s past or how she came to endure such suffering. When we saw her, it was clear her body was broken in more ways than one. Her once beautiful mane and tail had been cut so short they barely resembled hair, and a stark white marking had been cruelly painted onto her face, disguising her true self. When the time came to rescue her, we had to physically lift Stella into the horsebox — her weakness was so profound she could not move on her own. Upon arrival at the sanctuary, we gently unloaded her at the stable door. Without a sound, Stella lay down — a silent, trusting gesture that seemed to say she finally understood: she was safe. Since that day, Stella’s journey has been one of slow but steady healing. Every day, she regains strength and confidence, reminding us all of the power of patience, compassion, and second chances.`
    },
    { 
        title: "Charlie’s Rescue: From Isolation to Belonging",
        name: "Charlie",
        beforeKeys: ['charlie_success_before_1', 'charlie_success_before_2', 'charlie_success_before_3'], 
        afterKeys: ['charlie_success_after_1', 'charlie_success_after_2'], 
        text: `Charlie’s journey to The Gem Project Sanctuary began as an emergency surrender. He had been living alone on a farm, with no companions except a few geese. Severely underweight and covered from head to tail in bot eggs, Charlie was in a fragile and painful state. His feet were in poor condition, and he was unsound, struggling to move comfortably. When we arrived to bring Charlie home, we carefully loaded him into the horsebox, ready to give him a chance at a better life. The moment he stepped off the truck and called out — only to hear the eager responses of other horses — was deeply moving for everyone present. For the first time in a long while, Charlie realized he was not alone. It was a beautiful, unforgettable moment — a powerful reminder of the healing that companionship and kindness can bring. Charlie's rehabilitation began with thorough deworming, and due to the severity of his bot egg infestation, we had to clip his coat to help treat him effectively. From there, with patience, care, and love, Charlie started his path to recovery — a journey toward health, happiness, and belonging.`
    },
    { 
        title: "Peaches & Cream: A Journey from Neglect to Hope",
        name: "Peaches",
        beforeKeys: ['peaches_success_before_1', 'peaches_success_before_2', 'peaches_success_before_3', 'peaches_success_before_4'], 
        afterKeys: ['peaches_success_after_1', 'peaches_success_after_2'], 
        text: `Peaches & Cream’s story began in a backyard in our area, where she was being ridden by a grown man and forced to pull a cart — all while still very young. When she came to our attention, it was clear she was carrying the physical marks of her hardship. Wounds from the harness scarred her chest, and severe sores had developed on the sides of her mouth from being ridden in harsh wire. Though underweight, Peaches was not emaciated, but the toll of her mistreatment was unmistakable. Once Peaches arrived at the sanctuary, her recovery began in earnest. With gentle care and proper nutrition, her wounds started to heal, and she blossomed into a beautiful pony. We were shocked and heartbroken when a dental examination revealed she was just over two years old — far too young to have endured so much — and that she had permanent scar damage to her tongue from previous abuse. Despite her painful past, Peaches has the sweetest personality. She adores people, loves cuddles, and always welcomes treats with bright eyes and a gentle spirit. During her recovery, we also discovered a growth on the inside of her back leg, diagnosed as a sarcoid — a type of skin cancer. At first, we hoped to leave it alone as long as it didn’t grow. Unfortunately, its location meant Peaches often bumped it with her other leg, causing it to enlarge and requiring treatment. Thanks to her courage and resilience, Peaches faced her treatment bravely, and today she continues her journey toward health, happiness, and a bright future — one full of love and care.`
    },
    { 
        title: "Beyoncé’s Story: From Fragile to Flourishing",
        name: "Beyoncé",
        beforeKeys: ['beyonce_success_before_1', 'beyonce_success_before_2'], 
        afterKeys: ['beyonce_success_after_1'], 
        text: `When Beyoncé arrived at The Gem Project Sanctuary, she was barely clinging to life. Emaciated and frail, her skeletal frame told a story of prolonged neglect and suffering. It was clear she needed urgent help—and a lot of love. With dedicated care, a carefully structured feeding plan, and the freedom to rest and recover in peace, Beyoncé began to transform. Day by day, her body grew stronger, her coat began to shine, and her eyes regained the spark they had lost. Today, she is barely recognizable from the fragile pony who first walked through our gates. A full medical evaluation revealed that Beyoncé has a significant heart murmur. Combined with her age and individual needs, we made the decision to offer her a forever home here at the sanctuary. Beyoncé will live out the rest of her life as a cherished resident, surrounded by the safety and care she deserves. Now in fantastic physical condition, Beyoncé exudes calm contentment. She has a few unique quirks and sensitivities that require a patient and understanding approach—but they are part of what makes her so special. With the right care, she continues to thrive and enjoy every moment of her sanctuary life. Beyoncé is living proof that even the most broken can heal when given a chance. She has found her forever home with us—and she’ll never face neglect or fear again.`
    },
    { 
        title: "Peekaboo’s Journey: From Fear to Trust",
        name: "Peekaboo",
        beforeKeys: ['peekaboo_success_before_1'], 
        afterKeys: ['peekaboo_success_after_1'], 
        text: `When Peekaboo arrived at The Gem Project Sanctuary, his name was the only sweet thing about his story. Rescued from heartbreaking conditions, he had endured severe mistreatment that left him deeply traumatized—especially fearful of any touch near his face or mouth. At just four years old, he was still an uncastrated colt, bringing with him not only the challenges of past abuse but also strong, sometimes unpredictable coltish behaviors. Trust was something he had never known, and his fear made even the gentlest human interaction a source of distress. From day one, our team knew that Peekaboo’s healing would take time, patience, and a lot of love. His recovery is ongoing, and some days are harder than others. At times, we bring in experienced external behaviorists to support him, helping us navigate his complex emotional and behavioral needs. Despite the hurdles, Peekaboo is slowly learning that kindness doesn’t come with strings attached. He now lives out his days at the sanctuary, where he is safe, respected, and surrounded by people who believe in his potential. Every small breakthrough—a moment of calm, a gentle nuzzle, a step forward without fear—is a victory we celebrate. Peekaboo may always carry some of his past with him, but here at The Gem Project Sanctuary, he will never have to face the world alone again. His journey toward trust is a testament to the power of patience and unconditional care.`
    },
    { 
        title: "Sashay’s Story: A Second Chance for a Forgotten Filly",
        name: "Sashay",
        beforeKeys: ['sashay_success_before_1'], 
        afterKeys: ['sashay_success_after_1'], 
        text: `When Sashay came to The Gem Project Sanctuary, she was just shy of her fourth birthday—but her young life had already been filled with more hardship than any horse should ever endure. Born into neglect, she had never known kindness or compassion. Instead, her world consisted of a dark, dirty stable, where food was scarce and human contact was always negative. With no exposure to the outside world, Sashay became extremely wary of people and deeply anxious in unfamiliar surroundings. Locked away and unstimulated, she developed a stable vice—crib biting—a sign of the stress and boredom she endured daily. It was clear from the start: Sashay hadn’t just been neglected, she had been forgotten. But at the sanctuary, her story began to change. We knew trust wouldn’t come easily. With patience, gentleness, and consistency, we gave Sashay the time she needed to begin healing. Slowly, she started to understand that not all humans bring harm. That food would come regularly. That the sun on her back and space to move were part of everyday life now. Today, Sashay is beginning her next chapter. She’s slowly coming into work and showing promise—but her journey is far from over. While she dazzles with her gleaming coat and picture-perfect looks (she’s often called our real-life “Barbie pony”), she still needs an experienced and understanding handler who can continue her progress with care and empathy. Sashay will soon be available for adoption to the right home—one that recognizes her past, respects her spirit, and is ready to help her continue becoming the confident, happy horse she was always meant to be.`
    },
];

const StorySection: React.FC<HorseSuccessStoriesPageProps & { story: typeof stories[0]; index: number }> = ({ story, index, ...props }) => {
    const colors = [
        { bg: 'bg-green-600', accent: 'bg-green-600', text: 'text-white' },
        { bg: 'bg-green-700', accent: 'bg-green-700', text: 'text-white' },
        { bg: 'bg-green-500', accent: 'bg-green-500', text: 'text-white' },
        { bg: 'bg-green-800', accent: 'bg-green-800', text: 'text-white' }
    ];
    const colorScheme = colors[index % 4];
    
    return (
        <article className="magazine-story-section py-16 lg:py-20 relative overflow-hidden">
            {/* Geometric Color Blocking */}
            <div className="absolute inset-0">
                <div className={`absolute inset-0 ${colorScheme.bg}/5`}></div>
                <div className={`absolute top-0 right-0 w-1/3 h-full ${colorScheme.bg}/10 transform skew-x-12`}></div>
                <div className={`absolute bottom-0 left-0 w-64 h-64 ${colorScheme.bg}/15 rounded-full -translate-x-32 translate-y-32`}></div>
            </div>
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Magazine Header with Page Number */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                        <div className={`w-12 h-12 ${colorScheme.bg} rounded-full flex items-center justify-center mr-4`}>
                            <PawIcon className={`w-6 h-6 ${colorScheme.text}`} />
                        </div>
                        <div>
                            <span className={`text-sm font-bold ${colorScheme.bg.replace('bg-', 'text-')} uppercase tracking-wider`}>Rescue Story</span>
                            <div className="text-xs text-gray-500">Page {index + 1}</div>
                        </div>
                    </div>
                    <div className={`w-16 h-2 ${colorScheme.bg} rounded-full`}></div>
                </div>
                
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-12">
                    {/* Main Content Section */}
                    <div className="xl:col-span-3 space-y-8">
                        <header className="mb-8">
                            <h2 className="text-5xl lg:text-6xl font-black text-green-800 leading-tight mb-4">{story.title}</h2>
                            <div className={`w-32 h-1 ${colorScheme.bg} rounded-full`}></div>
                        </header>
                        
                        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                            {/* Article Text */}
                            <div className="xl:col-span-3">
                                <div className="bg-white rounded-3xl p-8 lg:p-12 relative">
                                    {/* Geometric accent in corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${colorScheme.bg}/20 rounded-bl-3xl`}></div>
                                    <div className="relative z-10 space-y-6 text-lg text-brand-text-primary leading-relaxed">
                                        <p>{story.text}</p>
                                    </div>
                                    {/* Success indicator */}
                                    <div className="mt-8 flex items-center justify-center">
                                        <div className={`px-6 py-3 ${colorScheme.bg} ${colorScheme.text} rounded-full font-bold text-sm uppercase tracking-wider`}>
                                            ✓ Rescue Complete
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* After Section - Below Text */}
                        <div className={`${colorScheme.bg}/10 rounded-2xl p-8 border-l-4 ${colorScheme.bg.replace('bg-', 'border-')}`}>
                            <h4 className={`font-black text-green-800 mb-6 text-center uppercase tracking-wider text-lg`}>After Recovery</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {story.afterKeys.slice(0, 4).map((key, idx) => (
                                    props.mediaContent[key] ? (
                                        <div key={key} className="aspect-square overflow-hidden rounded-xl border-2 border-white">
                                            <EditableMedia 
                                                mediaKey={key} 
                                                mediaUrl={props.mediaContent[key]!} 
                                                alt={`${story.name} after recovery ${idx + 1}`} 
                                                {...props} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Before Photos Sidebar */}
                    <div className="xl:col-span-1 space-y-6">
                        {/* Before Section - Right Side */}
                        <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-400">
                            <h4 className="font-black text-green-700 mb-6 text-center uppercase tracking-wider text-sm">Before</h4>
                            <div className="space-y-4">
                                {story.beforeKeys.slice(0, 4).map((key, idx) => (
                                    props.mediaContent[key] ? (
                                        <div key={key} className="aspect-square overflow-hidden rounded-xl border-2 border-white">
                                            <EditableMedia 
                                                mediaKey={key} 
                                                mediaUrl={props.mediaContent[key]!} 
                                                alt={`${story.name} before recovery ${idx + 1}`} 
                                                {...props} 
                                                className="w-full h-full object-cover" 
                                            />
                                        </div>
                                    ) : null
                                ))}
                            </div>
                        </div>
                        
                        {/* Accent Color Highlight Box */}
                        <div className={`${colorScheme.bg} ${colorScheme.text} rounded-2xl p-6 text-center`}>
                            <div className="mb-3">
                                <PawIcon className={`w-8 h-8 mx-auto ${colorScheme.text}`} />
                            </div>
                            <h5 className="font-black text-sm uppercase tracking-wider mb-2 text-white">Success Story</h5>
                            <p className="text-sm opacity-90 text-white">From rescue to recovery</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const HorseSuccessStoriesPage: React.FC<HorseSuccessStoriesPageProps> = (props) => {
    return (
        <div className="bg-brand-bg-main">
            <PageHero
                title="Success Stories"
                subtitle="Every rescue begins with a moment of urgency. These are the journeys from hardship to healing."
                mediaKey="horse_stories_hero"
                alt="A beautiful, healthy horse running freely in a pasture"
                titleColorClass="text-green-700"
                {...props}
            />
            
            <ContentSection>
                <div className="text-center">
                    <p>Every rescue at The Gem Project Sanctuary begins with a moment of urgency—a call for help, a heartbreaking scene, a horse on the edge of survival. This section shares those raw, unfiltered beginnings. These are the horses in their most vulnerable state: malnourished, neglected, injured, forgotten.</p>
                    <p className="mt-4">Here, you’ll learn about:</p>
                    <ul className="list-disc list-inside space-y-2 my-4 text-left max-w-2xl mx-auto">
                        <li>The conditions in which each horse was found</li>
                        <li>How we responded—sometimes in remote areas, often in collaboration with communities or animal welfare partners</li>
                        <li>The immediate care they received upon arrival, from emergency veterinary intervention to gentle first handling</li>
                        <li>The emotional state of the horse: scared, shut down, reactive, or withdrawn</li>
                    </ul>
                    <p>These are the "before" stories—the crucial, difficult first steps in every horse's journey to healing. They are not easy to read, but they are powerful reminders of why our sanctuary exists.</p>
                </div>
            </ContentSection>

            {stories.map((story, index) => (
                <StorySection key={story.title} story={story} index={index} {...props} />
            ))}

            <section className="py-20 bg-green-700">
                <div className="container mx-auto px-6 text-center text-white">
                    <PawIcon className="w-10 h-10 text-white mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Be Part of the Next Success Story</h2>
                    <p className="max-w-3xl mx-auto text-lg text-green-100 mb-8">
                        Your support makes these transformations possible. By donating, sponsoring, or volunteering, you help us give more horses the future they deserve.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CtaButton href="/horses#adoption" className="bg-green-500 hover:bg-green-400 text-white">Adopt a Horse</CtaButton>
                        <CtaButton href="/horses#sponsor" className="bg-green-600 hover:bg-green-500 text-white">Sponsor a Horse</CtaButton>
                        <CtaButton href="/donate" className="bg-white text-green-700 hover:bg-green-50">Donate Now</CtaButton>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HorseSuccessStoriesPage;
