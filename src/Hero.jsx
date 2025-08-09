
import HeroSection from './components/Main/HeroSection'
import SubSection from './components/Main/subSection/SubSection'
import Section2 from './components/Main/Section2/Section2'
import Section4 from './components/Main/Section4/Section4'
import Contact from './components/Main/Section3/Contact'
import Products from './components/Main/Section5/Products'
import FlagsSection from './components/Main/Section6/FlagsSection'
import LastSection from './components/Main/Section7/LastSection'

const Hero = () => {

    return (
        <>
            <HeroSection />
            <SubSection />
            <Section2 />
            <Section4 />
            <Contact />
            <Products />
            <FlagsSection />
            <LastSection />
        </>
    )
}

export default Hero