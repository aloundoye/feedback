import React from 'react'
import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types'


function FeedbackList({feedbacks, handleDelete}) {
  if(!feedbacks || feedbacks.length === 0){
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {feedbacks.map((feedback)=>(
        <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FeedbackList