import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import PlayerList from '../components/PlayerList';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {

    static propTypes = {
        players: PropTypes.array.isRequired
    }

    getHighScore = (players) => {
        const scores = players.map(player => player.score);
        const highScore = Math.max(...scores);
        return highScore
            ? highScore
            : null;
    }

    render() {
        const { dispatch, players } = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        const highScore = this.getHighScore(players);

        return (
            <div className="scoreboard">
                <Header players={players} />
                <PlayerList
                    players={players}
                    highScore={highScore}
                    removePlayer={removePlayer}
                    changeScore={updatePlayerScore}
                />
                <AddPlayerForm addPlayer={addPlayer} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state
    };
};

export default connect(mapStateToProps)(Scoreboard);