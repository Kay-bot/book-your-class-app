# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Lesson.destroy_all
Schedule.destroy_all

kay = User.create(
    email:'kay@ga.com.au', 
    password:'123456', 
    is_admin: true,
    );

user1 = User.create(
    email:'user1@ga.com.au', 
    password:'123456', 
    is_admin: false,
    );

Lesson.create(
    url: 'https://classbento.com.au/images/class/basket-weaving-class-at-bondi-beach-portrait-big.jpg?1580588732%201600w', 
    title: 'Basket Weaving Class',
    duration: "2.5",
    cost: 165,
    category: '',
    language: 'English',
    level: 'Biginner',
    description: 'In this two and a half hour workshop, with guest fibre artist Robyn Morris, we will work with a Bangalow palm inflorescence, which is the seed carrier of our Australian native tree. The inflorescence is freshly fallen and once prepared is deliciously soft and supple for weaving.'
    );

Lesson.create(
    url: 'https://classbento.com.au/images/class/beginners-kintsugi-workshop-sydney-portrait-big.jpg?1576259790%201600w', 
    title: 'Kintsugi Workshop',
    duration: 1-2,
    cost:120,
    category: '',
    language: 'English',
    level: 'Advance',
    description: 'You will learn about the wonderful art of Kintsugi, the ancient Japanese art of mending broken pottery using lacquer with gold, platinum or silver, which dates back to 15th century Japan. The philosophy of Kintsugi is that an object is sometimes broken; however, this is part of its life, and rather than throw it away it can be repaired and the have its cracks remain to show its history and story.'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/shake-cocktails-with-australian-native-plants-portrait-big.jpg?1578488955%201600w', 
    title: 'Shake Cocktails with Australian Native Plants',
    duration: 2,
    cost:85,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'Like most good things, the key to the perfect cocktail is finding balance. Feel that tipping point, tasting seasonal, sophisticated tipples, shaken with bespoke handcrafted ingredients. Inspired by the native forageables from around the city, abundant flavours that we need to champion, along with tastes from other nations of Australia.'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/pasta-lovers-masterclass-valentines-edition-portrait-big.jpg?1576259801%201600w', 
    title: 'Pasta Lovers Masterclass',
    duration: 3,
    cost:50,
    category: '',
    language: 'English',
    level: 'Intermediate',
    description: 'Working in pairs over three hours, we will teach you our signature pasta dough recipe and give you all the tips and tricks for pasta shapes and delicious filled ravioli that will most definitely have you feeling love at first bite.'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/paint-and-sip-class-tuscan-door-portrait-big.jpg?1576259835%201600w', 
    title: 'Paint and Sip Class: Tuscan Door',
    duration: 2,
    cost:50,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'This is a fun sip and paint session, where you will be painting the Tuscan way while having a drink.

    This class is perfect for beginners! Join us to unwind, sip on your favourite beverage and paint while our professional artist guides you from start to finish to paint an interpretation of Tuscan Way. You supply the wine or your favourite beverage, and we’ll provide all the materials including the glassware, small plate, canvas, paints, easel, apron and even the soulful tunes. You are welcome to bring bites and snacks.'
    );

Lesson.create(
    url: 'https://classbento.com.au/images/class/beginner-dslr-hybrid-photography-course-sydney-portrait-big.jpg?1576259789%201600w', 
    title: 'Beginner DSLR / Hybrid Photography Course',
    duration: 3,
    cost:99,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'This is a fun and creative hands-on photography learning experience, in the scenic and iconic surrounds of The Rocks and Sydney Harbour. Perfect for beginners.

    You will learn all about photo composition, controlling ISO, aperture & shutter speed, and put theory into practice in this hands-on photography class. Learn all that your camera manual mode has to offer!'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/makmak-raspberry-macaron-making-class-portrait-big.jpg?1576259813%201600w', 
    title: 'Makmak Raspberry Macaron Making Class',
    duration: 2,
    cost:100,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'Learn the fine art of macaron-making under the guidance of Sydney’s best: MakMak macarons were voted recently as the best in Sydney, beating esteemed competitors like Laduree and Zumbo. Find out what gives MakMak the edge.'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/herbal-tea-workshop-tasting-and-preparation-sydney-portrait-big.jpg?1576259805%201600w', 
    title: 'Herbal Tea Workshop',
    duration: 2,
    cost:50,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'Chinese people have a long history of tea drinking and amazing tea culture. In the workshop, we will demonstrate the tea ceremony and serve TaiWan high mountain tea.

    You will also learn the knowledge of traditional Chinese herbal tea and prepare your own.'
    );
