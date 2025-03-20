import Image from "next/image";
type experienceProps = {
    id: number;
    year: string;
    role: string;
    title: string;
    company: string;
    location: string;
    learnings: string[];
    url: string;
    logo: string;
}

const experienceData :experienceProps[]= [
    {
        id: 1,
        year: "September 2024 - Present",
        role: "Frontend Developer",
        title: "Frontend Developer",
        company: "Unify Tech Solutions Pvt Ltd",
        location: "Sector 67, Mohali, Punjab, India",
        learnings: [
            "Developed responsive UI components using ReactJS and NextJS",
            "Implemented dynamic animations with Tailwind CSS",
            "Proficiently handled API integrations, ensuring seamless data exchange, and played an integral role in reviewing and approving/rejecting junior developers' pull requests on GitHub. Additionally, actively assigned tasks to junior team members in alignment with sprint objectives, fostering efficient project management.",
            "Improved website performance through code optimization"
        ],

    url: "https://www.unifytechsolutions.com/",
    logo: "/images/unifytechsolution.png",
  },
  {
    id: 2,
    year: "July 2022 - May 2023",
    role: "Frontend Developer",
    title: "Frontend Developer",
    company: "Ajiva InfoTech Pvt Ltd",
    location: "Sector 75, Mohali, Punjab, India",
    learnings: [
      "Designed and developed multiple client websites",
      "Collaborated with designers to create engaging user interfaces",
      "Enhanced website SEO and accessibility standards",
    ],
    url: "https://ajivainfotech.com/",
    logo: "/images/ajivalogo.png",
  },
];

const ExperienceCard = ({ data }: { data: experienceProps }) => (
    <div className="w-full relative z-10 group">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-mainColor rounded-full blur-lg -z-10"></div>
        <div className="w-full h-full bg-[#ffffff] bg-opacity-70 flex flex-col items-start justify-between gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 rounded-[30px] md:rounded-[40px] z-20 backdrop-blur-lg hover:bg-opacity-100 ease-out duration-300 transition-all cursor-pointer">
            <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
                <div className="flex items-center gap-2 lg:gap-4 pr-7 rounded-full bg-black">
                    <div className="bg-[#ffffff] rounded-full overflow-hidden p-3 md:p-4 border border-black">

            <div className="flex items-center gap-1">
              <div className="bg-[#3d3d3d] rounded-full p-1">
                <Image
                  src="/images/location.svg"
                  alt="Location"
                  width={12}
                  height={12}
                  className="w-2 md:w-3"
                />
              </div>
              <p className="text-xs sm:text-sm md:text-base text-white">
                {data.location}
              </p>
            </div>
          </div>
        </div>

        <div className="uppercase flex items-center bg-[#ffffff] group-hover:bg-[#fff1cc] text-sm sm:text-base md:text-base lg:text-xl gap-2 md:gap-3 text-black font-semibold px-4 py-3 rounded-full">
          <Image
            src="/images/calender-b.svg"
            alt="calender"
            width={34}
            height={34}
            className="w-5 sm:w-6 md:w-8 lg:w-auto"
          />
          <p>{data.year}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/images/memoji.svg"
          alt="Memoji"
          width={60}
          height={60}
          className="rounded-full w-11 sm:w-12 md:w-13 lg:w-auto aspect-square"
        />
        <h3 className="text-xl md:text-2xl lg:text-3xl text-black font-bold my-1.5 lg:my-2">
          {data.title}
        </h3>
      </div>
      <ul className="text-sm md:text-base lg:text-lg text-[#0c0c0c] list-none">
        {data.learnings.map((item: string, index: number) => (
          <div className="flex items-center gap-2 md:gap-4" key={index}>
            <Image
              src="/images/right-arrow.svg"
              alt="Right Arrow"
              width={34}
              height={34}
              className="w-5 sm:w-6 md:w-8 lg:w-auto"
            />
            <li key={index}>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => (
  <div
    id="experience"
    className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center"
  >
    <div className="relative w-full text-center">
      <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">
        Experience
      </h2>
      <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">
        Experience
      </h3>
    </div>
    <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-6 mt-16">
      {experienceData.map((edu) => (
        <ExperienceCard key={edu.id} data={edu} />
      ))}
    </div>
  </div>
);

export default Experience;
