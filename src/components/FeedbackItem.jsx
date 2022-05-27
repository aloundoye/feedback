import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ feedback, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button className="close">
        <FaTimes onClick={() => handleDelete(feedback.id)} color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
