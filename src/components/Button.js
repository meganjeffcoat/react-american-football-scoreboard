import React from 'react';
import '../App.css';

const Button = (props) => {
    return (
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => props.setValueLions(props.valueLions + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => props.setValueLions(props.valueLions + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => props.setValueTigers(props.valueTigers + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => props.setValueTigers(props.valueTigers + 3)}>Away Field Goal</button>
        </div>
      </section>
    )
};

export default Button;