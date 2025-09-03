import { AdoptableDog } from '../types.ts';

export const sampleDogs: AdoptableDog[] = [
  {
    id: 'alex',
    name: 'Alex',
    status: 'Available',
    petInfo: {
      age: 'Young Adult',
      breed: 'Crossbreed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'An active home with space to run and time for adventure',
    story: {
      title: 'His Story',
      text: 'Alex came to us full of life but without direction. Young and eager to connect, he was searching for guidance and a safe space to thrive. With time, structure, and trust, he’s blossomed into a confident and affectionate companion.',
    },
    personality: {
      title: 'Personality',
      text: 'Alex is spirited, smart, and full of energy. He loves to explore and thrives in environments where he can engage both mind and body. Whether it’s learning new tricks, playing fetch, or going on long walks, Alex gives his all. He also has a sweet side, often leaning in for cuddles once he’s had his fill of fun.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Playful & Energetic: A fantastic buddy for active people or families',
        'Quick Learner: He enjoys training and thrives with mental stimulation',
        'Loyal & Affectionate: Builds strong bonds and loves deeply',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'If you’re looking for a dog who’s always ready to accompany you on life’s adventures, Alex is your guy. His zest for life is contagious, and his loving nature will make you feel like the centre of his world.',
    },
    media: {
      mainPhotoKey: 'alex_main',
      storyPhotoKey: 'alex_main',
      galleryKeys: ['https://i.ibb.co/XZHt3smV/Alex-posing-looking-brave-07-2025-1.jpg'],
      videoKey: 'alex_video',
    },
  },
  {
    id: 'amber',
    name: 'Amber',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'No',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Mature quiet home',
    story: {
      title: 'Her Story',
      text: 'Amber came from another organization. She arrived frightened and unsure, but she’s made incredible progress in a calm and patient environment.',
    },
    personality: {
      title: 'Personality',
      text: 'Amber is shy and easily startled by sudden movements, but she’s come a long way. With consistent, gentle human interaction, she continues to grow in confidence. She now understands grooming and even enjoys it. Her favorite moments are slow, calm walks where she can take in her surroundings.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Resilient: She’s made big strides despite a difficult start.',
        'Gentle Soul: She thrives in peace and calm.',
        'Learning to Trust: Building positive associations through patient interaction.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Once Amber lets you into her world, you’ll see a sweet, loving dog who just wants to feel safe and cherished. Her quiet loyalty is truly special.',
    },
    media: {
      mainPhotoKey: 'amber_main',
      storyPhotoKey: 'amber_story',
      galleryKeys: [],
      videoKey: 'amber_video',
    },
  },
  {
    id: 'bagheera',
    name: 'Bagheera',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Mature',
      breed: 'German Shepherd Cross',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The wise and gentle explorer. Curious, loyal and quietly affectionate.',
    story: {
      title: 'Her Story',
      text: 'Bagheera is a mature and elegant German Shepherd cross with a beautiful coat and expressive eyes. With a soft M-shaped tan face and expressive eyes, she carries herself with quiet confidence and grace. Though she can be shy at first, Bagheera quickly warms up to those who earn her trust. She loves going on walks, exploring the outdoors and enjoying peaceful moments in the sunshine. Affectionate and friendly once she’s comfortable, Bagheera makes a loyal and loving friend.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Bagheera is one of the sanctuary’s quieter hearts – thoughtful, observant and deeply loving. While she is not up for adoption, she lives a full life at The Gem Project Sanctuary with daily enrichment, outdoor walks and gentle human contact. She is available for sponsorship or Hands-On Care. If you enjoy bonding at a deeper, more patient pace, Bagheera is the perfect dog to share quiet moments with.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Curious Soul: Loves to explore her surroundings',
        'Gentle Demeanour: Shy at first, but deeply loyal',
        'Affectionate: Enjoys companionship and closeness once she knows you',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Bagheera is a soul who gives her heart slowly – but fully. She’s gentle, dignified and incredibly endearing. Once you know her, you’ll never forget her.',
    },
    media: {
      mainPhotoKey: 'bagheera_main',
      storyPhotoKey: 'bagheera_main',
      galleryKeys: [],
      videoKey: 'bagheera_video',
    },
  },
  {
    id: 'benji',
    name: 'Benji',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Pitbull Cross',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The affectionate charmer. Loyal, social and full of heart.',
    story: {
      title: 'A Loyal Friend',
      text: 'Benji is a lovable adult Pitbull cross with a unique coat and a warm, affectionate personality. His striking mix of black, white and brown fur makes him stand out – but it’s his kind heart and gentle soul that make him unforgettable. He’s a social butterfly who adores being around people and thrives on connection and attention. Whether it’s a quiet snuggle or a joyful trot across the yard, Benji is always happy to be part of the moment.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Benji is one of the sanctuary’s most people-loving companions. He spends his days enjoying walks, lounging in the sunshine and welcoming visitors with his warm, friendly energy. While Benji isn’t up for adoption, he is available for sponsorship or Hands-On Care. If you’re looking for a way to connect with a gentle, soulful dog, Benji is ready to meet you halfway.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Affectionate – Always ready for snuggles',
        'People-Oriented – Loves being part of the pack',
        'Unique Look – A striking blend of markings',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Benji has a big heart and an even bigger capacity for love. He’s gentle, social and always up for a cuddle. Once he knows you, he’ll never forget you.',
    },
    media: {
      mainPhotoKey: 'benji_main',
      storyPhotoKey: 'benji_main',
      galleryKeys: ['https://i.ibb.co/r2q5DRbj/15-07-2025-Benji-sideways-face.jpg', 'https://i.ibb.co/9mg99GPT/15-07-2025-Benji-walking-on-leash.jpg'],
      videoKey: 'benji_video',
    },
  },
  {
    id: 'blake',
    name: 'Blake',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Cross Saluki',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'The sunshine chaser of the sanctuary. Energetic, friendly and full of charm.',
    story: {
      title: 'The Energetic Companion',
      text: 'Meet Blake, a vibrant Cross Saluki with a striking coat of tan, white and black. With a black patch on his tail and a splash of white on his muzzle, Blake turns heads wherever he goes. He’s a social butterfly who loves making new friends – both human and animal. Blake thrives on exploring the world around him, from chasing birds and sniffing new trails to soaking up the sun. While he’s always on the move, he has a big heart and a soft spot for cuddles.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Blake is one of our young adventurers living life to the fullest at The Gem Project Sanctuary. Though he is not up for adoption, he receives all the care, stimulation and love he needs to thrive. He is available for sponsorship or Hands-On Care. If you enjoy energy, enthusiasm and sweet companionship, Blake would love to connect with you.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Always On the Go: Loves to run, explore and keep busy',
        'Friendly and Playful: Gets along with dogs and people alike',
        'Affectionate Side: Enjoys quiet moments and soft snuggles too'
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Blake brings joy, motion and warmth to every moment. He lives big, loves big and is always up for an adventure followed by a cuddle. He’s a lovable spark in the sanctuary.',
    },
    media: {
      mainPhotoKey: 'blake_main',
      storyPhotoKey: 'blake_main',
      galleryKeys: ['https://i.ibb.co/YTYsfZnC/15-07-2025-Blake-standing-in-the-field1.jpg', 'https://i.ibb.co/dwn9HKBs/15-07-2025-Blake-standing-in-the-field.jpg', 'https://i.ibb.co/0RB9MpwM/15-07-2025-Blake-standing-in-field-and-licking-his-lips.jpg', 'https://i.ibb.co/D2TK1tC/15-07-2025-Blake-sitting-infornt-of-handler.jpg', 'https://i.ibb.co/ZRhDVMSn/15-07-2025-Blake-walking-in-the-field.jpg'],
      videoKey: 'blake_video',
    },
  },
  {
    id: 'bobby',
    name: 'Bobby',
    status: 'Forever Dogs',
    petInfo: {
      age: 'Young Adult',
      breed: 'Shepherd Mix',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'An active family who loves to play and go on adventures.',
    story: {
      title: 'His Story',
      text: 'Bobi was found wandering alone, a little lost but full of hope. From the moment he arrived, his friendly and trusting nature shone through. He is looking for a family to share his boundless love and playful energy with.',
    },
    personality: {
      title: 'Personality',
      text: 'Bobi is a classic happy-go-lucky dog. He lives for games of fetch, long walks where he can sniff everything, and loves meeting new people and dogs. He is incredibly smart and picks up new tricks quickly, especially when treats are involved! After a good play session, he loves to curl up for a good cuddle.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Incredibly friendly and social with everyone.',
        'Loves to learn and is very food-motivated.',
        'A perfect mix of playful energy and cuddly affection.'
        ],
    },
    loveReason: {
      title: "Why You’ll Love Him",
      text: "Bobi's joyful spirit is absolutely contagious. He'll be your loyal co-pilot on hikes, your enthusiastic playmate in the yard, and your warm companion on lazy afternoons. If you're looking for a dog to fill your home with laughter and love, Bobi is your boy."
    },
    media: {
      mainPhotoKey: 'bobby_main',
      storyPhotoKey: 'bobby_main',
      galleryKeys: [],
      videoKey: 'bobby_video',
    },
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    status: 'Available',
    petInfo: {
      age: 'Young Adult',
      breed: 'X Breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active family with people home daily',
    story: {
      title: 'Her Story',
      text: 'Brooklyn has spent some time in the shelter system, and though her past is a blur, her future is filled with possibility. She’s looking for a place where she can feel safe, loved, and supported as she grows into her best self.',
    },
    personality: {
      title: 'Personality',
      text: 'Brooklyn is full of playfulness and curiosity. She loves to run, explore, and sniff out the world’s mysteries. While her energy is high, she also knows how to soak up love and affection. Loud noises can make her nervous, so she needs a calm space and gentle reassurance from her humans.\n\nShe’s eager to connect and craves physical closeness — cuddles, rubs, and lots of positive attention help her feel grounded.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Energetic Adventurer: Loves the outdoors, sniffing trails, and new experiences.',
        'Affectionate Soul: Needs a loving family who can provide structure and snuggles.',
        'Sensitive Heart: Can be overwhelmed but responds beautifully to gentle care.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'With her loyal eyes and spirited energy, Brooklyn is ready to form deep bonds and bring laughter into your home. If you’re looking for a pup who’s both playful and tender-hearted, Brooklyn is waiting.',
    },
    media: {
      mainPhotoKey: 'brooklyn_main',
      storyPhotoKey: 'brooklyn_story',
      galleryKeys: ['https://i.ibb.co/TxgYskks', 'https://i.ibb.co/wr6ZqJJ7', 'https://i.ibb.co/YBgdjRr0', 'https://i.ibb.co/5gWbYzK1', 'https://i.ibb.co/Z636TJyT', 'https://i.ibb.co/ZzG08zMS', 'https://i.ibb.co/7JzBqs8q', 'https://i.ibb.co/tw0ks1c0', 'https://i.ibb.co/S7Pz6L8L', 'https://i.ibb.co/SDJns2L2', 'https://i.ibb.co/j9y8vwrY', 'https://i.ibb.co/wNw91Sxw', 'https://i.ibb.co/j9Np4RKR', 'https://i.ibb.co/LzxcV93G', 'https://i.ibb.co/933hJB5T', 'https://i.ibb.co/hF52D9js', 'https://i.ibb.co/xK6h6mnC', 'https://i.ibb.co/5xSJFMPS'],
      videoKey: 'brooklyn_video',
    },
  },
  {
    id: 'buddy',
    name: 'Buddy',
    status: 'Forever Sanctuary', // Changed
    petInfo: {
      age: 'Adult',
      breed: 'X Breed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'No',
    },
    idealHome: 'A playful water-lover who has found his forever splash zone with us.',
    story: {
      title: 'His Story',
      text: 'Buddy was found chasing farm animals, not out of malice, but from a lack of guidance. His high energy and spirited nature made finding the right home challenging, so he found his permanent place with us at the sanctuary.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Buddy is our resident water enthusiast! He lights up when the hose is on and adores splashing in puddles. His boundless energy is channeled into positive play and long runs in our secure fields. While not up for adoption, Buddy is available for sponsorship and Hands-On Care, perfect for anyone who loves a playful, joyful companion.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Water Enthusiast: Absolutely adores water play.',
        'Full of Joy: His vibrant energy is infectious.',
        'Thrives with Space: Loves having room to run and play safely.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Buddy’s zest for life is a daily reminder to find joy in the simple things. Supporting him means supporting a life of endless, happy splashes.',
    },
    media: {
      mainPhotoKey: 'buddy_main',
      storyPhotoKey: 'buddy_main',
      galleryKeys: [],
      videoKey: 'buddy_video',
    },
  },
  {
    id: 'casper',
    name: 'Casper',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Cross breed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: "The sanctuary's resident cloud. Playful, fluffy and endlessly cheerful.",
    story: {
      title: 'His Story',
      text: "Casper is a big, fluffy bundle of joy with a coat as white as snow and a smile that never fades. He's a friendly giant who loves people, playtime, and getting his magnificent coat brushed. He has a gentle and playful nature that makes him a favourite among volunteers.",
    },
    personality: {
      title: 'Personality',
      text: "Casper is shy and avoids fast movements, but warms up once comfortable. He's a gentle giant who loves people, playtime, and getting his magnificent coat brushed. He has a gentle and playful nature that makes him a favourite among volunteers.",
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Incredibly friendly and social',
        'Loves being groomed and pampered',
        'A big, fluffy teddy bear',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: "Casper's happy-go-lucky attitude is infectious. He's a walking, barking cloud of pure happiness who reminds you to find joy in the little things.",
    },
    media: {
      mainPhotoKey: 'casper_main',
      storyPhotoKey: 'casper_main',
      galleryKeys: [],
      videoKey: 'casper_video',
    },
  },
  {
    id: 'chandra',
    name: 'Chandra',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'Cross Jack Russel',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Unknown',
      dogs: 'No',
      cats: 'Unknown',
    },
    idealHome: 'Experienced couple home most of the day',
    story: {
      title: 'Her Story',
      text: 'Chandra came to us from another organization. With her bold spirit and striking features, she made an impression immediately.',
    },
    personality: {
      title: 'Personality',
      text: 'Chandra is a spirited, self-assured lady with boundless energy. She’s confident, assertive, and always makes her feelings known. While it takes her some time to warm up to new people, once she does, she becomes a loyal and affectionate companion. She thrives on structure, outdoor adventures, and plenty of mental stimulation.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Distinctive Looks: White, black, and brown coat with tan eyebrows and a white face stripe.',
        'Independent & Smart: Knows what she wants, benefits from experienced leadership.',
        'Energetic Explorer: Loves running, playing, and discovering new spaces.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Chandra is full of life, character, and charm. For someone seeking a smart, energetic, and slightly sassy sidekick, she’s the perfect match.',
    },
    media: {
      mainPhotoKey: 'chandra_main',
      storyPhotoKey: 'chandra_main',
      galleryKeys: ['https://i.ibb.co/456GVFf/Chandra-sitting-on-dog-bed-with-toys-looking-up-with-open-mount-and-looks-like-she-is-smiling-07-202.jpg', 'https://i.ibb.co/4y6HtPn/Chandra-looking-at-the-camera-and-it-looks-like-she-is-smiling-07-2025.jpg', 'https://i.ibb.co/233DZNnN/15-07-2025-Chandra-sitting-on-bed-and-seem-to-be-smiling.jpg'],
      videoKey: 'chandra_video',
    },
  },
  {
    id: 'chloe',
    name: 'Chloe',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Unknown',
      dogs: 'No',
      cats: 'Unknown',
    },
    idealHome: 'Chloe needs a secure, structured environment with an active couple who can be present throughout the day. She may not do well with other animals but will shine as your one-and-only.',
    story: {
      title: 'Her Story',
      text: 'Chloe came from another organization. Since her arrival, she’s brought loads of energy and character to the sanctuary.',
    },
    personality: {
      title: 'Personality',
      text: 'Chloe is a boisterous, playful girl who loves human interaction. She can be a little vocal around unfamiliar animals but is joyful and confident with people she knows. She thrives on attention, enjoys splashing in water, and loves her off-leash walks. She does well with other animals, is sociable, and does well with other animals.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Big Personality: She lights up every room she enters.',
        'Energetic: Perfect for an active home.',
        'Affectionate: Loyal and loves to be around people.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Chloe is confident, silly, and full of love. If you’re looking for a dog who will keep you active, entertained, and always in good company—Chloe is your girl.',
    },
    media: {
      mainPhotoKey: 'chloe_main',
      storyPhotoKey: 'chloe_story',
      galleryKeys: [],
      videoKey: 'chloe_video',
    },
  },
  {
    id: 'cooper',
    name: 'Cooper',
    status: 'Forever Sanctuary Dogs',
    petInfo: {
      age: 'Puppy',
      breed: 'X breed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Outgoing family with patience',
    story: {
      title: 'His Story',
      text: 'Cooper came from another organization and has quickly made his presence known with his joyful and adventurous personality. He’s a curious, confident pup who’s eager to bond with a forever family.',
    },
    personality: {
      title: 'Personality',
      text: 'Cooper is an adventurous dog who loves playing with other dogs and learning new things from his humans. He’s still a young pup, so he’s got energy to burn and lots of enthusiasm for life. With basic obedience training already underway, Cooper is house trained and eager to learn.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Playful and Curious: He’s always ready to explore the world around him.',
        'Social Pup: Loves being with people and other dogs.',
        'Trainable: Has started obedience training and is house trained.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Cooper is full of life and love. Whether he’s running around in the yard, learning new tricks, or snuggling up after playtime, he’s sure to brighten your days. If you’re looking for a loyal and loving companion who’s ready for life’s adventures, Cooper is your boy.',
    },
    media: {
      mainPhotoKey: 'cooper_main',
      storyPhotoKey: 'cooper_story',
      galleryKeys: ['cooper_gallery_1', 'cooper_gallery_2', 'cooper_gallery_3'],
      videoKey: 'cooper_video',
    },
  },
  {
    id: 'daisy',
    name: 'Daisy',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X Breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active family with kids',
    story: {
      title: 'Her Story',
      text: 'Daisy’s early life is a mystery, but what matters now is her future. She’s safe at the sanctuary while she waits for a forever home where she can feel secure, cherished, and free to be herself.',
    },
    personality: {
      title: 'Personality',
      text: 'Daisy is an energetic, fun-loving girl with a zest for life. She’s a social butterfly who adores water, tasty treats, and play sessions with her doggy friends. Whether it’s zooming in the sunshine or exploring new scents on her daily walks, Daisy throws herself into every moment with enthusiasm.\n\nShe sometimes gets a bit carried away chasing horses (they look like so much fun!), but her heart is pure gold. Her disability doesn’t hold her back Daisy embraces life with joy and bravery.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Full of Life: Energetic, curious, and always up for adventure.',
        'Loves to Play: Especially enjoys water games and socialising with other dogs.',
        'Resilient Spirit: Her disability doesn’t stop her from living each day to the fullest.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Daisy will inspire you with her joy, her courage, and her endless enthusiasm for life. She’s the perfect companion for a family looking to laugh, explore, and love deeply.',
    },
    media: {
      mainPhotoKey: 'daisy_main',
      storyPhotoKey: 'daisy_story',
      galleryKeys: ['https://i.ibb.co/jkTfBPLt/Daisy-laying-on-her-back-and-getting-love-from-her-handler-looks-like-a-belly-scratch-07-2025.jpg', 'https://i.ibb.co/tPxZY8xY/Daisy-laying-on-dog-bed-and-chowing-a-toy-07-2025.jpg', 'https://i.ibb.co/WL0HmXp/Daisy-laying-on-a-dog-bed-with-toys-with-a-toy-in-her-mouth-07-2025.jpg', 'https://i.ibb.co/0yy8XKXX/Daisy-laying-on-a-dog-bed-and-looking-at-the-camera-07-2025.jpg', 'https://i.ibb.co/b57HpZbp/Daisy-being-groomed-by-a-handler-07-2025.jpg'],
      videoKey: 'daisy_video',
    },
  },
  {
    id: 'honey',
    name: 'Honey',
    status: 'Available',
    petInfo: {
      age: 'Mature',
      breed: 'X breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Quiet, elderly home',
    story: {
      title: 'Her Story',
      text: 'Honey came to us after spending time in a welfare environment. Much of her early life is a mystery, but what we do know is that she’s ready to write a new chapter one filled with love, comfort, and connection.',
    },
    personality: {
      title: 'Personality',
      text: 'Honey is a gentle, affectionate soul. As she’s matured, she’s grown to adore calm cuddles and quiet companionship. On bright days, she’ll nuzzle in close and offer sweet affection. On restful days, she’s happy to curl up in her favourite spot and simply be near her person. There’s a softness to her a quiet understanding that makes her a comforting presence to have around. With every passing day, she blossoms more.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Loving & Calm: She thrives in peaceful environments and bonds deeply with her people.',
        'Emotionally Attuned: Honey is sensitive and intuitive — she knows when to lean in for comfort or just be close.',
        'Resilient & Gentle: Despite her past, she greets each new day with hope and heart.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Honey doesn’t demand attention — she gives it. She doesn’t ask for much — but she gives you everything. If you’re looking for a soulful, steady companion to share life’s simple joys, Honey might just be your perfect match.',
    },
    media: {
      mainPhotoKey: 'honey_main',
      storyPhotoKey: 'honey_main',
      galleryKeys: ['https://i.ibb.co/Ps47W0rV/15-07-2025-Honey-running-in-the-field-with-slight-head-tilt.jpg', 'https://i.ibb.co/k6G2MCNN/15-07-2025-Honey-running-in-field.jpg', 'https://i.ibb.co/Ndp4Vzn5/Honey-looking-past-the-camera-with-a-head-tilt-mouth-open-and-tongue-out-07-2025.jpg', 'https://i.ibb.co/4ZJmBQ1G/Honey-running-in-the-field-towards-the-camera-tongue-hanging-out-07-2025.jpg', 'https://i.ibb.co/mFNCMZTr/Honey-running-towards-the-camera-with-mouth-open-and-tongue-out-07-2025.jpg', 'https://i.ibb.co/wZ2ydVdr/Honey-running-in-the-field-towards-camera-but-captured-from-a-distance-07-2025.jpg'],
      videoKey: 'honey_video',
    },
  },
  {
    id: 'jerry',
    name: 'Jerry',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
      color: 'Beige and Black',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The playful spirit of the sanctuary. Curious, cheerful and always ready to explore.',
    story: {
      title: 'The Curious Adventurer',
      text: 'This charming guy is a bundle of energy and curiosity. With his distinctive tan, black and white markings, Jerry is a handsome boy who loves the outdoors and lives to explore. He’s a bit of a digger and is often found nose-first in a mole hole, happily doing his thing. But Jerry isn’t all about work and no play – he also enjoys running off-leash, feeling the wind in his fur and the sun on his back. He’s a loyal and loving friend who’s always up for the next adventure.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Jerry is one of our forever boys here at The Gem Project Sanctuary. While not up for adoption, he lives a full and joyful life surrounded by people who understand and appreciate his playful quirks. He is available for sponsorship or Hands-On Care. If you enjoy the company of curious, nature-loving dogs, Jerry would be thrilled to have your support.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Curious by Nature: Always investigating the world around him',
        'Adventurous Spirit: Loves to roam, run and sniff new trails',
        'Energetic Companion: Full of heart and outdoor enthusiasm',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Jerry brings adventure and fun into every day. He has the heart of an explorer and the loyalty of a best friend. Life is never boring with Jerry by your side.',
    },
    media: {
      mainPhotoKey: 'jerry_main', // TODO: Swap image
      storyPhotoKey: 'jerry_main',
      galleryKeys: [],
      videoKey: 'jerry_video',
    },
  },
  {
    id: 'jesse',
    name: 'Jesse',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The explorer of the sanctuary. Earthy, adventurous and soft at heart.',
    story: {
      title: 'The Ultimate Outdoor Enthusiast',
      text: 'Meet Jesse, the adventurous guy who lives for the great outdoors. This charming fellow loves nothing more than digging for moles, lounging in the sun and exploring every nook and cranny of his surroundings. When he’s not getting his paws dirty, Jesse is all about snuggling up for gentle cuddles and head rubs. He might be a bit of a thrill-seeker, but he’s also a total softie at heart.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Jesse is one of our treasured Forever Sanctuary Dogs. He is not up for adoption, but has found his perfect life at The Gem Project Sanctuary, where he enjoys freedom, friendship and the chance to explore to his heart’s content. He is available for sponsorship or Hands-On Care. For those who feel a pull toward the wild-hearted yet gentle souls, Jesse is a perfect match.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Loves Nature: A fan of sunshine, fresh air and discovery',
        'Big Softie: Gentle and affectionate when it’s time to relax',
        'Unique Charm: Striking coat and a warm, earthy presence',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Jesse brings balance wherever he goes. He’s full of curiosity and joy, but also knows when to slow down and share a quiet moment. With Jesse, every day feels like an adventure worth taking.',
    },
    media: {
      mainPhotoKey: 'jesse_main', // TODO: Swap image
      storyPhotoKey: 'jesse_main',
      galleryKeys: [],
      videoKey: 'jesse_video',
    },
  },
  {
    id: 'lady',
    name: 'Lady',
    status: 'Available',
    petInfo: {
      age: 'Young Adult',
      breed: 'X Breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active, firm family with teenagers',
    story: {
      title: 'Her Story',
      text: 'Lady arrived at the shelter with no family to call her own. Despite her uncertain beginnings, she remains hopeful and full of heart, believing that somewhere out there is a forever home meant just for her.',
    },
    personality: {
      title: 'Personality',
      text: 'Lady is a bundle of playful energy and affection. She thrives on adventure, playtime, and human connection. She loves running freely in secure open areas where she can stretch her legs and zoom about with joy. She’s currently working on recall training so she can safely enjoy more outings off-leash.\n\nAt home, she transforms into a champion cuddler. Once the fun winds down, Lady’s favourite place is beside her person curled up on the couch, soaking up snuggles and gentle praise.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Playful Spirit: Always ready for an adventure or a game of fetch.',
        'Affectionate Soul: Loves close connection with her trusted humans.',
        'Eager Learner: Responds well to training and loves to please.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Lady will fill your days with laughter, warmth, and devotion. Her bright personality, loving nature, and joyful enthusiasm make her a delightful addition to a family ready to welcome a loyal and energetic companion.',
    },
    media: {
      mainPhotoKey: 'lady_main',
      storyPhotoKey: 'lady_main',
      galleryKeys: ['https://i.ibb.co/7tQG6F6G/Lady-running-in-the-field-with-a-ball-in-her-mouth-07-2025.jpg', 'https://i.ibb.co/JjNgyHJn/Lady-posing-sitting-upright-looking-at-the-camera-with-an-open-mouth-and-tongue-hanging-out-from-the.jpg', 'https://i.ibb.co/Mk652f2q/Lady-laying-on-the-dog-bed-with-toys-and-looking-at-the-camera-with-an-open-mouth-and-tongue-out-07.jpg', 'https://i.ibb.co/ymThzXKL/Lady-in-training-with-a-handler-where-they-are-walking-over-the-tilting-bridge-07-2025.jpg'],
      videoKey: 'lady_video',
    },
  },
  {
    id: 'lee',
    name: 'Lee',
    status: 'Available',
    petInfo: {
      age: 'Puppy',
      breed: 'X breed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active firm family',
    story: {
      title: 'His Story',
      text: 'Lee came from another organization and has quickly shown his confident and playful side. He’s eager to explore, learn, and become part of a loving home.',
    },
    personality: {
      title: 'Personality',
      text: 'Lee is a confident puppy who loves to chase balls, play with friends, and enjoy off-leash walks. He’s curious, energetic, and always ready for an adventure. His lively spirit and eagerness to engage make him a joy to be around, especially for active families who love the outdoors.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Confident and Active: He’s not shy about showing his spirit.',
        'Outdoor Explorer: Loves walking off-leash and investigating his environment.',
        'Trainable: Knows basic obedience and is ready to learn more.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Lee is an energetic, loving pup who brings joy wherever he goes. He’s confident, smart, and ready to be someone’s best adventure buddy.',
    },
    media: {
      mainPhotoKey: 'lee_gallery_1',
      storyPhotoKey: 'lee_gallery_1',
      galleryKeys: ['lee_gallery_1', 'lee_gallery_2', 'lee_gallery_3'], // TODO: Add missing photos
      videoKey: 'lee_video',
    },
  },
  {
    id: 'lexi',
    name: 'Lexi',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Cross Collie',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The golden girl of the sanctuary. Gentle, playful and always shining bright.',
    story: {
      title: 'Sunshine in a Fluffy Coat',
      text: 'This energetic and lovable cross-collie is always up for an adventure. Lexi lives for chasing birds, splashing in water and exploring wide-open spaces. With her striking multicolour coat and bright yellow eyes, Lexi lights up the world around her. She’s a gentle soul with a heart of gold and a playful edge. Lexi loves nothing more than snuggling up with her favourite humans after a day of fun.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Lexi is one of our much-loved Forever Sanctuary Dogs. While she is not up for adoption, she has found her place here at The Gem Project Sanctuary where she enjoys freedom, safety and loving companionship. She is available for sponsorship or Hands-On Care. Whether you’re drawn to her beauty, her sparkle or her gentle nature, Lexi would be honoured to share her journey with you.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Golden Personality: Warm, loyal and affectionate',
        'Adventurous Spirit: Loves new places, play and freedom',
        'Beautiful Inside and Out: Striking coat and soulful energy',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Lexi is joy in motion. Sweet, soft-hearted and full of life, she brings warmth wherever she goes. If you’re looking for sunshine in dog form, Lexi is the one.',
    },
    media: {
      mainPhotoKey: 'lexi_main',
      storyPhotoKey: 'lexi_main',
      galleryKeys: [],
      videoKey: 'lexi_video',
    },
  },
  {
    id: 'maple',
    name: 'Maple',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'A lively, goofy, and affectionate goofball who loves playtime and belly rubs.',
    story: {
      title: 'Her Story',
      text: "This lively crossbreed is a bundle of energy and love. With her striking black and tan coat and adorable tan face, Maple shines bright. She's a goofball who loves playtime, exploring the outdoors, and snuggling up for belly rubs.",
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'As a forever resident at The Gem Project Sanctuary, Maple brings joy to our home and everyone she meets. She is available for sponsorship or our Hands-On Care program.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Full of energy and love',
        'A playful goofball who loves the outdoors',
        'Always ready for cuddles and belly rubs',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: "Maple's joyful spirit is infectious. Her playful antics and affectionate nature will bring endless smiles and warmth.",
    },
    media: {
      mainPhotoKey: 'maple_main',
      storyPhotoKey: 'maple_main',
      galleryKeys: [],
      videoKey: 'maple_video',
    },
  },
  {
    id: 'max',
    name: 'Max',
    status: 'Available',
    petInfo: {
      age: 'Young Adult',
      breed: 'X Breed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Unknown',
      dogs: 'No',
      cats: 'No',
    },
    idealHome: 'Active couple',
    story: {
      title: 'His Story',
      text: 'Max and his sister Ruth were rescued from a foster home that couldn’t be their forever place. Their carers tried their best, but Max still longs for the stability and love of a permanent family.',
    },
    personality: {
      title: 'Personality',
      text: 'Max is full of curiosity and energy. He loves being outdoors, especially running and exploring in open spaces. He is house-trained and knows his basic obedience commands. Max is independent but thrives on attention and affection from trusted humans.\n\nHe may need a bit of structure as he continues to adjust to new environments, but his heart is open and his enthusiasm contagious.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Adventurous: Loves walks, runs, and exploring the world.',
        'Smart & Trained: Knows basic commands and adapts quickly.',
        'Joyful Energy: Brings life and fun wherever she goes.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Max is the kind of dog who reminds you to embrace the present moment. His enthusiasm is heartwarming, and his presence will add joy and purpose to your life.',
    },
    media: {
      mainPhotoKey: 'max_main',
      storyPhotoKey: 'max_story',
      galleryKeys: [],
      videoKey: 'max_video',
    },
  },
  {
    id: 'misty',
    name: 'Misty',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Terrier Cross',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'No',
    },
    idealHome: 'The little adventurer with a big heart. Spirited, smart and full of personality.',
    story: {
      title: 'Her Story',
      text: 'Misty is a spirited terrier mix with a twinkle in her eye and an endlessly curious mind. She may be small, but she has a huge personality. She loves exploring, sniffing out new trails, and keeping a watchful eye on everything happening at the sanctuary.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: "Misty is a beloved forever resident who keeps everyone on their toes with her playful antics and clever mind. She isn't looking for a new home, but she is looking for supporters to join her on her journey through our sponsorship and Hands-On Care programs.",
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Brave and curious explorer',
        'Very intelligent and loves puzzles',
        'Forms strong, loyal bonds',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Misty is proof that the best things come in small packages. Her feisty, fun-loving spirit will capture your heart and keep you smiling.',
    },
    media: {
      mainPhotoKey: 'misty_main',
      storyPhotoKey: 'misty_main',
      galleryKeys: [], // TODO: Insert images
      videoKey: 'misty_video',
    },
  },
  {
    id: 'fifi',
    name: 'Fifi',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active, loving family where someone is often home',
    story: {
      title: 'Her Story',
      text: 'Fifi grew up in the care of a loving welfare organisation. She’s had safety, food, and kind hands but she’s still searching for what every dog dreams of: a true forever home where she belongs.',
    },
    personality: {
      title: 'Personality',
      text: 'Fifi is a bubbly, affectionate girl with a huge heart. She thrives around people and lights up the moment someone gives her attention. She’s sensitive and bonds quickly, which means she may cry when left alone, not out of mischief, but because she truly loves your company. She’s happiest when she’s close to her humans, enjoying cuddles, playing in the sunshine, or simply knowing you’re nearby.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Deeply Loyal: Fifi forms strong, loving bonds and wants nothing more than to be your shadow.',
        'Joyful Energy: She brings happiness and enthusiasm to every moment.',
        'Eager to Love: She just wants to be loved and to love back tenfold.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Fifi will be your most devoted friend. Her wagging tail, adoring eyes, and joyful spirit will fill your home with warmth. If you’ve ever wanted a dog who makes you feel like the most important person in the world — you’ve just found her.',
    },
    media: {
      mainPhotoKey: 'fifi_main',
      storyPhotoKey: 'fifi_main',
      galleryKeys: [], // TODO: Add more photos
      videoKey: 'fifi_video',
    },
  },
  {
    id: 'rexi',
    name: 'Rexi',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Cross Collie',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The wild spirit of the sanctuary. Bold, playful and full of life.',
    story: {
      title: 'The Energetic Explorer',
      text: 'Meet Rexi, a dashing cross-collie with a thirst for adventure. This young adult gentleman has contagious energy and is always eager to explore new horizons, chase birds and splash in water. With his striking white, tan, brown and black coat, and his bright yellow eyes, Rexi is a stunning sight to behold. As a dominant dog with a playful streak, he loves to have fun and get attention from his favourite humans.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Rexi is one of our spirited Forever Sanctuary Dogs. Though he is not up for adoption, he has a full and active life here at The Gem Project Sanctuary. From open space zoomies to water play, Rexi makes the most of every day. He is available for sponsorship or Hands-On Care. If you enjoy watching a dog live life with energy and joy, Rexi would love your support.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Adventurous Nature: Always on the lookout for excitement and fun',
        'Stunning Looks: Eye-catching coat and glowing yellow eyes',
        'Playful Personality: Loves to engage and entertain',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Rexi brings fire, fun and flair to the sanctuary. He’s a dog who makes things happen and keeps everyone smiling. With Rexi around, there is never a dull moment.',
    },
    media: {
      mainPhotoKey: 'rexi_main',
      storyPhotoKey: 'rexi_main',
      galleryKeys: [],
      videoKey: 'rexi_video',
    },
  },
  {
    id: 'ruth',
    name: 'Ruth',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X Breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Unknown',
      dogs: 'No',
      cats: 'No',
    },
    idealHome: 'Active family home',
    story: {
      title: 'Her Story',
      text: 'Ruth and her brother were rescued from a foster home that couldn’t provide the forever care they needed. Though her foster family tried their best, Ruth’s journey to a permanent home is still ongoing and she’s ready.',
    },
    personality: {
      title: 'Personality',
      text: 'Ruth is playful and athletic. She loves running and going on walks in safe enclosed areas. She’s got a strong bond with her brother, and when he’s around, she can leap high with joy. Ruth is fully house-trained, smart, and quick to pick up on new routines.\n\nWhile she can be easily excited, she’s learning how to manage that with structure and consistency. She’s best suited to a home with plenty of stimulation and positive guidance.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Energetic and Fun: Always up for playtime and new adventures.',
        'Trainable: Ruth is eager to learn and thrives with direction.',
        'Resilient: Adjusts quickly and is always up for a challenge.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Ruth is loyal, lively, and full of joy. She’ll keep you on your toes and reward you with loyalty, cuddles, and her signature zoomies.',
    },
    media: {
      mainPhotoKey: 'ruth_main',
      storyPhotoKey: 'ruth_main',
      galleryKeys: [], // TODO: Add missing photos
      videoKey: 'ruth_video',
    },
  },
  {
    id: 'simba',
    name: 'Simba',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Mature',
      breed: 'Border Collie Cross',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The Gentle King of our sanctuary. Wise, calm and full of quiet strength.',
    story: {
      title: 'The Gentle King',
      text: 'Simba is a regal and striking boy with a calm presence and a heart as soft as his thick black and white coat. His distinctive face markings and soulful eyes make him unforgettable to anyone who meets him. He’s a quiet observer who enjoys gentle companionship and a peaceful rhythm to his day. Simba is independent but deeply affectionate in his own time. He’s content to sit beside you while the world goes by.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Simba is one of our treasured Forever Sanctuary Dogs. While he is no longer available for adoption, he continues to live a full and happy life here at The Gem Project Sanctuary. He enjoys peaceful outdoor time in our open spaces, soaking in the sun, and receiving quiet cuddles from his caregivers. He would love a sponsor or Hands-On Care friend to walk beside him in spirit as he enjoys the life he truly deserves.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Gentle Soul: Calm and easygoing, he thrives in tranquil spaces.',
        'Loyal Friend: Forms deep bonds with those he trusts.',
        'Majestic Beauty: Striking looks and an even more beautiful heart.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'There’s something grounding about Simba. His peaceful energy and gentle nature make him a comforting companion, even from afar. Sponsoring Simba means supporting a dog who reminds us that strength can be soft and love doesn’t need to shout to be heard.',
    },
    media: {
      mainPhotoKey: 'simba_main',
      storyPhotoKey: 'simba_main',
      galleryKeys: ['https://i.ibb.co/8gVSRSJJ/Simba-Heartfelt-moment-between-Simba-and-Jody-as-they-gaze-at-eachother-07-2025.jpg', 'https://i.ibb.co/xKF3kGWR/15-07-2025-Simba-side-ways.jpg', 'https://i.ibb.co/kPmj3V1/15-07-2025-Simba-looking-at-camera.jpg'],
      videoKey: 'simba_video',
    },
  },
  {
    id: 'snoopy',
    name: 'Snoopy',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Active, outgoing family',
    story: {
      title: 'Her Story',
      text: 'Snoopy came from another organization. With her friendly nature and great energy, she quickly became a favorite among our team.',
    },
    personality: {
      title: 'Personality',
      text: 'Snoopy is adventurous, energetic, and full of spirit. She’s always ready to explore, whether it’s a long walk, a fun play session, or simply sniffing out new scents. Smart and eager to please, she knows her basic obedience, is fully house trained, and thrives in the great outdoors. She also gets along beautifully with other dogs, making her a joy to have around.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Wall-Climber: Snoopy can jump and climb, so she’ll need secure fencing.',
        'Dog-Social: Gets along wonderfully with other dogs.',
        'Well-Trained: Obedient and house-trained.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Snoopy is playful, smart, and loving. If you’re looking for a hiking buddy or a loyal, fun-loving friend, Snoopy is the one.',
    },
    media: {
      mainPhotoKey: 'snoopy_main',
      storyPhotoKey: 'snoopy_story',
      galleryKeys: ['snoopy_gallery_1'],
      videoKey: 'snoopy_video',
    },
  },
  {
    id: 'stacey',
    name: 'Stacey',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Pitbull',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'Our sweetheart in sunshine. Gentle, loving and full of quiet charm.',
    story: {
      title: 'The Lovable Lady',
      text: 'Stacey is a joyful and affectionate adult Pitbull who exudes charm and warmth. With her distinctive black and white coat and unique facial markings, she’s as striking in appearance as she is in personality. She’s a people-lover through and through and thrives on cuddles, head rubs and any opportunity to be close to her caregivers. Whether she’s lounging in the sun or going for a gentle stroll, Stacey’s favourite place is wherever you are.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Stacey is a beloved Forever Sanctuary resident at The Gem Project Sanctuary. She is not up for adoption, but is a permanent part of our sanctuary family. Her gentle, loving nature brings joy to all of us every day. She is available for sponsorship or Hands-On Care, and would be grateful for the support of someone who sees her beauty and offers continued care from afar.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Affectionate Soul: Loves people and always ready for a snuggle.',
        'Relaxed and Friendly: Calm and gentle in sanctuary life.',
        'Heart of Gold: Kind and easy-going with a huge heart.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Stacey has a heart as big as her smile. With her quiet charm and soft presence, she’s a sanctuary sweetheart who makes every day brighter for those around her.',
    },
    media: {
      mainPhotoKey: 'stacey_main', // TODO: Replace image and ensure fit
      storyPhotoKey: 'stacey_story',
      galleryKeys: [],
      videoKey: 'stacey_video',
    },
  },
  {
    id: 'whitney',
    name: 'Whitney',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'X Breed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'No',
    },
    idealHome: 'Quiet family “safe space”',
    story: {
      title: 'Her Story',
      text: 'Whitney comes with a heart full of hope and a past full of quiet battles. She spent time in a welfare environment, unsure of herself and her place in the world. What she remembers most is the journey to feel safe and she’s ready to find the loving home where she can finally rest and bloom.',
    },
    personality: {
      title: 'Personality',
      text: 'Whitney is a gentle, observant soul. With a shy and sweet nature, she blossoms in calm, understanding environments. She reveals her true self to those who earn her trust and thrives with a patient and kind family who can help her feel secure.\n\nShe enjoys her freedom on off-leash walks and loves a balance of affection and independence. Whitney prefers calm companionship over chaos and is happiest when she feels safe and seen.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Sensitive & Gentle-Natured: Whitney doesn’t rush into the spotlight but shines once she’s comfortable.',
        'Loyal & Curious: She builds deep bonds and enjoys calm, shared adventures.',
        'Quiet Confidence: Though timid at first, her brave heart grows bolder with every kind moment.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'If you’re someone who values emotional connection and watching a soul come to life, Whitney will steal your heart. Her presence is grounding, and her progress is inspiring. Once you’re in her circle, you’re there for life and she’ll never stop showing you love.',
    },
    media: {
      mainPhotoKey: 'whitney_main',
      storyPhotoKey: 'whitney_main',
      galleryKeys: ['https://i.ibb.co/23VX8zpT/Whitney-sitting-on-the-dog-bed-gazing-past-the-camera-07-2025.jpg', 'https://i.ibb.co/pBrq6k9Y/Whitney-Sitting-on-dog-bed-and-posing-looking-away-from-the-camera-07-2025-1.jpg'],
      videoKey: 'whitney_video',
    },
  },
  {
    id: 'xeno',
    name: 'Xeno',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Staffordshire Bull Terrier Cross',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The silent guardian of the sanctuary. Calm, loyal and full of quiet love.',
    story: {
      title: 'The Gentle Gentleman',
      text: 'Xeno is a quiet and affectionate Staffordshire Bull Terrier cross with a calm and soothing presence. With his striking black and white coat and thoughtful gaze, he brings comfort and companionship to everyone he meets. While he’s generally mellow and easy-going, he still enjoys short walks, quiet time in the sun and some gentle play. He’s happiest when he’s close to his human friends, soaking up love and doling out gentle snuggles in return.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: 'Xeno is one of our cherished Forever Sanctuary residents. He is not up for adoption but is part of our permanent family here at The Gem Project Sanctuary. He thrives in the quiet stability of sanctuary life, surrounded by loving caregivers and furry friends. He is available for sponsorship or Hands-On Care, and would truly appreciate the kindness of someone who supports his peaceful days.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Easy Companion: Calm and content by your side.',
        'Loyal and Loving: Enjoys gentle cuddles and back scratches.',
        'Gentle Spirit: A grounding presence in sanctuary life.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Him',
      text: 'Xeno is a gentle soul who doesn’t ask for much. Just love, a calm space and a few good cuddles. His quiet nature and steady affection make him a comforting presence and a true sanctuary treasure.',
    },
    media: {
      mainPhotoKey: 'xeno_main',
      storyPhotoKey: 'xeno_main',
      galleryKeys: ['https://i.ibb.co/NnpsSWwt/Xeno-being-bathed-and-enjoying-the-moment-tongue-out-07-2025.jpg', 'https://i.ibb.co/MDGfZRg6/15-07-2025-Xeno-bath-time-5.jpg', 'https://i.ibb.co/tPCpvFS8/15-07-2025-Xeno-bath-time-3.jpg', 'https://i.ibb.co/Nd7WM84T/15-07-2025-Xeno-bath-time-7.jpg', 'https://i.ibb.co/2YSjWSjt/15-07-2025-Xeno-bath-time-2.jpg'],
      videoKey: 'xeno_video',
    },
  },
  {
    id: 'zarra',
    name: 'Zarra',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Mature',
      breed: 'Staffie cross',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Large',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'The gentle guardian. Calm, loving and deeply loyal.',
    story: {
      title: 'Her Story',
      text: 'Zarra is a soulful German Shepherd cross with a beautiful coat and kind, intelligent eyes. She carries the quiet dignity of a dog who has seen a lot of life. She enjoys gentle walks, peaceful moments in the sun, and the quiet companionship of her trusted caregivers.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: "Zarra is one of the sanctuary's most serene and loving residents. While she is not up for adoption, she is a central part of our sanctuary family, offering a calming presence to both people and other animals. She is available for sponsorship or Hands-On Care.",
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Calm & Gentle',
        'Forms deep, trusting bonds',
        'A soulful and wise presence',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Zarra has a calming energy that soothes everyone around her. She reminds us that love can be quiet, steady, and profound.',
    },
    media: {
      mainPhotoKey: 'zarra_main', // TODO: Resize image and replace story
      storyPhotoKey: 'zarra_main',
      galleryKeys: [],
      videoKey: 'zarra_video',
    },
  },
  {
    id: 'doughnut',
    name: 'Doughnut',
    status: 'Adopted',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'A loving home looking for a sweet and friendly companion.',
    story: {
      title: 'Her Story',
      text: 'Doughnut is a wonderful dog waiting for her forever family. She has a heart of gold and is ready to share it with a loving home.',
    },
    personality: {
      title: 'Personality',
      text: 'Doughnut is friendly, playful, and loves to be around people. She enjoys walks and cuddle time on the couch.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Sweet and affectionate nature',
        'Loves to play',
        'Good with other dogs and people',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Doughnut will fill your home with love and laughter. She is a loyal companion just waiting for the right family to come along.',
    },
    media: {
      mainPhotoKey: 'doughnut_main',
      storyPhotoKey: 'doughnut_story',
      galleryKeys: ['https://i.ibb.co/Qwswcr7/Doughnut-looking-at-the-camera-with-tongue-out-07-2025.jpg', 'https://i.ibb.co/HL17kk4R/Doughnut-laying-on-the-dog-be-and-looking-at-the-camera-07-2025.jpg'],
      videoKey: 'alex_video', 
    },
  },
  {
    id: 'maxi',
    name: 'Maxi',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'A loving home where he can be part of the family.',
    story: {
      title: 'His Story',
      text: 'Maxi is a sweet boy who is patiently waiting for his forever home. He is full of love and is ready to be a loyal companion.',
    },
    personality: {
      title: 'Personality',
      text: 'Maxi is gentle, loving, and enjoys quiet time as much as he enjoys a good walk. He is a perfect mix of calm and playful.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Gentle and loving',
        'Enjoys both relaxing and being active',
        'Very loyal to his people',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Maxi has a sweet soul and will be a devoted friend for life. He is ready to give all his love to a family of his own.',
    },
    media: {
      mainPhotoKey: 'maxi_main',
      storyPhotoKey: 'maxi_main',
      galleryKeys: ['https://i.ibb.co/KpdtgZKq/Maxi-heartfelt-moment-between-handler-and-him-as-the-handler-s-hand-is-resting-on-his-head-07-2025.jpg', 'https://i.ibb.co/nqsjWD67/Maxi-sitting-on-the-dog-bed-and-posing-to-the-camera-07-2025.jpg', 'https://i.ibb.co/0j19NCb6/Maxi-heartfelt-moment-between-Maxi-and-handler-as-the-handler-is-touching-his-head-and-he-appears-to.jpg', 'https://i.ibb.co/JRGCNGvL/Maxi-running-in-the-field-with-his-mouth-open-tongue-out-and-water-splashing-in-the-background-07-20.jpg'],
      videoKey: 'alex_video', 
    },
  },
  {
    id: 'coco',
    name: 'Coco',
    status: 'Available',
    petInfo: {
      age: 'Young',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Yes',
    },
    idealHome: 'A family that can provide lots of love and playtime.',
    story: {
      title: 'Her Story',
      text: 'Coco is a bundle of joy waiting to find her perfect match. She is a young pup with a lot of love to give.',
    },
    personality: {
      title: 'Personality',
      text: 'Coco is playful, curious, and incredibly sweet. She loves everyone she meets and is always ready for a game or a cuddle. She can be insecure when uncertain, barks when unsure, and is quite insecure when uncertain.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Playful and energetic',
        'Loves people and other animals',
        'Has an irresistibly sweet personality',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Coco will bring endless fun and affection into your life. This little sweetheart is ready to be the center of your world.',
    },
    media: {
      mainPhotoKey: 'coco_main',
      storyPhotoKey: 'coco_main',
      galleryKeys: [],
      videoKey: 'alex_video', 
    },
  },
  {
    id: 'foxy',
    name: 'Foxy',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Male',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'No',
    },
    idealHome: 'An experienced owner who can give him confidence and love.',
    story: {
      title: 'His Story',
      text: 'Foxy is a beautiful boy with a shy heart. He is learning to trust and is looking for a patient and loving home to help him continue to blossom.',
    },
    personality: {
      title: 'Personality',
      text: 'Foxy is gentle and a bit timid at first, but once he warms up, he is incredibly sweet and loyal. He enjoys calm walks and a peaceful environment.',
    },
    specialTrait: {
      title: 'What Makes Him Special',
      points: [
        'Gentle and sweet once he trusts you',
        'Beautiful and unique look',
        'A very loyal companion',
      ],
    },
    loveReason: {
      title: "Why You'll Love Him",
      text: "Earning Foxy's trust is a truly rewarding experience. He has so much love to give to the right person.",
    },
    media: {
      mainPhotoKey: 'foxy_main',
      storyPhotoKey: 'foxy_main',
      galleryKeys: ['https://i.ibb.co/svssVhqr/Foxy-laying-on-a-dog-bed-with-toys-around-looking-at-the-camera-with-mouth-open-and-tongue-out-07-20.jpg', 'https://i.ibb.co/KpTLBZVY/Foxy-laying-on-the-dog-bed-and-playing-with-toys-07-2025.jpg'],
      videoKey: 'alex_video', 
    },
  },
    {
    id: 'hazel',
    name: 'Hazel',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Young Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'A home that enjoys adventures and cuddles.',
    story: {
      title: 'Her Story',
      text: 'Hazel is a sweet and energetic girl looking for a place to call home. She is full of potential and ready for her next chapter.',
    },
    personality: {
      title: 'Personality',
      text: 'Hazel is a happy-go-lucky dog who loves to play and explore. She is also very affectionate and enjoys being close to her people.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Loves to play and go on adventures',
        'Very affectionate and people-oriented',
        'A happy and cheerful companion',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: "Hazel's joyful spirit is contagious. She will be a wonderful addition to any loving family.",
    },
    media: {
      mainPhotoKey: 'hazel_main',
      storyPhotoKey: 'hazel_main',
      galleryKeys: [],
      videoKey: 'alex_video', 
    },
  },
  {
    id: 'angel',
    name: 'Angel',
    status: 'Available',
    petInfo: {
      age: '7-month-old Puppy',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Older Kids Only',
      dogs: 'With Proper Introduction',
      cats: 'No',
    },
    idealHome: 'A calm and loving home where she can feel safe.',
    story: {
      title: 'Her Story',
      text: 'Angel is a gentle soul who has had a rough start. She is looking for a special home that can show her what love and safety feel like.',
    },
    personality: {
      title: 'Personality',
      text: 'Angel is very sweet and gentle. She can be shy with new people, but is incredibly loving once she feels comfortable. She enjoys quiet walks and relaxing with her trusted humans.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'A very gentle and sweet soul',
        'Forms deep bonds with her people',
        'Deserves a loving home to help her shine',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'Angel has a heart of gold. Watching her come out of her shell and learn to trust is a beautiful journey to be a part of.',
    },
    media: {
      mainPhotoKey: 'angel_main',
      storyPhotoKey: 'angel_main',
      galleryKeys: ['https://i.ibb.co/TxgYskks', 'https://i.ibb.co/wr6ZqJJ7', 'https://i.ibb.co/YBgdjRr0', 'https://i.ibb.co/5gWbYzK1'],
      videoKey: 'alex_video', 
    },
  },
  {
    id: 'ruby',
    name: 'Ruby',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Mature',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'No',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'A resilient soul who is learning to trust and heal in our care.',
    story: {
      title: 'Her Story',
      text: 'Ruby arrived having likely gone her entire life without knowing kindness. She was suffering from a severe skin condition, malnourishment, and deep social anxiety after a lifetime of isolation. She flinched at every sound and shied away from every human touch.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: "With dedicated veterinary care and slow, gentle rehabilitation, Ruby's health and spirit are on the mend. She is learning to trust and her true personality is beginning to shine. She is a permanent resident, receiving the lifelong patience and love she deserves. You can support her journey through sponsorship.",
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Incredible resilience in the face of hardship.',
        'A gentle soul learning to love.',
        'Her recovery is a testament to the power of sanctuary care.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: 'To watch Ruby rediscover joy is one of the most moving experiences at the sanctuary. Supporting her is supporting a miracle in progress.',
    },
    media: {
      mainPhotoKey: 'ruby_main',
      storyPhotoKey: 'ruby_main',
      galleryKeys: ['https://i.ibb.co/zVhb5jVR/15-07-2025-Ruby-standing-mouth-open.jpg', 'https://i.ibb.co/F47LZ6rP/15-07-2025-Ruby-running-in-field1.jpg', 'https://i.ibb.co/y2qWx7s/15-07-2025-Ruby-running-in-field.jpg', 'https://i.ibb.co/ccDKfQtv/15-07-2025-Ruby-looking-sideways.jpg', 'https://i.ibb.co/svbgKZqK/15-07-2025-Ruby-laying-down-with-training.jpg', 'https://i.ibb.co/WWJNFpRX/15-07-2025-Ruby-getting-belly-rubs.jpg', 'https://i.ibb.co/8nCVTmy2/15-07-2025-Queeni-chasing-ball.jpg'],
      videoKey: 'benji_video',
    },
  },
  {
    id: 'pretty',
    name: 'Pretty',
    status: 'Forever Sanctuary',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'With Proper Introduction',
      cats: 'Unknown',
    },
    idealHome: 'A gentle soul with a heart of gold who has found her safe haven with us.',
    story: {
      title: 'Her Story',
      text: 'Pretty is a lovely girl who came to us needing a safe, quiet place to heal. She has found that and more in our sanctuary family.',
    },
    personality: {
      title: 'Sanctuary Life',
      text: "Pretty lives up to her name inside and out. She enjoys quiet walks, gentle grooming, and the calm companionship of her trusted caregivers. While she won't be adopted, she would love a sponsor to be part of her peaceful life here.",
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'A truly sweet and gentle nature.',
        'Loves peaceful, quiet moments.',
        'Forms strong bonds with her caregivers.',
      ],
    },
    loveReason: {
      title: 'Why You’ll Love Her',
      text: "Pretty's calm and loving presence is a gift. She reminds us of the beauty in quiet connections and a peaceful life.",
    },
    media: {
      mainPhotoKey: 'pretty_main',
      storyPhotoKey: 'pretty_main',
      galleryKeys: ['https://i.ibb.co/JWyhkf9X/Pretty-playing-with-a-ball-while-laying-in-the-field-07-2025.jpg', 'https://i.ibb.co/Xx2pGDY2/Pretty-laying-in-the-field-and-playing-with-a-ball-with-one-paw-in-the-air-07-2025.jpg', 'https://i.ibb.co/XZjgtXBJ/Pretty-laying-down-in-the-field-while-playing-with-a-ball-07-2025.jpg', 'https://i.ibb.co/dJMRN1vt/15-07-2025-Pretty-running-in-the-field.jpg', 'https://i.ibb.co/YTdgv3Kx/Pretty-running-in-the-field-looking-away-from-the-camera-with-both-ears-lifted-07-2025.jpg', 'https://i.ibb.co/gFzQ7bRw/Pretty-running-and-looking-towards-the-camera-07-2025.jpg'],
      videoKey: 'blake_video',
    },
  },
  {
    id: 'queeni',
    name: 'Queeni',
    status: 'Available',
    petInfo: {
      age: 'Adult',
      breed: 'Crossbreed',
      gender: 'Female',
      sterilised: 'Yes',
      size: 'Medium',
    },
    compatibility: {
      kids: 'Yes',
      dogs: 'Yes',
      cats: 'Unknown',
    },
    idealHome: 'A loving family home where she can play and be cherished.',
    story: {
      title: 'Her Story',
      text: 'Queeni is a wonderful dog who loves to play and enjoys the company of both people and other dogs. She is ready to find her forever home.',
    },
    personality: {
      title: 'Personality',
      text: 'Queeni is playful, energetic, and loves fetching balls. She enjoys outdoor activities and is always eager to engage in games and exercise.',
    },
    specialTrait: {
      title: 'What Makes Her Special',
      points: [
        'Loves to play fetch and chase balls',
        'Very social and gets along well with other dogs',
        'Energetic and fun-loving companion',
      ],
    },
    loveReason: {
      title: "Why You'll Love Her",
      text: 'Queeni will bring endless joy and energy to your life. Her playful spirit and loving nature make her a perfect addition to any active family.',
    },
    media: {
      mainPhotoKey: 'queeni_main',
      storyPhotoKey: 'queeni_main',
      galleryKeys: ['https://i.ibb.co/JwgwvFM8/15-07-2025-Queeni-picking-up-ball.jpg', 'https://i.ibb.co/Q3pbHHph/15-07-2025-Queeni-looking-at-camera1.jpg', 'https://i.ibb.co/6cHGtT1m/15-07-2025-Queeni-looking-at-camera.jpg', 'https://i.ibb.co/Q72GSP32/15-07-2025-Queeni-fetching-ball1.jpg', 'https://i.ibb.co/PG1rQdC0/15-07-2025-Queeni-fetching-ball.jpg', 'https://i.ibb.co/zHmmQzzt/15-07-2025-Queeni-chasing-ball1.jpg'],
      videoKey: 'alex_video', 
    },
  },
];