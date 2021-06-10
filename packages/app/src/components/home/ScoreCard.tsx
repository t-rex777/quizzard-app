import React from "react";
import { useGame } from "./../../context/GameProvider";

interface Props {}

const ScoreCard: React.FC<Props> = () => {
  const {
    state: { scores },
  } = useGame();
  console.log(scores);
  return (
    <div>
      <h1 className="text-center text-l">Your Scores</h1>
      <ul className="scoreCard">
        {scores?.map((data) => {
          if (data.quiz === "60c1c2725895490c307a7e70") {
            return (
              <li key={data.quiz} className="scoreCard__item">Harry Potter : {data.score}</li>
            );
          }
          if (data.quiz === "60c1c2725895490c307a7e71") {
            return (
              <li key={data.quiz} className="scoreCard__item">F.R.I.E.N.D.S : {data.score}</li>
            );
          }
          if (data.quiz === "60c1c2725895490c307a7e72") {
            return <li key={data.quiz} className="scoreCard__item">Naruto : {data.score}</li>;
          }
          if (data.quiz === "60c1c2725895490c307a7e73") {
            return (
              <li key={data.quiz} className="scoreCard__item">
                Marvel Cinematics : {data.score}
              </li>
            );
          }
          return "" ;
        })}
        {/* <li className="scoreCard__item">
          Harry Potter : {scores ? scores[0]?.score : 0}
        </li>
        <li className="scoreCard__item">
          F.R.I.E.N.D.S : {scores ? scores[1]?.score : 0}
        </li>
        <li className="scoreCard__item">
          Naruto : {scores ? scores[2]?.score : 0}
        </li>
        <li className="scoreCard__item">
          Marvel Cinematics :{scores ? scores[3]?.score : 0}
        </li> */}
      </ul>
    </div>
  );
};

export default ScoreCard;
