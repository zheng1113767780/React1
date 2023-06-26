import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    render() {
        return (
            <div>
                <h3>react组件</h3>
            </div>
        );
    }
    componentDidMount(){
        axios.get("/data")
        .then(res=>{
            console.log("res.data",res.data)
        })
    }
}
export default App;