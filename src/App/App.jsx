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

  const updateFeedback = (feedbackType) => {
    setValues((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
    setVisible(true);
  };

  const resetFeedback = () => {
    setVisible(false);
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} />

      {isVisible ? (
        <Feedback
          totalFeedback={totalFeedback}
          good={values.good}
          neutral={values.neutral}
          bad={values.bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
