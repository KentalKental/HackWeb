import Navbar from "../Navbar"
import HostBanner from "../Banner"
import Banner from 'src/assets/guy.jpg'
const Hero = () => {
    return (
        <div className="text-[#2b2b2b] max-h-[500px] !bg-[#FAFAFA]">
            <Navbar></Navbar>
            <HostBanner image="../src/assets/banner-example.jpg"></HostBanner>
        </div>
    )
}

export default Hero
