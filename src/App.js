//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./components/BottomRow";
import TopRow from './components/topRow';
import Button from './components/Button';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [valueLions, setValueLions] = useState(0);
  const [valueTigers, setValueTigers] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow valueTigers={valueTigers} valueLions={valueLions}/>
        <BottomRow />
      </section>
      <Button valueLions={valueLions} valueTigers={valueTigers} setValueLions={setValueLions} setValueTigers={setValueTigers} />
    </div>
  );
}

export default App;
