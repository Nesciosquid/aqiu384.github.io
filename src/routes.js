import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import App from './App.js';
import PersonaPage from './PersonaPage.jsx';

const Routes = (props) => (
   <Router {...props}>
     <div>
       <App />
       <Route path="/persona/:personaName" component={PersonaPage} />
     </div>
   </Router>
);
export default Routes;
