import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonaSelector from './PersonaSelector.jsx';
import personas from './util/personas.json';
import { Redirect } from 'react-router';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToPersona = this.redirectToPersona.bind(this);
    this.state = {
      selected: undefined,
    };
  }
  render() {
    return (
      <div className="App">
        <PersonaSelector
          personas={personas}
          value={this.state.selected}
          onChange={this.redirectToPersona}
        />
      </div>
    );
  }

  redirectToPersona(personaName) {
    if (personaName) {
      this.setState({
        selected: personaName,
      });
      this.context.router.history.push(`/persona/${personaName}`);
    }
  }
}

App.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      replace: PropTypes.func.isRequired
    }).isRequired,
    staticContext: PropTypes.object
  }).isRequired
};

export default App;
