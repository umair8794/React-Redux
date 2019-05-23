import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name
    };
};

export const removePlayer = index => {
    return {
        action: PlayerActionTypes.REMOVE_PLAYER,
        index
    };
};

export const updatePlayerScore = (index, score) => {
    return {
        action: PlayerActionTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    };
}