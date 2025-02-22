import SectionCard from "./HomeSectionCard";
import Button from 'react-bootstrap/Button';
import Carousel from "./HomeMentorship";
import FAQAccordion from "./HomeFAQ";
const Section = ()=> {
    return(
        <div className="!b-[#FAFAFA] !bg-center">
            <div className="h-screen my-[120px]">
                {/* Section with Image and Text */}
                
                <div className="max-w-[1000px] mx-auto h-[400px] flex flex-row text-[#2b2b2b] items-center text-left justify-between">
                    <div className="flex flex-col gap-1 max-w-lg">
                        <h2 className="pb-5 font-extrabold">Your hub for hackathons</h2>
                        <p className="leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisquam, excepturi neque earum facilis voluptate et iste molestias esse, inventore asperiores!
                        </p>

                    </div>
                    <img src="../src/assets/section-image1.png" alt="#" className="w-[40%] h-auto mt-5" />
                </div>

                {/* Community-Focused Competitions */}
                <div className="flex flex-col max-w-[1000px] w-full h-auto mx-auto mt-[100px] text-[#2b2b2b] gap-4 text-left">
                    <h2 className="text-3xl font-bold">Community-Focused Competitions</h2>
                    <div className="flex w-full justify-center gap-6">
                        <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                        <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                        <SectionCard image_src={"../src/assets/community-card-bonding.jpg"} title={"Community"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi voluptatibus? Officiis corrupti amet quam. Accusantium temporibus quasi, quisqua"}></SectionCard>
                    </div>
                </div>

            </div>

            {/* Call to Action Section */}
            <div className="w-full mx-auto h-auto bg-[#EBE5FC] text-[#2b2b2b] flex flex-col items-center p-8">
                <div className="w-[1000px] flex text-left justify-around">
                    <div className="w-[30%] flex flex-col justify-start text-left">
                        <h2 className="font-bold text-xl pb-4">Create Hackathon</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo temporibus magnam repudiandae perspiciatis culpa aspernatur iusto, ullam velit facere.
                        </p>
                        <Button variant="primary" size="lg" className="m-1 !bg-[#6610F2] w-[50%] !text-sm justify-start font-bold">
                            Create Hackathon
                        </Button>
                    </div>
                    <div className="w-[30%] flex flex-col justify-start text-left">
                        <h2 className="font-bold text-xl pb-4">Join Hackathon</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nemo temporibus magnam repudiandae perspiciatis culpa aspernatur iusto, ullam velit facere.
                        </p>
                        <Button variant="primary" size="lg" className="m-1 !bg-[#6610F2] w-[50%] !text-sm justify-start font-bold">
                            Join Hackathon
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mentorship Section */}
            {/* <Carousel></Carousel> */}
            {/* FAQ Section */}
            <FAQAccordion></FAQAccordion>
        </div>
    )
}
export default Section;