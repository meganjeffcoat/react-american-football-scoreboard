//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import TopRow from './components/topRow';
import Button from './components/Button';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [scoreLions, setScoreLions] = useState(0);
  const [scoreTigers, setScoreTigers] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow scoreTigers={scoreTigers} scoreLions={scoreLions}/>
        <BottomRow />
      </section>
      <Button scoreLions={scoreLions} scoreTigers={scoreTigers} setScoreLions={setScoreLions} setScoreTigers={setScoreTigers} />
    </div>
  );
}

export default App;
