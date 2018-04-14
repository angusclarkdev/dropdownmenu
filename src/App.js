import React, { Component } from 'react';
import { Container} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

import './css/App.css';
import DropMenu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="app">
      <Container text textAlign = 'center'>
      < DropMenu />
    </Container>
    </div>
    );
  }
}

export default App;
