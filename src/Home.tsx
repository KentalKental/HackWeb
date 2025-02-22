import './index.css'
import Hero from './Component/Home_page/HomeHero'
import Body from './Component/Home_page/HomeBody'
import Section from './Component/Home_page/HomeSection'
import Footer from './Component/Footer'

function Home() {
    return (
        <div className='bg-[#FAFAFA]'>
            <Hero></Hero>
            <Body></Body>
            <Section></Section>
            <Footer></Footer>
        </div>
    )
}

export default Home