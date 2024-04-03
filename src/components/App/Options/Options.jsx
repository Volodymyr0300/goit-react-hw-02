import css from "./Options.module.css";

export default function Options({ updateFeedback, resetFeedback, isVisible }) {
  return (
    <>
      <div>
        <button onClick={() => updateFeedback("good")}>Good</button>
        <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        <button onClick={() => updateFeedback("bad")}>Bad</button>
        {isVisible && <button onClick={() => resetFeedback()}>Reset</button>}
      </div>
    </>
  );
}
