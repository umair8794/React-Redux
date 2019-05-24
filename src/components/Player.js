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
        changeScore: PropTypes.func.isRequired,
        selectPlayer: PropTypes.func.isRequired
    };

    render() {
        const {
            name,
            score,
            index,
            isHighScore,
            removePlayer,
            changeScore,
            selectPlayer
        } = this.props;

        const handleRemovePlayer = (event) => {
            event.stopPropagation();
            removePlayer(index);
        }

        return (
            <div className="player" onClick={() => selectPlayer(index)}>
                <div className="player-name">
                    <a className="remove-player" onClick={handleRemovePlayer}>✖</a>
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