import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './Context';
import Counter from './Counter';
import HighScoreIcon from './HighScoreIcon';

class Player extends PureComponent {
    static propTypes = {
        index: PropTypes.number.isRequired,
        isHighScore: PropTypes.bool.isRequired
    };

    render() {
        const {
            index,
            isHighScore
        } = this.props;

        return (
            <Consumer>
                {({ actions, players }) => {
                    return (
                        <div className="player">
                            <div className="player-name">
                                <a className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</a>
                                <HighScoreIcon isHighScore={isHighScore} />
                                { players[index].name }
                            </div>
                            <div className="player-score">
                                <Counter index={index} />
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Player;