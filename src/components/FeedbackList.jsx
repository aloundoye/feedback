import React from 'react'
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'


function FeedbackList({feedbacks}) {
  if(!feedbacks || feedbacks.length === 0){
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback)=>(
        <FeedbackItem key={feedback.id} feedback={feedback}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FeedbackList