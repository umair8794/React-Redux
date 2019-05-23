import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => {
    return (
        <div className="header">
            <Stats players={players} />
            <h1>{ title }</h1>
            <Stopwatch />
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired
};

Header.defaultProps = {
    title: 'Scoreboard'
};

export default Header;