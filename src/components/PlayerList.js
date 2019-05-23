import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

const PlayerList = ({ players, highScore, removePlayer, changeScore, selectPlayer }) => {
    return (
        <div className="players">
            {players.map((player, index) =>
                <Player
                    key={index}
                    name={player.name}
                    score={player.score}
                    index={index}
                    isHighScore={player.score === highScore}
                    removePlayer={removePlayer}
                    changeScore={changeScore}
                    selectPlayer={selectPlayer}
                />
            )}
        </div>
    );
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired,
    highScore: PropTypes.number,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired,
    selectPlayer: PropTypes.func.isRequired
};

export default PlayerList;