import React from 'react'
import './ClusterSection6.css'
import imgcs6 from '../../../assets/img/clusters6.png'
import cls from '../../../assets/img/cls.png'
export default function ClusterSection6() {
    return (
          <div className="container-fluid s6">
            <div className="row">
            <div className="col-md-7 mt-md-5">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="s6title-h">  Content creation<br/> Surface powerful content ideas   </h1>
                    <h5 className="mt-4" id="s4title-c">
                    Understand the most engaging story angles of a discussion to pick your next content opportunity. Discover debate drivers, how subtopics relate to each other and why conversations are moving in a certain direction. Dig deeper to see hidden connections and identify content ideas that you will be able to profit from.                     </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="s6demo">
                    Free Demo
                    </a>
                  </div>
                </div>  
              </div>
            </div>
            <div className="col-md-4">
              <img src={imgcs6} alt="no" id="im"/>
            </div>
          </div>
          <div className="row s6p2">
            <div className="iconic-list s6center">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h1 id="s4title-h">  Uncover the unknown with<br/> Conversation Clusters   </h1>
                    <h5 className="mt-4" id="s6title-c">
                    AI-powered data exploration makes sense of millions of links and hidden<br/> connections in under a minute - whether you want to research new trends,<br/> analyze consumer insights or create winning content.
                    </h5>
                    <a href="#" className="btn btn-primary rounded-pill mt-5" id="s6demo">
                    Free Demo
                    </a>
                  </div>
                </div>  
              </div>
          </div>
          <div className="imgl">
            <img src={cls} alt="no" id="cls"/>

            <br/><br/><br/>
          </div>
        </div>
    )
}
