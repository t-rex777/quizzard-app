import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

interface HomeCardProps {
  id : string;
  title: string;
  description: string;
  thumbnail: string;
}

const HomeCard: React.FC<HomeCardProps> = (props) => {
  return (
    <>
      <div className="homeCard">
        <div className="homeCard__image">
          <img src={props.thumbnail} alt="cardImage" />
        </div>

        <div className="homeCard__info">
          <p className="homeCard__title">{props.title}</p>
          <p className="homeCard__desc">{props.description}</p>
          <Link to={`/quiz/${props.id}`} className="homeCard__btn" style={{textDecoration:"none"}}>
            <button className="btn btn-primary">Play</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
