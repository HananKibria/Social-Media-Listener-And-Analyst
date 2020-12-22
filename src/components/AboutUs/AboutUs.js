import React from 'react'
import background from "../../assets/img/pattern_1.svg";
import Header from '../dashboard/Sections/Header'
import Footer from '../dashboard/Sections/Footer'
import Section1 from './Sections/AboutSection1'
import Section2 from './Sections/AboutSection2'
import Section3 from './Sections/AboutSection3'
export default function AboutUs() {
    return (
        <div>
            <>
            <Header/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Section1/>
                <Section2/>
                <Section3/>
            </div>
            <Footer/>
            </>
        </div>
    )
}
