import Image from "next/image";

const interests = [
  {
    id: 1,
    name: "Listening to Music",
    icon: "/images/music.svg",
    color: "#619ce4",
  },
  {
    id: 2,
    name: "Travelling",
    icon: "/images/travelling.svg",
    color: "#549af0",
  },
  { id: 3, name: "Mountains", icon: "/images/mountain.svg", color: "#6ec17d" },
  { id: 4, name: "Money", icon: "/images/money.svg", color: "#06a048" },
];

const stats = [
  { id: 1, value: "1.7+", label: "Years Experience" },
  { id: 2, value: "10+", label: "Project Completed" },
];

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center "
    >
      <div className="relative w-full text-center">
        <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">
          About Me
        </h2>
        <h3 className="text-3xl md:text-5xzl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">
          About Me
        </h3>
      </div>

      <div className="w-full flex flex-col md:flex-row lg:flex-row items-center gap-8 mt-16">
        <div className="">
          <div className="relative w-full text-center mb-8 ">
            <h2 className="opacity-10 text-4xl md:text-5xl lg:text-6xl font-bold text-outline">
              {" "}
              I Love
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">
              I Love
            </h3>
          </div>
          <div className="w-full flex flex-wrap items-center gap-4">
            {interests.map((interest) => (
              <div
                key={interest.id}
                className="py-1.5 px-4 bg-white flex items-center gap-2 text-base md:text-xl lg:text-2xl font-bold rounded-full"
              >
                <Image
                  src={interest.icon}
                  alt={interest.name}
                  width={60}
                  height={60}
                  className="w-8 md:w-10 lg:w-auto"
                />
                <p className={`text-[${interest.color}]`}>{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row lg:flex-row items-center gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="w-full flex flex-col items-center justify-center text-center bg-[#18140b] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] lg:rounded-[70px] xl:rounded-[80px] p-6 sm:p-8 md:p-10 xl:p-12 aspect-square"
            >
              <h3 className="bg-gradient-to-b text-transparent from-mainColor to-white bg-clip-text font-bold text-4xl sm:text-6xl md:text-[2.7rem] lg:text-6xl xl:text-7xl">
                {stat.value}
              </h3>
              <h3 className="text-white font-bold text-xl sm:text-3xl md:text-xl lg:text-3xl xl:text-4xl leading-6 sm:leading-8">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 mt-4 md:mt-8 sm:p-8 bg-[#181818] text-white text-sm sm:text-base lg:text-lg rounded-[40px] md:rounded-[40px] lg:rounded-[50px] leading-6 sm:leading-7 lg:leading-9">
        <p>
          A passionate Front End Developer with a Master{"'"}s in Computer
          Application and over 4.7 years of experience in crafting captivating
          digital experiences. My expertise lies in leveraging cutting-edge
          technologies such as ReactJS, NextJS, Apollo GraphQL, Redux, React
          Query, and various UI frameworks including Material UI, NextUI, SCSS,
          Tailwind CSS, Chakra UI, and Bootstrap. I take pride in my ability to
          design seamless user interfaces and components that align perfectly
          with the intended aesthetic, creating responsive websites that adapt
          gracefully to any device. My skill set also extends to proficient API
          integration, ensuring the seamless flow of data between the front end
          and back end. In addition, I am known for writing clean,
          well-structured code that not only functions flawlessly but also
          enhances the overall maintainability of projects. With a track record
          of contributing to well-known products like CricTracker, SportsBuzz,
          and Epiko Market, I am committed to pushing the boundaries of web
          development to deliver exceptional digital solutions.
        </p>
      </div>

      <a
        href="contact-me"
        className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl text-mainColor hover:bg-mainColor hover:text-black font-medium border-[1px] border-[#513d09] bg-[#251e0b] py-1.5 md:py-2 lg:py-2.5 px-5 rounded-full mt-8"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 md:w-8 md:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            ></path>
          </svg>
        </div>
        <span>Contact Me</span>
      </a>
    </div>
  );
};

export default AboutMe;
