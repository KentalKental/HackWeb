import BookmarkButton from "../BookmarkButton";
import GeneralButton from "../GeneralButton";
const Body = () => {
    const preferences = ["AI", "Data Science", "Web Development", "Mobile Development", "Cybersecurity"];

    return (
        
        <div className="!bg-[url('../src/assets/gradient-background/2.png')] !bg-center w-[95%] h-[900px] text-[#2b2b2b] flex flex-col items-center justify-center my-8 tracking-[-0.03em] rounded-2xl mx-auto">
            {/* Background Layer */}
            <div className="absolute w-[90%] h-[600px] bg-[#FFFFFF] border-2 border-[#D9D9D9] rounded-2xl opacity-50 z-0">
                
            </div>

            {/* Foreground Content */}
            <div className="w-[100%] relative z-10 px-5 py-5 flex flex-col items-center text-center">
                <h1 className="font-bold text-xl !text-[#2B2B2B]">
                    FEATURED HACKATHONS BASED ON YOUR SPECIALTIES
                </h1>

                {/* Theme Tags */}
                <div className="flex flex-wrap justify-center gap-[20px] py-2">
                    {preferences.map((pref, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center px-4 py-2.5 bg-[#EBE5FC] text-[#6610F2] text-[14px] font-semibold rounded-lg shadow-md min-w-[80px]"
                        >
                            {pref}
                        </div>
                    ))}
                </div>
                {/* Hackathons */}
                <div className="relative overflow-hidden w-[80%] ">
                    <div className="flex w-max animate-scroll hover:pause">
                        {[...Array(6)].map((_, i) => (
                            <BodyItem key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;


const BodyItem = () => {
    return (
                <div className="mt-[100px] border border-[#D9D9D9] !bg-[url('../src/assets/banner-example.jpg')] !bg-center
                                 rounded-2xl w-max h-[250px] flex items-center px-6 py-4 
                                 gap-4 justify-between !shadow-gray-500">
                    
                    {/* {Left Section: Event Details
                    <div className="w-[25%] shadow-lg bg-[#F2F2F2] border-2 border-pink-400 rounded-xl px-4 py-3 text-[#2b2b2b] text-left">
                        <h4 className="uppercase font-semibold text-lg">Event Details</h4>
                        <div className="flex flex-col mt-4 space-y-2 text-sm">
                            <p>📍 Location: Jakarta</p>
                            <p>👥 Max Participant: 100</p>
                            <p>👨‍👩‍👧‍👦 Members per Team: 5</p>
                            <p>📅 Registration Deadline: 05/02/2023</p>
                            <p>🏆 Prize: IDR 100,000,000</p>
                            <p>⚡ Level: Beginner</p>
                        </div>
                    </div>} */}

                    {/* Right Section: Hackathon Title & Buttons */}
                    <div className="flex flex-col h-full justify-between text-right">
                        <div className="uppercase text-[#FAFAFA] font-bold tracking-[-0.05em] " style={{ textShadow: "3px 3px 6px rgba(183, 39, 223, 0.7), -2px -2px 4px rgba(102, 16, 242, 0.5)" }}>
                            <h1 className="text-[50px]" >
                                COMPFEST
                            </h1>
                            <h3>Universitas INDONESIA</h3>
                        </div>

                        {/* Buttons */}
                        <div className="font-bold text-[14px] flex gap-2 justify-end">
                            <BookmarkButton />
                            <GeneralButton text="VIEW HACKATHON" />
                        </div>
                    </div>
                </div>
    )
}