import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import GeneralButton from "./GeneralButton";

const preferences = ["AI", "Data Science", "Web Development", "Mobile Development", "Cybersecurity"];

const Interactive3DCard = () => {
  const cardRef = useRef(null);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // Normalize to -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // Normalize to -0.5 to 0.5

    card.style.transform = `
      perspective(1000px)
      rotateX(${y * 20}deg)
      rotateY(${x * 20}deg)
      scale(1.05)
    `;
    card.style.boxShadow = `${x * 20}px ${y * 20}px 30px rgba(0, 0, 0, 0.2)`;
  };

  // Reset card on mouse leave
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
    card.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div className="flex rounded-md justify-between items-center h-full w-full">
      <div 
        ref={cardRef}
        className="p-[6px] rounded-lg w-full h-full justify-start flex"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
        <div
          ref={cardRef}
          className="w-full h-full bg-[#FAFAFA] rounded-md shadow-lg transition-transform duration-300 ease-out  border-transparent "
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full flex flex-col gap-2 !text-[#464646]">
            <div className="flex justify-center items-center shadow-2xl">
              <div className="w-full h-90 rounded-b-box overflow-hidden">
                <img 
                  src="..\src\assets\guy.jpg" 
                  alt="" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="p-8 w-full h-full flex flex-row items-start justify-between">
              {/* Left side: Name */}
              <h2 className="!text-[60px] text-[#2b2b2b] !leading-[1] !font-bold">
                John <br/>
                 <span className="!font-light">Doe</span>
              </h2>
               {/* Right side: Details */}
              <div className="flex flex-col justify-between h-full">
                <h4 className="text-md !font-light text-right">
                  AI Engineer <br />
                  Hackathon Expert
                </h4>
                
              </div>
              
            </div>
            <div className="flex justify-center items-center w-[100%] !h-0.5 rounded-md border-2 border-[#C5C5C550]"></div>
            {/* Statistics section */}
            <div className="p-8 w-full flex flex-col items-start justify-between">
              <div className="w-full flex flex-row items-start justify-between">
                <h6 className="!text-xl !font-bold text-left">Hackathons entered</h6>
                <h6 className="!text-xl !font-light text-left">10</h6>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <h6 className="!text-xl !font-bold text-left">Hackathons won</h6>
                <h6 className="!text-xl !font-light text-left">02</h6>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <h6 className="!text-xl !font-bold text-left">Followers</h6>
                <h6 className="!text-xl !font-light text-left">100</h6>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <h6 className="!text-xl !font-bold text-left">Friends</h6>
                <h6 className="!text-xl !font-light text-left">10</h6>
              </div>
              <div className="w-full flex flex-row items-start justify-between">
                <h6 className="!text-xl !font-bold text-left">Preferences</h6>
                <h6 className="!text-xl !font-light text-left">O</h6>
              </div>
            </div>
            {/* Social medias / share button / edit profile */}
            <div className="flex flex-row items-center justify-between px-8 py-4">
              <div className="flex gap-3">
                <FontAwesomeIcon icon={faInstagram}  size="2x" className="text-[#6610F2] !font-light"/>
                <FontAwesomeIcon icon={faLinkedin}  size="2x" className="text-[#6610F2] !font-light"/>
              </div>
              <div className="flex gap-3">
                
                <GeneralButton text="Share Profile"></GeneralButton> 
                <GeneralButton text="View Profile"></GeneralButton> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Interactive3DCard;

