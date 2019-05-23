import * as PlayerActionTypes from '../actiontypes/player';

const initialState = [
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
];

export default function Player(action, state = initialState) {
    switch (action.type) {
        case PlayerActionTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];

        case PlayerActionTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        case PlayerActionTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    };
                }

                return player;
            });

        default:
            return state;
    }
}