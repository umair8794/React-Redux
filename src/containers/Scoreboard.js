import React, { Component } from 'react';
/*import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';*/
import Header from '../components/Header';
import PlayerList from '../components/PlayerList';
import AddPlayerForm from '../components/AddPlayerForm';

class Scoreboard extends Component {

    /*static propTypes = {
        players: PropTypes.array.isRequired
    }*/

    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    }

    // player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState(prevState => {
            return {
                score: prevState.players[index].score += delta
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: prevState.players.concat({
                    name,
                    score: 0,
                    id: this.prevPlayerId += 1
                })
            }
        });
    }

    handleRemovePlayer = (id) => {
        this.setState(prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    getHighScore = () => {
        const scores = this.state.players.map(player => player.score);
        const highScore = Math.max(...scores);
        return highScore
            ? highScore
            : null;
    }

    render() {
        /*const { dispatch, players } = this.props;
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);;
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);*/

        const highScore = this.getHighScore();
        return (
            <div className="scoreboard">
                <Header players={this.state.players} />
                <PlayerList
                    players={this.state.players}
                    highScore={highScore}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleScoreChange}
                />
                <AddPlayerForm addPlayer={this.handleAddPlayer} />
            </div>
        );
    }
}

/*const mapStateToProps = state => {
    return {
        players: state
    };
};*/

export default Scoreboard;
//export default connect(mapStateToProps)(Scoreboard);