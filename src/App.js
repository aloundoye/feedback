import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import React, { useState } from "react";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks}/>
        <FeedbackList feedbacks={feedbacks} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}
