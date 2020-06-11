import React from "react";
import "./App.css";

const ScoreBox = props => {
  return (
    <div className={props.homeAway}>
        <h2 className={`${props.homeAway}__name`}>{props.teamName}</h2>
        <div className={`${props.homeAway}__score`}>{props.score}</div>
    </div>
  );
};

export default ScoreBox;
