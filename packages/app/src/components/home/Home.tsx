import React from "react";
import HomeCard from "./HomeCard";
import { useGame } from "../../context/GameProvider";
import "./home.css";
import Nav from "./../Nav/Nav";

const Home: React.FC = () => {
  const { state } = useGame();
  return (
    <>
      <Nav />
      <div className="home">
        <div className="banner">
          <h1 className="banner_text">WELCOME TO QUIZZARD!</h1>
        </div>
        <div className="main">
          <div className="cards">
            {state.quizzes.map((quiz) => (
              <HomeCard
                key={quiz._id}
                id={quiz._id}
                title={quiz.name}
                description={quiz.description}
                thumbnail={quiz.thumbnail}
              />
            ))}
          </div>
          <div className="scores">hell0</div>
        </div>
      </div>
    </>
  );
};

export default Home;
