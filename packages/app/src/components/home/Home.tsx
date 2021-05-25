import React, { useEffect } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import "./home.css";
import { getAllQuizzes } from "../Quiz/helper";

const Home: React.FC = (props) => {
  useEffect(() => {
    (async () => {
      const data = await getAllQuizzes();
      console.log(data);
    })();
  }, []);
  return (
    <div>
      <div className="banner"></div>
      <div className="cards">
        <Link to="/quiz/harrypotter">
          <HomeCard
            title="Harry Potter"
            description="wizardy"
            image="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?quality=85&w=766&h=512&crop=1"
          />
        </Link>

        <HomeCard
          title="Harry Potter"
          description="wizardy"
          image="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?quality=85&w=766&h=512&crop=1"
        />
        <HomeCard
          title="Harry Potter"
          description="wizardy"
          image="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?quality=85&w=766&h=512&crop=1"
        />
        <HomeCard
          title="Harry Potter"
          description="wizardy"
          image="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?quality=85&w=766&h=512&crop=1"
        />
      </div>
    </div>
  );
};

export default Home;
