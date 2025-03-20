"use client";
import Image from "next/image";
import {sendMessage } from "../server/action";

interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
  icon?: "user" | "mail" | "phone" | "subject" | string; // add more as needed
}

const ContactMe = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Extract form data dynamically
    const formData = {
      fullName: (e.currentTarget.elements.namedItem("fullName") as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
      subject: (e.currentTarget.elements.namedItem("subject") as HTMLInputElement).value,
      phone: (e.currentTarget.elements.namedItem("phone") as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLInputElement).value,
    };
  
    console.log("Received form data:", formData);
  
    try {
      // Send the message using the sendMessage function
      const result = await sendMessage();
      console.log(result, "************************");
    } catch (error) {
      console.error(error, "************************");
    }
  };
  return (
    <div
      id="contact-me"
      className="relative main-container w-full my-[40px] md:my-[60px] lg:my-[80px] bg-white flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]"
    >
      <div className="relative w-full text-center ">
        <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">
          Contact Me
        </h2>
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          Contact Me
        </h3>
      </div>

      <div className="w-full flex flex-col items-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-[30px] md:rounded-[40px] lg:rounded-[50px]">
        <form className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full flex flex-col items-start gap-8"  onSubmit={handleSubmit}>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5" >
            <InputField
              type="text"
              placeholder="Full Name *"
              name="fullName"
              icon="user"
            />

            <InputField
              type="email"
              placeholder="Email *"
              name="email"
              icon="mail"
            />

            <InputField
              type="tel"
              placeholder="Phone *"
              name="phone"
              icon="phone"
            />

            <InputField
              type="text"
              placeholder="Subject *"
              name="subject"
              icon=""
            />
          </div>

          <div className="w-full flex flex-col items-start gap-2 rounded-3xl">
            <textarea
              placeholder="Your Message *"
              name="message"
              className="w-full h-60 px-14 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl py-3.5 sm:py-4 md:py-5 lg:py-6 border bg-[#f3f3f3] rounded-3xl outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex flex-row items-center gap-2 bg-mainColor text-black py-4 px-5 sm:px-6 md:px-7 lg:px-8 md:rounded-[40px] lg:rounded-[50px] rounded-[40px] hover:bg-opacity-90 transition-all duration-300 text-base lg:text-2xl hover:bg-[#f3f3f3] hover:text-mainColor font-bold hover:border hover:border-mainColor"
          >
            <span>Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M2 21l21-10L2 2v7l15 2-15 2v7z" />
            </svg>
          </button>
        </form>
      </div>
      <Image
        src="/images/memoji-with-imac.svg"
        width={435}
        height={435}
        alt="contact-me"
        className="absolute bottom-0 right-2 sm:right-5 lg:right-16 w-[200px] sm:w-[250px] md:w-[300px] lg:w-auto"
      />
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ type, placeholder, name, icon }: InputFieldProps) => (
  <div className="w-full flex flex-col items-start gap-2">
    <div className="w-full flex items-center bg-[#f3f3f3] gap-2 sm:gap-3 md:gap-4 lg:gap-5 border rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl error-input ">
      <div className="">
        {icon === "user" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.1a7.5 7.5 0 0115 0A18 18 0 0112 21.8a18 18 0 01-7.5-1.7z"></path>
          </svg>
        )}
        {icon === "mail" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M4 4h16v16H4z" fill="none" />
            <path d="M4 4h16v16H4V4zm8 8l8-5H4l8 5z"></path>
          </svg>
        )}
        {icon === "phone" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.4-2.4a1 1 0 011 .2 8.8 8.8 0 002.4 1 1 1 0 011 1v3.4a1 1 0 01-1 1A19.3 19.3 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 8.8 8.8 0 001 2.4 1 1 0 01.2 1l-2.4 2.4z"></path>
          </svg>
        )}
        {icon === "subject" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M3 5h18M3 9h12m-12 4h18m-18 4h12"></path>
          </svg>
        )}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-xl w-full outline-none "
      />
    </div>
  </div>
);

export default ContactMe;
