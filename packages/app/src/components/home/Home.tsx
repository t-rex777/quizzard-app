import React from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { useGame } from "../../context/GameProvider";
import "./home.css";
import Base from './../Base/Base';

const Home: React.FC = (props) => {
  const { state } = useGame();
    return (
    <Base className = "">
      {/* <div className="banner"></div> */}
      <div className="cards">
        {state.quizzes.map((quiz) => (
          <Link to={`/quiz/${quiz._id}`} key={quiz._id}>
            <HomeCard
              title={quiz.name}
              description={quiz.description}
              thumbnail={quiz.thumbnail}
            />
          </Link>
        ))}
      </div>
    </Base>
  );
};

export default Home;
