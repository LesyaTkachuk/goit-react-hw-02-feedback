import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.scss";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const feedbacks = Object.keys(options);

  return (
    <div className={styles.wrapper}>
      {feedbacks.map((feedback) => (
        <button
          type="button"
          key={feedback}
          onClick={() => onLeaveFeedback(feedback)}
          className={styles.button}
        >
          {feedback}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
