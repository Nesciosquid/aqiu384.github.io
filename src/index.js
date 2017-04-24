import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';

import Routes from './routes';
//import fixStuff from './fixStuff.js';

ReactDOM.render(
 <Routes history={history} />,
 document.getElementById('root')
);
