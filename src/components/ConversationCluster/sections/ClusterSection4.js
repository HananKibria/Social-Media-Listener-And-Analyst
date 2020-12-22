import React from 'react'
import './ClusterSection4.css'
import imgcs4 from '../../../assets/img/clusters4.png'
export default function ClusterSection4() {
    return (
        <div>
            <div className="container-fluid p-4 s4">
            <div className="row">
            <div className="col-md-5">
              <img src={imgcs4} alt="no" id="cs4"/>
            </div>
            <div className="col-md-7 mt-md-5">
              <div className="iconic-list ml-6">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="s4title-h">  Consumer Insights<br/> Find white<br/> space opportunities  </h1>
                    <h5 className="mt-4" id="s4title-c">
                    Build a custom analysis on what consumers think, purchase or say in minutes, plot competitive landscapes and identify market gaps at a glance. Power your market research with a database of billions of social, traditional and digital consumer conversations. Enrich your insights by identifying links and proximity between topics and audiences, all without the effort of traditional manual research. 
                    </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="s4demo">
                    Free Demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}
