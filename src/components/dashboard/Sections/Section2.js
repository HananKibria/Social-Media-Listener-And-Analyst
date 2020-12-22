import React from "react";
import ds2 from "../../../assets/img/ds2.gif";
import '../Sections/Section2.css'
export default function Section2() {
  return (
    <section id="section2">
      <div className="page-section">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-md-7 mt-lg-5">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="title-h">Your reputation is everything. Make sure it’s protected, globally</h1>
                    <h5 className="mt-4" id="title-c">
                    Talkwalker is your extra set of eyes and ears. Its AI powered analysis provides real time insights into what's happening on all social channels and online media, across 187 languages. This enables you to quickly identify issues and complaints before a crisis hits.
                    </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="demo">
                    Protect Your reputation
                    </a>
                  </div>
                </div>  
              </div>
            </div>
            <div className="col-md-4 mr-2">
              <img src={ds2} alt="no" id="ds2"/>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              
            </div>

            <div className="col-lg-6 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="title-h">Your social media presence is paramount. Measure its impact</h1>
                    <h5 className="mt-4" id="title-c">
                    Benchmark your brand and campaigns with our proven KPI frameworks. Measure sentiment and brand health. Connect social efforts to real business results and provide your management with instant reports. Compare your results to the competition, across every channel. Discover what customers really think about your brands and products in real time.
                    </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="demo">
                    Measure Your Impact
                    </a>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8 py-3 mt-lg-5">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="title-h">Brand impact has moved full digital. Promote and profit.</h1>
                    <h5 className="mt-4" id="title-c">
                    Maximize the social performance of your communication campaigns with data-driven technology.                   
                    </h5>
                    <h5 className="mt-4" id="title-c">
                    Find the best stories and the true influencers to boost your brand power. With Quick Search, spot the trending stories on your brand and industry, in real time. Amplify your brand message for one global impact with Influencer One - one influencer marketing hub for a simpler workflow and measurable ROI metrics.                    </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="demo">
                    Protect Your reputation
                    </a>
                  </div>
                </div>  
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}
