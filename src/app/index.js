import React from "react"
import {render} from 'react-dom'
import {Router, browserHistory, Route} from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes}/>,
    window.document.getElementById('root')
);