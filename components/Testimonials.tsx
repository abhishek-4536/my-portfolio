import Image from "next/image";

type TestimonialProps = {
    id: number;
    name: string;
    location: string;
    feedback: string;
    rating: number;
    flag: string;
}

const testimonials :TestimonialProps[]= [
    {
        id: 1,
        name: "Rupam karmakar",
        location: "Maharashtra, India",
        feedback: "Nikunj delivered excellent work on the Next.js project, and I thoroughly enjoyed collaborating with him.",
        rating: 5,
        flag: "/images/india-flag.svg"
    },
    {
        id: 2,
        name: "Bilal Karimbath",
        location: "Dubai, UAE",
        feedback: "Nikunj delivered excellent work on the Next.js project, and I thoroughly enjoyed collaborating with him.",
        rating: 5,
        flag: "/images/india-flag.svg"
    },
    {
        id: 3,
        name: "Foteh Gafarov",
        location: "New York, USA",
        feedback: "Nikunj, Thank you for all your hard work throughout this engagement. I have been very impressed and it’s been a pleasure to work with you.",
        rating: 5,
        flag: "/images/india-flag.svg"
    },
    {
        id: 4,
        name: "Rupam karmakar",
        location: "Maharashtra, India",
        feedback: "Nikunj delivered excellent work on the Next.js project, and I thoroughly enjoyed collaborating with him.",
        rating: 5,
        flag: "/images/india-flag.svg"
    }
];


const Testimonials = () => {
    return (
        <div id="testimonials" className="main-container w-full py-[40px] md:py-[60px] lg:py-[80px] flex flex-col items-center  border-opacity-10">
            <div className="relative w-full text-center">
                <h2 className="opacity-10 text-4xl md:text-6xl lg:text-7xl font-bold text-outline">Testimonials</h2>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-mainColor">Testimonials</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-10 ">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="relative w-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square bg-mainColor rounded-full blur-lg -z-10"></div>
                        <div className="p-6 bg-white backdrop-blur-lg bg-opacity-70 rounded-[30px] shadow-md ease-out duration-300 transition-all cursor-pointer hover:bg-opacity-100 ">


                            <div className="w-full flex flex-wrap items-center gap-2 lg:gap-6 justify-between">
                                <div className="flex items-center gap-3">
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <Image key={index} src="/images/rating-star.svg" alt="star" width={24} height={24} className="object-contain w-5 md:w-6 lg:w-8" />
                                    ))}
                                </div>
                                <div className="rounded-full bg-[#eeeeee] p-2 overflow-hidden">
                                    <Image src={testimonial.flag} alt={testimonial.location} width={32} height={32} className="w-6 lg:w-8" />
                                </div>
                                <p className="text-sm md:text-base lg:text-lg text-black text-opacity-75">{testimonial.feedback}</p>
                                <div className="border-t border-opacity-20 my-4"></div>

                            </div>
                            <div className="flex items-center gap-2 border-t-[3px] border-[#fff1cc] pt-4">
                                <Image src="/images/testimonial-user.svg" alt={testimonial.name} width={44} height={44} className="rounded-full" />
                                <div className="">
                                    <p className="text-sm md:text-base lg:text-lg text-black font-bold">{testimonial.name}</p>

                                    <div className="flex items-center gap-2">
                                        <Image src="/images/location-dark.svg" alt={testimonial.location} width={16} height={16} className="w-3 md:w-4" />
                                        <p className=" text-black text-xs sm:text-sm">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
