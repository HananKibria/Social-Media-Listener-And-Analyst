import React from "react";
import rs2a from "../../../assets/img/rs2a.png";
import rs2b from "../../../assets/img/rs2b.png";
import rs2c from "../../../assets/img/rs2c.png";
import as2d from "../../../assets/img/as2d.gif";
import './ReportsSection2.css'
export default function ReportsSection2() {
  return (
    <section id="section2">
      <div className="page-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="rs2title-h">Save Time</h1>
                    <p className="pl-4 mt-1" id="rs2title-c">
                        Save time spent manually preparing and formatting social KPI reports using customizable, multi-format reporting functions.
                    </p>
                    <ul className="mt-5" style={{marginLeft:"10px"}}>
                        <li>
                        <p id="rs2title-c">
                            Bring reports to life by including video and images, adding comments and editing reports from within the platform. 
                        </p>
                        </li>
                        <li>
                        <p id="rs2title-c">
                        Easily download reports as PowerPoint, Word or PDF with underlying data attached to showcase social results to management.
                        </p>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary rounded-pill mt-4" id="rs2demoa">
                        Free Demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
            <div className="col-md-5 mt-4">
              <img src={rs2a} alt="no" id="rs2a"/>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col-lg-6 rs2">
                <img src={rs2b} alt="no" id="rs2a"/>
            </div>

            <div className="col-md-6 py-3 rs2">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                    <h1  id="rs2title-h">Prove Value</h1>
                    <p className="pl-4 mt-1" id="rs2title-c">
                        Demonstrate the value of marketing campaigns by backing up results with multiple data sets.
                    </p>
                    <ul className="mt-4 ml-4" style={{marginLeft:"10px"}}>
                        <li>
                        <p id="rs2title-c">
                        Quickly export data to Excel, CSV and RSS format to perform advanced analysis. 
                        </p>
                        </li>
                        <li>
                        <p id="rs2title-c">
                        Easily integrate Talkwalker social data into your CRM system, BI tools or common statistical tools to manipulate it efficiently. 
                        </p>
                        </li>
                        <li>
                        <p id="rs2title-c">
                        Combine social data with lead gen stats or revenue numbers to prove ROI.
                        </p>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary rounded-pill" id="rs2demob">
                        Free demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 as2">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                    <h1 id="rs2title-h">Raise Awareness</h1>
                    <p className="pl-4 mt-1" id="rs2ctitle-c">
                    Highlight success by sharing easy to understand reports that meet each department's needs.
                    </p>
                    <ul className="mt-4 ml-4" style={{marginLeft:"10px"}}>
                        <li>
                        <p id="rs2ctitle-c">
                        Add custom data to link social data to key indicators for each business function.
                        </p>
                        </li>
                        <li>
                        <p id="rs2ctitle-c">
                        Configure alerts and newsletters so that you and your colleagues receive a specific report by email without even needing to log into the tool. 
                        </p>
                        </li>
                        <li>
                        <p id="rs2ctitle-c">
                        Receive automatic updates of dashboards each time they are accessed, downloaded or emailed. 
                        </p>
                        </li>
                        <li>
                        <p id="rs2ctitle-c">
                        Schedule reports to every key stakeholder with<br/> one click.
                        </p>
                        </li>
                        <li>
                        <p id="rs2ctitle-c">
                        Share widgets, reports and dashboards with one click to make sure everyone is up to date
                        </p>
                        </li>                 
                    </ul>
                    <a href="#" className="btn btn-primary rounded-pill" id="rs2demob">
                        Free Demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
            <div className="col-md-5 mr-2 rs2">
              <img src={rs2c} alt="no" id="irs2c"/>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </section>
  );
}
