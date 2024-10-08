export const config = {
    content: {

        logo: "/CyberWeavers.png",
        brand: "Cyber Weavers",
        slogan: "by Choroid Studios",
        sloganLink: "https://choroidstudios.com",
        metaDescription: "Software Development | XR | AI | Web Development",

        hero: {
            heroHeadLine: "We Impower Your Business With Creativity and Technology",
            heroActionText: "",
            heroActionLink: "/services",
            heroSubHeadLine: "Software Development | XR | AI | Web Development",
            parallaxEffect: false,
            heroImageUrl: "",
            parallaxImages: [
                'parallax-effect/0.png',
                'parallax-effect/1.png',
                'parallax-effect/2.png',
                'parallax-effect/3.png',
                'parallax-effect/4.png',
            ],

            highlightedHeadlineWords: ["Impower", "Business", "Technology"],
            breakLineAfter: ["Websites", "User"],

        },
        topPageVectors: "landing_page_abstract.png",
        notFoundURL: "/notFound.png",

        links: [
            // { path: '/#projects', title: 'Projects' },
            { path: '/blog', title: 'Blog' },
            { path: '/learning', title: 'Learning' },
            // { path: '/#solutions', title: 'Solutions' },
            // { path: '/templates', title: 'Templates' },
            { path: '/#services', title: 'Services' },
            { path: '/#contact', title: 'Contact' },
        ],

        coreFeatures: {
            isHidden: true,
            mainTitle: "Core Features",
            mainTitleHighlightedWord: "Features",
            data: [
                {
                    icon: "⚡",
                    title: "Swift",
                    description: "Blazing fast load times"
                },
                {
                    icon: "📱",
                    title: "Adaptive",
                    description: "Seamless on all devices"
                },
                {
                    icon: "🎨",
                    title: "Sleek",
                    description: "Modern, eye-catching designs"
                },
                {
                    icon: "🛠️",
                    title: "Flexible",
                    description: "Easily customizable"
                }
            ]
        },

        about: {
            isHidden: false,
            mainTitle: "ABOUT US",
            mainTitleHighlightedWord: "US",
            description: "We are a team of dedicated professionals committed to delivering innovative web solutions. Our expertise spans across various technologies, ensuring we can meet diverse client needs.",
            buttonText: "CONTACT NOW",
            buttonAction: "#contact",
            aboutImageURL: "/about-us.png",
        },
        projects: {
            isHidden: false,
            mainTitle: "Our Projects",
            mainTitleHighlightedWord: "Projects",
            data: [
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Ever wanted to connect with the characters in your favourite book and chat with them!? Bookifai allows you to just do that! You upload your favorite book and we extract the characters and create a chatbots for you to interact with them using discord!",
                    actionLink: "mailto:cyberweavers@outlook.com",
                    actionText: "Request a Demo",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/MirageXR.jpg",
                    title: "MirageXR",
                    description: `Prototype Arduino or ESP projects faster with MirageXR. Our platform connects virtual electronics to your physical hardware, enabling quick testing and development. Using our AR/XR app and Arduino/ESP library, control virtual components with your real board—no extra parts needed.Bridge the physical and virtual worlds in your projects!`,
                    actionLink: "https://www.miragexr.com",
                    actionText: "Join Waitlist",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/unity_chatgpt.png",
                    title: "OpenAI Wrapper for Unity",
                    description: "Our Unity package allows you to easily integrate OpenAI's Models into your Unity projects. We provided a simple API that allows you to interact and chain multiple models together to create complex AI behaviors in your game or simulation. Our package is designed to be easy to use and flexible to fit your needs. We also provide a set of example scenes to get you started quickly!",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    actionText: "View On Github",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/cfwm2.jpg",
                    title: "Come Fly With Me (Protoype)",
                    description: `Ever wanted to fly like a bird? Come Fly With Me is a VR experience that allows you to do just that! You can fly and explore the world from a bird's eye view!`,
                    actionLink: "https://www.youtube.com/watch?v=oted6xBF0z8",
                    actionText: "More",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/notFound.png",
                    title: "test (not at Home page)",
                    description: "TEST",
                    actionLink: "",
                    actionText: "View Project",
                    isHidden: true,
                    visibleHome: false
                },
            ]
        },
        services: {
            "isHidden": false,
            "mainTitle": "Our Services",
            "mainTitleHighlightedWord": "Services",
            "data": [
                // Web-related services
                {
                    "title": "WordPress Development",
                    "description": "We create custom WordPress solutions that fit your business needs perfectly. From adjusting your theme to building special plugins, we work to enhance your online presence and make your site more engaging. Our goal is to help you attract and keep more visitors.",
                    "icon": "/icons/wordpress-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Web & Mobile"
                },
                {
                    "title": "Headless Wordpress Migration",
                    "description": "We offer seamless migration from WordPress to a headless setup, ensuring no content is lost. We’ll transfer your existing content to a highly customizable front end built from scratch. This modern architecture boosts performance and scalability, giving you a faster, more dynamic website. Let us handle the technical details while you focus on growing your business.",
                    "icon": "/icons/product-request-line-item-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": true,
                    "category": "Web & Mobile"
                },
                {
                    "title": "Mobile App Development",
                    "description": "We create cross-platform mobile apps for iOS and Android, delivering a consistent user experience while saving time and costs. We offer WordPress integration for easy content management or can use another CMS of your choice. Let us build a versatile app tailored to your needs.",
                    "icon": "/icons/mobile-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Web & Mobile"
                },
        
                // Combining Bots and AI-related services
                {
                    "title": "Custom Bot Development",
                    "description": "We build custom bots for Discord, Telegram, and WhatsApp, powered by ChatGPT. These bots enhance community engagement and automate tasks, tailored to your specific needs. Integrate seamlessly with your platform and let us create a smart, responsive bot to streamline your interactions.",
                    "icon": "/icons/bot.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Bots & AI"
                },
                {
                    "title": "Local AI Document Retrieval",
                    "description": "We offer local AI-powered document retrieval solutions that ensure privacy and data security. Our system allows you to efficiently search and access your documents while keeping all data stored securely on your premises. Enhance your document management with a solution that prioritizes your privacy.",
                    "icon": "/icons/ai-file-type-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Bots & AI"
                },
                {
                    "title": "Computer Vision",
                    "description": "We provide advanced computer vision solutions that can analyze and interpret visual data from the world around you. From image recognition to video analysis, our services help you leverage visual data to gain actionable insights and automate processes.",
                    "icon": "/icons/computer-vision.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Bots & AI"
                },
        
                // Combining AR
                {
                    "title": "AR Product Visualization",
                    "description": "We offer advanced AR product visualization services, including solutions for restaurants and jewelry. Enhance customer experiences by showcasing products in 3D, allowing users to interact with and visualize items before making decisions. Our AR technology brings your offerings to life, whether for dining, jewelry, or other industries.",
                    "icon": "/icons/ar-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": false,
                    "comingSoon": true,
                    "category": "AR"
                },
                {
                    "title": "Software Development Consultation",
                    "description": "We offer expert consultation services for all your software development needs. Whether you’re starting a new project or enhancing an existing one, our team provides tailored advice on strategy, technology, and implementation. Let us guide you through the development process and help you achieve your software goals with confidence.",
                    "icon": "/icons/woman-to-consult-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Maintenance & Coaching"
                },
        
                // Miscellaneous and Coaching
                {
                    "title": "Yearly Maintenance Contracts",
                    "description": "Our yearly maintenance contracts provide ongoing support and updates to keep your software running smoothly. Choose from our plans for essential or comprehensive support tailored to your needs.",
                    "icon": "/icons/fix-ios11-iphone-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Maintenance & Coaching"
                },
                {
                    "title": "Coaching & Teaching Services",
                    "description": "We offer expert coaching and teaching services to guide you through web, mobile, AI, and XR projects. Join our community for ongoing support and learning opportunities. Whether you're looking to enhance your skills or drive your business forward, our personalized coaching helps you achieve your goals with confidence.",
                    "icon": "/icons/teach-svgrepo-com.svg",
                    "actionLink": "mailto:cyberweavers@outlook.com",
                    "actionText": "More Info",
                    "isHidden": false,
                    "visibleHome": true,
                    "comingSoon": false,
                    "category": "Maintenance & Coaching"
                }
            ]
        },                
        solutions: {
            isHidden: true,
            mainTitle: "Our Solutions",
            mainTitleHighlightedWord: "Solutions",
            data: [
                {
                    imageUrl: "",
                    icon: "/icons/bot.svg",
                    title: "Custom Bots in XR! Powered by GPT-4 Technology",
                    description: `
                    We create AI-powered virtual assistants for XR environments.
                    Our custom bots use GPT-4 technology to provide intelligent,
                    context-aware interactions in VR and AR,
                    enhancing user experiences across various applications.`,
                    actionLink: "",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    imageUrl: "",
                    icon: "/icons/virtual-tour.svg",
                    title: "Architectural Visualization & Virtual Tours",
                    description: `We transform architectural concepts into immersive experiences.
                    Our team creates detailed 3D models of apartments and scenes, bringing them
                    to life in virtual reality (VR) and augmented reality (AR).
                    This allows clients to explore and interact with spaces before they're built,
                    enhancing decision-making and providing a powerful marketing tool for
                    real estate developers and architects.`,
                    actionLink: "",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
                {
                    imageUrl: "",
                    icon: "/icons/MobileWeb.svg",
                    title: "Web & Mobile Apps",
                    description: "We develop custom, user-friendly web and mobile applications. Our solutions are designed to meet your specific business needs, offering seamless functionality across devices and platforms",
                    actionLink: "https://cw.choroidstudios.com",
                    actionLink: "https://cw.choroidstudios.com",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true,
                    comingSoon: false
                },
            ]
        },
        team: {
            isHidden: false,
            mainTitle: "Meet the Team",
            mainTitleHighlightedWord: "Team",
            members: [
                {
                    imageUrl: "/team/diaa.jpg",
                    title: "Diyaa Abou Alloul",
                    description: "Creative designer with a passion for user experience and visual storytelling.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/hadiDiab.png",
                    title: "Hadi Diab",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/karloRajić.png",
                    title: "Karlo Rajić",
                    description: "Frontend developer/Game Level Designer, Karlo has the taste for the best designs",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mohammadOthman.png",
                    title: "Mohmmad Othman",
                    description: "Graphic Designer, experienced in creating visual concepts and storytelling.",
                    visibleHome: false
                },
                {
                    imageUrl: "/team/shahbaz.jpg",
                    title: "Mohammad Shahbaz",
                    description: "Backend, Mobile, and every thing low level. Currently focusing on mobile and reverse engineering",
                    visibleHome: false
                },
                {
                    imageUrl: "/team/fdefaultPerson.png",
                    title: "Dima Abdallah",
                    description: "Computer Engineering | Cyber Security Track",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mustafaZabet.png",
                    title: "Mustafa Zabet",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: false
                },
                {
                    imageUrl: "",
                    title: "Nizar Sadek",
                    description: "Creative Game level artist/designer experienced in creating high quality optimized game props and enviroments.",
                    visibleHome: false
                },
                {
                    imageUrl: "/team/rabeeQablawi.png",
                    title: "Rabee Qiblawi",
                    description: "Software Engineer, devoted for problem solving, with epxerience in Game Development and XR.",
                    visibleHome: true,
                    isPremium: false
                }
            ]
        },
        clients: {
            isHidden: true,
            title: "Take a look at our clients",
            subtitle: "We did a great job with these companies. You can be next in such elite!",
            buttonText: "Try our path",
            buttonAction: "",
            clientList: [
                { name: "BBC", logo: "/logos/bbc.svg" },
                { name: "The New York Times", logo: "/logos/nyt.svg" },
                { name: "The Economist", logo: "/logos/economist.svg" },
                { name: "Aston Martin", logo: "/logos/aston-martin.svg" },
                { name: "Tesco", logo: "/logos/tesco.svg" },
                { name: "Arsenal", logo: "/logos/arsenal.svg" },
                { name: "London 2012", logo: "/logos/london-2012.svg" },
                { name: "Mercedes-Benz", logo: "/logos/mercedes.svg" },
                { name: "Google", logo: "/logos/google.svg" },
                { name: "Instagram", logo: "/logos/instagram.svg" }
            ]
        },
        clientProjects: {
            isHidden: true,
            mainTitle: "Other Projects",
            mainTitleHighlightedWord: "Projects",
            data: [
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Ever wanted to connect",
                    actionLink: "mailto:cyberweavers@outlook.com",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/MirageXR.jpg",
                    title: "MirageXR",
                    description: "Prototype Arduino or ESP miragexr.com",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/unity_chatgpt.png",
                    title: "OpenAI Wrapper for Unity",
                    description: "Our Unity package allows you to easily",
                    actionLink: "https://github.com/rabeeqiblawi/Choroid-Input-System",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    imageUrl: "/cfwm2.jpg",
                    title: "Come Fly With Me (Protoype)",
                    description: "Ever wanted to fly like a bird?",
                    actionLink: "https://www.youtube.com/watch?v=oted6xBF0z8",
                    isHidden: false,
                    visibleHome: false
                },
                {
                    imageUrl: "/notFound.png",
                    title: "test (not at Home page)",
                    description: "TEST",
                    actionLink: "",
                    isHidden: true,
                    visibleHome: false
                },
            ]
        },
        testimonial: {
            isHidden: true,
            leftQuoteIconURL: "/icons/left-quote.svg",
            rightQuoteIconURL: "/icons/right-quote.svg",
            data: [
                {
                    text: "Hasan's skills in web development are outstanding. We worked together on building websites for four international NGOs, and his creativity and professionalism were impressive. He's a reliable teammate and a valuable addition to any project.",
                    author: "1Abdallah Kpbrosli",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "CDMP"
                },
                {
                    text: "Hasan is a WordPress magician, a wizard of his craft. Whenever I have a WordPress project, no matter how complicated, I know I can count on him to take on and deliver what is beyond my expectations. HIGHLY recommended.",
                    author: "2Amadeus Awad",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Business Coach - Founder of alt^ people"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "3Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "4Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "5Aghny Jreige",
                    authorImageURL: "/team/defaultPerson.png",
                    title: "Brand Strategist - Mute Designs"
                }
            ],
        }
    },
    screenSizes: {
        small: 768,
        medium: 1024,
        large: 1440,
    },
    github: {
        repoOwner: "rabeeqiblawi",
        repoName: "Articles",
    },
    theme: {
        colors: {
            dark: {
                primary: "#3f51b5",
                secondary: "#f50057",
                accent: "#ff4081",
                background: "#212121",
                surface: "#424242",
                error: "#b00020",
            },
            light: {
                primary: "#3f51b5",
                secondary: "#f50057",
                accent: "#ff4081",
                background: "#f5f5f5",
                surface: "#ffffff",
                error: "#b00020",
            },
        },
        fonts: {
            primary: "Roboto, sans-serif",
            secondary: "Roboto, sans-serif",
        },
    },
    socialLinks: {
        github: "",
        linkedin: "https://www.linkedin.com/company/103909655/",
        twitter: "",
        facebook: "https://www.facebook.com/profile.php?id=61563937222615",
        instagram: "https://www.instagram.com/cyberweavers/",
        tiktok: "",
        youtube: "",
    },
    contact: {
        imageUrl: "/contact-us.png",
        mainTitle: "Contact Us",
        mainTitleHighlightedWord: "Us",
        title: "Get in Touch",
        description: "We're here to help and answer any question you might have. We look forward to hearing from you!",
        buttonText: "Send us a message",
        isHidden: false,

        contactInfo: {
            phone: "+961  71971287",
            mail: "cyberweavers@outlook.com",
            location: "Saida, LB",
            whatsappMessage: ""
        }
    },
    featureFlags: {

    },
    apiEndpoints: {
        githubBlogs: "/api/github-blogs",
    },
};