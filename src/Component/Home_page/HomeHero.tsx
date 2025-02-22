import { useState } from "react";
import Navbar from "../Navbar";
import Interactive3DCard from "../InteractiveCard3D";
import GeneralButton from "../GeneralButton";
const Hero = () => {
    const [hero, setHero] = useState(false);
    return (
        <div className="text-[#2b2b2b] min-h-auto !bg-[#FAFAFA]">
            <Navbar />
            <button onClick={() => setHero(!hero)}>Click me</button>
            {/* Hero Section */}
            { hero && (
                
                <div className="flex flex-row justify-around items-center w-full h-[90vh] py-5 px-20">  
                
                {/* Left Content (Text Section) */}
                <div className="flex flex-col text-[#2b2b2b] justify-between items-start w-[40%] h-full">
                    <div className="h-[40%] flex flex-col gap-y-4">
                        <h1 className="!text-[80px] !font-bold w-full text-left !leading-[0.8]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#6610F2] to-[#C5C5C5] ">
                            Build
                            <br></br>
                            Bond
                            <br></br> 
                            Breakthrough
                            </span>
                            
                        </h1>
                        <h4 className="text-xl text-[#555] text-left !font-normal">
                            Your legacy starts here, spread your name throughout the CS community by competing and winning Hackathons
                        </h4>
                        <div className="w-[40%]">
                            <GeneralButton text="Get Started"></GeneralButton>
                        </div>
                        
                        
                    </div>
                    <div>
                        <h1 className="!text-[50px] !font-normal w-full text-left">Welcome back, John Doe</h1>
                    
                    </div>
                </div>

                {/* Right Content (3D Card) */}
                <div className="flex flex-row items-center justify-center w-[40%] h-full">
                    <Interactive3DCard />
                </div>
            </div>
            )}
            
            
        </div>

        
    );
};

export default Hero;
// {/* <div className="w-full lg:w-auto h-auto lg:h-screen flex flex-col justify-start items-center mt-30">
//                         <div className="w-full lg:w-[600px] h-auto lg:h-[1000px] my-auto rounded-3xl shadow-lg bg-white p-8 transform transition-transform hover:scale-105">
//                             <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8">
//                                 {/* Profile Picture */}
//                                 <div className="w-full lg:w-[30%] h-auto flex justify-center items-center">
//                                     <img 
//                                         className="w-32 h-32 lg:w-48 lg:h-48 border-2 border-[#2b2b2b] rounded-full object-cover shadow-md"
//                                         src="../src/assets/pfp.jpg" 
//                                         alt="Profile" 
//                                     />
//                                 </div>
//                                 <div className="w-full lg:w-[65%] h-full grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                     {[...Array(4)].map((_, index) => (
//                                         <div 
//                                             key={index} 
//                                             className="border border-[#2B2B2B] rounded-2xl h-full flex flex-col justify-center items-center p-4 transform transition-transform hover:scale-105 hover:shadow-lg"
//                                         >
//                                             <p className="text-xl lg:text-2xl font-semibold text-center">Fast, easy, and fun for</p>
//                                             <p className="text-xl lg:text-2xl font-semibold text-center">everyone</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}
//bg-gradient-to-br from-[#f9f9f9] to-[#FAFAFA]