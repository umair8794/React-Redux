import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ score, changeScore, index }) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <div className="counter-score">{ score }</div>
            <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    )
};

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default Counter;