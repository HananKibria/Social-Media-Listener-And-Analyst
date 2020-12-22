import React from 'react'
import './Blogs.css'
import Header from '../dashboard/Sections/Header'
import background from "../../assets/img/bg_hero_1.svg";
export default function Blogs() {
    return (
        <>
            <Header/>
            <div
                className="position-realive bg-image"
                style={{ backgroundImage: `url(${background})` }}
            >
                </div>
        </>
    
    );
}
