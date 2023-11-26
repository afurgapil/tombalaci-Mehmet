/* eslint-disable react-hooks/exhaustive-deps */
// import { useScore } from "../hooks/user/useScore";
import { useScore } from "../hooks/useScore";
function Score() {
  const score = useScore();

  return (
    <div className="flex justify-center items-center mx-2">
      {score !== null ? (
        <div className="flex justify-center items-center bg-yellow-500 border-4 border-yellow-600 border-solid">
          <div className="text-center bg-yellow-500">
            <h3 className="m-0 p-0">Your Score</h3>
            <h3 className="m-0 p-0">{score}</h3>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-yellow-500 border border-600">
          <div className="text-center bg-yellow-500">
            <h3 className="m-0 p-0">Your Score</h3>
            <h3 className="m-0 p-0">Loading...</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
