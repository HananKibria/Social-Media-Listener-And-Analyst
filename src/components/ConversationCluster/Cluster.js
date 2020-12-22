import React from 'react'
import Header from '../dashboard/Sections/Header'
import Footer from '../dashboard/Sections/Footer'
import Section1 from './sections/ClusterSection1'
import Section2 from './sections/ClusterSection2'
import Section3 from './sections/ClusterSection3'
import Section4 from './sections/ClusterSection4'
import Section5 from './sections/ClusterSection5'
import Section6 from './sections/ClusterSection6'
import background from "../../assets/img/pattern_1.svg";
export default function Cluster() {
    return (
        <div>
            <Header/>
            <Section1/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
            </div>
            <Footer/>
        </div>
    )
}
