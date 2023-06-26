import React, { Component } from 'react';
// import Img1 from './img/1.gif'
// import Style from './css/public.css'
class App extends Component {
    render() {
        let arr = [
            <li key='0'>tom</li>,
            <li key='1'>jarry</li>,
            <li key='2'>susan</li>,
            <li key='3'>赵四</li>
        ]
        return (
            <div>
                <ul>
                    {
                        arr
                    }
                </ul>
            </div>

        )
    }
}
export default App