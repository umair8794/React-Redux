import React from 'react';
import ReactDOM from 'react-dom';
/*import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PlayerReducer from './reducers/player';*/
import Scoreboard from './containers/Scoreboard';
import './index.css';

/*const store = createStore(
    PlayerReducer
)*/

ReactDOM.render(
    /*<Provider store={store}>
        <Scoreboard />
    </Provider>,*/
    <Scoreboard />,
    document.getElementById('root')
);
