import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import HighScoreIcon from './HighScoreIcon';

class Player extends PureComponent {
    static propTypes = {
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool.isRequired,
        removePlayer: PropTypes.func.isRequired,
        changeScore: PropTypes.func.isRequired
    };

    render() {
        const {
            name,
            score,
            index,
            isHighScore,
            removePlayer,
            changeScore
        } = this.props;

        return (
            <div className="player">
                <div className="player-name">
                    <a className="remove-player" onClick={() => removePlayer(index)}>✖</a>
                    <HighScoreIcon isHighScore={isHighScore} />
                    { name }
                </div>
                <div className="player-score">
                    <Counter
                        score={score}
                        changeScore={changeScore}
                        index={index}
                    />
                </div>
            </div>
        );
    }
}

export default Player;