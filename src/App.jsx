import React, { Component } from 'react';
import Reg from './components/Reg';
import Login from './components/Login';

class App extends Component {
    render() {
        return (
            <div>
                <h3>App</h3>
                <Reg></Reg>
                <hr />
                <Login></Login>
            </div>
        );
    }
}
export default App;