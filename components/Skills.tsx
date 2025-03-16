import Image from "next/image";

const skills = [
    { name: "HTML5", image: "/images/html.svg" },
    { name: "CSS3", image: "/images/css.svg" },
    { name: "SCSS", image: "/images/scss.svg" },
    { name: "Bootstrap", image: "/images/bootstrap.svg" },
    { name: "JavaScript", image: "/images/js.svg" },
    { name: "ReactJS", image: "/images/reactjs.svg" },
    { name: "Redux", image: "/images/redux.svg" },
    { name: "Firebase", image: "/images/firebase.svg" },
    { name: "NextJS", image: "/images/nextjs.svg" },
    { name: "React Hook Forms", image: "/images/react-hook-form.svg" },
    { name: "Tailwind CSS", image: "/images/tailwind.svg" },
    { name: "Material UI", image: "/images/materialui.svg" },
    { name: "Chakra UI", image: "/images/chakraui.svg" },
    { name: "Semantic UI", image: "/images/semanticui.svg" },
    { name: "Ant Design", image: "/images/ant-design.svg" },
    { name: "GraphQL", image: "/images/graphql.svg" },
    { name: "Framer Motion", image: "/images/framer-motion.svg" },
    { name: "Styled Components", image: "/images/styled-components.svg" },
    { name: "React Query", image: "/images/react-query.svg" },
    { name: "GIT", image: "/images/git.svg" }
];

const Skills = () => {
    return (
        <div id="skills" className="main-container w-full md:px-10 lg:px-20 py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
            <div className="relative w-full text-center">
                <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">Skills</h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">Skills</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
                        <Image
                            src={skill.image}
                            alt={skill.name}
                            width={46}
                            height={46}
                            className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain dark:hidden"
                        />
                        <p className="text-black text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
