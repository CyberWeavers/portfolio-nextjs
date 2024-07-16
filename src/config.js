import { action } from "mobx";
import { notFound } from "next/navigation";

export const config = {
    content: {
        logo: "/CyberWeavers.png",
        brand: "Cyber Weavers",
        hero: {
            heroHeadLine: "Empowering Websites for Engaging User Experiences",
            heroSubHeadLine: "",
            parallaxEffect: false,
            heroImageUrl: "/heroImage2.png",
            parallaxImages:[
                'parallax-effect/0.png',
                'parallax-effect/1.png',
                'parallax-effect/2.png',
                'parallax-effect/3.png',
                'parallax-effect/4.png',
            ],

            heroActionText: "",
            highlightedHeadlineWords: ["Websites", "Engaging", "Experiences"],
            breakLineAfter: ["Websites", "User"],
        },
        topPageVectors: "https://img.freepik.com/free-photo/water-background_23-2147795245.jpg?t=st=1720859708~exp=1720863308~hmac=99c4fa2d5d8e8936aeb4d90e8bbf33d90352c957703dbb0a9581eb928014cf8b&w=740",
        notFoundURL: "/notFound.png",

        coreFeatures: {
            isHidden: false,
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
            title: "ABOUT US",
            description: "We are a team of dedicated professionals committed to delivering innovative web solutions. Our expertise spans across various technologies, ensuring we can meet diverse client needs.",
            buttonText: "CONTACT NOW",
            buttonAction: "#contact",
            aboutImageURL: "/aboutUs.png",
        },

        projects: {
            isHidden: false,
            data: [
                {
                    imageUrl: "/bookifai.jpeg",
                    title: "Bookifai",
                    description: "Ever wanted to connect with the characters in your favourite book and chat with them!? Bookifai allows you to just do that! You upload your favorite book and we extract the characters and create a chatbots for you to interact with them using discord!",
                    actionLink: "mailto:rabeekiblawi@gmail.com",
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
            isHidden: true,
            data: [
                {
                    title: "Digital Marketing Strategy",
                    description: "Craft tailored digital marketing strategies that align with your business goals. From SEO optimization to social media campaigns, we enhance your online presence and drive engagement.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/digital-marketing-services",
                    actionText: "Learn More",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    title: "Cloud Computing Solutions",
                    description: "Implement scalable cloud solutions tailored to your organization's needs. Whether migrating to the cloud or optimizing existing infrastructure, we ensure reliability and cost-efficiency.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/cloud-computing-services",
                    actionText: "Get Started",
                    isHidden: false,
                    visibleHome: true
                },
                {
                    title: "Virtual Reality Development",
                    description: "Create immersive VR experiences that captivate your audience. Our team specializes in VR application development, from concept to deployment on leading platforms.",
                    icon: "/icons/vrIcon.svg",
                    actionLink: "https://example.com/vr-development-services",
                    actionText: "See Our Work",
                    isHidden: false,
                    visibleHome: true
                }
            ]
        },
        
        solutions: {
            isHidden: false,
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
                    visibleHome: true
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
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    icon: "/icons/MobileWeb.svg",
                    title: "Web & Mobile Apps",
                    description: "We develop custom, user-friendly web and mobile applications. Our solutions are designed to meet your specific business needs, offering seamless functionality across devices and platforms",
                    actionLink: "#",
                    actionText: "More Info",
                    isHidden: false,
                    visibleHome: true
                },
            ]
        },
        team: {
            isHidden: false,
            members: [
                {
                    imageUrl: "/team/diaa.jpg",
                    title: "Diaa AbuAllul",
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
                    visibleHome: true
                },
                {
                    imageUrl: "/team/shahbaz.jpg",
                    title: "Mohammad Shahbaz",
                    description: "Backend, Mobile, and every thing low level. Currently focusing on mobile and reverse engineering",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mustafaZabet.png",
                    title: "Mustafa Zabet",
                    description: "Software engineer specializing in front-end development and UI/UX design.",
                    visibleHome: true
                },
                {
                    imageUrl: "",
                    title: "Nizar Sadek",
                    description: "Creative Game level artist/designer experienced in creating high quality optimized game props and enviroments.",
                    visibleHome: true
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
            isHidden: false,
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
        customerReviews: {
            isHidden: false,
            customer: [
                {
                    imageUrl: "/team/diaa.jpg",
                    title: "Stella Larson",
                    description: "The store experience was fantastic! The user interface was intuitive and visually appealing. I loved how easy it was to find and purchase products.",
                    visibleHome: true,
                },
                {
                    imageUrl: "/team/hadiDiab.png",
                    title: "Nick Jhonson",
                    description: "Incredible attention to detail in the store design. The checkout process was smooth, and I appreciated the personalized product recommendations.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/karloRajić.png",
                    title: "Glen Davies",
                    description: "The store's layout and functionality exceeded my expectations. It was a pleasure to shop here, and I'll definitely be returning!",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mohammadOthman.png",
                    title: "Emily Thompson",
                    description: "I was impressed by how well the store worked on both my desktop and mobile. The consistent experience across devices made shopping a breeze.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/shahbaz.jpg",
                    title: "Michael Chen",
                    description: "The store's performance was outstanding. Pages loaded quickly, and the search function helped me find exactly what I needed in no time.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/mustafaZabet.png",
                    title: "Sarah Johnson",
                    description: "I love how the store showcases products. The high-quality images and detailed descriptions made me confident in my purchases.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/rabeeQablawi.png",
                    title: "Alex Rodriguez",
                    description: "The customer service integration within the store is top-notch. I had a question, and the live chat feature provided instant, helpful assistance.",
                    visibleHome: true
                },
                {
                    imageUrl: "/team/rabeeQablawi.png",
                    title: "Lisa Wong",
                    description: "This store experience sets a new standard for online shopping. The seamless navigation and beautiful design made my shopping experience enjoyable and efficient.",
                    visibleHome: true
                }
            ]
        },
        testimonial:{
            isHidden: false,
            testimonialData :[
                {
                    text: "Hasan's skills in web development are outstanding. We worked together on building websites for four international NGOs, and his creativity and professionalism were impressive. He's a reliable teammate and a valuable addition to any project.",
                    author: "1Abdallah Kpbrosli",
                    title: "CDMP"
                },
                {
                    text: "Hasan is a WordPress magician, a wizard of his craft. Whenever I have a WordPress project, no matter how complicated, I know I can count on him to take on and deliver what is beyond my expectations. HIGHLY recommended.",
                    author: "2Amadeus Awad",
                    title: "Business Coach - Founder of alt^ people"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "3Aghny Jreige",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "4Aghny Jreige",
                    title: "Brand Strategist - Mute Designs"
                },
                {
                    text: "Hasan is an exceptional developer with expertise in both back-end and front-end development. His collaborative spirit and patience make him a pleasure to work with. He's more than just a coder; he's a great team player.",
                    author: "5Aghny Jreige",
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
        facebook: "https://facebook.com",
        instagram: "",
        tiktok: "",
        youtube: "",
    },
    contact: {
        imageUrl: "/contactUs.png",
        title: "Get in Touch",
        description: "We're here to help and answer any question you might have. We look forward to hearing from you!",
        buttonText: "Send us a message",
        isHidden: false,

        contactInfo: {
            phone: "+961  71971287",
            mail: "choroid.studios@gmail.com",
            location: "Saida, LB",
            whatsappMessage:""
        }
    },
    featureFlags: {

    },
    apiEndpoints: {
        githubBlogs: "/api/github-blogs",
    },
};
