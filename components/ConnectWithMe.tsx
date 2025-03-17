import Image from "next/image";

type connectLinksProps = {
  name: string;
  image: string;
  link: string;
  color: string;
};

const connectLinks: connectLinksProps[] = [
  {
    name: "LinkedIn",
    image: "/images/linkedin2.svg",
    link: "https://linkedin.com/in/abhishek4536",
    color: "#0190db",
  },
  {
    name: "Instagram",
    image: "/images/instagram.svg",
    link: "https://instagram.com/trusty_abhishek",
    color: "#ff0000",
  },
  {
    name: "Facebook",
    image: "/images/facebook.svg",
    link: "https://www.facebook.com/trusty_abhishek",
    color: "#009bff",
  },
  {
    name: "Telegram",
    image: "/images/telegram.svg",
    link: "https://telegram.com/yourusername",
    color: "#00c7f1",
  },
  {
    name: "Twitter",
    image: "/images/twitter.svg",
    link: "https://twitter.com/yourhandle",
    color: "#111111",
  },
  {
    name: "Skype",
    image: "/images/skype.svg",
    link: "https://join.skype.com/yourusername",
    color: "#00bbd5",
  },
  {
    name: "abhishek9872615721@gmail.com",
    image: "/images/gmail.svg",
    link: "mailto:yourmail@example.com",
    color: "#4285f4",
  },
];

const ConnectWithMe = () => {
  return (
    <div
      id="connect"
      className="main-container w-full md:px-20 lg:px-40 pt-[40px] md:pt-[60px] lg:pt-[80px] flex flex-col items-center"
    >
      <div className="relative w-full text-center">
        <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">
          Connect
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">
          Connect with Me
        </h3>
      </div>
      <div className="w-full flex text-center flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-8 mt-6 sm:mt-10 md:mt-16 p-8">
        {connectLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:bg-[#bbbab5] transition duration-300"
          >
            <Image
              src={link.image}
              alt={link.name}
              width={46}
              height={46}
              loading="lazy"
              className="w-7 sm:w-10 lg:w-11 xl:w-auto object-contain"
            />
            <p
              className={`text-[${link.color}] text-base hidden sm:block md:text-2lg lg:text-3xl xl:text-4xl font-medium`}
            >
              {link.name}
            </p>
          </a>
        ))}
      </div>
      <Image
        src="/images/avatar-macbook.3.svg"
        alt="avatar"
        width={363}
        height={363}
        className="lg:w-auto md:w-[320px] sm:w-[280px] w-[60%]"
      />
    </div>
  );
};

export default ConnectWithMe;
