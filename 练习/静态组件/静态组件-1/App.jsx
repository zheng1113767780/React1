import React, { Component } from 'react';
import axios from 'axios';
import Hello from './Hello';

class App extends Component {
    render() {
        return (
            <div>
                <h3>App</h3>
                <Hello name="tom"></Hello>
            </div>
        );
    }
}
export default App;