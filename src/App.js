import React, { Component } from 'react';

import Calculator from './components/Calculator';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
