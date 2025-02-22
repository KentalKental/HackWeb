import TabHeader from "../src/Component/TabHeader"
import Navbar from "./Component/Navbar"
import { Body } from "./Component/MentorInformation_page/MentorBody"
import Footer from "./Component/Footer"
export const MentorInformation = () => {
    return (
        <>
            <Navbar></Navbar>
            <Body></Body>
            <TabHeader tabs={["Introduction", "Style", "Experiences", "Schedule"]}></TabHeader>
            <Footer></Footer>
        </>
    )
}