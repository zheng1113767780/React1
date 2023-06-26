import React from 'react';

const Hello = props => {
    console.log("Hello被调用了")
    let {name} = props
        return (
            <div>
                <h3>Hellow组件</h3>
                <p>name:{name}</p>
            </div>
        );
    }

export default Hello;