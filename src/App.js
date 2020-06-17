//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import ScoreBox from "./ScoreBox";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);

  const scoreHandler = (homeAwayTeam, scoreAmount) => {
    if(homeAwayTeam === 'home') {
      setHomeScore(homeScore += scoreAmount);
    } else {
      setAwayScore(awayScore += scoreAmount);
    }
  };

  const pad = (num, size) => {
    var s = `${num}`;
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if(seconds === 59) {
        setSeconds(0);
        setMinutes(minutes => minutes + 1);
      } else {
        setSeconds(seconds => seconds + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, minutes]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <ScoreBox homeAway="home" teamName="Lions" score={homeScore}/>
          <div className="timer">{pad(minutes, 2)}:{pad(seconds, 2)}</div>
          <ScoreBox homeAway='away' teamName='Tigers' score={awayScore}/>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => scoreHandler('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => scoreHandler('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => scoreHandler('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => scoreHandler('away', 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
