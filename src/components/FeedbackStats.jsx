import React from 'react'

function FeedbackStats({ feedbacks}) {
    //Calculate ratings average
    let average = feedbacks.reduce((acc, cur)=>{
        return acc + cur.rating
    }, 0) / feedbacks.length;

    average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
        <h1>{feedbacks.length} Reviews</h1>
        <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats