import "../style/hooks.scss";
import { useScore } from "../hooks/user/useScore";

function Score() {
  const score = useScore();

  return (
    <div id="score-container">
      {score !== null ? (
        <div id="border-out">
          <div id="border-in">
            <h3 className="border-in-item">Your Score</h3>
            <h3 className="border-in-item">{score}</h3>
          </div>
        </div>
      ) : (
        <div id="border-out">
          <div id="border-in">
            <h3 className="border-in-item">Your Score</h3>
            <h3 className="border-in-item">Loading...</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
