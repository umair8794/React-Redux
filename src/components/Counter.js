import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ score, changeScore, index }) => {
    const handleChangeScore = (event, index, delta) => {
        event.stopPropagation();
        changeScore(index, delta);
    }
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={(event) => handleChangeScore(event, index, -1)}> - </button>
            <div className="counter-score">{ score }</div>
            <button className="counter-action increment" onClick={(event) => handleChangeScore(event, index, 1)}> + </button>
        </div>
    )
};

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default Counter;