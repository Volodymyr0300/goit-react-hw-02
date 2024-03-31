import css from "./Feedback.module.css";

export default function Feedback({ good, neutral, bad }) {
  const total = good + neutral + bad;
  return (
    <>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {"100%"}</p>
      </div>
    </>
  );
}
