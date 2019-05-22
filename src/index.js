import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/Context';
import Scoreboard from './containers/Scoreboard';
import './index.css';

ReactDOM.render(
    <Provider>
        <Scoreboard />
    </Provider>,
    document.getElementById('root')
);
