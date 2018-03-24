import React, { Component } from 'react';
import ControlledForm from './form/ControlledForm';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
			<div style={{ textAlign: 'left', marginLeft: 20, color: '#616161' }}>
				SEARCH FOR SESSIONS
			</div>
		</nav>
     	<ControlledForm />
      </div>
    );
  }
}

export default App;
