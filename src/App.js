import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import React, { useState } from "react";


export default function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks}/>
      </div>
    </>
  );
}
