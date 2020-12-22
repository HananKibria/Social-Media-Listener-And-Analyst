import React from 'react'
import background from "../../assets/img/pattern_1.svg";
import Header from '../dashboard/Sections/Header'
import Footer from '../dashboard/Sections/Footer'
import Section1 from './Sections/ctSection1'
export default function Contact() {
    return (
        <div>
            <>
            <Header/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Section1/>
            </div>
            <Footer/>
            </>
        </div>
    )
}
