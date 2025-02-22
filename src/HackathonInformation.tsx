import Hero from "./Component/HackathonInformation_page/HI_Hero"
import { Body } from "./Component/HackathonInformation_page/HI_Body"
import { Information } from "./Component/HackathonInformation_page/HI_Information"
import Footer from "./Component/Footer"
const HackathonInformation = () => {
    return (
        <div className="bg-[#fafafa] gap-0 m-0">
            <Hero></Hero>
            <Body></Body>
            <Information/>
            <Footer></Footer>
        </div>
    )
}

export default HackathonInformation
