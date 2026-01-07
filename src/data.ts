import type { ProfileData, Artwork } from './types';

// Datos del perfil - Gaby Rebeca Alvarado
export const profileData: ProfileData = {
    name: "Gaby Rebeca Alvarado",
    nickname: "Brelart",
    email: "brel4rt@gmail.com",
    phone: "+593 963423707",
    whatsappLink: "https://wa.me/593963423707",
    bio: "Brelart. Diseñadora multimedia junior radicada en Quito, Ecuador. Especializada en fotografía que captura emociones, ilustraciones narrativas, diseño gráfico innovador y contenido digital que inspira. Fundé mi emprendimiento en 2020 grabando videos, y actualmente estudio en La Metro para potenciar mi visión creativa. Mis trabajos destacan por su versatilidad y deseo de comunicar globalmente.",
    profileImage: "/profile-photo.jpg",

    experience: [
        {
            title: "Diseñadora Multimedia Freelance",
            period: "2022 - 2026",
            description: "Fotografía profesional, ilustración digital, diseño gráfico y creación de contenido para redes sociales."
        },
        {
            title: "Diseñadora Gráfica",
            company: "Magiclay",
            period: "2020 - 2026",
            description: "Diseño de marca, mockups y materiales de marketing para tienda online de joyería artesanal."
        },
        {
            title: "Motion Graphics",
            company: "D4VE COVERS - YouTube",
            period: "2023 - 2024",
            description: "Creación de animaciones y gráficos en movimiento para contenido audiovisual del canal."
        }
    ],

    education: [
        {
            degree: "Diseño Multimedia",
            institution: "Instituto Metropolitano de Diseño La Metro",
            period: "2022 - 2026 (Cursando 6to semestre)"
        }
    ],

    skills: [
        { name: "Diseño Multimedia", level: 95 },
        { name: "Fotografía Profesional", level: 90 },
        { name: "Ilustración Digital", level: 95 },
        { name: "Motion Graphics", level: 85 },
        { name: "Creación de Contenido", level: 90 },
        { name: "Branding", level: 85 }
    ],

    languages: [
        { name: "Español", level: "Nativo" },
        { name: "Inglés", level: "B2 / Intermedio" }
    ],

    programs: [
        { name: "Photoshop", icon: "Ps" },
        { name: "Illustrator", icon: "Ai" },
        { name: "Premiere Pro", icon: "Pr" },
        { name: "After Effects", icon: "Ae" },
        { name: "Blender", icon: "Bl" }
    ],

    achievements: [
        "Sesiones fotográficas profesionales y retratos comerciales",
        "Ilustraciones digitales personalizadas y character design",
        "Identidad visual y branding para emprendimientos",
        "Estrategia de contenido para Instagram (Reels, carruseles, stories)",
        "Campañas de branding y contenido viral para redes"
    ],

    socialLinks: [
        { name: "Instagram", url: "https://instagram.com/brelart_", icon: "instagram" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/gabriela-rebeca-alvarado-carri%C3%B3n-597a45377", icon: "linkedin" }
    ]
};

// Categorías de galería con imágenes reales
export interface GalleryCategory {
    id: string;
    title: string;
    description: string;
    artworks: Artwork[];
}

export const galleryCategories: GalleryCategory[] = [
    {
        id: "magiclay",
        title: "Magiclay",
        description: "Tienda online que ofrece joyería artesanal y detalles tejidos a mano. Diseño de marca, mockups de productos y materiales de marketing para redes sociales.",
        artworks: [
            { id: 1, title: "Mockup Magiclay 1", category: "Branding", imageUrl: "/workArt/Magiclay/Diseño sin título (4).jpg" },
            { id: 2, title: "Mockup Magiclay 2", category: "Social Media", imageUrl: "/workArt/Magiclay/Diseño sin título (5).jpg" },
            { id: 3, title: "Mockup Magiclay 3", category: "Producto", imageUrl: "/workArt/Magiclay/Diseño sin título (6).png" },
            { id: 4, title: "Mockup Magiclay 4", category: "Marketing", imageUrl: "/workArt/Magiclay/Diseño sin título (7).jpg" },
        ]
    },
    {
        id: "motion",
        title: "Motion Graphics",
        description: "Animaciones y gráficos en movimiento para proyectos audiovisuales, spots publicitarios y contenido digital.",
        artworks: [
            { id: 5, title: "Spot Coca-Cola", category: "Video", imageUrl: "/workArt/Mothion Graphics/Alvarado_MG_16Dic_SpotCocaCola.mp4", isVideo: true },
            { id: 6, title: "Spot PuroSol", category: "Video", imageUrl: "/workArt/Mothion Graphics/Alvarado_MG_16Dic_SpotPuroSol.mp4", isVideo: true },
            { id: 7, title: "Spot Pringles", category: "Video", imageUrl: "/workArt/Mothion Graphics/Alvarado_MG_19Dic_SpotPringles.mp4", isVideo: true },
        ]
    },
    {
        id: "illustrations",
        title: "Ilustraciones",
        description: "Ilustraciones digitales, diseño de personajes, arte conceptual y animaciones.",
        artworks: [
            { id: 8, title: "Caracol", category: "Ilustración", imageUrl: "/workArt/Illustraciones y animación/Caracol copia.png" },
            { id: 9, title: "Dibujos 1", category: "Ilustración", imageUrl: "/workArt/Illustraciones y animación/Dibujitos_001 copia.jpg" },
            { id: 10, title: "Dibujos 2", category: "Ilustración", imageUrl: "/workArt/Illustraciones y animación/Dibujitos_002 copia.jpg" },
            { id: 11, title: "Dibujos 4", category: "Ilustración", imageUrl: "/workArt/Illustraciones y animación/Dibujitos_004 copia.jpg" },
            { id: 12, title: "Pirata Pete", category: "Personaje", imageUrl: "/workArt/Illustraciones y animación/PIRATA PETE.png" },
            { id: 13, title: "Peter Pan", category: "Personaje", imageUrl: "/workArt/Illustraciones y animación/PeterpanPng.png" },
            { id: 14, title: "Zelda", category: "Fan Art", imageUrl: "/workArt/Illustraciones y animación/zeldaCOLOr.jpg" },
            { id: 15, title: "Autorretrato", category: "Retrato", imageUrl: "/workArt/Illustraciones y animación/Yo copia.jpg" },
            { id: 16, title: "Abejita", category: "Animación", imageUrl: "/workArt/Illustraciones y animación/Abejita (1).gif" },
            { id: 17, title: "Fuego", category: "Animación", imageUrl: "/workArt/Illustraciones y animación/FUEG (2).gif" },
            { id: 18, title: "Camaleón Alice", category: "Animación", imageUrl: "/workArt/Illustraciones y animación/camalice.gif" },
        ]
    },
    {
        id: "photography",
        title: "Fotografía",
        description: "Fotografía de producto, retratos, eventos y captura de momentos especiales.",
        artworks: [
            { id: 19, title: "Baterista", category: "Evento", imageUrl: "/workArt/Fotografía/Baterista.jpg" },
            { id: 20, title: "Retrato 1", category: "Retrato", imageUrl: "/workArt/Fotografía/DSC_0002 copia.jpg" },
            { id: 21, title: "Retrato 2", category: "Retrato", imageUrl: "/workArt/Fotografía/DSC_0009 copia.jpg" },
            { id: 22, title: "Retrato 3", category: "Retrato", imageUrl: "/workArt/Fotografía/DSC_0020.JPG" },
            { id: 23, title: "Retrato 4", category: "Retrato", imageUrl: "/workArt/Fotografía/DSC_0044 copia.jpg" },
            { id: 24, title: "Dama", category: "Retrato", imageUrl: "/workArt/Fotografía/Dama2.jpg" },
            { id: 25, title: "Juan", category: "Retrato", imageUrl: "/workArt/Fotografía/Juan copia.jpg" },
            { id: 26, title: "Martín", category: "Retrato", imageUrl: "/workArt/Fotografía/Martiiin.jpg" },
        ]
    },
    {
        id: "branding",
        title: "Diseño de Marca",
        description: "Identidad visual, logotipos, paletas de color y aplicaciones de marca para emprendimientos y proyectos.",
        artworks: [
            { id: 27, title: "Space Cat - Identidad Completa", category: "Branding", imageUrl: "/workArt/Logo/cat-branding.jpg" },
            { id: 28, title: "Mockups de Marca", category: "Branding", imageUrl: "/workArt/Logo/Mock ups.jpg" },
            { id: 29, title: "Logo Pin", category: "Logo", imageUrl: "/workArt/Logo/Pin logo.jpg" },
            { id: 30, title: "Logo Psi", category: "Logo", imageUrl: "/workArt/Logo/Psi logo.jpg" },
        ]
    }
];

// Mantener artworkData para compatibilidad
export const artworkData: Artwork[] = galleryCategories.flatMap(cat => cat.artworks);
