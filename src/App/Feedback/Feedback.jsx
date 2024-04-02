import css from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  feedbackRate,
}) {
  return (
    <>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {feedbackRate}</p>
      </div>
    </>
  );
}
