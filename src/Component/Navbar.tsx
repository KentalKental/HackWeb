const Navbar = () => {

    return (
        <div className="flex justify-between items-center h-16 max-w-[1700px] mx-auto my-auto">
            <a className="font-bold text-xl !text-[#2b2b2b] !no-underline p-2" href="">HACKWEB</a>
            <ul className="flex gap-2 my-2 font-medium">
                <li className="p-2 cursor-pointer text-[#2b2b2b]">
                    <a href="" className="!text-[#2b2b2b] !no-underline hover:!text-[#8F83FF] transition-all  ease-in-out duration-300">Join Hackathon</a>
                </li>
                <p className="text-gray-400 my-2" >|</p>
                <li className="p-2 cursor-pointer text-[#2b2b2b]">
                    <a href="" className="!text-[#2b2b2b] !no-underline hover:!text-[#8F83FF] transition-all ease-in-out duration-300">Create Hackathon</a>
                </li>
                <p className="text-gray-400 my-2">|</p>
                <li className="p-2 cursor-pointer text-[#2b2b2b]">
                    <a href="" className="!text-[#2b2b2b] !no-underline hover:!text-[#8F83FF] transition-all ease-in-out duration-300">Mentorship Hackathon</a>
                </li>
            </ul>
            <img className="w-10 h-10 rounded-xl border-[#2b2b2b] border-2 "
             src="..\src\assets\pfp.jpg" alt="" />
        </div>
    )
}

export default Navbar




// // BOOTSTRAP 5
// import 'bootstrap/dist/css/bootstrap.min.css';

// // BOOTSTRAP ICONS
// import 'bootstrap-icons/font/bootstrap-icons.css';

// function Navbar() {
//     return (
//         <nav className="navbar px-3 navbar-expand-lg bg-transparent">
//             <div className="container-fluid d-flex justify-content-between align-items-center">
//                 {/* Logo / Brand */}
//                 <a href="#" className="navbar-brand fw-bold">TRADE</a>

//                 {/* Navbar Links */}
//                 <ul className="navbar-nav d-flex flex-row gap-4 mx-auto fw-bold">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link">CREATE HACKATHON</a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link">JOIN HACKATHON</a>
//                     </li>
//                     <li className="nav-item">
//                         <a href="#" className="nav-link">MENTORSHIP</a>
//                     </li>
//                 </ul>

//                 {/* Profile Section */}
//                 <div className="profile d-flex align-items-center">
//                     <a href='#'>
//                         <img
//                             src="..\src\assets\pfp.jpg"
//                             className="img-fluid rounded-circle"
//                             alt="Profile"
//                             style={{ height: "30px", width: "30px", marginRight: "8px" }}
//                         />
//                         <img src="..\src\assets\ArrowPfp.svg" alt="" />                        
//                     </a>

//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;
