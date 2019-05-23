import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = id => {
    return {
        type: PlayerActionTypes.REMOVE_PLAYER,
        id
    };
};

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    };
}