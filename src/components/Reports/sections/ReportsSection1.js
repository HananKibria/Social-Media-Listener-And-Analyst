import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './ReportsSection1.css'
export default function ReportsSection1() {
  return (
    <section id="Reportssection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="wow fadeInUp rs1">
                
                <h1>Social Media Reporting</h1>
                <h5 className="mt-3">Use automated reporting functions to share social intelligence across departments in seconds</h5>
                <a href="#" className="btn btn-primary rounded-pill mt-5" id="rs1demo">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
