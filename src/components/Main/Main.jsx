import React from "react"
import './styles/Main.css'
import IntroductionSection from '../IntroductionSection/IntroductionSection.jsx'
import Header from "../Header/Header.jsx"
import AboutMeSection from '../AboutMeSection/AboutMeSection.jsx'
import ProjectSection from "../Project/ProjectSection.jsx"
import ContactSection from "../ContactSection/ContactSection.jsx"

export default function Main() {
    
    return (
        <div>
            <Header />
            <div className="section">
                <IntroductionSection>
                </IntroductionSection>
                <AboutMeSection />
                <ProjectSection />
                <ContactSection />
            </div>
        </div>
    )
}