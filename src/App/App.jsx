import css from "./App.module.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setValues((prevValue) => ({
      ...prevValue,
      [feedbackType]: prevValue[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback good={values.good} neutral={values.neutral} bad={values.bad} />
    </>
  );
}

export default App;
