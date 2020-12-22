import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import './SentimentSection1.css'
export default function SentimentSection1() {
  return (
    <section id="SentimentSection1">
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
                
                <h1>Meet the sentiment analysis tool for social listening</h1>
                <h3 className="mt-3">Use Awario to measure the tone of your mentions. </h3>
                <a href="#" className="btn btn-primary rounded-pill mt-5" id="sdemo">
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