Lesson.create(
    url: 'https://classbento.com.au/images/class/scented-soy-candle-making-workshop-sydney-0-portrait-big.jpg?1576259826%201600w', 
    title: 'Scented Soy Candle Making Workshop',
    duration: 2,
    cost:120,
    category: '',
    language: 'English',
    level: 'Intermediat',
    description: 'Learn how to make your own candles using C3 Soy Wax, the wax used by professional makers. This workshop will take you through the basics of making your own candles, an introduction to tools and materials, teaching you pouring techniques, and how to create scented candles.'
    );

Lesson.create(
    url: 'https://classbento.com.au/images/class/kombucha-making-workshop-portrait-big.jpg?1576259811%201600w', 
    title: 'Kombucha Making Workshop',
    duration: 1,
    cost:65,
    category: '',
    language: 'English',
    level: 'Advance',
    description: 'Learn about the culture of Kombucha, microbes, the fermentation process, how to start up your own SCOBY home.

    Students will leave with a bottle of Kombucha that will ferment, carbonate over a few days after the class; and also a scoby/mother (kombucha starter) to get a colony of microbes thriving at home so you can love your gut and feed the microbiomes of you and your friends.'
    );

Lesson.create(
    url: 'https://classbento.com.au/images/class/cocktail-making-class-and-all-you-can-eat-pizza-sydney-portrait-big.jpg?1576259795%201600w', 
    title: 'Cocktail Making Class',
    duration: 1.5,
    cost:99,
    category: '',
    language: 'English',
    level: 'Advance',
    description: 'Stir, shake and twist to the top of your cocktail making game in this Sydney cocktail making class. And to make sure you do not leave hungry there will be a luscious All-You-Can-Eat pizza spread!'
        );

Lesson.create(
    url: 'https://classbento.com.au/images/class/acrylic-pour-painting-class-for-valentines-day-sydney-portrait-big.jpg?1579426857%201600w', 
    title: 'Acrylic Pour Painting Class for Valentine Day',
    duration: 2,
    cost:125,
    category: '',
    language: 'English',
    level: 'Advance',
    description: 'Learn acrylic pouring for beginners at this hands-on class.

    Friday February 14 is Valentines Day! Acrylic Pour painting is a beautiful way for couples to share the love on Valentines Day! Expressing love; being creative together; being present in the moment; sharing art as mindfulness; quality time together; being at one; making heart paintings together to gift to each other on Valentines Day! Creating art, creating memories.'
        );

Schedule.create(
    title:"Available", 
    date: "Mon, 17 March", 
    time: "9am-12pm", 
);
Schedule.create(
    title:"Available", 
    date: "Tue, 18 March", 
    time: "9am-12pm", 
);
Schedule.create(
    title:"Available", 
    date: "Wed, 19 March", 
    time: "9am-12pm", 
);
Schedule.create(
    title:"Available", 
    date: "Thur, 20 March", 
    time: "9am-12pm", 
);
Schedule.create(
    title:"Available", 
    date: "Fri, 20 March", 
    time: "9am-12pm",         
);  

puts "seeding Users database created #{User.all.length}"
puts "seeding Lessons database created #{Lesson.all.length}"
puts "seeding Schedules database created #{Schedule.all.length}"