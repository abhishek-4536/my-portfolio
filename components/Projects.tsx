import Image from "next/image";
const skills = [
    // { name: "HTML5", image: "/images/html.svg" },
    // { name: "CSS3", image: "/images/css.svg" },
    // { name: "SCSS", image: "/images/scss.svg" },
    { name: "JavaScript", image: "/images/js.svg" },
    { name: "NextJS", image: "/images/nextjs.svg" },
    { name: "React Hook Forms", image: "/images/react-hook-form.svg" },
    { name: "Tailwind CSS", image: "/images/tailwind.svg" },
    { name: "Framer Motion", image: "/images/framer-motion.svg" },
    // { name: "Styled Components", image: "/images/styled-components.svg" },
    // { name: "React Query", image: "/images/react-query.svg" },
];
const projectsData = [
    {
        id: 1,
        title: "Modern Resume / CV Figma Template",
        description: "Modern Resume / CV Figma Template Designed by me",
        price: "$10",
        buttonLabel: "Purchase Design",
        image: "/images/epiko-market.svg"
    },
    {
        id: 2,
        title: "Modern Portfolio UI Figma Design",
        description: "Modern Portfolio Website UI Figma Design with Light / Dark Mode",
        price: "$15",
        buttonLabel: "Purchase Design",
        image: "/images/epiko-market.svg"
    },
    {
        id: 3,
        title: "Modern Portfolio Website Code",
        description: "Modern Portfolio Website with Dark / Light Mode - Code",
        price: "$35",
        buttonLabel: "Purchase Code",
        image: "/images/epiko-market.svg"
    }
];

const ProjectCard = ({ project }: any) => (
    <div className="cursor-pointer bg-white rounded-3xl p-2 sm:p-3 shadow-lg w-full max-w-sm hover:bg-[#FFD54F] transition duration-300">
        <div className="bg-black rounded-xl overflow-hidden mb-4">
            <Image src={project.image} alt={project.title} width={400} height={250} className="w-full" />
        </div>
        <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{project.title}</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
            {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-mainColor hover:none">
                    <Image
                        src={skill.image}
                        alt={skill.name}
                        width={6}
                        height={6}
                        className="w-3 sm:w-4 lg:w-5 xl:w-auto object-contain dark:hidden"
                    />
                    <p className="text-black text-xs sm:text-sm font-medium">
                        {skill.name}
                    </p>
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center mt-2">
            <a href="#" target="_blank" className="text-white px-4 py-2 rounded-full text-lg font-bold">
                <Image src="/images/githubb.svg" alt="git" width={34} height={34} className="w-5 sm:w-6 md:w-8 lg:w-auto" />
            </a>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition duration-300 ease-in-out text-lg md:text-xl lg:text-2xl "
            >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="md:w-6 md:h-6 w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path></svg>
                </div>
            </a>
        </div>
    </div>
);


const Projects = () => (
    <div id="projects" className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
        <div className="relative w-full text-center">
            <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">Project's</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">Project's</h3>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-6 group">
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    </div>
);

export default Projects;
