import BookmarkButton from "./BookmarkButton";
import GeneralButton from "./GeneralButton";
import SectionCard from "./HomeSectionCard";
import Button from 'react-bootstrap/Button';

const Body = () => {
    const preferences = ["AI", "Data Science", "Web Development", "Mobile Development", "Cybersecurity"];

    return (
        <div className="bg-[#FAFAFA] h-[600px] w-full text-[#f7f7f7] relative">
            <div className="w-[80%] h-full m-auto bg-[#8F83FF] opacity-50 border-2 border-[#D9D9D9] rounded-2xl px-[70px] py-[45px] relative z-0">
                <h1 className="text-left font-bold text-xl text-[#FFFFFF] z-10 relative">
                    FEATURED HACKATHONS BASED ON YOUR SPECIALTIES
                </h1>

                {/* Preference Tags */}
                <div className="flex flex-wrap justify-start gap-[20px] py-2 z-10 relative">
                    {preferences.map((pref, index) => (
                        <div 
                            key={index} 
                            className="flex items-center justify-center px-4 py-2.5 bg-[#EBE5FC] text-[#6610F2] text-[14px] font-bold rounded-lg shadow-md min-w-[80px]"
                        >
                            {pref}
                        </div>
                    ))}
                </div>

                {/* Event Details Box */}
                <div className="mt-25 border border-[#D9D9D9] bg-[#FAFAFA] rounded-2xl w-full h-[280px] flex items-center px-6 py-4 justify-between relative z-10">
                    
                    {/* Left Section: Event Details */}
                    <div className="w-[25%] shadow-lg bg-[#F2F2F2] border-2 border-pink-400 rounded-xl text-[#2b2b2b] px-4 py-3 relative z-10">
                        <h4 className="uppercase font-semibold text-lg">Event Details</h4>
                        <div className="flex flex-col mt-4 space-y-2 text-sm">
                            <p>📍 Location: Jakarta</p>
                            <p>👥 Max Participant: 100</p>
                            <p>👨‍👩‍👧‍👦 Members per Team: 5</p>
                            <p>📅 Registration Deadline: 05/02/2023</p>
                            <p>🏆 Prize: IDR 100,000,000</p>
                            <p>⚡ Level: Beginner</p>
                        </div>
                    </div>

                    {/* Right Section: Hackathon Title & Buttons */}
                    <div className="uppercase flex flex-col h-full justify-between relative z-10">
                        <div className="text-[#2b2b2b] font-bold text-right tracking-[-0.05em] relative">
                            <h1 
                                className="text-[50px] relative z-10"
                                style={{ textShadow: "3px 3px 6px rgba(183, 39, 223, 0.7), -2px -2px 4px rgba(102, 16, 242, 0.5)" }}
                            >
                                Hackathon Name
                            </h1>
                            <h3 className="relative z-10">Host Name</h3>
                        </div>

                        {/* Buttons */}
                        <div className="text-[#2b2b2b] font-bold text-right tracking-[-0.05em] text-[14px] flex gap-2 justify-end relative z-10">
                            <BookmarkButton />
                            <GeneralButton text="VIEW HACKATHON" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-[1000px] mx-auto h-[400px] mt-30 flex text-[#2b2b2b] gap-2 justify-between">
                <div className="flex flex-col gap-8 justify-center w-[40%]">
                    <h3>Your hub for hackathons</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisquam, excepturi neque earum facilis voluptate et iste molestias esse, inventore asperiores!</p>
                </div>
                <img src="../src/assets/section-image1.png" alt="#" className="w-[50%] h-[100%]" />
            </div>
            <div className="flex flex-col max-w-[1200px] h-auto mx-auto mt-30 text-[#2b2b2b] gap-10 justify-around items-center">
                <h1>Community-Focused Competitions</h1>
                <div className="flex w-[100%] justify-around">
                    <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                    <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                    <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                </div>
            </div>
            <div className="max-w-[1000px] mx-auto h-[400px] mt-30 text-[#2b2b2b] flex gap-2 justify-between">
                <div className="">
                    <h4>Join Hackathon in seconds</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo temporibus magnam repudiandae perspiciatis culpa aspernatur iusto, ullam velit facere.
                    </p>
                    <Button variant="secondary" size="lg">
                        Large button
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Body;
