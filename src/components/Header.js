import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ title }) => {
    return (
        <div className="header">
            <Stats />
            <h1>{ title }</h1>
            <Stopwatch />
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

Header.defaultProps = {
    title: 'Scoreboard'
};

export default Header;