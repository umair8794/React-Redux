import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import PlayerList from '../components/PlayerList';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired,
        selectedPlayerIndex: PropTypes.number.isRequired
    }

    getHighScore = (players) => {
        const scores = players.map(player => player.score);
        const highScore = Math.max(...scores);
        return highScore
            ? highScore
            : null;
    }

    render() {
        const { dispatch, players, selectedPlayerIndex } = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
        const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

        const highScore = this.getHighScore(players);

        let selectedPlayer;
        if (selectedPlayerIndex !== -1) {
            selectedPlayer = players[selectedPlayerIndex];
        }

        return (
            <div className="scoreboard">
                <Header players={players} />
                <PlayerList
                    players={players}
                    highScore={highScore}
                    removePlayer={removePlayer}
                    changeScore={updatePlayerScore}
                    selectPlayer={selectPlayer}
                />
                <AddPlayerForm addPlayer={addPlayer} />
                <div className="player-detail">
                    <PlayerDetail player={selectedPlayer} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players,
        selectedPlayerIndex: state.selectedPlayerIndex
    };
};

export default connect(mapStateToProps)(Scoreboard);