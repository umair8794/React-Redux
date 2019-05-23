import React from 'react';
import PropTypes from 'prop-types';

const AddPlayerForm = ({ addPlayer }) => {
    const playerInput = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(playerInput.current.value);
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
};

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
};

export default AddPlayerForm;