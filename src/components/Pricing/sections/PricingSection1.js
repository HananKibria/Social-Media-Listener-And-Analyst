import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './PricingSection1.css'
export default function PricingSection1() {
  return (
    <section id="PricingSection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
          height:"100%"
        }}
      >
        <div className="hero-caption p-5">
          <div className="container">
            <div className="row align-items-center h-100">
              <div className=" wow fadeInUp">
                
                <h1 id="cs1mtext">Simple Pricing. Unique conversational intelligence for your business.</h1>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
}
