import React from 'react';
import { Consumer } from './Context';

const AddPlayerForm = () => {
    const playerInput = React.createRef();

    return (
        <Consumer>
            {({ actions }) => {
                const handleSubmit = (e) => {
                    e.preventDefault();
                    actions.addPlayer(playerInput.current.value);
                    e.currentTarget.reset();
                }

                return (
                    <div className="add-player-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                ref={playerInput}
                                placeholder="Enter a player's name"
                            />

                            <input
                                type="submit"
                                value="Add Player"
                            />
                        </form>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default AddPlayerForm;