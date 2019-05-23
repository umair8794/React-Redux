import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({ index }) => {
    return (
        <Consumer>
            {({ actions, players }) => {
                return (
                    <div className="counter">
                        <button className="counter-action decrement" onClick={() => actions.changeScore(index, -1)}> - </button>
                        <div className="counter-score">{ players[index].score }</div>
                        <button className="counter-action increment" onClick={() => actions.changeScore(index, 1)}> + </button>
                    </div>
                )
            }}
        </Consumer>

    );
};

Counter.propTypes = {
    index: PropTypes.number.isRequired
};

export default Counter;