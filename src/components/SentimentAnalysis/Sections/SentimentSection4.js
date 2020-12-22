import React from 'react'
import './SentimentSection4.css'
import sentiment from '../../../assets/img/sentiment3.png'
export default function SentimentSection4() {
    return (
    <section id="section4">
        <div className="page-section">
            <div className="container-fluid">
            <div className="row"> 
                <div className="col-md-9 iconic-list m-auto text-center">
                    <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                        <h2 id="title-h">Track the reaction to your marketing campaigns.</h2>
                        <h5 className="mt-4" id="title-c">
                        Set up an alert for your campaign or product launch in Awario and watch the reaction.
                        </h5>
                    </div>
                    </div>  
                </div>
            </div> 
            <div>
                <img src={sentiment} alt="no" className="mt-5 sentimg"/>
                <div className="pt-5">
                    <h5 id="s4content">
                    Sentiment analysis tools ensure that you get to know how people react to your marketing campaign,<br/> event, product launch, feature update, blog post, or whatever it is in real time. Ongoing social media<br/> sentiment analysis makes sure you know if people are positive or negative about it and if you should<br/> stop immediately, change something, or keep going. Analyze the sentiment<br/> using tools for sentiment analysis and spot any problem as soon as it arises, because, let's face it, people these days<br/> say something online before they do absolutely anything else.                     
                    </h5>
    
                   <br/><br/>
                    <a href="#" id="s4link">Sign up for free </a>

                </div>
            </div>
        </div>
      </div>
    </section>
    )
}
