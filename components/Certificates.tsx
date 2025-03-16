import Image from "next/image";

const certificationData = [
    {
        id: 1,
        year: "Issued: March 2024",
        title: "ReactJS Advanced Certification",
        issuedBy: "LinkedIn Learning",
        location: "Online",
        achievements: [
            "Mastered advanced React concepts, including custom hooks and performance optimizations",
            "Built scalable web applications using Next.js and Tailwind CSS",
            "Successfully completed comprehensive project-based assessments"
        ],
        url: "https://linkedin-learning.pxf.io/certification/reactjs",
        logo: "/images/linkedin.svg"
    },
    {
        id: 2,
        year: "Issued: July 2023",
        title: "JavaScript Mastery Certification",
        issuedBy: "Udemy",
        location: "Online",
        achievements: [
            "Acquired in-depth knowledge of JavaScript ES6+ features",
            "Demonstrated expertise in asynchronous programming and API integrations",
            "Completed multiple hands-on projects to apply key concepts"
        ],
        url: "https://udemy.com/certificate/javascript",
        logo: "/images/udemy.svg"
    }
];

const CertificationCard = ({ data }: any) => (
    <div className="w-full relative z-10 group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-mainColor rounded-full blur-lg -z-10"></div>
        <div className="w-full h-full bg-[#ffffff] bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg hover:bg-opacity-100 ease-out duration-300 transition-all cursor-pointer">
            <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
                <div className="flex items-center gap-2 lg:gap-4 pr-7 rounded-full bg-black">
                    <div className="bg-[#ffffff] rounded-full overflow-hidden p-3 md:p-3 lg:p-4 border border-black">
                        <Image src={data.logo} alt={data.issuedBy} loading="lazy" width={40} height={40} className="w-6 md:w-8 lg:w-10 p-0.5" />
                    </div>
                    <div className="flex flex-col items-start lg:gap-1">
                        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-mainColor">{data?.issuedBy}</h1>
                        {/* <div className="flex items-center gap-1">
                            <div className="bg-[#3d3d3d] rounded-full p-1">
                                <Image src="/images/location.svg" alt="Location" width={12} height={12} className="w-2 md:w-3" />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white">{data.location}</p>
                        </div> */}
                    </div>
                </div>

                <div className="uppercase flex items-center text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-black font-semibold px-4 py-3 rounded-full">
                    <Image src="/images/certificate.svg" alt="certificate" loading="lazy" width={60} height={60} className="w-10 md:w-12 lg:w-auto" />
                </div>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-bold">{data.title}</h3>

            <ul className="text-sm md:text-base lg:text-lg text-[#0c0c0c] list-none">
                {data.achievements.map((item: string, index: number) => (
                    <div className="flex items-center gap-2 md:gap-4" key={index}>
                        <Image src="/images/right-arrow.svg" alt="Right Arrow" width={34} height={34} className="w-5 sm:w-6 md:w-8 lg:w-auto" />
                        <li>{item}</li>
                    </div>
                ))}
            </ul>

            <a
                href={data?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-full border border-black text-black hover:bg-black hover:text-white transition duration-300 ease-in-out text-lg md:text-xl lg:text-2xl "
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 md:w-8 md:h-8"
                    >
                        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
                        <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <span>View</span>
            </a>
        </div>
    </div>
);

const Certifications = () => (
    <div id="certifications" className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
        <div className="relative w-full text-center">
            <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">Certifications</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">
                Certifications
            </h3>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
            {certificationData.map((cert) => (
                <CertificationCard key={cert.id} data={cert} />
            ))}
        </div>
    </div>
);

export default Certifications;
