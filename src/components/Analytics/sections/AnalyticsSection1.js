import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './AnalyticsSection1.css'
export default function AnalyticsSection1() {
  return (
    <section id="Analyticssection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                
                <h1>Put Social Data Intelligence to Work. Instantly.</h1>
                <a href="#" className="btn btn-primary rounded-pill mt-5" id="as1demo">
                  Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
