import { Share2, Bookmark } from 'lucide-react';

export const Body = () => {
    const preferences = ["AI", "Data Science", "Web Development", "Mobile Development", "Cybersecurity"];

    return (
        <div className="p-20 h-auto bg-[url(../src/assets/gradient-background/1.png)] bg-cover bg-center bg-no-repeat border-1 border-[#C5C5C5]">
            <div className="rounded-2xl bg-white/50 border-1 border-[#C5C5C5] m-auto w-[80%]">
                <div className="flex flex-col p-16 justify-between">
                    {/* Row  1 */}
                    <div className="flex flex-row justify-between w-full mb-10">
                        <h1 className="uppercase !lg:text-[60px] md:text-[40px] sm:text-[30px] !text-[50px] w-[50%]">compfest ui 2025</h1>
                        
                        <div className="gap-2 flex flex-row">
                            <span className="inline-flex overflow-hidden rounded-md border border-[#C5C5C5] bg-white shadow-xs">
                                <button
                                    className="inline-block border-e border-[#C5C5C5]  p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                    title="Share Product"
                                >
                                    <Share2 size={20}></Share2>
                                </button>
                                <button
                                    className="inline-block border-e border-[#C5C5C5] p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                                    title="Edit Product"
                                >
                                    <Bookmark size={20}></Bookmark>
                                </button>

                                <button
                                    className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative text-md"
                                    title="Delete Product"
                                >
                                    Join Hackathon
                                </button>
                             </span>
                        </div>
                    </div>
                    <div className="border-1 border-[#C5C5C550] w-full rounded-2xl"></div>
                    {/* Theme Section */}
                    <div className="flex flex-wrap justify-start gap-[20px] mt-4">
                        
                        {preferences.map((pref, index) => (
                            <div 
                                key={index} 
                                className="flex items-center justify-center p-2 bg-[#EBE5FC] text-[#6610F2] border-[#6610f2] border-1 text-[14px] font-semibold rounded-lg  min-w-[60px]"
                            >
                                {pref}
                            </div>
                        ))}
                    </div>
                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-white shadow-md rounded-lg mt-4">
                        `{/* Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Hackathon Level</h5>
                                    <p className="text-gray-600 text-lg">University</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Number of Participants</h5>
                                    <p className="text-gray-600 text-lg">1000+</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">City/Country</h5>
                                    <p className="text-gray-600 text-lg">Alam Sutera, Indonesia</p>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Availability</h5>
                                    <p className="text-gray-600 text-lg">Public</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Members per Team</h5>
                                    <p className="text-gray-600 text-lg">1-5</p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Location</h5>
                                    <p className="text-gray-600 text-lg">BINUS University</p>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Rules</h5>
                                    <p className="text-blue-600 text-lg"><a href="#" className="hover:underline">View all rules</a></p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Requirements</h5>
                                    <p className="text-blue-600 text-lg"><a href="#" className="hover:underline">View all requirements</a></p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[#2b2b2b] tracking-tight">Schedule</h5>
                                    <p className="text-blue-600 text-lg"><a href="#" className="hover:underline">View event schedule</a></p>
                                </div>
                            </div>
                        </div>

                        
                    </div>`

                </div>
            </div>
        </div>
    )
}