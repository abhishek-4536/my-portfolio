import AboutMe from "./AboutMe";
import Certifications from "./Certificates";
import ConnectWithMe from "./ConnectWithMe";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const Homepage = () => {
    return <>
        <Navbar />
        <Home />
        <div className="border-t-[1px] border-[#fff1cc] mt-5 lg:mt-18 md:mt-14">
            <AboutMe />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Testimonials />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Education />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Experience />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Certifications />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Skills />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Projects />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <ConnectWithMe />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <ContactMe />
        </div>
        <div className="border-t-[1px] border-[#fff1cc]">
            <Footer />
        </div>
    </>;
};

export default Homepage;