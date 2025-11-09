import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG_ES: SiteConfig = {
    title: "Oscar Orellana - Desarrollador Web",
    author: "Oscar Alejandro Orellana Morán",
    description:
        "Salvadoreño. Técnico en Desarrollo de Software y estudiante de Ingeniería. Especializado en desarrollo web, con +3 años de experiencia.",
    lang: "es",
    siteLogo: "/oscar.jpg",
    navLinks: [
        { text: "Experiencia", href: "#experience" },
        { text: "Educación", href: "#education" },
        { text: "Tech Stack", href: "#techstack" },
        { text: "Proyectos", href: "#projects" },
        { text: "Sobre mí", href: "#about" },
    ],
    socialLinks: [
        { text: "LinkedIn", href: "www.linkedin.com/in/oscar-orellana-421942206" },
        { text: "Github", href: "https://github.com/oscarale28" },
    ],
    canonicalURL: "https://oscar-orellana.vercel.app",
};

export const SITE_CONTENT_ES: SiteContent = {
    hero: {
        name: "Oscar Orellana",
        specialty: "Desarrollador Web",
        summary:
            "Salvadoreño. Técnico en Desarrollo de Software y estudiante de Ingeniería. Especializado en desarrollo web, con +3 años de experiencia participando en proyectos a escala nacional y centroamericana, desarrollando soluciones de impacto y eficiencia para empresas y organizaciones.",
        email: "oscarore284@gmail.com",
    },
    experience: [
        {
            company: "Dirección de Ordenamiento Territorial (DOT) El Salvador",
            position: "Pasante de Desarrollador Full-Stack",
            startDate: "Agosto 2025",
            endDate: "Actual",
            summary: [
                "Automatización de procesos relacionados con el registro de profesionales en la plataforma web, lo que aumenta la capacidad de respuesta de los gestores de área.",
                "Reestructuración y mejora de la legibilidad del código existente de front-end y APIs.",
            ],
        },
        {
            company: "Echo Technologies El Salvador",
            position: "Desarrollador Web",
            startDate: "Noviembre 2022",
            endDate: "Actual",
            summary: [
                "Modernización de plataforma de banco mediante el desarrollo de un onboarding digital para apertura de cuentas de ahorro.",
                "Reconstrucción de canales electrónicos de cooperativa financiera, mejorando la experiencia de usuario y la prestación de servicios bancarios a sus asociados.",
                "Agilización de procesos dentro de asamblea de asociados de cooperativa financiera a través de la construcción de portal administrativo.",
                "Desarrollo de módulo administrativo para gestión de personal entre distintas áreas y sucursales de empresa comercial a nivel centroamericano.",
                "Integración de nuevos módulos, correcciones y mejoras de rendimiento dentro de plataforma encargada de manejo operativo de institución aeronáutica.",
            ],
        },
    ],
    education: [
        {
            institution: "Academia Kodigo",
            degree: "Bootcamp Desarrollo web Full Stack Jr.",
            startDate: "Mayo 2025",
            endDate: "Noviembre 2025",
            achievements: [
                "Creación de una aplicación web de chatbot en tiempo real que permite a los usuarios conversar con diferentes personajes ficticios con personalidades personalizadas, integrando modelos OpenAI a través de Vercel AI SDK para gestionar la generación de mensajes impulsados por IA.",
            ],
        },
        {
            institution: "Universidad Francisco Gavidia",
            degree: "Ingeniería en Desarrollo de Software",
            startDate: "2023",
            endDate: "Presente",
            achievements: [
                "Dirigí el equipo de frontend para el desarrollo de una plataforma de servicios para estudiantes y personal, diseñada para agilizar y modernizar las operaciones diarias de la universidad. Establecí el marco técnico completo y las directrices de desarrollo utilizando tecnologías web de vanguardia.",
                "Gestioné y administré entornos de nube autohospedados para todas las implementaciones de aplicaciones.",
            ],
        },
        {
            institution: "Instituto Técnico Ricaldone",
            degree: "Bachillerato Técnico Vocacional en Desarrollo de Software",
            startDate: "2020",
            endDate: "2022",
            achievements: [
                "Desarrollé una aplicación de inventario y facturación full-stack para un minorista de material escolar y de oficina con el fin de digitalizar y optimizar sus procesos empresariales básicos. Ganador del primer premio en la feria anual de proyectos.",
                "Miembro del comité de estudiantes de Desarrollo de Software, participando en talleres y charlas de programación.",
            ],
        },
    ],
    techStack: {
        frontend: [
            { name: "React", icon: "devicon:react" },
            { name: "TypeScript", icon: "devicon:typescript" },
            { name: "Next.js", icon: "devicon:nextjs" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
            { name: "Angular", icon: "devicon:angular" },
            { name: "Flutter", icon: "devicon:flutter" },
            { name: "Figma", icon: "devicon:figma" },
        ],
        backend: [
            { name: "Java", icon: "devicon:java" },
            { name: "PHP", icon: "devicon:php" },
            { name: "PostgreSQL", icon: "devicon:postgresql" },
            { name: "Express.js", icon: "devicon:express" },
            { name: "Quarkus", icon: "devicon:quarkus" },
            { name: "Cursor", icon: "simple-icons:cursor" },
            { name: "Docker", icon: "devicon:docker" },
            { name: "Supabase", icon: "devicon:supabase" }
        ],
    },
    projects: [
        {
            name: "D1-A-L0G",
            summary: "Chatbot en tiempo real para conversar con personajes de Star Wars. Integra modelos de OpenAI a través de Vercel AI SDK.",
            linkPreview: "https://d1-a-l0g.vercel.app/",
            linkSource: "https://github.com/oscarale28/groovy-app",
            image: "/d1-a-l0g.png",
            technologies: ["devicon:react", "logos:openai-icon", "devicon:vercel", "devicon:firebase"],
        },
        {
            name: "La Posada",
            summary: "Aplicación full-stack para la búsqueda, reserva y administración de lugares de alojamiento en El Salvador.",
            linkPreview: "https://la-posada.fqstudio.dev/",
            linkSource: "https://github.com/oscarale28/fsj29-la-posada-full-stack",
            image: "/la-posada.png",
            technologies: ["devicon:nextjs", "devicon:php", "devicon:mysql", "devicon:docker"],
        },
        {
            name: "U-Pass",
            summary: "Propuesta PWA para la Universidad Francisco Gavidia, una aplicación con servicios centralizados de marcado de asistencia, reserva de espacios de estudio y pago automático por uso de estacionamiento.",
            linkSource: "https://github.com/oscarale28",
            technologies: ["devicon:nextjs", "devicon:spring", "devicon:postgresql", "devicon:figma", "devicon:docker"],
            inProgress: true,
        },
    ],
    about: {
        description: `
      Soy Oscar Orellana, un Desarrollador Web apasionado por crear experiencias digitales excepcionales.
      Actualmente trabajo como especialista en React y Next.js, donde he contribuido a modernizar plataformas bancarias, reconstruir canales electrónicos y desarrollar portales administrativos.
      Mi enfoque se centra en el diseño y desarrollo de interfaces de usuario intuitivas, la integración de módulos funcionales y la mejora continua de la eficiencia de procesos internos. Disfruto trabajando en la intersección donde la creatividad se encuentra con la tecnología, siempre buscando construir aplicaciones robustas, seguras y escalables.
    `,
        image: "/oscar.jpg",
    },
};

