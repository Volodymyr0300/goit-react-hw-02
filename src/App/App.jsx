import css from "./App.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";
import Notification from "./Notification/Notification";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const [isVisible, setVisible] = useState(false);

  const feedbackRate = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setValues((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
    setVisible(true);
  };

  const resetFeedback = () => {
    setValues({ good: 0, neutral: 0, bad: 0 });
    setVisible(false);
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        isVisible={isVisible}
      />

      {isVisible ? (
        <Feedback
          totalFeedback={totalFeedback}
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
          feedbackRate={feedbackRate}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
