import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG_EN: SiteConfig = {
    title: "Oscar Orellana - Web Developer",
    author: "Oscar Alejandro Orellana Morán",
    description:
        "Salvadoran. Software Development Technician and Engineering student. Specialized in web development, with +3 years of experience.",
    lang: "en",
    siteLogo: "/oscar.jpg",
    navLinks: [
        { text: "Experience", href: "#experience" },
        { text: "Education", href: "#education" },
        { text: "Tech Stack", href: "#techstack" },
        { text: "Projects", href: "#projects" },
        { text: "About", href: "#about" },
    ],
    socialLinks: [
        { text: "LinkedIn", href: "https://www.linkedin.com/in/oscar-orellana-moran/" },
        { text: "Github", href: "https://github.com/oscarale28" },
    ],
    canonicalURL: "https://oscar-orellana.vercel.app/en",
};

export const SITE_CONTENT_EN: SiteContent = {
    hero: {
        name: "Oscar Orellana",
        specialty: "Web Developer",
        summary:
            "Salvadoran. Software Development Technician and Engineering student. Specialized in web development, with over 3 years of experience participating in national and Central American scale projects, developing impactful and efficient solutions for businesses and organizations.",
        email: "oscarore284@gmail.com",
    },
    experience: [
        {
            company: "Dirección de Ordenamiento Territorial (DOT) El Salvador",
            position: "Full-Stack Developer Intern",
            startDate: "August 2025",
            endDate: "Present",
            summary: [
                "Automation of processes related to professional registration on the web platform, increasing the responsiveness of area managers.",
                "Restructuring and improving the readability of existing front-end and API code.",
            ],
        },
        {
            company: "Echo Technologies El Salvador",
            position: "Web Developer",
            startDate: "November 2022",
            endDate: "Present",
            summary: [
                "Modernization of banking platform through the development of a digital onboarding for savings account opening.",
                "Reconstruction of electronic channels for financial cooperative, improving user experience and banking service delivery to its members.",
                "Streamlining processes within financial cooperative's member assembly through the construction of an administrative portal.",
                "Development of administrative module for personnel management across different areas and branches of a commercial company at the Central American level.",
                "Integration of new modules, corrections, and performance improvements within the platform responsible for the operational management of an aeronautical institution.",
            ],
        },
    ],
    education: [
        {
            institution: "Kodigo Academy",
            degree: "Full Stack Jr. Web Development Bootcamp",
            startDate: "May 2025",
            endDate: "November 2025",
            achievements: [
                "Creation of a real-time chatbot web application that allows users to converse with different fictional characters with personalized personalities, integrating OpenAI models through Vercel AI SDK to manage AI-powered message generation.",
            ],
        },
        {
            institution: "Universidad Francisco Gavidia",
            degree: "Software Development Engineering",
            startDate: "2023",
            endDate: "Present",
            achievements: [
                "Led the frontend team for the development of a service platform for students and staff, designed to streamline and modernize the university's daily operations. Established the complete technical framework and development guidelines using cutting-edge web technologies.",
                "Managed and administered self-hosted cloud environments for all application deployments.",
            ],
        },
        {
            institution: "Instituto Técnico Ricaldone",
            degree: "Technical Vocational High School in Software Development",
            startDate: "2020",
            endDate: "2022",
            achievements: [
                "Developed a full-stack inventory and billing application for a school and office supply retailer to digitize and optimize their core business processes. Winner of first prize at the annual project fair.",
                "Member of the Software Development student committee, participating in programming workshops and talks.",
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
            summary: "Real-time chatbot to converse with Star Wars characters. Integrates OpenAI models through Vercel AI SDK.",
            linkPreview: "https://d1-a-l0g.vercel.app/",
            linkSource: "https://github.com/oscarale28/groovy-app",
            image: "/d1-a-l0g.png",
            technologies: ["devicon:react", "logos:openai-icon", "devicon:vercel", "devicon:firebase"],
        },
        {
            name: "La Posada",
            summary: "Full-stack application for searching, booking and managing accommodation places in El Salvador.",
            linkPreview: "https://la-posada.fqstudio.dev/",
            linkSource: "https://github.com/oscarale28/fsj29-la-posada-full-stack",
            image: "/la-posada.png",
            technologies: ["devicon:nextjs", "devicon:php", "devicon:mysql", "devicon:docker"],
        },
        {
            name: "U-Pass",
            summary: "PWA proposal for Francisco Gavidia University, an application with centralized services for attendance tracking, study space reservation and automatic parking payment.",
            linkSource: "https://github.com/oscarale28",
            technologies: ["devicon:nextjs", "devicon:spring", "devicon:postgresql", "devicon:figma", "devicon:docker"],
            inProgress: true,
        },
    ],
    about: {
        description: `
      I'm Oscar Orellana, a Web Developer passionate about creating exceptional digital experiences.
      I currently work as a React and Next.js specialist, where I've contributed to modernizing banking platforms, rebuilding electronic channels, and developing administrative portals.
      My focus is on designing and developing intuitive user interfaces, integrating functional modules, and continuously improving internal process efficiency. I enjoy working at the intersection where creativity meets technology, always seeking to build robust, secure, and scalable applications.
    `,
        image: "/oscar.jpg",
    },
};

