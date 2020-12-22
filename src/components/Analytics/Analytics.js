import React from "react";
import Header from '../dashboard/Sections/Header';
import Section1 from "./sections/AnalyticsSection1";
import Section2 from "./sections/AnalyticsSection2";
import background from "../../assets/img/pattern_1.svg";
import Footer from "../dashboard/Sections/Footer";

export default function Analytics() {
  return (
    <>
      <Header/>
      <Section1/>
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: `url(${background})` }}
      >
      <Section2/>
      </div>
      <Footer/>
    </>
  );
}
