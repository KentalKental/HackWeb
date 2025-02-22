import ProfileCard from "../MentorProfileMinicard";
import Button from "react-bootstrap/Button";
import GeneralButton from "../GeneralButton";
const Carousel = () => {
  return (
    <div className="bg-[#FAFAFA] h-auto w-full text-[#2b2b2b] flex flex-col items-center justify-center mt-[100px] overflow-hidden">
      <div className="w-[90%] h-full bg-[#FFFFFF] border border-[#C5C5C5] rounded-2xl px-[70px] py-[45px] flex flex-col items-center gap-5">
        {/* Header Section */}
        <div className="flex flex-col text-center !text-[#6610F2] w-full h-24 justify-center items-center gap-2 rounded-md">
          <h2 className="uppercase font-bold text-[#2b2b2b] text-5xl w-full">
            ACCELERATE YOUR GROWTH
          </h2>
          <h6 className="text-md bg-[#EBE5FC] px-4 py-2 rounded-sm w-[25%]">
            Learn from the best on the web
          </h6>
        </div>

        {/* Scrolling Cards Section */}
        <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll hover:pause scroll-smooth snap-x">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="snap-start transition-all duration-300 ease-in-out 
           hover:z-10 hover:scale-105">
                        <ProfileCard />
                    </div>
                ))}
            </div>
        </div>

        {/* Button */}
        <div className="flex w-[20%] justify-center">
          {/* <Button
            variant="primary"
            size="lg"
            className="m-1 !bg-[#6610F2] w-[50%] !text-sm justify-start font-bold"
          >
            View All
          </Button> */}
          <GeneralButton text="View All"></GeneralButton>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
