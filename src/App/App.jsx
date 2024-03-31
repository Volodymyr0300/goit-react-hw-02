import Description from "./Description/Description";
import css from "./App.module.css";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options />
      <Feedback good={values.good} neutral={values.neutral} bad={values.bad} />
    </>
  );
}

export default App;
