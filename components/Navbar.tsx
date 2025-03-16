"use client";
import Image from "next/image"
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="w-full flex bg-transparent flex-col items-start z-50">
                <div className="main-container w-full flex flex-col lg:flex-row items-center text-4xl justify-between gap-6 py-4 lg:py-8 md:py-10">
                    <div className="w-full bg-white p-1 sm:p-2 rounded-full flex items-center gap-10 justify-between">
                        <div className="flex items-center gap-2 font-cursive">
                            <Image src="/images/profile.jpg" alt="logo" width={68} height={68} className="w-48 lg:w-[68px] h-[68px] rounded-full object-cover" loading="lazy" />
                            <h1 className="text-3xl font-medium">Abhishek <span className="text-3xl font-semibold">Rohtagi</span> </h1>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="aspect-square p-3 sm:p-4 cursor-pointer rounded-full bg-[#000000]">
                                <Image src="/images/dark.svg" alt="logo" width={42} height={42} className="w-6 sm:w-6 lg:w-auto" />
                            </div>

                            <div className="relative group">
                                <div
                                    className="flex items-center gap-6 text-white bg-black text-sm md:text-base xl:text-2xl lg:text-lg sm:pl-6 rounded-full h-full cursor-pointer"
                                    onClick={toggleMenu}
                                >
                                    <p>Menu</p>
                                    <div className="p-3 sm:p-4 cursor-pointer rounded-full bg-mainColor">
                                        <Image src="/images/menu.svg" alt="menu" width={36} height={36} className="w-6 sm:w-6 lg:w-auto" />
                                    </div>
                                </div>

                                <div className={`absolute group-hover:block bg-white text-black flex-col gap-6 rounded-[10px] w-max top-full cursor-pointer right-0 flex-1 mt-2 text-sm font-normal truncate border-[1px] border-[#f1f1f1] ${isMenuOpen ? 'block' : 'hidden'}`}>
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Home</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#about-me">About Me</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#testimonials">Testimonials</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#education">Education</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#experience">Experience</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#skills">Skills</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#projects">Projects</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#achievements">Achievements</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#discuss-project">Discuss Project</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#social-media">Social Media</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#contact-me">Contact Me</a></li>
                                        <li className="px-4 py-2 hover:bg-gray-100"><a href="#portfolio">Portfolio Made With?</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
