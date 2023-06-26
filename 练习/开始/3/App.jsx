import React, { Component } from 'react';
// import Img1 from './img/1.gif'
// import Style from './css/public.css'
class App extends Component {
    render() {
        let arr = ["tom", "jarry", "susan", "赵四"]
        return (
            <div>
                {
                    arr.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
export default App