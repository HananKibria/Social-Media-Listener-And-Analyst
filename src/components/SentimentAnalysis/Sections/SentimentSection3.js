import React from 'react'
import './SentimentSection3.css'
import sentiment from '../../../assets/img/sentiment2.png'
export default function SentimentSection3() {
    return (
    <section id="section3">
        <div className="page-section">
            <div className="container-fluid">
            <div className="row"> 
                <div className="col-md-9 iconic-list m-auto text-center ss3">
                    <div className="iconic-item wow fadeInUp">
                    <div className="iconic-content">
                        <h2 id="title-h">Answer important mentions first.</h2>
                        <h5 className="mt-4" id="title-c">
                        Use the filter to reveal negative mentions, answer complaints first, and prevent a possible crisis.                         </h5>
                    </div>
                    </div>  
                </div>
            </div> 
            <div>
                <img src={sentiment} alt="no" className="mt-5 sentimg"/>
                <div className="pt-5">
                    <h5 id="s3content">
                    Not all mentions online are equally important. They don't require the same kind of engagement, either.<br/> This means, mentions with only positive sentiment or only negative mentions in your feed might be very<br/> helpful. For example, with the help of a sentiment tool like Awario, you could at first reply to all burning<br/>complaints, prevent a social media crisis (which is a common thing), and make sure your product and<br/> your company don't require urgent attention.                    
                    </h5>
                    <h5 id="s3content">
                    When that's done, you can move to positive brand mentions, and comment with "Thank you" to all<br/> relevant mentions. You could also sort positive and negative mentions by Reach to see which ones<br/> attract the most attention and, therefore, require a quicker response. Negative mentions with bigger<br/> reach are more dangerous, while positive mentions with bigger reach are promising: their authors could<br/> probably be turned into brand influencers.                    
                    </h5>
                   <br/><br/>
                    <a href="#" id="s3link">Sign up for free </a>

                </div>
            </div>
        </div>
      </div>
    </section>
    )
}
