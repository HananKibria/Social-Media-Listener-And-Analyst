import React from 'react'
import './ClusterSection2.css'
import imgcs2 from '../../../assets/img/clusters2.png'
export default function ClusterSection2() {
    return (
        <div className="container-fluid s2">
            <div className="row p-5">
            <div className="col-md-5">
                <img src={imgcs2} alt="no" id="cs2"/>
            </div>
            <div className="col-md-7 mt-md-5">
              <div className="iconic-list ml-6">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="ctitle-h"> Trend Research<br/> See what’s hidden - quickly </h1>
                    <h5 className="mt-4" id="ctitle-c">
                    Conversation Clusters map any topic visually, showing you the trends and connections behind millions of social, media and consumer data points in real time. Semantically linked clusters help you detect emerging themes and trending conversations, follow shifts in public opinion and gain a full understanding of the situation in minutes.                     </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="cdemo">
                    Free Demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
    )
}
