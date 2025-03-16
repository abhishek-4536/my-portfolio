import Image from "next/image";

const educationData = [
    {
        id: 1,
        year: "2017 - 2020",
        degreeType: "Graduation",
        degree: ["Bachelor’s Degree", "BCA"],
        title: "Bachelor of Computer Applications",
        university: "Veer Narmad South Gujarat University",
        location: "Surat, Gujarat, India",
    },
    {
        id: 2,
        year: "2020 - 2022",
        degreeType: "Post Graduation",
        degree: ["Master’s Degree", "MCA"],
        title: "Master of Computer Applications",
        university: "Parul University",
        location: "Vadodara, Gujarat, India",
    }
];

const EducationCard = ({ data }: any) => (
    <div className="w-full relative z-10 group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square bg-mainColor rounded-full blur-lg -z-10"></div>
        <div className="w-full h-full bg-[#ffffff] bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-2 md:gap-3 lg:gap-4 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg hover:bg-opacity-100 ease-out duration-300 transition-all cursor-pointer">
            <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
                <div className="flex items-center bg-black text-sm sm:text-base md:text-base lg:text-xl gap-3 text-mainColor font-bold px-3 py-2 rounded-full">
                    <Image src="/images/calender.svg" alt="Calendar" width={34} height={34} className="w-5 sm:w-6 md:w-8 lg:w-auto" />
                    <p>{data.year}</p>
                </div>
                <div className="flex items-center bg-[#ffffff] group-hover:bg-[#fff1cc] text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-black font-semibold px-3 py-2 rounded-full">
                    <Image src="/images/degree.svg" alt="Degree" width={34} height={34} className="w-5 sm:w-6 md:w-8 lg:w-auto" />
                    <p>{data.degreeType}</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6">
                {data.degree?.map((elm:any, index:any) => (
                    <div key={index} className="bg-[#ffffff] group-hover:bg-[#e6e6e6] text-sm md:text-base lg:text-xl text-black font-semibold py-2 lg:px-5 px-4 rounded-full">
                        <p>{elm}</p>
                    </div>
                ))}
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-bold my-1.5 lg:my-2">{data.title}</h3>
            <div className="flex items-center gap-4">
                <div className="bg-[#ffffff] rounded-full p-2 border border-none group-hover:bg-[#fff1cc] group-hover:border-[#e8e1d1]">
                    <Image src="/images/college.svg" alt="University" width={30} height={30} />
                </div>
                <p className="text-sm md:text-base lg:text-xl text-[#0c0c0c]">{data.university}</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-[#ffffff] rounded-full p-2 border border-none group-hover:bg-[#fff1cc] group-hover:border-[#e8e1d1]">
                    <Image src="/images/location.svg" alt="Location" width={30} height={30} />
                </div>
                <p className="text-sm md:text-base lg:text-xl text-[#0c0c0c]">{data.location}</p>
            </div>
        </div>
    </div>
);

const Education = () => (
    <div id="education" className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center">
        <div className="relative w-full text-center">
            <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">Education</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">Education</h3>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-16">
            {educationData.map((edu) => (
                <EducationCard key={edu.id} data={edu} />
            ))}
        </div>
    </div>
);

export default Education;