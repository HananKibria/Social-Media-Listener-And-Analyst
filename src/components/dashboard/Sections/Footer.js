import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <div>
            <footer className="site-footer foot">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 mt-6" id="c2">
                        <h4 id="f-h">Features</h4><br/>
                        <a href="http://localhost:3000/sentimentanalysis"><p id="f-h">Sentiment Analysis</p></a>
                        <a href="http://localhost:3000/conversationcluster" ><p id="f-h">Conversation Cluster</p></a>
                        <a href="http://localhost:3000/analytics" ><p id="f-h">Analytics</p></a>
                    </div>

                    <div className="col-md-2 mt-6" id="c3">
                        <h4 id="f-h">Resources</h4><br/>
                        <a href="http://localhost:3000/blogs"><p id="f-h">Blogs</p></a>
                        <a href="http://localhost:3000/reports"><p id="f-h">Reports</p></a>
                        
                    </div>
                    <div className="col-md-2 mt-6 mb-6">
                        <h4 id="f-h">Pricing</h4><br/>
                        <a href="http://localhost:3000/pricing"><p id="f-h">Plans</p></a><br/><br/><br/>
                    </div>
                    <div className="col-md-2 mt-6 mb-6" id="c">
                        <h4 id="f-h">About us</h4><br/>
                        <a href="http://localhost:3000/aboutus" ><p id="f-h">About</p></a>
                        <a href="http://localhost:3000/contact"><p id="f-h">Contact Us</p></a>
                        
                    </div>
                    <div className="col-md-3 mt-6 mb-6 ml-3" >
                    <h4 id="f-h">Must Read</h4><br/>
                    </div>
                </div>
                <hr/>
            </div>
            </footer>
        </div>
    )
}
