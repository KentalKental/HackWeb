import Button from "react-bootstrap/Button";
import GeneralButton from "./GeneralButton";
const ProfileCard = () => {
    return (
      <div className="shadow-lg flex flex-col rounded-lg 
           border border-[#2b2b2b] max-w-[320px] p-4 
           relative ">
        {/* Profile Picture */}
        <div className="w-full h-[180px] border border-black rounded-md overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="../src/assets/pfp.jpg" 
            alt="Profile" 
          />
        </div>
  
        {/* Badge */}
        <div className="border border-black px-3 py-1 mt-3 rounded-md text-sm w-fit !text-gray-900">
          <span className="font-semibold">TYPE:</span> LOGICAL
        </div>
  
        {/* Profile Info */}
        <div className="flex flex-col items-start mt-4">
          <h3 className="!text-gray-900 font-bold text-xl leading-tight">
            JEROME DAVIDSON
          </h3>
          <h5 className="!text-gray-700 text-md">AI ENGINEER</h5>
          <h6 className="!text-gray-500 text-sm">QUALIFICATIONS</h6>
         
          <GeneralButton text="Get Started"></GeneralButton>
        
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  

// const ProfileCard = () => {
//   return (
//       <div className="relative transition-all duration-300 ease-in-out hover:z-10 hover:scale-105">
//           <div className="bg-white shadow-md rounded-lg p-4">
//               <img src="/profile.jpg" alt="Mentor" className="rounded-full w-20 h-20 mx-auto" />
//               <h4 className="text-lg font-semibold text-center mt-2">Mentor Name</h4>
//               <p className="text-sm text-gray-600 text-center">Expert in AI & ML</p>
//           </div>
//       </div>
//   );
// }

// export default ProfileCard;
