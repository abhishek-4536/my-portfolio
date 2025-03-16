import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='main-container w-full py-[20px] md:py-[40px] lg:py-[80px] flex flex-col items-center'>
            <div className="bg-[#FFBF00] text-black rounded-full py-4 px-6 flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <Image src="/images/profile.jpg" alt="logo" width={45} height={45} className="w-48 lg:w-[45px] h-[45px] rounded-full object-cover" loading="lazy" />
                        <h1 className="text-xl font-medium">Abhishek <span className="text-xl font-semibold">Rohtagi</span> </h1>
                    </div>
                </div>
                <p className="text-sm sm:text-base">Designed & Built by <span className="font-bold">Abhishek Rohtagi</span></p>

            </div>
        </footer>
    );
};

export default Footer;
