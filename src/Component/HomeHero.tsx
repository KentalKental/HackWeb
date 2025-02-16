
const Hero = () => {
    return (
        <div className="text-[#2b2b2b] bg-[#FAFAFA]">
            <div className='max-w-[1200px] h-[750px] m-auto flex flex-col justify-center'>
                <div className="w-[100%] h-[75%] rounded-2xl  shadow p-10"> {/* Fixed width and height for the container */}
                    <div className="flex justify-between">
                        <div className="w-[30%] h-[100%] border-0 rounded-xl"> {/* Fixed width and height for the image container */}
                            {/* Fixed width and height for the image */}
                            <img className="border-1 rounded-xl" src="../src/assets/pfp.jpg" alt="" />
                        </div>
                        
                        <div className="w-[65%] h-full grid grid-cols-2 grid-rows-2 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <div key={index} className="border border-[#2B2B2B] rounded-2xl h-full flex flex-col justify-center items-center p-4">
                                    <p className="text-2xl font-semibold text-center">Fast, easy, and fun for</p>
                                    <p className="text-2xl font-semibold text-center">everyone</p>
                                </div>
                            ))}
                            <div>
                                <h1>WELCOME BACK LILI ASGARD</h1>
                            </div>
                            
                        </div>
                       
                    </div>
                    <div>
                        {/* Empty div for potential additional content */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
