import React from "react";
import ReactDOM from "react-dom";
import { GameProvider } from "./context/GameProvider";
import "./index.css";
import QuizRoutes from "./QuizRoutes";

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <QuizRoutes />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
