import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './ClusterSection1.css'
export default function ClusterSection1() {
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
              <div className="col-lg-8 wow fadeInUp">
                
                <h1>The light-bulb moment for your data</h1>
                <h3 className="mt-3">Conversation Clusters let you uncover, 
                understand and visualize the context around any topic at a glance.</h3>
                <a href="#" className="btn btn-primary rounded-pill mt-5" id="s1demo">
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
