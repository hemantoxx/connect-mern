import React from "react";
import './FeedbackForm.css';

const FeedbackForm = () => {
    return (
        <div className='feedback-wrapper'>
            <h1>Feedback</h1>
            <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfirVrCs8ma11dpzqgMLollKS_pIb2V5nALG1n-nGfaNX7SJw/viewform?embedded=true" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Feedback Form"
                allowFullScreen
            >
                Loading…
            </iframe>
        </div>
    );
};

export default FeedbackForm;
