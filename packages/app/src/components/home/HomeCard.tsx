import React from "react";
import "./home.css";

interface HomeCardProps {
  title: string;
  description: string;
  image: string;
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
  return (
    <>
      <div className="homeCard">
        <img className="homeCard__image" src={props.image} alt="cardImage" />
        <p className="homeCard__title">{props.title}</p>
      </div>
    </>
  );
};

export default HomeCard;
