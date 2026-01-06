import type { ProfileData, Artwork } from './types';

// Profile data - Edit this to update your portfolio content
export const profileData: ProfileData = {
    name: "Gabriela Alvarado",
    nickname: "Brelart",
    email: "brel4rt@gmail.com",
    bio: "Hello, I'm a passionate graphic designer and illustrator creating vibrant visual experiences. I specialize in digital illustration, character design, and multimedia projects that bring ideas to life.",
    profileImage: "/placeholder-profile.jpg",

    experience: [
        {
            title: "Freelance Illustrator",
            period: "2022 - Present",
            description: "Creating custom illustrations and designs for clients worldwide."
        },
        {
            title: "Graphic Designer",
            company: "Creative Studio",
            period: "2020 - 2022",
            description: "Designed branding materials, social media content, and marketing assets."
        }
    ],

    education: [
        {
            degree: "Graphic Design",
            institution: "Design University",
            period: "2018 - 2022"
        }
    ],

    skills: [
        { name: "Digital Illustration", level: 95 },
        { name: "Character Design", level: 90 },
        { name: "Graphic Design", level: 85 },
        { name: "Brand Identity", level: 80 },
        { name: "UI/UX Design", level: 75 }
    ],

    languages: [
        { name: "Español", level: "Native" },
        { name: "English", level: "B2 / Intermediate" }
    ],

    programs: [
        { name: "Photoshop", icon: "Ps" },
        { name: "Illustrator", icon: "Ai" },
        { name: "After Effects", icon: "Ae" },
        { name: "Procreate", icon: "Pr" },
        { name: "Figma", icon: "Fg" },
        { name: "Clip Studio", icon: "Cs" }
    ],

    achievements: [
        "100+ completed illustration projects",
        "Featured artist on design platforms",
        "Collaborated with international clients"
    ],

    socialLinks: [
        { name: "Behance", url: "https://behance.net/", icon: "behance" },
        { name: "Instagram", url: "https://instagram.com/", icon: "instagram" },
        { name: "ArtStation", url: "https://artstation.com/", icon: "artstation" }
    ]
};

// Generate placeholder artwork for gallery
// Replace these with your actual artwork images
export const artworkData: Artwork[] = [
    { id: 1, title: "Digital Portrait", category: "Illustration", imageUrl: "https://picsum.photos/seed/art1/600/800" },
    { id: 2, title: "Character Concept", category: "Character Design", imageUrl: "https://picsum.photos/seed/art2/600/600" },
    { id: 3, title: "Brand Identity", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art3/800/600" },
    { id: 4, title: "Fantasy Scene", category: "Illustration", imageUrl: "https://picsum.photos/seed/art4/600/900" },
    { id: 5, title: "Logo Design", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art5/600/600" },
    { id: 6, title: "Character Sheet", category: "Character Design", imageUrl: "https://picsum.photos/seed/art6/800/1000" },
    { id: 7, title: "Digital Painting", category: "Illustration", imageUrl: "https://picsum.photos/seed/art7/700/500" },
    { id: 8, title: "Poster Design", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art8/500/700" },
    { id: 9, title: "Character Study", category: "Character Design", imageUrl: "https://picsum.photos/seed/art9/600/800" },
    { id: 10, title: "Abstract Art", category: "Illustration", imageUrl: "https://picsum.photos/seed/art10/800/600" },
    { id: 11, title: "Book Cover", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art11/500/800" },
    { id: 12, title: "Fantasy Character", category: "Character Design", imageUrl: "https://picsum.photos/seed/art12/600/750" },
    { id: 13, title: "Editorial Illustration", category: "Illustration", imageUrl: "https://picsum.photos/seed/art13/700/700" },
    { id: 14, title: "Social Media Design", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art14/600/600" },
    { id: 15, title: "Creature Design", category: "Character Design", imageUrl: "https://picsum.photos/seed/art15/650/850" },
    { id: 16, title: "Concept Art", category: "Illustration", imageUrl: "https://picsum.photos/seed/art16/900/600" },
    { id: 17, title: "Album Cover", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art17/600/600" },
    { id: 18, title: "Character Portrait", category: "Character Design", imageUrl: "https://picsum.photos/seed/art18/550/750" },
    { id: 19, title: "Landscape Art", category: "Illustration", imageUrl: "https://picsum.photos/seed/art19/800/500" },
    { id: 20, title: "Packaging Design", category: "Graphic Design", imageUrl: "https://picsum.photos/seed/art20/600/700" }
];
