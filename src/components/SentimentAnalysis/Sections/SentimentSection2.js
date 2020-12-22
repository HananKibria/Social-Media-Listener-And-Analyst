import React from 'react'
import './SentimentSection2.css'
import smiley from '../../../assets/img/smiley1.png'
import dart from '../../../assets/img/dart.png'
import trend from '../../../assets/img/trend1.png'
import contact from '../../../assets/img/contact.png'
import sentiment from '../../../assets/img/sentiment.png'
export default function SentimentSection2() {
    return (
    <section id="section2">
        <div className="page-section">
            <div className="container-fluid">
            <div className="row m-auto ss2">
                <div className="col-md-3 text-center">
                    <img src={smiley} alt="no" id="sslogo"/><br/><br/>
                    <h5>Know your reputation.</h5><br/>
                    <p>Measure your brand sentiment and see how it changes over time.</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={dart} alt="no" id="sslogo"/><br/><br/>
                    <h5>Prioritize your engagement.</h5>
                    <p>Spot crises and react to urgent negative social mentions first. </p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={trend} alt="no" id="sslogo"/><br/><br/>
                    <h5>Track reactions.</h5><br/>
                    <p>Know how people react to your marketing campaigns or product releases.</p>
                </div>
                <div className="col-md-3 text-center">
                    <img src={contact} alt="no" id="sslogo"/><br/><br/>
                    <h5>Analyze your competitors.</h5><br/>
                    <p>Identify your competitors' strengths and weaknesses. </p>
                </div>
            </div>
            <div className="row"> 
                <div className="col-md-8 iconic-list m-auto text-center ss2b">
                    <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                        <h2 id="title-h">Measure your brand's reputation.</h2>
                        <h5 className="mt-4" id="title-c">
                        Look at Mention Statistics to see overall trends and patterns in your online presence</h5>
                    </div>
                    </div>  
                </div>
            </div> 
            <div>
                <img src={sentiment} alt="no" className="mt-5 sentimg"/>
                <div className="pt-5">
                    <h5 id="content">
                        Have you ever wondered what your brand's overall social media sentiment is? Is it positive, negative, or<br/> neutral? Percentage-wise, do they complain or praise it more often? Or maybe, they don't express any<br/> specific feelings and just ask neutral questions instead? 
                    </h5>
                    <h5 id="content">
                        Monitoring sentiment and digging deeper into what positive and negative trends say is vital for every<br/> company. This is why social media sentiment analysis tools are crucial for any marketing strategy. Social<br/> listening sentiment analysis measures social media sentiment with the help of sentiment analysis tools.<br/> It divides social sentiment into positive, negative, and neutral.                </h5>
                    <h5 id="content">
                        To access sentiment analysis in Awario (a social listening tool with extensive sentiment analysis features)<br/>, go to Mention Statistics and look at the graph that shows the growth of neutral, positive, and negative<br/>sentiment. Alternatively, watch the social media sentiment on the Dashboard in real time                
                    </h5><br/><br/>
                    <a href="#" id="s2link">Get started for free </a>

                </div>
            </div>
        </div>
      </div>
    </section>
    )
}
