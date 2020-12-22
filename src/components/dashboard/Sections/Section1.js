import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './Section1.css'
export default function Section1() {
  return (
    <section id="section1">
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
                
                <h1>Social insights for the world's most impactful brands</h1>
                <h3 className="mt-3">From intelligence to impact</h3>
                <a href="#" className="btn btn-primary rounded-pill mt-5" id="demo">
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
