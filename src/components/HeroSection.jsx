import { useState } from "react";
import { FaRegUserCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const HeroSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        "AutoMobiles",
        "Clothes and Wear",
        "Home Interiors",
        "Computer and Tech",
        "Tools & Equipment",
        "Sports & Fitness",
        "Beauty & Pets",
        "Books & Stationary",
        "More Categories",
        "More Categories",
        "More Categories",
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-4 bg-white rounded-lg overflow-hidden">
                
                {/* Left Sidebar */}
                <div className="p-2 text-sm bg-white rounded-lg w-full lg:w-[250px]">
                    {/* Mobile Toggle Header */}
                    <div className="flex justify-between items-center lg:hidden">
                        <h2 className="text-gray-800 font-semibold">Categories</h2>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-xl">
                            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                    </div>

                    {/* Category List */}
                    <ul className={`space-y-2 mt-3 ${isOpen ? "block" : "hidden"} lg:block`}>
                        {categories.map((item, index) => (
                            <li
                                key={index}
                                className="cursor-pointer text-gray-700 hover:bg-blue-100 p-[5px] rounded-sm transition-all duration-200 font-sans"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Center Hero */}
                <div
                    className="relative w-full min-h-[300px] lg:w-[650px] bg-cover bg-center bg-no-repeat flex flex-col "
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=800&auto=format&fit=crop&q=30')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-300 opacity-50"></div>
                    <div className="relative z-10 w-[80%] sm:w-[250px] md:w-[300px] p-6 mt-10 sm:mt-20 bg-opacity-90 space-y-3">
                        <h1 className="text-xs sm:text-sm uppercase tracking-widest text-gray-700 font-semibold">
                            Latest Trending
                        </h1>
                        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                            Electronic Items
                        </p>
                        <button className="mt-2 bg-white text-black px-4 py-2 text-sm md:text-base rounded-sm font-medium hover:bg-gray-400 hover:text-white transition">
                            Learn more
                        </button>
                    </div>
                </div>

                {/* Right User Box */}
                <div className="w-full lg:w-[250px] p-4 bg-white flex flex-col">
                    <div className="bg-blue-100 p-4 rounded-lg flex flex-col items-center justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <FaRegUserCircle className="text-3xl sm:text-4xl text-gray-700" />
                            <div className="text-sm text-gray-700">
                                Hi, User <br />
                                Let’s start shopping
                            </div>
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 w-full rounded hover:bg-blue-700 transition mb-2">
                            Join Now
                        </button>
                        <button className="bg-white text-blue-600 px-3 py-2 w-full rounded font-medium hover:bg-blue-50 transition">
                            Log In
                        </button>
                    </div>
                    <div className="p-2 bg-orange-600 hover:bg-amber-600 rounded-lg mt-4">
                        <p className="text-[16px] text-white font-semibold whitespace-normal">
                            Get US $100 off<br /> on your first <br /> purchase
                        </p>
                    </div>
                    <div className="p-2 bg-orange-600 hover:bg-amber-600 rounded-lg mt-4">
                        <p className="text-[16px] text-white font-semibold whitespace-normal">
                            Get US $100 off<br /> on your first <br /> purchase
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
